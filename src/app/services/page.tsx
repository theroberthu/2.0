import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import PricingCarousel from '@/components/PricingCarousel'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'E-commerce consulting services: strategy, product listing optimization, GEO, digital marketing, and digital transformation for growing brands.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services | Robert Hu - E-commerce Strategist',
    description:
      'E-commerce consulting services: strategy, product listing optimization, GEO, digital marketing, and digital transformation for growing brands.',
    url: `${SITE_URL}/services`,
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'E-commerce Consulting Services',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'E-commerce Strategy',
      description: 'Strategic consulting for brands selling on Amazon, Walmart, and DTC — from listing optimization to full-channel growth planning.',
      url: `${SITE_URL}/services/ecommerce-strategy`,
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Product Listing Optimization & GEO',
      description: 'Optimize product detail pages for traditional SEO and Generative Engine Optimization (GEO) for AI-powered search.',
      url: `${SITE_URL}/services/product-listing-optimization`,
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Digital Marketing Strategy',
      description: 'Marketing strategy built for the AI era — GEO readiness, paid advertising, content strategy, and cross-channel planning.',
      url: `${SITE_URL}/services/digital-marketing-strategy`,
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'Digital Transformation',
      description: 'Modernize your e-commerce operations with AI-powered workflows, better tooling, and smarter processes.',
      url: `${SITE_URL}/services/digital-transformation`,
    },
  ],
}

const services = [
  {
    title: 'E-commerce Strategy',
    slug: 'ecommerce-strategy',
    desc: 'Strategic consulting for brands selling on Amazon, Walmart, and DTC — from listing optimization to full-channel growth planning. AI-enhanced workflows, human-driven decisions.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    label: 'Strategy',
  },
  {
    title: 'Product Listing Optimization & GEO',
    slug: 'product-listing-optimization',
    desc: 'Your listings need to convert humans AND rank in AI-powered search. I optimize product detail pages for traditional SEO and Generative Engine Optimization (GEO) — so your products show up whether customers are browsing Amazon or asking ChatGPT.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    label: 'Optimization',
  },
  {
    title: 'Digital Marketing Strategy',
    slug: 'digital-marketing-strategy',
    desc: 'Marketing strategy built for the AI era. From GEO readiness to paid advertising and content strategy, I help brands stay visible as search evolves from keywords to conversations.',
    icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z',
    label: 'Marketing',
  },
  {
    title: 'Digital Transformation',
    slug: 'digital-transformation',
    desc: 'Evaluate, select, and implement the right e-commerce tech stack — from AI tools and automation to analytics platforms and workflow optimization. Build a tech foundation that scales.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    label: 'Transformation',
  },
]

export default function ServicesPage() {
  return (
    <>
      <SchemaMarkup data={servicesSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f7f9fb 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">Services</span>
          <h1 className="text-3xl md:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-4">
            How I Can Help Your Brand Grow
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            Focused consulting engagements for e-commerce brands ready to grow with AI and smarter systems.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-7 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-[0_0_20px_rgba(45,125,154,0.15)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent/70">{service.label}</span>
                </div>
                <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-accent transition-colors duration-200">{service.title}</h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-accent">
                  Learn more
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How Engagements Work */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">Pricing</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white leading-snug tracking-tight mb-3">
              How Engagements Work
            </h2>
            <p className="text-sm text-gray-400 max-w-lg mx-auto">
              Clear scope, transparent pricing, and no surprises. Pick the level that fits where you are right now.
            </p>
          </div>
          <PricingCarousel />
          <p className="text-center text-sm text-gray-400 max-w-xl mx-auto">
            Every engagement starts with a free 30-minute strategy session so I can understand your business before recommending anything. No pressure, no pitch.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-deep py-20 md:py-28">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white leading-snug mb-4 tracking-tight">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
            30 minutes. No pitch. Just honest strategy for your brand.
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
