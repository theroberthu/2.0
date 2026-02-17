'use client'

import { useState, useRef, useEffect, useCallback, ReactNode } from 'react'

interface MobileCarouselProps {
  children: ReactNode[]
  /** Tailwind breakpoint to switch from carousel to grid. Default: 'md' (768px) */
  breakpoint?: 'md' | 'lg'
  /** Desktop grid classes, e.g. 'md:grid-cols-3' */
  desktopGridCols: string
  /** Optional: extra classes on the desktop grid container */
  className?: string
}

export default function MobileCarousel({
  children,
  breakpoint = 'md',
  desktopGridCols,
  className = '',
}: MobileCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const hideClass = breakpoint === 'lg' ? 'lg:hidden' : 'md:hidden'
  const showClass = breakpoint === 'lg' ? 'hidden lg:grid' : 'hidden md:grid'

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.offsetWidth
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const cardWidth = container.offsetWidth
      if (cardWidth === 0) return
      const newIndex = Math.round(container.scrollLeft / cardWidth)
      setActiveIndex(Math.max(0, Math.min(newIndex, children.length - 1)))
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [children.length])

  return (
    <>
      {/* Mobile carousel */}
      <div className={hideClass}>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory -mx-5 px-5 gap-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {children.map((child, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-[calc(100vw-40px)] max-w-[380px]"
            >
              {child}
            </div>
          ))}
        </div>
        {/* Dot indicators */}
        {children.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {children.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i)
                  scrollToIndex(i)
                }}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === activeIndex
                    ? 'bg-brand-accent w-6'
                    : 'bg-white/20 hover:bg-white/30 w-2'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Desktop grid */}
      <div className={`${showClass} ${desktopGridCols} gap-6 ${className}`}>
        {children}
      </div>
    </>
  )
}
