import { Metadata } from 'next'
import { supabase } from '@/lib/supabase'
import BlogCard from '@/components/BlogCard'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Actionable insights on e-commerce strategy, AI integration, and digital transformation for growing brands.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Robert Hu \u2014 E-commerce Strategist',
    description:
      'Actionable insights on e-commerce strategy, AI integration, and digital transformation for growing brands.',
    url: `${SITE_URL}/blog`,
  },
}

const blogCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Blog \u2014 Robert Hu',
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
    .eq('published', true)
    .order('published_at', { ascending: false })

  return (
    <>
      <SchemaMarkup data={blogCollectionSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-bg via-white to-brand-bg py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1a3a4a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4">Blog</span>
          <h1 className="text-3xl md:text-[2.75rem] font-bold text-brand-dark leading-tight tracking-tight mb-4">
            Insights &amp; Strategy
          </h1>
          <p className="text-base md:text-lg text-brand-muted max-w-xl mx-auto">
            Thoughts on e-commerce, AI, and building systems that scale. No fluff, just what works.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-brand-muted">Posts coming soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
