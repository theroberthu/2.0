'use client'

import { useState } from 'react'
import { submitLead } from '@/app/actions/leads'
import { REVENUE_RANGES } from '@/lib/constants'

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    const result = await submitLead(formData)
    setLoading(false)

    if (result.error) {
      setError(result.error)
    } else {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="py-12">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-emerald-500/[0.12] flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Thanks for reaching out!
          </h3>
          <p className="text-sm text-gray-400">
            I&apos;ll review your info and send you a calendar link within 24 hours.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-[13px] font-medium text-white mb-1.5">
            Name <span className="text-brand-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full border border-white/[0.1] rounded-md px-4 py-2.5 text-sm text-white bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[13px] font-medium text-white mb-1.5">
            Email <span className="text-brand-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="w-full border border-white/[0.1] rounded-md px-4 py-2.5 text-sm text-white bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all duration-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="website_url" className="block text-[13px] font-medium text-white mb-1.5">
            Website URL
          </label>
          <input
            type="text"
            id="website_url"
            name="website_url"
            placeholder="yourstore.com"
            autoComplete="url"
            className="w-full border border-white/[0.1] rounded-md px-4 py-2.5 text-sm text-white bg-white/[0.06] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="revenue_range" className="block text-[13px] font-medium text-white mb-1.5">
            Annual Revenue
          </label>
          <select
            id="revenue_range"
            name="revenue_range"
            className="w-full border border-white/[0.1] rounded-md px-4 py-2.5 text-sm text-white bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all duration-200"
          >
            <option value="" className="bg-brand-dark text-gray-400">Select range</option>
            {REVENUE_RANGES.map((range) => (
              <option key={range} value={range} className="bg-brand-dark text-white">
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="challenge" className="block text-[13px] font-medium text-white mb-1.5">
          What is your biggest challenge right now?
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={4}
          className="w-full border border-white/[0.1] rounded-md px-4 py-2.5 text-sm text-white bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all duration-200 resize-none"
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/[0.1] border border-red-500/[0.2] rounded-md px-4 py-2.5">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-gold text-white font-semibold px-6 py-3.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 disabled:opacity-50 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Submitting...
          </>
        ) : (
          'Book My Free Strategy Session'
        )}
      </button>
    </form>
  )
}
