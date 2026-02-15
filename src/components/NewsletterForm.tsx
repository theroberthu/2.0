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
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 text-center">
        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3">
          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-sm font-semibold text-emerald-400 mb-1">You&apos;re subscribed!</p>
        <p className="text-[11px] text-gray-400">Check your inbox for a welcome email.</p>
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
