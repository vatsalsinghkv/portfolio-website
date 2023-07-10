/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'user-images.githubusercontent.com',
      'github-production-user-asset-6210df.s3.amazonaws.com',
    ],
  },
  experimental: {
    appDir: false,
  },
};
