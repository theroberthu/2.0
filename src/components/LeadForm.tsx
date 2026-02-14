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
      <div className="text-center py-12">
        <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-brand-dark mb-2">
          Thanks for reaching out!
        </h3>
        <p className="text-sm text-brand-muted">
          I will be in touch within 24 hours to schedule your free strategy session.
        </p>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-[13px] font-medium text-brand-dark mb-1.5">
            Name <span className="text-brand-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[13px] font-medium text-brand-dark mb-1.5">
            Email <span className="text-brand-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all duration-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="website_url" className="block text-[13px] font-medium text-brand-dark mb-1.5">
            Website URL
          </label>
          <input
            type="url"
            id="website_url"
            name="website_url"
            placeholder="https://"
            className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-brand-dark bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="revenue_range" className="block text-[13px] font-medium text-brand-dark mb-1.5">
            Annual Revenue
          </label>
          <select
            id="revenue_range"
            name="revenue_range"
            className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all duration-200"
          >
            <option value="">Select range</option>
            {REVENUE_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="challenge" className="block text-[13px] font-medium text-brand-dark mb-1.5">
          What is your biggest challenge right now?
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={4}
          className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all duration-200 resize-none"
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 rounded-md px-4 py-2.5">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-deep text-white font-semibold px-6 py-3.5 rounded-md hover:bg-brand-accent transition-all duration-200 disabled:opacity-50 shadow-soft hover:shadow-lifted hover:-translate-y-0.5"
      >
        {loading ? 'Submitting...' : 'Book My Free Strategy Session'}
      </button>
    </form>
  )
}
