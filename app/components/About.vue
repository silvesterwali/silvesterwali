<template>
    <div>
        <UPageSection title="About Me" :description="bio" :links="features" />

        <UMarquee pause-on-hover :overlay="false" :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }">
            <UPageCard spotlight spotlight-color="primary" v-for="skill in skills" :key="skill" :title="skill" />
        </UMarquee>
    </div>
</template>

<script setup lang="ts">

const { bio } = useAbout();
const { linkedin, github, phone, email } = useContact()
const { skills } = useSkills()

const features = [
    {
        label: 'LinkedIn',
        trailingIcon: 'i-lucide-linkedin',
        to: linkedin.value,
    },
    {
        label: 'GitHub',
        trailingIcon: 'i-lucide-github',
        to: github.value,
    },
    {
        label: 'Phone',
        trailingIcon: 'i-lucide-phone',
        to: `tel:${phone.value}`,
    },
    {
        label: 'Email',
        trailingIcon: 'i-lucide-mail',
        to: `mailto:${email.value}`,
    }
]

</script>

<style scoped></style>