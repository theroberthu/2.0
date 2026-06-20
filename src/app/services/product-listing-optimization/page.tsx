import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Product Listing Optimization & GEO',
  description:
    'Product listing optimization for Amazon and Walmart sellers - SEO, A+ Content, image stacks, and Generative Engine Optimization (GEO) for AI-powered search.',
  alternates: { canonical: '/services/product-listing-optimization' },
  openGraph: {
    title: 'Product Listing Optimization & GEO | Robert Hu - E-commerce Strategist',
    description:
      'Product listing optimization for Amazon and Walmart sellers - SEO, A+ Content, image stacks, and Generative Engine Optimization (GEO) for AI-powered search.',
    url: `${SITE_URL}/services/product-listing-optimization`,
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Product Listing Optimization & GEO',
  serviceType: 'Product Listing Optimization',
  description:
    'Full listing audits covering keyword strategy, A+ Content, image stacks, and Generative Engine Optimization (GEO) for AI-powered product discovery.',
  provider: {
    '@type': 'Person',
    name: 'Robert Hu',
    url: `${SITE_URL}/about`,
  },
  areaServed: 'US',
  url: `${SITE_URL}/services/product-listing-optimization`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Generative Engine Optimization (GEO)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generative Engine Optimization (GEO) is the practice of optimizing your product content so it gets recommended by AI-powered search and shopping tools like ChatGPT, Perplexity, Google AI Overviews, Amazon Rufus, and Walmart Sparky. Traditional SEO focuses on keyword matching for search algorithms. GEO focuses on making your content the kind that AI engines cite, reference, and recommend when shoppers ask questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is listing optimization different from what my agency already does?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most agencies optimize listings in isolation, treating each one as a standalone project. I approach listing optimization as part of your broader catalog and channel strategy. That means I consider how your listings work together, how they perform across different platforms, and how they need to evolve as AI-powered discovery changes how shoppers find products.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you optimize listings for Walmart, or just Amazon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I optimize for both Amazon and Walmart, and the distinction matters. What works on Amazon does not copy and paste to Walmart. The search algorithms, content requirements, and customer expectations are different on each platform. I build platform-specific listing strategies that account for these differences.',
      },
    },
  ],
}

export default function ProductListingOptimizationPage() {
  return (
    <>
      <SchemaMarkup data={serviceSchema} />
      <SchemaMarkup data={faqSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f7f9fb 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-400 hover:text-brand-accent transition-colors duration-200 mb-6">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">Optimization</span>
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight mb-4">
            Product Listing Optimization & GEO
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
            Your listings need to convert shoppers AND get recommended by AI. I make sure they do both.
          </p>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">What I Do</h2>
          </div>
          <div className="pl-12">
            <p className="text-[15px] text-gray-400 leading-relaxed mb-8">
              I optimize product listings so they rank, convert, and get recommended by AI engines. Every element of your listing works together as a system, and I treat it that way. Here&apos;s what that covers:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Full Listing Audits</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  A complete review of your titles, bullets, descriptions, A+ Content, images, and backend search terms. I identify what&apos;s working, what&apos;s costing you conversions, and what&apos;s invisible to the algorithm. Most brands have listings that were &quot;good enough&quot; two years ago but are underperforming against competitors who have optimized recently.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Keyword Strategy and Indexing</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Keyword research that goes beyond search volume. I map keywords to purchase intent, identify gaps where you&apos;re not indexed, and build a keyword architecture that covers your entire catalog without cannibalization. Your title, bullets, backend terms, and A+ Content all have specific roles in your keyword strategy.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">A+ Content and Enhanced Brand Content</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  A+ Content is one of the highest-leverage conversion tools on Amazon, and most brands waste it on feature lists they already covered in their bullets. I build A+ Content strategies that address objections, differentiate from competitors, and tell a brand story that moves shoppers from browsing to buying.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Image Stack Optimization</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Your main image determines click-through rate. Your secondary images determine conversion rate. I evaluate your full image stack for clarity, information hierarchy, and mobile readability. This includes infographics, lifestyle images, size/scale references, and comparison charts that answer the questions shoppers have before they ask them.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Generative Engine Optimization (GEO)</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  AI-powered shopping tools like ChatGPT, Perplexity, Google AI Overviews, Amazon Rufus, and Walmart Sparky are changing how shoppers discover products. GEO ensures your listings contain the kind of structured, authoritative content that AI engines cite and recommend. This is not a future problem. Shoppers are using these tools right now, and the brands that optimize for them are capturing traffic that everyone else is missing.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Backend and Technical Optimization</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Search terms, subject matter fields, item type keywords, and catalog attributes that most sellers never touch. These backend fields directly affect your search visibility and category placement. I audit and optimize every technical field to make sure the algorithm has every reason to show your listing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">Who It&apos;s For</h2>
          </div>
          <div className="text-[15px] text-gray-400 leading-relaxed pl-12 space-y-4">
            <p>
              You&apos;re an Amazon or Walmart seller whose listings were set up once and haven&apos;t been seriously optimized since. Your products are good, but your conversion rate doesn&apos;t reflect that. You&apos;re watching competitors with worse products outrank you because their listings do a better job of communicating value.
            </p>
            <p>
              Maybe you&apos;ve tried a listing optimization service that gave you keyword-stuffed titles and generic bullets. Or you&apos;ve been doing it yourself based on YouTube tutorials that were outdated before you watched them. Either way, you know your listings could be performing better but aren&apos;t sure what &quot;better&quot; actually looks like.
            </p>
            <p>
              You also might not be thinking about AI-powered search yet, and that&apos;s exactly why you should be. Shoppers are already using ChatGPT, Perplexity, and platform AI tools like Rufus to find products. If your listings aren&apos;t optimized for these engines, you&apos;re invisible to a growing segment of buyers.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">How It Works</h2>
          </div>
          <div className="pl-12 space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-mono font-bold text-brand-accent/60 tracking-widest mt-1">01</span>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Audit</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  I review your top listings across every element: titles, bullets, descriptions, A+ Content, images, backend terms, and competitive positioning. I also assess your GEO readiness by testing how your products appear (or don&apos;t appear) in AI-powered search results.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-mono font-bold text-brand-accent/60 tracking-widest mt-1">02</span>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Optimize</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  I build optimized listing content that balances keyword coverage, conversion copy, and GEO-readiness. Every recommendation is specific and prioritized so you know what to implement first for the biggest impact. I provide the strategy and the content, not just a list of suggestions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-mono font-bold text-brand-accent/60 tracking-widest mt-1">03</span>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Monitor</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Optimization isn&apos;t a one-time event. I help you track ranking changes, conversion rate improvements, and GEO visibility over time. If something isn&apos;t working, we adjust. If a competitor changes their approach, we respond. The goal is sustained performance, not a temporary boost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">What You Walk Away With</h2>
          </div>
          <div className="text-[15px] text-gray-400 leading-relaxed pl-12 space-y-4">
            <p>
              Optimized listing content that&apos;s ready to upload, not a report telling you what to fix. You get rewritten titles, bullets, A+ Content briefs, image stack recommendations, backend search terms, and a keyword map that covers your full catalog.
            </p>
            <p>
              You also get a GEO assessment showing where your products currently stand in AI-powered search results and specific recommendations for improving your visibility. This is the piece most listing optimization services miss entirely, and it&apos;s becoming more important every quarter.
            </p>
          </div>
        </div>
      </section>

      {/* The GEO Difference */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">The GEO Difference</h2>
          </div>
          <div className="text-[15px] text-gray-400 leading-relaxed pl-12 space-y-4">
            <p>
              Traditional listing optimization focuses on keyword matching: get the right terms in the right places so the algorithm shows your product when someone searches. That still matters. But it&apos;s no longer enough.
            </p>
            <p>
              AI-powered shopping tools don&apos;t just match keywords. They read, interpret, and recommend products based on how well your content answers a shopper&apos;s question. When someone asks ChatGPT &quot;What&apos;s the best travel backpack under $100?&quot; or uses Amazon Rufus to compare products, the AI is looking for structured, authoritative, specific content. Listings that read like keyword soup get ignored. Listings that communicate clear value and expertise get cited.
            </p>
            <p>
              I optimize your listings for both worlds: the traditional algorithm that drives most of today&apos;s traffic, and the AI engines that are driving an increasing share of tomorrow&apos;s. That dual approach is what separates a listing that ranks from a listing that gets recommended.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-deep py-20 md:py-28">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white leading-snug mb-4 tracking-tight">
            Let&apos;s Optimize Your Listings
          </h2>
          <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
            15 minutes. No pitch. Just honest strategy for your brand.
          </p>
          <a
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-gold text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Subscribe to Hu&apos;s Weekly Hoot
          </a>
        </div>
      </section>
    </>
  )
}
