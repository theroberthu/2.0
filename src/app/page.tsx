import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { CASE_STUDIES } from '@/lib/case-studies-data'
import ServiceCard from '@/components/ServiceCard'
import BlogCard from '@/components/BlogCard'
import CTABanner from '@/components/CTABanner'

export default async function HomePage() {
  const { data: services } = await supabase
    .from('services')
    .select('*')
    .order('created_at', { ascending: true })

  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(3)

  const featuredSlugs = ['bsr-ranking-improvement', 'new-product-launch-top-release', 'ad-account-restructuring']
  const featuredStudies = CASE_STUDIES.filter((cs) => featuredSlugs.includes(cs.slug))

  return (
    <>
      {/* Hero - Split layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-bg via-white to-brand-bg">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1a3a4a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-deep/[0.03] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-accent/[0.08] text-brand-accent text-[11px] font-semibold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                E-commerce Strategy
              </div>
              <h1 className="text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-brand-dark leading-[1.15] tracking-tight mb-5">
                Grow Your E-commerce Brand with AI That Actually Works
              </h1>
              <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-lg mb-8">
                Helping $100K-$2M e-commerce brands implement AI-powered strategies for sustainable growth. No hype. No fluff. Just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/free-strategy-session"
                  className="bg-brand-deep text-white font-semibold px-7 py-3.5 rounded-md hover:bg-brand-accent transition-all duration-200 shadow-soft hover:shadow-lifted hover:-translate-y-0.5 text-center"
                >
                  Book a Free Strategy Session
                </Link>
                <Link
                  href="/about"
                  className="border border-brand-dark/15 text-brand-dark font-semibold px-7 py-3.5 rounded-md hover:bg-brand-dark hover:text-white transition-all duration-200 text-center"
                >
                  See How I Work
                </Link>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-brand-muted">
                <div className="flex -space-x-1.5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-accent/20 to-brand-deep/20 border-2 border-white" />
                  ))}
                </div>
                <span>Trusted by 50+ e-commerce brands</span>
              </div>
            </div>

            {/* Right - Visual element */}
            <div className="relative hidden lg:block">
              <div className="relative bg-white rounded-2xl border border-gray-100 shadow-elevated p-6">
                <div className="flex items-center gap-1.5 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                  <div className="ml-3 h-5 w-40 bg-gray-100 rounded" />
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-24 bg-gray-100 rounded" />
                  <div className="flex items-end gap-2 h-32">
                    {[40, 55, 35, 65, 50, 80, 70, 90, 75, 95, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-brand-accent/30 to-brand-accent/10" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <div className="h-2 w-16 bg-gray-100 rounded" />
                    <div className="h-2 w-16 bg-gray-100 rounded" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-5">
                  {[
                    { label: 'Revenue', value: '$2.1M' },
                    { label: 'Conversion', value: '+47%' },
                    { label: 'ROAS', value: '4.2x' },
                  ].map((m) => (
                    <div key={m.label} className="bg-brand-bg rounded-lg p-3 text-center">
                      <div className="text-[10px] text-brand-muted uppercase tracking-wider">{m.label}</div>
                      <div className="text-lg font-bold text-brand-gold mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl border border-gray-100 shadow-lifted p-4 animate-fade-up">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-brand-muted">Conversion Rate</div>
                    <div className="text-sm font-bold text-brand-gold">+47%</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-4 bg-white rounded-xl border border-gray-100 shadow-lifted p-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-brand-muted">Ad Spend Waste</div>
                    <div className="text-sm font-bold text-brand-gold">-32%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-dark/[0.03] border-y border-gray-200/60 py-8">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            {[
              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: '15+ Years in E-commerce' },
              { icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Merchandising Manager at Kent' },
              { icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', label: 'Creator of The Vibe Marketing OS' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                <span className="text-[13px] font-medium text-brand-dark/70">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      {services && services.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-14">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Services</span>
              <h2 className="text-2xl md:text-[2rem] font-bold text-brand-dark tracking-tight mb-3">How I Can Help</h2>
              <p className="text-sm text-brand-muted max-w-md mx-auto">Focused consulting engagements designed to get you from where you are to where you want to be.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Approach */}
      <section className="py-20 md:py-28 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Process</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-brand-dark tracking-tight mb-3">My Approach: Clarity Before Action</h2>
            <p className="text-sm text-brand-muted max-w-lg mx-auto">Every engagement follows a simple, repeatable process designed to get you results without wasted time or money.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {[
              { step: '01', title: 'Scope', desc: 'We map your current state, identify the real bottlenecks, and define what success looks like for your brand.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
              { step: '02', title: 'Strategize', desc: 'I build a custom roadmap with prioritized actions, the right tools, and clear milestones to hit your goals.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
              { step: '03', title: 'Execute', desc: 'We implement together. I guide the process, train your team, and make sure everything actually gets done.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
            ].map((item) => (
              <div key={item.step} className="relative bg-brand-bg rounded-xl p-7 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/[0.08] flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-brand-accent/60 tracking-widest">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work - Case Studies */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Featured Work</span>
              <h2 className="text-2xl md:text-[2rem] font-bold text-brand-dark tracking-tight">Results That Speak for Themselves</h2>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent hover:gap-2.5 transition-all duration-200">
              View all case studies
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group bg-white border border-gray-100 rounded-xl p-7 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300"
              >
                <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent bg-brand-accent/[0.08] px-3 py-1 rounded-full mb-4">
                  {cs.category}
                </span>
                <h3 className="text-base font-semibold text-brand-dark group-hover:text-brand-accent transition-colors duration-200 leading-snug mb-2">
                  {cs.title}
                </h3>
                <p className="text-sm text-brand-muted mb-5">{cs.resultTeaser}</p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent group-hover:gap-2.5 transition-all duration-200">
                  Read Case Study
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest blog posts */}
      {posts && posts.length > 0 && (
        <section className="py-20 md:py-28 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Blog</span>
                <h2 className="text-2xl md:text-[2rem] font-bold text-brand-dark tracking-tight">Latest Insights</h2>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent hover:gap-2.5 transition-all duration-200">
                View all
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}
