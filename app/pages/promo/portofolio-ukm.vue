<template>
    <UContainer>
        <div class="grid gap-12">
            <!-- Header Section -->
            <UPageSection :title="promo.title" :description="promo.description" :headline="promo.headline" />

            <!-- Introduction -->
            <div class="max-w-4xl">
                <p class="text-lg text-gray-700 leading-relaxed">
                    Layanan pengembangan web khusus dirancang untuk usaha kecil dan menengah (UKM) untuk meningkatkan
                    kehadiran online mereka dan mendorong pertumbuhan bisnis. Kami menyediakan solusi yang terjangkau,
                    profesional, dan berkelanjutan.
                </p>
            </div>

            <!-- Pricing Section -->
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-8">Paket Harga & Investasi</h2>
                <UPageGrid>
                    <UPageCard v-for="cost in promo.costs" :key="cost.label" :title="cost.label" :icon="cost.icon"
                        spotlight spotlight-color="primary">
                        <template #description>
                            <div class="space-y-4">
                                <div>
                                    <p class="text-sm text-gray-600">Investasi</p>
                                    <p class="text-3xl font-bold text-primary">{{ cost.amount }}</p>
                                </div>
                                <p class="text-sm text-gray-700">{{ cost.description }}</p>
                            </div>
                        </template>
                    </UPageCard>
                </UPageGrid>
            </div>

            <!-- Features Section -->
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-8">Fitur & Paket yang Kami Sediakan</h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <UPageCard title="Sudah Termasuk dalam Paket" icon="i-lucide-check-circle">
                        <template #description>
                            <ul class="space-y-3">
                                <li v-for="feature in promo.features.filter(f => f.included)" :key="feature.title"
                                    class="flex gap-3">
                                    <span class="text-green-600 shrink-0">✓</span>
                                    <div>
                                        <p class="font-semibold text-gray-900">{{ feature.title }}</p>
                                        <p class="text-sm text-gray-600" v-if="feature.description">
                                            {{ feature.description }}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </template>
                    </UPageCard>

                    <UPageCard title="Tidak Termasuk dalam Paket" icon="i-lucide-x-circle">
                        <template #description>
                            <ul class="space-y-3">
                                <li v-for="feature in promo.features.filter(f => !f.included)" :key="feature.title"
                                    class="flex gap-3">
                                    <span class="text-gray-400 shrink-0">✕</span>
                                    <div>
                                        <p class="font-semibold text-gray-900">{{ feature.title }}</p>
                                        <p class="text-sm text-gray-600" v-if="feature.description">
                                            {{ feature.description }}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </template>
                    </UPageCard>
                </div>
            </div>

            <!-- Benefits Section -->
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-8">Keunggulan & Manfaat Layanan</h2>
                <UPageGrid>
                    <UPageCard v-for="advantage in promo.advantages" :key="advantage.title" :title="advantage.title"
                        icon="i-lucide-star" spotlight spotlight-color="primary">
                        <template #description>
                            <p class="text-gray-700">{{ advantage.description }}</p>
                        </template>
                    </UPageCard>
                </UPageGrid>
            </div>

            <!-- Why Your Business Needs a Website -->
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-8">Mengapa UKM Membutuhkan Website?</h2>
                <UPageGrid>
                    <UPageCard v-for="item in [
                        {
                            title: 'Jangkauan Digital',
                            description: 'Website memungkinkan bisnis Anda dijangkau oleh jutaan pelanggan potensial secara online, 24/7, tanpa batasan geografis.',
                            icon: 'i-lucide-globe'
                        },
                        {
                            title: 'Kepercayaan Pelanggan',
                            description: 'Kehadiran online profesional meningkatkan kredibilitas bisnis Anda di mata pelanggan dan membedakan Anda dari kompetitor.',
                            icon: 'i-lucide-shield-check'
                        },
                        {
                            title: 'Pemasaran Efektif',
                            description: 'Website menjadi pusat strategi pemasaran digital Anda, membantu Anda menjangkau pelanggan melalui SEO dan media sosial.',
                            icon: 'i-lucide-trending-up'
                        },
                        {
                            title: 'Data & Analitik',
                            description: 'Pantau perilaku pelanggan, traffic website, dan performa bisnis online Anda dengan analytics yang akurat.',
                            icon: 'i-lucide-bar-chart-3'
                        }
                    ]" :key="item.title" :title="item.title" :icon="item.icon" spotlight spotlight-color="primary">
                        <template #description>
                            <p class="text-gray-700">{{ item.description }}</p>
                        </template>
                    </UPageCard>
                </UPageGrid>
            </div>

            <!-- Our Process Section -->
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-8">Proses Pengerjaan Kami</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div v-for="step in steps" :key="step.number"
                        class="flex gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all">
                        <div
                            class="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-sm flex-shrink-0">
                            {{ step.number }}
                        </div>
                        <div class="flex-1">
                            <h3 class="font-semibold text-gray-900 mb-1">{{ step.title }}</h3>
                            <p class="text-sm text-gray-600">{{ step.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Technology Stack -->
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-8">Teknologi yang Kami Gunakan</h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <UPageCard title="Frontend" icon="i-lucide-layout">
                        <template #description>
                            <ul class="space-y-2 text-gray-700">
                                <li class="flex items-center gap-2">
                                    <span class="text-primary">•</span>
                                    <span>Vue.js / Nuxt.js</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="text-primary">•</span>
                                    <span>Tailwind CSS</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="text-primary">•</span>
                                    <span>Responsive Design</span>
                                </li>
                            </ul>
                        </template>
                    </UPageCard>

                    <UPageCard title="Infrastruktur & Optimasi" icon="i-lucide-cpu">
                        <template #description>
                            <div class="space-y-4">
                                <div>
                                    <p class="font-semibold text-sm text-gray-900 mb-2">Infrastruktur</p>
                                    <ul class="space-y-1 text-sm text-gray-700">
                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">•</span>
                                            <span>Cloudflare CDN</span>
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">•</span>
                                            <span>SSL/TLS Security</span>
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">•</span>
                                            <span>Auto-scaling Hosting</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="font-semibold text-sm text-gray-900 mb-2">Optimasi</p>
                                    <ul class="space-y-1 text-sm text-gray-700">
                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">•</span>
                                            <span>SEO Optimization</span>
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <span class="text-primary">•</span>
                                            <span>Page Speed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </template>
                    </UPageCard>
                </div>
            </div>

            <!-- FAQ Section -->
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-8">Pertanyaan Umum</h2>
                <UAccordion :items="[
                    {
                        label: 'Berapa lama proses pembuatan website?',
                        content: 'Proses pembuatan website biasanya memakan waktu 2-4 minggu tergantung kompleksitas dan jumlah halaman yang diminta.'
                    },
                    {
                        label: 'Apakah saya bisa edit konten sendiri setelah website jadi?',
                        content: 'Ya, tentu! Kami akan memberikan pelatihan cara mengelola konten website Anda menggunakan admin panel yang user-friendly.'
                    },
                    {
                        label: 'Apa itu biaya maintenance dan apakah wajib?',
                        content: 'Biaya maintenance mencakup update keamanan, monitoring server, backup data, dan perbaikan bug. Kami rekomendasikan maintenance untuk memastikan website selalu optimal dan aman.'
                    },
                    {
                        label: 'Berapa biaya domain dan hosting?',
                        content: 'Biaya domain (misalnya .com atau .id) berkisar Rp 50.000-150.000 per tahun dan terpisah dari biaya pembuatan website. Hosting sudah termasuk dalam paket selama 1 bulan pertama.'
                    },
                    {
                        label: 'Apakah website saya akan bisa ditemukan di Google?',
                        content: 'Ya! Kami melakukan submit ke Google Search Console dan mengoptimasi website untuk SEO agar lebih mudah ditemukan di hasil pencarian Google.'
                    },
                    {
                        label: 'Bagaimana jika saya ingin fitur tambahan seperti toko online?',
                        content: 'Kami menyediakan paket custom untuk fitur tambahan seperti e-commerce, booking system, atau integrasi payment gateway dengan harga yang dapat dinegosiasikan.'
                    }
                ]" />
            </div>

            <!-- Contact Section -->
            <UPageCard title="Hubungi Kami untuk Konsultasi Gratis" icon="i-lucide-phone" spotlight
                spotlight-color="primary">
                <template #description>
                    <div class="space-y-4">
                        <p class="text-gray-700">
                            Siap membantu bisnis Anda berkembang dengan solusi website profesional? Hubungi kami
                            sekarang untuk konsultasi gratis!
                        </p>
                        <div class="flex flex-col gap-3">
                            <div>
                                <p class="font-semibold text-gray-900">Kontak: {{ promo.contact?.name }}</p>
                            </div>
                            <a :href="`https://wa.me/${(promo.contact?.phone || '').replace(/\D/g, '')}`"
                                target="_blank"
                                class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all w-fit">
                                <span>{{ promo.contact?.phone }}</span>
                            </a>
                        </div>
                    </div>
                </template>
            </UPageCard>

            <div class="h-10" />
        </div>
    </UContainer>
</template>

<script setup lang="ts">
const { item: promo } = usePromos()

const steps = [
    {
        number: '01',
        title: 'Konsultasi & Perencanaan',
        description: 'Kami mendengarkan kebutuhan bisnis Anda dan visi untuk website yang ideal.'
    },
    {
        number: '02',
        title: 'Prototype & Development',
        description: 'Kami membuat prototype dan mengembangkan website yang fungsional dan responsif.'
    },
    {
        number: '03',
        title: 'Testing & Quality Assurance',
        description: 'Website diuji secara menyeluruh untuk memastikan kualitas dan performa optimal.'
    },
    {
        number: '04',
        title: 'Launching & Training',
        description: 'Website diluncurkan dan kami memberikan training untuk mengelola konten.'
    },
    {
        number: '05',
        title: 'Support & Maintenance',
        description: 'Kami terus mendukung website Anda untuk performa optimal dan keamanan.'
    }
]

useHead({
    title: 'Promo Layanan Pengembangan Web untuk UKM',
    meta: [
        {
            name: 'description',
            content:
                'Layanan pengembangan web khusus untuk usaha kecil dan menengah (UKM) yang ingin meningkatkan kehadiran online mereka dan mendorong pertumbuhan bisnis.'
        }
    ]
})

useSeoMeta({
    title: 'Promo Layanan Pengembangan Web untuk UKM',
    description:
        'Layanan pengembangan web khusus untuk usaha kecil dan menengah (UKM) yang ingin meningkatkan kehadiran online mereka dan mendorong pertumbuhan bisnis.',
    ogTitle: 'Promo Layanan Pengembangan Web untuk UKM',
    ogDescription:
        'Layanan pengembangan web khusus untuk usaha kecil dan menengah (UKM) yang ingin meningkatkan kehadiran online mereka dan mendorong pertumbuhan bisnis.',
    ogImage: 'https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJWqRSAW8eajVmsRnH4dg9ptykN0QFwGDZx27Y'
})
</script>

<style scoped></style>