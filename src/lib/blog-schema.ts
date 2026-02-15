import { BlogPost } from './types'
import { SITE_URL, AUTHOR_INFO } from './constants'

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
    image: post.featured_image
      ? `${SITE_URL}${post.featured_image}`
      : `${SITE_URL}/images/theroberthulogo.png`,
    articleSection: post.category || 'E-commerce Strategy',
    keywords: post.keywords || [],
  }
}

export function generateBreadcrumbSchema(post: BlogPost) {
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
        name: 'Blog',
        item: `${SITE_URL}/blog`,
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
  if (!post.has_faq_schema || !post.faq_data || post.faq_data.length === 0) {
    return null
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq_data.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}
