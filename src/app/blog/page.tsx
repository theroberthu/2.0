import { Metadata } from 'next'
import { supabase } from '@/lib/supabase'
import BlogPostGrid from '@/components/BlogPostGrid'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Actionable insights on e-commerce strategy, AI integration, and digital transformation for growing brands.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Robert Hu - E-commerce Strategist',
    description:
      'Actionable insights on e-commerce strategy, AI integration, and digital transformation for growing brands.',
    url: `${SITE_URL}/blog`,
  },
}

const blogCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Blog - Robert Hu',
  description:
    'Actionable insights on e-commerce strategy, AI integration, and digital transformation for growing brands.',
  url: `${SITE_URL}/blog`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'Robert Hu',
    url: SITE_URL,
  },
}

export default async function BlogPage() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  return (
    <>
      <SchemaMarkup data={blogCollectionSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">Blog</span>
          <h1 className="text-3xl md:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-4">
            Insights &amp; Strategy
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            Thoughts on e-commerce, AI, and building systems that scale. No fluff, just what works.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <BlogPostGrid posts={posts || []} />
        </div>
      </section>
    </>
  )
}
