'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'
import type { TrackerEntry } from '@/lib/ai-commerce-2027'

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-')
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  if (!d) return `${months[Number(m) - 1]} ${y}`
  return `${months[Number(m) - 1]} ${Number(d)}, ${y}`
}

/**
 * Evidence tracker with a filter by the part of the thesis each entry affects.
 * Server-rendered with every row visible; filtering only hides rows.
 */
export default function EvidenceTrackerTable({ entries }: { entries: TrackerEntry[] }) {
  const [filter, setFilter] = useState<string | null>(null)

  const groups = useMemo(() => {
    const counts = new Map<string, number>()
    for (const e of entries) counts.set(e.affects, (counts.get(e.affects) ?? 0) + 1)
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  }, [entries])

  const rows = filter ? entries.filter((e) => e.affects === filter) : entries

  const choose = (next: string | null) => {
    if (next === filter) return
    setFilter(next)
    trackEvent('ac27_tracker_filter', { affects: next ?? 'all' })
  }

  const chip = (on: boolean) =>
    `min-h-[36px] rounded-full border px-3.5 py-1.5 text-[12.5px] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#42a5c8] ${
      on ? 'bg-brand-accent/25 border-[#42a5c8]/60 text-white' : 'border-white/[0.12] text-gray-400 hover:text-white hover:border-[#42a5c8]/40'
    }`

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filter the tracker by what each entry affects">
        <button type="button" onClick={() => choose(null)} aria-pressed={filter === null} className={chip(filter === null)}>
          All <span className="font-mono text-gray-500 ml-1">{entries.length}</span>
        </button>
        {groups.map(([name, n]) => (
          <button key={name} type="button" onClick={() => choose(name)} aria-pressed={filter === name} className={chip(filter === name)}>
            {name} <span className="font-mono text-gray-500 ml-1">{n}</span>
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {filter ? `Showing ${rows.length} entries affecting ${filter}` : `Showing all ${rows.length} entries`}
      </p>

      <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[880px] text-left border-collapse">
          <caption className="sr-only">Tracker of verified AI commerce developments, newest first</caption>
          <thead>
            <tr className="border-b border-white/[0.12]">
              {['Date', 'Company', 'Development', 'Affects', 'Evidence type', 'What changed'].map((h) => (
                <th key={h} scope="col" className="py-3 pr-5 text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.date}-${row.org}-${row.development.slice(0, 24)}`} className="border-b border-white/[0.06] align-top">
                <td className="py-4 pr-5 text-[13px] font-mono text-gray-400 whitespace-nowrap">{formatDate(row.date)}</td>
                <td className="py-4 pr-5 text-[13px] font-semibold text-white">{row.org}</td>
                <td className="py-4 pr-5 text-[13px] text-gray-300 leading-relaxed">
                  {row.development}
                  {row.href && (
                    <Link href={row.href} className="block mt-1 text-[12px] text-[#42a5c8] hover:text-white transition-colors duration-200">
                      Read the analysis
                    </Link>
                  )}
                </td>
                <td className="py-4 pr-5 text-[13px] text-gray-400 whitespace-nowrap">{row.affects}</td>
                <td className="py-4 pr-5 text-[13px] text-gray-400 leading-relaxed">{row.evidenceType}</td>
                <td className="py-4 pr-5 text-[13px] text-gray-400 leading-relaxed">{row.changed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
