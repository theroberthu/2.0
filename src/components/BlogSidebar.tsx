'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function BlogSidebar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <aside className="hidden xl:block">
      <div
        className="sticky top-24 transition-opacity duration-500"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 shadow-elevated">
          {/* Label */}
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

          {/* Divider */}
          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <p className="text-[0.75rem] text-gray-500 leading-relaxed">
              E-commerce strategy, Amazon, GEO &amp; marketplace growth.
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}
