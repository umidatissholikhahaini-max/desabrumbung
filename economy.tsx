'use client'

import { FileText, CheckCircle2 } from "lucide-react"

interface Requirement {
  title: string
  items: string[]
}

const requirements: Requirement[] = [
  {
    title: "Persyaratan Pembuatan KTP Pemula/Baru",
    items: [
      "Photo Copy Kartu Keluarga",
      "Photo copy Akta Kelahiran",
      "Formulir F.1.2"
    ]
  },
  {
    title: "Persyaratan Pembuatan / Perubahan Kartu Keluarga",
    items: [
      "Kartu Keluarga ASLI (Perubahan)",
      "Photo copy Akta Kelahiran",
      "Photo Copy Surat Nikah / Akta Cerai",
      "Photo copy Ijazah Terakhir",
      "Formulir F.1.02",
      "Formulir F.1.06",
      "Formulir F.1.01"
    ]
  },
  {
    title: "Persyaratan Pembuatan Akta Kelahiran Baru",
    items: [
      "Kartu Keluarga ASLI",
      "Photo copy Akta Kelahiran",
      "Photo Copy Surat Nikah / Akta Cerai",
      "Photo copy Ijazah Terakhir",
      "BUKU KIA / Surat keterangan Kelahiran dari Rumah Sakit, Polindes, Rumah Bersalin",
      "Formulir F.1.02",
      "Formulir F.1.06",
      "Formulir F.1.01"
    ]
  },
  {
    title: "Persyaratan Pembuatan Akta Kematian Baru",
    items: [
      "Kartu Keluarga ASLI",
      "Photo copy Akta Kelahiran",
      "Photo Copy Surat Nikah / Akta Cerai",
      "Photo copy Ijazah Terakhir",
      "Surat keterangan Kematian",
      "Formulir F.1.02",
      "Formulir F.1.06"
    ]
  },
  {
    title: "Persyaratan Pindah Keluar",
    items: [
      "Kartu Keluarga ASLI",
      "Photo copy Akta Kelahiran",
      "Photo Copy Surat Nikah / Akta Cerai",
      "Photo copy Ijazah Terakhir",
      "Formulir F.1.02",
      "Formulir F.1.03"
    ]
  },
  {
    title: "Persyaratan Pengantar Nikah",
    items: [
      "Photo copy Kartu Keluarga",
      "Photo copy Kartu Keluarga Calon Istri/Suami",
      "Photo copy Akta Kelahiran",
      "Photo Copy Surat Nikah / Akta Cerai Ayah/Ibu",
      "Photo copy Ijazah Terakhir"
    ]
  },
  {
    title: "Persyaratan Pengajuan Surat Keterangan Umum",
    items: [
      "Photo copy Kartu Keluarga",
      "Photo copy Kartu Keluarga Calon Istri/Suami",
      "Photo copy KTP"
    ]
  }
]

export function Administration() {
  return (
    <section id="administrasi" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Layanan Publik</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Persyaratan Administrasi
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Kantor Desa Brumbung menyediakan berbagai layanan administrasi kependudukan untuk memudahkan masyarakat. 
            Berikut adalah daftar lengkap persyaratan untuk setiap jenis layanan administrasi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {requirements.map((req, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground">{req.title}</h3>
              </div>

              <ul className="space-y-3">
                {req.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-10">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-2">Informasi Penting</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Untuk informasi lebih detail tentang persyaratan administrasi, silakan hubungi kantor desa atau kunjungi langsung. 
                Jam layanan administrasi adalah Senin - Jumat: 08.00 - 15.00 WIB dan Sabtu: 08.00 - 12.00 WIB.
              </p>
              <p className="text-sm text-muted-foreground">
                Kontak: 085649095806 atau desabrumbung.kepung@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
