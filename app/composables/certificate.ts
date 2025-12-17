import type { Certificate } from '@/types/certificate'
export function useCertificates() {
    const items = ref<Certificate[]>([
        {
            title: "Legacy Responsive Web Design v8",
            issuer: "FreeCodeCamp",
            issueDate: "Jul 16, 2022",
            certificateUrl: "https://www.freecodecamp.org/certification/silvesterlhwali123@gmail.com/responsive-web-design",
            imageUrl: "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJpOZHD5QKbeSZFCJzOauLlPDx0YWITk2NUtvG"
        },
        {
            title: "Back End Development and APIs",
            issuer: "FreeCodeCamp",
            issueDate: "Jan 3, 2022",
            certificateUrl: "https://www.freecodecamp.org/certification/silvesterlhwali123@gmail.com/back-end-development-and-apis",
            imageUrl: "https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJEjMVGAIkqZg3PLG7E6I25FaDmc9trM04QUTX"
        }
    ])

    return { items }
}
