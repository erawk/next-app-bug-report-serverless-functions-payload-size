/** @type {import("next").NextConfig} */
module.exports = {
  experimental: {
    swcPlugins: [['next-superjson-plugin', {}]], // Use SuperJSON in getStaticProps via SWC
  },
  reactStrictMode: true,
}
