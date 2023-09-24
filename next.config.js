/** @type {import('next').NextConfig} */
const nextConfig = {
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
