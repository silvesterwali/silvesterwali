<script setup lang="ts">
useSeoMeta({
  title: "Full Stack Web Developer Bali - Silvester Wali",
  description:
    "Full Stack Web Developer with 6+ years of experience crafting efficient, scalable, and custom web applications. Specializing in Vue.js, Nuxt.js, React, PHP, and Laravel. Based in Jimbaran, Bali serving clients across Indonesia including Bali, Jakarta, Surabaya, and Nusa Dua.",
  ogTitle: "Full Stack Web Developer Bali,Indondia - Silvester Wali",
  ogDescription:
    "Full Stack Web Developer with 6+ years of experience crafting efficient, scalable, and custom web applications. Specializing in Vue.js, Nuxt.js, React, PHP, and Laravel. Based in Jimbaran, Bali serving clients across Indonesia including Bali, Jakarta, Surabaya, and Nusa Dua.",
});
</script>

<template>
  <UContainer>
    <article class="space-y-12" itemscope itemtype="https://schema.org/WebPage">
      <!-- Hero -->
      <header>
        <ClientOnly>
          <Hero />
        </ClientOnly>
      </header>
      <section>
        <About />
      </section>

      <!-- offer -->
      <SectionTitle title="What I Offer" sub-title="Services I provide to my clients">
        <Offer />
      </SectionTitle>

      <!-- Experience -->
      <SectionTitle title="Working Experiences" sub-title="List of working experience">
        <WorkingExperience />
      </SectionTitle>

      <!-- Projects -->

      <SectionTitle title="Projects" sub-title="A few personal and demo projects">
        <Projects />
      </SectionTitle>

      <!-- Certificates -->
      <SectionTitle title="Certificates" sub-title="Selected certifications and training">
        <Certificates />
      </SectionTitle>
    </article>
  </UContainer>
</template>
