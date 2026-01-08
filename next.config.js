/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config, options) => {
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
