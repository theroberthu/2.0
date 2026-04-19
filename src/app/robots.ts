import { MetadataRoute } from 'next'

const SITE_URL = process.env.SITE_URL || 'https://theroberthu.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/api/og/'],
      disallow: ['/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
