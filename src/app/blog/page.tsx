import { Metadata } from 'next'
import { supabase } from '@/lib/supabase'
import BlogPostGrid from '@/components/BlogPostGrid'
import SchemaMarkup from '@/components/SchemaMarkup'
import {
  POSTS_PER_PAGE,
  SITE_URL,
  categoryFromSlug,
  slugifyCategory,
} from '@/lib/constants'

type BlogSearchParams = { category?: string; page?: string }

/** Resolve ?category= and ?page= into the values the grid needs. */
function resolveView(searchParams: BlogSearchParams) {
  const category = searchParams.category
    ? categoryFromSlug(searchParams.category) ?? 'All'
    : 'All'
  const page = Math.max(1, Number.parseInt(searchParams.page ?? '1', 10) || 1)
  return { category, page }
}

/** Count published posts for a view, so metadata can clamp `page` the same way
 *  the page body does. Head-only: returns the count without the rows. */
async function countFor(category: string) {
  let query = supabase
    .from('blog_posts')
    .select('id', { count: 'exact', head: true })
    .eq('status', 'published')
  if (category !== 'All') query = query.eq('category', category)
  const { count } = await query
  return count ?? 0
}

/** Canonical path for a given view, so paginated and filtered views self-canonicalise. */
function canonicalFor(category: string, page: number) {
  const params = new URLSearchParams()
  if (category !== 'All') params.set('category', slugifyCategory(category))
  if (page > 1) params.set('page', String(page))
  const query = params.toString()
  return query ? `/blog?${query}` : '/blog'
}

export const revalidate = 60

const BLOG_DESCRIPTION =
  'A public research notebook on how technology changes commerce. Analysis of AI, digital transformation, product discovery, and the systems shaping how products are discovered, evaluated, and bought.'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: BlogSearchParams
}): Promise<Metadata> {
  const { category, page } = resolveView(searchParams)

  // Clamp to the real last page so out-of-range values such as ?page=999 do not
  // mint an unbounded set of self-canonicalising URLs.
  const total = await countFor(category)
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const canonical = canonicalFor(category, currentPage)

  const titleParts = [category === 'All' ? 'Research Notebook' : category]
  if (currentPage > 1) titleParts.push(`Page ${currentPage}`)
  const title = titleParts.join(' - ')

  const description =
    category === 'All'
      ? BLOG_DESCRIPTION
      : `${category} research from Robert Hu on how technology changes commerce.`

  return {
    title,
    description,
    // Each filtered and paginated view canonicalises to itself so the deeper
    // pages can be indexed rather than folded into page 1.
    alternates: { canonical },
    openGraph: {
      title: `${title} | Robert Hu`,
      description,
      url: `${SITE_URL}${canonical}`,
    },
  }
}

const blogCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Research Notebook - Robert Hu',
  description:
    'A public research notebook on how technology changes commerce, covering AI, digital transformation, and product discovery.',
  url: `${SITE_URL}/blog`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'Robert Hu',
    url: SITE_URL,
  },
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: BlogSearchParams
}) {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  const { category: activeCategory, page } = resolveView(searchParams)

  const all = posts || []
  const filtered =
    activeCategory === 'All' ? all : all.filter((post) => post.category === activeCategory)

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  return (
    <>
      <SchemaMarkup data={blogCollectionSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark pt-20 md:pt-28 pb-10 md:pb-14">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        {/* Accent glow as a plain radial gradient, not the usual blur-3xl circle. With the tight
            bottom padding, a blurred circle is clipped mid-fade by overflow-hidden and draws a
            visible seam above the category chips, and masking it adds a render-surface edge of
            its own. A gradient needs neither, and is fully transparent before the section edge. */}
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle at calc(100% - 100px) 60px, rgba(45, 125, 154, 0.07), transparent 240px)' }}
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">Blog</span>
          <h1 className="text-3xl md:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-4">
            Research Notebook
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            How technology is changing commerce, and what operators need to understand before the shift becomes obvious.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-20 md:pb-28 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <BlogPostGrid
            posts={paginated}
            activeCategory={activeCategory}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </section>
    </>
  )
}
