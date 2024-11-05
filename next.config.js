/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: false,
  i18n,
  compiler: {
    styledComponents: true
  },
  images: {
    // formats: ["image/jpg", "image/png"],
    domains: ["localhost"]
  }
};

module.exports = nextConfig;
