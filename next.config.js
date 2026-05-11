/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['www.themoviedb.org'],
  },
  publicRuntimeConfig: {
    IPIFY_API_KEY: process.env.NEXT_PUBLIC_IPIFY_API_KEY || 'at_6L6NdauxsZ2DOZhAoqSEP4i9Uar19',
  },
  experimental: { 
    images: { allowFutureImage: true }
  }
}

module.exports = nextConfig
