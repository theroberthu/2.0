import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Generative Engine Optimization (GEO) for E-commerce',
  description:
    'AI is changing how consumers find products. GEO helps your listings and content show up in ChatGPT, Perplexity, Google AI Overviews, and Amazon Rufus. Get a GEO audit.',
  alternates: { canonical: '/geo' },
  openGraph: {
    title: 'Generative Engine Optimization (GEO) for E-commerce | Robert Hu',
    description:
      'AI is changing how consumers find products. GEO helps your listings and content show up in ChatGPT, Perplexity, Google AI Overviews, and Amazon Rufus. Get a GEO audit.',
    url: `${SITE_URL}/geo`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@theroberthu',
    creator: '@theroberthu',
    title: 'Generative Engine Optimization (GEO) for E-commerce | Robert Hu',
    description:
      'AI is changing how consumers find products. GEO helps your listings and content show up in ChatGPT, Perplexity, Google AI Overviews, and Amazon Rufus.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Generative Engine Optimization for E-commerce',
  description:
    'AI is changing how consumers find products. GEO helps your listings and content show up in ChatGPT, Perplexity, Google AI Overviews, and Amazon Rufus.',
  author: {
    '@type': 'Person',
    name: 'Robert Hu',
    url: `${SITE_URL}/about`,
    jobTitle: 'E-commerce Strategist & Digital Transformation Consultant',
    sameAs: [
      'https://www.linkedin.com/in/theroberthu',
      'https://x.com/theroberthu',
    ],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Robert Hu',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/theroberthulogo.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/geo`,
  },
  url: `${SITE_URL}/geo`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is GEO replacing SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. GEO builds on top of SEO. You still need traditional optimization, but you also need to optimize for AI-generated results.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need GEO if I only sell on Amazon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Amazon Rufus is already using AI to recommend products. How your listings are structured affects whether Rufus surfaces your products.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my products are showing up in AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Search for your product category in ChatGPT, Perplexity, and Google AI Overviews. If your brand isn\'t mentioned, you have a GEO gap.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does GEO take to show results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It varies. Some structural changes have immediate impact on how AI engines read your content. Broader authority building takes 3-6 months.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between GEO and AEO (Answer Engine Optimization)?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "They're closely related. AEO focuses on featured snippets and voice search. GEO is broader, covering all AI-generated results including shopping recommendations and conversational AI.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do GEO myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic steps yes. But a strategic GEO audit requires understanding how multiple AI engines process and prioritize content, which is where working with a specialist helps.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'GEO',
      item: `${SITE_URL}/geo`,
    },
  ],
}

const GEO_FRAMEWORK = [
  {
    step: '01',
    title: 'Listing Audit for AI Readability',
    description:
      'Evaluate how your product listings, descriptions, and content are structured for AI extraction. Most listings are built for humans scanning a page, not for AI engines parsing your content for recommendations.',
  },
  {
    step: '02',
    title: 'Entity Optimization',
    description:
      'Make sure your brand, products, and key attributes are clearly defined so AI engines can identify and recommend them. If an AI engine can\'t figure out what you sell and why it matters, it won\'t mention you.',
  },
  {
    step: '03',
    title: 'Content Strategy for AI Discovery',
    description:
      'Create content that answers the questions AI tools are pulling from: buying guides, comparison content, FAQ-rich pages. This is the content layer that feeds AI engines useful information about your category.',
  },
  {
    step: '04',
    title: 'Technical Markup',
    description:
      'Implement structured data (schema.org) that helps AI engines understand your products and content. Proper markup is the difference between being parsed correctly and being ignored.',
  },
  {
    step: '05',
    title: 'Monitoring & Iteration',
    description:
      'Track how your brand appears in AI-generated results and adjust. GEO isn\'t set-and-forget. AI engines evolve, and your optimization needs to evolve with them.',
  },
]

const SEO_VS_GEO = [
  {
    label: 'SEO',
    points: [
      'Optimizes for keyword matching and link authority',
      'Gets you ranked in a list of 10 blue links',
      'Measured by rankings, impressions, and clicks',
      'Established playbook, well-understood tactics',
    ],
  },
  {
    label: 'GEO',
    points: [
      'Optimizes for AI readability, entity recognition, and cite-worthy content',
      'Gets you mentioned in a direct AI-generated answer',
      'Measured by brand mentions, citations, and AI-driven referrals',
      'Emerging discipline, early movers have a significant edge',
    ],
  },
]

const EXAMPLES = [
  {
    title: 'Amazon Listing: Optimized vs. Not',
    before: 'A standard listing with keyword-stuffed bullet points and generic descriptions. Amazon Rufus can\'t extract meaningful product attributes or differentiate it from competitors.',
    after: 'A structured listing with clear attribute definitions, specific use cases, and comparison-ready language. Rufus can confidently recommend it when a customer asks "What\'s the best X for Y?"',
  },
  {
    title: 'Product Page: ChatGPT Visibility',
    before: 'A product page with vague marketing copy and no structured data. When someone asks ChatGPT for recommendations in your category, your brand doesn\'t exist.',
    after: 'A product page with clear value propositions, FAQ content, and proper schema markup. ChatGPT can extract and cite your product as a recommendation with confidence.',
  },
  {
    title: 'Content Strategy: Feeding AI Engines',
    before: 'Blog posts written for SEO keyword density with thin content and no original insights. AI engines have nothing useful to cite or reference.',
    after: 'In-depth buying guides, comparison content, and original research that AI engines can pull from when generating answers about your product category.',
  },
]

const FAQS = [
  {
    q: 'Is GEO replacing SEO?',
    a: 'No. GEO builds on top of SEO. You still need traditional optimization, but you also need to optimize for AI-generated results. Think of GEO as the next layer, not a replacement.',
  },
  {
    q: 'Do I need GEO if I only sell on Amazon?',
    a: 'Yes. Amazon Rufus is already using AI to recommend products. How your listings are structured affects whether Rufus surfaces your products when shoppers ask questions. GEO applies everywhere AI is making recommendations.',
  },
  {
    q: 'How do I know if my products are showing up in AI search?',
    a: 'Search for your product category in ChatGPT, Perplexity, and Google AI Overviews. If your brand isn\'t mentioned, you have a GEO gap. This is the simplest diagnostic you can run today.',
  },
  {
    q: 'How long does GEO take to show results?',
    a: 'It varies. Some structural changes (like adding proper schema markup) have immediate impact on how AI engines read your content. Broader authority building, like becoming a cited source in your category, takes 3-6 months.',
  },
  {
    q: "What's the difference between GEO and AEO (Answer Engine Optimization)?",
    a: "They're closely related. AEO focuses on featured snippets and voice search. GEO is broader. It covers all AI-generated results, including shopping recommendations, conversational AI, and AI-powered product discovery tools.",
  },
  {
    q: 'Can I do GEO myself?',
    a: 'The basics, yes. You can audit your own listings in AI search tools and add structured data. But a strategic GEO audit requires understanding how multiple AI engines process and prioritize content, which is where working with a specialist helps.',
  },
]

export default function GEOPage() {
  return (
    <>
      <SchemaMarkup data={articleSchema} />
      <SchemaMarkup data={faqSchema} />
      <SchemaMarkup data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4">Pillar Resource</span>
          <h1 className="text-3xl md:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-5">
            Generative Engine Optimization for E-commerce
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Your products need to show up in AI-powered search, not just Google. Here&apos;s how.
          </p>
          <Link
            href="/geo-audit"
            className="inline-block bg-brand-accent text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-accent/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get a GEO Audit
          </Link>
        </div>
      </section>

      {/* What Is GEO? */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            What Is GEO?
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-5">
            Generative Engine Optimization (GEO) is the practice of optimizing your content, product listings, and digital presence to appear in AI-generated search results. From ChatGPT and Perplexity to Google AI Overviews and Amazon Rufus, AI is reshaping how consumers discover and evaluate products.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-5">
            GEO is becoming as essential as traditional SEO. The brands that figure this out first will own the next generation of product discovery. The ones that don&apos;t will wonder why their traffic is declining while their competitors keep growing.
          </p>
          <p className="text-sm text-brand-accent/80 font-medium border-l-2 border-brand-accent pl-4">
            GEO doesn&apos;t replace SEO. It layers on top of it. If you&apos;re already optimizing for Google, you&apos;re halfway there. GEO closes the gap for AI-powered search.
          </p>
        </div>
      </section>

      {/* Why Does GEO Matter? */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            Why Does GEO Matter for E-commerce Brands?
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Consumers are increasingly asking AI tools for product recommendations instead of searching Google or browsing Amazon. If your products aren&apos;t structured for AI extraction, you&apos;re invisible in these new channels.
          </p>
          <div className="space-y-4 mb-6">
            {[
              'ChatGPT product recommendations are influencing purchase decisions daily',
              'Perplexity shopping lets users compare and buy products directly from AI answers',
              'Google AI Overviews are pushing traditional organic results below the fold',
              'Amazon Rufus is changing how shoppers discover products within the marketplace',
            ].map((point) => (
              <div key={point} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                <p className="text-sm text-gray-400 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-gray-300 leading-relaxed">
            Early movers have a massive advantage. Most brands haven&apos;t even started thinking about this. Robert Hu has been working at the intersection of e-commerce and AI for 20+ years, and GEO is where both of those worlds converge.
          </p>
        </div>
      </section>

      {/* GEO vs SEO */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4 text-center">
            How Is GEO Different from SEO?
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto text-center mb-10">
            Both matter. GEO doesn&apos;t replace SEO, it layers on top of it. Here&apos;s how they compare.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SEO_VS_GEO.map((item) => (
              <div
                key={item.label}
                className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-7"
              >
                <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent bg-brand-accent/[0.1] px-3 py-1 rounded-full mb-5">
                  {item.label}
                </span>
                <ul className="space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 items-start">
                      <svg className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-sm text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Approach GEO */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Framework</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              How I Approach GEO for E-commerce Brands
            </h2>
          </div>

          <div className="space-y-5">
            {GEO_FRAMEWORK.map((item) => (
              <div
                key={item.step}
                className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7 hover:border-brand-accent/30 transition-colors duration-300"
              >
                <div className="flex gap-5 items-start">
                  <span className="text-[11px] font-mono font-bold text-brand-accent/50 tracking-widest mt-1 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Does GEO Look Like in Practice? */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4 text-center">
            What Does GEO Look Like in Practice?
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto text-center mb-10">
            Here&apos;s the difference between content that AI engines can work with and content they ignore.
          </p>

          <div className="space-y-6">
            {EXAMPLES.map((example) => (
              <div
                key={example.title}
                className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-8"
              >
                <h3 className="text-base font-semibold text-white mb-5">{example.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-red-400/70 mb-2 block">Without GEO</span>
                    <p className="text-sm text-gray-400 leading-relaxed">{example.before}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-emerald-400/70 mb-2 block">With GEO</span>
                    <p className="text-sm text-gray-300 leading-relaxed">{example.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs GEO? */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            Who Needs GEO?
          </h2>
          <div className="space-y-4 mb-8">
            {[
              'Amazon and Walmart sellers whose products aren\'t surfacing in AI-powered shopping tools',
              'DTC brands that rely on organic search and are seeing traffic shift to AI answers',
              'Brand owners who want to future-proof their digital presence before competitors catch on',
            ].map((point) => (
              <div key={point} className="flex gap-3 items-start">
                <svg className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-gray-300 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-accent/80 font-medium border-l-2 border-brand-accent pl-4">
            If you sell products online and haven&apos;t thought about how AI search affects your visibility, you&apos;re already behind.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">FAQ</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6"
              >
                <h3 className="text-[15px] font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28 border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/80 via-brand-dark to-brand-dark" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white leading-snug mb-4 tracking-tight">
            Ready to Optimize for the Future of Search?
          </h2>
          <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
            A GEO audit shows you exactly where your brand stands in AI-powered search and what to fix first.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/geo-audit"
              className="inline-block bg-brand-accent text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-accent/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a GEO Audit
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent hover:text-white transition-colors duration-200"
            >
              Read my latest GEO insights
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
