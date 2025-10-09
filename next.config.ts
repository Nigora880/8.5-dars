import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '13.60.46.66',
        port: '',
        pathname: '/file/**',
      },
    ],
  },
}

export default withNextIntl(nextConfig)
