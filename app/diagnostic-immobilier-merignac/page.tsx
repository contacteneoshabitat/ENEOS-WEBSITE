import type { Metadata } from 'next'
import { CityPageTemplate } from '@/components/city-page-template'

export const metadata: Metadata = {
  title: "Diagnostic immobilier Mérignac | ENEOS HABITAT — Gironde",
  description: "ENEOS HABITAT intervient à Mérignac pour tous vos diagnostics immobiliers obligatoires. DPE, Amiante, Plomb, Électricité, Gaz. Intervention sous 48h. Devis gratuit en ligne.",
  alternates: {
    canonical: "https://www.eneoshabitat.fr/diagnostic-immobilier-merignac"
  }
}

export default function MerignacPage() {
  return (
    <CityPageTemplate
      cityName="Mérignac"
      citySlug="merignac"
      metaDescription="ENEOS HABITAT intervient à Mérignac pour tous vos diagnostics immobiliers obligatoires."
    />
  )
}
