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
}

export default nextConfig
