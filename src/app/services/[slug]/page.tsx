import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Service } from '@/lib/types'
import SchemaMarkup from '@/components/SchemaMarkup'
import FAQSection from '@/components/FAQSection'
import CTABanner from '@/components/CTABanner'
import { SITE_URL } from '@/lib/constants'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const { data: services } = await supabase.from('services').select('slug')
  return (services || []).map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: service } = await supabase
    .from('services')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (!service) return {}

  return {
    title: service.meta_title || service.title,
    description: service.meta_description || service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.meta_title || service.title,
      description: service.meta_description || service.description,
      url: `${SITE_URL}/services/${service.slug}`,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { data } = await supabase
    .from('services')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (!data) notFound()

  // Parse JSON fields that may come as strings from Supabase
  const parseJsonField = (val: unknown) => {
    if (Array.isArray(val)) return val
    if (typeof val === 'string') {
      try { return JSON.parse(val) } catch { return null }
    }
    return null
  }

  const service = {
    ...data,
    approach_steps: parseJsonField(data.approach_steps) as Service['approach_steps'],
    deliverables: parseJsonField(data.deliverables) as Service['deliverables'],
    who_its_for: parseJsonField(data.who_its_for) as Service['who_its_for'],
    faq: parseJsonField(data.faq) as Service['faq'],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Person',
      name: 'Robert Hu',
    },
    url: `${SITE_URL}/services/${service.slug}`,
  }

  return (
    <>
      <SchemaMarkup data={serviceSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-bg via-white to-brand-bg py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1a3a4a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-muted hover:text-brand-accent transition-colors duration-200 mb-6">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-brand-dark leading-tight tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Problem */}
      {service.problem && (
        <section className="py-16 md:py-20 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-brand-dark">The Problem</h2>
            </div>
            <p className="text-[15px] text-brand-muted leading-relaxed pl-12">{service.problem}</p>
          </div>
        </section>
      )}

      {/* Approach Steps */}
      {Array.isArray(service.approach_steps) && service.approach_steps.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-brand-dark">My Approach</h2>
            </div>
            <div className="space-y-6 pl-12">
              {service.approach_steps.map((step: { title: string; description: string }, i: number) => (
                <div key={i} className="relative flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-accent/[0.08] flex items-center justify-center text-xs font-mono font-bold text-brand-accent shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {i < service.approach_steps!.length - 1 && (
                      <div className="w-px h-full bg-brand-accent/10 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-[15px] font-semibold text-brand-dark mb-1.5">{step.title}</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What You Get */}
      {Array.isArray(service.deliverables) && service.deliverables.length > 0 && (
        <section className="py-16 md:py-20 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-brand-dark">What You Get</h2>
            </div>
            <ul className="space-y-3 pl-12">
              {service.deliverables.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-brand-muted">
                  <svg className="w-4.5 h-4.5 text-brand-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Who It's For */}
      {Array.isArray(service.who_its_for) && service.who_its_for.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-brand-dark">Who This Is For</h2>
            </div>
            <ul className="space-y-3 pl-12">
              {service.who_its_for.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-brand-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      {Array.isArray(service.faq) && service.faq.length > 0 && (
        <section className="py-16 md:py-20 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">FAQ</span>
              <h2 className="text-2xl font-bold text-brand-dark tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQSection items={service.faq} />
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}
