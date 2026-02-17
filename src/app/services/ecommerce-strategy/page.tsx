import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'E-commerce Strategy',
  description:
    'Strategic e-commerce consulting for brands selling on Amazon, Walmart, and DTC. Marketplace strategy, listing optimization, catalog planning, pricing, and growth roadmapping.',
  alternates: { canonical: '/services/ecommerce-strategy' },
  openGraph: {
    title: 'E-commerce Strategy | Robert Hu - E-commerce Strategist',
    description:
      'Strategic e-commerce consulting for brands selling on Amazon, Walmart, and DTC. Marketplace strategy, listing optimization, catalog planning, pricing, and growth roadmapping.',
    url: `${SITE_URL}/services/ecommerce-strategy`,
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'E-commerce Strategy',
  serviceType: 'E-commerce Consulting',
  description:
    'Strategic consulting for brands selling on Amazon, Walmart, and DTC — from listing optimization to full-channel growth planning.',
  provider: {
    '@type': 'Person',
    name: 'Robert Hu',
    url: `${SITE_URL}/about`,
  },
  areaServed: 'US',
  url: `${SITE_URL}/services/ecommerce-strategy`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an e-commerce strategy engagement look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every engagement starts with discovery, where I learn your business, audit your current performance, and identify the biggest opportunities. From there, I build a custom growth plan with specific priorities, timelines, and expected outcomes. I can guide your team through implementation or work alongside you hands-on.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with brands selling on Walmart, or just Amazon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I work across Amazon, Walmart, and DTC channels. In fact, marketplace diversification is one of the most common strategic recommendations I make. Most brands are over-indexed on Amazon and under-invested in Walmart and DTC, which creates both a risk and a missed opportunity.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from hiring an agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agencies manage tasks. I build strategy. Most agencies are great at executing playbooks, but they are not incentivized to tell you to cut a product line, restructure your pricing, or rethink your channel mix. I give you the honest, strategic perspective that agencies typically do not, because my job is to help you grow, not to keep a retainer.',
      },
    },
  ],
}

export default function EcommerceStrategyPage() {
  return (
    <>
      <SchemaMarkup data={serviceSchema} />
      <SchemaMarkup data={faqSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f7f9fb 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-400 hover:text-brand-accent transition-colors duration-200 mb-6">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">Strategy</span>
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight mb-4">
            E-commerce Strategy
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
            A clear growth plan for your Amazon, Walmart, or DTC brand, built by someone who&apos;s spent 20+ years inside the platforms.
          </p>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">What I Do</h2>
          </div>
          <div className="pl-12">
            <p className="text-[15px] text-gray-400 leading-relaxed mb-8">
              I help e-commerce brands build growth strategies that are specific, prioritized, and grounded in what actually works on the platforms. Every brand is different, but most of my work falls into these areas:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Marketplace Channel Strategy</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Figuring out where your brand should be selling, and just as importantly, where it shouldn&apos;t. I evaluate Amazon, Walmart, DTC, and emerging channels to determine the right mix for your products, margins, and growth stage. Most brands are either too concentrated on one platform or spread too thin across too many.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Catalog and Assortment Optimization</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Not every product in your catalog deserves equal investment. I analyze which products to push, which to cut, and where bundling or variation strategies can increase average order value. This is the kind of strategic pruning that turns a sprawling catalog into a focused, profitable one.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Listing Strategy</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Titles, bullets, A+ Content, backend search terms, and image stacks all need to work together as a system. I build listing strategies that balance keyword coverage, conversion optimization, and brand storytelling so your product detail pages do the selling for you.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Pricing and Competitive Positioning</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Pricing isn&apos;t just about being competitive. It&apos;s about understanding your cost structure, your competitive set, and what the market will bear at every price point. I help brands find the pricing strategy that maximizes margin without sacrificing velocity.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Launch Planning</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Whether you&apos;re launching a new product or entering a new channel, the first 90 days matter more than anything that comes after. I build launch plans that cover content, advertising, inventory positioning, and review velocity so you start with momentum instead of scrambling to catch up.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Growth Roadmapping</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Where you are now, where you should be in 6 to 12 months, and exactly how to get there. I build growth roadmaps with specific milestones, resource requirements, and decision points so you always know what to focus on next and why.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">Who It&apos;s For</h2>
          </div>
          <div className="text-[15px] text-gray-400 leading-relaxed pl-12 space-y-4">
            <p>
              You&apos;re a brand owner doing $100K to $2M in revenue. You have product-market fit. You probably started on Amazon, and it&apos;s working well enough, but you know you need a real strategy to get to the next level. Maybe you&apos;re thinking about Walmart or DTC but aren&apos;t sure where to start.
            </p>
            <p>
              You might have tried an agency that promised the world and delivered a monthly report you didn&apos;t understand. Or you have a VA who can handle day-to-day tasks but can&apos;t tell you whether your catalog strategy makes sense or if your pricing is leaving money on the table.
            </p>
            <p>
              What you actually need is someone who can see the full picture, prioritize what moves the needle, and give you a plan you can execute with confidence. That&apos;s what I do.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">How It Works</h2>
          </div>
          <div className="pl-12 space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-mono font-bold text-brand-accent/60 tracking-widest mt-1">01</span>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Discovery</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  I learn your business, review your catalog, and audit your current performance across every channel you sell on. This includes competitive analysis, pricing benchmarks, and identifying the gaps that are costing you the most revenue.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-mono font-bold text-brand-accent/60 tracking-widest mt-1">02</span>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Strategy</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  I build a custom growth plan with specific priorities, timelines, and expected outcomes. Not a generic playbook. A plan built for your products, your margins, your competitive landscape, and your team&apos;s capacity to execute.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-mono font-bold text-brand-accent/60 tracking-widest mt-1">03</span>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Execution Support</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  I can guide your team through implementation or work alongside you hands-on. Either way, you get someone with 20+ years of e-commerce experience making sure the strategy actually gets executed, not just planned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">What You Walk Away With</h2>
          </div>
          <div className="text-[15px] text-gray-400 leading-relaxed pl-12 space-y-4">
            <p>
              A prioritized action plan, not a 50-page deck that collects dust. Every recommendation is specific, actionable, and backed by clear reasoning so you understand not just what to do, but why it matters and what to expect.
            </p>
            <p>
              You&apos;ll know exactly which products to focus on, which channels to invest in, what your listings need, and where your biggest growth opportunities are. The kind of clarity that lets you make decisions with confidence instead of guessing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-deep py-20 md:py-28">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white leading-snug mb-4 tracking-tight">
            Let&apos;s Build Your Growth Strategy
          </h2>
          <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
            15 minutes. No pitch. Just honest strategy for your brand.
          </p>
          <Link
            href="/free-strategy-session"
            className="inline-block bg-brand-gold text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book a Free Strategy Session
          </Link>
        </div>
      </section>
    </>
  )
}
