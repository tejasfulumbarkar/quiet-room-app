/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  // Add empty turbopack config to silence the warning
  turbopack: {},
}

export default nextConfig
