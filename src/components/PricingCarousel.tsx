'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

const cards = [
  {
    id: 'listing-audit',
    tag: 'Starting Point',
    title: 'Listing Audit',
    price: '$500',
    priceSuffix: '',
    description:
      'A deep-dive audit of your top 5 to 10 listings with a scored rubric, competitive analysis, and a prioritized action plan you can execute yourself or bring me in to implement.',
    bestFor:
      'Brands who want clarity on what\u2019s wrong before committing to a bigger engagement.',
    deliveryLabel: 'Delivery',
    deliveryValue: '5 to 7 business days.',
    highlighted: false,
  },
  {
    id: 'growth-strategy',
    tag: 'Full Strategy',
    title: 'Growth Strategy',
    price: '$2,000 \u2013 $3,500',
    priceSuffix: '',
    description:
      'A full-channel strategy covering listings, ads, catalog optimization, and AI search readiness. Includes a 90-day roadmap with specific priorities, timelines, and expected outcomes.',
    bestFor:
      'Brands doing $100K to $2M who need a real plan, not just tactical fixes.',
    deliveryLabel: 'Delivery',
    deliveryValue:
      '2 to 3 weeks. Includes a 60-minute strategy walkthrough.',
    highlighted: true,
  },
  {
    id: 'ongoing-advisory',
    tag: 'Partnership',
    title: 'Ongoing Advisory',
    price: '$1,500 \u2013 $3,000',
    priceSuffix: '/month',
    description:
      'Monthly strategic partnership. I review your performance data, adjust the plan, identify new opportunities, and keep your listings and ads optimized as the marketplace evolves.',
    bestFor:
      'Brands who want a dedicated strategist without the cost of a full-time hire.',
    deliveryLabel: 'Includes',
    deliveryValue:
      'Bi-weekly calls, monthly performance review, priority Slack/email access.',
    highlighted: false,
  },
]

// Order for mobile: Listing Audit first, then Growth Strategy (Most Popular), then Ongoing Advisory
const mobileOrder = [0, 1, 2]

function Card({ card }: { card: (typeof cards)[number] }) {
  return (
    <div
      className={`bg-white/[0.05] backdrop-blur-md border ${card.highlighted ? 'border-brand-accent/30 shadow-[0_0_20px_rgba(45,125,154,0.1)]' : 'border-white/[0.08]'} rounded-xl p-7 flex flex-col relative h-full`}
    >
      {card.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-brand-accent text-white text-[10px] font-mono font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-4">
        <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent/70">
          {card.tag}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3>
      <p className="text-2xl font-bold text-brand-gold mb-4">
        {card.price}
        {card.priceSuffix && (
          <span className="text-sm font-normal text-gray-400">
            {card.priceSuffix}
          </span>
        )}
      </p>
      <p className="text-sm text-gray-400 leading-relaxed mb-4">
        {card.description}
      </p>
      <div className="mt-auto space-y-3 pt-4 border-t border-white/[0.06]">
        <div>
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent/60 mb-1">
            Best for
          </p>
          <p className="text-sm text-gray-400">{card.bestFor}</p>
        </div>
        <div>
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent/60 mb-1">
            {card.deliveryLabel}
          </p>
          <p className="text-sm text-gray-400">{card.deliveryValue}</p>
        </div>
      </div>
    </div>
  )
}

export default function PricingCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isScrolling = useRef(false)

  const getCardWidth = useCallback(() => {
    if (!scrollRef.current) return 0
    const firstCard = scrollRef.current.querySelector('[data-carousel-item]') as HTMLElement
    return firstCard ? firstCard.offsetWidth : scrollRef.current.offsetWidth
  }, [])

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return
    const cardW = getCardWidth()
    const gap = 16
    scrollRef.current.scrollTo({ left: index * (cardW + gap), behavior: 'smooth' })
  }, [getCardWidth])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      if (isScrolling.current) return
      const cardW = getCardWidth()
      const gap = 16
      const slotWidth = cardW + gap
      if (slotWidth === 0) return
      const newIndex = Math.round(container.scrollLeft / slotWidth)
      setActiveIndex(Math.max(0, Math.min(newIndex, mobileOrder.length - 1)))
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [getCardWidth])

  return (
    <>
      {/* Mobile carousel */}
      <div className="md:hidden mb-10">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory -mx-5 px-5 gap-4 pb-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
          {mobileOrder.map((cardIndex) => (
            <div
              key={cards[cardIndex].id}
              data-carousel-item
              className="snap-start shrink-0 w-[calc(100vw-40px)]"
            >
              <Card card={cards[cardIndex]} />
            </div>
          ))}
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {mobileOrder.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i)
                scrollToIndex(i)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === activeIndex
                  ? 'bg-brand-accent w-6'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 mb-10">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </>
  )
}
