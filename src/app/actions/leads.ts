'use server'

import { getSupabaseAdmin } from '@/lib/supabase-admin'

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

    // Only responsibility: persist the lead. Fast, no external calls.
    try {
      const supabase = getSupabaseAdmin()
      if (supabase) {
        const { error } = await supabase
          .from('leads')
          .insert({ name, email, website_url, revenue_range, challenge })
        if (error) {
          console.error('Supabase insert error:', error.message)
        }
      } else {
        console.error('Supabase admin client not available — missing env vars')
      }
    } catch (dbError) {
      console.error('Supabase error:', dbError)
    }

    return { success: true }
  } catch (err) {
    console.error('submitLead unexpected error:', err)
    return { error: 'Something went wrong. Please try again or email robert@theroberthu.com directly.' }
  }
}
