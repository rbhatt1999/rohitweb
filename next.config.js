/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/categories',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/archive',
        destination: '/blogs',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
