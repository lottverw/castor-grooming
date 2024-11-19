export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss'], 
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook', '@nuxtjs/tailwindcss']
})