// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxtjs/seo",
    "@nuxt/image",
    "@nuxtjs/html-validator",
    "nuxt-gtag",
    "nuxt-delay-hydration",
  ],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],
  site: {
    url: "https://silvesterwali.my.id",
    name: "Silvester Wali",
    description:
      "Full Stack Web Developer with 6+ years experience. Specializing in Vue.js, Nuxt.js, React, PHP, and Laravel.",
    defaultLocale: "en",
  },

  ogImage: {
    enabled: true,
    defaults: {
      width: 1200,
      height: 630,
    },
  },

  robots: {
    sitemap: "/sitemap.xml",
    blockNonSeoBots: true,
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  schemaOrg: {
    identity: {
      type: "Person",
      name: "Silvester Wali",
      url: "https://silvesterwali.my.id",
      image: "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJaAf8GYdFKgouc9408sICOtlX5jf1NBTzLarQ",
      sameAs: [
        "https://www.linkedin.com/in/silvester-wali-a54414177",
        "https://github.com/silvesterwali",
      ],
    },
  },

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",
  delayHydration: {
    debug: process.env.NODE_ENV === "development",
    mode: "mount",
  },

  gtag: {
    id: "GTM-WRNZ8CZM",
  },
  image: {
    domains: ["*", "https://dsil7wenhp.ufs.sh"],
    format: ["webp"],
  },
  sitemap: {
    zeroRuntime: true,
  },
});
