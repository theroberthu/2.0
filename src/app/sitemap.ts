import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

const SITE_URL = process.env.SITE_URL || 'https://theroberthu.com'

// NOTE: The /services, /services/* and /geo-audit consulting pages were removed
// from the sitemap in the Archive and Evolve transition. Their routes stay live
// but are noindex, pending a rebuild as research hubs.

// Last-reviewed dates for stable pages - update when content changes
const STATIC_LAST_MODIFIED = {
  home: new Date('2026-03-01'),
  about: new Date('2025-12-01'),
  blog: new Date('2026-03-18'),
  geo: new Date('2026-06-22'),
  geoAlexaForShopping: new Date('2026-05-24'),
  geoWalmartSparky: new Date('2026-06-22'),
  aeo: new Date('2026-03-19'),
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    { url: SITE_URL, lastModified: STATIC_LAST_MODIFIED.home, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: STATIC_LAST_MODIFIED.about, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: STATIC_LAST_MODIFIED.blog, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${SITE_URL}/geo`, lastModified: STATIC_LAST_MODIFIED.geo, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/geo/alexa-for-shopping`, lastModified: STATIC_LAST_MODIFIED.geoAlexaForShopping, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${SITE_URL}/geo/walmart-sparky`, lastModified: STATIC_LAST_MODIFIED.geoWalmartSparky, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${SITE_URL}/aeo`, lastModified: STATIC_LAST_MODIFIED.aeo, changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  // Dynamic blog pages (still from Supabase)
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const { data: posts } = await supabase.from('blog_posts').select('slug, published_at, updated_at').eq('status', 'published')
    blogPages = (posts || []).map((p: { slug: string; published_at: string; updated_at?: string }) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.updated_at || p.published_at),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // If Supabase is unavailable, skip blog pages in sitemap
  }

  return [...staticPages, ...blogPages]
}
