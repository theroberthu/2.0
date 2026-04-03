'use client'

import { useEffect } from 'react'

/** Hides the global Header, Footer, and BackToTop on mount. Restores on unmount. */
export default function HideGlobalChrome() {
  useEffect(() => {
    document.body.classList.add('hide-global-chrome')
    return () => document.body.classList.remove('hide-global-chrome')
  }, [])
  return null
}
