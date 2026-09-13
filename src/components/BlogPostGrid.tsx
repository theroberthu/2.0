import Link from 'next/link'
import { BlogPost } from '@/lib/types'
import { BLOG_CATEGORIES, slugifyCategory } from '@/lib/constants'
import BlogCard from './BlogCard'

/**
 * Server component. Filtering and pagination are resolved in the page from
 * searchParams, so every category and page combination is a real crawlable URL
 * and the full grid ships in the server HTML.
 */
export default function BlogPostGrid({
  posts,
  activeCategory,
  currentPage,
  totalPages,
}: {
  posts: BlogPost[]
  activeCategory: string
  currentPage: number
  totalPages: number
}) {
  const hrefFor = (category: string, page = 1) => {
    const params = new URLSearchParams()
    if (category !== 'All') params.set('category', slugifyCategory(category))
    if (page > 1) params.set('page', String(page))
    const query = params.toString()
    return query ? `/blog?${query}` : '/blog'
  }

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {['All', ...BLOG_CATEGORIES].map((category) => (
          <Link
            key={category}
            href={hrefFor(category)}
            scroll={false}
            aria-current={activeCategory === category ? 'page' : undefined}
            className={`text-[11px] font-mono font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full transition-all duration-200 ${
              activeCategory === category
                ? 'bg-brand-accent text-white'
                : 'bg-white/[0.05] border border-white/[0.08] text-gray-400 hover:border-brand-accent/30 hover:text-gray-300'
            }`}
          >
            {category}
          </Link>
        ))}
      </div>

      {/* Posts grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No posts in this category yet.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-4 mt-12" aria-label="Pagination">
          {currentPage > 1 ? (
            <Link
              href={hrefFor(activeCategory, currentPage - 1)}
              scroll={false}
              rel="prev"
              className="text-[13px] font-semibold text-brand-accent hover:text-white transition-colors duration-200 flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </Link>
          ) : (
            <span className="text-[13px] font-semibold text-gray-600 cursor-not-allowed flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </span>
          )}

          <span className="text-[12px] font-mono text-gray-500">
            {currentPage} / {totalPages}
          </span>

          {currentPage < totalPages ? (
            <Link
              href={hrefFor(activeCategory, currentPage + 1)}
              scroll={false}
              rel="next"
              className="text-[13px] font-semibold text-brand-accent hover:text-white transition-colors duration-200 flex items-center gap-1.5"
            >
              Next
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <span className="text-[13px] font-semibold text-gray-600 cursor-not-allowed flex items-center gap-1.5">
              Next
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          )}
        </nav>
      )}
    </div>
  )
}
