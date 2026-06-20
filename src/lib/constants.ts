export const SITE_URL = process.env.SITE_URL || 'https://theroberthu.com'
export const SITE_NAME = 'Robert Hu'
export const SITE_TAGLINE = 'E-commerce Strategist'

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/theroberthu',
  x: 'https://x.com/theroberthu',
  youtube: 'https://www.youtube.com/@theroberthu',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'AI Search (GEO)', href: '/geo' },
  { label: 'AI Agents (AEO)', href: '/aeo' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export const REVENUE_RANGES = [
  'Under $500K',
  '$500K-$1M',
  '$1M-$2M',
  '$2M-$5M',
  '$5M+',
]

export const BLOG_CATEGORIES = [
  'E-commerce Strategy',
  'GEO & SEO',
  'Digital Marketing',
  'Digital Transformation',
  'The Messy Middle',
] as const

export const POSTS_PER_PAGE = 10

/** Turn a category name into a URL-safe slug: "GEO & SEO" → "geo-seo" */
export function slugifyCategory(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/** Reverse lookup: slug → display name */
export function categoryFromSlug(slug: string): string | undefined {
  return BLOG_CATEGORIES.find((c) => slugifyCategory(c) === slug) as string | undefined
}

export const AUTHOR_INFO = {
  name: 'Robert Hu',
  url: 'https://theroberthu.com/about',
  jobTitle: 'E-commerce Strategist & Digital Transformation Consultant',
  sameAs: [
    'https://www.linkedin.com/in/theroberthu',
    'https://x.com/theroberthu',
  ],
}
