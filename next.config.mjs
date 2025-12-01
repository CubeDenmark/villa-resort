/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // output: 'export',
  // // for github pages (github static hosting)
  // basePath: '/villa-resort',
  // assetPrefix: '/villa-resort/',
}

export default nextConfig
