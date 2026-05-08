"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%207.49.49%20PM-Nl76zxclNkzgtAUAJQkMkqxrHvWekK.jpeg",
    alt: "Gerbang Balai Desa Brumbung",
    category: "Pemerintahan"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%207.49.50%20PM-ZdcKGnzFgVv5uWMcRCobnRsL7f5MvS.jpeg",
    alt: "Balai Desa Brumbung",
    category: "Pemerintahan"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brumbung-2048x1362-pemghhmZPoqEpNHjZ64jflTqa2XFEp.webp",
    alt: "Kirab Budaya - Gunungan Sayuran",
    category: "Budaya"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9816.JPG-OsMW2xsbnI54zJdl6K0NVxC77Ky1vG.jpeg",
    alt: "Kirab Budaya Hari Jadi ke-895",
    category: "Budaya"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%207.51.55%20PM%20%281%29-8VML6pUyvhDaxuQG3cJIthmV1Yi2cr.jpeg",
    alt: "Koleksi Arca dan Prasasti",
    category: "Sejarah"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%207.50.02%20PM-gKa1Icbl3VTtXaZ2ZvvJF3A0Ru2AgN.jpeg",
    alt: "Petirtaan Geneng - Cagar Budaya",
    category: "Sejarah"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kirab_1-fLIf7SJoR8xIldBOZxF6qO1zGZ7Jy9.jpeg",
    alt: "Tradisi Makan Bersama",
    category: "Budaya"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%208.39.34%20PM-yh2uEW4c75Hx6wpiDeelpVrediLk4i.jpeg",
    alt: "Lahan Pertanian Desa",
    category: "Alam"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp-Image-2023-02-05-at-14.41.09-e1675677773917-ewJtEiOKEU5zjSlTDFZxYtyPY0I5LT.jpeg",
    alt: "Pertunjukan Pencak Silat",
    category: "Budaya"
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>("Semua")

  const categories = ["Semua", "Pemerintahan", "Budaya", "Sejarah", "Alam"]
  const filteredImages = filter === "Semua" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

  return (
    <section id="galeri" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Galeri</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Potret Desa Brumbung
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Dokumentasi kegiatan, keindahan alam, dan kekayaan budaya Desa Brumbung
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-left">
                  <span className="inline-block px-2 py-1 text-xs bg-primary text-primary-foreground rounded mb-1">
                    {image.category}
                  </span>
                  <p className="text-sm text-primary-foreground font-medium">{image.alt}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setSelectedImage(null)}
              aria-label="Tutup"
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
              <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
