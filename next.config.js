/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.wine.com.br'],
  },
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}

module.exports = nextConfig
