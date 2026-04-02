import { citiesEnriched } from '@/lib/cities-enriched'
import { ChevronDown } from 'lucide-react'
import FAQAccordion from '@/components/faq-accordion'

interface FAQCitySectionProps {
  citySlug: string
  cityName: string
}

export async function FAQCitySection({ citySlug, cityName }: FAQCitySectionProps) {
  const city = citiesEnriched[citySlug]

  if (!city) return null

  // Generate JSON-LD schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* FAQ Section */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-8">Questions Fréquentes - Diagnostic à {cityName}</h2>
        <div className="space-y-4">
          {city.faq.map((item, index) => (
            <FAQAccordion key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>
    </>
  )
}
