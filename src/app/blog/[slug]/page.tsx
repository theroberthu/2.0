import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import SchemaMarkup from '@/components/SchemaMarkup'
import CTABanner from '@/components/CTABanner'
import { SITE_URL } from '@/lib/constants'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('published', true)
  return (posts || []).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (!post) return {}

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt || '',
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt || '',
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
      ...(post.published_at && { publishedTime: post.published_at }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt || '',
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || '',
    author: {
      '@type': 'Person',
      name: 'Robert Hu',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Robert Hu',
      url: SITE_URL,
    },
    url: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}/images/robert-hu-headshot.png`,
    ...(post.published_at && { datePublished: post.published_at }),
    ...(post.updated_at && { dateModified: post.updated_at }),
  }

  return (
    <>
      <SchemaMarkup data={articleSchema} />

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-bg via-white to-brand-bg py-16 md:py-24">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1a3a4a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-[720px] mx-auto px-5 sm:px-8">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-muted hover:text-brand-accent transition-colors duration-200 mb-6">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Posts
          </Link>
          <h1 className="text-2xl md:text-[2.25rem] font-bold text-brand-dark leading-tight tracking-tight mb-4">
            {post.title}
          </h1>
          {post.published_at && (
            <time className="text-[13px] text-brand-muted font-medium">
              {new Date(post.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-20">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
          {post.content ? (
            <div
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-brand-muted text-center py-12">Content coming soon.</p>
          )}
        </div>
      </article>

      <CTABanner />
    </>
  )
}
