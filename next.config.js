/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'journally-kv.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'life-kit.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.valuemetrix.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'psyconnect.co.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github-production-user-asset-6210df.s3.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'buttons-animations-kv.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'getlifegard.vercel.app',
        pathname: '/**',
      },
    ],
  },
};
