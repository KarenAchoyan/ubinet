
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'hy', 'ru'],
    defaultLocale: 'hy',
    localeDetection:false
  },
  env: {
    API_URL: "https://poels.geeklab.am/api",
    IMAGE_URL: "https://poels.geeklab.am/storage/",
  },
  unoptimized:true
}

module.exports = nextConfig
