import Image from "next/image"
import { Calendar, Music, Users } from "lucide-react"

const cultureItems = [
  {
    icon: Calendar,
    title: "Kirab Budaya",
    description: "Setiap tanggal 30 Juli, masyarakat desa rutin mengadakan Kirab Budaya sebagai bentuk peringatan berdirinya desa sekaligus upaya mengenalkan sejarah desa kepada generasi penerus."
  },
  {
    icon: Music,
    title: "Kesenian Kenaren",
    description: "Kesenian tradisional Kenaren masih aktif dilestarikan dan sering ditampilkan dalam acara-acara tertentu sebagai identitas budaya lokal Desa Brumbung."
  },
  {
    icon: Users,
    title: "Tradisi Gotong Royong",
    description: "Masyarakat Desa Brumbung masih memegang erat nilai-nilai gotong royong dan kebersamaan dalam setiap kegiatan sosial dan pembangunan desa."
  }
]

export function Culture() {
  return (
    <section id="budaya" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Budaya & Tradisi</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Kekayaan Budaya Jawa yang Terjaga
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Nilai-nilai budaya dan tradisi leluhur tetap dijaga dan dilestarikan oleh masyarakat 
            Desa Brumbung sebagai warisan yang tak ternilai harganya.
          </p>
        </div>

        {/* Featured Event - Kirab Budaya */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="relative aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brumbung-2048x1362-pemghhmZPoqEpNHjZ64jflTqa2XFEp.webp"
              alt="Kirab Budaya Desa Brumbung - Gunungan"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9816.JPG-OsMW2xsbnI54zJdl6K0NVxC77Ky1vG.jpeg"
              alt="Kirab Budaya - Hari Jadi Desa Brumbung ke-895"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Culture Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cultureItems.map((item, index) => (
            <div key={index} className="bg-card border border-border p-6 md:p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Images */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%208.43.55%20PM-iurijeYF7sgie8FCCUEiOSuopHjVqu.jpeg"
              alt="Upacara adat Desa Brumbung"
              width={400}
              height={300}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kirab_1-fLIf7SJoR8xIldBOZxF6qO1zGZ7Jy9.jpeg"
              alt="Makan bersama dalam tradisi desa"
              width={400}
              height={300}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp-Image-2023-02-05-at-14.41.09-e1675677773917-ewJtEiOKEU5zjSlTDFZxYtyPY0I5LT.jpeg"
              alt="Pertunjukan Pencak Silat"
              width={400}
              height={300}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Kirab Description */}
        <div className="mt-16 bg-accent text-accent-foreground p-8 md:p-12 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Kirab Budaya Tahunan</h3>
            <p className="text-accent-foreground/90 leading-relaxed">
              Kirab budaya dimulai dari area petirtaan menuju balai desa dengan melibatkan berbagai 
              elemen masyarakat, mulai dari tokoh adat, pemuda, hingga pelajar. Acara ini menjadi 
              momen penting untuk mengenalkan sejarah desa kepada generasi penerus agar nilai-nilai 
              budaya dan perjuangan leluhur tetap terjaga.
            </p>
            <p className="mt-4 font-medium text-lg">
              Setiap 30 Juli - Memperingati Hari Jadi Desa Brumbung
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
