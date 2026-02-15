import type { Metadata, Viewport } from 'next'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL, SOCIAL_LINKS } from '@/lib/constants'

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
    'E-commerce strategist helping $100K-$2M brands implement AI and digital transformation strategies that actually work.',
  icons: {
    icon: '/images/theroberthulogo.png',
    apple: '/images/theroberthulogo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Robert Hu',
    title: 'Robert Hu - E-commerce Strategist',
    description:
      'E-commerce strategist helping $100K-$2M brands implement AI and digital transformation strategies that actually work.',
    images: [
      {
        url: '/images/robert-hu-headshot.png',
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
      'E-commerce strategist helping $100K-$2M brands implement AI and digital transformation strategies that actually work.',
    images: ['/images/robert-hu-headshot.png'],
  },
  alternates: {
    canonical: SITE_URL,
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
    SOCIAL_LINKS.instagram,
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-brand-bg text-brand-dark`}
      >
        <SchemaMarkup data={personSchema} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
