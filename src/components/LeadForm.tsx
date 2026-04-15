'use client'

import { useState } from 'react'
import { REVENUE_RANGES } from '@/lib/constants'

interface LeadFormProps {
  /** Hide revenue + challenge fields for a slim 3-field form */
  slim?: boolean
  /** Override the submit button text */
  buttonText?: string
}

export default function LeadForm({ slim = false, buttonText = 'Book My Free Strategy Session' }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [revenueRange, setRevenueRange] = useState('')
  const [challenge, setChallenge] = useState('')

  function handleSubmit() {
    setError(null)

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()

    if (!trimmedName || !trimmedEmail) {
      setError('Name and email are required.')
      return
    }

    // Flip to success immediately — zero network wait for the user
    setSubmitted(true)

    // DB insert + snapshot + emails all run in the background
    fetch('/api/lead-notifications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: trimmedName,
        email: trimmedEmail,
        website_url: websiteUrl.trim(),
        revenue_range: revenueRange,
        challenge: challenge.trim(),
      }),
    }).catch(() => {})
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
    <>
      <div className="text-center mb-8">
        <h2 className="text-lg font-semibold text-white mb-1">Tell Me About Your Brand</h2>
        <p className="text-[13px] text-gray-400">All fields are optional except name and email.</p>
      </div>

      {/* No <form> — avoids Next.js 14 form-action interceptor that crashes on onSubmit */}
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-[13px] font-medium text-white mb-1.5">
              Name <span className="text-brand-accent">*</span>
            </label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
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
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              className="w-full border border-white/[0.1] rounded-md px-4 py-2.5 text-sm text-white bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="website_url" className="block text-[13px] font-medium text-white mb-1.5">
            Website URL
          </label>
          <input
            type="text"
            id="website_url"
            placeholder="yourstore.com"
            autoComplete="url"
            value={websiteUrl}
            onChange={e => setWebsiteUrl(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            className="w-full border border-white/[0.1] rounded-md px-4 py-2.5 text-sm text-white bg-white/[0.06] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all duration-200"
          />
        </div>

        {!slim && (
          <>
            <div>
              <label htmlFor="revenue_range" className="block text-[13px] font-medium text-white mb-1.5">
                Annual Revenue
              </label>
              <select
                id="revenue_range"
                value={revenueRange}
                onChange={e => setRevenueRange(e.target.value)}
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

            <div>
              <label htmlFor="challenge" className="block text-[13px] font-medium text-white mb-1.5">
                What is your biggest challenge right now?
              </label>
              <textarea
                id="challenge"
                rows={4}
                value={challenge}
                onChange={e => setChallenge(e.target.value)}
                className="w-full border border-white/[0.1] rounded-md px-4 py-2.5 text-sm text-white bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all duration-200 resize-none"
              />
            </div>
          </>
        )}

        {error && (
          <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/[0.1] border border-red-500/[0.2] rounded-md px-4 py-2.5">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-brand-gold text-white font-semibold px-6 py-3.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          {buttonText}
        </button>
      </div>
    </>
  )
}
