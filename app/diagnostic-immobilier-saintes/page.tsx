import type { Metadata } from 'next'
import { CityPageTemplate } from '@/components/city-page-template'

export const metadata: Metadata = {
  title: "Diagnostic immobilier Saintes | ENEOS HABITAT — Gironde",
  description: "ENEOS HABITAT intervient à Saintes pour tous vos diagnostics immobiliers obligatoires. DPE, Amiante, Plomb, Électricité, Gaz. Intervention sous 48h. Devis gratuit en ligne.",
  alternates: {
    canonical: "https://www.eneoshabitat.fr/diagnostic-immobilier-saintes"
  }
}

export default function SaintesPage() {
  return (
    <CityPageTemplate
      cityName="Saintes"
      citySlug="saintes"
      metaDescription="ENEOS HABITAT intervient à Saintes pour tous vos diagnostics immobiliers obligatoires."
    />
  )
}
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Diagnostic immobilier à <span className="text-emerald-600">Saintes</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ENEOS HABITAT, votre expert certifié pour tous vos diagnostics immobiliers à Saintes et en Charente-Maritime
            </p>
            <Link href="/devis">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Obtenir un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos services à Saintes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "DPE", link: "/services/dpe" },
              { title: "Diagnostic Amiante", link: "/services/amiante" },
              { title: "Diagnostic Plomb", link: "/services/plomb" },
              { title: "Diagnostic Électricité", link: "/services/electricite" },
              { title: "Diagnostic Gaz", link: "/services/gaz" },
              { title: "Diagnostic Termites", link: "/services/termites" },
              { title: "ERP", link: "/services/erp" },
              { title: "Loi Carrez", link: "/services/carrez" },
              { title: "Loi Boutin", link: "/services/boutin" },
            ].map((service) => (
              <Link key={service.title} href={service.link}>
                <div className="p-6 border border-slate-200 rounded-lg hover:border-emerald-600 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Zone d'intervention à Saintes</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Saintes et communes voisines</h3>
                <p className="text-foreground leading-relaxed">
                  ENEOS HABITAT intervient régulièrement à Saintes, ville d'art et d'histoire en Charente-Maritime. Nous couvrons aussi les communes proches : Saint-Césaire, Cognac, Barbezieux-Saint-Hilaire, Burie, Balanzac, Archingeay, et bien d'autres.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Région Nouvelle-Aquitaine</h3>
                <p className="text-foreground leading-relaxed">
                  Basés en Gironde à Cadaujac, nous intervenons aussi en Charente-Maritime pour vous offrir une couverture large. Nos diagnostiqueurs sont certifiés et reconnus pour leur expertise sur tout le territoire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Pourquoi ENEOS HABITAT à Saintes ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-emerald-600">⚡</span>
              </div>
              <h3 className="text-xl font-semibold">Rapidité</h3>
              <p className="text-muted-foreground">Intervention sous 24 à 48h. Devis immédiat en ligne.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-emerald-600">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Certification</h3>
              <p className="text-muted-foreground">Diagnostiqueurs certifiés et assurés. Rapports conformes aux normes.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-emerald-600">€</span>
              </div>
              <h3 className="text-xl font-semibold">Tarifs compétitifs</h3>
              <p className="text-muted-foreground">Les meilleurs prix sans compromis sur la qualité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Le marché immobilier à Saintes</h2>
          <div className="max-w-4xl prose prose-lg">
            <p className="text-muted-foreground leading-relaxed">
              Saintes est un centre historique important de Charente-Maritime, riche en patrimoine antique et médiéval. Le marché immobilier saintongeais allie bâtiments classés au prestige rare avec propriétés modernes en zone périphérique. Les acquisitions ciblent residences principales, investissements locatifs touristiques, et propriétés agricoles. L&apos;importance du patrimoine ancien requiert diagnostics amiante et plomb rigoureux sur de nombreux biens. La proximity avec côtes tourisme génère demande résidentielle secondaire stable. Les enjeux énergétiques croissants imposent évaluations DPE precises. ENEOS HABITAT intervient régulièrement à Saintes, maîtrisant les spécificités immobilières de cette région historique majeure.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Vous avez un bien à diagnostiquer à Saintes ?
          </h2>
          <p className="text-xl text-emerald-100">
            Obtenez votre devis gratuit maintenant. ENEOS HABITAT répond en moins de 24h.
          </p>
          <Link href="/devis">
            <Button size="lg" variant="secondary" className="bg-white hover:bg-slate-100">
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
