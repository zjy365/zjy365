/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'getscholar.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
