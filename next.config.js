
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Disable Next.js image optimization
  images: {
    unoptimized: true,
  },

  // Generate trailing slash URLs
  trailingSlash: true,
};

module.exports = nextConfig;
