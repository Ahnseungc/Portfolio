/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    // scrollRestoration: true,
  },
  images: {
    domains: ["velog.velcdn.com", "user-images.githubusercontent.com"],
  },
};

module.exports = nextConfig;
