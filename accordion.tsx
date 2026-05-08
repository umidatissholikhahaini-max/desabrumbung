import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%207.49.49%20PM-Nl76zxclNkzgtAUAJQkMkqxrHvWekK.jpeg"
          alt="Gerbang Desa Brumbung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-sm mb-6 border border-primary-foreground/20">
            <MapPin className="w-4 h-4" />
            Kecamatan Kepung, Kabupaten Kediri, Jawa Timur
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Selamat Datang di
            <span className="block mt-2">Desa Brumbung</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Desa bersejarah sejak tahun 1128 dengan kekayaan budaya Jawa, alam yang asri, 
            dan masyarakat yang harmonis di lereng Gunung Kelud.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              <Link href="#tentang">
                Jelajahi Desa
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="#budaya">
                Kebudayaan
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 pt-8 border-t border-primary-foreground/20">
            <div>
              <p className="font-serif text-3xl md:text-4xl font-bold">6.357</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Penduduk</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl font-bold">898</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Tahun Berdiri</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl font-bold">1128</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Tahun Didirikan</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl font-bold">30 Juli</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Hari Jadi</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary-foreground/70" />
        </div>
      </div>
    </section>
  )
}
