'use server'

import { supabase } from '@/lib/supabase'

export async function submitLead(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const website_url = (formData.get('website_url') as string) || null
  const revenue_range = (formData.get('revenue_range') as string) || null
  const challenge = (formData.get('challenge') as string) || null

  if (!name || !email) {
    return { error: 'Name and email are required.' }
  }

  const { error } = await supabase
    .from('leads')
    .insert({ name, email, website_url, revenue_range, challenge })

  if (error) {
    return { error: 'Something went wrong. Please try again.' }
  }

  return { success: true }
}
