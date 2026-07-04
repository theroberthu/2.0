import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import AEOTimeline from '@/components/AEOTimeline'
import { SITE_URL } from '@/lib/constants'

const AEO_DESCRIPTION =
  'Research on Agentic Engine Optimization (AEO): how AI shopping agents evaluate and buy products on behalf of customers as Alexa for Shopping goes live and Sparky drives reorder behavior. SEO makes products found, GEO makes them recommended, AEO makes them chosen.'

export const metadata: Metadata = {
  title: 'Agentic Engine Optimization (AEO): How AI Agents Buy',
  description: AEO_DESCRIPTION,
  alternates: { canonical: '/aeo' },
  openGraph: {
    title: 'Agentic Engine Optimization (AEO): How AI Agents Buy | Robert Hu',
    description: AEO_DESCRIPTION,
    url: `${SITE_URL}/aeo`,
    type: 'website',
    siteName: 'Robert Hu',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@theroberthu',
    creator: '@theroberthu',
    title: 'Agentic Engine Optimization (AEO): How AI Agents Buy | Robert Hu',
    description: AEO_DESCRIPTION,
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentic Engine Optimization (AEO) and AI Commerce',
  description:
    'Research on Agentic Engine Optimization (AEO): how AI shopping agents evaluate and buy products on behalf of customers. SEO makes products found, GEO makes them recommended, AEO makes them chosen.',
  url: `${SITE_URL}/aeo`,
  datePublished: '2026-03-19',
  dateModified: '2026-05-23',
  mainEntityOfPage: `${SITE_URL}/aeo`,
  isPartOf: {
    '@type': 'WebSite',
    url: SITE_URL,
  },
  about: [
    { '@type': 'Thing', name: 'Agentic Engine Optimization' },
    { '@type': 'Thing', name: 'AI Commerce' },
    { '@type': 'Thing', name: 'E-commerce' },
    { '@type': 'Thing', name: 'Product Listing Optimization' },
  ],
  author: {
    '@type': 'Person',
    name: 'Robert Hu',
    url: `${SITE_URL}/about`,
    jobTitle: 'Commerce and Technology Researcher',
    sameAs: [
      'https://www.linkedin.com/in/theroberthu',
      'https://x.com/theroberthu',
    ],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Robert Hu',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/theroberthulogo.png`,
    },
  },
}

const FAQS = [
  {
    q: 'Is AEO replacing GEO?',
    a: 'No. AEO builds on GEO, which builds on SEO. You need all three layers. SEO gets you found. GEO gets you recommended. AEO gets you purchased. Each layer supports the next. If you skip GEO, your AEO foundation doesn\'t exist.',
  },
  {
    q: 'Are AI shopping agents actually buying products today?',
    a: 'Yes, and at scale. Amazon launched Alexa for Shopping on May 13, 2026 with auto-restock, price-triggered purchases, and scheduled deliveries shipping today. Walmart\'s Sparky drove 35% higher AOV for users in Q1 FY27 with usage shifting toward reorder. Perplexity, OpenAI\'s OpenClaw, and Google AI Mode are all live. The early-version framing is outdated.',
  },
  {
    q: 'Do AI agents ignore paid ads?',
    a: 'Generally, yes. Agents optimize for product fit, not ad placement. They evaluate structured data, reviews, pricing, and fulfillment, not sponsored positions. This doesn\'t mean ads are dead, but it means your organic product data needs to be strong enough to win without them.',
  },
  {
    q: 'What\'s the difference between AEO and Answer Engine Optimization?',
    a: 'Different things, same acronym. Answer Engine Optimization focuses on featured snippets and voice search answers. Agentic Engine Optimization (what this page is about) focuses on AI agents that evaluate, compare, and purchase products on behalf of users. We\'re talking about agents that shop, not search engines that answer questions.',
  },
  {
    q: 'When should a $500K\u20135M brand start thinking about AEO?',
    a: 'Now. The window for treating this as theoretical is closed. Alexa for Shopping is live with auto-restock. Sparky shifted from discovery to reorder in Q1 FY27. Five major research firms (Morgan Stanley, McKinsey, Gartner, IDC, Juniper) agree agentic commerce reaches 10 to 20 percent of US e-commerce by 2030. The foundation work is the same as GEO, so it has zero downside risk. Start now.',
  },
  {
    q: 'Can I do AEO myself?',
    a: 'You can start by auditing your structured data completeness: check whether your listings have every attribute an agent would need to make a confident purchase decision. But a strategic AEO readiness assessment looks at the full picture across data, trust signals, pricing, fulfillment, and cross-platform consistency, which is where working with a specialist helps.',
  },
  {
    q: 'What if I only sell on Amazon?',
    a: 'AEO applies more directly now. Alexa for Shopping (the new name for Rufus post May 13, 2026) is the agent buying on Amazon\'s behalf. Auto-restock, price-triggered purchases, and scheduled deliveries are live. How your listings are structured (attributes, fulfillment signals, review quality) directly determines whether the agent reorders your product or a competitor\'s. Agents outside Amazon (Perplexity, OpenClaw, Google AI Mode) can still evaluate your Amazon listings.',
  },
  {
    q: 'How is AEO different from just having good product listings?',
    a: 'Good listings are necessary but not sufficient. AEO goes beyond accurate titles and bullet points. It requires machine-readable structured data across every attribute an agent might evaluate, explicit fulfillment and return policy signals, cross-platform data consistency, and review quality that holds up under sentiment analysis. A listing that looks good to a human shopper may still be missing what an agent needs to make a confident purchase decision.',
  },
  {
    q: 'Will AEO make SEO and GEO obsolete?',
    a: 'No. Think of it as a stack. SEO ensures your brand exists in traditional search. GEO ensures AI recommends you. AEO ensures agents choose you. Remove any layer and the ones above it weaken. The brands that win will be the ones optimized across all three.',
  },
  {
    q: 'How do I know if my products are ready for AEO?',
    a: 'Ask yourself: if an AI agent had to choose between your product and your top competitor\'s, with no human to persuade, no hero image to impress, no ad to click, would your structured data, reviews, pricing context, and fulfillment signals win? If you\'re not sure, that\'s your answer.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'AEO',
      item: `${SITE_URL}/aeo`,
    },
  ],
}

const SIGNALS: { name: string; description: string; status: string; href?: string }[] = [
  {
    name: 'Alexa for Shopping (formerly Rufus)',
    description: 'Amazon merged Rufus into Alexa for Shopping on May 13, 2026. Auto-restock, price-triggered purchases, and scheduled deliveries are shipping today across mobile, desktop, and Echo devices.',
    status: 'Live',
    href: '/blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers',
  },
  {
    name: 'Walmart Sparky',
    description: 'Live with cross-platform reach (ChatGPT + Gemini), now driving 35% higher AOV. Usage shifting from discovery to reorder per Q1 FY27 earnings.',
    status: 'Live',
    href: '/blog/walmart-sparky-q1-earnings-replenishment-shift',
  },
  {
    name: 'OpenAI ChatGPT + OpenClaw',
    description: 'ChatGPT Ads went self-serve May 5, 2026, crossing $100M in annualized revenue in six weeks of pilot. OpenClaw agent in beta.',
    status: 'Live',
    href: '/blog/chatgpt-ads-self-serve-geo-still-wins-marketplace-sellers',
  },
  {
    name: 'Google AI Mode + Gemini',
    description: 'AI Mode now processes 1B+ queries per month. Gemini writes shopping ad copy from product data. AI Mode rebranded to "Ask Google" on Android (April 29, 2026).',
    status: 'Live',
    href: '/blog/google-gemini-writes-ads-product-data-marketplace-sellers',
  },
  {
    name: 'Perplexity Shopping',
    description: 'AI-generated product recommendations with direct purchase capability. The user asks, the AI shops.',
    status: 'Live',
  },
  {
    name: 'Meta Hatch + Instagram Agent',
    description: 'Announced May 5, 2026. In internal testing. Hatch is Meta\'s consumer version of OpenAI\'s OpenClaw, with a separate agentic shopping tool inside Instagram.',
    status: 'Building',
    href: '/blog/meta-hatch-instagram-shopping-agent-marketplace-sellers',
  },
  {
    name: 'Apple Intelligence + Siri',
    description: 'Apple\'s AI layer is being built to act on behalf of users across their device ecosystem, including commerce.',
    status: 'Building',
  },
]

const EVALUATION_FACTORS = [
  {
    title: 'Structured Data Completeness',
    description: 'Agents can\'t infer what isn\'t explicitly stated. Every missing attribute (dimensions, materials, compatibility, certifications) is a reason to choose a competitor instead.',
  },
  {
    title: 'Price Transparency & Context',
    description: 'Agents compare across competitors instantly. Your price needs context: why it\'s premium, what\'s included, how it compares. Raw numbers without context lose.',
  },
  {
    title: 'Fulfillment & Logistics Signals',
    description: 'Shipping speed, fulfillment method, availability, return policy clarity. Agents are risk-averse. Ambiguity is a disqualifier.',
  },
  {
    title: 'Review Quality & Sentiment',
    description: 'Not just star ratings. Agents run sentiment analysis across review text. They can parse thousands of reviews in seconds and identify patterns humans would miss.',
  },
  {
    title: 'Cross-Platform Consistency',
    description: 'Agents pull from multiple sources. If your Amazon listing says one thing and your DTC site says another, the inconsistency creates friction. Agents avoid friction.',
  },
  {
    title: 'Brand Entity Clarity',
    description: 'Can the agent clearly identify what your brand is, what it sells, and how it\'s differentiated? Vague positioning gets skipped.',
  },
]

export default function AEOPage() {
  return (
    <>
      <SchemaMarkup data={pageSchema} />
      <SchemaMarkup data={faqSchema} />
      <SchemaMarkup data={breadcrumbSchema} />

      {/* ───────────────────── Hero ───────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark py-24 md:py-36">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-accent/[0.05] rounded-full blur-3xl -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-gold/[0.04] rounded-full blur-3xl translate-y-1/4 translate-x-1/4" />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-3xl md:text-[3rem] font-bold text-white leading-tight tracking-tight mb-6">
            The Shopper Is Becoming the Algorithm
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            AI agents are buying on behalf of your customers right now. Alexa
            for Shopping launched May 13, 2026. Sparky drove 35% higher AOV in
            Q1 FY27. The brands acting this quarter compound a structural
            advantage. The ones waiting will not know what happened.
          </p>

          {/* Tagline progression */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
            <span className="text-sm sm:text-base font-semibold text-gray-500 sm:pr-3">
              SEO gets you found.
            </span>
            <span className="hidden sm:block w-px h-5 bg-white/20" />
            <span className="text-sm sm:text-base font-semibold text-brand-accent sm:px-3">
              GEO gets you recommended.
            </span>
            <span className="hidden sm:block w-px h-5 bg-white/20" />
            <span className="text-sm sm:text-base font-bold text-brand-gold sm:pl-3">
              AEO gets you purchased.
            </span>
          </div>
        </div>
      </section>

      {/* ───────────────────── The Shift ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4">
            The Shift
          </span>
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-8">
            The Assumption That Just Broke
          </h2>

          <div className="space-y-5 text-base text-gray-300 leading-relaxed">
            <p>
              For 25 years, e-commerce optimization has assumed the buyer is a
              human. Someone scrolling, scanning, clicking, comparing tabs. Every
              strategy, from SEO to PPC to listing optimization, is built
              around human attention and human decision-making.
            </p>
            <p>That assumption broke this quarter.</p>
            <p>
              AI shopping agents are now live that don&apos;t browse like humans.
              They don&apos;t see your hero image. They don&apos;t read your
              clever headline. They don&apos;t click your sponsored ad. They
              parse structured data, evaluate trust signals, compare attributes,
              and make purchase decisions (or recommendations so strong
              they&apos;re functionally decisions) on behalf of the user.
            </p>
          </div>

          <p className="mt-8 text-sm text-brand-accent/80 font-medium border-l-2 border-brand-accent pl-4">
            This is not a prediction about 2030. Alexa for Shopping is live.
            Sparky is operational. The trajectory has become a current quarter
            results story.
          </p>
        </div>
      </section>

      {/* ───────────────────── The Signals ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
              </span>
              Signal Observatory
            </span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-3">
              Every Major Platform Is Building Toward the Same Future
            </h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto">
              These aren&apos;t isolated experiments. They&apos;re waypoints on a trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SIGNALS.map((signal) => (
              <div
                key={signal.name}
                className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 hover:border-brand-accent/30 transition-colors duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[15px] font-semibold text-white group-hover:text-brand-accent transition-colors duration-300">
                    {signal.href ? (
                      <Link href={signal.href} className="hover:underline underline-offset-4">
                        {signal.name}
                      </Link>
                    ) : (
                      signal.name
                    )}
                  </h3>
                  <span
                    className={`text-[10px] font-mono font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full shrink-0 ml-3 ${
                      signal.status === 'Live'
                        ? 'text-emerald-400/80 bg-emerald-400/[0.1]'
                        : signal.status === 'Expanding'
                        ? 'text-brand-gold/80 bg-brand-gold/[0.1]'
                        : 'text-brand-accent/80 bg-brand-accent/[0.1]'
                    }`}
                  >
                    {signal.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {signal.description}
                  {signal.href && (
                    <>
                      {' '}
                      <Link href={signal.href} className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">
                        Read the analysis &rarr;
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── The Research Consensus ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4">
            The Research Consensus
          </span>
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            Five Major Research Firms. One Direction.
          </h2>

          <div className="space-y-5 text-base text-gray-300 leading-relaxed">
            <p>
              AEO is no longer a single-source forecast. Morgan Stanley,
              McKinsey, Gartner, IDC, and Juniper Research have all published
              agentic commerce forecasts in the last six months. They converge
              on 10 to 20 percent of US e-commerce by 2030, with McKinsey
              projecting $900 billion in US B2C agentic opportunity and Gartner
              reporting that 48% of retailers plan to deploy agentic AI in 2026.
            </p>
            <p className="text-brand-gold/90 font-medium border-l-2 border-brand-gold pl-4">
              The forecast risk has collapsed.
            </p>
          </div>

          <Link
            href="/blog/agentic-commerce-consensus-research-forecasts-marketplace-sellers"
            className="inline-flex items-center gap-2 mt-8 text-[13px] font-semibold text-brand-accent hover:text-white transition-colors duration-200"
          >
            Read the full synthesis: The Agentic Commerce Consensus
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ───────────────────── The Question Nobody's Asking ───────────────────── */}
      <section className="relative py-20 md:py-28 bg-brand-dark border-t border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/60 via-brand-dark to-brand-dark" />
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-brand-accent/[0.04] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400/70 mb-4">
            The Provocation
          </span>
          <h2 className="text-2xl md:text-[2.25rem] font-bold text-white tracking-tight mb-8 leading-snug">
            What Happens to Your Ad Spend When the Shopper Is an Algorithm?
          </h2>

          <div className="space-y-5 text-base text-gray-300 leading-relaxed">
            <p>
              Right now, most e-commerce brands spend 20 to 40% of revenue on
              paid advertising. That spend assumes a human shopper will see the
              ad, click it, and convert.
            </p>
            <p>
              AI agents don&apos;t click ads. They don&apos;t see sponsored
              placements. They evaluate product data.
            </p>
            <p>
              If 10% of your sales eventually come through agent-mediated
              shopping, and your organic product data isn&apos;t strong enough to
              win on merit, you don&apos;t just lose that 10%. You lose it to a
              competitor whose data is better.
            </p>
          </div>

          {/* Pull quote */}
          <div className="my-10 py-6 border-y border-white/[0.08]">
            <p className="text-lg md:text-xl font-semibold text-brand-gold leading-snug">
              &ldquo;The brands spending the most on ads may be the most
              vulnerable. They&apos;ve been able to buy visibility
              instead of earning it through data quality.&rdquo;
            </p>
          </div>

          <p className="text-base text-gray-300 leading-relaxed">
            This isn&apos;t an argument against paid ads. It&apos;s an argument
            that paid ads alone are no longer a sufficient strategy.
          </p>
        </div>
      </section>

      {/* ───────────────────── What Is AEO? ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">
            Definition
          </span>
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            What Is Agentic Engine Optimization?
          </h2>

          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Agentic Engine Optimization (AEO) is the practice of preparing your
            products, listings, and digital presence to be evaluated, compared,
            and selected by AI shopping agents acting on behalf of consumers.
          </p>

          <p className="text-base text-gray-300 leading-relaxed mb-8">
            AEO was forward-looking as recently as Q1 2026. It is operational
            now. Amazon merged Rufus into{' '}
            <Link href="/blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">
              Alexa for Shopping
            </Link>{' '}
            with auto-restock, price-triggered purchases, and scheduled
            deliveries shipping today. Walmart&apos;s Q1 FY27 earnings showed{' '}
            <Link href="/blog/walmart-sparky-q1-earnings-replenishment-shift" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">
              Sparky users have 35% higher AOV and units up 4x sequentially
            </Link>
            , with usage shifting from discovery to reorder. Five major research
            firms (Morgan Stanley, McKinsey, Gartner, IDC, Juniper Research) now
            agree agentic commerce will represent 10 to 20 percent of US
            e-commerce by 2030. The forecast risk has collapsed.
          </p>

          {/* SEO / GEO / AEO visual progression */}
          <div className="relative mb-10">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gray-600 via-brand-accent to-brand-gold hidden md:block" />

            <div className="space-y-4 md:space-y-0 md:grid md:grid-rows-3 md:gap-4">
              {/* SEO: Foundation */}
              <div className="relative md:pl-16">
                <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gray-500 border-2 border-brand-dark ring-2 ring-gray-500/30" />
                </div>
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-gray-500 bg-gray-500/[0.1] px-2.5 py-1 rounded-full">
                      Foundation
                    </span>
                    <span className="text-[15px] font-semibold text-gray-400">SEO</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Ensures you&apos;re findable in traditional search. Keywords,
                    rankings, organic traffic.
                  </p>
                </div>
              </div>

              {/* GEO: Middle layer */}
              <div className="relative md:pl-16">
                <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-brand-accent border-2 border-brand-dark ring-2 ring-brand-accent/30" />
                </div>
                <div className="bg-white/[0.05] border border-brand-accent/20 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-brand-accent bg-brand-accent/[0.1] px-2.5 py-1 rounded-full">
                      Discovery
                    </span>
                    <span className="text-[15px] font-semibold text-brand-accent">GEO</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Ensures you&apos;re recommended by AI-powered search.{' '}
                    <Link href="/geo" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>

              {/* AEO: Top layer */}
              <div className="relative md:pl-16">
                <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-brand-gold border-2 border-brand-dark ring-2 ring-brand-gold/30" />
                </div>
                <div className="bg-brand-gold/[0.06] border border-brand-gold/25 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-brand-gold bg-brand-gold/[0.15] px-2.5 py-1 rounded-full">
                      Transaction
                    </span>
                    <span className="text-[15px] font-semibold text-brand-gold">AEO</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Ensures you&apos;re chosen when an AI agent is making or
                    influencing a purchase decision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-brand-accent/80 font-medium border-l-2 border-brand-gold pl-4">
            GEO is about being mentioned. AEO is about being selected. The
            difference is the gap between &ldquo;ChatGPT recommended your
            product&rdquo; and &ldquo;an AI agent bought your product for the
            customer.&rdquo;
          </p>
        </div>
      </section>

      {/* ───────────────────── What Agents Evaluate ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3">
              How the Machine Thinks
            </span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              What Agents Actually Evaluate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EVALUATION_FACTORS.map((factor, i) => (
              <div
                key={factor.title}
                className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 hover:border-brand-accent/30 transition-colors duration-300"
              >
                <div className="flex gap-4 items-start">
                  <span className="text-[11px] font-mono font-bold text-brand-accent/40 tracking-widest mt-1 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white mb-2">
                      {factor.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── Timeline ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">
              The Arc
            </span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-3">
              How We Got Here and Where This Goes
            </h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto">
              Each era built on the last. AEO isn&apos;t a fad. It&apos;s the next
              logical step. Click any milestone to expand.
            </p>
          </div>

          <AEOTimeline />
        </div>
      </section>

      {/* ───────────────────── When Should You Act? ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4">
            Readiness
          </span>
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-10">
            When Should You Act?
          </h2>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="bg-white/[0.05] backdrop-blur-md border border-emerald-400/20 rounded-xl p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-emerald-400/80 bg-emerald-400/[0.1] px-2.5 py-1 rounded-full">
                  Right Now
                </span>
                <span className="text-[13px] font-semibold text-white">
                  Q2 2026: Foundation Work Compounds Immediately
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                Agent-mediated shopping is operational. Sparky users drive 35%
                higher AOV. Alexa for Shopping is shipping auto-restock,
                price-triggered purchases, and scheduled deliveries today. The
                brands that started the GEO foundation in Q1 2026 are already
                90 days ahead. The work that wins agentic visibility is the
                same work that wins organic AI recommendation: structured data
                completeness, review quality, entity clarity, cross-platform
                consistency.
              </p>
              <p className="text-sm text-brand-accent/80 font-medium">
                GEO is AEO preparation. The compounding has already started.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-white/[0.05] backdrop-blur-md border border-brand-gold/20 rounded-xl p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-brand-gold/80 bg-brand-gold/[0.1] px-2.5 py-1 rounded-full">
                  Next 6&ndash;12 Months
                </span>
                <span className="text-[13px] font-semibold text-white">
                  Default-Reorder Positions Lock In
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                As Alexa for Shopping auto-restock and Sparky reorder behavior
                accumulate purchase history per household, the agent&apos;s
                default reorder choice gets harder to dislodge each cycle.
                Subscription enrollment, consumption-cadence data, in-stock
                consistency, and pricing stability become the operational
                levers. AEO-specific moves around machine-readable fulfillment
                and return policy signals start mattering directly to
                conversion.
              </p>
              <p className="text-sm text-brand-gold/80 font-medium">
                The brands acting this quarter own the default-reorder position
                a year from now.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-gray-400/80 bg-gray-400/[0.1] px-2.5 py-1 rounded-full">
                  2027+
                </span>
                <span className="text-[13px] font-semibold text-white">
                  Consolidation: AEO Becomes the Competitive Differentiator
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                Agent-mediated shopping reaches the 10 to 20 percent share the
                research consensus projects. The brands that built the GEO
                foundation early and layered AEO preparation on top will own
                structural advantages that are expensive to reverse: default
                reorder positions, subscription enrollment depth, and clean
                data feeding both paid and organic AI surfaces.
              </p>
              <p className="text-sm text-gray-500 font-medium">
                The brands that waited will be playing catch-up across two
                layers of optimization simultaneously.
              </p>
            </div>
          </div>

          {/* Key message */}
          <div className="mt-8 py-5 border-l-2 border-brand-gold pl-4">
            <p className="text-sm text-brand-gold/90 font-medium leading-relaxed">
              The window for treating this as theoretical is closed. Start now.
              Starting means GEO.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────── The GEO to AEO Bridge ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            Already Doing GEO? You&apos;re Ahead.
          </h2>

          <p className="text-base text-gray-300 leading-relaxed mb-5">
            The good news: if you&apos;re already doing GEO right, you have a
            head start. GEO creates the foundation AEO needs. Structured data,
            entity clarity, AI readability. AEO adds the transaction layer on
            top.
          </p>

          <p className="text-base text-gray-300 leading-relaxed mb-8">
            The risk: if you&apos;ve been ignoring GEO, you now have two layers
            of optimization to catch up on. And the brands that started with GEO
            early are already closer to AEO readiness than you are.
          </p>

          <Link
            href="/geo"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-brand-accent hover:text-white transition-colors duration-200"
          >
            Start with Generative Engine Optimization
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* ───────────────────── FAQ ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">FAQ</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6"
              >
                <h3 className="text-[15px] font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── CTA ───────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28 border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/80 via-brand-dark to-brand-dark" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white leading-snug mb-4 tracking-tight">
            This Shift Isn&apos;t Waiting for You to Be Ready
          </h2>
          <p className="text-sm text-gray-400 mb-10 max-w-lg mx-auto">
            Agentic commerce is operational now. The brands acting in Q2 2026
            compound a structural advantage that is hard to reverse. Start with
            the GEO foundation, and follow the analysis on where your brand
            likely stands on the AEO readiness spectrum.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-gold text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Subscribe to Hu&apos;s Weekly Hoot
            </a>
            <Link
              href="/geo"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent hover:text-white transition-colors duration-200"
            >
              Start with GEO
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="mt-5">
            <Link
              href="/blog"
              className="text-[12px] text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              Read my latest thinking &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────── Closing Line ───────────────────── */}
      <section className="py-14 md:py-16 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-base md:text-lg font-medium text-gray-500 italic">
            Your next customer might not be a person. Make sure your product is
            ready anyway.
          </p>
        </div>
      </section>
    </>
  )
}
