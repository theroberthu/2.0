'use client'

import { useState } from 'react'
import { subscribeNewsletter } from '@/app/actions/subscribers'

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    const result = await subscribeNewsletter(formData)
    setLoading(false)

    if (result.error) {
      setError(result.error)
    } else {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-sm text-emerald-400">
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        You are subscribed!
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-3">
      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="flex-1 min-w-0 border border-white/10 bg-white/[0.05] rounded-md px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/40 focus:border-brand-accent/40 transition-all duration-200"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-brand-accent text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-accent/85 transition-all duration-200 disabled:opacity-50 shrink-0"
        >
          {loading ? '...' : 'Subscribe'}
        </button>
      </div>
      {error && (
        <p className="text-xs text-red-400">{error}</p>
      )}
    </form>
  )
}
