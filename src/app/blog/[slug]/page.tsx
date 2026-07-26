import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import SchemaMarkup from '@/components/SchemaMarkup'
import BlogCard from '@/components/BlogCard'
import CTABanner from '@/components/CTABanner'
import BlogSidebar from '@/components/BlogSidebar'
import MobileTocCard from '@/components/MobileTocCard'
import FloatingBookCta from '@/components/FloatingBookCta'
import ReadingProgress from '@/components/ReadingProgress'
import { SITE_URL } from '@/lib/constants'
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateVideoSchema,
} from '@/lib/blog-schema'

export const revalidate = 60
export const dynamicParams = true


// Category-specific inline CTA copy
/**
 * Walk every <h2> in the HTML, slugify its text, inject an id attribute,
 * and return both the rewritten HTML and a TOC items array. Idempotent:
 * H2s that already carry an id are preserved as-is.
 */
function buildTableOfContents(html: string): {
  html: string
  items: { id: string; text: string }[]
} {
  const items: { id: string; text: string }[] = []
  const slugCount: Record<string, number> = {}

  const rewritten = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (match, attrs: string, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
    if (!text) return match

    // If the H2 already has an id, reuse it.
    const existingId = attrs.match(/\sid=["']([^"']+)["']/i)?.[1]
    if (existingId) {
      items.push({ id: existingId, text })
      return match
    }

    let slug = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .slice(0, 80)
    if (!slug) return match

    slugCount[slug] = (slugCount[slug] || 0) + 1
    if (slugCount[slug] > 1) slug = `${slug}-${slugCount[slug]}`

    items.push({ id: slug, text })
    return `<h2${attrs} id="${slug}">${inner}</h2>`
  })

  return { html: rewritten, items }
}

/**
 * Split HTML content at the Nth <h2> tag and inject an inline CTA card.
 * Uses category to generate contextual copy.
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

  if (insertAt === -1 && count >= 1) {
    insertAt = Math.floor(html.length * 0.55)
  }

  if (insertAt === -1) return html

  const callout = `<div class="blog-inline-cta-card">
  <div class="blog-inline-cta-card-accent"></div>
  <p class="blog-inline-cta-card-label">Newsletter</p>
  <p class="blog-inline-cta-card-headline">Follow the research</p>
  <p class="blog-inline-cta-card-sub">Research notes and analysis on how AI, digital transformation, product discovery, and customer behavior are changing commerce.</p>
  <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232" class="blog-inline-cta-card-btn" target="_blank" rel="noopener noreferrer">Subscribe to Hu's Weekly Hoot</a>
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

// Invitation to follow Robert's research. Newsletter functionality unchanged.
function getCTAProps() {
  return {
    heading: 'Follow the research',
    subtext:
      'I publish research notes and analysis on how AI, digital transformation, product discovery, and customer behavior are changing commerce.',
    buttonText: "Subscribe to Hu's Weekly Hoot",
    buttonHref: 'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232',
    external: true,
  }
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

  // Build the "Related Research" cluster. Priority order:
  //   1. Curated slugs in schema_json.related_posts (author override)
  //   2. Auto-fill from the same category (the topical cluster)
  //   3. Recency fallback so the section is always populated
  // Same-category linking is what signals topical clusters to both readers
  // and AI systems, so the automatic step is the important one.
  const RELATED_LIMIT = 3
  const relatedPosts: typeof post[] = []
  const seenSlugs = new Set<string>([post.slug])

  const addPosts = (rows: typeof post[] | null) => {
    for (const p of rows ?? []) {
      if (relatedPosts.length >= RELATED_LIMIT) break
      if (!seenSlugs.has(p.slug)) {
        relatedPosts.push(p)
        seenSlugs.add(p.slug)
      }
    }
  }

  // 1. Curated related posts
  const curatedSlugs: string[] = post.schema_json?.related_posts ?? []
  if (curatedSlugs.length > 0) {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .in('slug', curatedSlugs)
      .eq('status', 'published')
    addPosts(data)
  }

  // 2. Same category (topical cluster)
  if (relatedPosts.length < RELATED_LIMIT && post.category) {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .eq('category', post.category)
      .neq('slug', post.slug)
      .order('published_at', { ascending: false })
      .limit(RELATED_LIMIT + seenSlugs.size)
    addPosts(data)
  }

  // 3. Recency fallback
  if (relatedPosts.length < RELATED_LIMIT) {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .neq('slug', post.slug)
      .order('published_at', { ascending: false })
      .limit(RELATED_LIMIT + seenSlugs.size)
    addPosts(data)
  }

  const ctaProps = getCTAProps()

  // Auto-generate table of contents from H2 headings. Only surface it in the
  // sidebar when the post has enough structure to benefit (3+ sections).
  const { html: tocHtml, items: tocItems } = post.content
    ? buildTableOfContents(post.content)
    : { html: '', items: [] }
  const sidebarToc = tocItems.length >= 3 ? tocItems : []

  return (
    <>
      <SchemaMarkup data={articleSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      {faqSchema && <SchemaMarkup data={faqSchema} />}
      {videoSchema && <SchemaMarkup data={videoSchema} />}

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark pt-16 md:pt-24 pb-10 md:pb-12">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />

        <div className="relative max-w-[720px] mx-auto px-5 sm:px-8">
          <div className="mb-6">
            <Link href="/blog" className="inline-flex items-center gap-1.5 py-3 md:py-0 text-[13px] font-medium text-gray-400 hover:text-brand-accent transition-colors duration-200">
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
      <article className="pt-10 md:pt-12 pb-16 md:pb-20 bg-brand-dark">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="xl:grid xl:grid-cols-[720px_1fr] xl:gap-12 xl:items-start">
            {/* Main content */}
            <div>
              {/* Mobile-only table of contents. Desktop sidebar handles xl:+ */}
              <MobileTocCard toc={sidebarToc} />

              {post.content ? (
                <div
                  className="prose-custom-dark"
                  dangerouslySetInnerHTML={{ __html: injectInlineCTA(tocHtml) }}
                />
              ) : (
                <p className="text-gray-500 text-center py-12">Content coming soon.</p>
              )}

            </div>

            {/* Sticky sidebar - desktop only */}
            <BlogSidebar toc={sidebarToc} />
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="mb-8">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-2 block">Keep Exploring</span>
              <h2 className="text-xl font-bold text-white tracking-tight">Related Research</h2>
            </div>
            {/* Mobile: compact list. Three image cards stack to roughly 1,700px
                on a phone, which buries the recirculation surface below the fold
                at the one moment the reader is deciding what to do next. The list
                keeps all three next-reads visible in about a quarter of that
                height. Desktop keeps the card grid unchanged. */}
            <ul className="md:hidden border-t border-white/[0.06]">
              {relatedPosts.map((rp) => (
                <li key={rp.id} className="border-b border-white/[0.06]">
                  <Link href={`/blog/${rp.slug}`} className="group flex items-start justify-between gap-4 py-4">
                    <span className="min-w-0">
                      {rp.category && rp.category !== 'general' && (
                        <span className="block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent mb-1.5">
                          {rp.category}
                        </span>
                      )}
                      <span className="block text-[15px] font-medium text-gray-200 group-hover:text-brand-accent transition-colors duration-200 leading-snug">
                        {rp.title}
                      </span>
                      {rp.read_time_minutes && (
                        <span className="block text-[12px] text-gray-500 mt-1">
                          {rp.read_time_minutes} min read
                        </span>
                      )}
                    </span>
                    <svg className="w-4 h-4 text-gray-600 mt-1 shrink-0 group-hover:text-brand-accent transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <BlogCard key={rp.id} post={rp} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner {...ctaProps} />

      {/* Mobile-only chrome. Progress bar gives a completion signal on a long
          phone scroll; the floating pill is the newsletter follow. */}
      <ReadingProgress />
      <FloatingBookCta />
    </>
  )
}
