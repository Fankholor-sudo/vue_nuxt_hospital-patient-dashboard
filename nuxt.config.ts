export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: { 'Manrope': [400, 500, 600, 700, 800] },
    display: 'swap'
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://fedskillstest.coalitiontechnologies.workers.dev',
      apiUsername: process.env.NUXT_PUBLIC_API_USERNAME || '',
      apiPassword: process.env.NUXT_PUBLIC_API_PASSWORD || ''
    }
  }
})
