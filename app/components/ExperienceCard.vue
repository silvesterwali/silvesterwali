<template>
  <div class="p-4 bg-surface rounded-lg shadow-sm border border-border">
    <div class="flex items-center gap-3">
      <NuxtImg
        :src="logo"
        alt="company logo"
        class="w-12 h-12 object-cover rounded"
      />
      <div>
        <div class="font-semibold">
          {{ role }}
        </div>
        <div class="text-sm text-muted">
          {{ company }} — <span class="font-medium">{{ dates }}</span>
        </div>
      </div>
    </div>

    <p class="mt-3 text-sm">
      {{ details }}
    </p>
    <div
      v-if="link"
      class="mt-3"
    >
      <a
        :href="link"
        target="_blank"
        rel="noreferrer"
        class="u-link"
      >Visit</a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  logo: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  dates: { type: String, required: true },
  details: { type: String, required: true },
  link: { type: String, required: false }
})
</script>
