import { Metadata } from 'next'
import { supabase } from '@/lib/supabase'
import ServiceCard from '@/components/ServiceCard'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'E-commerce consulting services: AI integration, digital transformation, marketing strategy, and operational optimization for growing brands.',
  alternates: { canonical: '/services' },
}

export default async function ServicesPage() {
  const { data: services } = await supabase
    .from('services')
    .select('*')
    .order('created_at', { ascending: true })

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-bg via-white to-brand-bg py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1a3a4a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4">Services</span>
          <h1 className="text-3xl md:text-[2.75rem] font-bold text-brand-dark leading-tight tracking-tight mb-4">
            How I Can Help Your Brand Grow
          </h1>
          <p className="text-base md:text-lg text-brand-muted max-w-xl mx-auto">
            Focused consulting engagements for e-commerce brands ready to grow with AI and smarter systems.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {services && services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-brand-muted">Services coming soon.</p>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
