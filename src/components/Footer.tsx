import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand + description */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-3 group">
              <Image
                src="/images/theroberthulogo.png"
                alt="Robert Hu"
                width={26}
                height={26}
                className="rounded-sm opacity-80 group-hover:opacity-100 transition-opacity duration-200"
              />
              <span className="text-lg font-bold text-white tracking-tight">
                Robert Hu
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              E-commerce strategist helping $500K-$5M brands implement AI and digital transformation strategies that actually work.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-muted/70 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/free-strategy-session"
                  className="text-[13px] text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Free Strategy Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-muted/70 mb-5">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-muted/70 mb-5">
              Newsletter
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Weekly e-commerce insights on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-brand-gold text-brand-gold text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-gold hover:text-white transition-all duration-200"
            >
              Subscribe to Hu&apos;s Weekly Hoot
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-brand-muted/50">
            &copy; {new Date().getFullYear()} Robert Hu. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-muted/40 hover:text-white transition-colors duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="text-brand-muted/40 hover:text-white transition-colors duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-brand-muted/40 hover:text-white transition-colors duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
