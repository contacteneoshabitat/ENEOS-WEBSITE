/** @type {import('next').NextConfig} */
const nextConfig = {
  // Let Vercel and Netlify's Next.js adapters manage the server output.
  // Standalone output is only needed for a self-hosted Node container.
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
