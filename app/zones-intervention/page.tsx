import type { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Zones d'intervention | ENEOS HABITAT — Gironde & Nouvelle-Aquitaine",
  description: "ENEOS HABITAT intervient dans toute la Gironde et Nouvelle-Aquitaine. Diagnostic immobilier à Bordeaux, Mérignac, Arcachon, Libourne et plus de 10 villes."
}

const cities = [
  { name: "Bordeaux", href: "/diagnostic-immobilier-bordeaux" },
  { name: "Mérignac", href: "/diagnostic-immobilier-merignac" },
  { name: "Pessac", href: "/diagnostic-immobilier-pessac" },
  { name: "Arcachon", href: "/diagnostic-immobilier-arcachon" },
  { name: "Libourne", href: "/diagnostic-immobilier-libourne" },
  { name: "Périgueux", href: "/diagnostic-immobilier-perigueux" },
  { name: "Agen", href: "/diagnostic-immobilier-agen" },
  { name: "Dax", href: "/diagnostic-immobilier-dax" },
  { name: "Saintes", href: "/diagnostic-immobilier-saintes" },
  { name: "Langon", href: "/diagnostic-immobilier-langon" },
  { name: "Blaye", href: "/diagnostic-immobilier-blaye" },
  { name: "Mont-de-Marsan", href: "/diagnostic-immobilier-mont-de-marsan" },
]

export default function ZonesInterventionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-[#1a2e35] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-1.jpg"
            alt="Zones d'intervention"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">NOS ZONES D'INTERVENTION</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos zones d'<span className="text-[#2d8a5e]">intervention</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              ENEOS HABITAT couvre un rayon de 100 km autour de Bordeaux, soit toute la Gironde et la Nouvelle-Aquitaine pour vos diagnostics immobiliers.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Avec une couverture géographique exceptionnelle, ENEOS HABITAT vous accompagne dans toute la région Nouvelle-Aquitaine. De Bordeaux à Périgueux, de Libourne à Arcachon, nos experts certifiés interviennent rapidement et professionnellement pour tous vos diagnostics immobiliers.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Que vous vendiez, louviez ou simplifiez besoin d'une étude thermique, nous sommes présents où que vous soyez en Gironde. Contactez-nous pour connaître nos délais d'intervention dans votre commune.
          </p>
        </div>
      </div>

      {/* Cities Grid */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
              Nos villes d'intervention
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Cliquez sur votre ville pour découvrir nos services et tarifs spécifiques
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {cities.map((city) => (
                <Link
                  key={city.href}
                  href={city.href}
                  className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-[#2d8a5e] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#2d8a5e] transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">Voir les services</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#2d8a5e] transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Area Info */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Couverture géographique complète</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#2d8a5e] text-white">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rayon d'intervention de 100 km</h3>
                <p className="text-gray-600">
                  Depuis notre siège de Cadaujac, nous couvrons l'ensemble de la Gironde et ses communes limitrophes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#2d8a5e] text-white">
                  ⚡
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Intervention rapide</h3>
                <p className="text-gray-600">
                  Disponibilité sous 48h dans la plupart des communes pour réaliser vos diagnostics immobiliers.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certification garantie</h3>
                <p className="text-gray-600">
                  Tous nos diagnostiqueurs sont certifiés et assurés pour garantir la validité de vos diagnostics.
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
