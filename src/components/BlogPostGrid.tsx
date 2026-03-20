'use client'

import { Suspense, useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { BlogPost } from '@/lib/types'
import { BLOG_CATEGORIES, POSTS_PER_PAGE, categoryFromSlug, slugifyCategory } from '@/lib/constants'
import BlogCard from './BlogCard'

function BlogPostGridInner({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState(1)
  const searchParams = useSearchParams()

  // Sync category filter from ?category= URL param on mount / param change
  useEffect(() => {
    const slug = searchParams.get('category')
    if (slug) {
      const match = categoryFromSlug(slug)
      if (match) setActiveCategory(match)
    }
  }, [searchParams])

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts
    return posts.filter((post) => post.category === activeCategory)
  }, [posts, activeCategory])

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
    // Update URL without full navigation so breadcrumb links work
    const url = category === 'All'
      ? '/blog'
      : `/blog?category=${slugifyCategory(category)}`
    window.history.replaceState(null, '', url)
  }

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {['All', ...BLOG_CATEGORIES].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`text-[11px] font-mono font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full transition-all duration-200 ${
              activeCategory === category
                ? 'bg-brand-accent text-white'
                : 'bg-white/[0.05] border border-white/[0.08] text-gray-400 hover:border-brand-accent/30 hover:text-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map((post) => (
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
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="text-[13px] font-semibold text-brand-accent disabled:text-gray-600 disabled:cursor-not-allowed hover:text-white transition-colors duration-200 flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          <span className="text-[12px] font-mono text-gray-500">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="text-[13px] font-semibold text-brand-accent disabled:text-gray-600 disabled:cursor-not-allowed hover:text-white transition-colors duration-200 flex items-center gap-1.5"
          >
            Next
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default function BlogPostGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <Suspense>
      <BlogPostGridInner posts={posts} />
    </Suspense>
  )
}
