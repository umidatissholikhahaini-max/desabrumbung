import Image from "next/image"

const timelineItems = [
  {
    year: "1128",
    title: "Berdirinya Desa",
    description: "Desa Brumbung dipercaya berdiri pada tanggal 30 Juli 1128, menunjukkan bahwa wilayah ini telah berkembang sejak masa kerajaan di Jawa."
  },
  {
    year: "Era Kerajaan",
    title: "Peninggalan Bersejarah",
    description: "Desa menyimpan berbagai peninggalan sejarah berupa prasasti dan arca kuno yang menjadi bukti kejayaan masa lalu."
  },
  {
    year: "1971",
    title: "Prestasi Desa Maju",
    description: "Desa Brumbung meraih Juara 2 tingkat Provinsi Jawa Timur dalam kategori Desa Maju, dan mendapat hadiah PLTM."
  },
  {
    year: "Sekarang",
    title: "Desa Wisata Budaya",
    description: "Desa Brumbung terus berkembang sebagai destinasi wisata budaya dengan tetap melestarikan tradisi dan kearifan lokal."
  }
]

export function History() {
  return (
    <section id="sejarah" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Sejarah</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Jejak Sejarah Hampir 900 Tahun
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Desa Brumbung memiliki nilai sejarah yang sangat kuat, dengan berbagai peninggalan 
            bersejarah yang masih terjaga hingga saat ini sebagai bukti kejayaan masa lalu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Images */}
          <div className="space-y-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%207.51.55%20PM%20%281%29-8VML6pUyvhDaxuQG3cJIthmV1Yi2cr.jpeg"
                alt="Arca dan prasasti kuno Desa Brumbung"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%207.51.56%20PM%20%281%29-Bx1YvDWbB2oIGH61cJsZ9gHgwOa8kg.jpeg"
                  alt="Koleksi arca Desa Brumbung"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%209.02.57%20PM-v1bFwP3EZgYn4WVNngAsLpyzkYNb54.jpeg"
                  alt="Petirtaan Geneng - Cagar Budaya"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                  </div>
                  <div className="bg-card border border-border p-6 rounded-xl">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Heritage Sites */}
        <div className="mt-20 bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Cagar Budaya</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Desa Brumbung memiliki beberapa situs cagar budaya yang dilindungi, termasuk 
                Petirtaan Geneng dan berbagai koleksi arca serta prasasti kuno.
              </p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-muted/50">
                <h4 className="font-medium text-foreground mb-2">Petirtaan Geneng</h4>
                <p className="text-sm text-muted-foreground">Petirtaan berbahan bata kuno dengan relief Jaladwara Dewi Shintala</p>
                <p className="text-xs text-primary mt-2">7°47&apos;58.8&quot;S 112°17&apos;20.5&quot;E</p>
              </div>
              <div className="p-5 rounded-xl bg-muted/50">
                <h4 className="font-medium text-foreground mb-2">Prasasti Brumbung</h4>
                <p className="text-sm text-muted-foreground">Prasasti kuno yang menjadi bukti sejarah keberadaan desa sejak masa kerajaan</p>
                <p className="text-xs text-primary mt-2">Koleksi Balai Desa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
