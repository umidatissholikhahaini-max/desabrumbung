import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "6285649095806"

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon",
    details: ["085649095806 (Huda - BUMDES)", "Hubungi Kantor Desa"]
  },
  {
    icon: MapPin,
    title: "Alamat",
    details: ["Desa Brumbung, Kecamatan Kepung", "Kabupaten Kediri, Jawa Timur"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["desabrumbung.kepung@gmail.com", "Untuk informasi resmi"]
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    details: ["Senin - Jumat: 08.00 - 15.00 WIB", "Sabtu: 08.00 - 12.00 WIB"]
  }
]

export function Contact() {
  return (
    <section id="kontak" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Hubungi Kami</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Kantor Desa Brumbung
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Untuk informasi lebih lanjut mengenai Desa Brumbung, potensi wisata, atau kegiatan desa, 
              silakan hubungi kami melalui kontak di bawah ini atau kunjungi kantor desa.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium px-8"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo,%20saya%20ingin%20bertanya%20tentang%20Desa%20Brumbung`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Hubungi via WhatsApp
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Hubungi Huda (BUMDES) untuk informasi bisnis dan layanan ekonomi desa
              </p>
            </div>
          </div>

          {/* Map Embed */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15811.073762893584!2d112.27501!3d-7.7997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78577c6f4d1f5f%3A0x5027a76e3556e70!2sBrumbung%2C%20Kepung%2C%20Kediri%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1682500000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Desa Brumbung"
                className="w-full h-full"
              />
            </div>
            <div className="text-center">
              <h4 className="font-serif font-bold text-foreground mb-2">Lokasi Desa Brumbung</h4>
              <p className="text-sm text-muted-foreground">
                Koordinat: 7°47&apos;58.8&quot;S 112°17&apos;20.5&quot;E
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Di lereng Gunung Kelud, Kabupaten Kediri
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
