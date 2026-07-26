'use client'

import { useEffect, useState } from 'react'

/**
 * Mobile-only reading progress bar for article pages.
 *
 * A long-form post runs 10 or more screens on a phone, and with no completion
 * signal readers abandon mid-scroll. Progress is measured against the article
 * element rather than the document, so the bar reaches 100% when the reading
 * ends instead of after the related posts and footer.
 *
 * Sits flush under the 72px sticky header. Hidden at xl: and up, where the
 * sticky sidebar table of contents already provides orientation.
 */
export default function ReadingProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const article = document.querySelector('article')
    if (!article) return

    let raf = 0
    const update = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const rect = article.getBoundingClientRect()
        const start = rect.top + window.scrollY
        const distance = rect.height - window.innerHeight
        const scrolled = window.scrollY - start
        const next =
          distance > 0 ? (scrolled / distance) * 100 : scrolled > 0 ? 100 : 0
        setPct(Math.min(100, Math.max(0, next)))
        raf = 0
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      className="xl:hidden fixed top-[71px] left-0 right-0 z-[60] h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-brand-gold/80"
        style={{ width: `${pct}%`, transition: 'width 90ms linear' }}
      />
    </div>
  )
}
