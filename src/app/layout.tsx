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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Robert Hu - E-commerce Strategist',
    template: '%s | Robert Hu - E-commerce Strategist',
  },
  description:
    'E-commerce strategist helping $500K-$5M brands implement AI and digital transformation strategies that actually work.',
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
    title: 'Robert Hu - E-commerce Strategist',
    description:
      'E-commerce strategist helping $500K-$5M brands implement AI and digital transformation strategies that actually work.',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Robert Hu - E-commerce Strategist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robert Hu - E-commerce Strategist',
    description:
      'E-commerce strategist helping $500K-$5M brands implement AI and digital transformation strategies that actually work.',
    images: ['/images/og-default.png'],
  },
  alternates: {
    types: {
      'application/rss+xml': `${SITE_URL}/feed.xml`,
    },
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
  jobTitle: 'E-commerce Strategist',
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
  description: 'E-commerce strategist helping $500K-$5M brands implement AI and digital transformation strategies.',
  publisher: { '@type': 'Person', name: 'Robert Hu', url: SITE_URL },
}

const siteNavSchema = {
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: [
    'Services',
    'AI Search (GEO)',
    'AI Agents (AEO)',
    'Case Studies',
    'Blog',
    'About',
    'Free Strategy Session',
  ],
  url: [
    `${SITE_URL}/services`,
    `${SITE_URL}/geo`,
    `${SITE_URL}/aeo`,
    `${SITE_URL}/case-studies`,
    `${SITE_URL}/blog`,
    `${SITE_URL}/about`,
    `${SITE_URL}/free-strategy-session`,
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
