/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: 's/files/1/0725/1859/8974/products/**',
      },
    ],
  },
}

module.exports = nextConfig
