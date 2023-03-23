/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_OPENAI_TOKEN: process.env.NEXT_PUBLIC_OPENAI_TOKEN,
   },
}

module.exports = nextConfig
