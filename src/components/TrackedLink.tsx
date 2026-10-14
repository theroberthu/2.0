'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'

interface TrackedLinkProps {
  href: string
  event: string
  params?: Record<string, string>
  className?: string
  children: ReactNode
  /** Opens in a new tab with noopener; used for links off the site. */
  external?: boolean
  ariaLabel?: string
}

/** A link that records one GA4 event on click. Navigation is never delayed. */
export default function TrackedLink({ href, event, params, className, children, external, ariaLabel }: TrackedLinkProps) {
  const onClick = () => trackEvent(event, params)
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
