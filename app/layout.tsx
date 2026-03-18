import React from "react"
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ChatBot } from '@/components/chatbot'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eneoshabitat.fr"),
  title: 'ENEOS HABITAT - Études Thermiques et Diagnostics Immobiliers',
  description: 'ENEOS HABITAT, votre expert en diagnostics immobiliers et études thermiques à Cadaujac. DPE, Amiante, Plomb, Électricité, Gaz, Termites, ERP, Loi Carrez. Devis gratuit en ligne 24h/24.',
  keywords: 'diagnostic immobilier, DPE, amiante, plomb, électricité, gaz, termites, ERP, loi Carrez, Cadaujac, Bordeaux, Gironde',
  authors: [{ name: 'ENEOS HABITAT' }],
  openGraph: {
    siteName: "ENEOS HABITAT",
    locale: "fr_FR",
    type: "website",
    title: 'ENEOS HABITAT - Études Thermiques et Diagnostics Immobiliers',
    description: 'Votre expert en diagnostics immobiliers et études thermiques à Cadaujac',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.eneoshabitat.fr/#business",
    "name": "ENEOS HABITAT",
    "legalName": "ENEOS HABITAT SAS",
    "description": "Cabinet de diagnostics immobiliers certifié en région bordelaise. DPE, Amiante, Plomb, Électricité, Gaz, Termites, ERP, Loi Carrez, Loi Boutin.",
    "url": "https://www.eneoshabitat.fr",
    "logo": "https://www.eneoshabitat.fr/logo.png",
    "image": "https://www.eneoshabitat.fr/images/hero-1.jpeg",
    "telephone": "+33661070891",
    "email": "contact@eneoshabitat.fr",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3466 Avenue de Toulouse",
      "addressLocality": "Cadaujac",
      "postalCode": "33140",
      "addressRegion": "Nouvelle-Aquitaine",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.7712,
      "longitude": -0.5546
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Bordeaux" },
      { "@type": "City", "name": "Mérignac" },
      { "@type": "City", "name": "Pessac" },
      { "@type": "AdministrativeArea", "name": "Gironde" },
      { "@type": "AdministrativeArea", "name": "Nouvelle-Aquitaine" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Diagnostics immobiliers",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DPE - Diagnostic de Performance Énergétique" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diagnostic Amiante" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diagnostic Plomb" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diagnostic Électricité" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diagnostic Gaz" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diagnostic Termites" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ERP - État des Risques et Pollutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Loi Carrez" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Loi Boutin" } }
      ]
    }
  }

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatBot />
        <Analytics />
      </body>
    </html>
  )
}
