'use client'

import { useState } from 'react'
import Image from 'next/image'

interface LazyYouTubeProps {
  videoId: string
  title: string
  /** Additional query params appended to the embed URL, e.g. "rel=0&modestbranding=1" */
  params?: string
  /** Poster image. Defaults to YouTube's hqdefault thumbnail. */
  thumbnail?: string
  /** Image `sizes` hint for the poster. */
  sizes?: string
  /** Load the poster eagerly when the player is above the fold. */
  priority?: boolean
}

/**
 * Lazy YouTube embed.
 * Renders a thumbnail + play button until the user clicks, then swaps in the
 * real iframe. This prevents YouTube's ~400 KB of JS from loading on page load,
 * which is a major FCP/LCP bottleneck. Uses the privacy-enhanced
 * youtube-nocookie.com domain, so nothing is set until the viewer presses play.
 * No autoplay on page load: autoplay=1 applies only after the click.
 */
export default function LazyYouTube({
  videoId,
  title,
  params = 'rel=0&modestbranding=1',
  thumbnail,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 480px, 480px',
  priority = false,
}: LazyYouTubeProps) {
  const [active, setActive] = useState(false)
  const thumb = thumbnail ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?${params}&autoplay=1`

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-black" style={{ aspectRatio: '16/9' }}>
      {active ? (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 w-full h-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
        >
          {/* Thumbnail */}
          <Image
            src={thumb}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes={sizes}
            priority={priority}
            unoptimized={thumb.startsWith('http')}
          />
          {/* Dark overlay */}
          <span className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
          {/* Play button */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-gold/90 group-hover:bg-brand-gold flex items-center justify-center shadow-lg transition-all duration-200 group-hover:scale-110">
              <svg
                className="w-7 h-7 md:w-8 md:h-8 text-white translate-x-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
