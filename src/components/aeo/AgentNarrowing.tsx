'use client'

import { useState, type CSSProperties } from 'react'
import { trackEvent } from '@/lib/analytics'

const STAGES: { stage: string; question: string; decides: string; control: string; tag?: string; factors: string[] }[] = [
  {
    stage: 'Considered',
    question: 'Which products does the agent look at?',
    decides: 'Search results, the retailer catalog, product feeds and sponsored placements.',
    control: 'The merchant and the advertiser. This is the stage an ad can buy.',
    tag: 'Ads act here',
    factors: [],
  },
  {
    stage: 'Qualifies',
    question: 'Does the listing state what the shopper asked for?',
    decides: 'Attributes the agent can confirm: size, material, compatibility, certifications. A product it cannot confirm is a risk it does not need to take.',
    control: 'The merchant',
    factors: ['01 Structured data', '06 Brand clarity'],
  },
  {
    stage: 'Low risk',
    question: 'Will it arrive when needed, and can it go back?',
    decides: 'Stock, a delivery date, the fulfillment method and a stated return policy.',
    control: 'The merchant',
    factors: ['03 Fulfillment'],
  },
  {
    stage: 'Best option',
    question: 'Is it the best of what is left?',
    decides: 'Price with context, what the reviews say rather than the average alone, and whether every source agrees.',
    control: 'The merchant',
    factors: ['02 Price context', '04 Reviews', '05 Consistency'],
  },
  {
    stage: 'Allowed',
    question: 'Is the purchase inside what the shopper permitted?',
    decides: "Spending limits, approval rules and permitted catalogs, such as Walmart's Agent Profiles or an organization's budget on AWS.",
    control: 'The shopper and the platform. Merchants do not set these limits.',
    tag: 'Set by the shopper',
    factors: [],
  },
]

/**
 * Provocation figure: a simplified narrowing model showing where paid
 * placement acts (getting considered) and where product data decides.
 */
export default function AgentNarrowing() {
  const [active, setActive] = useState(0)
  const current = STAGES[active]

  const choose = (i: number) => {
    if (i === active) return
    setActive(i)
    trackEvent('aeo_diagram', { diagram: 'agent_narrowing', view: STAGES[i].stage })
  }

  return (
    <figure className="my-10 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 md:p-7" aria-labelledby="agent-narrowing-title">
      <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-gold mb-2">Where the ad stops working</p>
      <p id="agent-narrowing-title" className="text-lg font-bold text-white tracking-tight leading-snug mb-5">
        An ad can get a product considered. Data decides whether it survives the next three cuts.
      </p>

      <div className="space-y-1.5" role="group" aria-label="Choose a stage">
        {STAGES.map((s, i) => {
          const on = i === active
          const width = `${100 - i * 15}%`
          const gated = i === STAGES.length - 1
          return (
            <div key={s.stage} className="flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <button
                  type="button"
                  onClick={() => choose(i)}
                  aria-pressed={on}
                  style={{ '--w': width } as CSSProperties}
                  className={`w-[var(--w)] min-h-[44px] flex items-center gap-3 rounded-lg border px-3 py-2 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#42a5c8] ${
                    on
                      ? 'bg-brand-accent/25 border-[#42a5c8]/60'
                      : gated
                      ? 'bg-transparent border-dashed border-white/[0.18] hover:border-[#42a5c8]/40'
                      : 'bg-white/[0.04] border-white/[0.08] hover:border-[#42a5c8]/40'
                  }`}
                >
                  <span className={`text-[11px] font-mono ${on ? 'text-brand-gold' : 'text-[#42a5c8]'}`}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={`text-[14px] font-semibold ${on ? 'text-white' : 'text-gray-300'}`}>{s.stage}</span>
                </button>
              </div>
              <span className="hidden sm:block w-36 shrink-0 text-[10.5px] font-mono uppercase tracking-[0.12em] text-brand-gold">
                {s.tag}
              </span>
            </div>
          )
        })}
      </div>

      <div className="mt-5 grid sm:grid-cols-3 gap-4 border-t border-white/[0.08] pt-5" aria-live="polite">
        <div>
          <p className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-gray-500 mb-1">The question</p>
          <p className="text-[15px] text-white font-medium leading-snug">{current.question}</p>
          {current.tag && <p className="sm:hidden mt-1 text-[11px] font-mono uppercase tracking-[0.12em] text-brand-gold">{current.tag}</p>}
        </div>
        <div>
          <p className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-gray-500 mb-1">What decides it</p>
          <p className="text-[14px] text-gray-300 leading-relaxed">{current.decides}</p>
          {current.factors.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {current.factors.map((f) => (
                <span key={f} className="rounded-full border border-white/[0.12] px-2 py-0.5 text-[11.5px] text-gray-400">
                  {f}
                </span>
              ))}
            </div>
          )}
        </div>
        <div>
          <p className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-gray-500 mb-1">Who controls it</p>
          <p className="text-[14px] text-gray-300 leading-relaxed">{current.control}</p>
        </div>
      </div>

      <figcaption className="mt-5 text-[12px] text-gray-500 leading-relaxed">
        A simplified model, not any one platform&apos;s ranking system. Bar widths show the narrowing, not measured volumes.
      </figcaption>
    </figure>
  )
}
