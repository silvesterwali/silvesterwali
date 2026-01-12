// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxtjs/html-validator',
    'nuxt-gtag',
    'nuxt-delay-hydration'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://silvesterwali.my.id',
    name: 'Silvester Wali'
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',
  delayHydration: {
    debug: process.env.NODE_ENV === 'development',
    mode: 'mount'
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  gtag: {
    id: 'GTM-WRNZ8CZM'
  },
  image: {
    domains: ['*', 'https://dsil7wenhp.ufs.sh'],
    format: ['webp']
  },
  sitemap: {
    zeroRuntime: true
  }
})
