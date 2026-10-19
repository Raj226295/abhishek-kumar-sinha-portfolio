
/** @type {import('next').NextConfig} */
const { basePath } = require("./lib/assetUrl");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // GitHub Pages static hosting
  output: "export",

  // Empty locally; repository subpath on the production GitHub Pages build.
  basePath,
  assetPrefix: basePath || undefined,

  // Disable Next.js image optimization
  images: {
    unoptimized: true,
  },

  // Generate trailing slash URLs
  trailingSlash: true,
};

module.exports = nextConfig;
