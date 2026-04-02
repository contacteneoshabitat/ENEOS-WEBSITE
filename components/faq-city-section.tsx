'use client'

import { citiesEnriched } from '@/lib/cities-enriched'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQCitySectionProps {
  citySlug: string
  cityName: string
}

export function FAQCitySection({ citySlug, cityName }: FAQCitySectionProps) {
  const city = citiesEnriched[citySlug]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors text-left"
              >
                <h3 className="font-semibold text-muted-foreground">{item.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
