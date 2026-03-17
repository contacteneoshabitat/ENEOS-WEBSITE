import type { Metadata } from 'next'
import { HeroSection } from "@/components/home/hero-section"
import { QuickQuoteForm } from "@/components/home/quick-quote-form"
import { AboutSection } from "@/components/home/about-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { StatsSection } from "@/components/home/stats-section"
import { CTASection } from "@/components/home/cta-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PartnersSection } from "@/components/home/partners-section"

export const metadata: Metadata = {
  title: "Diagnostic immobilier Bordeaux & Gironde | ENEOS HABITAT",
  description: "ENEOS HABITAT réalise vos diagnostics immobiliers en région bordelaise. DPE, Amiante, Plomb, Électricité, Gaz. Devis gratuit en ligne 24h/24."
}

export default function HomePage() {
  return (
    <>

      {/* Contenu du site */}
      <HeroSection />
      <QuickQuoteForm />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <PartnersSection />
    </>
  )
}
