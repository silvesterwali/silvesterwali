<template>
    <div class="border border-border rounded-lg overflow-hidden shadow-sm bg-surface">
        <img :src="image" alt="project" class="w-full h-44 object-cover" />
        <div class="p-4">
            <div class="font-semibold">{{ title }}</div>
            <p class="text-sm text-muted mt-1">{{ description }}</p>
            <div class="mt-3 flex gap-2 items-center">
                <a v-if="link" :href="link" target="_blank" rel="noreferrer" class="u-button u-button--outline">View</a>
                <span class="text-xs text-muted">{{ tech }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tech: { type: String, required: false },
    link: { type: String, required: false }
})
</script>
