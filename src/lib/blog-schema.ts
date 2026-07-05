import { BlogPost } from './types'
import { SITE_URL, AUTHOR_INFO, slugifyCategory } from './constants'

export function generateArticleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description || post.excerpt || '',
    author: {
      '@type': 'Person',
      name: AUTHOR_INFO.name,
      url: AUTHOR_INFO.url,
      jobTitle: AUTHOR_INFO.jobTitle,
      sameAs: AUTHOR_INFO.sameAs,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Robert Hu',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/theroberthulogo.png`,
      },
    },
    datePublished: post.published_at || post.created_at,
    dateModified: post.updated_at || post.published_at || post.created_at,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    // Social scrapers and Google prefer raster images. SVG cards are served as
    // pre-rendered PNG via the /api/og route, matching the page's OG/Twitter meta.
    image: post.og_image
      ? post.og_image.endsWith('.svg')
        ? `${SITE_URL}/api/og/${post.slug}`
        : `${SITE_URL}${post.og_image}`
      : `${SITE_URL}/images/theroberthulogo.png`,
    articleSection: post.category || 'E-commerce Strategy',
    keywords: post.tags || [],
  }
}

export function generateBreadcrumbSchema(post: BlogPost) {
  const categoryName = post.category || 'Blog'
  const categorySlug = post.category ? slugifyCategory(post.category) : null

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoryName,
        item: categorySlug
          ? `${SITE_URL}/blog?category=${categorySlug}`
          : `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  }
}

export function generateFAQSchema(post: BlogPost) {
  const schema = post.schema_json
  if (!schema?.has_faq_schema || !schema?.faq_data || schema.faq_data.length === 0) {
    return null
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: schema.faq_data.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

export function generateVideoSchema(post: BlogPost) {
  const video = post.schema_json?.video_data
  if (!video) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate.length === 10 ? `${video.uploadDate}T12:00:00-07:00` : video.uploadDate,
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
  }
}
