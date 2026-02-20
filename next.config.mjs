/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
