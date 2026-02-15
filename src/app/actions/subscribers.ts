'use server'

import { supabase } from '@/lib/supabase'
import { resend, EMAIL_FROM, NOTIFICATION_EMAIL } from '@/lib/resend'
import { subscriberWelcomeEmail, subscriberNotificationEmail } from '@/lib/email-templates'

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get('email') as string

  if (!email) {
    return { error: 'Email is required.' }
  }

  const { error } = await supabase
    .from('subscribers')
    .insert({ email })

  if (error) {
    if (error.code === '23505') {
      return { error: 'You are already subscribed.' }
    }
    return { error: 'Something went wrong. Please try again.' }
  }

  // Send emails after successful DB insert (non-blocking, failure-tolerant)
  try {
    await Promise.allSettled([
      resend.emails.send({
        from: EMAIL_FROM,
        to: email,
        subject: 'Welcome to the Newsletter - Robert Hu',
        html: subscriberWelcomeEmail(),
      }),
      resend.emails.send({
        from: EMAIL_FROM,
        to: NOTIFICATION_EMAIL,
        subject: `New Newsletter Subscriber: ${email}`,
        html: subscriberNotificationEmail(email),
      }),
    ])
  } catch (emailError) {
    console.error('Failed to send subscriber emails:', emailError)
  }

  return { success: true }
}
