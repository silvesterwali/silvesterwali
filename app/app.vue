<script setup>
useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "author", content: "Silvester Wali" },
    { name: "theme-color", content: "#0f172a" },
  ],
  link: [
    { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    { rel: "icon", href: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { rel: "icon", href: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

const siteUrl = "https://silvesterwali.my.id";
const title = "Silvester Wali - Freelance Web Developer";
const description =
  "Full Stack Web Developer with 6+ years of experience crafting efficient, scalable, and custom web applications using Vue.js, Nuxt.js, React, PHP, and Laravel.";
const keywords =
  "Silvester Wali, Freelance Web Developer, Full-Stack Developer, JavaScript, TypeScript, Vue.js, Nuxt.js, React, Next.js, Node.js, PHP, Laravel, PostgreSQL, MongoDB, RESTful APIs, Tailwind CSS, Web Applications, Remote Developer, Indonesia";

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
  ogImageAlt: "Silvester Wali - Full Stack Web Developer",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJaAf8GYdFKgouc9408sICOtlX5jf1NBTzLarQ",
  twitterImageAlt: "Silvester Wali - Full Stack Web Developer",
  twitterCard: "summary_large_image",
  twitterSite: "@silvesterwali",
  twitterCreator: "@silvesterwali",
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
        <NuxtLink to="/" class="flex items-center gap-3">
          <span class="font-semibold text-lg">Silvester Wali</span>
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
