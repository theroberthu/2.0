/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async headers() {
    return [
      {
        // Immutable hashed JS/CSS chunks from Next.js build (_next/static)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Public images, fonts, icons — long-lived but not immutable
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Favicon and touch icons
        source: '/:file(favicon.ico|apple-touch-icon.png|icon-:size.png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // ── Legacy page URL redirects ────────────────────────────────────────
      {
        source: '/about-me-robert-hu-ecommerce',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/generative-search-optimization',
        destination: '/geo',
        permanent: true,
      },
      {
        // Retired consulting lead-gen page; authority consolidated into /geo
        source: '/geo-audit',
        destination: '/geo',
        permanent: true,
      },

      // ── Dead URLs found in GA4 landing-page data (July 2026) ─────────────
      // These were pulling real inbound sessions to 404s at ~0% engagement.
      // /free-strategy-session is the retired consulting page; external links
      // (email signature, LinkedIn, old outreach) still point at it. The three
      // blog slugs predate the 2.0 rebuild and exist in neither Supabase nor
      // this repo, so each maps to its closest live equivalent, or to the blog
      // index where no equivalent exists.
      {
        source: '/free-strategy-session',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog/amazon-lens-live-ai-visual-search',
        destination: '/geo/alexa-for-shopping',
        permanent: true,
      },
      {
        source: '/blog/journey-ecom-ai',
        destination: '/blog/ai-compresses-messy-middle-ecommerce',
        permanent: true,
      },
      {
        // Generic pre-2.0 beginner content with no editorial equivalent.
        // Sending to the section index rather than an unrelated article.
        source: '/blog/how-to-start-online-business',
        destination: '/blog',
        permanent: true,
      },
      {
        // Another pre-2.0 slug with no equivalent. /blog/aistartupblog is
        // deliberately NOT redirected: it never existed here, shows a uniform
        // crawler signature, and a 404 is the correct signal for a probe.
        source: '/blog/ai-slop-quiet-drift',
        destination: '/blog',
        permanent: true,
      },
      // Retired consulting contact/booking paths. /free-strategy-session is
      // archived and non-live, so these now point to /about, the editorial
      // hub for connecting with Robert. The retired /services index also
      // redirects home.
      {
        source: '/contact',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-me',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/book',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/book-a-call',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/consultation',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/work-with-me',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },

      // ── Legacy service page slugs ────────────────────────────────────────
      // Previously these pointed at the /services/* sub-pages, which are
      // noindex consulting content. That made every legacy inbound link a
      // dead end for search and landed readers on service copy. Each now
      // resolves to the closest live editorial destination.
      {
        source: '/services/geo',
        destination: '/geo',
        permanent: true,
      },
      {
        source: '/services/listing-optimization',
        destination: '/geo',
        permanent: true,
      },
      {
        source: '/services/amazon-ppc',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/services/amazon-advertising',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/services/ai-strategy',
        destination: '/blog',
        permanent: true,
      },

      // ── Blog post slug variants and renamed posts ────────────────────────
      // v2 SVG exists but is not a separate blog post — redirect to canonical
      {
        source: '/blog/amazon-rufus-ai-shopping-sellers-v2',
        destination: '/blog/amazon-rufus-ai-shopping-sellers',
        permanent: true,
      },
      // ChatGPT checkout post was renamed — redirect old slug to current
      {
        source: '/blog/chatgpt-checkout-pullback-sellers',
        destination: '/blog/chatgpt-shopping-pullback-sellers',
        permanent: true,
      },
      {
        source: '/blog/chatgpt-checkout',
        destination: '/blog/chatgpt-shopping-pullback-sellers',
        permanent: true,
      },
      {
        source: '/blog/chatgpt-shopping',
        destination: '/blog/chatgpt-shopping-pullback-sellers',
        permanent: true,
      },
      // Common short-form guesses for other posts
      {
        source: '/blog/amazon-rufus',
        destination: '/blog/amazon-rufus-ai-shopping-sellers',
        permanent: true,
      },
      {
        source: '/blog/walmart-sparky',
        destination: '/blog/walmart-sparky-ai-ads',
        permanent: true,
      },
      {
        source: '/blog/tiktok-shop',
        destination: '/blog/tiktok-shop-revolution-2025',
        permanent: true,
      },
      {
        source: '/blog/costco',
        destination: '/blog/costco-digital-ecommerce-strategy',
        permanent: true,
      },
      {
        source: '/blog/heygen',
        destination: '/blog/heygen-review',
        permanent: true,
      },
      {
        source: '/blog/black-friday',
        destination: '/blog/black-friday-2025-online-sales',
        permanent: true,
      },
      {
        source: '/blog/amazon-openai',
        destination: '/blog/amazon-openai-partnership-sellers',
        permanent: true,
      },

      // ── Catch-all for /geo-audit legacy paths ────────────────────────────
      // Points straight at /geo. Routing via /geo-audit would create a
      // two-hop chain now that /geo-audit is itself redirected.
      {
        source: '/geo-audit/results',
        destination: '/geo',
        permanent: true,
      },

      // ── Trailing-slash normalization (Next.js handles most, belt+suspenders)
      {
        source: '/blog/',
        destination: '/blog',
        permanent: true,
      },
      {
        // Direct to / rather than via /services, which now redirects home.
        source: '/services/',
        destination: '/',
        permanent: true,
      },

      // ── Retired case studies ─────────────────────────────────────────────
      // /case-studies was archived in the 2.0 rebuild and returns 404, and the
      // trailing-slash rule redirected into that 404. Anonymized client case
      // studies have no editorial equivalent, so these resolve to /about, the
      // page that now carries the career and credibility story.
      {
        source: '/case-studies',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/case-studies/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/case-studies/:slug*',
        destination: '/about',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
