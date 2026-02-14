import Link from 'next/link'
import { BlogPost } from '@/lib/types'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white border border-gray-100 rounded-xl p-7 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300"
    >
      {post.published_at && (
        <time className="text-[11px] font-medium text-brand-muted/70 uppercase tracking-wider">
          {new Date(post.published_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </time>
      )}
      <h3 className="text-lg font-semibold text-brand-dark mt-2 mb-2 group-hover:text-brand-accent transition-colors duration-200 leading-snug">
        {post.title}
      </h3>
      {post.excerpt && (
        <p className="text-sm text-brand-muted leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
      )}
      <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent group-hover:gap-2.5 transition-all duration-200">
        Read article
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}
