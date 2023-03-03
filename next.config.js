/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ["image/jpg", "image/png"],
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
