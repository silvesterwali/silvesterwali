<script setup>
useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "author", content: "Silvester Wali" },
    { name: "theme-color", content: "#0f172a" },
  ],
  link: [
    { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    { rel: "icon", href: "/sw-logo.svg", sizes: "16x16", type: "image/svg+xml" },
    { rel: "icon", href: "/sw-logo.svg", sizes: "32x32", type: "image/svg+xml" },
    { rel: "apple-touch-icon", href: "/sw-logo.svg" },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

const siteUrl = "https://silvesterwali.my.id";
const title = "Freelance Web Developer Bali, Indonesia";
const description =
  "Full Stack Web Developer with 6+ years of experience crafting efficient, scalable, and custom web applications. Specializing in Vue.js, Nuxt.js, React, PHP, and Laravel. Based in Jimbaran, Bali serving clients across Indonesia including Bali, Jakarta, Surabaya, and Nusa Dua.";
const keywords =
  "Silvester Wali, Freelance Web Developer Bali, Full Stack Developer Indonesia, Web Developer Jimbaran, Web Developer Nusa Dua, JavaScript Developer, TypeScript Developer, Vue.js Developer Bali, Nuxt.js Developer, React Developer, PHP Developer, Laravel Developer, PostgreSQL, MongoDB, RESTful APIs, GraphQL, Tailwind CSS, Web Applications, Remote Developer, Indonesia, Bali, Jimbaran, Nusa Dua, Seminyak, Canggu, Ubud, Jakarta, Surabaya, Freelance Developer Indonesia, E-commerce Developer, Hotel Booking Developer, Tourism Website Developer";

useSeoMeta({
  title,
  description,
  keywords,
  author: "Silvester Wali",
  ogType: "website",
  ogSiteName: "Silvester Wali",
  ogTitle: title,
  ogDescription: description,
  ogUrl: siteUrl,
  ogLocale: "en_US",
  ogLogo: "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJZ7fynTWLxoeDYVtBpwWXE1MTnKyd37mbzJjR",
  ogImage: "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJaAf8GYdFKgouc9408sICOtlX5jf1NBTzLarQ",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "Silvester Wali - Full Stack Web Developer Bali",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJaAf8GYdFKgouc9408sISOtlX5jf1NBTzLarQ",
  twitterImageAlt: "Silvester Wali - Full Stack Web Developer Bali",
  twitterCard: "summary_large_image",
  twitterSite: "@silvesterwali",
  twitterCreator: "@silvesterwali",
  geoRegion: "ID-BA",
  geoPlaceName: "Bali, Indonesia",
  geoPosition: "-8.3405;115.0920",
});

definePerson({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Silvester Wali",
  jobTitle: "Freelance Web Developer",
  url: "https://silvesterwali.my.id", // Replace with your actual site URL
  image: "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJaAf8GYdFKgouc9408sICOtlX5jf1NBTzLarQ",
  description:
    "Passionate about crafting efficient, scalable, and custom web applications. Experienced in working with diverse technologies to deliver high-quality solutions.",
  email: "silvesterlhwali123@gmail.com", // Replace with your real email
  telephone: "+6281236698015", // Replace with your real phone (international format recommended)
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jln Taman Jimbaran XII, no.3", // Replace
    addressLocality: "Jimbaran", // Replace
    addressRegion: "Bali", // Replace (optional)
    postalCode: "80361", // Replace
    addressCountry: "ID", // e.g., "ID", "US", etc.
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.778981809425803,
    longitude: 115.1922643434912,
  },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "Vue.js",
    "Nuxt.js",
    "React",
    "Node.js",
    "Express.js",
    "PHP",
    "Laravel",
    "MongoDB",
    "PostgreSQL",
    "RESTful APIs",
    "GraphQL",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
    "Web Applications",
    "Software Development",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Frontend Development",
          description:
            "Building responsive and user-friendly web interfaces using Vue.js and Nuxt.js.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backend Development",
          description:
            "Creating robust backend solutions with PHP and Laravel to power web applications.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full-Stack Development",
          description:
            "Delivering end-to-end web applications by combining frontend and backend expertise.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Freelance Web Development",
          description:
            "Offering custom web development services tailored to client needs on a freelance basis.",
        },
      },
    ],
  },
  sameAs: [
    "https://www.linkedin.com/in/silvester-wali-a54414177",
    "https://github.com/silvesterwali",
  ],
});

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <UApp>
    <UHeader class="print:hidden">
      <template #left>
        <NuxtLink to="/" class="flex items-center gap-3 text-black dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 150 36"
            class="h-10"
          >
            <path
              d="m18.1 22.3c1.9-0.6 3.8-1.1 4.3-1.1 0.6 0 0.8 1.1 0.3 1.3-0.6 0.2-1.9 0.4-3.8 0.9 0.2 0.5 0.3 1 0.3 1.3-0.1 5.1-6.5 9.5-12.3 10.8-3.2 0.6-5.5 0-5.3-2.9 0.2-2.5 5.5-6 14.1-9.3h-0.1c0.8-0.3 0.5-0.5 0.4-0.7-1.6-2.7-10-4-10.2-9.4-0.1-4.1 7.6-10.2 13.4-10.7 1.5-0.1 2.7 0.1 3.3 0.6 4 2.5-0.4 8.7-3 10.4-1.3 0.8-2.6 0-2-1.5 0.7-1.6 5.2-4.5 4.8-6.5-0.1-0.5-0.7-1-1.7-0.9-3.7 0.6-13.5 5.8-13.4 9.9 0.2 3.3 8 4.7 10.6 7.3l0.3 0.3v0.2zm-2.1 2.2c-3.6 1.1-13.6 5.5-13.1 8.2 0.9 1.6 5.6 0 8.1-1.3 2.7-1.6 5.4-4.1 5.1-6.9h-0.1z"
            />
            <path
              d="m25.1 20.7c-1.1 2.2-3.1 5.7-2.6 6.2 1.1 1.3 5.5-3.3 6.1-4.1 0.7-0.7 1.4 0 1.1 0.8-1.1 2.2-4.9 5.7-7.1 5.3-2.7-0.5-2.2-3.5 0-8.5 1-2.5 3.5-1.7 2.3 0.3h0.2zm-0.6-4.2c0-1 1-2.7 2.2-2.7 0.7 0 1.3 0.5 1.3 1.5 0 0.9-1 2.3-1.9 2.5-0.9 0-1.6-0.5-1.6-1.3z"
            />
            <path
              d="m30.7 22.7c-0.6 1.2-1.3 4.6 0 4.6 2.4 0 4.8-3.4 6.5-5 0.7-0.4 1 0.6 0.4 1.3-1.6 1.6-4.1 5.4-7.2 5.3-4.4 0-2.3-8.2 1.1-15.2 1.2-2.6 3.7-6.8 5.6-8.4 2.3-1.7 3.5-0.3 3.2 2.2-1.1 4.4-4.8 10.3-9.6 15.2zm1-4c2.9-3.6 6.3-9.3 6.7-12.1-1-0.2-5.2 7.3-6.7 12.1z"
            />
            <path
              d="m38.5 26.3c1.2-0.8 3-2.7 5.4-6.8 0.8-1.3 1.3-2 2.2-2 0.4 0.1 0.8 0.5 0.6 1.1-0.7 2-6.2 9.5-8.3 10.1-1.9 0.5-2.4-2-1.8-5.7 0.3-1.4 0.5-1.6 0.3-2.9-0.2-1 1-2.6 2.2-1.4 1.1 1.1 0 2-0.2 4.5-0.4 1.7-0.4 3.1-0.4 3.1z"
            />
            <path
              d="m46.9 25.3c-0.5 2.2 1.5 2.4 4.2 1 2.1-1.2 4-3.3 4.8-4.5 0.6-0.8 1.2 0.5 0.7 1.4-1 2-4.5 5.4-8.2 6-4.9 0.6-5.4-4.3-1.9-8.1 4.2-4.6 8.2-3.9 6.8-0.6-0.8 1.8-3.2 3.9-6.4 4.8zm0.7-1.7c1.8-0.7 3.1-1.9 3.8-3 0.7-1.2-1.3-1.4-3.5 2.8l-0.3 0.2z"
            />
            <path
              d="m56.4 22.1c-0.8-3 3.3-5.1 4.3-4.8 0.7 0.2 1 1.1 0.3 1.4-1.4 0.7-2.8 1.3-2.4 2.4l1 1.7c0.3 0.6 0.5 1.1 0.6 1.3l3.3-1.6c0.9-0.4 1.5 0.2 1 0.7l-4.2 2.3c-0.6 4.5-4.6 6.8-7.3 6.2-1-0.2-2.6-1.7 0.9-4.5l3.5-2.4c-0.2-0.7-0.7-1.2-1-1.9v-0.8zm1.1 4.2c-1.6 0.8-3.9 3.1-3.3 3.5 0.5 0.2 3-1.4 3.4-3.4l-0.1-0.1z"
            />
            <path
              d="m66.1 15.5-2.1 0.4c-1.3 0-0.9-2.4 1.2-2.3h1.9c1.8-3.6 3.3-7 4.6-6.9 0.9-0.1 1.7 0.9 1 1.8-1.1 1.7-2.2 3.5-2.7 5l4.1-0.3c1.4 0 1.5 1.4 0 1.6-1.7 0.1-3.6 0.5-5.1 0.6-1.5 2.8-5.1 12.3-5 14.5 0 0.7 0.2 1.5 1.2 1.7 0.5 0.5-1.2 1.3-2.5 0.3-1.1-0.8-1.2-2.7-0.6-5 1.1-4.2 3.8-10 4-11.4z"
            />
            <path
              d="m69.7 25.3c-0.5 2.2 1.5 2 4 0.7 1.9-1.1 3.4-3 4.4-4.4 0.6-0.6 1.3 0.5 0.6 1.8-1.2 2-4.1 5.3-8.1 5.5-4 0-4.1-4.3-1.1-7.9 4.1-4.9 7.9-4 6.4-0.6-0.9 1.9-3 4-6.2 4.8v0.1zm0.8-1.9c1.7-0.5 2.9-1.8 3.5-2.7 0.6-1.2-1.4-1.3-3.4 2.7h-0.1z"
            />
            <path
              d="m78.9 22.7c-2.2-1.5-0.5-5.1 1.2-6.1 1-0.6 2.3 0 1 2.5l-0.7 1.3c1.2-0.6 2.7 0 2.2 1.5-1 1.7-3 4.7-2 5 1.5 0.2 4.5-1.5 6.3-4.6 0.6-0.7 0.8 0 0.5 0.9-1 2.7-4.5 5.7-6.9 5.6-2.9 0-2.8-2.7-1-6.1h-0.8 0.2z"
            />
            <path
              d="m96.9 29.7c0.5 0 2.7-2.8 3.7-4.4 3.4-5.6 8-12.7 10-15.4 0.8-1.3 1.8-1.2 1.9 0.7-0.1 1.6-3.4 10.7-3.6 15.7 0 4.6 1.2 4.5 1.6 4.1 4.1-2.8 10.1-15.8 11.5-26 0.2-2 0.1-3.3-0.4-3.7 0.1-0.7 1.9-1.1 2.3 1.2 0.6 3.5-3.3 25-10.8 29.8-3.1 1.9-6.1 0.2-6.1-5-0.1-2.8 1.4-8.8 1.6-11-2.2 2.7-7.6 13.7-11 15.8-4 2.5-5.1-1.8-2.1-10.6 1.4-4.3 4.6-11.2 6.9-14.8 1.1-1.7 3.1-1.4 2.3 0.5-1.3 3.4-7.8 18.8-7.8 21.6v1.5z"
            />
            <path
              d="m126.4 24.6c-1.7 2-3.8 4-5 4-3.3 0-3-5.4 1.6-9 1.9-1.4 3.6-1.7 5.6-0.6 0.9-1 2.5 0 1.9 1.1-1.4 2.9-2.9 6.8-1.4 6.3 1.6-0.5 3.3-2.5 5-4.7 0.5-0.3 0.9 0.6 0.5 1.5-1 1.7-4 4.9-5.9 5-1.3 0.2-2.6-0.9-2.5-3.6h0.2zm1.6-4.5c-2.8-1.1-6.1 4.3-6.3 6.3 0.4 1.7 4.8-4.7 6.3-6.3z"
            />
            <path
              d="m136.1 22.7c-0.6 1.2-1 4.4 0.3 4.3 1.7-0.1 3.5-2.1 5.5-4.9 0.6-0.7 1.2 0.2 1 1.1-1.3 2.4-3.5 5.7-6.4 5.6-3.4 0-3.4-5.9-1-12.4 1.2-3.3 4.4-9.7 6.6-11.4 2-1.4 3.1 0 2.6 2.5-1 4.6-5.1 11-8.6 15.2zm1.4-4.2c2.4-3 5.4-8.4 5.6-11.6-1.1 0.5-4.2 6.6-5.6 11.6z"
            />
            <path
              d="m144.6 20.4c-1 2.5-3 6.2-2.1 6.6 2.1 0.3 4.2-3.1 5.5-4.7 0.6-0.7 1.4 0.2 0.7 1.8-0.8 1.8-4.1 4.9-6.1 5-3.1 0.4-3.1-4.2-0.1-9.4 0.9-1.7 2.6-0.7 2.1 0.7zm-0.1-4.3c-0.1-0.8 0.6-2.5 1.6-2.5 0.8 0 1.3 0.8 1.3 1.3 0 1.2-1.3 2.5-1.8 2.5s-1.1-0.9-1.1-1.3z"
            />
          </svg>
        </NuxtLink>
      </template>

      <template #right>
        <div class="flex items-center gap-2">
          <UButton
            icon="i-simple-icons-linkedin"
            variant="ghost"
            size="sm"
            aria-label="linkedin-link"
            href="https://www.linkedin.com/in/silvester-wali-a54414177"
            target="_blank"
            aria-describedby="linkedin link"
          />

          <UButton
            icon="i-simple-icons-github"
            variant="ghost"
            size="sm"
            aria-label="github-link"
            href="https://github.com/silvesterwali"
            target="_blank"
            aria-describedby="github link"
          />

          <UButton
            to="/print-resume"
            icon="i-heroicons-solid-printer"
            variant="ghost"
            size="sm"
            aria-label="print-resume"
            aria-describedby="print resume"
          />

          <UColorModeButton />
        </div>
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter class="print:hidden">
      <template #left>
        <p class="text-sm text-muted">Built with Nuxt • © {{ currentYear }} Silvester Wali</p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/silvesterwali"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
