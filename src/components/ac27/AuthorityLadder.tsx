'use client'

import { useState, type CSSProperties } from 'react'
import { trackEvent } from '@/lib/analytics'
import type { AuthorityStep } from '@/lib/ai-commerce-2027'

/**
 * Five-step authority ladder for /ai-commerce-2027. Each step is a button; the
 * selected step's detail renders below. Bars grow with authority: width on
 * mobile, height from sm up.
 */
export default function AuthorityLadder({ steps }: { steps: AuthorityStep[] }) {
  const [active, setActive] = useState(steps.length - 1)
  const current = steps[active]

  const choose = (i: number) => {
    if (i === active) return
    setActive(i)
    trackEvent('ac27_diagram', { diagram: 'authority_ladder', view: steps[i].step })
  }

  return (
    <figure className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 md:p-7" aria-labelledby="authority-ladder-title">
      <div className="flex items-baseline justify-between gap-4 mb-5">
        <p id="authority-ladder-title" className="text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400">
          Five steps of authority
        </p>
        <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-gold" aria-hidden="true">
          More authority →
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-3 sm:h-[200px]" role="group" aria-label="Choose a step">
        {steps.map((s, i) => {
          const size = `${40 + (60 * i) / (steps.length - 1)}%`
          const on = i === active
          return (
            <button
              key={s.step}
              type="button"
              onClick={() => choose(i)}
              aria-pressed={on}
              style={{ '--size': size } as CSSProperties}
              className={`group w-[var(--size)] sm:w-auto sm:flex-1 sm:h-[var(--size)] min-h-[44px] flex sm:flex-col sm:justify-end items-center sm:items-start gap-3 sm:gap-1 rounded-lg border px-3 py-2.5 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#42a5c8] ${
                on
                  ? 'bg-brand-accent/25 border-[#42a5c8]/60'
                  : 'bg-white/[0.04] border-white/[0.08] hover:border-[#42a5c8]/40'
              }`}
            >
              <span className={`text-[11px] font-mono ${on ? 'text-brand-gold' : 'text-[#42a5c8]'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={`text-[14px] font-semibold ${on ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                {s.step}
              </span>
            </button>
          )
        })}
      </div>

      <div className="mt-5 grid sm:grid-cols-3 gap-4 border-t border-white/[0.08] pt-5" aria-live="polite">
        <div>
          <p className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-gray-500 mb-1">Software that {current.step.toLowerCase()}</p>
          <p className="text-[15px] text-white font-medium leading-snug">{current.does}</p>
        </div>
        <div>
          <p className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-gray-500 mb-1">For example</p>
          <p className="text-[14px] text-gray-300 leading-relaxed">{current.example}</p>
        </div>
        <div>
          <p className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-gray-500 mb-1">In the record</p>
          <p className="text-[14px] text-gray-300 leading-relaxed">{current.evidence}</p>
        </div>
      </div>
    </figure>
  )
}
