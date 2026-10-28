import Image from 'next/image'
import TrackedLink from '@/components/TrackedLink'
import type { VideoEntry } from '@/lib/videos'

/**
 * "Related documentary" card at the end of a blog post. Links to the companion
 * page rather than embedding the player, so the post stays light and the
 * companion page remains the one page Google treats as the video's home.
 */
export default function RelatedVideoCard({ video }: { video: VideoEntry }) {
  return (
    <aside className="mt-12 md:mt-14" aria-label="Related documentary">
      <span className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">
        Related Documentary
      </span>
      <TrackedLink
        href={`/videos/${video.slug}`}
        event="related_video_click"
        params={{ video_slug: video.slug, location: 'blog_post' }}
        className="group grid grid-cols-1 sm:grid-cols-[240px_1fr] bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl overflow-hidden hover:border-brand-accent/40 transition-colors duration-200"
      >
        <span className="relative block aspect-video sm:aspect-auto sm:min-h-[135px] bg-black">
          <Image
            src={video.thumbnail}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 240px"
          />
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span className="w-11 h-11 rounded-full bg-brand-gold/90 group-hover:bg-brand-gold flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
              <svg className="w-5 h-5 text-white translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-2 right-2 bg-black/75 text-white text-[11px] font-mono px-1.5 py-0.5 rounded">
            {video.durationLabel}
          </span>
        </span>
        <span className="block p-5 md:p-6">
          <span className="block text-base md:text-lg font-bold text-white leading-snug tracking-tight mb-2 group-hover:text-brand-accent transition-colors duration-200">
            {video.h1}
          </span>
          <span className="block text-[14px] text-gray-400 leading-relaxed mb-3">{video.dek}</span>
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent">
            Watch the documentary
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </span>
      </TrackedLink>
    </aside>
  )
}
