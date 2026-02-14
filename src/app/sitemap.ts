import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

const SITE_URL = process.env.SITE_URL || 'https://theroberthu.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${SITE_URL}/case-studies`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${SITE_URL}/free-strategy-session`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
  ]

  const { data: services } = await supabase.from('services').select('slug, created_at')
  const servicePages = (services || []).map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(s.created_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const { data: posts } = await supabase
    .from('blog_posts')
    .select('slug, published_at')
    .eq('published', true)
  const blogPages = (posts || []).map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.published_at ? new Date(p.published_at) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const { data: studies } = await supabase
    .from('case_studies')
    .select('slug, published_at')
    .eq('published', true)
  const caseStudyPages = (studies || []).map((s) => ({
    url: `${SITE_URL}/case-studies/${s.slug}`,
    lastModified: s.published_at ? new Date(s.published_at) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...blogPages, ...caseStudyPages]
}
