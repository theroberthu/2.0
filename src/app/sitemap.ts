import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'
import { CASE_STUDIES } from '@/lib/case-studies-data'

const SITE_URL = process.env.SITE_URL || 'https://theroberthu.com'

// Hardcoded service slugs (no longer fetched from Supabase)
const SERVICE_SLUGS = [
  'ecommerce-strategy',
  'product-listing-optimization',
  'digital-marketing-strategy',
  'digital-transformation',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${SITE_URL}/free-strategy-session`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${SITE_URL}/geo`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  // Case study pages
  const caseStudyPages = CASE_STUDIES.map((cs) => ({
    url: `${SITE_URL}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Service pages (hardcoded)
  const servicePages = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic blog pages (still from Supabase)
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const { data: posts } = await supabase.from('blog_posts').select('slug, published_at, updated_at').eq('published', true)
    blogPages = (posts || []).map((p: { slug: string; published_at: string; updated_at?: string }) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.updated_at || p.published_at),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // If Supabase is unavailable, skip blog pages in sitemap
  }

  return [...staticPages, ...caseStudyPages, ...servicePages, ...blogPages]
}
