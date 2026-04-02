import { citiesEnriched, type CityEnrichment } from '@/lib/cities-enriched'
import Link from 'next/link'

interface CityContentProps {
  citySlug: string
}

export function CityContent({ citySlug }: CityContentProps) {
  const city = citiesEnriched[citySlug]
  
  if (!city) return null

  return (
    <div className="space-y-8">
      {/* Section 1: Common Properties & B2B Targeting */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Diagnostic Immobilier à {city.name} : Spécialistes Certifiés</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {city.commonProperties}
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <h3 className="font-semibold mb-2">Adaptés aux Professionnels de l'Immobilier</h3>
          <p className="text-sm text-muted-foreground">
            {city.b2bTarget}
          </p>
        </div>
      </section>

      {/* Section 2: Property Types */}
      <section>
        <h3 className="text-xl font-bold mb-4">Types de Biens à {city.name}</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {city.propertyTypes.map((type) => (
            <li key={type} className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>{type}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 3: 2024-2025 Expertise */}
      <section>
        <h3 className="text-xl font-bold mb-4">Conformité 2024-2025 à {city.name}</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <p className="text-muted-foreground leading-relaxed mb-4">
            {city.expertise}
          </p>
          <div className="space-y-2">
            <p className="font-semibold">Exigences actuelles :</p>
            <p className="text-sm text-muted-foreground">{city.compliance2024}</p>
          </div>
        </div>
      </section>

      {/* Section 4: Internal Links */}
      <section>
        <h3 className="text-xl font-bold mb-4">Services Complémentaires</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {city.internalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block p-4 border border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 transition-colors"
            >
              <p className="text-green-700 font-semibold">{link.text}</p>
              <p className="text-xs text-muted-foreground mt-1">Lien vers service spécialisé</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
