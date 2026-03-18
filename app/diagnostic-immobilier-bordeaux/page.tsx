import type { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, MapPin, Clock, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Diagnostic immobilier Bordeaux | ENEOS HABITAT — Gironde",
  description: "ENEOS HABITAT intervient à Bordeaux pour tous vos diagnostics immobiliers obligatoires. DPE, Amiante, Plomb, Électricité, Gaz. Intervention sous 48h. Devis gratuit en ligne."
}

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

export default function BordeauxPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-[#1a2e35] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-1.jpg"
            alt="Bordeaux"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">DIAGNOSTIC À BORDEAUX</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Diagnostic immobilier à <span className="text-[#2d8a5e]">Bordeaux</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              ENEOS HABITAT réalise tous vos diagnostics immobiliers à Bordeaux. Expertise, rapidité et certifications garanties pour vos transactions.
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
            <h2 className="text-3xl font-bold mb-4">Nos services à Bordeaux</h2>
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

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Zone d&apos;intervention</h2>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="text-lg text-muted-foreground mb-4">
                ENEOS HABITAT intervient à <span className="font-semibold text-[#2d8a5e]">Bordeaux</span> et dans toute la <span className="font-semibold text-[#2d8a5e]">Gironde</span>.
              </p>
              <p className="text-muted-foreground mb-4">
                Nous couvrons également les communes alentours comme Mérignac, Pessac, Talence, Gradignan, Saint-Médard-en-Jalles et bien d&apos;autres communes de la métropole bordelaise.
              </p>
              <p className="text-muted-foreground">
                Grâce à notre positionnement stratégique à Cadaujac, nous pouvons intervenir dans les plus brefs délais sur tout le département de la Gironde, y compris dans les zones côtières comme Arcachon ou Libourne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Pourquoi ENEOS HABITAT à Bordeaux</h2>
            <div className="space-y-6">
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
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2d8a5e]/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="h-6 w-6 text-[#2d8a5e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tarifs compétitifs</h3>
                  <p className="text-muted-foreground">Prix transparents, sans frais cachés. Formules adaptées à tous les types de biens.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Le marché immobilier à Bordeaux</h2>
          <div className="max-w-4xl prose prose-lg">
            <p className="text-muted-foreground leading-relaxed">
              Bordeaux est l&apos;une des villes les plus dynamiques de France, avec un marché immobilier en constante évolution. La métropole bordelaise attire de nombreux acquéreurs et investisseurs, tant pour les résidences principales que pour les investissements locatifs. Le parc immobilier bordelais est très diversifié : maisons de prestige du XVIIIe siècle, villas modernes en périphérie, appartements haussmanniens dans le centre-ville, ainsi que des bâtiments contemporains aux normes actuelles. Cette diversité architecturale implique des exigences diagnostiques strictes, notamment concernant l&apos;amiante, le plomb et la performance énergétique. Pour les biens anciens (construction antérieure à 1997), les diagnostics amiante et plomb sont particulièrement critiques. Les appartements en copropriété, très nombreux à Bordeaux, nécessitent un diagnostic de surface Loi Carrez précis. ENEOS HABITAT maîtrise l&apos;ensemble de ces enjeux spécifiques au marché bordelais et accompagne vendeurs et acquéreurs avec sérieux et expertise, en respectant les délais serrés souvent imposés par les transactions urbaines.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2d8a5e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin d&apos;un diagnostic à Bordeaux ?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Obtenez votre devis gratuit en quelques clics et planifiez l&apos;intervention de notre diagnostiqueur certifié.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#2d8a5e] hover:bg-white/90">
              <Link href="/devis">
                Devis gratuit en ligne
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#2d8a5e]">
              <a href="tel:+33661070891">+33 6 61 07 08 91</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
