'use server'

import { getSupabaseAdmin } from '@/lib/supabase-admin'
import { resend, EMAIL_FROM, NOTIFICATION_EMAIL } from '@/lib/resend'
import { leadNotificationEmail, leadConfirmationEmail } from '@/lib/email-templates'
import Anthropic from '@anthropic-ai/sdk'

export interface BrandSnapshot {
  brandName: string
  category: string
  estimatedMarketplace: string
  topProducts: string[]
  firstImpression: string
}

function getAnthropicClient(): Anthropic | null {
  const key = process.env.ANTHROPIC_API_KEY
  if (!key) return null
  return new Anthropic({ apiKey: key })
}

async function generateBrandSnapshot(url: string): Promise<BrandSnapshot | null> {
  try {
    const client = getAnthropicClient()
    if (!client) return null

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 300,
      messages: [
        {
          role: 'user',
          content: `Based on this website URL: ${url}

Give me a brief brand snapshot in JSON format only (no markdown, no code fences, just the raw JSON object):
{
  "brandName": "...",
  "category": "...",
  "estimatedMarketplace": "Amazon, Walmart, DTC, or Other",
  "topProducts": ["product1", "product2"],
  "firstImpression": "One sentence about the brand"
}

If you can't determine something, use "Unknown" as the value. For topProducts, list 2-3 if visible, or ["Unknown"] if not clear.`,
        },
      ],
    })

    const text =
      response.content[0].type === 'text' ? response.content[0].text : ''
    // Extract JSON from response (handle potential markdown fences)
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) return null

    const parsed = JSON.parse(jsonMatch[0]) as BrandSnapshot
    // Ensure topProducts is always an array
    if (!Array.isArray(parsed.topProducts)) {
      parsed.topProducts = [String(parsed.topProducts)]
    }
    return parsed
  } catch (err) {
    console.error('Brand snapshot generation failed:', err)
    return null
  }
}

export async function submitLead(formData: FormData) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    let website_url = (formData.get('website_url') as string)?.trim() || null
    if (website_url && !/^https?:\/\//i.test(website_url)) {
      website_url = `https://${website_url}`
    }
    const revenue_range = (formData.get('revenue_range') as string) || null
    const challenge = (formData.get('challenge') as string) || null

    if (!name || !email) {
      return { error: 'Name and email are required.' }
    }

    // Try Supabase insert — non-blocking if it fails
    let dbSuccess = false
    try {
      const supabase = getSupabaseAdmin()
      if (supabase) {
        const { error } = await supabase
          .from('leads')
          .insert({ name, email, website_url, revenue_range, challenge })
        if (error) {
          console.error('Supabase insert error:', error.message)
        } else {
          dbSuccess = true
        }
      } else {
        console.error('Supabase admin client not available — missing env vars')
      }
    } catch (dbError) {
      console.error('Supabase error:', dbError)
    }

    // Always send notification email to Robert (this is the critical path)
    try {
      await resend.emails.send({
        from: EMAIL_FROM,
        to: NOTIFICATION_EMAIL,
        subject: `New Strategy Session Request from ${name}`,
        html: leadNotificationEmail({ name, email, website_url, revenue_range, challenge }),
      })
    } catch (notifyError) {
      console.error('Failed to send notification email:', notifyError)
      // If both DB and email fail, the form is truly broken
      if (!dbSuccess) {
        return { error: 'Something went wrong. Please email robert@theroberthu.com directly.' }
      }
    }

    // Send confirmation email to the lead (non-critical, best-effort)
    try {
      await resend.emails.send({
        from: EMAIL_FROM,
        to: email,
        subject: 'Your Strategy Session Request - Robert Hu',
        html: leadConfirmationEmail(name),
      })
    } catch (confirmError) {
      console.error('Failed to send confirmation email:', confirmError)
    }

    // Generate Brand Snapshot if URL was provided (non-blocking)
    let snapshot: BrandSnapshot | null = null
    if (website_url) {
      snapshot = await generateBrandSnapshot(website_url)
    }

    return { success: true, snapshot }
  } catch (err) {
    console.error('submitLead unexpected error:', err)
    return { error: 'Something went wrong. Please try again or email robert@theroberthu.com directly.' }
  }
}
