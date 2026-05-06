/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // appDir is enabled by default in newer Next.js versions
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com']
  }
}

module.exports = nextConfig
