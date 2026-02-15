import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import { CASE_STUDIES } from '@/lib/case-studies-data'
import BlogCard from '@/components/BlogCard'
import CTABanner from '@/components/CTABanner'
import Testimonials from '@/components/Testimonials'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL, SOCIAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: {
    absolute: 'Robert Hu - E-commerce Strategist & Digital Transformation Consultant',
  },
  description:
    'Helping $100K-$2M e-commerce brands implement AI-powered strategies for sustainable growth. E-commerce strategy, product listing optimization, GEO, and digital transformation consulting.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Robert Hu - E-commerce Strategist & Digital Transformation Consultant',
    description:
      'Helping $100K-$2M e-commerce brands implement AI-powered strategies for sustainable growth. E-commerce strategy, product listing optimization, GEO, and digital transformation consulting.',
    url: SITE_URL,
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Robert Hu',
  url: SITE_URL,
  description:
    'E-commerce strategist helping $100K\u2013$2M brands implement AI and digital transformation strategies that actually work.',
  publisher: {
    '@type': 'Person',
    name: 'Robert Hu',
    url: SITE_URL,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/blog?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Robert Hu - E-commerce Strategy Consulting',
  url: SITE_URL,
  logo: `${SITE_URL}/images/theroberthulogo.png`,
  description:
    'E-commerce strategy, product listing optimization, GEO, and digital transformation consulting for brand owners doing $100K\u2013$2M in revenue.',
  founder: {
    '@type': 'Person',
    name: 'Robert Hu',
  },
  areaServed: 'US',
  serviceType: [
    'E-commerce Strategy',
    'Product Listing Optimization',
    'Generative Engine Optimization',
    'Digital Marketing Strategy',
    'Digital Transformation',
  ],
  priceRange: '$$',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Robert Hu Consulting',
  url: SITE_URL,
  logo: `${SITE_URL}/images/theroberthulogo.png`,
  sameAs: [
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.x,
    SOCIAL_LINKS.youtube,
    SOCIAL_LINKS.instagram,
  ],
  description:
    'E-commerce strategy, product listing optimization, GEO, digital marketing, and digital transformation consulting for growing brands.',
}

export default async function HomePage() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(3)

  const featuredSlugs = ['bsr-ranking-improvement', 'new-product-launch-top-release', 'ad-account-restructuring']
  const featuredStudies = CASE_STUDIES.filter((cs) => featuredSlugs.includes(cs.slug))

  return (
    <>
      <SchemaMarkup data={websiteSchema} />
      <SchemaMarkup data={organizationSchema} />
      <SchemaMarkup data={professionalServiceSchema} />

      {/* Hero - Split layout */}
      <section className="relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f7f9fb 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-accent/[0.12] text-brand-accent text-[11px] font-semibold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                E-commerce Strategy
              </div>
              <h1 className="text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight mb-5">
                Grow Your E-commerce Brand with AI That Actually Works
              </h1>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg mb-8">
                Helping $100K-$2M e-commerce brands implement AI-powered strategies for sustainable growth. No hype. No fluff. Just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/free-strategy-session"
                  className="bg-brand-accent text-white font-semibold px-7 py-3.5 rounded-md hover:bg-brand-accent/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
                >
                  Book a Free Strategy Session
                </Link>
                <Link
                  href="/about"
                  className="border border-white/[0.15] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-white/[0.08] transition-all duration-200 text-center"
                >
                  See How I Work
                </Link>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-gray-400">
                <Image
                  src="/images/robert-hu-headshot.png"
                  alt="Robert Hu"
                  width={36}
                  height={36}
                  className="rounded-full border-2 border-white/20 shadow-sm object-cover"
                />
                <span>Trusted by 50+ e-commerce brands</span>
              </div>
            </div>

            {/* Mobile stats row - visible only on small screens */}
            <div className="flex lg:hidden gap-3 -mx-1">
              {[
                { label: 'Revenue', value: '$2.1M' },
                { label: 'Conversion', value: '+47%' },
                { label: 'ROAS', value: '4.2x' },
              ].map((m) => (
                <div key={m.label} className="flex-1 bg-white/[0.05] backdrop-blur-md rounded-xl border border-white/[0.08] p-4 text-center">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">{m.label}</div>
                  <div className="text-xl font-bold text-brand-gold mt-1">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Right - Visual element (desktop) */}
            <div className="relative hidden lg:block">
              <div className="relative bg-white/[0.05] backdrop-blur-md rounded-2xl border border-white/[0.08] p-6">
                <div className="flex items-center gap-1.5 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                  <div className="ml-3 h-5 w-40 bg-white/[0.06] rounded" />
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-24 bg-white/[0.06] rounded" />
                  <div className="flex items-end gap-2 h-32">
                    {[40, 55, 35, 65, 50, 80, 70, 90, 75, 95, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-brand-accent/40 to-brand-accent/10" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <div className="h-2 w-16 bg-white/[0.06] rounded" />
                    <div className="h-2 w-16 bg-white/[0.06] rounded" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-5">
                  {[
                    { label: 'Revenue', value: '$2.1M' },
                    { label: 'Conversion', value: '+47%' },
                    { label: 'ROAS', value: '4.2x' },
                  ].map((m) => (
                    <div key={m.label} className="bg-white/[0.05] rounded-lg p-3 text-center">
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">{m.label}</div>
                      <div className="text-lg font-bold text-brand-gold mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white/[0.08] backdrop-blur-md rounded-xl border border-white/[0.1] p-4 animate-fade-up">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/[0.12] flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500">Conversion Rate</div>
                    <div className="text-sm font-bold text-brand-gold">+47%</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-4 bg-white/[0.08] backdrop-blur-md rounded-xl border border-white/[0.1] p-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/[0.12] flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500">Ad Spend Waste</div>
                    <div className="text-sm font-bold text-brand-gold">-32%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-dark border-y border-white/[0.06] py-8">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            {[
              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: '20+ Years in E-commerce' },
              { icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Merchandising Manager at KENT\u00AE Worldwide' },
              { icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', label: 'Creator of The Vibe Marketing OS' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                <span className="text-[13px] font-medium text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8 text-center">
          <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
            <p>
              You&apos;re an Amazon or Walmart brand owner doing $100K to $2M in revenue. You&apos;ve outgrown the DIY phase, but you&apos;re not ready to hand your business to a $10K/month agency that treats you like their smallest account.
            </p>
            <p>
              Your listings need work. Your ads aren&apos;t scaling the way they should. You keep hearing that AI is changing everything, but nobody&apos;s showing you what that actually looks like for your business.
            </p>
            <p>
              You don&apos;t need more noise. You need someone who&apos;s spent 20+ years inside the platforms you sell on, who can look at your catalog and tell you exactly what&apos;s working, what&apos;s not, and what to fix first.
            </p>
            <p className="text-white font-medium">That&apos;s what I do.</p>
          </div>
          <div className="mt-10">
            <Link
              href="/free-strategy-session"
              className="inline-block bg-brand-accent text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-accent/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Free Strategy Session
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative py-20 md:py-28 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f7f9fb 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block font-mono">Services</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-3">How I Can Help</h2>
            <p className="text-sm text-gray-400 max-w-lg mx-auto">Strategic consulting for brand owners who want to grow smarter, not just faster.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
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
            ].map((service) => (
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
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-brand-accent transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {service.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent group-hover:gap-2.5 transition-all duration-200">
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Process</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-3">My Approach: Clarity Before Action</h2>
            <p className="text-sm text-gray-400 max-w-lg mx-auto">Every engagement follows a simple, repeatable process designed to get you results without wasted time or money.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {[
              { step: '01', title: 'Scope', desc: 'I map your current state, identify the real bottlenecks, and define what success looks like for your brand.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
              { step: '02', title: 'Strategize', desc: 'I build a custom roadmap with prioritized actions, the right tools, and clear milestones to hit your goals.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
              { step: '03', title: 'Execute', desc: 'I implement alongside you, guide the process, train your team, and make sure everything actually gets done.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
            ].map((item) => (
              <div key={item.step} className="relative bg-white/[0.05] backdrop-blur-md rounded-xl p-7 border border-white/[0.08]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-brand-accent/60 tracking-widest">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - now uses the shared dark mode Testimonials component below */}

      {/* Featured Work - Case Studies */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Featured Work</span>
              <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">Results That Speak for Themselves</h2>
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
                className="group bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-7 hover:border-brand-accent/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(45,125,154,0.15)] transition-all duration-300"
              >
                <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent bg-white/[0.1] px-3 py-1 rounded-full mb-4">
                  {cs.category}
                </span>
                <h3 className="text-base font-semibold text-white leading-snug mb-2">
                  {cs.title}
                </h3>
                <p className="text-sm text-gray-400 mb-5">{cs.resultTeaser}</p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent group-hover:gap-2.5 transition-all duration-200">
                  Read Case Study
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Latest blog posts */}
      {posts && posts.length > 0 && (
        <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Blog</span>
                <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">Latest Insights</h2>
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
