'use client'

import type { ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'

interface TrackClicksProps {
  event: string
  params?: Record<string, string>
  className?: string
  children: ReactNode
}

/**
 * Records one GA4 event when anything inside is clicked. For wrapping a
 * server-rendered link component (such as BlogCard) that cannot take an
 * onClick itself. Capture phase, so navigation is never delayed.
 */
export default function TrackClicks({ event, params, className, children }: TrackClicksProps) {
  return (
    <div className={className} onClickCapture={() => trackEvent(event, params)}>
      {children}
    </div>
  )
}
