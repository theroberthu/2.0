import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/types'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl overflow-hidden hover:border-brand-accent/40 hover:-translate-y-1 hover:shadow-elevated transition-all duration-300"
    >
      {/* Featured image */}
      <div className="relative w-full aspect-[1200/630] bg-gradient-to-br from-brand-deep/60 to-brand-dark/80">
        {post.og_image ? (
          <Image
            src={post.og_image}
            alt={post.schema_json?.featured_image_alt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-brand-accent/30 text-4xl font-bold tracking-tight">
              {post.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Category tag */}
        {post.category && post.category !== 'general' && (
          <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent bg-brand-accent/[0.1] px-2.5 py-1 rounded-full mb-3">
            {post.category}
          </span>
        )}

        <h3 className="text-lg font-semibold text-white mt-1 mb-2 group-hover:text-brand-accent transition-colors duration-200 leading-snug">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        {/* Bottom row: date + reading time */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
          <div className="flex items-center gap-3">
            {post.published_at && (
              <time className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
            )}
            {post.read_time_minutes && (
              <>
                <span className="text-gray-600">·</span>
                <span className="text-[11px] font-medium text-gray-500">
                  {post.read_time_minutes} min read
                </span>
              </>
            )}
          </div>

          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent group-hover:gap-2.5 transition-all duration-200">
            Read
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
