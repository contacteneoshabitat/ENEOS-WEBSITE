import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact | ENEOS HABITAT — Diagnostics immobiliers Bordeaux",
  description: "Contactez ENEOS HABITAT pour vos diagnostics immobiliers en Gironde. Réponse rapide, devis gratuit, intervention sous 48h."
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
