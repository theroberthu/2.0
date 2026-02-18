import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import SchemaMarkup from '@/components/SchemaMarkup'
import BlogCard from '@/components/BlogCard'
import CTABanner from '@/components/CTABanner'
import { SITE_URL } from '@/lib/constants'
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateVideoSchema,
} from '@/lib/blog-schema'

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

  const ogImages = post.og_image
    ? [{ url: post.og_image, width: 1200, height: 630, alt: post.schema_json?.featured_image_alt || post.title }]
    : [{ url: '/images/robert-hu-headshot.png', width: 1200, height: 630, alt: 'Robert Hu' }]

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
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-400 hover:text-brand-accent transition-colors duration-200 mb-6">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Posts
          </Link>

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
              />
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-20 bg-brand-dark">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
          {post.content ? (
            <div
              className="prose-custom-dark"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-gray-500 text-center py-12">Content coming soon.</p>
          )}
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
