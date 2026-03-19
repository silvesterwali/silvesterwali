<template>
  <UContainer
    class="p-5 bg-white text-black text-xs leading-snug font-sans print:p-0 print:max-w-full"
  >
    <!-- Header with Profile Picture and Basic Info -->
    <header class="border-b-2 border-gray-900 pb-3 mb-3">
      <div class="flex gap-4 items-start">
        <img
          src="https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJZkEcoXWLxoeDYVtBpwWXE1MTnKyd37mbzJjR"
          alt="Silvester Wali"
          class="w-20 h-[100px] object-cover flex-shrink-0"
        />
        <div class="flex-1">
          <h1 class="text-xl font-bold m-0 text-gray-900">{{ title }}</h1>
          <p class="text-sm font-semibold m-0 mb-1 text-gray-800">{{ subtitle }}</p>
          <p class="text-xs m-0 mb-2 text-gray-700">{{ description }}</p>
          <ul class="list-none m-0 p-0 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-800">
            <li>{{ email }}</li>
            <li>{{ phone }}</li>
            <li>linkedin.com/in/silvester-wali-a54414177</li>
            <li>github.com/silvesterwali</li>
          </ul>
        </div>
      </div>
    </header>

    <!-- Skills -->
    <section class="mb-3">
      <h2 class="text-sm font-bold uppercase border-b-2 border-gray-900 pb-1 mb-2 text-gray-900">
        Skills
      </h2>
      <p class="m-0 text-xs text-gray-800">{{ skills.join(", ") }}</p>
    </section>

    <!-- Work Experience -->
    <section class="mb-3">
      <h2 class="text-sm font-bold uppercase border-b-2 border-gray-900 pb-1 mb-2 text-gray-900">
        Work Experience
      </h2>
      <div class="flex flex-col gap-4">
        <div
          v-for="exp in workExperience"
          :key="exp.companyName + exp.startDate"
          class="break-inside-avoid"
        >
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-xs font-bold m-0 text-gray-900">{{ exp.position }}</h3>
              <p class="text-[11px] m-0 text-gray-700">{{ exp.companyName }}</p>
              <p class="text-[9px] m-0 text-gray-500">{{ exp.companyWebsite }}</p>
            </div>
            <p class="text-[11px] m-0 whitespace-nowrap text-gray-700">
              {{ formatDate(exp.startDate) }} -
              {{ exp.endDate ? formatDate(exp.endDate) : "Present" }}
            </p>
          </div>
          <ul class="my-1 pl-4 text-[11px] list-disc text-gray-800">
            <li v-for="(resp, idx) in exp.responsibilities" :key="idx" class="mb-0.5">
              {{ resp }}
            </li>
          </ul>
          <p v-if="exp.stack && exp.stack.length" class="text-[10px] m-0 text-gray-700">
            <span class="font-bold text-gray-800">Tech:</span> {{ exp.stack.join(", ") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Certificates -->
    <section class="mb-3">
      <h2 class="text-sm font-bold uppercase border-b-2 border-gray-900 pb-1 mb-2 text-gray-900">
        Certificates
      </h2>
      <div class="flex flex-col gap-1">
        <div v-for="cert in certificates" :key="cert.title" class="text-[11px] text-gray-800">
          <span class="font-bold text-gray-900">{{ cert.title }}</span> — {{ cert.issuer }},
          {{ cert.issueDate }}
        </div>
      </div>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

useHead({
  title: " ",
  meta: [{ name: "robots", content: "noindex, nofollow" }],
});

const { title, subtitle, description } = useHero();
const { email, phone } = useContact();
const { skills } = useSkills();
const { items: workExperience } = useWorkingExperience();
const { items: certificates } = useCertificates();

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
</script>

<style>
@media print {
  @page {
    margin: 0.5in 0.5in 0.5in 0.5in;
    size: A4;
  }

  @page :first {
    margin-top: 0.5in;
  }

  html,
  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}

@media screen {
  .print-resume-wrapper {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
  }
}
</style>
