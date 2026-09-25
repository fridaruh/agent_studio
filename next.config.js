/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep local preview output separate from production builds.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
}

module.exports = nextConfig
