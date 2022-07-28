import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@intlify/nuxt3'
  ],
  intlify: {
    localeDir: 'lang',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en'
    }
  }
})
