'use server'

import { getSupabaseAdmin } from '@/lib/supabase-admin'
import { resend, EMAIL_FROM, NOTIFICATION_EMAIL } from '@/lib/resend'
import { leadNotificationEmail, leadConfirmationEmail } from '@/lib/email-templates'

export async function submitLead(formData: FormData) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const website_url = (formData.get('website_url') as string) || null
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

    return { success: true }
  } catch (err) {
    console.error('submitLead unexpected error:', err)
    return { error: 'Something went wrong. Please try again or email robert@theroberthu.com directly.' }
  }
}
