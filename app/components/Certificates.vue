<template>
  <UPageGrid>
    <UPageCard
      v-for="item in items"
      :key="item.title"
      :to="item.certificateUrl"
      variant="outline"
      spotlight
      spotlight-color="primary"
      target="_blank"
      :title="item.title"
      reverse
    >
      <template #description>
        <div class="flex flex-col gap-4">
          <NuxtImg
            :src="item.imageUrl"
            :alt="item.title"
            class="w-full h-48 object-cover rounded"
          />

          <USeparator />
          <div>
            Issued by {{ item.issuer }} on {{ item.issueDate }}
          </div>
        </div>
      </template>
    </UPageCard>
  </UPageGrid>
</template>

<script setup lang="ts">
const { items } = useCertificates()
</script>

<style scoped></style>
