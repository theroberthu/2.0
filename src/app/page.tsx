import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import BlogCard from '@/components/BlogCard'
import MobileCarousel from '@/components/MobileCarousel'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL, SOCIAL_LINKS } from '@/lib/constants'

export const revalidate = 60

const HOME_DESCRIPTION =
  'I research AI Commerce, digital transformation, and the systems shaping how products are discovered, evaluated, and bought. A public research notebook on how technology changes commerce.'

export const metadata: Metadata = {
  title: {
    absolute: 'Robert Hu - How Technology Changes Commerce',
  },
  description: HOME_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Robert Hu - How Technology Changes Commerce',
    description: HOME_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@theroberthu',
    creator: '@theroberthu',
    title: 'Robert Hu - How Technology Changes Commerce',
    description: HOME_DESCRIPTION,
    images: ['/images/og-default.png'],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Robert Hu',
  url: SITE_URL,
  description:
    'A public research notebook on how technology changes commerce, covering AI Commerce, digital transformation, product discovery, and AI recommendation.',
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
    'Research on how technology changes commerce, covering AI Commerce, digital transformation, and product discovery.',
}

export default async function HomePage() {
  // Featured post: the most recent post manually flagged featured: true.
  // Set featured = true on whichever post should hold the slot (Supabase
  // blog_posts.featured, or the insert script's `featured` field).
  const { data: flagged } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .eq('featured', true)
    .order('published_at', { ascending: false })
    .limit(1)

  // Recent posts, fetched 4-deep so we always have 3 left after excluding
  // whichever post is featured.
  const { data: recent } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(4)

  // Fall back to the most recent post overall so the slot is never empty.
  const featured = flagged?.[0] ?? recent?.[0] ?? null
  const recentPosts = (recent ?? [])
    .filter((p) => p.slug !== featured?.slug)
    .slice(0, 3)

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
                Research Notebook
              </div>
              <h1 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight mb-5">
                How technology changes commerce.
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg mb-5">
                I research AI Commerce, digital transformation, and the systems shaping how products are discovered, evaluated, and bought.
              </p>
              <p className="text-sm md:text-[15px] text-gray-400 leading-relaxed max-w-lg mb-8">
                I&apos;ve spent more than 20 years working across ecommerce, merchandising, marketplaces, Amazon, digital commerce, and technology. This site is where I document what I&apos;m learning about how AI and other technological shifts are changing commerce, and what operators need to understand before the shift becomes obvious.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/blog"
                  className="bg-brand-gold text-white font-semibold px-7 py-3.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
                >
                  Read the research
                </Link>
                <Link
                  href="/about"
                  className="border border-white/[0.15] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-white/[0.08] transition-all duration-200 text-center"
                >
                  About Robert
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

      {/* ───────────────────── Section 2: What I'm Exploring ───────────────────── */}
      <section className="relative py-20 md:py-28 bg-brand-dark border-t border-white/[0.06] overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-brand-accent/[0.04] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <div className="mb-12 md:mb-14 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">Research Areas</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">What I&apos;m exploring</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              The questions I keep returning to as technology reshapes how commerce works, and how the pieces connect across disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-7 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">AI Commerce</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                How AI is reshaping the way products get discovered, evaluated, and bought across marketplaces and retail. Rufus, Sparky, ChatGPT, and the agentic surfaces are the current front line.
              </p>
            </div>
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-7 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Product Discovery</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                How shoppers, and increasingly their agents, actually find products. What surfaces a listing, what gets skipped, and how discovery is shifting from search boxes to conversations.
              </p>
            </div>
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-7 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Digital Transformation</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                How commerce operations, tooling, and data systems evolve when technology moves faster than the org chart. What it takes for teams to keep up without simply adding headcount.
              </p>
            </div>
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-7 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Search, GEO, and AI Recommendations</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                How search is moving from keyword ranking to AI recommendation. Generative Engine Optimization, Agentic Engine Optimization, and what decides whether an engine cites or recommends you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Section 3: Selected Research (featured) ───────────────────── */}
      {featured && (
        <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden hover:border-brand-accent/40 hover:shadow-elevated transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[1200/630] lg:aspect-auto lg:min-h-[360px] bg-gradient-to-br from-brand-deep/60 to-brand-dark/80 lg:border-r border-white/[0.06]">
                  {featured.og_image ? (
                    <Image
                      src={featured.og_image}
                      alt={featured.schema_json?.featured_image_alt || featured.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-brand-accent/30 text-6xl font-bold tracking-tight">{featured.title.charAt(0)}</span>
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    Featured Research
                  </span>

                  {featured.category && featured.category !== 'general' && (
                    <span className="inline-block self-start text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent bg-brand-accent/[0.1] px-2.5 py-1 rounded-full mb-4">
                      {featured.category}
                    </span>
                  )}

                  <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-white leading-[1.15] tracking-tight mb-4 group-hover:text-brand-accent transition-colors duration-200">
                    {featured.title}
                  </h2>

                  {featured.excerpt && (
                    <p className="text-base text-gray-400 leading-relaxed mb-6 line-clamp-4">
                      {featured.excerpt}
                    </p>
                  )}

                  <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      {featured.published_at && (
                        <time className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                          {new Date(featured.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </time>
                      )}
                      {featured.read_time_minutes && (
                        <>
                          <span className="text-gray-600">·</span>
                          <span className="text-[11px] font-medium text-gray-500">{featured.read_time_minutes} min read</span>
                        </>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent group-hover:gap-2.5 transition-all duration-200">
                      Read article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ───────────────────── Section 3: Selected Research (recent) ───────────────────── */}
      {recentPosts.length > 0 && (
        <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">The Notebook</span>
                <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">Recent research</h2>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent hover:gap-2.5 transition-all duration-200">
                View all
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <MobileCarousel desktopGridCols="md:grid-cols-3">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </MobileCarousel>
          </div>
        </section>
      )}

      {/* ───────────────────── Section 4: Why This Site Exists ───────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28 border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/60 via-brand-dark to-brand-dark" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-5 block">Why This Site Exists</span>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            This is not an AI news site. It is a public notebook for understanding how technology changes commerce. The goal is to compound knowledge, connect ideas across disciplines, and document the questions, experiments, and patterns that help operators make better decisions.
          </p>
        </div>
      </section>
    </>
  )
}
