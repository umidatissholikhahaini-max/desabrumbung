'use client'

import { Briefcase, Truck, Store, Leaf } from "lucide-react"
import Image from "next/image"

const bumdesServices = [
  {
    icon: Leaf,
    title: "Ternak Ayam Petelur",
    description: "Usaha peternakan ayam petelur yang menghasilkan telur segar berkualitas tinggi untuk kebutuhan masyarakat lokal dan sekitarnya.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260217-WA0005.jpg-4ryQCaM5YITRdywCjWTp6Ujnmhni2V.jpeg"
  },
  {
    icon: Truck,
    title: "Tempat Parkir Sepeda Motor",
    description: "Layanan parkir sepeda motor yang aman, terstruktur, dan terjangkau untuk kenyamanan pengunjung dan penduduk desa.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9913.JPG-kKYy6YKkQpi256Lnypd5iX8JZmvazy.jpeg"
  },
  {
    icon: Store,
    title: "Toko & Warung Makan",
    description: "Toko penyedia kebutuhan pokok dengan motto 'PASTI LEBIH MURAH' dan warung makan yang menyajikan makanan lokal lezat.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260428_212027.jpg-C6iC4StChhAPFypc6wgMbXkzyGS7cg.jpeg"
  }
]

export function Economy() {
  return (
    <section id="ekonomi" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Ekonomi Desa</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            BUMDES Sri Rejeki
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Badan Usaha Milik Desa (BUMDES) Sri Rejeki adalah lembaga ekonomi desa yang mengelola beberapa usaha strategis 
            untuk meningkatkan kesejahteraan masyarakat Desa Brumbung. Dengan motto &quot;PASTI LEBIH MURAH&quot;, BUMDES Sri Rejeki 
            berkomitmen memberikan layanan terbaik dengan harga terjangkau.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bumdesServices.map((service, index) => (
            <div key={index} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <div className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">6.357</div>
            <p className="text-muted-foreground">Jumlah Penduduk</p>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">3</div>
            <p className="text-muted-foreground">Lini Usaha BUMDES</p>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground">Kepemilikan Masyarakat</p>
          </div>
        </div>
      </div>
    </section>
  )
}
