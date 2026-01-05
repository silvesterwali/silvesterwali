// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxtjs/html-validator',
    'nuxt-gtag',
    '@vite-pwa/nuxt'
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
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: 'Silvester Wali',
      short_name: 'Silvester Wali',
      description: 'Passionate about crafting efficient and scalable and custom web applications. Experienced in working with diverse technologies to deliver high-quality solutions.',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJrjnvqFBkgjYblZQyIN5sG3famCq9uExd2OAc',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJrjnvqFBkgjYblZQyIN5sG3famCq9uExd2OAc',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: 'https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJrjnvqFBkgjYblZQyIN5sG3famCq9uExd2OAc',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJrjnvqFBkgjYblZQyIN5sG3famCq9uExd2OAc',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  sitemap: {
    zeroRuntime: true
  }
})
