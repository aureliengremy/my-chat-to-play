/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPENAI_TOKEN: process.env.OPENAI_TOKEN,
   },
}

module.exports = nextConfig
