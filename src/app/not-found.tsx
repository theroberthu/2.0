'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    // Tiny delay so the browser has painted before transitions begin
    const t = setTimeout(() => setMounted(true), 30)
    return () => clearTimeout(t)
  }, [])

  const fade = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  })

  return (
    <div
      suppressHydrationWarning
      style={{
        backgroundColor: '#0B0E17',
        minHeight: '78vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
        fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.75rem',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        {/* Radial glow — sits behind the number */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -55%)',
            width: 'clamp(320px, 60vw, 640px)',
            height: 'clamp(200px, 30vw, 380px)',
            background:
              'radial-gradient(ellipse at center, rgba(212,168,67,0.18) 0%, rgba(212,168,67,0.05) 45%, transparent 70%)',
            pointerEvents: 'none',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 1s ease 100ms',
          }}
        />

        {/* 404 */}
        <div
          style={{
            fontSize: 'clamp(7rem, 22vw, 15rem)',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: '#D4A843',
            position: 'relative',
            ...fade(0),
          }}
        >
          404
        </div>

        {/* Divider */}
        <div
          style={{
            width: 'clamp(100px, 25vw, 220px)',
            height: '1px',
            backgroundColor: '#D4A843',
            opacity: mounted ? 0.45 : 0,
            transform: mounted ? 'scaleX(1)' : 'scaleX(0.2)',
            transformOrigin: 'center',
            transition: 'opacity 0.65s ease 180ms, transform 0.65s ease 180ms',
          }}
        />

        {/* Subtext */}
        <p
          style={{
            color: '#7a9aaa',
            fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
            letterSpacing: '0.01em',
            margin: 0,
            ...fade(320),
          }}
        >
          This page doesn&apos;t exist, or it moved when the site was rebuilt.
        </p>

        {/* Button */}
        <div style={fade(480)}>
          <Link
            href="/blog"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              display: 'inline-block',
              padding: '0.65rem 1.75rem',
              border: '1px solid #D4A843',
              borderRadius: '6px',
              fontSize: '0.9375rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              backgroundColor: hovered ? '#D4A843' : 'transparent',
              color: hovered ? '#0B0E17' : '#D4A843',
              transition: 'background-color 0.2s ease, color 0.2s ease',
              cursor: 'pointer',
            }}
          >
            Read the research
          </Link>
        </div>

        {/* Recirculation. A dead URL is the highest-intent moment to offer a
            real destination, and this site keeps receiving traffic to retired
            and hallucinated URLs from old external links and AI assistants.
            Deliberately static: 404s are probed heavily by crawlers, so this
            must not run a database query. */}
        <nav
          aria-label="Where to go instead"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem 1.5rem',
            maxWidth: '30rem',
            ...fade(620),
          }}
        >
          {[
            { href: '/geo', label: 'AI Search (GEO)' },
            { href: '/aeo', label: 'AI Agents (AEO)' },
            { href: '/about', label: 'About Robert' },
            { href: '/', label: 'Home' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: '#7a9aaa',
                fontSize: '0.875rem',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(122,154,170,0.3)',
                paddingBottom: '2px',
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

      </div>
    </div>
  )
}
