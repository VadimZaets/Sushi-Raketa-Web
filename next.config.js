/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = nextConfig
module.exports = {
  images: {
    deviceSizes: [320, 768, 992, 1140],
  },
  nextConfig,
};
