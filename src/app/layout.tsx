import type { Metadata, Viewport } from 'next'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL, SOCIAL_LINKS } from '@/lib/constants'
import { Analytics } from '@vercel/analytics/next'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const SITE_DESCRIPTION =
  'Robert Hu researches how technology changes commerce, from AI and digital transformation to product discovery and the systems shaping how products are discovered, evaluated, and bought. A public research notebook.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Robert Hu - How Technology Changes Commerce',
    template: '%s | Robert Hu',
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Robert Hu',
    title: 'Robert Hu - How Technology Changes Commerce',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Robert Hu - How Technology Changes Commerce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robert Hu - How Technology Changes Commerce',
    description: SITE_DESCRIPTION,
    images: ['/images/og-default.png'],
  },
  alternates: {
    types: {
      'application/rss+xml': `${SITE_URL}/feed.xml`,
    },
  },
  verification: {
    google: 'Eazm8oO1cDt7U38aXDzZ2US6VW55nzZU288LDUGM9A4',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2a32',
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Robert Hu',
  url: SITE_URL,
  jobTitle: 'Commerce and Technology Researcher',
  description:
    'Robert Hu researches how technology changes commerce, from AI and digital transformation to product discovery.',
  sameAs: [
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.x,
    SOCIAL_LINKS.youtube,
  ],
}

const siteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Robert Hu',
  url: SITE_URL,
  description: 'A public research notebook on how technology changes commerce, covering AI, digital transformation, and product discovery.',
  publisher: { '@type': 'Person', name: 'Robert Hu', url: SITE_URL },
}

const siteNavSchema = {
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: [
    'AI Search (GEO)',
    'AI Agents (AEO)',
    'Blog',
    'About',
  ],
  url: [
    `${SITE_URL}/geo`,
    `${SITE_URL}/aeo`,
    `${SITE_URL}/blog`,
    `${SITE_URL}/about`,
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V9BV9F9MPM"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-V9BV9F9MPM');`}
        </Script>
      </head>
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-brand-bg text-brand-dark`}
      >
        <SchemaMarkup data={personSchema} />
        <SchemaMarkup data={siteSchema} />
        <SchemaMarkup data={siteNavSchema} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  )
}
