<template>
    <UPageGrid>
        <UPageCard v-for="item in items" :key="item.title" :to="item.projectUrl" variant="outline" spotlight
            spotlight-color="primary" target="_blank" :title="item.title" reverse>
            <template #description>
                <div class="flex flex-col gap-4">
                    <img :src="item.imageUrl" :alt="item.title" class="w-full h-48 object-cover rounded" />
                    <div>
                        {{ item.description }}
                    </div>
                    <USeparator />

                    <div>Tech Stack</div>
                    <div class="flex flex-wrap">
                        <UBadge v-for="stack in item.technologies" :key="stack" :label="stack" class="mr-2 mb-2"
                            variant="outline" />
                    </div>
                    <USeparator />

                    <div>Scope</div>
                    <div class="flex flex-wrap">
                        <UBadge v-for="scope in item.scope" :key="scope" :label="scope" class="mr-2 mb-2"
                            variant="outline" />
                    </div>
                </div>

            </template>
        </UPageCard>
    </UPageGrid>
</template>

<script setup lang="ts">

const { items } = useProjects()

</script>

<style scoped></style>