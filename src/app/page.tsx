import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import BlogCard from '@/components/BlogCard'
import MobileCarousel from '@/components/MobileCarousel'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL, SOCIAL_LINKS } from '@/lib/constants'

export const revalidate = 60

const NEWSLETTER_URL =
  'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232'

export const metadata: Metadata = {
  title: {
    absolute: 'Robert Hu - Writing on AI Commerce, GEO, and AEO',
  },
  description:
    'Writing on Generative Engine Optimization, Agentic Engine Optimization, and what marketplace brands actually need to do as Rufus, Sparky, ChatGPT, and the agentic surfaces redefine product discovery.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Robert Hu - Writing on AI Commerce, GEO, and AEO',
    description:
      'Writing on Generative Engine Optimization, Agentic Engine Optimization, and what marketplace brands actually need to do as Rufus, Sparky, ChatGPT, and the agentic surfaces redefine product discovery.',
    url: SITE_URL,
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Robert Hu',
  url: SITE_URL,
  description:
    'Writing on Generative Engine Optimization, Agentic Engine Optimization, and the AI commerce shift for marketplace sellers.',
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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Robert Hu',
  url: SITE_URL,
  logo: `${SITE_URL}/images/theroberthulogo.png`,
  sameAs: [
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.x,
    SOCIAL_LINKS.youtube,
  ],
  description:
    'Writing on AI commerce, GEO, and AEO for marketplace sellers.',
}

export default async function HomePage() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(3)

  return (
    <>
      <SchemaMarkup data={websiteSchema} />
      <SchemaMarkup data={organizationSchema} />

      {/* ───────────────────── Section 1: Hero ───────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f7f9fb 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-gold/[0.12] text-brand-gold text-[11px] font-semibold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                AI Commerce &middot; GEO &middot; AEO
              </div>
              <h1 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight mb-5">
                Writing on the AI commerce shift for marketplace sellers.
              </h1>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg mb-8">
                Generative Engine Optimization, Agentic Engine Optimization, and what marketplace brands actually need to do as Rufus, Sparky, ChatGPT, and the agentic surfaces redefine product discovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={NEWSLETTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-gold text-white font-semibold px-7 py-3.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
                >
                  Subscribe to Hu&apos;s Weekly Hoot
                </a>
                <Link
                  href="/blog"
                  className="border border-white/[0.15] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-white/[0.08] transition-all duration-200 text-center"
                >
                  Read the latest
                </Link>
              </div>
            </div>

            {/* Right - Headshot */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* mask-image fades the headshot's white background naturally into the dark hero */}
                <div
                  className="relative overflow-hidden rounded-2xl shadow-elevated"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 58%, transparent 92%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 58%, transparent 92%)',
                  }}
                >
                  <Image
                    src="/images/robert-hu-headshot.png"
                    alt="Robert Hu"
                    width={400}
                    height={400}
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Subtle accent line */}
                <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border border-brand-accent/20 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Section 2: Recent Essays ───────────────────── */}
      {posts && posts.length > 0 && (
        <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">Writing</span>
                <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">Recent essays</h2>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent hover:gap-2.5 transition-all duration-200">
                View all
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <MobileCarousel desktopGridCols="md:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </MobileCarousel>
          </div>
        </section>
      )}

      {/* ───────────────────── Section 3: The Two Pillars ───────────────────── */}
      <section className="relative py-20 md:py-28 bg-brand-dark border-t border-white/[0.06] overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-brand-accent/[0.04] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-brand-gold/[0.04] rounded-full blur-3xl translate-y-1/2 translate-x-1/4" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">The Pillar Work</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">The Two Pillars</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Generative Engine Optimization and Agentic Engine Optimization. The framework, the data, and the practical work for brands navigating the shift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GEO Card */}
            <Link
              href="/geo"
              className="group block bg-white/[0.05] backdrop-blur-md border border-brand-accent/25 rounded-xl p-8 md:p-10 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-[0_0_28px_rgba(45,125,154,0.18)] transition-all duration-300 h-full flex flex-col"
            >
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-accent bg-brand-accent/[0.12] px-3 py-1.5 rounded-full self-start mb-6">
                GEO
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors duration-200">
                Generative Engine Optimization
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8">
                How marketplace brands get recommended by AI engines. The 6-dimension framework (WHO, WHEN, WHERE, WHY, WHAT, AI Retrievability) scored across 10 product categories on RecoScope.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent group-hover:gap-2.5 transition-all duration-200">
                Read the GEO pillar
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>

            {/* AEO Card */}
            <Link
              href="/aeo"
              className="group block bg-brand-gold/[0.06] backdrop-blur-md border border-brand-gold/25 rounded-xl p-8 md:p-10 hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-[0_0_28px_rgba(197,169,78,0.18)] transition-all duration-300 h-full flex flex-col"
            >
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/[0.15] px-3 py-1.5 rounded-full self-start mb-6">
                AEO
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors duration-200">
                Agentic Engine Optimization
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8">
                What changes when AI agents complete the purchase, not just recommend the product. Operational across Amazon, Walmart, and the AI surfaces in 2026.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-gold group-hover:gap-2.5 transition-all duration-200">
                Read the AEO pillar
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>


      {/* ───────────────────── Section 5: About Robert (compressed) ───────────────────── */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">About Robert</span>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            Twenty years inside Amazon and Walmart, across e-commerce and merchandising. Currently writing on the AI commerce shift. The consulting practice is currently paused.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent hover:gap-2.5 transition-all duration-200"
          >
            Read more on /about
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* ───────────────────── Section 8: Stay Current (final CTA) ───────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28 border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/60 via-brand-dark to-brand-dark" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white leading-snug mb-4 tracking-tight">
            Stay current
          </h2>
          <p className="text-sm md:text-base text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Subscribe to Hu&apos;s Weekly Hoot for ongoing analysis of the AI commerce shift, the GEO/AEO playbooks, and what marketplace brands should actually do next.
          </p>
          <a
            href={NEWSLETTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-gold text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Subscribe on LinkedIn
          </a>
        </div>
      </section>
    </>
  )
}
