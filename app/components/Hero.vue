<template>
  <div itemscope itemtype="https://schema.org/Person">
    <UPageHero
      :title="title"
      :description="description"
      :headline="subtitle"
      orientation="horizontal"
      :ui="{ title: 'text-3xl sm:text-4xl lg:text-5xl' }"
    >
      <template #title>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold" itemprop="name">
          {{ title }}
        </h1>
      </template>
      <NuxtPicture
        src="https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJZkEcoXWLxoeDYVtBpwWXE1MTnKyd37mbzJjR"
        alt="Silvester Wali - Full Stack Web Developer"
        sizes="sm:100vw md:900px lg:1200px 2xl:1600px"
        class="rounded-lg shadow-2xl ring ring-default"
        fetchpriority="high"
        loading="eager"
        :img-attrs="{
          alt: 'Silvester Wali - Full Stack Web Developer',
          class: 'hero',
          itemprop: 'image',
        }"
        densities="1,2"
        :widths="[320, 640, 960, 1200, 1600]"
        format="webp,jpeg"
        placeholder="blur"
      />
    </UPageHero>
  </div>
</template>

<script setup lang="ts">
const { title, subtitle, description } = useHero();
</script>

<style scoped></style>
