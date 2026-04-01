import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import SchemaMarkup from '@/components/SchemaMarkup'
import BlogCard from '@/components/BlogCard'
import CTABanner from '@/components/CTABanner'
import BlogSidebar from '@/components/BlogSidebar'
import { SITE_URL } from '@/lib/constants'
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateVideoSchema,
} from '@/lib/blog-schema'

export const revalidate = 60
export const dynamicParams = true

// Category → service page mapping for the contextual service card
const CATEGORY_SERVICE_MAP: Record<string, { href: string; label: string; description: string }> = {
  'GEO & SEO': {
    href: '/services/product-listing-optimization',
    label: 'Product Listing Optimization',
    description: 'Structured for AI-driven discovery — Rufus, ChatGPT, and every channel where your buyers search.',
  },
  'E-commerce Strategy': {
    href: '/services/ecommerce-strategy',
    label: 'E-commerce Strategy',
    description: 'A clear growth plan built around your specific catalog, margins, and market position.',
  },
  'Digital Marketing': {
    href: '/services/digital-marketing-strategy',
    label: 'Digital Marketing Strategy',
    description: 'Channel strategy, content, and paid media that drives measurable return.',
  },
  'Digital Transformation': {
    href: '/services/digital-transformation',
    label: 'Digital Transformation',
    description: 'Systems, automation, and process design that scale your operations without scaling headcount.',
  },
}

/**
 * Split HTML content at the Nth <h2> tag and inject an inline CTA callout.
 * Returns the full content string with the callout inserted.
 */
function injectInlineCTA(html: string, afterH2Index = 1): string {
  const h2Regex = /<h2[\s>]/gi
  let match
  let count = 0
  let insertAt = -1

  while ((match = h2Regex.exec(html)) !== null) {
    count++
    if (count === afterH2Index + 1) {
      insertAt = match.index
      break
    }
  }

  // If we didn't find a 2nd H2, insert before the last 25% of the content
  if (insertAt === -1 && count >= 1) {
    insertAt = Math.floor(html.length * 0.55)
  }

  if (insertAt === -1) return html

  const callout = `<div class="blog-inline-cta">
  <p class="blog-inline-cta-text">Want help applying this to your brand?</p>
  <a href="/free-strategy-session" class="blog-inline-cta-link">Book a free 15-minute strategy session →</a>
</div>`

  return html.slice(0, insertAt) + callout + html.slice(insertAt)
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('status', 'published')
  return (posts || []).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (!post) return {}

  // Use PNG API route for OG/Twitter (social platforms don't support SVG)
  const ogImageUrl = post.og_image && post.og_image.endsWith('.svg')
    ? `/api/og/${post.slug}`
    : post.og_image || '/images/robert-hu-headshot.png'
  const ogImages = [{ url: ogImageUrl, width: 1200, height: 630, alt: post.schema_json?.featured_image_alt || post.title }]

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt || '',
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt || '',
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
      images: ogImages,
      ...(post.published_at && { publishedTime: post.published_at }),
      ...(post.updated_at && { modifiedTime: post.updated_at }),
      ...(post.category && { section: post.category }),
      ...(post.tags && { tags: post.tags }),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@theroberthu',
      creator: '@theroberthu',
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt || '',
      images: ogImages.map((img) => img.url),
    },
  }
}

// Rotating CTA based on slug hash
function getCTAProps(slug: string, relatedServices?: string[] | null) {
  if (relatedServices && relatedServices.length > 0) {
    return {
      heading: 'Want Help With This?',
      buttonText: 'View Service',
      buttonHref: `/services/${relatedServices[0]}`,
    }
  }

  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i)
    hash |= 0
  }

  const ctas = [
    { heading: "Let's Talk About Your E-commerce Growth", buttonText: 'Book a Free Strategy Session', buttonHref: '/free-strategy-session' },
    { heading: 'See What This Looks Like in Practice', buttonText: 'View Case Studies', buttonHref: '/case-studies' },
    { heading: 'Need a Strategy That Actually Works?', buttonText: 'Explore Services', buttonHref: '/services' },
  ]

  return ctas[Math.abs(hash) % ctas.length]
}

export default async function BlogPostPage(props: Props) {
  const params = await props.params
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (!post) notFound()

  // Generate schemas
  const articleSchema = generateArticleSchema(post)
  const breadcrumbSchema = generateBreadcrumbSchema(post)
  const faqSchema = generateFAQSchema(post)
  const videoSchema = generateVideoSchema(post)

  // Fetch related posts
  let relatedPosts: typeof post[] = []
  const relatedPostSlugs = post.schema_json?.related_posts
  if (relatedPostSlugs && relatedPostSlugs.length > 0) {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .in('slug', relatedPostSlugs)
      .eq('status', 'published')
      .limit(3)
    relatedPosts = data || []
  }

  const ctaProps = getCTAProps(post.slug, post.schema_json?.related_services)

  return (
    <>
      <SchemaMarkup data={articleSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      {faqSchema && <SchemaMarkup data={faqSchema} />}
      {videoSchema && <SchemaMarkup data={videoSchema} />}

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-16 md:py-24">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />

        <div className="relative max-w-[720px] mx-auto px-5 sm:px-8">
          <div className="mb-6">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-400 hover:text-brand-accent transition-colors duration-200">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Posts
            </Link>
          </div>

          {/* Category tag */}
          {post.category && (
            <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent bg-brand-accent/[0.1] px-2.5 py-1 rounded-full mb-4">
              {post.category}
            </span>
          )}

          <h1 className="text-2xl md:text-[2.25rem] font-bold text-white leading-tight tracking-tight mb-4">
            {post.title}
          </h1>

          {/* Author / Date / Reading time */}
          <div className="flex flex-wrap items-center gap-3 text-[13px] text-gray-400">
            <span className="font-medium text-gray-300">{post.schema_json?.author || 'Robert Hu'}</span>
            {post.published_at && (
              <>
                <span className="text-gray-600">·</span>
                <time>
                  {new Date(post.published_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </>
            )}
            {post.read_time_minutes && (
              <>
                <span className="text-gray-600">·</span>
                <span>{post.read_time_minutes} min read</span>
              </>
            )}
          </div>

          {/* Featured image */}
          {post.og_image && (
            <div className="relative w-full aspect-[1200/630] mt-8 rounded-xl overflow-hidden">
              <Image
                src={post.og_image}
                alt={post.schema_json?.featured_image_alt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
                priority
                unoptimized={post.og_image.endsWith('.svg')}
              />
            </div>
          )}
        </div>
      </section>

      {/* Content + Sidebar */}
      <article className="py-16 md:py-20 bg-brand-dark">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="xl:grid xl:grid-cols-[720px_1fr] xl:gap-12 xl:items-start">
            {/* Main content */}
            <div>
              {post.content ? (
                <div
                  className="prose-custom-dark"
                  dangerouslySetInnerHTML={{ __html: injectInlineCTA(post.content) }}
                />
              ) : (
                <p className="text-gray-500 text-center py-12">Content coming soon.</p>
              )}

              {/* Contextual service card — shown after content, before end CTA */}
              {(() => {
                const service = post.category ? CATEGORY_SERVICE_MAP[post.category] : null
                if (!service) return null
                return (
                  <div className="mt-12 rounded-xl border border-brand-accent/20 bg-brand-accent/[0.05] p-6">
                    <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent mb-3">
                      Related Service
                    </span>
                    <h3 className="text-base font-bold text-white mb-2">{service.label}</h3>
                    <p className="text-[0.875rem] text-gray-400 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-white transition-colors duration-200"
                    >
                      Learn more
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )
              })()}
            </div>

            {/* Sticky sidebar — desktop only */}
            <BlogSidebar />
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <h2 className="text-xl font-bold text-white mb-8 tracking-tight">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <BlogCard key={rp.id} post={rp} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner {...ctaProps} />
    </>
  )
}
