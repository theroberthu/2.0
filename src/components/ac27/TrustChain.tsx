'use client'

import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'
import type { TrustCase, TrustCheck, TrustOutcome } from '@/lib/ai-commerce-2027'

const OUTCOME: Record<TrustOutcome, { mark: string; label: string; cls: string }> = {
  answered: { mark: '✓', label: 'Answered', cls: 'text-[#42a5c8] border-[#42a5c8]/50 bg-brand-accent/15' },
  failed: { mark: '✕', label: 'Failed', cls: 'text-brand-gold border-brand-gold/60 bg-brand-gold/10' },
  'not reached': { mark: '·', label: 'Not reached', cls: 'text-gray-500 border-white/[0.1] bg-transparent' },
}

function formatDay(iso: string) {
  const [, m, d] = iso.split('-')
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[Number(m) - 1]} ${Number(d)}`
}

/**
 * Shift 05 diagram: the six questions an agent transaction has to answer, with
 * a view of who is building each layer and a view per real case (the same
 * agent at Amazon and at Walmart).
 */
export default function TrustChain({
  checks,
  cases,
  upstream,
}: {
  checks: TrustCheck[]
  cases: TrustCase[]
  upstream: { question: string; example: string }
}) {
  const [view, setView] = useState<string>('layers')
  const activeCase = cases.find((c) => c.id === view)

  const tabs = [{ id: 'layers', label: 'Who builds each layer' }, ...cases.map((c) => ({ id: c.id, label: `Muse at ${c.label}, ${formatDay(c.date)}` }))]

  const choose = (id: string) => {
    if (id === view) return
    setView(id)
    trackEvent('ac27_diagram', { diagram: 'trust_chain', view: id })
  }

  return (
    <figure className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 md:p-7" aria-labelledby="trust-chain-title">
      <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-gold mb-2">Six questions, one chain</p>
      <p id="trust-chain-title" className="text-lg font-bold text-white tracking-tight leading-snug mb-5">
        Each layer can pass while the next one fails
      </p>

      <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Choose a view">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => choose(t.id)}
            aria-pressed={view === t.id}
            className={`min-h-[36px] rounded-full border px-3.5 py-1.5 text-[12.5px] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#42a5c8] ${
              view === t.id
                ? 'bg-brand-accent/25 border-[#42a5c8]/60 text-white'
                : 'border-white/[0.12] text-gray-400 hover:text-white hover:border-[#42a5c8]/40'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeCase && <p className="text-[14px] text-gray-300 mb-4" aria-live="polite">{activeCase.summary}</p>}

      {!activeCase && (
        <div className="mb-3 rounded-lg border border-dashed border-white/[0.14] px-4 py-3">
          <p className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-gray-500 mb-0.5">Upstream of all six</p>
          <p className="text-[14px] text-white font-semibold">{upstream.question}</p>
          <p className="text-[13px] text-gray-400 leading-relaxed mt-0.5">{upstream.example}</p>
        </div>
      )}

      <ol className="relative space-y-2">
        <span className="absolute left-[15px] top-3 bottom-3 w-px bg-white/[0.1]" aria-hidden="true" />
        {checks.map((c, i) => {
          const res = activeCase?.results[i]
          const o = res ? OUTCOME[res.outcome] : null
          return (
            <li key={c.question} className={`relative flex gap-3 ${o && res?.outcome === 'not reached' ? 'opacity-50' : ''}`}>
              <span
                className={`relative z-10 mt-2.5 flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full border text-[12px] font-mono ${
                  o ? o.cls : 'text-[#42a5c8] border-white/[0.14] bg-brand-dark'
                }`}
                aria-hidden="true"
              >
                {o ? o.mark : i + 1}
              </span>
              <div className="flex-1 min-w-0 grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-x-5 gap-y-1 bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3">
                <div>
                  <p className="text-[14px] text-white font-semibold leading-snug">{c.question}</p>
                  <p className="text-[12px] text-gray-500">{c.layer}</p>
                </div>
                <p className="text-[13px] text-gray-300 leading-relaxed">
                  {o && <span className="sr-only">{o.label}: </span>}
                  {res ? res.text : c.example}
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </figure>
  )
}
