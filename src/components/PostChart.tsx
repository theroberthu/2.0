'use client'

import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'
import { SERIES_COLORS, type ChartView, type PostChart as PostChartData } from '@/lib/post-charts'

const pct = (n: number, total: number) => `${((100 * n) / total).toFixed(1)}%`

function total(view: ChartView): number {
  return view.kind === 'stacked' ? view.segments.reduce((s, x) => s + x.value, 0) : 0
}

/**
 * Interactive figure placed inside a blog post (see src/lib/post-charts.ts).
 * One view at a time: a headline figure, a caption, then a stacked bar with a
 * per-segment readout or a short set of bars. Every number is also rendered
 * as text in the "Show the numbers" table, so the figure works without color,
 * without JavaScript and for search and answer engines.
 */
export default function PostChart({ chart, slug }: { chart: PostChartData; slug: string }) {
  const [viewId, setViewId] = useState(chart.views[0].id)
  // Active segment: its index in a stacked view, "row:segment" in stackedRows.
  const [active, setActive] = useState<string | null>(null)
  const view = chart.views.find((v) => v.id === viewId) ?? chart.views[0]
  const sum = total(view)
  const dim = (key: string) => (active === null || active === key ? 1 : 0.4)

  const choose = (id: string) => {
    if (id === viewId) return
    setViewId(id)
    setActive(null)
    trackEvent('post_chart_view', { post_slug: slug, view: id })
  }

  let readout: string | null = null
  if (active !== null && view.kind === 'stacked') {
    const seg = view.segments[Number(active)]
    if (seg) readout = `${seg.label}: ${seg.value.toLocaleString('en-US')} of ${sum.toLocaleString('en-US')} ${view.unit} (${pct(seg.value, sum)})`
  } else if (active !== null && view.kind === 'stackedRows') {
    const [r, s] = active.split(':').map(Number)
    const row = view.rows[r]
    const series = view.series[s]
    if (row && series) readout = `${row.label}, ${series.label.toLowerCase()}: ${row.values[s]}% ${view.of}`
  }

  return (
    <figure
      className="my-10 md:my-12 bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-5 md:p-7"
      aria-labelledby={`chart-title-${slug}`}
    >
      <span className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-2">
        {chart.label}
      </span>
      {/* A styled paragraph, not a heading, so the chart does not enter the
          article's H2 outline or its table of contents. */}
      <p id={`chart-title-${slug}`} className="mb-5 text-lg md:text-xl font-bold text-white tracking-tight leading-snug">
        {chart.title}
      </p>

      <div role="group" aria-label="Choose a view" className="flex flex-wrap gap-2 mb-6">
        {chart.views.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => choose(v.id)}
            aria-pressed={v.id === view.id}
            className={`min-h-[40px] px-3.5 py-2 rounded-lg text-[13px] font-medium border transition-colors duration-150 ${
              v.id === view.id
                ? 'bg-brand-accent/20 border-brand-accent/60 text-white'
                : 'bg-transparent border-white/[0.12] text-gray-300 hover:border-white/30 hover:text-white'
            }`}
          >
            {v.tab}
          </button>
        ))}
      </div>

      <div aria-live="polite">
        <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
          <span className="text-5xl md:text-6xl font-bold leading-none tracking-tight text-white tabular-nums">{view.hero}</span>
          <span className="text-[15px] text-gray-300">{view.heroLabel}</span>
        </p>
        <p className="text-[14px] leading-relaxed text-gray-400 mb-5 max-w-[60ch]">{view.caption}</p>
      </div>

      {view.kind === 'stacked' ? (
        <>
          <div className="flex gap-[2px] h-10 md:h-11" onMouseLeave={() => setActive(null)}>
            {view.segments.map((seg, i) => (
              <button
                key={seg.label}
                type="button"
                aria-label={`${seg.label}: ${seg.value} of ${sum} ${view.unit}, ${pct(seg.value, sum)}`}
                onMouseEnter={() => setActive(`${i}`)}
                onFocus={() => setActive(`${i}`)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(`${i}`)}
                className="h-full first:rounded-l last:rounded-r transition-[flex-grow,opacity] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                style={{
                  flexGrow: seg.value,
                  flexBasis: 0,
                  background: SERIES_COLORS[seg.series],
                  opacity: dim(`${i}`),
                }}
              />
            ))}
          </div>
          <p className="text-[13px] text-gray-300 min-h-[2.5rem] sm:min-h-[1.5rem] mt-3 mb-3 tabular-nums">
            {readout ?? <span className="text-gray-500">Hover or tap a segment for its count.</span>}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[12.5px] text-gray-300 pl-0 my-0 list-none">
            {view.segments.map((seg) => (
              <li key={seg.label} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm flex-none" style={{ background: SERIES_COLORS[seg.series] }} aria-hidden="true" />
                <span>
                  {seg.label} <span className="text-gray-500 tabular-nums">{pct(seg.value, sum)}</span>
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : view.kind === 'stackedRows' ? (
        <>
          <div className="space-y-4" onMouseLeave={() => setActive(null)}>
            {view.rows.map((row, r) => (
              <div key={row.label}>
                <span className="block text-[12.5px] text-gray-300 mb-1.5">{row.label}</span>
                <div className="flex gap-[2px] h-9 md:h-10">
                  {row.values.map((value, s) => {
                    const key = `${r}:${s}`
                    const series = view.series[s]
                    return (
                      <button
                        key={series.label}
                        type="button"
                        aria-label={`${row.label}, ${series.label.toLowerCase()}: ${value}%`}
                        onMouseEnter={() => setActive(key)}
                        onFocus={() => setActive(key)}
                        onBlur={() => setActive(null)}
                        onClick={() => setActive(key)}
                        className="h-full min-w-0 flex items-center justify-center overflow-hidden first:rounded-l last:rounded-r transition-[flex-grow,opacity] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                        style={{ flexGrow: value, flexBasis: 0, background: SERIES_COLORS[series.series], opacity: dim(key) }}
                      >
                        {/* Direct label: dark ink on the fill, so share is
                            readable without hover and without color. */}
                        <span className="text-[12px] font-semibold tabular-nums text-[#0f1a20]" aria-hidden="true">
                          {value >= 10 ? `${value}%` : ''}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-gray-300 min-h-[2.5rem] sm:min-h-[1.5rem] mt-3 mb-3 tabular-nums">
            {readout ?? <span className="text-gray-500">Hover or tap a segment for its share.</span>}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[12.5px] text-gray-300 pl-0 my-0 list-none">
            {view.series.map((s) => (
              <li key={s.label} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm flex-none" style={{ background: SERIES_COLORS[s.series] }} aria-hidden="true" />
                {s.label}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="space-y-3">
          {view.rows.map((row) => (
            <div key={row.label} className="grid grid-cols-[120px_minmax(0,1fr)_48px] sm:grid-cols-[150px_minmax(0,1fr)_56px] items-center gap-3 text-[13px]">
              <span className="text-gray-300">{row.label}</span>
              <span className="h-5 rounded bg-white/[0.06] overflow-hidden">
                <span
                  className="block h-full rounded-r transition-[width] duration-500"
                  style={{ width: `${row.percent}%`, background: SERIES_COLORS.passed }}
                />
              </span>
              <span className="text-right text-white tabular-nums">{row.percent.toFixed(1)}%</span>
            </div>
          ))}
        </div>
      )}

      <details className="mt-6 border-t border-white/[0.08] pt-4 group">
        <summary className="cursor-pointer text-[13px] font-medium text-brand-accent hover:text-white transition-colors list-none flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 transition-transform group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Show the numbers
        </summary>
        <div className="mt-4 space-y-5">
          {chart.views.map((v) => (
            <table key={v.id} className="w-full text-[13px] text-gray-300">
              <caption className="text-left text-[12px] font-mono uppercase tracking-[0.12em] text-gray-500 pb-2">{v.tab}</caption>
              {v.kind === 'stackedRows' && (
                <thead>
                  <tr>
                    <td />
                    {v.series.map((s) => (
                      <th key={s.label} scope="col" className="text-right font-normal text-gray-500 pb-1.5 pl-3">
                        {s.label.replace(' retailers', '')}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {v.kind === 'stacked'
                  ? v.segments.map((s) => (
                      <tr key={s.label} className="border-t border-white/[0.06]">
                        <th scope="row" className="text-left font-normal py-1.5 pr-3">{s.label}</th>
                        <td className="text-right py-1.5 tabular-nums">{s.value.toLocaleString('en-US')}</td>
                        <td className="text-right py-1.5 pl-3 tabular-nums w-16">{pct(s.value, total(v))}</td>
                      </tr>
                    ))
                  : v.kind === 'stackedRows'
                    ? v.rows.map((r) => (
                        <tr key={r.label} className="border-t border-white/[0.06]">
                          <th scope="row" className="text-left font-normal py-1.5 pr-3">{r.label}</th>
                          {r.values.map((value, s) => (
                            <td key={v.series[s].label} className="text-right py-1.5 pl-3 tabular-nums">{value}%</td>
                          ))}
                        </tr>
                      ))
                    : v.rows.map((r) => (
                        <tr key={r.label} className="border-t border-white/[0.06]">
                          <th scope="row" className="text-left font-normal py-1.5 pr-3">{r.label}</th>
                          <td className="text-right py-1.5 tabular-nums" colSpan={2}>{r.percent.toFixed(1)}%</td>
                        </tr>
                      ))}
              </tbody>
            </table>
          ))}
        </div>
      </details>

      <figcaption className="mt-5 text-[12px] leading-relaxed text-gray-500">
        {chart.note} Source:{' '}
        <a href={chart.source.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 underline hover:text-white">
          {chart.source.label}
        </a>
        .
      </figcaption>
    </figure>
  )
}
