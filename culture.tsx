import Image from "next/image"
import { Award, Zap, Trophy, Star } from "lucide-react"

const achievements = [
  {
    year: "1971",
    icon: Trophy,
    title: "Juara 2 Desa Maju",
    subtitle: "Tingkat Provinsi Jawa Timur",
    description: "Prestasi ini menjadi bukti keberhasilan masyarakat dan pemerintah desa dalam melaksanakan pembangunan serta meningkatkan kesejahteraan masyarakat.",
    reward: "Hadiah: Pusat Listrik Tenaga Mesin (PLTM)"
  },
  {
    year: "2019",
    icon: Star,
    title: "Nominator Inovasi Desa Terbaik",
    subtitle: "Bidang Layanan Kesehatan",
    description: "Pencapaian ini mencerminkan semangat pembaruan, kreativitas, dan upaya pengembangan potensi desa secara berkelanjutan.",
    reward: "Kampung Inovatif"
  },
  {
    year: "2024",
    icon: Award,
    title: "Good Governance",
    subtitle: "Pengelolaan Keuangan Desa",
    description: "Desa Prospektif Good Governance Pengelolaan Keuangan Desa Tahun 2024 di Wilayah Kecamatan Kepung.",
    reward: "Piagam Penghargaan Kecamatan"
  }
]

export function Achievements() {
  return (
    <section id="prestasi" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Prestasi & Penghargaan</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Desa Berprestasi Sejak Dulu
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Desa Brumbung memiliki berbagai prestasi dan penghargaan yang menunjukkan perkembangan 
            serta potensi dalam bidang pembangunan dan inovasi desa.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-primary p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-foreground/20 text-primary-foreground rounded-full mb-3">
                  {achievement.year}
                </span>
                <div className="flex items-center gap-3">
                  <achievement.icon className="w-8 h-8 text-primary-foreground" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-primary-foreground">{achievement.title}</h3>
                    <p className="text-sm text-primary-foreground/80">{achievement.subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{achievement.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-foreground font-medium">{achievement.reward}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Award Images */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%207.51.55%20PM-qcnJtdntz4qV7q6hZlE50yHam6WyHZ.jpeg"
                alt="Koran Radar Kediri - Nominator Inovasi Terbaik Desa 2019"
                width={400}
                height={533}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-serif font-bold text-foreground mb-2">Liputan Media Radar Kediri</h4>
            <p className="text-sm text-muted-foreground">
              &ldquo;Terus Berinovasi untuk Kemajuan Desa&rdquo; - Nominator Inovasi Terbaik Bidang Layanan Kesehatan 2019
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-muted">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%207.51.56%20PM-P6SUZM0Hc39vQSaHeUOieZD45nioMH.jpeg"
                alt="Piagam Penghargaan Good Governance 2024"
                width={400}
                height={533}
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="font-serif font-bold text-foreground mb-2">Piagam Penghargaan 2024</h4>
            <p className="text-sm text-muted-foreground">
              Desa Prospektif Good Governance Pengelolaan Keuangan Desa - Kecamatan Kepung, Kabupaten Kediri
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
