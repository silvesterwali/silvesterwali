<template>
    <div>
        <UPageHero :title="title" :description="description" :headline="subtitle" orientation="horizontal">
            <NuxtImg src="https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJZkEcoXWLxoeDYVtBpwWXE1MTnKyd37mbzJjR"
                alt="Silvester Wali" class="rounded-lg shadow-2xl ring ring-default" fetchpriority="high"
                loading="lazy" />
        </UPageHero>
    </div>
</template>

<script setup lang="ts">

const { title, subtitle, description } = useHero();

</script>

<style scoped></style>