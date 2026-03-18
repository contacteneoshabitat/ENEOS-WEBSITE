/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/devis-en-ligne',
        destination: '/devis',
        permanent: true, // 301 redirect
      },
    ]
  },
}

export default nextConfig
