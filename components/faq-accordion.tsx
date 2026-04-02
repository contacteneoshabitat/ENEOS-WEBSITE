'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQAccordionProps {
  question: string
  answer: string
}

export default function FAQAccordion({ question, answer }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <h3 className="font-semibold text-muted-foreground">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white border-t border-gray-200">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
