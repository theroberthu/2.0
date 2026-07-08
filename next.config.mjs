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
      {
        source: '/services/amazon-ppc',
        destination: '/services/digital-marketing-strategy',
        permanent: true,
      },
      {
        source: '/services/amazon-advertising',
        destination: '/services/digital-marketing-strategy',
        permanent: true,
      },
      {
        source: '/services/geo',
        destination: '/services/product-listing-optimization',
        permanent: true,
      },
      {
        source: '/services/listing-optimization',
        destination: '/services/product-listing-optimization',
        permanent: true,
      },
      {
        source: '/services/ai-strategy',
        destination: '/services/digital-transformation',
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
      {
        source: '/geo-audit/results',
        destination: '/geo-audit',
        permanent: true,
      },

      // ── Trailing-slash normalization (Next.js handles most, belt+suspenders)
      {
        source: '/blog/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/services/',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/case-studies/',
        destination: '/case-studies',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
