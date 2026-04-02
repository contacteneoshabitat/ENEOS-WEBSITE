import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Award, CheckCircle } from "lucide-react"
import { CityContent } from "@/components/city-content"
import { FAQCitySection } from "@/components/faq-city-section"

interface CityPageTemplateProps {
  cityName: string
  citySlug: string
  metaDescription: string
}

export function CityPageTemplate({
  cityName,
  citySlug,
  metaDescription
}: CityPageTemplateProps) {
  const services = [
    { title: "DPE", href: "/services/dpe" },
    { title: "Amiante", href: "/services/amiante" },
    { title: "Plomb", href: "/services/plomb" },
    { title: "Électricité", href: "/services/electricite" },
    { title: "Gaz", href: "/services/gaz" },
    { title: "Termites", href: "/services/termites" },
    { title: "ERP", href: "/services/erp" },
    { title: "Loi Carrez", href: "/services/carrez" },
    { title: "Loi Boutin", href: "/services/boutin" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-[#1a2e35] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-1.jpg"
            alt={cityName}
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">DIAGNOSTIC À {cityName.toUpperCase()}</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Diagnostic immobilier à <span className="text-[#2d8a5e]">{cityName}</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              ENEOS HABITAT réalise tous vos diagnostics immobiliers à {cityName}. Expertise, rapidité et certifications garanties pour vos transactions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#2d8a5e] hover:bg-[#238a50] text-white">
                <Link href="/devis">
                  Obtenir mon devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#1a2e35]">
                <a href="tel:+33661070891">Appeler maintenant</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos services à {cityName}</h2>
            <p className="text-muted-foreground text-lg">
              Tous les diagnostics immobiliers obligatoires et recommandés pour vos projets immobiliers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border border-gray-100 hover:border-[#2d8a5e]"
              >
                <h3 className="font-semibold text-lg mb-2 group-hover:text-[#2d8a5e] transition-colors">
                  {service.title}
                </h3>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#2d8a5e] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Pourquoi choisir ENEOS HABITAT ?</h2>
            <div className="bg-white p-8 rounded-xl border border-gray-200 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2d8a5e]/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="h-6 w-6 text-[#2d8a5e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Expertise locale</h3>
                  <p className="text-muted-foreground">Connaissance approfondie du marché immobilier à {cityName} et ses spécificités.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2d8a5e]/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-[#2d8a5e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Rapidité garantie</h3>
                  <p className="text-muted-foreground">Intervention sous 48h maximum. Devis gratuit en ligne 24h/24, 7j/7.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2d8a5e]/10 rounded-full flex items-center justify-center shrink-0">
                  <Award className="h-6 w-6 text-[#2d8a5e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Certification & expertise</h3>
                  <p className="text-muted-foreground">Diagnostiqueur certifié avec assurance décennale. Respect strict des normes en vigueur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enriched Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CityContent citySlug={citySlug} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FAQCitySection citySlug={citySlug} cityName={cityName} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2d8a5e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin d&apos;un diagnostic à {cityName} ?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Obtenez votre devis gratuit en quelques clics. ENEOS HABITAT garantit une intervention sous 48h dans toute la région.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#2d8a5e] hover:bg-gray-100">
              <Link href="/devis">Devis gratuit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+33661070891">Nous appeler</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
