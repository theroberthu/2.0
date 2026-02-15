/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ]
  },
};

export default nextConfig;
