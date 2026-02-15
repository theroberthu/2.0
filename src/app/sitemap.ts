import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'
import { CASE_STUDIES } from '@/lib/case-studies-data'

const SITE_URL = process.env.SITE_URL || 'https://theroberthu.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${SITE_URL}/free-strategy-session`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
  ]

  // Case study pages
  const caseStudyPages = CASE_STUDIES.map((cs) => ({
    url: `${SITE_URL}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic service pages
  const { data: services } = await supabase.from('services').select('slug')
  const servicePages = (services || []).map((s: { slug: string }) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic blog pages
  const { data: posts } = await supabase.from('blog_posts').select('slug, published_at').eq('published', true)
  const blogPages = (posts || []).map((p: { slug: string; published_at: string }) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.published_at),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...caseStudyPages, ...servicePages, ...blogPages]
}
