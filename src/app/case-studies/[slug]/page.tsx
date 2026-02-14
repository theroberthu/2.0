import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import CTABanner from '@/components/CTABanner'
import { CASE_STUDIES, getCaseStudyBySlug } from '@/lib/case-studies-data'
import { SITE_URL } from '@/lib/constants'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const cs = getCaseStudyBySlug(params.slug)
  if (!cs) return {}

  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      title: `${cs.metaTitle} | Robert Hu`,
      description: cs.metaDescription,
      url: `${SITE_URL}/case-studies/${cs.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cs.metaTitle} | Robert Hu`,
      description: cs.metaDescription,
    },
  }
}

export default function CaseStudyPage({ params }: Props) {
  const cs = getCaseStudyBySlug(params.slug)
  if (!cs) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: cs.title,
    description: cs.metaDescription,
    author: {
      '@type': 'Person',
      name: 'Robert Hu',
    },
    url: `${SITE_URL}/case-studies/${cs.slug}`,
  }

  return (
    <>
      <SchemaMarkup data={articleSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-16 md:py-24">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-400 hover:text-white transition-colors duration-200 mb-6">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Case Studies
          </Link>
          <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent bg-brand-accent/[0.1] px-3 py-1 rounded-full mb-4">
            {cs.category}
          </span>
          <h1 className="text-2xl md:text-[2.25rem] font-bold text-white leading-tight tracking-tight">
            {cs.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-16">
          {/* The Challenge */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-brand-dark">The Challenge</h2>
            </div>
            <p className="text-[15px] text-brand-muted leading-relaxed pl-12">
              {cs.challenge}
            </p>
          </section>

          {/* The Approach */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-brand-dark">The Approach</h2>
            </div>
            <p className="text-[15px] text-brand-muted leading-relaxed pl-12">
              {cs.approach}
            </p>
          </section>

          {/* The Results */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-brand-dark">The Results</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-12">
              {cs.results.map((result: string, i: number) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-brand-bg to-white border border-gray-100 rounded-xl p-5 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[15px] font-semibold text-brand-gold leading-snug">{result}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Takeaway */}
          <section className="border-l-[3px] border-brand-accent pl-6 py-2">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent mb-3 block">
              Key Takeaway
            </span>
            <blockquote className="text-lg font-medium text-brand-dark leading-relaxed italic">
              &ldquo;{cs.keyTakeaway}&rdquo;
            </blockquote>
          </section>
        </div>
      </article>

      <CTABanner heading="Want Results Like These? Let's Talk." buttonText="Book a Free Strategy Session" />
    </>
  )
}
