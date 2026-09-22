import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'
import {
  COMPARISON,
  DISCONFIRMING,
  EVIDENCE_TRACKER,
  FLOW,
  FOUNDATIONS,
  LAST_UPDATED,
  PUBLISHED,
  READING_MINUTES,
  SHIFTS,
  WATCHLIST,
} from '@/lib/ai-commerce-2027'

const DESCRIPTION =
  'A research outlook on AI commerce in 2027: what changed in 2026 across agentic checkout, product data, permissions, payments and measurement, what it enables next, and what remains unproven.'

export const metadata: Metadata = {
  title: 'AI Commerce 2027: Trends, Agentic Commerce and Ecommerce Outlook',
  description: DESCRIPTION,
  alternates: { canonical: '/ai-commerce-2027' },
  openGraph: {
    title: 'AI Commerce 2027: Trends, Agentic Commerce and Ecommerce Outlook | Robert Hu',
    description: DESCRIPTION,
    url: `${SITE_URL}/ai-commerce-2027`,
    type: 'article',
    images: [
      {
        url: '/images/research/ai-commerce-2027.png',
        width: 1200,
        height: 630,
        alt: 'AI Commerce 2027: From Experiment to Operating Model. Infrastructure exists. Adoption evidence does not.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@theroberthu',
    creator: '@theroberthu',
    title: 'AI Commerce 2027: Trends, Agentic Commerce and Ecommerce Outlook | Robert Hu',
    description: DESCRIPTION,
    images: ['/images/research/ai-commerce-2027.png'],
  },
}

const reportSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Commerce 2027: From Experiment to Operating Model',
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
    jobTitle: 'Commerce and Technology Researcher',
    sameAs: ['https://www.linkedin.com/in/theroberthu', 'https://x.com/theroberthu'],
  },
  publisher: { '@type': 'Organization', name: 'Robert Hu', url: SITE_URL },
}

const SECTIONS = [
  { id: 'thesis', label: 'Thesis' },
  { id: 'two-models', label: 'Two models' },
  { id: 'stack', label: 'The stack' },
  { id: 'shifts', label: 'Eight shifts' },
  { id: 'wrong', label: 'What would prove this wrong' },
  { id: 'comparison', label: 'Comparison' },
  { id: 'watch', label: 'What to watch' },
  { id: 'tracker', label: 'Evidence tracker' },
  { id: 'deeper', label: 'Go deeper' },
]

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-')
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  if (!d) return `${months[Number(m) - 1]} ${y}`
  return `${months[Number(m) - 1]} ${Number(d)}, ${y}`
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
          <h1 className="text-3xl md:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-5">
            AI Commerce 2027: From Experiment to Operating Model
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-8">
            2026 built much of the infrastructure. 2027 will show whether businesses can turn AI commerce
            into a governed operating model.
          </p>
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

      {/* Executive thesis */}
      <section id="thesis" className="py-16 md:py-24 bg-brand-dark scroll-mt-[128px]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">The thesis</h2>
          <div className="space-y-5 text-base text-gray-300 leading-relaxed">
            <p>
              2026 was the year a lot of AI commerce infrastructure stopped being a demo. An open protocol for
              agent to merchant transactions shipped and gained capabilities. A luxury brand made its products
              buyable inside a chat interface. Payment networks began agreeing on how to identify an agent.
              A content network split crawler permission into four separate decisions. Merchant side agents
              arrived with approval gates built in.
            </p>
            <p>
              What did not arrive was evidence of use. I could not find a single platform, network or retailer
              publishing transaction volume for agent initiated purchases. That gap is the honest center of this
              report. 2026 produced capability. 2027 is when capability either becomes an operating model or
              stays a set of integrations nobody routes real volume through.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-white leading-snug border-l-2 border-brand-gold pl-5 py-1">
              Infrastructure exists. Adoption evidence does not. Holding those two apart is the whole
              discipline of reading this year correctly.
            </p>
            <p>
              The distinction that organizes everything here is between AI assisted ecommerce, where a person
              still owns the journey and AI makes the work faster, and AI commerce, where software participates
              with some combination of identity, delegated authority, structured access to a catalog, permissions
              and the ability to transact. The first is already normal. The second is being built. The likely
              2027 environment is hybrid, and the interesting operating question is not which one wins but which
              decisions a business is willing to move.
            </p>
            <p>
              This report does not predict winners. Company names are used as evidence of what architectures are
              being built, and the argument should survive if those names change. Where something is verified I
              say so. Where it is my interpretation I say that too, and where the evidence is missing I say that
              most clearly of all.
            </p>
          </div>
        </div>
      </section>

      {/* Two models */}
      <section id="two-models" className="py-16 md:py-24 bg-brand-dark border-t border-white/[0.06] scroll-mt-[128px]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            AI assisted ecommerce and AI commerce
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
              <h3 className="text-[13px] font-mono uppercase tracking-[0.15em] text-gray-400 mb-3">
                AI assisted ecommerce
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                A person owns the customer journey. AI improves search, content, merchandising, advertising,
                analytics, operations and service. The work gets faster and the accountability does not move.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-brand-accent/25 rounded-xl p-6">
              <h3 className="text-[13px] font-mono uppercase tracking-[0.15em] text-[#42a5c8] mb-3">
                AI commerce
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                Software becomes a participant, with some combination of identity, delegated authority,
                structured product access, tools, permissions, transaction capability and the ability to service
                what it bought.
              </p>
            </div>
          </div>
          <p className="text-base text-gray-300 leading-relaxed">
            These coexist. Nothing in the 2026 record suggests AI assisted ecommerce is going away, and most
            commerce in 2027 will still be a person on a website or in an app. The useful framing for an operator
            is that a business now runs both models at once and has to decide, capability by capability, which one
            a given workflow belongs to.
          </p>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="py-16 md:py-24 bg-brand-dark border-t border-white/[0.06] scroll-mt-[128px]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">
            The AI commerce stack
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-10 max-w-3xl">
            AI commerce is not one technology. It is a sequence of steps, each owned by different systems and
            often by different companies, sitting on shared infrastructure. Most current failures are not model
            failures. They happen where one layer hands off to the next.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-5 md:p-8">
            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400 mb-5">The flow</p>
            <ol className="space-y-2 mb-10">
              {FLOW.map((stage, i) => (
                <li key={stage.name} className="relative">
                  <div className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3">
                    <span className="text-[11px] font-mono text-[#42a5c8] pt-1 w-6 shrink-0" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <span className="block text-[15px] font-semibold text-white">{stage.name}</span>
                      <span className="block text-[13px] text-gray-400 leading-relaxed">{stage.note}</span>
                    </div>
                  </div>
                  {i < FLOW.length - 1 && (
                    <span className="block w-px h-3 bg-brand-accent/30 ml-[34px]" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>

            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400 mb-5">
              The infrastructure underneath
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

          <p className="text-sm text-[#42a5c8]/80 font-medium border-l-2 border-brand-accent pl-4 mt-8 max-w-3xl">
            An operator reading this diagram should notice how much of it they already own. Product data,
            merchant systems and measurement are not new responsibilities. What is new is how many other systems
            now read them.
          </p>
        </div>
      </section>

      {/* Eight shifts */}
      <section id="shifts" className="py-16 md:py-24 bg-brand-dark border-t border-white/[0.06] scroll-mt-[128px]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">
            Eight shifts to watch in 2027
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-12 max-w-3xl">
            Each shift separates four things: what changed in 2026 and can be verified, what that plausibly
            enables in 2027, what is still unproven, and the specific development that would strengthen or
            weaken the argument. Where the evidence only supports a hypothesis, it is written as one.
          </p>

          <div className="space-y-14">
            {SHIFTS.map((shift) => (
              <article key={shift.id} id={shift.id} className="scroll-mt-[128px]">
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="text-[13px] font-mono text-[#42a5c8]">{shift.number}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                    {shift.title}
                  </h3>
                </div>

                <h4 className="text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400 mb-3">
                  What changed in 2026
                </h4>
                <ul className="space-y-3 mb-7">
                  {shift.changed2026.map((item, i) => (
                    <li key={i} className="flex gap-3 text-base text-gray-300 leading-relaxed">
                      <span className="text-[#42a5c8]/60 pt-1.5 shrink-0" aria-hidden="true">
                        <span className="block w-1.5 h-1.5 rounded-full bg-brand-accent/60" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400 mb-3">
                  What that enables in 2027
                </h4>
                <div className="space-y-4 mb-7">
                  {shift.enables2027.map((item, i) => (
                    <p key={i} className="text-base text-gray-300 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>

                <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 mb-5">
                  <h4 className="text-[11px] font-mono uppercase tracking-[0.15em] text-brand-gold mb-2">
                    What remains unproven
                  </h4>
                  <p className="text-[15px] text-gray-300 leading-relaxed">{shift.unproven}</p>
                </div>

                <p className="text-[15px] text-gray-400 leading-relaxed border-l-2 border-brand-accent/40 pl-4">
                  <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#42a5c8] block mb-1">
                    Signal to watch
                  </span>
                  {shift.signal}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What would prove this wrong */}
      <section id="wrong" className="py-16 md:py-24 bg-[#1a2d37] border-y border-brand-gold/25 scroll-mt-[128px]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">
            The disconfirming case
          </span>
          <h2 className="text-2xl md:text-[2.25rem] font-bold text-white tracking-tight mb-4">
            What would prove this wrong
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">
            The thesis is that commerce systems are increasingly being built on the assumption that software may
            be a participant. Here is the evidence that would undermine it, and I would rather find it early than
            defend the argument.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {DISCONFIRMING.map((item) => (
              <li
                key={item.claim}
                className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 border-l-2 border-l-brand-gold/50"
              >
                <h3 className="text-[15px] font-semibold text-white mb-1.5">{item.claim}</h3>
                <p className="text-[14px] text-gray-400 leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Comparison table */}
      <section id="comparison" className="py-16 md:py-24 bg-brand-dark border-t border-white/[0.06] scroll-mt-[128px]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">
            The two models side by side
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">
            This is a contrast, not a migration path. Most businesses are likely to operate in both columns at once,
            and a workflow can sit in the left column while the one next to it sits in the right.
          </p>
          <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[640px] text-left border-collapse">
              <caption className="sr-only">
                Comparison of AI assisted ecommerce and AI commerce across nine operating dimensions
              </caption>
              <thead>
                <tr className="border-b border-white/[0.12]">
                  <th scope="col" className="py-3 pr-4 text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400 font-semibold">
                    Dimension
                  </th>
                  <th scope="col" className="py-3 px-4 text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400 font-semibold">
                    AI assisted ecommerce
                  </th>
                  <th scope="col" className="py-3 pl-4 text-[11px] font-mono uppercase tracking-[0.15em] text-[#42a5c8] font-semibold">
                    AI commerce
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.dimension} className="border-b border-white/[0.06] align-top">
                    <th scope="row" className="py-4 pr-4 text-[14px] font-semibold text-white whitespace-nowrap">
                      {row.dimension}
                    </th>
                    <td className="py-4 px-4 text-[14px] text-gray-400 leading-relaxed">{row.assisted}</td>
                    <td className="py-4 pl-4 text-[14px] text-gray-300 leading-relaxed">{row.commerce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Watchlist */}
      <section id="watch" className="py-16 md:py-24 bg-brand-dark border-t border-white/[0.06] scroll-mt-[128px]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">
            What operators should watch in 2027
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">
            No score and no probability. These are the developments that would tell an operator whether the
            operating model is arriving, and roughly in the order they would matter.
          </p>
          <ol className="space-y-3">
            {WATCHLIST.map((item, i) => (
              <li
                key={item.signal}
                className="flex gap-4 bg-white/[0.03] border border-white/[0.08] rounded-lg px-5 py-4"
              >
                <span className="text-[12px] font-mono text-[#42a5c8] pt-1 shrink-0" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <span className="block text-[15px] font-semibold text-white leading-snug">{item.signal}</span>
                  <span className="block text-[13px] text-gray-400 leading-relaxed mt-0.5">{item.why}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Evidence tracker */}
      <section id="tracker" className="py-16 md:py-24 bg-brand-dark border-t border-white/[0.06] scroll-mt-[128px]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">
            2027 AI Commerce Evidence Tracker
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8 max-w-3xl">
            Seeded with the strongest verified 2026 developments and updated through 2027 as evidence arrives.
            Entries record what actually changed, not what was promised, and link forward to the full analysis
            where one exists.
          </p>
          <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[880px] text-left border-collapse">
              <caption className="sr-only">
                Tracker of verified AI commerce developments, newest first
              </caption>
              <thead>
                <tr className="border-b border-white/[0.12]">
                  {['Date', 'Company', 'Development', 'Affects', 'Evidence type', 'What changed'].map((h) => (
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
                {EVIDENCE_TRACKER.map((row) => (
                  <tr key={`${row.date}-${row.org}`} className="border-b border-white/[0.06] align-top">
                    <td className="py-4 pr-5 text-[13px] font-mono text-gray-400 whitespace-nowrap">
                      {formatDate(row.date)}
                    </td>
                    <td className="py-4 pr-5 text-[13px] font-semibold text-white">{row.org}</td>
                    <td className="py-4 pr-5 text-[13px] text-gray-300 leading-relaxed">
                      {row.development}
                      {row.href && (
                        <Link
                          href={row.href}
                          className="block mt-1 text-[12px] text-[#42a5c8] hover:text-white transition-colors duration-200"
                        >
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
      </section>

      {/* Where this connects to earlier research */}
      <section id="deeper" className="py-16 md:py-24 bg-brand-dark border-t border-white/[0.06] scroll-mt-[128px]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            Where this builds on earlier research
          </h2>
          <div className="space-y-5 text-base text-gray-300 leading-relaxed">
            <p>
              This report synthesizes work published across 2026 rather than repeating it. The two pillar pages
              hold the underlying frameworks:{' '}
              <Link href="/geo" className="text-[#42a5c8] hover:text-white transition-colors duration-200">
                generative engine optimization
              </Link>{' '}
              for how AI systems find and describe products, and{' '}
              <Link href="/aeo" className="text-[#42a5c8] hover:text-white transition-colors duration-200">
                agentic engine optimization
              </Link>{' '}
              for what changes when software evaluates and buys.
            </p>
            <p>
              On the transaction layer, I covered{' '}
              <Link
                href="/blog/amazon-joins-universal-commerce-protocol"
                className="text-[#42a5c8] hover:text-white transition-colors duration-200"
              >
                the governance body forming around the protocol
              </Link>{' '}
              and{' '}
              <Link
                href="/blog/anthropic-claude-commerce-intelligence-layer"
                className="text-[#42a5c8] hover:text-white transition-colors duration-200"
              >
                the blueprint that separates intelligence from merchant ownership
              </Link>
              . On trust,{' '}
              <Link
                href="/blog/visa-mastercard-know-your-agent-interoperability"
                className="text-[#42a5c8] hover:text-white transition-colors duration-200"
              >
                the know your agent collaboration
              </Link>{' '}
              covers buyer side identity,{' '}
              <Link
                href="/blog/ant-international-account-for-agent-merchant-operations"
                className="text-[#42a5c8] hover:text-white transition-colors duration-200"
              >
                Account for Agent
              </Link>{' '}
              points the same machinery inward, and{' '}
              <Link
                href="/blog/npci-upi-ai-agent-authorization"
                className="text-[#42a5c8] hover:text-white transition-colors duration-200"
              >
                the rail level argument
              </Link>{' '}
              holds that deterministic systems, not models, should decide that money moves.
            </p>
            <p>
              On data and measurement, the{' '}
              <Link
                href="/blog/product-data-shared-infrastructure-google-ai-mode"
                className="text-[#42a5c8] hover:text-white transition-colors duration-200"
              >
                Google AI Mode teardown
              </Link>{' '}
              established product data as shared infrastructure,{' '}
              <Link
                href="/blog/reviews-ai-discovery-infrastructure-bazaarvoice-bluefish"
                className="text-[#42a5c8] hover:text-white transition-colors duration-200"
              >
                customer reviews
              </Link>{' '}
              turned out to be a delivery problem before a content problem,{' '}
              <Link
                href="/blog/google-search-console-generative-ai-visibility"
                className="text-[#42a5c8] hover:text-white transition-colors duration-200"
              >
                Search Console
              </Link>{' '}
              gave visibility without traffic, and{' '}
              <Link
                href="/blog/niq-similarweb-agentic-commerce-measurement"
                className="text-[#42a5c8] hover:text-white transition-colors duration-200"
              >
                the measurement problem
              </Link>{' '}
              remains the constraint on all of it.{' '}
              <Link
                href="/blog/ai-visibility-permission-stack-cloudflare"
                className="text-[#42a5c8] hover:text-white transition-colors duration-200"
              >
                Permission
              </Link>{' '}
              sits between retrievability and use.
            </p>
            <p>
              On the operating side,{' '}
              <Link
                href="/blog/helium-10-mcp-ecommerce-software-infrastructure"
                className="text-[#42a5c8] hover:text-white transition-colors duration-200"
              >
                ecommerce software became infrastructure agents query
              </Link>
              ,{' '}
              <Link
                href="/blog/klaviyo-headless-agent-controls"
                className="text-[#42a5c8] hover:text-white transition-colors duration-200"
              >
                controls became the product
              </Link>{' '}
              once agents could write,{' '}
              <Link
                href="/blog/noibu-ai-agents-closed-loop-ecommerce"
                className="text-[#42a5c8] hover:text-white transition-colors duration-200"
              >
                validation became the harder half
              </Link>{' '}
              of any agent workflow, and{' '}
              <Link
                href="/blog/openai-sponsored-agents-chatgpt-ads-shopify"
                className="text-[#42a5c8] hover:text-white transition-colors duration-200"
              >
                the ad click started becoming a conversation
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 md:py-24 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            What 2027 is actually about
          </h2>
          <div className="space-y-5 text-base text-gray-300 leading-relaxed">
            <p>
              The version of this story that gets told loudest is that consumers will hand their shopping to
              agents. I do not think that is what 2027 is about, and the current evidence does not support it.
              Every production implementation I can verify still puts a person in front of the purchase.
            </p>
            <p>
              What has actually changed is quieter and harder to reverse. Commerce systems are increasingly being
              built on the assumption that software may be a participant. Protocols assume an agent is on the
              other end. Payment networks are designing identity for something that is not a person. Content
              infrastructure now asks which kind of machine is asking and what it intends to do. Merchant tools
              ship with approval gates because the thing using them can act.
            </p>
            <p>
              That assumption is now embedded in the plumbing whether or not consumers change their behavior next
              year. It is the reason the practical 2027 question for an operator is not whether to believe in
              agentic commerce. It is which of your workflows you are prepared to let software execute, under
              what limits, with what evidence retained afterward.
            </p>
          </div>
          <p className="text-lg text-white font-medium leading-relaxed mt-10 border-l-2 border-brand-gold pl-5">
            If software can already transact with your business, what have you actually decided it is allowed
            to do?
          </p>
        </div>
      </section>

      {/* Source note */}
      <section className="py-14 md:py-16 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400 mb-4">
            Method and sources
          </h2>
          <div className="space-y-4 text-[14px] text-gray-400 leading-relaxed">
            <p>
              Claims here are drawn from primary sources where they exist: company announcements and product
              documentation from Google, OpenAI, Ant International, Cloudflare, Sabre and Tapestry, standards
              drafts, and published research papers. Where a figure comes from a company describing its own
              product, it is attributed to that company rather than stated as fact.
            </p>
            <p>
              Benchmark results cited in shift eight come from simulations. None of the published commerce agent
              benchmarks evaluate agents operating real merchant accounts, and none should be read as evidence
              about production performance.
            </p>
            <p>
              Absence of evidence is reported as the limit of my own search rather than as proof of absence. In
              particular, I found no published transaction volume for agent initiated purchases as of
              September 2026. If that data exists somewhere I have not looked, the first shift in this report is
              the one most likely to need revision.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
