import { Metadata } from 'next'
import Link from 'next/link'
import { CASE_STUDIES } from '@/lib/case-studies-data'
import CTABanner from '@/components/CTABanner'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real results from real e-commerce brands. See how AI and digital transformation strategies drive growth.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | Robert Hu - E-commerce Strategist',
    description:
      'Real results from real e-commerce brands. See how AI and digital transformation strategies drive growth.',
    url: `${SITE_URL}/case-studies`,
  },
}

const caseStudiesCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Case Studies - Robert Hu',
  description:
    'Real results from real e-commerce brands. See how AI and digital transformation strategies drive growth.',
  url: `${SITE_URL}/case-studies`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'Robert Hu',
    url: SITE_URL,
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      <SchemaMarkup data={caseStudiesCollectionSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4">Case Studies</span>
          <h1 className="text-3xl md:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-4">
            Results That Speak for Themselves
          </h1>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            Real outcomes from 20+ years of e-commerce strategy. Client details anonymized.
          </p>
        </div>
      </section>

      {/* Case study cards grid */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-7 md:p-8 hover:border-brand-accent/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(45,125,154,0.15)] transition-all duration-300"
              >
                {/* Category tag */}
                <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent bg-white/[0.1] px-3 py-1 rounded-full mb-5">
                  {cs.category}
                </span>

                <h2 className="text-lg font-semibold text-white leading-snug mb-3">
                  {cs.title}
                </h2>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {cs.resultTeaser}
                </p>

                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent group-hover:gap-2.5 transition-all duration-200">
                  Read Case Study
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Want Results Like These?" buttonText="Book a Free Strategy Session" />
    </>
  )
}
