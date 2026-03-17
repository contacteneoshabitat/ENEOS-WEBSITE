import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Devis gratuit diagnostic immobilier | ENEOS HABITAT Bordeaux",
  description: "Obtenez votre devis de diagnostic immobilier en ligne en quelques clics. Disponible 24h/24. ENEOS HABITAT intervient dans toute la Gironde."
}

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
