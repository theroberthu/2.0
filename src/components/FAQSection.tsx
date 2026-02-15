'use client'

import { useState } from 'react'
import SchemaMarkup from './SchemaMarkup'

interface FAQItem {
  q: string
  a: string
}

export default function FAQSection({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <div>
      <SchemaMarkup data={faqSchema} />
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className={`border rounded-lg transition-all duration-200 ${
              openIndex === i
                ? 'border-brand-accent/30 bg-white/[0.08]'
                : 'border-white/[0.08] bg-white/[0.05] hover:border-white/[0.12]'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
            >
              <span className="text-[15px] font-medium text-white leading-snug">
                {item.q}
              </span>
              <svg
                className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-5">
                <p className="text-sm text-gray-400 leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
