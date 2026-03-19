<script setup lang="ts">
useSeoMeta({
  title: "Silvester Wali - Full Stack Web Developer",
  description:
    "Full Stack Developer with 6+ years of experience building scalable web applications. Vue.js, Nuxt.js, React, PHP, Laravel expert.",
  ogTitle: "Silvester Wali - Full Stack Web Developer",
  ogDescription:
    "Full Stack Developer specializing in Vue.js, Nuxt.js, React, PHP, and Laravel. Available for freelance projects.",
});

defineOgImageComponent("NuxtSeo", {
  title: "Silvester Wali",
  description: "Full Stack Web Developer",
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
