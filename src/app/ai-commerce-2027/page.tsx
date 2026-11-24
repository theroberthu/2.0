import { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import AuthorityLadder from '@/components/ac27/AuthorityLadder'
import TrustChain from '@/components/ac27/TrustChain'
import EvidenceTrackerTable from '@/components/ac27/EvidenceTrackerTable'
import { SITE_URL } from '@/lib/constants'
import {
  AUTHORITY_STEPS,
  CHECKOUT_POSTURES,
  CLOSING_QUESTION,
  CONCLUSION,
  COUNTER_INTRO,
  COUNTERARGUMENTS,
  DEFINITION_AFTER,
  DEFINITION_INTRO,
  DEFINITIONS,
  DEK,
  EVIDENCE_NUMBERS,
  EVIDENCE_TRACKER,
  FOUNDATIONS,
  HEADLINE,
  INTERFACES,
  LAST_UPDATED,
  MEASUREMENT_STAGES,
  MEASUREMENT_TOOLS,
  METHOD,
  PROTECTED_LINE,
  PUBLISHED,
  READING_MINUTES,
  SCHEMA_HEADLINE,
  SHIFTS,
  SHIFTS_INTRO,
  SHORT_VERSION,
  SIGNALS,
  SIGNALS_INTRO,
  STACK,
  STACK_AFTER,
  STACK_INTRO,
  TRUST_CASES,
  TRUST_CHECKS,
  TRUST_UPSTREAM,
  UPDATE_NOTES,
  type Ref,
  type Shift,
  type SignalStatus,
} from '@/lib/ai-commerce-2027'

const TITLE = 'AI Commerce 2027: Agentic Commerce Trends and Operating Model'
const DESCRIPTION =
  'How commerce changes when software can act: nine shifts across discovery, checkout, trust, payments, ads and measurement, with evidence and what is unproven.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/ai-commerce-2027' },
  openGraph: {
    title: `${TITLE} | Robert Hu`,
    description: DESCRIPTION,
    url: `${SITE_URL}/ai-commerce-2027`,
    type: 'article',
    images: [
      {
        url: '/images/research/ai-commerce-2027.png',
        width: 1200,
        height: 630,
        alt: 'AI Commerce 2027: How the commerce operating model changes when software can act. Infrastructure exists. Adoption evidence does not.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@theroberthu',
    creator: '@theroberthu',
    title: `${TITLE} | Robert Hu`,
    description: DESCRIPTION,
    images: ['/images/research/ai-commerce-2027.png'],
  },
}

const reportSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: SCHEMA_HEADLINE,
  description: DESCRIPTION,
  datePublished: PUBLISHED,
  dateModified: LAST_UPDATED,
  url: `${SITE_URL}/ai-commerce-2027`,
  image: `${SITE_URL}/images/research/ai-commerce-2027.png`,
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/ai-commerce-2027` },
  author: {
    '@type': 'Person',
    name: 'Robert Hu',
    url: `${SITE_URL}/about`,
    jobTitle: 'AI Commerce Researcher',
    sameAs: ['https://www.linkedin.com/in/theroberthu', 'https://x.com/theroberthu'],
  },
  publisher: { '@type': 'Organization', name: 'Robert Hu', url: SITE_URL },
}

const SECTIONS = [
  { id: 'short-version', label: 'Short version' },
  { id: 'definition', label: 'Definition' },
  { id: 'update', label: 'What changed' },
  { id: 'stack', label: 'The stack' },
  { id: 'shifts', label: 'Nine shifts' },
  { id: 'counterarguments', label: 'Counterarguments' },
  { id: 'signals', label: 'Signals' },
  { id: 'tracker', label: 'Evidence tracker' },
  { id: 'deeper', label: 'Go deeper' },
]

const EXT = { target: '_blank', rel: 'noopener noreferrer' } as const

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-')
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  if (!d) return `${months[Number(m) - 1]} ${y}`
  return `${months[Number(m) - 1]} ${Number(d)}, ${y}`
}

/** Compact, visually subordinate reference line: label, then comma separated links. */
function RefLine({ label, refs }: { label: string; refs: Ref[] }) {
  return (
    <p className="text-[12.5px] text-gray-500 leading-relaxed">
      <span className="font-mono uppercase tracking-[0.12em] text-[10.5px] text-gray-500 mr-2">{label}</span>
      {refs.map((r, i) => (
        <span key={r.href}>
          {r.href.startsWith('/') ? (
            <Link href={r.href} className="text-gray-400 underline decoration-white/15 underline-offset-2 hover:text-[#42a5c8] transition-colors duration-200">
              {r.label}
            </Link>
          ) : (
            <a href={r.href} {...EXT} className="text-gray-400 underline decoration-white/15 underline-offset-2 hover:text-[#42a5c8] transition-colors duration-200">
              {r.label}
            </a>
          )}
          {i < refs.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  )
}

function ShiftBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400 mb-2">{label}</h4>
      {children}
    </div>
  )
}

function FigureLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-gold mb-2">{eyebrow}</p>
      <p className="text-lg font-bold text-white tracking-tight leading-snug mb-5">{title}</p>
    </>
  )
}

/** Shift 02: four checkout postures. The merchant stays merchant of record in all of them. */
function CheckoutPostures() {
  return (
    <figure className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 md:p-7">
      <FigureLabel eyebrow="Four postures per surface" title="Who shows the checkout changes. Who owns the order does not." />
      <ul className="grid md:grid-cols-2 gap-3">
        {CHECKOUT_POSTURES.map((p, i) => (
          <li key={p.posture} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 flex flex-col">
            <p className="flex items-baseline gap-2.5 mb-3">
              <span className="text-[11px] font-mono text-[#42a5c8]">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[15px] font-semibold text-white leading-snug">{p.posture}</span>
            </p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[13px] mb-3">
              <dt className="text-gray-500">Checkout shown by</dt>
              <dd className="text-gray-200">{p.renders}</dd>
              <dt className="text-gray-500">Conversation held by</dt>
              <dd className="text-gray-200">{p.conversation}</dd>
              <dt className="text-gray-500">Merchant of record</dt>
              <dd className="text-brand-gold font-semibold">The merchant</dd>
            </dl>
            <p className="text-[12.5px] text-gray-400 leading-relaxed mt-auto pt-3 border-t border-white/[0.06]">{p.examples}</p>
          </li>
        ))}
      </ul>
    </figure>
  )
}

/** Shift 04: which instrument covers which stage of an AI shopping journey. */
function MeasurementMap() {
  const n = MEASUREMENT_STAGES.length
  return (
    <figure className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 md:p-7">
      <FigureLabel eyebrow="What gets measured" title="Purchases now have instruments. What the AI rejected has none." />

      {/* Wide layout: stages as columns, instruments as bars spanning the stages they cover. */}
      <div className="hidden sm:block">
        <div className="grid gap-2 mb-3" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
          {MEASUREMENT_STAGES.map((st, i) => (
            <div key={st.stage} className="border-t-2 border-white/[0.14] pt-2">
              <p className="text-[11px] font-mono text-[#42a5c8] mb-0.5">{String(i + 1).padStart(2, '0')}</p>
              <p className="text-[14px] font-semibold text-white leading-snug">{st.stage}</p>
              <p className="text-[12px] text-gray-500 leading-snug mt-0.5">{st.question}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {MEASUREMENT_TOOLS.map((t) => (
            <div key={t.name} className="grid gap-2" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
              <div
                style={{ gridColumn: `${t.covers[0] + 1} / ${t.covers[1] + 2}` }}
                className={`rounded-lg px-3 py-2.5 ${
                  t.gap ? 'border border-dashed border-brand-gold/60 bg-brand-gold/[0.06]' : 'bg-brand-accent/20 border border-[#42a5c8]/30'
                }`}
              >
                <p className={`text-[13px] font-semibold leading-snug ${t.gap ? 'text-brand-gold' : 'text-white'}`}>{t.name}</p>
                <p className="text-[12px] text-gray-300 leading-snug mt-0.5">{t.reports}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Narrow layout: one card per instrument, naming the stages it covers. */}
      <ul className="sm:hidden space-y-2">
        {MEASUREMENT_TOOLS.map((t) => (
          <li
            key={t.name}
            className={`rounded-lg px-4 py-3 ${t.gap ? 'border border-dashed border-brand-gold/60 bg-brand-gold/[0.06]' : 'bg-brand-accent/20 border border-[#42a5c8]/30'}`}
          >
            <p className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-gray-400 mb-1">
              {MEASUREMENT_STAGES.slice(t.covers[0], t.covers[1] + 1).map((st) => st.stage).join(' to ')}
            </p>
            <p className={`text-[14px] font-semibold ${t.gap ? 'text-brand-gold' : 'text-white'}`}>{t.name}</p>
            <p className="text-[13px] text-gray-300 leading-snug mt-0.5">{t.reports}</p>
          </li>
        ))}
      </ul>
      <figcaption className="text-[12px] text-gray-500 leading-relaxed mt-4">
        The instruments shown are Google&apos;s. Each reports first-party data about the merchant&apos;s own pages and orders.
      </figcaption>
    </figure>
  )
}

const SHIFT_FIGURES: Record<string, () => ReactNode> = {
  'website-handoff': () => <CheckoutPostures />,
  'measurement-split': () => <MeasurementMap />,
  'trust-operating-layer': () => <TrustChain checks={TRUST_CHECKS} cases={TRUST_CASES} upstream={TRUST_UPSTREAM} />,
}

function ShiftArticle({ shift }: { shift: Shift }) {
  return (
    <article id={shift.id} className="scroll-mt-[128px]">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-[13px] font-mono text-[#42a5c8]">{shift.number}</span>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">{shift.title}</h3>
      </div>

      <div className="space-y-6">
        <ShiftBlock label="What changed">
          <p className="text-base text-gray-200 leading-relaxed">{shift.changed}</p>
        </ShiftBlock>

        <ShiftBlock label="Evidence">
          <ul className="space-y-2.5">
            {shift.evidence.map((item) => (
              <li key={item.slice(0, 40)} className="flex gap-3 text-[15px] text-gray-300 leading-relaxed">
                <span className="block w-1 h-1 rounded-full bg-[#42a5c8]/70 mt-[0.7em] shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ShiftBlock>

        <ShiftBlock label="Why it matters">
          <div className="space-y-4">
            {shift.why.map((p, i) => (
              <p key={i} className="text-base text-gray-300 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </ShiftBlock>

        {SHIFT_FIGURES[shift.id]?.()}

        <ShiftBlock label="Operator consequence">
          <p className="text-base text-gray-300 leading-relaxed">{shift.consequence}</p>
        </ShiftBlock>

        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
          <h4 className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-gold mb-2">
            What is still unproven
          </h4>
          <p className="text-[15px] text-gray-300 leading-relaxed">{shift.unproven}</p>
        </div>

        {shift.updatedView && (
          <div className="border-l-2 border-brand-gold/60 pl-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-gold mb-1.5">Updated view</h4>
            <p className="text-[15px] text-gray-300 leading-relaxed">{shift.updatedView}</p>
          </div>
        )}

        <div className="space-y-1.5 pt-1">
          <RefLine label="Evidence notes" refs={shift.notes} />
          <RefLine label="Primary sources" refs={shift.sources} />
        </div>
      </div>
    </article>
  )
}

const STATUS_STYLE: Record<SignalStatus, { cls: string; mark: string }> = {
  Seen: { cls: 'bg-brand-accent/25 border-[#42a5c8]/60 text-white', mark: '●' },
  Partly: { cls: 'bg-brand-gold/10 border-brand-gold/60 text-brand-gold', mark: '◐' },
  'Not yet': { cls: 'border-white/[0.14] text-gray-400', mark: '○' },
}

function StatusPill({ status }: { status: SignalStatus }) {
  const st = STATUS_STYLE[status]
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[12px] whitespace-nowrap ${st.cls}`}>
      <span aria-hidden="true">{st.mark}</span>
      {status}
    </span>
  )
}

/** One square per signal, so the share that has fired is visible at a glance. */
function SignalSummary() {
  const order: SignalStatus[] = ['Seen', 'Partly', 'Not yet']
  const counts = order.map((s) => [s, SIGNALS.filter((x) => x.status === s).length] as const)
  return (
    <div className="mb-8 bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
      <div className="flex flex-wrap gap-1.5 mb-3" aria-hidden="true">
        {order.flatMap((s) =>
          SIGNALS.filter((x) => x.status === s).map((x) => (
            <span
              key={x.signal}
              title={`${x.signal}: ${s}`}
              className={`block w-6 h-6 rounded-md border ${
                s === 'Seen' ? 'bg-[#42a5c8] border-[#42a5c8]' : s === 'Partly' ? 'bg-brand-gold/40 border-brand-gold' : 'border-white/[0.18]'
              }`}
            />
          )),
        )}
      </div>
      <p className="text-[13px] text-gray-300">
        {counts.map(([s, n], i) => (
          <span key={s}>
            <strong className="text-white font-semibold">{n}</strong> {s.toLowerCase()}
            {i < counts.length - 1 ? ', ' : ''}
          </span>
        ))}{' '}
        of {SIGNALS.length} signals, as of <time dateTime={LAST_UPDATED}>{formatDate(LAST_UPDATED)}</time>.
      </p>
    </div>
  )
}

export default function AiCommerce2027Page() {
  return (
    <>
      <SchemaMarkup data={reportSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark pt-20 md:pt-28 pb-12 md:pb-16">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold">
              TRH Research
            </span>
            <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400 bg-white/[0.05] border border-white/[0.08] rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
              Living research
            </span>
          </div>
          <h1 className="text-4xl md:text-[3.25rem] font-bold text-white leading-tight tracking-tight mb-5">
            {HEADLINE}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-6">{DEK}</p>
          <p className="text-base md:text-lg font-semibold text-brand-gold leading-snug mb-8">{PROTECTED_LINE}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-gray-400">
            <span className="text-gray-400">Robert Hu</span>
            <span>Published {formatDate(PUBLISHED)}</span>
            <span>
              Updated <time dateTime={LAST_UPDATED}>{formatDate(LAST_UPDATED)}</time>
            </span>
            <span>{READING_MINUTES} min read</span>
          </div>
        </div>
      </section>

      {/* Section nav */}
      <nav
        aria-label="Report sections"
        className="sticky top-[72px] z-30 bg-brand-dark/95 backdrop-blur-md border-y border-white/[0.06]"
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <ul className="flex gap-5 overflow-x-auto py-3 text-[12px] font-mono uppercase tracking-[0.12em] whitespace-nowrap">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-gray-400 hover:text-[#42a5c8] transition-colors duration-200">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* The short version */}
      <section id="short-version" className="py-16 md:py-24 bg-brand-dark scroll-mt-[128px]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-8">The short version</h2>
          <ol className="space-y-5">
            {SHORT_VERSION.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-[13px] font-mono text-brand-gold pt-1 shrink-0" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className={`leading-relaxed ${i === 2 ? 'text-lg text-white font-medium' : 'text-base text-gray-300'}`}>
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Evidence numbers */}
      <section className="py-14 md:py-16 bg-[#1a2d37] border-y border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-gold mb-8">
            What the record shows
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-9">
            {EVIDENCE_NUMBERS.map((n) => (
              <div key={n.label}>
                <dt className="text-3xl md:text-[2.5rem] font-bold text-white leading-none tracking-tight mb-3">
                  {n.value}
                </dt>
                <dd className="text-[14px] text-gray-300 leading-relaxed">
                  {n.label}
                  <span className="block text-[11px] font-mono uppercase tracking-[0.12em] text-gray-400 mt-2">
                    {n.source}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Definition */}
      <section id="definition" className="py-16 md:py-24 bg-brand-dark scroll-mt-[128px]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">What AI commerce means</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">{DEFINITION_INTRO}</p>
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {DEFINITIONS.map((d, i) => (
              <div
                key={d.term}
                className={`bg-white/[0.03] border rounded-xl p-6 ${i === 1 ? 'border-brand-accent/25' : 'border-white/[0.08]'}`}
              >
                <p className="text-base text-gray-300 leading-relaxed">
                  <strong className={`font-semibold ${i === 1 ? 'text-[#42a5c8]' : 'text-white'}`}>{d.term}</strong>
                  {d.text.slice(d.term.length)}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-5 max-w-3xl">
            {DEFINITION_AFTER.map((p, i) => (
              <div key={i} className="space-y-5">
                <p
                  className={
                    i === 0
                      ? 'text-xl md:text-2xl font-semibold text-white leading-snug border-l-2 border-brand-gold pl-5 py-1'
                      : 'text-base text-gray-300 leading-relaxed'
                  }
                >
                  {p}
                </p>
                {i === 1 && <AuthorityLadder steps={AUTHORITY_STEPS} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What changed in this update */}
      <section id="update" className="py-16 md:py-24 bg-brand-dark border-t border-white/[0.06] scroll-mt-[128px]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">
            Updated <time dateTime={LAST_UPDATED}>{formatDate(LAST_UPDATED)}</time>
          </span>
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">What changed in this update</h2>
          <div className="space-y-5 text-base text-gray-300 leading-relaxed">
            {UPDATE_NOTES.map((p, i) => {
              const cut = p.indexOf('. ') + 1
              if (i === 0 || cut <= 0) return <p key={i}>{p}</p>
              return (
                <p key={i}>
                  <strong className="font-semibold text-white">{p.slice(0, cut)}</strong>
                  {p.slice(cut)}
                </p>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="py-16 md:py-24 bg-brand-dark border-t border-white/[0.06] scroll-mt-[128px]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">The AI commerce stack</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-10 max-w-3xl">{STACK_INTRO}</p>

          <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-5 md:p-8">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400">The flow</p>
              <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-gold">Authority increases ↓</p>
            </div>
            <div className="flex gap-3 sm:gap-4 mb-10">
              <div className="flex flex-col items-center w-3 shrink-0 py-1" aria-hidden="true">
                <span className="block w-2 h-2 rounded-full bg-[#42a5c8]/60" />
                <span className="block flex-1 w-px my-1 bg-gradient-to-b from-[#42a5c8]/40 to-brand-gold/80" />
                <span className="block w-2 h-2 rounded-full bg-brand-gold" />
              </div>
              <div className="flex-1 min-w-0">
            <p className="text-[12px] text-gray-400 mb-2">
              <span className="font-mono uppercase tracking-[0.12em] text-[10.5px] text-[#42a5c8] mr-2">Top</span>
              A mistake is a suggestion someone can ignore
            </p>
            <ol className="space-y-2">
              {STACK.map((stage, i) => (
                <li key={stage.layer} className="relative">
                  <div
                    className="grid sm:grid-cols-[150px_1fr_1fr] gap-x-5 gap-y-1 items-start bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3"
                    style={{ borderLeftColor: `rgba(197, 169, 78, ${0.15 + i * 0.12})`, borderLeftWidth: 3 }}
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="text-[11px] font-mono text-[#42a5c8] w-5 shrink-0" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[15px] font-semibold text-white">{stage.layer}</span>
                    </span>
                    <span className="text-[13px] text-gray-300 leading-relaxed">
                      <span className="sm:hidden text-[10.5px] font-mono uppercase tracking-[0.12em] text-gray-500 block">Decides</span>
                      {stage.decides}
                    </span>
                    <span className="text-[13px] text-gray-400 leading-relaxed">
                      <span className="sm:hidden text-[10.5px] font-mono uppercase tracking-[0.12em] text-gray-500 block">Authority needed</span>
                      {stage.authority}
                      {stage.see && (
                        <a href={stage.see.href} className="block mt-0.5 text-[11px] font-mono uppercase tracking-[0.12em] text-[#42a5c8] hover:text-white transition-colors duration-200">
                          {stage.see.label} →
                        </a>
                      )}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-[12px] text-gray-400 mt-2">
              <span className="font-mono uppercase tracking-[0.12em] text-[10.5px] text-brand-gold mr-2">Bottom</span>
              A mistake is an action someone has to reverse
            </p>
              </div>
            </div>

            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400 mb-5">
              The foundations underneath
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {FOUNDATIONS.map((f) => (
                <li key={f.name} className="bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3">
                  <span className="block text-[14px] font-semibold text-white mb-0.5">{f.name}</span>
                  <span className="block text-[12px] text-gray-400 leading-relaxed">{f.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 text-base text-gray-300 leading-relaxed mt-8 max-w-3xl">
            {STACK_AFTER.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mb-3">One storefront, two front doors</h3>
            <p className="text-base text-gray-300 leading-relaxed mb-7 max-w-3xl">
              The website is not replaced. One product record serves two interfaces, and the same team maintains
              both.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {INTERFACES.map((pane) => (
                <div key={pane.title} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
                  <span className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#42a5c8] mb-1.5">
                    {pane.audience}
                  </span>
                  <h4 className="text-[17px] font-bold text-white mb-4">{pane.title}</h4>
                  <ul className="space-y-2">
                    {pane.reads.map((r) => (
                      <li key={r} className="flex gap-2.5 text-[14px] text-gray-300 leading-relaxed">
                        <span className="block w-1 h-1 rounded-full bg-[#42a5c8]/70 mt-2 shrink-0" aria-hidden="true" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-[13px] font-mono uppercase tracking-[0.12em] text-gray-400 text-center mt-5">
              Both read the same product data
            </p>
          </div>
        </div>
      </section>

      {/* Nine shifts */}
      <section id="shifts" className="py-16 md:py-24 bg-brand-dark border-t border-white/[0.06] scroll-mt-[128px]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">
            The 2027 operating model: nine shifts
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">{SHIFTS_INTRO}</p>

          <ol className="grid sm:grid-cols-3 gap-2 mb-14">
            {SHIFTS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex gap-3 h-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2.5 text-[13px] text-gray-300 leading-snug hover:border-brand-accent/40 hover:text-white transition-colors duration-200"
                >
                  <span className="font-mono text-[#42a5c8] shrink-0">{s.number}</span>
                  <span>{s.title}</span>
                </a>
              </li>
            ))}
          </ol>

          <div className="space-y-16 divide-y divide-white/[0.06] [&>*:not(:first-child)]:pt-16">
            {SHIFTS.map((shift) => (
              <ShiftArticle key={shift.id} shift={shift} />
            ))}
          </div>
        </div>
      </section>

      {/* Counterarguments */}
      <section id="counterarguments" className="py-16 md:py-24 bg-[#1a2d37] border-y border-brand-gold/25 scroll-mt-[128px]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">
            The disconfirming case
          </span>
          <h2 className="text-2xl md:text-[2.25rem] font-bold text-white tracking-tight mb-4">
            The strongest case against this report
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">{COUNTER_INTRO}</p>
          <ul className="grid md:grid-cols-2 gap-4">
            {COUNTERARGUMENTS.map((item) => (
              <li
                key={item.claim}
                className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 border-l-2 border-l-brand-gold/50"
              >
                <h3 className="text-[15px] font-semibold text-white mb-2">{item.claim}</h3>
                <p className="text-[14px] text-gray-400 leading-relaxed">
                  <span className="text-brand-gold font-semibold">{item.verdict}.</span> {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Signal tracker */}
      <section id="signals" className="py-16 md:py-24 bg-brand-dark border-t border-white/[0.06] scroll-mt-[128px]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">2027 signal tracker</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">{SIGNALS_INTRO}</p>
          <SignalSummary />
          <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[860px] text-left border-collapse">
              <caption className="sr-only">Developments that would change confidence in the AI Commerce 2027 thesis</caption>
              <thead>
                <tr className="border-b border-white/[0.12]">
                  {['Signal to watch', 'Status', 'Why it matters', 'What it would change in the thesis'].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="py-3 pr-5 text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400 font-semibold"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SIGNALS.map((row) => (
                  <tr key={row.signal} className="border-b border-white/[0.06] align-top">
                    <th scope="row" className="py-4 pr-5 text-[14px] font-semibold text-white leading-snug">
                      {row.signal}
                    </th>
                    <td className="py-4 pr-5 text-[13px] leading-relaxed min-w-[160px]">
                      <StatusPill status={row.status} />
                      {row.statusNote && <span className="block text-[12px] text-gray-500 mt-1.5">{row.statusNote}</span>}
                    </td>
                    <td className="py-4 pr-5 text-[13px] text-gray-400 leading-relaxed">{row.why}</td>
                    <td className="py-4 pr-5 text-[13px] text-gray-300 leading-relaxed">{row.changes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Evidence tracker */}
      <section id="tracker" className="py-16 md:py-24 bg-brand-dark border-t border-white/[0.06] scroll-mt-[128px]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">
            2027 AI Commerce Evidence Tracker
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">
            Verified developments, newest first, updated through 2027. Entries record what changed, not what was
            promised, and link forward to the full analysis where one exists.
          </p>
          <EvidenceTrackerTable entries={EVIDENCE_TRACKER} />
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 md:py-24 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">What 2027 is actually about</h2>
          <div className="space-y-5 text-base text-gray-300 leading-relaxed">
            {CONCLUSION.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="text-lg text-white font-medium leading-relaxed mt-10 border-l-2 border-brand-gold pl-5">
            {CLOSING_QUESTION}
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section id="deeper" className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06] scroll-mt-[128px]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            Where this builds on earlier research
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            The pillar pages hold the frameworks this report builds on:{' '}
            <Link href="/geo" className="text-[#42a5c8] hover:text-white transition-colors duration-200">
              generative engine optimization
            </Link>{' '}
            for how AI systems find, describe and recommend products, and{' '}
            <Link href="/aeo" className="text-[#42a5c8] hover:text-white transition-colors duration-200">
              agentic engine optimization
            </Link>{' '}
            for what changes when software evaluates and buys. The evidence notes beneath each shift link to the
            full analysis of individual developments, and the tracker links forward as new research is published.
          </p>
        </div>
      </section>

      {/* Method */}
      <section className="py-14 md:py-16 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400 mb-4">Method and sources</h2>
          <p className="text-[14px] text-gray-400 leading-relaxed">{METHOD}</p>
        </div>
      </section>
    </>
  )
}
