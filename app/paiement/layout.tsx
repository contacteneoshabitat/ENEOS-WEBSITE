import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Paiement | ENEOS HABITAT",
  description: "Paiement sécurisé des diagnostics immobiliers ENEOS HABITAT.",
  alternates: {
    canonical: "https://www.eneoshabitat.fr/paiement"
  },
  robots: { index: false, follow: false }
}

export default function PaiementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
