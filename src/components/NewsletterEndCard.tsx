import TrackedLink from '@/components/TrackedLink'

const NEWSLETTER_URL = 'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232'

/**
 * Newsletter card shown at the end of a blog post. Uses the existing
 * .blog-inline-cta-card styles. An invitation to follow the research, never a
 * sales CTA.
 */
export default function NewsletterEndCard({ postSlug }: { postSlug: string }) {
  return (
    <div className="blog-inline-cta-card">
      <div className="blog-inline-cta-card-accent" />
      <p className="blog-inline-cta-card-label">Newsletter</p>
      <p className="blog-inline-cta-card-headline">Follow the research</p>
      <p className="blog-inline-cta-card-sub">
        Research notes and analysis on how AI, digital transformation, product discovery, and customer behavior are
        changing commerce.
      </p>
      <TrackedLink
        href={NEWSLETTER_URL}
        external
        event="newsletter_click"
        params={{ post_slug: postSlug, location: 'blog_post_end' }}
        className="blog-inline-cta-card-btn"
      >
        Subscribe to Hu&apos;s Weekly Hoot
      </TrackedLink>
    </div>
  )
}
