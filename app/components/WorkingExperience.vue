<template>
    <UPageGrid>
        <UPageCard v-for="item in items" :key="item.companyName" :to="item.companyWebsite" variant="outline" spotlight
            spotlight-color="primary" target="_blank" :title="item.position">

            <template #header>
                <UUser :src="item.companyLogoUrl" :name="item.companyName"
                    :description="[item.startDate, item.endDate ?? 'Present'].join(' - ')" size="lg" :avatar="{
                        src: item.companyLogoUrl,
                        icon: 'i-lucide-image'
                    }" />
            </template>


            <template #description>
                <div class="flex flex-col gap-4">
                    <ul class=" list-disc list-inside">
                        <li v-for="responsibility in item.responsibilities" :key="responsibility">{{ responsibility }}
                        </li>
                    </ul>
                    <USeparator />

                    <div>Tech Stack</div>
                    <div class="flex flex-wrap">
                        <UBadge v-for="stack in item.stack" :key="stack" :label="stack" class="mr-2 mb-2"
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

const { items } = useWorkingExperience()

</script>

<style scoped></style>