import { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import FAQSection from '@/components/FAQSection'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Free Strategy Session',
  description:
    'Book a free strategy session to discuss how AI and digital transformation can grow your e-commerce brand.',
  alternates: { canonical: '/free-strategy-session' },
  openGraph: {
    title: 'Free Strategy Session | Robert Hu - E-commerce Strategist',
    description:
      'Book a free strategy session to discuss how AI and digital transformation can grow your e-commerce brand.',
    url: `${SITE_URL}/free-strategy-session`,
  },
}

const strategySessionFAQs = [
  {
    q: 'Is this really free?',
    a: "Yes. No credit card, no commitment. It's a 30-minute conversation where I look at your current setup and tell you what I'd prioritize.",
  },
  {
    q: 'Will you try to sell me something?',
    a: "I'll be honest about whether I can help. If working together makes sense, I'll explain what that looks like. If it doesn't, I'll point you in the right direction. No pressure either way.",
  },
  {
    q: 'What should I prepare?',
    a: "Have your Amazon or Walmart store URL handy. If you have specific questions or pain points, jot those down. That's it.",
  },
  {
    q: 'What happens after I submit the form?',
    a: "I personally review your submission within 24 hours. You'll get an email with a calendar link to book your call at a time that works for you.",
  },
  {
    q: 'How long is the call?',
    a: '30 minutes. Enough time to dig into your situation and give you at least one actionable takeaway, whether we work together or not.',
  },
]

const strategySessionSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Free E-commerce Strategy Session',
  description:
    'A free 30-minute strategy session to discuss how AI and digital transformation can grow your e-commerce brand. No sales pitch, no obligation.',
  provider: {
    '@type': 'Person',
    name: 'Robert Hu',
    url: SITE_URL,
  },
  url: `${SITE_URL}/free-strategy-session`,
  serviceType: 'Consulting',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free 30-minute strategy session',
  },
}

export default function FreeStrategySessionPage() {
  return (
    <>
      <SchemaMarkup data={strategySessionSchema} />

      {/* Hero + Form */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f7f9fb 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Hero text */}
            <div className="lg:sticky lg:top-28">
              <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">Free Session</span>
              <h1 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight mb-4">
                Let&apos;s Talk About Growing Your E-commerce Brand
              </h1>
              <p className="text-base md:text-lg text-gray-400 max-w-lg mb-8">
                No sales pitch. No obligation. Just a focused conversation about your business and what&apos;s possible.
              </p>

              {/* Trust signals */}
              <div className="flex flex-col gap-3">
                {[
                  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: '20+ years in e-commerce' },
                  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'No strings attached' },
                  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Actionable feedback' },
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
                <div className="text-center mb-8">
                  <h2 className="text-lg font-semibold text-white mb-1">Tell Me About Your Brand</h2>
                  <p className="text-[13px] text-gray-400">All fields are optional except name and email.</p>
                </div>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect - Process steps */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">Process</span>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              What to Expect
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'You fill out this form',
                desc: 'Tell me about your brand, your revenue, and your biggest challenge right now.',
                icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
              },
              {
                step: '02',
                title: 'I review your info',
                desc: 'I look at your business before we talk so our conversation is focused and useful.',
                icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
              },
              {
                step: '03',
                title: 'We talk strategy',
                desc: 'A 30-minute call where I give you honest, actionable feedback you can use immediately.',
                icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/[0.12] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <span className="text-[10px] font-mono font-bold text-brand-accent/50 tracking-widest block mb-2">{item.step}</span>
                <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">FAQ</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              Common Questions
            </h2>
          </div>
          <FAQSection items={strategySessionFAQs} />
        </div>
      </section>
    </>
  )
}
