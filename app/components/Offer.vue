<template>
  <UPageGrid>
    <UPageCard
      v-for="item in items"
      :key="item.title"
      spotlight
      spotlight-color="primary"
      target="_blank"
      :title="item.title"
      :description="item.description"
    />
  </UPageGrid>
</template>

<script setup lang="ts">
const { items } = useOffers()
</script>

<style scoped></style>
