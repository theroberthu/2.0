'use server'

import { supabase } from '@/lib/supabase'

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

  return { success: true }
}
