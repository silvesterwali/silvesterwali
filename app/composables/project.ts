import type { ProjectShowcase } from "@/types/project"
export function useProjects() {
    const items = ref<ProjectShowcase[]>([
        {
            title: "Dashboard Education Courses UI Design",
            description: "A learning-dashboard UI built with Nuxt & BootstrapVue.",
            imageUrl: "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJuF0ibIvdTODuW91obUCRctKfQIMYeN65rFSs",
            projectUrl: "https://education-courses-ui-design.vercel.app",
            technologies: ['Nuxt.js', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
            scope: ['Frontend Development']
        },
        {
            title: "Saas Landing Pages",
            description: "SaaS landing pages focused on conversion performance. Built with Nuxt & Tailwind CSS.",
            imageUrl: "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJqaUsx8Yyb0PY9GE81jMfD26mNehlkqn73Tyc",
            projectUrl: "https://saas-landing-page-seven.vercel.app",
            technologies: ['Nuxt.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
            scope: ['Frontend Development']
        },
        {
            title: "Travel Chingu Website",
            description: "A travel agency website built with Nuxt.js, Tailwind CSS",
            imageUrl: "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJHDRDNJrpFjcyVRSOoY50ak9TegKiv3Ah1CdZ",
            projectUrl: "https://travelchingu.com",
            technologies: ['Nuxt.js', 'Tailwind CSS', 'SQLite', 'Nitro', 'Drizzle ORM'],
            scope: ['Fullstack Development']
        },
        {
            title: "Sopan Sumba Website",
            description: "An organization website built for Sopan Sumba using Nuxt.js, Tailwind CSS, and Nitro.",
            imageUrl: "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJhpknlsUuD9UmogCB25M4HpjQ7OFEcfxyYRei",
            projectUrl: "https://sopan-sumba.or.id",
            technologies: ['Nuxt.js', 'Tailwind CSS', 'Nitro', 'SQLite', 'Drizzle ORM'],
            scope: ['Fullstack Development']
        },
        {
            title: "E-commerce Website",
            description: "A full-featured e-commerce website built with Nuxt.js, Tailwind CSS, and Laravel for backend services.",
            imageUrl: "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJcB00HeAW1h7zfNylHSkd4porxPTcsna0CE5m",
            projectUrl: "https://baiko.id",
            technologies: ['Next.js', 'Shadcn UI', 'Tailwind CSS', 'Laravel', 'MySQL', 'REST API'],
            scope: ['Fullstack Development']
        },
        {
            title: "Luxbali Travel Agent Website",
            description: "A travel agent website for Luxbali, built with Nuxt.js, Tailwind CSS, and Nitro.",
            imageUrl: "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJ0X1FCw5O0TzVPbZi1U4epwqgAIlNW5dXG6DS",
            projectUrl: "https://luxbali.net",
            technologies: ['Nuxt.js', 'Tailwind CSS', 'Nitro', 'Laravel', 'PostgreSQL'],
            scope: ['Fullstack Development']
        }
    ])

    return { items }
}