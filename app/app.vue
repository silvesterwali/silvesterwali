<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },

  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Silvester Wali — Freelance Web Developer'
const description = 'Passionate about crafting efficient and scalable and custom web applications. Experienced in working with diverse technologies to deliver high-quality solutions.'
const keywords = 'Silvester Wali, Freelance Web Developer, Web Developer, Full-Stack Developer, JavaScript, TypeScript, Vue.js, Nuxt.js, React, Node.js, Express.js, MongoDB, PostgreSQL, RESTful APIs, GraphQL, HTML5, CSS3, Tailwind CSS, Responsive Design, Web Applications, Software Development'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJaAf8GYdFKgouc9408sICOtlX5jf1NBTzLarQ',
  twitterImage: 'https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJaAf8GYdFKgouc9408sICOtlX5jf1NBTzLarQ',
  twitterCard: 'summary_large_image',
})


definePerson({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Silvester Wali",
  "jobTitle": "Freelance Web Developer",
  "url": "https://silvesterwali.netlify.app",  // Replace with your actual site URL
  "image": "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJaAf8GYdFKgouc9408sICOtlX5jf1NBTzLarQ",
  "description": "Passionate about crafting efficient, scalable, and custom web applications. Experienced in working with diverse technologies to deliver high-quality solutions.",
  "email": "silvesterlhwali123@gmail.com",  // Replace with your real email
  "telephone": "+6281236698015",         // Replace with your real phone (international format recommended)
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jln Taman Jimbaran XII, no.3",     // Replace
    "addressLocality": "Jimbaran",             // Replace
    "addressRegion": "Bali",       // Replace (optional)
    "postalCode": "80361",           // Replace
    "addressCountry": "ID"       // e.g., "ID", "US", etc.
  },
  "knowsAbout": [
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
    "Software Development"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Frontend Development",
          "description": "Building responsive and user-friendly web interfaces using Vue.js and Nuxt.js."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Backend Development",
          "description": "Creating robust backend solutions with PHP and Laravel to power web applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full-Stack Development",
          "description": "Delivering end-to-end web applications by combining frontend and backend expertise."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Freelance Web Development",
          "description": "Offering custom web development services tailored to client needs on a freelance basis."
        }
      }
    ]
  },
  sameAs: [
    "https://www.linkedin.com/in/silvester-wali-a54414177",
    "https://github.com/silvesterwali",
  ]
})
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="flex items-center gap-3">
          <span class="font-semibold text-lg">Silvester Wali</span>
        </NuxtLink>
      </template>

      <template #right>
        <div class="flex items-center gap-2">
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/silvester-wali-a54414177" target="_blank"
            rel="noreferrer">
            <UButton icon="i-simple-icons-linkedin" variant="ghost" size="sm" />
          </a>

          <a aria-label="GitHub" href="https://github.com/silvesterwali" target="_blank" rel="noreferrer">
            <UButton icon="i-simple-icons-github" variant="ghost" size="sm" />
          </a>

          <UColorModeButton />
        </div>
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built with Nuxt • © {{ new Date().getFullYear() }} Silvester Wali
        </p>
      </template>

      <template #right>
        <UButton to="https://github.com/silvesterwali" target="_blank" icon="i-simple-icons-github" aria-label="GitHub"
          color="neutral" variant="ghost" />
      </template>
    </UFooter>
  </UApp>
</template>
