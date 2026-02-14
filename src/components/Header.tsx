'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { NAV_LINKS } from '@/lib/constants'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/[0.97] backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[72px]">
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/images/theroberthulogo.png"
            alt="Robert Hu"
            width={38}
            height={38}
            className="rounded-sm"
            priority
          />
          <span className="hidden sm:inline-block text-[17px] font-bold text-white tracking-tight">
            Robert Hu
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/free-strategy-session"
            className="text-[13px] font-semibold bg-brand-accent text-white px-5 py-2.5 rounded-md hover:bg-brand-accent/85 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Free Strategy Session
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-white/[0.06] bg-brand-dark">
          <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] font-medium text-gray-400 hover:text-white py-2.5 px-3 rounded-md hover:bg-white/[0.05] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <Link
                href="/free-strategy-session"
                onClick={() => setMobileOpen(false)}
                className="block text-[15px] font-semibold bg-brand-accent text-white px-5 py-3 rounded-md text-center hover:bg-brand-accent/85 transition-all duration-200"
              >
                Free Strategy Session
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
