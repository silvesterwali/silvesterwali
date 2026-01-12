<template>
  <div>
    <UPageHero
      :title="title"
      :description="description"
      :headline="subtitle"
      orientation="horizontal"
    >
      <NuxtPicture
        src="https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJZkEcoXWLxoeDYVtBpwWXE1MTnKyd37mbzJjR"
        alt="Silvester Wali"
        sizes="sm:100vw md:900px lg:1200px 2xl:1600px"
        class="rounded-lg shadow-2xl ring ring-default"
        fetchpriority="high"
        loading="lazy"
        :img-attrs="{ alt: 'Silvester Wali', class: 'hero' }"
        densities="1,2"
        :widths="[320, 640, 960, 1200, 1600]"
        format="webp,jpeg"
        placeholder="blur"
      />
    </UPageHero>
  </div>
</template>

<script setup lang="ts">
const { title, subtitle, description } = useHero()
</script>

<style scoped></style>
