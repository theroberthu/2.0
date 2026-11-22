import type { ReactNode } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'

const GEO_DESCRIPTION =
  'How Alexa for Shopping, Walmart Sparky, ChatGPT, Gemini and Google AI Mode choose products to recommend, with the 6-dimension GEO framework and RecoScope data.'

const PUBLISHED = '2026-04-30T12:00:00-07:00'
const MODIFIED = '2026-11-22T12:00:00-08:00'

export const metadata: Metadata = {
  title: 'Generative Engine Optimization (GEO) and AI Product Discovery',
  description: GEO_DESCRIPTION,
  alternates: { canonical: '/geo' },
  openGraph: {
    title: 'Generative Engine Optimization (GEO) and AI Product Discovery | Robert Hu',
    description: GEO_DESCRIPTION,
    url: `${SITE_URL}/geo`,
    type: 'article',
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [
      {
        url: '/images/geo/geo.png',
        width: 1200,
        height: 630,
        alt: 'Generative Engine Optimization for Ecommerce - Robert Hu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@theroberthu',
    creator: '@theroberthu',
    title: 'Generative Engine Optimization (GEO) and AI Product Discovery | Robert Hu',
    description:
      'How AI shopping assistants like Alexa for Shopping, Walmart Sparky, ChatGPT and Google AI Mode choose which products to recommend.',
    images: ['/images/geo/geo.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Generative Engine Optimization for Ecommerce',
  description:
    'How AI shopping assistants choose which products to recommend, with the 6-dimension framework and dated RecoScope benchmark data.',
  image: `${SITE_URL}/images/geo/geo.png`,
  author: {
    '@type': 'Person',
    name: 'Robert Hu',
    url: `${SITE_URL}/about`,
    jobTitle: 'AI Commerce Researcher',
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
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  mainEntityOfPage: `${SITE_URL}/geo`,
  url: `${SITE_URL}/geo`,
}


const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'GEO', item: `${SITE_URL}/geo` },
  ],
}

// Primary sources for the platform figures on this page.
const SRC = {
  amazonQ3: 'https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Third-Quarter-Results/',
  walmartQ3: 'https://corporate.walmart.com/news/2026/11/walmart-releases-q3-fy27-earnings',
  walmartTech: 'https://corporate.walmart.com/about/technology',
  googleAiModeShopping: 'https://blog.google/products-and-platforms/products/shopping/google-shopping-ai-mode-virtual-try-on-update/',
  ucpTechCouncil: 'https://www.newsfilecorp.com/release/294133/',
  recoscope: 'https://www.getrecoscope.com/tracker',
}

const linkClass = 'text-brand-accent hover:text-white transition-colors underline underline-offset-2'

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  )
}

function In({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  )
}

const FAQS: { q: string; a: string; link?: { href: string; label: string } }[] = [
  {
    q: 'Is GEO replacing SEO?',
    a: 'No. GEO is an additional layer on top of SEO. Google rankings, Amazon organic search position, and DTC site indexing all still depend on traditional SEO work. GEO addresses what happens when a buyer asks Alexa for Shopping, Sparky, ChatGPT, or Google AI Mode a natural-language question instead of typing keywords. Both run on the same product data, so the work overlaps.',
  },
  {
    q: 'Does GEO matter for a brand that only sells on Amazon?',
    a: 'Yes. For an Amazon-only brand, Amazon’s own assistant is the main GEO surface. Amazon says more than 400 million customers used Alexa for Shopping in the 12 months before its October 2026 earnings report. A listing the assistant cannot match to a shopper’s stated need is unlikely to be named in its answer.',
  },
  {
    q: 'How can a brand tell whether its products show up in AI answers?',
    a: 'Run the prompts your buyers would actually type in ChatGPT, Claude, Gemini, and Perplexity, and ask Alexa for Shopping and Sparky for category recommendations. Record which brands are named and which are ranked first, and save the answers. Repeat on a fixed schedule, because answers shift between runs. RecoScope’s public benchmarks show this method applied to 17 categories.',
  },
  {
    q: 'How long does GEO take to show results?',
    a: 'There is no published benchmark. No platform documentation I could find says how quickly a listing change reaches an assistant’s answers, and answers vary between runs even when nothing has changed. Treat any specific timeline with suspicion. Capture a dated baseline before a change, re-run the same prompts afterward, and look for movement that persists across several captures.',
  },
  {
    q: "What's the difference between GEO and AEO?",
    a: 'GEO gets you named inside an AI answer. AEO gets you purchased by an AI agent. GEO is the foundation for AEO: without clean, structured product data, an agent cannot find or evaluate a product well enough to complete a transaction. For most brands GEO comes first, and AEO becomes the priority as agent-completed purchases appear in their category.',
    link: { href: '/aeo', label: 'Learn more about AEO' },
  },
  {
    q: 'Does GEO work the same way on Walmart as on Amazon?',
    a: 'The 6-dimension framework applies to both. The surfaces differ. Alexa for Shopping answers inside Amazon’s app, website, and Echo Show devices. Sparky answers inside Walmart’s app and website, and Walmart has announced integrations with ChatGPT and Gemini. Neither company publishes how its assistant ranks products, so a result observed on one should be tested on the other, not assumed.',
  },
  {
    q: 'How does GEO relate to retail media ads?',
    a: 'They are separate outputs that read overlapping product data. A paid placement, including a sponsored result inside an assistant, is labeled as an ad. The organic answer is a different output, and GEO is about that one. Strong product data supports both, but buying ads is not a substitute for being matchable in the organic answer.',
    link: { href: '/blog/walmart-sparky-sponsored-prompts-ads', label: 'How Walmart is putting ads inside Sparky' },
  },
  {
    q: 'What\'s the difference between GEO and "AI SEO"?',
    a: '"AI SEO" is a marketing term used inconsistently. Some agencies use it to mean optimizing content for AI Overviews (which is publisher GEO). Others use it to mean optimizing keywords for AI search (which is closer to traditional SEO with new tools). GEO is a more precise term: it specifically describes optimization for generative AI engines that synthesize answers and recommendations rather than rank links. If a vendor cannot tell you which AI surface they optimize for, they probably do not optimize for any of them.',
  },
  {
    q: 'How do you measure GEO performance?',
    a: 'Three layers. First, recommendation appearances: how often a brand is named in answers from ChatGPT, Claude, Gemini, Perplexity, Alexa for Shopping, and Sparky, recorded separately from how often it is ranked first. Second, AI-influenced traffic: Search Console’s AI Overviews and AI Mode impressions, plus referrals from AI assistants in your analytics. Third, share of category: the share of relevant prompts in which the brand appears. RecoScope publishes the first and third for 17 categories in dated snapshots.',
  },
  {
    q: 'Can I do GEO without changing my Amazon listings?',
    a: 'Partially. You can add schema to your DTC site, build content that reinforces the brand entity, and improve cross-platform consistency without touching Amazon directly. But the core of ecommerce GEO is the listing data itself, and Amazon holds the largest share of listing surface area for most marketplace brands. Skipping the Amazon listing work limits the upside.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const AI_SURFACES: { name: string; body: ReactNode; href?: string; linkLabel?: string }[] = [
  {
    name: 'Amazon Alexa for Shopping (formerly Rufus)',
    body: (
      <>
        Amazon retired the Rufus brand on May 13, 2026 and folded the assistant into Alexa for Shopping, which runs across the Amazon app, Amazon.com, and Echo Show devices. Amazon says it was used by more than 400 million customers in the 12 months before its{' '}
        <Ext href={SRC.amazonQ3}>October 2026 earnings report</Ext>, with customer interactions up 570% year over year. It answers from Amazon’s own catalog (listing text, structured attributes, and reviews), with Amazon’s COSMO knowledge graph underneath. Amazon does not publish how the assistant ranks products, so the practical rule is to make every fact a shopper might ask about explicit, in text, in a structured field.
      </>
    ),
    href: '/geo/alexa-for-shopping',
    linkLabel: 'Read the optimization guide',
  },
  {
    name: 'Walmart Sparky',
    body: (
      <>
        Walmart reported a 129% year-over-year increase in U.S. Sparky usage in its{' '}
        <Ext href={SRC.walmartQ3}>third quarter of fiscal 2027</Ext>, and it has{' '}
        <Ext href={SRC.walmartTech}>announced integrations with ChatGPT and Gemini</Ext>. Earlier in the year Walmart said Sparky users’ average orders run about 35% higher than non-users’. That is a comparison between groups of shoppers, not a measured effect of the assistant. Sparky answers from Walmart’s catalog: item attributes, specifications, descriptions, and reviews.
      </>
    ),
    href: '/geo/walmart-sparky',
    linkLabel: 'Read the optimization guide',
  },
  {
    name: 'ChatGPT, Claude, Gemini, and Perplexity',
    body: (
      <>
        The general assistants answer shopping questions outside any one retailer. They draw on web content, retailer and brand pages, third-party reviews, and structured product data. In RecoScope’s benchmarks collected November 15 to 22, 2026, all four ranked the same brand first in six of 12 categories; in wireless earbuds, each ranked a different brand first. OpenAI{' '}
        <In href="/blog/chatgpt-shopping-pullback-sellers">pulled back ChatGPT’s Instant Checkout</In> after a limited pilot, so for most brands discovery is the main job ChatGPT does today.
      </>
    ),
  },
  {
    name: 'Google AI Overviews and Google AI Mode',
    body: (
      <>
        Two Google surfaces, governed differently. AI Overviews summarize at the top of a regular results page. AI Mode is Google’s conversational search, and Google says its shopping experience pairs Gemini with the Shopping Graph, which held more than 50 billion product listings when{' '}
        <Ext href={SRC.googleAiModeShopping}>AI Mode shopping was announced</Ext> in May 2025. Search Console now reports impressions in both surfaces, though not the traffic they send. Merchant Center feeds and structured data on product pages are the inputs a brand controls.
      </>
    ),
    href: '/blog/product-data-shared-infrastructure-google-ai-mode',
    linkLabel: 'What AI Mode reveals about product data',
  },
]

const DIMENSIONS = [
  {
    label: 'WHO',
    body: 'WHO is the buyer your product is for, defined with enough specificity that an AI engine can match it against a stated buyer profile. Demographics (age range, gender, life stage), use case (beginner, professional, hobbyist), lifestyle (apartment dweller, road warrior, parent of toddlers), and skill level all count.',
    weak: '"yoga mat for everyone."',
    strong: '"extra-thick yoga mat designed for beginners and joint-sensitive practitioners over 40."',
    takeaway: 'Vague WHO data leaves the engine nothing to match against the buyer the shopper described.',
  },
  {
    label: 'WHEN',
    body: 'WHEN is the temporal context that signals appropriateness. Time of day, season, occasion, life stage, and frequency of use. AI engines use WHEN to filter recommendations against situational queries that traditional keyword search never captured.',
    weak: '"great for any time."',
    strong: '"designed for post-workout recovery within the first hour after exercise."',
    takeaway: 'WHEN is what turns a feature list into a fit signal. Without it, your product is contextless.',
  },
  {
    label: 'WHERE',
    body: 'WHERE is the physical or environmental context where the product gets used. Home, gym, kitchen, office, outdoors, travel, car. Setting matters because shoppers describe their needs in terms of where they will use the product.',
    weak: '"versatile and durable."',
    strong: '"compact enough for studio apartments with no permanent mounting required."',
    takeaway: 'WHERE turns a generic product into a recommendation match for a shopper describing their actual environment.',
  },
  {
    label: 'WHY',
    body: 'WHY is the outcome your product delivers, not the feature it contains. Shoppers state their needs as outcomes. "I want to sleep better" is the prompt. "Memory foam mattress" is the feature. The outcome bridges the two.',
    weak: '"12-inch memory foam mattress."',
    strong: '"12-inch memory foam mattress designed to relieve hip and shoulder pressure for side sleepers."',
    takeaway: 'Features describe what the product is. WHY describes what the buyer leaves with. The prompt is written in outcomes.',
  },
  {
    label: 'WHAT',
    body: 'WHAT is the physical product specification: materials, size, weight, certifications, compatibility, ingredients, country of origin. AI engines use WHAT for filtering when the shopper has firm requirements (gluten-free, USB-C compatible, made in the USA, vegan).',
    weak: '"premium quality construction."',
    strong: '"300 thread count 100% organic cotton, GOTS certified, fits queen-size mattresses up to 16 inches deep."',
    takeaway: 'Every empty backend attribute is a missed match. Complete every field.',
  },
  {
    label: 'AI Retrievability',
    body: 'AI Retrievability is how cleanly your product data is structured for AI parsing. Schema markup on DTC pages, structured backend attributes on Amazon and Walmart, consistent data across channels, machine-readable specifications. Retrievability is the layer that makes the other five dimensions extractable.',
    weak: '"A product page with key specs trapped in image files, no schema markup, and different attribute values on Amazon vs your DTC site."',
    strong: '"A product page where every spec is in machine-readable text, Product schema validates clean, and the same data appears identically across Amazon, Walmart, and DTC."',
    takeaway: 'The cleanest WHO/WHEN/WHERE/WHY/WHAT story still loses if the AI cannot read it.',
  },
]

const SEO_VS_GEO_ROWS = [
  { dim: 'What it optimizes for', seo: 'Keyword relevance and link authority', geo: 'Context, attributes, and entity clarity' },
  { dim: 'What it reads', seo: 'Page content, links, and technical signals', geo: 'Product attributes, reviews, structured data, and cross-channel consistency' },
  { dim: 'What gets ranked', seo: 'Web pages', geo: 'Answers and product recommendations' },
  { dim: 'How success is measured', seo: 'Rankings, impressions, clicks', geo: 'Mentions, first-place recommendations, AI-referred traffic' },
  { dim: 'Where the buyer sees you', seo: 'SERP results page', geo: 'Inside the AI answer or shopping flow' },
]

// RecoScope public benchmarks, collected November 17 to 22, 2026. Each category
// is 12 usable answers (3 prompt types x ChatGPT, Claude, Gemini, Perplexity).
// "first" counts the four comparative answers. Refresh from SRC.recoscope.
const CATEGORY_DATA = [
  { cat: 'Running Shoes', date: 'Nov 21', brands: 9, mentioned: 'Brooks (12/12)', first: 'ASICS (4/4)' },
  { cat: 'Air Purifiers', date: 'Nov 19', brands: 9, mentioned: 'Levoit (12/12)', first: 'Coway (4/4)' },
  { cat: 'Dog Food', date: 'Nov 20', brands: 14, mentioned: 'Hill’s Science Diet (11/12)', first: 'Purina Pro Plan (4/4)' },
  { cat: 'Office Chairs', date: 'Nov 21', brands: 14, mentioned: 'Steelcase (11/12)', first: 'Steelcase (4/4)' },
  { cat: 'Robot Vacuums', date: 'Nov 22', brands: 11, mentioned: 'Roborock (11/12)', first: 'Roborock (4/4)' },
  { cat: 'Standing Desks', date: 'Nov 18', brands: 10, mentioned: 'FlexiSpot and UPLIFT, tied (11/12)', first: 'UPLIFT (4/4)' },
  { cat: 'Skincare', date: 'Nov 18', brands: 21, mentioned: 'CeraVe (9/12)', first: 'CeraVe (3/4)' },
  { cat: 'Wireless Earbuds', date: 'Nov 17', brands: 11, mentioned: 'Beats and Sony, tied (9/12)', first: 'A different brand in each' },
]

const STEPS = [
  {
    n: '01',
    title: 'Define the ICP',
    body: 'Pull 200+ recent reviews per competitor SKU, sort by helpful-vote count, and extract the language patterns shoppers use to describe their actual problem and outcome. Build a language fingerprint of the actual buyer: how they describe themselves, the problem they are solving, and the objections they raise before purchasing. The output is a one-page ICP document that drives every subsequent step. Without this, the framework defaults to generic best practices, which is what every other listing already does.',
  },
  {
    n: '02',
    title: 'Audit listings against the 6-dimension framework',
    body: 'Score each top SKU against WHO, WHEN, WHERE, WHY, WHAT, and AI Retrievability. Use a 0 to 5 scale per dimension. The audit shows which dimension is the weakest link, and the weakest link is usually the highest-leverage fix.',
  },
  {
    n: '03',
    title: 'Rewrite titles and bullets in ICP language',
    body: "Replace keyword strings with sentence-style language that mirrors how the ICP describes their need. Titles should answer who and what. Bullets should answer when, where, why, and what. Stop optimizing for Amazon's old keyword density model. Start optimizing for natural-language matching against shopper queries.",
  },
  {
    n: '04',
    title: 'Expand backend keywords to natural-language phrases',
    body: 'Backend search terms used to be a comma-separated list of keywords. Conversational assistants match natural-language questions, so descriptive phrases give them more to match than keyword lists. Rewrite as descriptive phrases: "designed for runners with knee pain who train on hard surfaces," not "running shoes knee pain hard surface."',
  },
  {
    n: '05',
    title: 'Add schema markup for DTC pages',
    body: 'On your owned site, add Product schema, FAQPage schema for product Q&A, and Review schema for aggregated ratings. Schema gives machines explicit fields to read instead of facts to infer from prose. The more explicit the markup, the higher your AI Retrievability score.',
  },
  {
    n: '06',
    title: 'Build the content layer',
    body: 'On your owned site, publish FAQ pages, comparison content, and buying guides that match the conversational queries shoppers send to ChatGPT and Perplexity. This is the publisher GEO layer that feeds the ecommerce GEO layer. Brand entity reinforcement compounds across both surfaces.',
  },
  {
    n: '07',
    title: 'Measure on a schedule',
    body: 'Run the same saved prompts across ChatGPT, Claude, Gemini, Perplexity, Alexa for Shopping, and Sparky on a fixed cadence. Record mentions and first-place ranks separately, and keep the captured answers. Add Search Console’s AI Overviews and AI Mode impressions and AI-assistant referrals from your analytics. Compare dated snapshots with the method held constant; a single run is noise.',
  },
]

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'The 7-step GEO implementation framework',
  description: 'A practitioner implementation framework for marketplace brands applying Generative Engine Optimization across Amazon, Walmart, and DTC.',
  step: STEPS.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.title,
    text: s.body,
  })),
}

const RECOSCOPE_TRACKERS = [
  { category: 'Running Shoes', type: 'Nov 2026 snapshot', href: 'https://www.getrecoscope.com/tracker/running-shoes' },
  { category: 'Air Purifiers', type: 'Nov 2026 snapshot', href: 'https://www.getrecoscope.com/tracker/air-purifiers' },
  { category: 'Dog Food', type: 'Nov 2026 snapshot', href: 'https://www.getrecoscope.com/tracker/dog-food' },
]

const KEY_TAKEAWAYS = [
  'GEO is the discipline of structuring product data so AI assistants like Amazon Alexa for Shopping, Walmart Sparky, ChatGPT, Gemini, Perplexity, and Google AI Mode can match a product to a buyer’s need and name it. It is a layer on top of SEO, not a replacement for it.',
  'Ecommerce GEO (getting products recommended inside AI shopping answers) is a different discipline from publisher GEO (getting content cited in AI answers). Brands that sell physical products should prioritize the ecommerce track.',
  'Four groups of surfaces matter today: Alexa for Shopping, Walmart Sparky, the general assistants (ChatGPT, Claude, Gemini, Perplexity), and Google’s AI Overviews and AI Mode. Each reads different inputs, and none publishes its ranking rules.',
  'The 6-dimension framework (WHO, WHEN, WHERE, WHY, WHAT, and AI Retrievability) scores whether an AI engine can match a listing to a buyer’s stated need.',
  'RecoScope’s November 2026 benchmarks show that the most-mentioned brand is often not the one ranked first. Track mentions and first-place recommendations separately.',
  'Platform adoption is well documented. Evidence that a specific listing change causes more recommendations or more revenue is not, yet. GEO is also the foundation for AEO, where AI agents complete the purchase.',
]

// Internal articles and topic pages that already exist. Pages that do not exist
// yet are left as TODO comments in the Continue Exploring section rather than linked.
const CONTINUE_EXPLORING: { title: string; desc: string; href: string }[] = [
  {
    title: 'Amazon Alexa for Shopping (formerly Rufus)',
    desc: 'How to structure Amazon listings for Amazon’s AI shopping assistant.',
    href: '/geo/alexa-for-shopping',
  },
  {
    title: 'Walmart Sparky',
    desc: 'The GEO playbook for Walmart’s AI shopping assistant.',
    href: '/geo/walmart-sparky',
  },
  {
    title: 'Agentic Engine Optimization (AEO)',
    desc: 'What changes when AI shopping agents complete the purchase, not just the recommendation.',
    href: '/aeo',
  },
  {
    title: 'AI Commerce 2027',
    desc: 'The living outlook: what infrastructure exists, and what adoption evidence does not yet.',
    href: '/ai-commerce-2027',
  },
  {
    title: 'The 6-dimension GEO audit framework',
    desc: 'How to score an Amazon listing against the six dimensions.',
    href: '/blog/6-dimension-geo-audit-framework-amazon-listing',
  },
  {
    title: 'GEO vs SEO for marketplace sellers',
    desc: 'The five SEO tactics that work against AI visibility.',
    href: '/blog/geo-vs-seo-marketplace-sellers',
  },
  {
    title: 'AI can find the small retailer. It still recommends the big one.',
    desc: 'Why retrieval and recommendation are different achievements.',
    href: '/blog/ai-shopping-retailer-recommendation-gap-lightspeed-vaer',
  },
  {
    title: 'What Google AI Mode reveals about the future of product data',
    desc: 'Product data as shared infrastructure across Google’s AI surfaces.',
    href: '/blog/product-data-shared-infrastructure-google-ai-mode',
  },
  {
    title: 'Cited in two Google AI surfaces in one week',
    desc: 'What the posts cited in AI Overviews and AI Mode had in common.',
    href: '/blog/google-ai-overview-ai-mode-citation-teardown-geo',
  },
  {
    title: 'Search Console tracks AI visibility, but not AI traffic',
    desc: 'What the AI Overviews and AI Mode report can and cannot tell you.',
    href: '/blog/google-search-console-generative-ai-visibility',
  },
  {
    title: 'BCG gives GEO a revenue number',
    desc: 'Why it is progress, and why it is not yet a benchmark.',
    href: '/blog/bcg-geo-revenue-growth-evidence',
  },
]

export default function GEOPage() {
  return (
    <>
      <SchemaMarkup data={articleSchema} />
      <SchemaMarkup data={faqSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <SchemaMarkup data={howToSchema} />

      {/* SECTION 1: Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-5">Pillar Resource</span>
          <h1 className="text-3xl md:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-7">
            Generative Engine Optimization for Ecommerce
          </h1>

          {/* Lead stat block - gold left border callout */}
          <blockquote className="relative bg-brand-gold/[0.08] border-l-4 border-brand-gold rounded-r-xl p-5 md:p-6 mb-8">
            <p className="text-[15px] md:text-base text-gray-200 leading-relaxed">
              In RecoScope’s November 2026 benchmark, Brooks appeared in all 12 running-shoe answers from ChatGPT, Claude, Gemini, and Perplexity. All four assistants still ranked ASICS first. Levoit led air purifier mentions while Coway took every first place. <strong className="text-brand-gold font-semibold">Being named and being chosen are different outcomes.</strong>
            </p>
          </blockquote>

          <p className="text-base text-gray-300 leading-relaxed mb-5">
            Generative Engine Optimization (GEO) is the discipline of structuring your product data, listings, and brand presence so that AI assistants like Amazon Alexa for Shopping, Walmart Sparky, ChatGPT, Claude, Gemini, Perplexity, and Google AI Mode recommend your products when buyers ask. It is not a renamed version of SEO. The reading engine changed, the buyer&apos;s prompt changed, and the optimization changed with it.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-8">
            Most GEO writing is about getting articles cited. This page is about products: how AI shopping assistants decide which brands and listings to name when a shopper asks what to buy, and what product data has to look like for a listing to be matched to that question.
          </p>
        </div>
      </section>

      {/* In Short (primer) */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">
            In Short
          </span>
          <div className="space-y-4 text-base text-gray-300 leading-relaxed">
            <p>
              <strong className="text-white font-semibold">Generative Engine Optimization (GEO)</strong> is the practice of structuring product data, listings, and brand information so AI assistants can match a product to a shopper’s stated need and name it in the answer.
            </p>
            <p>
              It matters because assistants are now a shopping interface at scale. Amazon says more than 400 million customers used Alexa for Shopping in the 12 months before its October 2026 earnings report, and Walmart reported a 129% year-over-year increase in U.S. Sparky usage in its latest quarter. When an assistant answers &ldquo;what should I buy,&rdquo; it names a handful of brands. The rest are not on the page.
            </p>
            <p>
              SEO ranks pages. GEO is about being named inside the answer.{' '}
              <In href="/aeo">AEO</In> is the next step, where an AI agent chooses and buys the product. The evidence is strongest for adoption: platforms report it. Proof that a specific listing change causes more AI recommendations is still thin, and this page says so where it matters.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: What is GEO */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            What is Generative Engine Optimization?
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-5">
            Generative Engine Optimization (GEO) is the practice of optimizing your product content, listings, and digital presence so that AI engines surface your brand inside their generated answers and recommendations. It covers the structural, semantic, and entity work needed to win citations and recommendations in AI search results, AI shopping assistants, and AI agent flows.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            GEO is not one thing. It splits into two distinct disciplines that are usually collapsed in industry writing. They share vocabulary but optimize for different mechanics.
          </p>

          <h3 className="text-xl font-semibold text-white tracking-tight mb-5">
            Ecommerce GEO vs. publisher GEO
          </h3>
          <p className="text-base text-gray-300 leading-relaxed mb-5">
            <strong className="text-white">Ecommerce GEO</strong> is about getting your product recommended inside an AI shopping flow. The reading engines are Amazon Alexa for Shopping, Walmart Sparky, ChatGPT, Perplexity, Google AI Mode, and the agentic checkout surfaces being built on open protocols. The optimization targets are product listings, structured attributes, review sentiment, A+ content, and DTC product pages. The success metric is whether your product shows up when a shopper asks &ldquo;what should I buy.&rdquo;
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-5">
            <strong className="text-white">Publisher GEO</strong> is about getting your content cited inside an AI answer. The reading engines are ChatGPT, Claude, Gemini, Perplexity, Google AI Overviews, and Google AI Mode when they answer informational queries. The optimization targets are blog posts, white papers, comparison articles, and reference content. The success metric is whether your domain shows up as a citation in the AI&apos;s response.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-5">
            This page is about ecommerce GEO. Different mechanics, different surfaces, different optimizations. If you sell physical products on Amazon, Walmart, or DTC, your priority is the first track. The publisher GEO playbook is a supporting layer that feeds the ecommerce one through brand entity reinforcement.
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            The reason this distinction matters: most &ldquo;GEO&rdquo; articles you find online are publisher GEO content written for SaaS companies trying to rank inside AI answers. The optimizations they prescribe (FAQ schema, citation-friendly content, expert quotes) help on the publisher side and are not enough on their own to move AI shopping recommendations. Ecommerce GEO requires structured listing data, persona-specific language, and review quality work that publisher GEO articles do not address.
          </p>
        </div>
      </section>

      {/* SECTION 3: The AI Surfaces */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">
            Which AI assistants recommend products today?
          </h2>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            Four groups of surfaces handle most AI product discovery for marketplace brands. Each reads different inputs and none publishes its ranking rules, so a result observed on one surface is evidence about that surface only.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {AI_SURFACES.map((surface) => (
              <div key={surface.name} className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7 hover:border-brand-accent/30 transition-colors duration-300 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-3">{surface.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{surface.body}</p>
                {surface.href && (
                  <Link
                    href={surface.href}
                    className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-brand-accent hover:gap-2.5 transition-all duration-200"
                  >
                    {surface.linkLabel}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: 6-Dimension Framework */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">Framework</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">
              The 6-dimension GEO framework for Amazon and Walmart listings
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Most listing audits score against generic best practices: keyword density, image count, bullet length. The GEO framework scores against the confirmed ICP. Every dimension answers a question the AI engine is silently asking when it evaluates whether to recommend your product. The full scoring method is in{' '}
              <In href="/blog/6-dimension-geo-audit-framework-amazon-listing">the 6-dimension GEO audit framework</In>.
            </p>
          </div>

          <div className="space-y-5">
            {DIMENSIONS.map((dim) => (
              <div key={dim.label} className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7 hover:border-brand-accent/30 transition-colors duration-300">
                <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/[0.12] px-2.5 py-1 rounded-full mb-4">
                  {dim.label}
                </span>
                <p className="text-sm text-gray-300 leading-relaxed mb-5">{dim.body}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-red-400/70 mb-2 block">Weak</span>
                    <p className="text-sm text-gray-400 leading-relaxed">{dim.weak}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-emerald-400/70 mb-2 block">Strong</span>
                    <p className="text-sm text-gray-300 leading-relaxed">{dim.strong}</p>
                  </div>
                </div>
                <p className="text-sm text-brand-accent/90 font-medium border-l-2 border-brand-accent pl-4">
                  <span className="text-brand-accent font-semibold">Takeaway:</span> {dim.takeaway}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: GEO vs SEO */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            How is GEO different from SEO?
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-5">
            SEO and GEO are not in conflict. They use the same source content, but they optimize for different reading engines.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-5">
            SEO optimizes for crawler-based search engines that rank pages against keyword relevance, backlink authority, and on-page signals. The output is a ranked list of links. The buyer evaluates the list, clicks one or more, and decides.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            GEO optimizes for generative engines that synthesize answers and recommendations from structured data, reviews, and entity graphs. The output is a curated short list with reasoning. The buyer reads the AI&apos;s recommendation and acts.
          </p>

          {/* Comparison table */}
          <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-gray-400 px-5 py-4">Dimension</th>
                  <th className="text-left text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-gray-400 px-5 py-4">SEO</th>
                  <th className="text-left text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent px-5 py-4">GEO</th>
                </tr>
              </thead>
              <tbody>
                {SEO_VS_GEO_ROWS.map((row, i) => (
                  <tr key={row.dim} className={i < SEO_VS_GEO_ROWS.length - 1 ? 'border-b border-white/[0.05]' : ''}>
                    <td className="text-gray-300 font-medium px-5 py-4 align-top">{row.dim}</td>
                    <td className="text-gray-400 px-5 py-4 align-top">{row.seo}</td>
                    <td className="text-gray-300 px-5 py-4 align-top">{row.geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-base text-gray-300 leading-relaxed mb-5">
            The reading engines reward different things. SEO rewards pages that match how a crawler indexes the web. GEO rewards data that matches how a language model evaluates a buyer&apos;s stated need. Most marketplace listings were written for the SEO era, which is why so many read as keyword strings rather than answers to a buyer&apos;s question.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-5">
            SEO is still real. Google rankings and Amazon search position still depend on it. What changed is that a growing share of shopping questions now get answered by an assistant before a results page appears: Amazon counts its assistant&apos;s users in the hundreds of millions, and Walmart reports Sparky usage more than doubling year over year. The same product data feeds both systems, so the work overlaps. What differs is how success is measured.
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            For a deeper breakdown of the SEO tactics that work against AI visibility, read{' '}
            <In href="/blog/geo-vs-seo-marketplace-sellers">GEO vs SEO: What Marketplace Sellers Need to Stop Doing in 2026</In>.
          </p>
        </div>
      </section>

      {/* SECTION 6: GEO vs AEO */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            Where does AEO fit in?
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-5">
            Agentic Engine Optimization (AEO) is the next layer above GEO. GEO gets you mentioned inside an AI answer. AEO gets you purchased by an AI agent.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-5">
            The mechanics differ. GEO is about whether an assistant names your brand when a buyer asks for a recommendation. AEO is about whether an agent completes the purchase on the buyer&apos;s behalf, such as Alexa for Shopping&apos;s auto-restock and scheduled purchases, or checkout inside Google AI Mode and Gemini. AEO requires deeper structural work: machine-readable pricing, real-time inventory exposure, structured return policies, agent-friendly checkout flows.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-5">
            Agent-completed purchase volume is rarely disclosed, but the rails are being built in public. In April 2026, Amazon, Meta, Microsoft, Salesforce, and Stripe{' '}
            <Ext href={SRC.ucpTechCouncil}>joined the Universal Commerce Protocol Tech Council</Ext>{' '}
            alongside founding members Google, Shopify, Etsy, Target, and Wayfair.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-8">
            The sensible order is GEO first, then AEO. Without GEO foundations (clean structured data, persona-specific language, complete attributes), an agent has little to evaluate. Brands that get the data right can add AEO capabilities as agent-completed purchases become visible in their category.
          </p>

          <Link
            href="/aeo"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent hover:text-white transition-colors duration-200"
          >
            Read more about Agentic Engine Optimization
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* SECTION 7: AI Recommendation Data */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">Proprietary Data</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              What does the data actually show?
            </h2>
          </div>

          <p className="text-base text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
            <Ext href={SRC.recoscope}>RecoScope</Ext>, the AI-recommendation benchmark behind this site&apos;s GEO research, runs the same saved shopper prompts through ChatGPT, Claude, Gemini, and Perplexity and publishes dated snapshots for 17 categories. Each snapshot has 12 answers: three prompt types across four assistants. A brand is counted once per answer it appears in, and first place comes from the comparative prompt. Three patterns stand out in the November 2026 snapshots.
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7">
              <h3 className="text-lg font-semibold text-white mb-3">Being mentioned is not being ranked first</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Brooks appeared in all 12 running-shoe answers and ranked second in all four comparisons; ASICS ranked first in all four. Levoit was named in all 12 air purifier answers while Coway took every first place. Hill&apos;s Science Diet led dog food mentions, and Purina Pro Plan ranked first in all four comparisons. Visibility and preference are separate measures, and GEO work should track both.
              </p>
            </div>
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7">
              <h3 className="text-lg font-semibold text-white mb-3">Category concentration varies widely</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The snapshots recorded 9 brands in running shoes and air purifiers, and 21 in skincare and protein powder. Across the 12 categories collected November 15 to 22, all four assistants ranked the same brand first in six. In wireless earbuds, each assistant put a different brand first. A concentrated category and a fragmented one call for different strategies, and the snapshot shows which game a brand is playing before any listing copy is rewritten.
              </p>
            </div>
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7">
              <h3 className="text-lg font-semibold text-white mb-3">Snapshots describe, they do not explain</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Each report is a dated capture of model output, not a controlled experiment. It shows which brands were named and ranked. It does not show why, and it does not establish product quality. Answers also shift between captures, so a single run is a weak basis for decisions. The useful signal is a repeated measurement with the method held constant.
              </p>
            </div>
          </div>

          {/* Snapshot table */}
          <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl overflow-x-auto mb-4">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-gray-400 px-4 py-4">Category</th>
                  <th className="text-left text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-gray-400 px-4 py-4">Brands recorded</th>
                  <th className="text-left text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-gray-400 px-4 py-4">Most mentioned (of 12 answers)</th>
                  <th className="text-left text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-gold px-4 py-4">Ranked first (of 4 comparisons)</th>
                </tr>
              </thead>
              <tbody>
                {CATEGORY_DATA.map((row, i) => (
                  <tr key={row.cat} className={i < CATEGORY_DATA.length - 1 ? 'border-b border-white/[0.05]' : ''}>
                    <td className="text-white font-medium px-4 py-4 align-top">
                      {row.cat}
                      <span className="block text-[11px] font-normal text-gray-500 mt-0.5">{row.date}</span>
                    </td>
                    <td className="text-gray-400 px-4 py-4 align-top">{row.brands}</td>
                    <td className="text-gray-300 px-4 py-4 align-top">{row.mentioned}</td>
                    <td className="text-brand-gold font-semibold px-4 py-4 align-top">{row.first}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 italic mb-12">
            Source: RecoScope public benchmarks, collected November 17 to 22, 2026. Each category is 12 usable answers from ChatGPT, Claude, Gemini, and Perplexity across three prompt types. Results describe captured answers and do not establish product quality.
          </p>

          {/* Snapshot cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {RECOSCOPE_TRACKERS.map((report) => (
              <a
                key={report.category}
                href={report.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 hover:border-brand-accent/30 transition-all duration-300 group block"
              >
                <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent bg-brand-accent/[0.1] px-2.5 py-1 rounded-full">
                  {report.type}
                </span>
                <h3 className="text-base font-semibold text-white mt-4 mb-3 group-hover:text-brand-accent transition-colors duration-300">
                  {report.category}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-accent/70 group-hover:text-brand-accent transition-colors duration-200">
                  View on RecoScope
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          <p className="text-sm text-brand-accent/80 font-medium border-l-2 border-brand-accent pl-4 max-w-3xl">
            RecoScope publishes its methodology and the captured answers alongside each snapshot, so every number above can be checked against the model output it came from.
          </p>
        </div>
      </section>

      {/* SECTION 8: 7-Step Implementation Framework */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">Implementation</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              How do you actually implement GEO?
            </h2>
          </div>

          <ol className="space-y-5">
            {STEPS.map((step) => (
              <li key={step.n} className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7 hover:border-brand-accent/30 transition-colors duration-300">
                <div className="flex gap-5 items-start">
                  <span className="text-[11px] font-mono font-bold text-brand-accent/50 tracking-widest mt-1 shrink-0">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">Step {step.n.replace(/^0/, '')} - {step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 9: What the evidence shows */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-8">
            What the evidence shows, and what it does not
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-5">
            The adoption numbers are real, and they come from the platforms themselves. Amazon reports more than 400 million Alexa for Shopping users in a year. Walmart reports U.S. Sparky usage up 129% year over year. Both companies have also published comparisons between assistant users and non-users, such as Walmart&apos;s 35% higher average order value. Those comparisons describe who uses the assistant. They do not measure what the assistant caused.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-5">
            Measurement of GEO itself is thinner. BCG has put a revenue number on GEO, which is progress, but{' '}
            <In href="/blog/bcg-geo-revenue-growth-evidence">it is not yet a benchmark</In>. Google Search Console now reports impressions inside AI Overviews and AI Mode, but{' '}
            <In href="/blog/google-search-console-generative-ai-visibility">not the traffic those impressions send</In>. And being found is not being chosen: a Lightspeed-sponsored study of about 460,000 AI shopping answers found small retailers cited about as often as large ones, while{' '}
            <In href="/blog/ai-shopping-retailer-recommendation-gap-lightspeed-vaer">large chains won the lead recommendation</In>{' '}
            about two and a half times as often.
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            What is missing is evidence that a specific listing change causes more AI recommendations, or more revenue. The framework on this page is built to be testable for exactly that reason: score the listing, change it, and measure with the method held constant. Until that evidence exists, GEO is a measurable discipline with a promising but unproven payoff.
          </p>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">FAQ</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              Frequently Asked Questions about GEO for Ecommerce
            </h2>
          </div>

          <div className="space-y-4 mb-10">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6"
              >
                <h3 className="text-[15px] font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {faq.a}
                  {faq.link && (
                    <>
                      {' '}
                      <Link href={faq.link.href} className={linkClass}>
                        {faq.link.label} &rarr;
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: Editorial ending - Key Takeaways, Continue Exploring, update note */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          {/* Key Takeaways */}
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-8">
            Key takeaways
          </h2>
          <ul className="space-y-4 mb-16">
            {KEY_TAKEAWAYS.map((point) => (
              <li key={point} className="flex gap-3 items-start">
                <svg className="w-4 h-4 text-brand-accent mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[15px] text-gray-300 leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>

          {/* Continue Exploring AI Commerce */}
          <h2 className="text-xl font-bold text-white tracking-tight mb-5">
            Continue exploring AI Commerce
          </h2>
          <ul className="border-t border-white/[0.06] mb-10">
            {/* TODO: Add a dedicated "AI Commerce" topic/hub page and link it here once it exists. */}
            {CONTINUE_EXPLORING.map((item) => (
              <li key={item.href} className="border-b border-white/[0.06]">
                <Link href={item.href} className="group flex items-start justify-between gap-4 py-4">
                  <span className="min-w-0">
                    <span className="block text-[15px] font-medium text-gray-200 group-hover:text-brand-accent transition-colors duration-200">
                      {item.title}
                    </span>
                    <span className="block text-[13px] text-gray-500 mt-0.5 leading-relaxed">
                      {item.desc}
                    </span>
                  </span>
                  <svg className="w-4 h-4 text-gray-600 mt-1 shrink-0 group-hover:text-brand-accent transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          {/* Update note */}
          <div className="pt-2">
            <p className="text-[13px] text-gray-500">Last updated: November 2026</p>
            <p className="text-[13px] text-gray-500 mt-1">
              This guide is updated as AI commerce platforms continue to evolve.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
