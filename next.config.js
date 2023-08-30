/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ["res.cloudinary.com"]
  },
  staticPageGenerationTimeout: 100
}

module.exports = nextConfig
