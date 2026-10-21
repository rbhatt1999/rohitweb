/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  poweredByHeader: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@locator/runtime': path.resolve(__dirname, 'src/lib/locator-runtime-stub.js'),
    };
    if (options.dev) {
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: '@locator/webpack-loader',
            options: {
              env: 'development',
            },
          },
        ],
      })
    }
    return config
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/assets/:file(.*\\.(?:jpg|jpeg|png|webp|svg|gif|ico))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000' },
        ],
      },
    ]
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
