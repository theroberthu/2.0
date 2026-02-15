import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Product Listing Optimization & GEO',
  description:
    'Product listing optimization for Amazon and Walmart sellers - SEO, A+ Content, image stacks, and Generative Engine Optimization (GEO) for AI-powered search.',
  alternates: { canonical: '/services/product-listing-optimization' },
  openGraph: {
    title: 'Product Listing Optimization & GEO | Robert Hu - E-commerce Strategist',
    description:
      'Product listing optimization for Amazon and Walmart sellers - SEO, A+ Content, image stacks, and Generative Engine Optimization (GEO) for AI-powered search.',
    url: `${SITE_URL}/services/product-listing-optimization`,
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Product Listing Optimization & GEO',
  serviceType: 'Product Listing Optimization',
  description:
    'Full listing audits covering keyword strategy, A+ Content, image stacks, and Generative Engine Optimization (GEO) for AI-powered product discovery.',
  provider: {
    '@type': 'Person',
    name: 'Robert Hu',
    url: `${SITE_URL}/about`,
  },
  areaServed: 'US',
  url: `${SITE_URL}/services/product-listing-optimization`,
}

export default function ProductListingOptimizationPage() {
  return (
    <>
      <SchemaMarkup data={serviceSchema} />

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
          <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">Optimization</span>
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight mb-4">
            Product Listing Optimization & GEO
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
            Optimize for humans, algorithms, and AI engines
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
          <div className="text-[15px] text-gray-400 leading-relaxed pl-12 space-y-4">
            <p>
              Full listing audits covering keyword strategy, bullet copy, A+ Content, image stacks, backend search terms, and mobile optimization. Plus Generative Engine Optimization (GEO) — making sure your products surface in AI-powered search results from ChatGPT, Perplexity, Google AI Overviews, and whatever comes next.
            </p>
            <p>
              Traditional SEO gets you found today. GEO gets you found tomorrow.
            </p>
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
          <p className="text-[15px] text-gray-400 leading-relaxed pl-12">
            Amazon and Walmart sellers whose listings are underperforming or who haven&apos;t prepared for AI-driven product discovery.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-deep py-20 md:py-28">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white leading-snug mb-4 tracking-tight">
            Get a Listing Audit
          </h2>
          <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
            30 minutes. No pitch. Just honest strategy for your brand.
          </p>
          <Link
            href="/free-strategy-session"
            className="inline-block bg-brand-gold text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get a Listing Audit
          </Link>
        </div>
      </section>
    </>
  )
}
