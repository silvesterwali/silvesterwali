<template>
  <section class="flex flex-col gap-8">
    <div class="flex flex-col space-y-0.5">
      <h3 class="font-semibold text-xl lg:text-2xl">
        {{ title }}
      </h3>
      <p
        v-if="subTitle"
        class="text-muted text-sm"
      >
        {{ subTitle }}
      </p>
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subTitle?: string
}>()
</script>

<style scoped></style>
