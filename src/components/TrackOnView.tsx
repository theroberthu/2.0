'use client'

import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/analytics'

/** Fires one GA4 event when the page mounts. Renders nothing. */
export default function TrackOnView({ event, params }: { event: string; params?: Record<string, string> }) {
  // Guards against React Strict Mode's double effect run in development.
  const sent = useRef(false)
  useEffect(() => {
    if (sent.current) return
    sent.current = true
    trackEvent(event, params)
    // Fire once per mount; params are static per page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event])
  return null
}
