'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
}

interface MobileTocCardProps {
  toc: TocItem[]
}

/**
 * Mobile-only table of contents. Renders as a collapsible card near the top
 * of the article body. Desktop sidebar serves the same purpose at xl: and up,
 * so this component is hidden there.
 */
export default function MobileTocCard({ toc }: MobileTocCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)

  // Scrollspy. Same approach as the desktop sidebar.
  useEffect(() => {
    if (toc.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries.filter((e) => e.isIntersecting)
        if (inView.length > 0) {
          const sorted = inView.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          setActiveId(sorted[0].target.id)
        }
      },
      { rootMargin: '-96px 0px -60% 0px', threshold: 0 }
    )

    const elements = toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [toc])

  if (toc.length === 0) return null

  return (
    <nav
      aria-label="Table of contents"
      className="xl:hidden mb-8 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-white/[0.03] transition-colors duration-150"
      >
        <span className="flex items-center gap-3">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-gold">
            On This Page
          </span>
          <span className="text-[13px] text-gray-400">
            {toc.length} {toc.length === 1 ? 'section' : 'sections'}
          </span>
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <ul className="px-5 pb-5 space-y-3 border-t border-white/[0.06] pt-4">
          {toc.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setExpanded(false)}
                  className={`block text-[14px] leading-snug transition-colors duration-200 border-l-2 pl-3 -ml-px ${
                    isActive
                      ? 'text-brand-gold border-brand-gold font-medium'
                      : 'text-gray-300 border-transparent hover:text-white hover:border-white/30'
                  }`}
                >
                  {item.text}
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </nav>
  )
}
