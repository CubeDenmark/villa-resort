/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  // for github pages (github static hosting)
  // basePath: '/villa',
  // assetPrefix: '/villa/',
}

export default nextConfig
