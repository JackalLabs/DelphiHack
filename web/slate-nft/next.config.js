// @ts-check

const packageJson = require('./package.json')

const LOCALHOST_URL = `http://localhost:${process.env.PORT || 3000}`

/**
 * @type {import("next").NextConfig}
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const nextConfig = {
  env: {
    APP_VERSION: packageJson.version,
    NEXT_PUBLIC_WEBSITE_URL:
      process.env.NODE_ENV === 'development' ? LOCALHOST_URL : "https://themarstonconnell.github.io/DelphiHack/",
  },
  reactStrictMode: true,
  trailingSlash: true,
  webpack(config, { dev, webpack }) {
    // svgr integration
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    // predefined constants
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: dev,
        __PROD__: !dev,
      }),
    )
    return config
  },
  async redirects() {
    return [

    ]
  },
}

module.exports = nextConfig
