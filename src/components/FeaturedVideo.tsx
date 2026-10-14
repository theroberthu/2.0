import Image from 'next/image'
import TrackedLink from '@/components/TrackedLink'
import { FEATURED_VIDEO_SLUG, getVideo } from '@/lib/videos'

/**
 * Homepage Featured Video slot. Driven entirely by FEATURED_VIDEO_SLUG in
 * src/lib/videos.ts: point it at another entry to swap the video, or set it to
 * null to remove the section. Links to the companion page, which then drives
 * the YouTube view. No autoplay and no embed here.
 */
export default function FeaturedVideo() {
  const video = FEATURED_VIDEO_SLUG ? getVideo(FEATURED_VIDEO_SLUG) : undefined
  if (!video) return null

  return (
    <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]" aria-label="Featured video">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <TrackedLink
          href={`/videos/${video.slug}`}
          event="featured_video_click"
          params={{ video_slug: video.slug, location: 'homepage' }}
          className="group block bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden hover:border-brand-accent/40 hover:shadow-elevated transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
            <div className="relative aspect-video lg:border-r border-white/[0.06]">
              <Image
                src={video.thumbnail}
                alt={video.thumbnailAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-gold/90 group-hover:bg-brand-gold flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
              <span className="absolute bottom-3 right-3 bg-black/75 text-white text-[12px] font-mono px-2 py-0.5 rounded">
                {video.durationLabel}
              </span>
            </div>

            <div className="p-7 md:p-10 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                {video.feature.eyebrow}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-[1.15] tracking-tight mb-4 group-hover:text-brand-accent transition-colors duration-200">
                {video.feature.title}
              </h2>
              <p className="text-base text-gray-400 leading-relaxed mb-6">{video.feature.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent group-hover:gap-2.5 transition-all duration-200">
                {video.feature.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </TrackedLink>
      </div>
    </section>
  )
}
