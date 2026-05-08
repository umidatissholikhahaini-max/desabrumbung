import Image from "next/image"
import { Target, Eye, Sprout, Users } from "lucide-react"

export function About() {
  return (
    <section id="tentang" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Tentang Kami</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Desa yang Harmonis dengan Alam dan Budaya
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Desa Brumbung merupakan desa yang berada di Kecamatan Kepung, Kabupaten Kediri. 
            Desa ini memiliki nilai sejarah yang kuat karena dipercaya berdiri sejak 30 Juli 1128, 
            yang menunjukkan bahwa wilayah ini telah berkembang sejak masa kerajaan di Jawa.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%208.39.34%20PM-yh2uEW4c75Hx6wpiDeelpVrediLk4i.jpeg"
                alt="Lahan pertanian Desa Brumbung"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-serif font-bold text-lg">Agraris</p>
                  <p className="text-sm text-muted-foreground">Mayoritas Petani</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hingga saat ini, Desa Brumbung tetap mempertahankan kearifan lokal, budaya tradisional, 
              serta kehidupan masyarakat yang harmonis dengan alam. Mayoritas masyarakat Desa Brumbung 
              bermata pencaharian sebagai petani, sehingga suasana desa masih sangat asri, sejuk, dan alami.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Kondisi ini menjadikan desa memiliki potensi besar dalam pengembangan wisata berbasis budaya, 
              sejarah, dan alam. Dengan keindahan alam dan kekayaan budaya yang dimiliki, Desa Brumbung 
              berkomitmen untuk menjadi daerah wisata dan daerah percontohan bagi desa-desa lainnya.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Masyarakat Harmonis</p>
                  <p className="text-sm text-muted-foreground">Kehidupan yang rukun dan gotong royong</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Sprout className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Alam yang Asri</p>
                  <p className="text-sm text-muted-foreground">Suasana sejuk dan alami</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-primary text-primary-foreground p-8 md:p-10 rounded-2xl">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Visi</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              Menjadikan Desa Brumbung sebagai daerah wisata dan daerah percontohan yang dapat 
              menjadi inspirasi bagi desa-desa lainnya dalam pembangunan dan pelestarian budaya.
            </p>
          </div>

          <div className="bg-card border border-border p-8 md:p-10 rounded-2xl">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Misi</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mewujudkan masyarakat yang sejahtera dan tentram dengan memastikan setiap Kepala Keluarga (KK) 
              memiliki penghasilan harian. Hal ini bertujuan agar masyarakat terhindar dari ketergantungan 
              pada rentenir dan dapat hidup mandiri.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
