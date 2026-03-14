/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
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
