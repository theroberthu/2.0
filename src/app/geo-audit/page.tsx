import { Metadata } from 'next'
import SchemaMarkup from '@/components/SchemaMarkup'
import LeadForm from '@/components/LeadForm'
import Testimonials from '@/components/Testimonials'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Free GEO Audit for E-commerce Brands',
  description:
    'Find out how your brand shows up in AI-powered search. Get a free GEO audit covering ChatGPT, Perplexity, Google AI Overviews, and Amazon Rufus visibility.',
  alternates: { canonical: '/geo-audit' },
  openGraph: {
    title: 'Free GEO Audit for E-commerce Brands | Robert Hu - E-commerce Strategist',
    description:
      'Find out how your brand shows up in AI-powered search. Get a free GEO audit covering ChatGPT, Perplexity, Google AI Overviews, and Amazon Rufus visibility.',
    url: `${SITE_URL}/geo-audit`,
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'GEO Audit for E-commerce Brands',
  serviceType: 'Generative Engine Optimization Audit',
  description:
    'A free audit that shows how your brand appears in AI-powered search results from ChatGPT, Perplexity, Google AI Overviews, and Amazon Rufus.',
  provider: {
    '@type': 'Person',
    name: 'Robert Hu',
    url: `${SITE_URL}/about`,
    jobTitle: 'E-commerce Strategist & Digital Transformation Consultant',
  },
  areaServed: 'US',
  url: `${SITE_URL}/geo-audit`,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free 15-minute GEO audit session',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a GEO audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A GEO audit evaluates how your brand and products appear in AI-powered search results from tools like ChatGPT, Perplexity, Google AI Overviews, and Amazon Rufus. It identifies gaps in your AI visibility and provides a prioritized action plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a GEO audit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The initial 15-minute GEO audit call is free. No pitch, no obligation. You walk away with actionable insights about your AI search visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is a GEO audit for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GEO audits are for Amazon and Walmart sellers, DTC brands, and any e-commerce brand that wants to understand how AI-powered search is affecting their product discovery and visibility.',
      },
    },
  ],
}

const AUDIT_CARDS = [
  {
    title: 'AI Search Visibility Check',
    description:
      'See how your brand and products appear (or don\'t) in ChatGPT, Perplexity, Google AI Overviews, and Amazon Rufus.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'Listing & Content Gap Analysis',
    description:
      'Identify what\'s missing from your listings and content that prevents AI engines from recommending your products.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: 'Priority Action Plan',
    description:
      'Walk away with a clear, prioritized list of changes to improve your AI search visibility starting today.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
]

const WHO_FOR = [
  'Amazon or Walmart sellers whose products aren\'t surfacing in AI shopping tools',
  'DTC brands seeing organic traffic decline as search shifts to AI answers',
  'Brand owners who want to future-proof before competitors catch on',
  'Marketing teams that need a clear GEO roadmap they can execute on',
]

const STEPS = [
  {
    step: '01',
    title: 'Book Your Call',
    description: 'Fill out a quick form and I\'ll personally review your brand before we talk.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    step: '02',
    title: 'I Audit Your Brand',
    description: 'Before we talk, I search for your products in ChatGPT, Perplexity, and Google AI Overviews to see where you stand.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    step: '03',
    title: 'We Talk Strategy',
    description: 'A focused 15-minute call where I share what I found and what to fix first. No pitch. Just honest feedback.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
]

export default function GeoAuditPage() {
  return (
    <>
      <SchemaMarkup data={serviceSchema} />
      <SchemaMarkup data={faqSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Hero text */}
            <div className="lg:sticky lg:top-28 text-center lg:text-left">
              <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">Free Audit</span>
              <h1 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight mb-5">
                Get a GEO Audit for Your Brand
              </h1>
              <p className="text-base md:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 mb-8">
                Find out how your products show up in AI-powered search and what to fix first.
              </p>

              {/* Trust signals */}
              <div className="flex flex-col gap-3 items-center lg:items-start">
                {[
                  { icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', label: 'I search for your products in ChatGPT, Perplexity & Google AI' },
                  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: '15 minutes. No pitch. No obligation.' },
                  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Walk away with a prioritized action plan' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                    <span className="text-[13px] text-gray-400 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 md:p-10">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">What You Get</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              A Clear Picture of Your AI Visibility
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AUDIT_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7 hover:border-brand-accent/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">Who This Is For</h2>
          </div>

          <div className="space-y-4 pl-12">
            {WHO_FOR.map((point) => (
              <div key={point} className="flex gap-3 items-start">
                <svg className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[15px] text-gray-300 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">Process</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((item, idx) => (
              <div key={item.step} className="relative text-center">
                {/* Connector line between steps (hidden on mobile) */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-white/[0.08]" />
                )}
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/[0.12] flex items-center justify-center mx-auto mb-4">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-accent/50 tracking-widest block mb-2">{item.step}</span>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-[13px] text-gray-400 leading-relaxed max-w-[260px] mx-auto">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <Testimonials />

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28 border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/80 via-brand-dark to-brand-dark" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white leading-snug mb-4 tracking-tight">
            Ready to See Where You Stand?
          </h2>
          <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
            15 minutes. No pitch. Just an honest look at how your brand shows up in AI-powered search.
          </p>
          <a
            href="#top"
            className="inline-block bg-brand-gold text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Fill Out the Form Above
          </a>
        </div>
      </section>
    </>
  )
}
