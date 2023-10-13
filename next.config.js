/** @type {import('next').NextConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});
const nextConfig = {
  reactStrictMode: true,
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
  },
};

module.exports = nextConfig;
module.exports = withNextra();
