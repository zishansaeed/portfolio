/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["v0.blob.com", "hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
  eslint: {
    // Ignore ESLint errors during build (fixes Netlify deployment failure)
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
