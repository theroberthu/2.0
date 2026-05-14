'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
}

interface BlogSidebarProps {
  toc?: TocItem[]
}

export default function BlogSidebar({ toc = [] }: BlogSidebarProps) {
  const [visible, setVisible] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600)
    return () => clearTimeout(timer)
  }, [])

  // Highlight the H2 currently in view as the reader scrolls. Uses
  // IntersectionObserver instead of scroll math so it stays cheap.
  useEffect(() => {
    if (toc.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries.filter((e) => e.isIntersecting)
        if (inView.length > 0) {
          // Pick the topmost section currently intersecting the viewport.
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

  return (
    <aside className="hidden xl:block">
      <div
        className="sticky top-24 transition-opacity duration-500 space-y-4"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {/* Free session CTA */}
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 shadow-elevated">
          <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent mb-3">
            Free Session
          </span>

          <h3 className="text-[0.9375rem] font-bold text-white leading-snug mb-2">
            Get a free strategy session
          </h3>
          <p className="text-[0.8125rem] text-gray-400 leading-relaxed mb-4">
            15 minutes. Honest take on your brand&apos;s biggest growth lever. No pitch.
          </p>

          <Link
            href="/free-strategy-session"
            className="block w-full text-center bg-brand-gold text-white font-semibold text-sm px-4 py-2.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5"
          >
            Book a Free Session
          </Link>

          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <p className="text-[0.75rem] text-gray-500 leading-relaxed">
              E-commerce strategy, Amazon, GEO &amp; marketplace growth.
            </p>
          </div>
        </div>

        {/* Table of contents - only rendered for posts with 3+ H2s */}
        {toc.length > 0 && (
          <nav
            aria-label="Table of contents"
            className="rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 shadow-elevated max-h-[calc(100vh-260px)] overflow-y-auto"
          >
            <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-gold mb-3">
              On This Page
            </span>
            <ul className="space-y-2.5">
              {toc.map((item) => {
                const isActive = activeId === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block text-[0.8125rem] leading-snug transition-colors duration-200 border-l-2 pl-3 -ml-px ${
                        isActive
                          ? 'text-brand-gold border-brand-gold font-medium'
                          : 'text-gray-400 border-transparent hover:text-white hover:border-white/30'
                      }`}
                    >
                      {item.text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        )}
      </div>
    </aside>
  )
}
