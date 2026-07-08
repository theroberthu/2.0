'use client'

import { useEffect, useState } from 'react'

const DISMISS_KEY = 'floating-cta-dismissed'

/**
 * Mobile-only floating newsletter Subscribe pill. Appears once the reader
 * scrolls past the hero so it does not crowd the initial view. Dismissible
 * with the X button. Dismissal persists for the browser session only.
 * Hidden on xl: and up because the sticky sidebar serves that role.
 */
export default function FloatingBookCta() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem(DISMISS_KEY) === '1') {
      setDismissed(true)
      return
    }

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        // Show after ~600px scroll (past the hero on most posts)
        setVisible(window.scrollY > 600)
        raf = 0
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  if (dismissed) return null

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    sessionStorage.setItem(DISMISS_KEY, '1')
    setDismissed(true)
  }

  return (
    <div
      className={`xl:hidden fixed bottom-4 right-4 z-40 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-1 rounded-full bg-brand-gold shadow-elevated">
        <a
          href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 pl-4 pr-3 py-3 text-white font-semibold text-[13px] hover:bg-brand-gold/90 rounded-full transition-colors duration-150"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Subscribe
        </a>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss"
          className="flex items-center justify-center w-9 h-9 mr-1 rounded-full text-white/80 hover:text-white hover:bg-black/15 transition-colors duration-150"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
