import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { History } from "@/components/history"
import { Culture } from "@/components/culture"
import { Achievements } from "@/components/achievements"
import { Economy } from "@/components/economy"
import { UMKM } from "@/components/umkm"
import { Administration } from "@/components/administration"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <History />
      <Culture />
      <Achievements />
      <Economy />
      <UMKM />
      <Administration />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
