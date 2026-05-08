import Link from "next/link"

const quickLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang Desa" },
  { href: "#sejarah", label: "Sejarah" },
  { href: "#budaya", label: "Budaya & Tradisi" },
  { href: "#prestasi", label: "Prestasi" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                <span className="text-foreground font-serif font-bold text-xl">B</span>
              </div>
              <div>
                <p className="font-serif font-bold text-xl">Desa Brumbung</p>
                <p className="text-sm text-background/70">Kec. Kepung, Kab. Kediri</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed max-w-md">
              Desa bersejarah sejak tahun 1128 dengan kekayaan budaya Jawa, alam yang asri, 
              dan masyarakat yang harmonis. Menjadi daerah wisata dan daerah percontohan 
              di Kabupaten Kediri, Jawa Timur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Informasi</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Kecamatan Kepung</li>
              <li>Kabupaten Kediri</li>
              <li>Provinsi Jawa Timur</li>
              <li>Indonesia</li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-background/70">Hari Jadi Desa</p>
              <p className="font-serif font-bold text-lg">30 Juli 1128</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              &copy; {new Date().getFullYear()} Desa Brumbung. Hak cipta dilindungi.
            </p>
            <p className="text-sm text-background/60">
              Website Resmi Pemerintah Desa Brumbung
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
