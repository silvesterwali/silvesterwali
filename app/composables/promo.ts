import type { PromoPackage } from '@/types/promo'

export function usePromos() {
  const item = ref<PromoPackage>(
    {
      id: 'website-ukm',
      title: 'Paket Website Company Profile UKM',
      description: 'Anda ingin bangun kepercayaan terhadap bisnis anda ? kami siap membantu Anda dengan solusi website profesional.',
      headline: 'Promo',
      costs: [
        {
          icon: 'i-lucide-monitor-cog',
          label: 'Harga Pembuatan',
          amount: 'Rp 500.000',
          description: 'diluar biaya domain dan termasuk hosting selama 1 bulan pertama'
        },
        {
          icon: 'i-lucide-piggy-bank',
          label: 'Biaya Maintenance Bulanan',
          amount: 'Rp 100.000',
          description: 'per bulan di tahun pertama (mencakup update keamanan, monitoring, dan perbaikan kecil)'
        }
      ],
      features: [
        {
          title: 'Website company profile profesional',
          description: 'Maksimal 5 halaman (Home, Profil Perusahaan, Produk/Jasa, Galeri, Kontak)',
          included: true,
          icon: 'i-lucide-check'
        },
        {
          title: 'Desain responsif',
          description: 'Tampilan bagus di HP, tablet, dan komputer',
          included: true,
          icon: 'i-lucide-check'
        },
        {
          title: 'Optimasi kecepatan loading',
          description: 'Cepat dengan Cloudflare (backbone infrastruktur kami)',
          included: true,
          icon: 'i-lucide-check'
        },
        {
          title: 'Proteksi keamanan dasar',
          description: 'Cloudflare (anti serangan DDoS, SSL gratis)',
          included: true,
          icon: 'i-lucide-check'
        },
        {
          title: 'Formulir kontak sederhana',
          description: '',
          included: true,
          icon: 'i-lucide-check'
        },
        {
          title: 'Integrasi Google Maps',
          description: 'Jika diperlukan',
          included: true,
          icon: 'i-lucide-check'
        },
        {
          title: 'Submit ke Google Search Console',
          description: 'Verifikasi agar langsung terindeks Google',
          included: true,
          icon: 'i-lucide-check'
        },
        {
          title: 'Revisi gratis',
          description: '2 kali selama proses pembuatan',
          included: true,
          icon: 'i-lucide-check'
        },
        {
          title: 'Pembayaran full',
          description: 'Dibayar di awal',
          included: true,
          icon: 'i-lucide-check'
        },
        {
          title: 'Biaya domain',
          description: '.com / .id / dll – dibayar terpisah oleh klien',
          included: false,
          icon: 'i-lucide-x'
        },
        {
          title: 'Backup data rutin',
          description: '',
          included: false,
          icon: 'i-lucide-x'
        },
        {
          title: 'Kepemilikan source code',
          description: 'Kode tetap menjadi milik penyedia layanan',
          included: false,
          icon: 'i-lucide-x'
        },
        {
          title: 'Konten tulisan/foto',
          description: 'Klien menyediakan sendiri, kami bantu tata letak',
          included: false,
          icon: 'i-lucide-x'
        },
        {
          title: 'Fitur tambahan',
          description: 'E-commerce, booking online, dll – bisa ditawarkan paket terpisah',
          included: false,
          icon: 'i-lucide-x'
        }
      ],
      advantages: [
        {
          title: 'Infrastruktur Cloudflare',
          description: 'Website lebih cepat, aman, dan stabil'
        },
        {
          title: 'Cocok untuk UKM',
          description: 'Ingin punya website profesional tanpa ribet'
        },
        {
          title: 'Maintenance terjangkau',
          description: 'Maintenance bulanan terjangkau agar website selalu up-to-date'
        },
        {
          title: 'Transparansi pricing',
          description: 'Setelah tahun pertama, akan di evaluasi ulang berdasarkan trafik dan kebutuhan website, yang bisa dinegosiasikan kembali'
        }
      ],
      contact: {
        name: 'Silvester Wali',
        phone: '+62 812-3669-8015'
      }
    }
  )

  return { item }
}
