'use client'

import { useState } from 'react'
import Image from 'next/image'

interface LazyYouTubeProps {
  videoId: string
  title: string
  /** Additional query params appended to the embed URL, e.g. "rel=0&modestbranding=1" */
  params?: string
}

/**
 * Lazy YouTube embed.
 * Renders a thumbnail + play button until the user clicks, then swaps in the
 * real iframe. This prevents YouTube's ~400 KB of JS from loading on page load,
 * which is a major FCP/LCP bottleneck.
 */
export default function LazyYouTube({ videoId, title, params = 'rel=0&modestbranding=1' }: LazyYouTubeProps) {
  const [active, setActive] = useState(false)
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
  const src = `https://www.youtube.com/embed/${videoId}?${params}&autoplay=1`

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden bg-black cursor-pointer group"
      style={{ aspectRatio: '16/9' }}
      onClick={() => setActive(true)}
      role="button"
      aria-label={`Play video: ${title}`}
    >
      {active ? (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <>
          {/* Thumbnail */}
          <Image
            src={thumb}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 480px"
            unoptimized
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-brand-gold/90 group-hover:bg-brand-gold flex items-center justify-center shadow-lg transition-all duration-200 group-hover:scale-110">
              <svg
                className="w-7 h-7 text-white translate-x-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
