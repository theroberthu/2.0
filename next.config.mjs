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
        source: '/contact',
        destination: '/free-strategy-session',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
