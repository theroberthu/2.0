export const SITE_URL = process.env.SITE_URL || 'https://theroberthu.com'
export const SITE_NAME = 'Robert Hu'
export const SITE_TAGLINE = 'E-commerce Strategist'

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/throberthu',
  x: 'https://x.com/throberthu',
  youtube: 'https://www.youtube.com/@throberthu',
  instagram: 'https://www.instagram.com/throberthu',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'GEO', href: '/geo' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export const REVENUE_RANGES = [
  'Under $100K',
  '$100K-$500K',
  '$500K-$1M',
  '$1M-$2M',
  '$2M+',
]

export const BLOG_CATEGORIES = [
  'E-commerce Strategy',
  'GEO & SEO',
  'Digital Marketing',
  'Digital Transformation',
  'The Messy Middle',
] as const

export const POSTS_PER_PAGE = 10

export const AUTHOR_INFO = {
  name: 'Robert Hu',
  url: 'https://theroberthu.com/about',
  jobTitle: 'E-commerce Strategist & Digital Transformation Consultant',
  sameAs: [
    'https://www.linkedin.com/in/throberthu',
    'https://x.com/throberthu',
  ],
}
