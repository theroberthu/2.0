import { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Free Strategy Session',
  description:
    'Book a free strategy session to discuss how AI and digital transformation can grow your e-commerce brand.',
  alternates: { canonical: '/free-strategy-session' },
  openGraph: {
    title: 'Free Strategy Session | Robert Hu',
    description:
      'Book a free strategy session to discuss how AI and digital transformation can grow your e-commerce brand.',
    url: `${SITE_URL}/free-strategy-session`,
  },
}

export default function FreeStrategySessionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-bg via-white to-brand-bg py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1a3a4a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4">Free Session</span>
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-brand-dark leading-tight tracking-tight mb-4">
            Let&apos;s Talk About Growing Your E-commerce Brand
          </h1>
          <p className="text-base text-brand-muted max-w-lg mx-auto">
            No sales pitch. No obligation. Just a focused conversation about your business and what&apos;s possible.
          </p>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Process</span>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark tracking-tight">
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
                <div className="w-12 h-12 rounded-xl bg-brand-accent/[0.08] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <span className="text-[10px] font-mono font-bold text-brand-accent/50 tracking-widest block mb-2">{item.step}</span>
                <h3 className="text-sm font-semibold text-brand-dark mb-1.5">{item.title}</h3>
                <p className="text-[13px] text-brand-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-10 shadow-lifted">
            <div className="text-center mb-8">
              <h2 className="text-lg font-semibold text-brand-dark mb-1">Tell Me About Your Brand</h2>
              <p className="text-[13px] text-brand-muted">All fields are optional except name and email.</p>
            </div>
            <LeadForm />
          </div>

          {/* Trust signals */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
            {[
              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: '20+ years in e-commerce' },
              { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'No strings attached' },
              { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Actionable feedback' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                <span className="text-[13px] text-brand-muted font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
