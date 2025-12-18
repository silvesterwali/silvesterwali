<template>
  <div class="border border-border rounded-lg overflow-hidden bg-surface shadow-sm p-3 flex gap-3 items-center">
    <NuxtImg
      :src="image"
      alt="certificate"
      class="w-20 h-14 object-cover rounded"
    />
    <div>
      <div class="font-semibold">
        {{ title }}
      </div>
      <div class="text-sm text-muted mt-1">
        {{ issuer }} — <span class="text-xs">Issued {{ date }}</span>
      </div>
      <a
        v-if="link"
        :href="link"
        target="_blank"
        rel="noreferrer"
        class="mt-2 u-link inline-block"
      >View</a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  issuer: { type: String, required: false },
  date: { type: String, required: false },
  link: { type: String, required: false }
})
</script>
