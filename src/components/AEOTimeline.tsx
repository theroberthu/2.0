'use client'

import { useState } from 'react'

interface Milestone {
  year: string
  title: string
  description: string
  era: 'seo' | 'geo' | 'aeo'
  projected?: boolean
  current?: boolean
}

const MILESTONES: Milestone[] = [
  // SEO ERA
  {
    year: '2002',
    title: 'Google Launches Froogle',
    description:
      'Free product comparison search begins. For the first time, product data is being crawled and indexed alongside web content.',
    era: 'seo',
  },
  {
    year: '2003',
    title: 'Google Florida Update',
    description:
      'The first major algorithm update cracks down on keyword stuffing. SEO stops being a trick and starts becoming a discipline.',
    era: 'seo',
  },
  {
    year: '2005',
    title: 'Amazon Prime & XML Sitemaps',
    description:
      'Two-day shipping redefines consumer expectations. XML Sitemaps launch, letting webmasters tell Google what to crawl.',
    era: 'seo',
  },
  {
    year: '2006',
    title: 'Amazon Launches FBA',
    description:
      'Third-party sellers get access to Amazon\'s logistics network. The marketplace flywheel accelerates. By this point, Amazon Marketplace has tens of thousands of active sellers.',
    era: 'seo',
  },
  {
    year: '2007',
    title: 'Google Universal Search',
    description:
      'Product results, images, videos, and news all appear in one SERP. The "10 blue links" era starts dying.',
    era: 'seo',
  },
  {
    year: '2011',
    title: 'Google Panda Update',
    description:
      'Thin content gets crushed. Quality content becomes a ranking factor, not just keywords.',
    era: 'seo',
  },
  {
    year: '2012',
    title: 'Penguin, PLAs & Sponsored Products',
    description:
      'Google Penguin targets spammy backlinks. Google Shopping shifts to pay-to-play. Amazon launches Sponsored Products. Paid visibility becomes essential on both platforms.',
    era: 'seo',
  },
  {
    year: '2013',
    title: 'Google Hummingbird',
    description:
      'Search begins understanding intent, not just keywords. Conversational queries start mattering.',
    era: 'seo',
  },
  {
    year: '2015',
    title: 'Mobilegeddon & RankBrain',
    description:
      'Mobile-first indexing arrives. RankBrain introduces machine learning to search. The algorithm starts learning.',
    era: 'seo',
  },
  {
    year: '2019',
    title: 'Google BERT Update',
    description:
      'Natural language understanding takes a leap. Google starts understanding context and nuance at a much deeper level. Google Shopping relaunches with personalization.',
    era: 'seo',
  },
  // GEO ERA
  {
    year: '2022',
    title: 'ChatGPT Launches',
    description:
      'Consumers start asking AI for product recommendations instead of searching Google. The shift from search to conversation begins.',
    era: 'geo',
  },
  {
    year: '2023',
    title: 'AI Overviews, Perplexity & Rufus',
    description:
      'Google launches AI Overviews. Perplexity emerges as an AI-native search engine. Amazon launches Rufus, an AI shopping assistant inside the Amazon app.',
    era: 'geo',
  },
  {
    year: '2024',
    title: 'GEO Becomes a Discipline',
    description:
      'AI Overviews roll out broadly. Brands start losing organic traffic to AI-generated answers. ChatGPT adds product recommendations with structured comparisons.',
    era: 'geo',
  },
  {
    year: '2025',
    title: 'GEO Is Now Essential',
    description:
      'Brands that optimized for AI readability are getting cited and recommended. Those that didn\'t are watching traffic decline without understanding why. Perplexity launches shopping with direct purchase.',
    era: 'geo',
  },
  // AEO ERA
  {
    year: '2025/26',
    title: 'The Agentic Inflection Point',
    description:
      'OpenAI Operator launches. Google announces agentic shopping. Perplexity Shopping goes live. The first generation of AI shopping agents enters the market.',
    era: 'aeo',
    current: true,
  },
  {
    year: '2026/27',
    title: 'Agent Shopping Gains Volume',
    description:
      'Agent-mediated shopping grows from novelty to meaningful channel. Early adopter brands with strong structured data start seeing agent-driven purchases. Brands reliant on paid ads begin feeling the gap.',
    era: 'aeo',
    projected: true,
  },
  {
    year: '2028+',
    title: 'Agentic Commerce Is Standard',
    description:
      'Agentic commerce becomes a standard channel alongside search, social, and marketplace. Brands without AEO optimization are structurally disadvantaged.',
    era: 'aeo',
    projected: true,
  },
]

const ERA_CONFIG = {
  seo: {
    label: 'The SEO Era // Get Found',
    color: 'text-gray-400',
    dotColor: 'bg-gray-500',
    borderColor: 'border-gray-500/30',
    bgActive: 'bg-gray-500/[0.08]',
  },
  geo: {
    label: 'The GEO Era // Get Recommended',
    color: 'text-brand-accent',
    dotColor: 'bg-brand-accent',
    borderColor: 'border-brand-accent/30',
    bgActive: 'bg-brand-accent/[0.08]',
  },
  aeo: {
    label: 'The AEO Era // Get Purchased',
    color: 'text-brand-gold',
    dotColor: 'bg-brand-gold',
    borderColor: 'border-brand-gold/30',
    bgActive: 'bg-brand-gold/[0.08]',
  },
}

export default function AEOTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(
    // Default to the "current" milestone
    MILESTONES.findIndex((m) => m.current)
  )

  let currentEra: string | null = null

  return (
    <div className="max-w-3xl mx-auto">
      {MILESTONES.map((milestone, i) => {
        const config = ERA_CONFIG[milestone.era]
        const isExpanded = expandedIndex === i
        const showEraLabel = milestone.era !== currentEra
        if (showEraLabel) currentEra = milestone.era

        return (
          <div key={i}>
            {/* Era label */}
            {showEraLabel && (
              <div className="flex items-center gap-3 mb-6 mt-8 first:mt-0">
                <div className={`w-2 h-2 rounded-full ${config.dotColor}`} />
                <span
                  className={`text-[11px] font-mono font-bold uppercase tracking-[0.15em] ${config.color}`}
                >
                  {config.label}
                </span>
              </div>
            )}

            {/* Milestone node */}
            <div className="relative pl-8 pb-6 last:pb-0">
              {/* Vertical line */}
              {i < MILESTONES.length - 1 && (
                <div
                  className={`absolute left-[7px] top-3 bottom-0 w-px ${
                    milestone.projected
                      ? 'border-l border-dashed border-brand-gold/30'
                      : milestone.era === 'aeo'
                      ? 'bg-brand-gold/20'
                      : milestone.era === 'geo'
                      ? 'bg-brand-accent/20'
                      : 'bg-gray-600/30'
                  }`}
                />
              )}

              {/* Dot */}
              <div className="absolute left-0 top-2.5">
                {milestone.current ? (
                  <span className="relative flex h-[15px] w-[15px]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-50" />
                    <span className="relative inline-flex rounded-full h-[15px] w-[15px] bg-brand-gold border-2 border-brand-dark" />
                  </span>
                ) : (
                  <div
                    className={`w-[15px] h-[15px] rounded-full border-2 border-brand-dark ${
                      milestone.projected
                        ? 'bg-transparent border-brand-gold/40 border-dashed'
                        : config.dotColor
                    }`}
                    style={
                      milestone.projected
                        ? { borderStyle: 'dashed' }
                        : undefined
                    }
                  />
                )}
              </div>

              {/* Content */}
              <button
                onClick={() =>
                  setExpandedIndex(isExpanded ? null : i)
                }
                className={`w-full text-left rounded-lg px-4 py-3 transition-all duration-200 ${
                  isExpanded
                    ? `${config.bgActive} border ${config.borderColor}`
                    : 'hover:bg-white/[0.03]'
                } ${milestone.projected ? 'opacity-75' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[12px] font-mono font-bold tracking-wide shrink-0 ${
                      milestone.current
                        ? 'text-brand-gold'
                        : milestone.projected
                        ? 'text-brand-gold/50'
                        : config.color
                    }`}
                  >
                    {milestone.year}
                  </span>
                  <span
                    className={`text-[14px] font-semibold ${
                      milestone.current
                        ? 'text-white'
                        : milestone.projected
                        ? 'text-gray-400'
                        : 'text-gray-300'
                    }`}
                  >
                    {milestone.title}
                  </span>
                  {milestone.current && (
                    <span className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-brand-gold bg-brand-gold/[0.15] px-2 py-0.5 rounded-full shrink-0">
                      You Are Here
                    </span>
                  )}
                  {milestone.projected && (
                    <span className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-gray-500 bg-gray-500/[0.1] px-2 py-0.5 rounded-full shrink-0">
                      Projected
                    </span>
                  )}
                </div>

                {isExpanded && (
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {milestone.description}
                  </p>
                )}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
