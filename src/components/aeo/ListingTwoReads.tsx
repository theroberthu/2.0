'use client'

import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'

/** Short names for the six evaluation factors, in the order the page lists them. */
const FACTORS = ['Structured data', 'Price context', 'Fulfillment', 'Reviews', 'Consistency', 'Brand clarity']

type Status = 'stated' | 'vague' | 'missing' | 'conflict' | 'risk'

const STATUS: Record<Status, { mark: string; label: string; cls: string }> = {
  stated: { mark: '✓', label: 'Stated', cls: 'text-[#42a5c8] border-[#42a5c8]/50 bg-brand-accent/15' },
  vague: { mark: '?', label: 'Vague', cls: 'text-brand-gold border-brand-gold/50 bg-brand-gold/10' },
  missing: { mark: '✕', label: 'Missing', cls: 'text-brand-gold border-brand-gold/60 bg-brand-gold/10' },
  conflict: { mark: '≠', label: 'Conflicts', cls: 'text-brand-gold border-brand-gold/60 bg-brand-gold/10' },
  risk: { mark: '!', label: 'Risk', cls: 'text-brand-gold border-brand-gold/50 bg-brand-gold/10' },
}

const FIELDS: { field: string; value: string; status: Status; factor: number }[] = [
  { field: 'Capacity', value: '24 oz', status: 'stated', factor: 0 },
  { field: 'Material', value: '"Premium steel", grade not given', status: 'vague', factor: 0 },
  { field: 'Dishwasher safe', value: 'Not stated', status: 'missing', factor: 0 },
  { field: 'Price', value: '$34, with no reason given for costing more than similar bottles', status: 'vague', factor: 1 },
  { field: 'Delivery', value: '"Fast shipping", no date', status: 'vague', factor: 2 },
  { field: 'Returns', value: 'Not stated', status: 'missing', factor: 2 },
  { field: 'Reviews', value: '4.6 average, and a recurring complaint that the lid leaks', status: 'risk', factor: 3 },
  { field: 'Capacity on the brand site', value: '20 oz', status: 'conflict', factor: 4 },
  { field: 'What the brand is', value: 'A tagline, no category or point of difference', status: 'vague', factor: 5 },
]

/**
 * "What Agents Actually Evaluate" figure: one illustrative listing as a person
 * sees it and as an agent reads it. Both views render on the server; the
 * factor chips only highlight rows.
 */
export default function ListingTwoReads() {
  const [factor, setFactor] = useState<number | null>(null)

  const choose = (next: number | null) => {
    if (next === factor) return
    setFactor(next)
    trackEvent('aeo_diagram', { diagram: 'listing_two_reads', view: next === null ? 'all' : FACTORS[next] })
  }

  const chip = (on: boolean) =>
    `min-h-[36px] rounded-full border px-3 py-1.5 text-[12.5px] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#42a5c8] ${
      on ? 'bg-brand-accent/25 border-[#42a5c8]/60 text-white' : 'border-white/[0.12] text-gray-400 hover:text-white hover:border-[#42a5c8]/40'
    }`

  return (
    <figure className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 md:p-7 mb-10" aria-labelledby="listing-two-reads-title">
      <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-gold mb-2">One listing, read two ways</p>
      <p id="listing-two-reads-title" className="text-lg font-bold text-white tracking-tight leading-snug mb-5">
        A person buys on the photo and the rating. An agent checks the fields.
      </p>

      <div className="grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-5">
        {/* What a person sees */}
        <div>
          <p className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-gray-500 mb-2">What a person sees</p>
          <div className="rounded-xl border border-white/[0.1] bg-white/[0.04] p-4">
            <div className="flex h-36 items-center justify-center rounded-lg bg-gradient-to-br from-brand-deep to-brand-accent/40" aria-hidden="true">
              <svg viewBox="0 0 40 100" className="h-28 w-auto">
                <rect x="13" y="2" width="14" height="10" rx="3" fill="#c5a94e" />
                <rect x="8" y="12" width="24" height="84" rx="9" fill="#f7f9fb" fillOpacity="0.85" />
                <rect x="8" y="40" width="24" height="18" fill="#2d7d9a" fillOpacity="0.6" />
              </svg>
            </div>
            <p className="mt-3 text-[15px] font-semibold text-white leading-snug">The last water bottle you will ever need</p>
            <p className="mt-1 text-[13px] text-gray-400">
              <span className="text-brand-gold" aria-hidden="true">★★★★★</span> 4.6 from 2,140 reviews
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[17px] font-semibold text-white">$34</span>
              <span className="rounded-full bg-brand-accent/20 px-2 py-0.5 text-[11px] text-[#42a5c8]">Fast shipping</span>
            </div>
          </div>
          <p className="mt-2 text-[12px] text-gray-500">Illustrative listing, not a real product.</p>
        </div>

        {/* What an agent reads */}
        <div>
          <p className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-gray-500 mb-2">What an agent reads</p>
          <div className="flex flex-wrap gap-1.5 mb-3" role="group" aria-label="Highlight the fields behind one evaluation factor">
            <button type="button" onClick={() => choose(null)} aria-pressed={factor === null} className={chip(factor === null)}>
              All
            </button>
            {FACTORS.map((name, i) => (
              <button key={name} type="button" onClick={() => choose(i)} aria-pressed={factor === i} className={chip(factor === i)}>
                <span className="font-mono text-gray-500 mr-1">{String(i + 1).padStart(2, '0')}</span>
                {name}
              </button>
            ))}
          </div>
          <ul className="divide-y divide-white/[0.06] rounded-xl border border-white/[0.1]">
            {FIELDS.map((f) => {
              const s = STATUS[f.status]
              const dim = factor !== null && f.factor !== factor
              return (
                <li key={f.field} className={`flex items-start gap-3 px-3.5 py-2.5 transition-opacity duration-200 ${dim ? 'opacity-30' : ''}`}>
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[12px] font-mono ${s.cls}`}
                    aria-hidden="true"
                  >
                    {s.mark}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] text-white font-medium leading-snug">
                      {f.field}
                      <span className="ml-2 font-mono text-[10.5px] text-gray-500">{String(f.factor + 1).padStart(2, '0')}</span>
                    </p>
                    <p className="text-[13px] text-gray-400 leading-snug">
                      <span className="sr-only">{s.label}: </span>
                      {f.value}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <p className="mt-5 border-t border-white/[0.08] pt-4 text-[14px] text-gray-300 leading-relaxed">
        Only the capacity gives the agent something it can confirm, and the brand site contradicts it. Against a
        competitor that states every field, each other row is a reason to choose the competitor. The number after each
        field matches one of the six factors below.
      </p>
    </figure>
  )
}
