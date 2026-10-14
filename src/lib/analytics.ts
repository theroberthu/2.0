/**
 * Minimal GA4 event helper. Uses the gtag snippet already loaded in the root
 * layout; does nothing if gtag is unavailable (blocked, consent, dev). No new
 * vendor and no personal data: event names plus a content identifier only.
 */

type GtagFn = (command: 'event', name: string, params?: Record<string, string>) => void

export function trackEvent(name: string, params: Record<string, string> = {}): void {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag
  if (typeof gtag === 'function') gtag('event', name, params)
}
