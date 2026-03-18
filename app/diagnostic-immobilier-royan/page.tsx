import type { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, MapPin, Clock, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Diagnostic immobilier Royan | ENEOS HABITAT — Gironde",
  description: "ENEOS HABITAT intervient à Royan pour tous vos diagnostics immobiliers obligatoires. DPE, Amiante, Plomb, Électricité, Gaz. Intervention sous 48h. Devis gratuit en ligne."
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

export default function RoyanPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-[#1a2e35] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-1.jpg"
            alt="Royan"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">DIAGNOSTIC À ROYAN</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Diagnostic immobilier à <span className="text-[#2d8a5e]">Royan</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              ENEOS HABITAT réalise tous vos diagnostics immobiliers à Royan. Expertise, rapidité et certifications garanties pour vos transactions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#2d8a5e] hover:bg-[#238a50] text-white">
                <Link href="/devis">Obtenir un devis</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/zones-intervention">Nos zones</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Nos services à Royan
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez l'ensemble de nos diagnostics immobiliers obligatoires et complémentaires
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group p-6 border border-gray-200 rounded-lg hover:border-[#2d8a5e] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-[#2d8a5e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#2d8a5e] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">En savoir plus</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Service Area */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Zone d'intervention à Royan</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            ENEOS HABITAT intervient à Royan et dans les communes alentour : Vaux-sur-Mer, Médis, Chenac-Saint-Seurin-d'Uzet, Semussac et tous les secteurs de la côte Atlantique.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-[#2d8a5e]" />
                <h3 className="font-semibold text-gray-900">Intervention rapide</h3>
              </div>
              <p className="text-sm text-gray-600">
                Disponibilité sous 48h pour tous vos diagnostics immobiliers à Royan.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-[#2d8a5e]" />
                <h3 className="font-semibold text-gray-900">Certifiés et assurés</h3>
              </div>
              <p className="text-sm text-gray-600">
                Tous nos diagnostiqueurs sont certifiés et assurés pour garantir la validité légale.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-[#2d8a5e]" />
                <h3 className="font-semibold text-gray-900">Tarifs compétitifs</h3>
              </div>
              <p className="text-sm text-gray-600">
                Diagnostics immobiliers à Royan au meilleur prix, sans frais cachés.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Pourquoi ENEOS HABITAT à Royan</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#2d8a5e] text-white">
                  ⚡
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapidité exceptionnelle</h3>
                <p className="text-gray-600">
                  Devis en ligne gratuit, réponse en quelques heures, intervention sous 48h. Pas de délai d'attente.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#2d8a5e] text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certification complète</h3>
                <p className="text-gray-600">
                  Nos diagnostiqueurs respectent les normes AFNOR les plus strictes. Tous vos diagnostics sont légalement valides.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#2d8a5e] text-white">
                  €
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tarifs transparents</h3>
                <p className="text-gray-600">
                  Aucun frais cachés. Prix fixes, compétitifs et alignés avec le marché de la région.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-[#2d8a5e] text-white py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à démarrer ?</h2>
          <p className="text-xl mb-8 text-white/90">
            Obtenez votre devis gratuit en quelques minutes. Intervention sous 48h.
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-[#2d8a5e]">
            <Link href="/devis">
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
