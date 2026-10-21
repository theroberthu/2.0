import Image from 'next/image'
import TrackedLink from '@/components/TrackedLink'
import { youtubeShortUrl, type ShortEntry } from '@/lib/videos'

interface ShortsRowProps {
  shorts: ShortEntry[]
  /** Where the row appears, recorded with each click (e.g. "videos_index"). */
  location: string
  /** Slug of the page showing the row, when it is a companion page. */
  videoSlug?: string
}

/**
 * Vertical Shorts cards that open on YouTube. Scrolls sideways on phones and
 * wraps into a grid from the md breakpoint up.
 */
export default function ShortsRow({ shorts, location, videoSlug }: ShortsRowProps) {
  if (shorts.length === 0) return null
  return (
    <ul className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-px-5 -mx-5 px-5 pb-2 sm:mx-0 sm:px-0 sm:scroll-px-0 md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-4 md:overflow-visible">
      {shorts.map((s) => (
        <li key={s.youtubeId} className="snap-start shrink-0 w-[150px] md:w-auto">
          <TrackedLink
            href={youtubeShortUrl(s.youtubeId)}
            external
            event="short_click"
            params={{ short_id: s.youtubeId, location, ...(videoSlug ? { video_slug: videoSlug } : {}) }}
            ariaLabel={`${s.title} (YouTube Short, ${s.durationLabel})`}
            className="group block"
          >
            <span className="relative block aspect-[9/16] rounded-lg overflow-hidden bg-black border border-white/[0.08] group-hover:border-brand-accent/40 transition-colors duration-200">
              <Image
                src={s.thumbnail}
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 150px, 220px"
              />
              <span className="absolute bottom-1.5 right-1.5 rounded bg-black/80 px-1.5 py-0.5 text-[11px] font-mono font-medium text-white">
                {s.durationLabel}
              </span>
            </span>
            <span className="block mt-2 text-[13px] font-medium text-gray-200 group-hover:text-brand-accent transition-colors duration-200 leading-snug line-clamp-2">
              {s.title}
            </span>
          </TrackedLink>
        </li>
      ))}
    </ul>
  )
}
