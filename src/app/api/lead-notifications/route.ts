import { NextRequest, NextResponse } from 'next/server'
import { resend, EMAIL_FROM, NOTIFICATION_EMAIL } from '@/lib/resend'
import { leadNotificationEmail, leadConfirmationEmail } from '@/lib/email-templates'
import Anthropic from '@anthropic-ai/sdk'

interface BrandSnapshot {
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

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) return null

    const parsed = JSON.parse(jsonMatch[0]) as BrandSnapshot
    if (!Array.isArray(parsed.topProducts)) {
      parsed.topProducts = [String(parsed.topProducts)]
    }
    return parsed
  } catch (err) {
    console.error('Brand snapshot generation failed:', err)
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email } = body
    let { website_url } = body
    const revenue_range = body.revenue_range || null
    const challenge = body.challenge || null

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Normalize URL (client sends raw value; server action normalized separately for DB)
    if (website_url && !/^https?:\/\//i.test(website_url)) {
      website_url = `https://${website_url}`
    }
    website_url = website_url?.trim() || null

    const leadData = { name, email, website_url, revenue_range, challenge }

    // Snapshot (the slow part — fine here since client didn't await this route)
    const snapshot = website_url ? await generateBrandSnapshot(website_url) : null

    // Notification email to Robert
    try {
      await resend.emails.send({
        from: EMAIL_FROM,
        to: NOTIFICATION_EMAIL,
        subject: `New Strategy Session Request from ${name}`,
        html: leadNotificationEmail(leadData, snapshot),
      })
    } catch (e) {
      console.error('Notification email failed:', e)
    }

    // Confirmation email to lead
    try {
      await resend.emails.send({
        from: EMAIL_FROM,
        to: email,
        subject: "Got it — I'll be in touch soon",
        html: leadConfirmationEmail(name),
      })
    } catch (e) {
      console.error('Confirmation email failed:', e)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('lead-notifications route error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
