import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-admin'
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

async function fetchPageMeta(url: string): Promise<string> {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000)
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; brandbot/1.0)' },
    })
    clearTimeout(timeout)
    const html = await res.text()
    const ogTitle = html.match(/<meta[^>]*property="og:title"[^>]*content="([^"]{1,200})"/i)?.[1] ?? ''
    const title = html.match(/<title[^>]*>([^<]{1,200})<\/title>/i)?.[1] ?? ''
    const ogDesc = html.match(/<meta[^>]*property="og:description"[^>]*content="([^"]{1,400})"/i)?.[1] ?? ''
    const metaDesc = html.match(/<meta[^>]*name="description"[^>]*content="([^"]{1,400})"/i)?.[1] ?? ''
    return [
      `URL: ${url}`,
      ogTitle ? `OG Title: ${ogTitle}` : '',
      title ? `Page Title: ${title}` : '',
      ogDesc ? `OG Description: ${ogDesc}` : '',
      metaDesc ? `Meta Description: ${metaDesc}` : '',
    ].filter(Boolean).join('\n')
  } catch {
    return `URL: ${url}`
  }
}

async function generateBrandSnapshot(url: string): Promise<BrandSnapshot | null> {
  try {
    const client = getAnthropicClient()
    if (!client) return null

    const pageInfo = await fetchPageMeta(url)

    const response = await client.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 400,
      messages: [
        {
          role: 'user',
          content: `Here is metadata fetched from a brand's website. Generate a brief brand snapshot.

${pageInfo}

Return raw JSON only (no markdown, no code fences):
{
  "brandName": "...",
  "category": "...",
  "estimatedMarketplace": "Amazon, Walmart, DTC, or Other",
  "topProducts": ["product1", "product2"],
  "firstImpression": "One sentence about the brand"
}

Use "Unknown" for anything you cannot determine from the data above.`,
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

    // Normalize URL
    if (website_url && !/^https?:\/\//i.test(website_url)) {
      website_url = `https://${website_url}`
    }
    website_url = website_url?.trim() || null

    const leadData = { name, email, website_url, revenue_range, challenge }

    // 1. Persist the lead (moved here so the form shows success immediately with zero blocking)
    try {
      const supabase = getSupabaseAdmin()
      if (supabase) {
        const { error } = await supabase
          .from('leads')
          .insert({ name, email, website_url, revenue_range, challenge })
        if (error) console.error('Supabase insert error:', error.message)
      }
    } catch (e) {
      console.error('Supabase error:', e)
    }

    // 2. Brand snapshot (slow — fine since client never awaits this route)
    const snapshot = website_url ? await generateBrandSnapshot(website_url) : null

    // 3. Emails in parallel
    await Promise.allSettled([
      resend.emails.send({
        from: EMAIL_FROM,
        to: NOTIFICATION_EMAIL,
        subject: `New Strategy Session Request from ${name}`,
        html: leadNotificationEmail(leadData, snapshot),
      }),
      resend.emails.send({
        from: EMAIL_FROM,
        to: email,
        subject: "Got it — I'll be in touch soon",
        html: leadConfirmationEmail(name),
      }),
    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('lead-notifications route error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
