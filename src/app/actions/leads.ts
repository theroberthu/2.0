'use server'

import { supabaseAdmin } from '@/lib/supabase-admin'
import { resend, EMAIL_FROM, NOTIFICATION_EMAIL } from '@/lib/resend'
import { leadNotificationEmail, leadConfirmationEmail } from '@/lib/email-templates'

export async function submitLead(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const website_url = (formData.get('website_url') as string) || null
  const revenue_range = (formData.get('revenue_range') as string) || null
  const challenge = (formData.get('challenge') as string) || null

  if (!name || !email) {
    return { error: 'Name and email are required.' }
  }

  const { error } = await supabaseAdmin
    .from('leads')
    .insert({ name, email, website_url, revenue_range, challenge })

  if (error) {
    return { error: 'Something went wrong. Please try again.' }
  }

  // Send emails after successful DB insert (non-blocking, failure-tolerant)
  try {
    await Promise.allSettled([
      resend.emails.send({
        from: EMAIL_FROM,
        to: NOTIFICATION_EMAIL,
        subject: `New Strategy Session Request from ${name}`,
        html: leadNotificationEmail({ name, email, website_url, revenue_range, challenge }),
      }),
      resend.emails.send({
        from: EMAIL_FROM,
        to: email,
        subject: 'Your Strategy Session Request - Robert Hu',
        html: leadConfirmationEmail(name),
      }),
    ])
  } catch (emailError) {
    console.error('Failed to send lead emails:', emailError)
  }

  return { success: true }
}
