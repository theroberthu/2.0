import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'

const NEWSLETTER_URL =
  'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232'

export const metadata: Metadata = {
  title: 'How to Optimize Walmart Listings for Sparky in 2026 (GEO Cluster Guide)',
  description:
    'Walmart\'s Sparky drives 35% higher AOV and now travels into ChatGPT and Gemini. Here is the 6-dimension framework for getting recommended, plus the reorder layer, with weak vs strong examples for Walmart sellers.',
  alternates: { canonical: '/geo/walmart-sparky' },
  openGraph: {
    title: 'How to Optimize Walmart Listings for Sparky in 2026 (GEO Cluster Guide)',
    description:
      'Walmart\'s Sparky drives 35% higher AOV and now travels into ChatGPT and Gemini. Here is the 6-dimension framework for getting recommended, plus the reorder layer.',
    url: `${SITE_URL}/geo/walmart-sparky`,
    type: 'article',
    siteName: 'Robert Hu',
    images: [`${SITE_URL}/images/geo/walmart-sparky.png`],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@theroberthu',
    creator: '@theroberthu',
    title: 'How to Optimize Walmart Listings for Sparky in 2026 (GEO Cluster Guide)',
    description:
      'Walmart\'s Sparky drives 35% higher AOV and now travels into ChatGPT and Gemini. The 6-dimension framework for getting recommended, plus the reorder layer.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Optimize Your Walmart Listings for Sparky in 2026',
  description:
    'Walmart\'s Sparky drives 35% higher AOV and now travels into ChatGPT and Gemini. Here is the 6-dimension framework for getting recommended, plus the reorder layer, with weak vs strong examples for Walmart sellers.',
  author: {
    '@type': 'Person',
    name: 'Robert Hu',
    url: `${SITE_URL}/about`,
    jobTitle: 'Commerce and Technology Researcher',
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
  datePublished: '2026-06-22',
  dateModified: '2026-06-22',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/geo/walmart-sparky`,
  },
  image: `${SITE_URL}/images/geo/walmart-sparky.png`,
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'GEO', item: `${SITE_URL}/geo` },
    { '@type': 'ListItem', position: 3, name: 'Walmart Sparky', item: `${SITE_URL}/geo/walmart-sparky` },
  ],
}

const FAQS = [
  {
    q: 'What is Walmart Sparky and how does it work?',
    a: "Sparky is Walmart's generative AI shopping assistant, accessed through Ask Sparky in the Walmart app and now embedded inside ChatGPT and Gemini. It answers conversational buyer queries with specific product recommendations pulled from Walmart's catalog. It reads structured catalog data, product attributes, descriptions, reviews, and Q&A, and it weights attribute completeness heavily. It does not rank by keyword density. It matches the meaning of a query against the meaning of your listing.",
  },
  {
    q: "How is Sparky different from Walmart's regular search?",
    a: "Traditional Walmart search ranks products against keyword relevance, price, and sales signals. Sparky ranks products against the semantic match between a conversational query and a listing's natural-language content and structured attributes. A product can rank well on the Walmart search results page and still get skipped by Sparky if its data does not answer the persona, use case, or constraint the buyer described. They are two different evaluation systems on the same catalog.",
  },
  {
    q: 'Does Sparky really reach shoppers in ChatGPT and Gemini?',
    a: "Yes. Walmart embedded Sparky inside ChatGPT and Gemini, extending its catalog reach beyond Walmart.com and the Walmart app. Roughly 200,000 Walmart products were available in ChatGPT during the earlier Instant Checkout phase. Walmart pulled OpenAI's Instant Checkout, which converted at about one-third the rate of Walmart.com, and replaced it with Sparky as a traveling agent. EVP Daniel Danker called the Instant Checkout era a very temporary moment in time.",
  },
  {
    q: "Do I need to optimize differently for Sparky than for Amazon's Alexa for Shopping?",
    a: "The data foundation is the same, with one emphasis difference. Sparky leans harder on Walmart's structured catalog attributes than Amazon's assistant does on Amazon's, so attribute completeness and consistency carry extra weight on Walmart. The 6-dimension framework applies on both. A listing optimized for Sparky is most of the way to being optimized for Alexa for Shopping, and the reverse, because both read titles, attributes, descriptions, and reviews as natural language.",
  },
  {
    q: "How do I become Sparky's default for reorders?",
    a: "Four moves. Enroll consumable SKUs in Walmart's subscription and auto-reorder programs so Sparky has a mechanism to default to. Make your replenishment cadence explicit in product data, like a 30-day supply or a 60-count. Maintain in-stock consistency, because a stockout during a scheduled reorder teaches the agent to find a backup. Keep pricing stable, because price thrash reads as unreliability to an agent planning a recurring purchase.",
  },
  {
    q: 'Does optimizing for Sparky help on other AI surfaces?',
    a: 'Yes. Sparky, Alexa for Shopping, ChatGPT, Perplexity, and Gemini all read the same underlying inputs: titles, attributes, descriptions, reviews, and entity signals. The data quality work that lifts your Sparky visibility lifts every other AI surface that pulls from similar inputs. GEO is a portable optimization. Sparky is unusually high-leverage because it physically travels into ChatGPT and Gemini, so one clean catalog propagates across three surfaces at once.',
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

const DIMENSIONS = [
  {
    label: 'WHO',
    extracts: 'Persona signals from titles, descriptions, and review text. Who is this product for in terms of household, life stage, sensitivity, or constraint?',
    weak: 'Family-size laundry detergent.',
    strong: 'Fragrance-free plant-based laundry detergent for families with babies and sensitive skin.',
    takeaway: 'Sparky rewards specificity. "Family-size" is invisible because every detergent claims to serve families. "Fragrance-free for babies and sensitive skin" gets matched to the actual query a parent types.',
  },
  {
    label: 'WHEN',
    extracts: 'Cadence, occasion, season, or life-stage signals.',
    weak: 'Long-lasting value.',
    strong: '96 loads, about a three-month supply for a family of four, reorder monthly for smaller households.',
    takeaway: 'Walmart buyers ask cadence questions constantly ("how often do I need to rebuy," "what lasts a month"). A listing without a cadence signal cannot match those queries, and on a consumable, cadence is also what sets up the reorder position.',
  },
  {
    label: 'WHERE',
    extracts: 'Setting and equipment context. Home, HE washer, standard machine, septic system.',
    weak: 'Works in any machine.',
    strong: 'Formulated for HE and standard washers, septic-safe, low-suds for front-loaders.',
    takeaway: 'Where-and-equipment signals are usually missing entirely from listings. Adding one gets you matched to a constraint query nobody else in the category answers. The cost of adding it is one sentence.',
  },
  {
    label: 'WHY',
    extracts: "Outcome and problem-solving language. Why does this product solve the buyer's specific issue?",
    weak: 'Premium clean.',
    strong: 'Removes set-in food and grass stains without dyes or fragrances that irritate sensitive skin.',
    takeaway: 'Features tell Sparky what a product is. Outcomes tell it what problem the product solves. Sparky recommends solutions, not features. The brands that lead with outcomes win the queries that start with "I need something that..."',
  },
  {
    label: 'WHAT',
    extracts: 'Structured product attributes. Size, count, materials, ingredients, certifications, compatibility.',
    weak: 'Big bottle, great value.',
    strong: '96 fl oz, 96 loads, plant-based surfactants, EPA Safer Choice certified, dye-free and fragrance-free.',
    takeaway: 'On Walmart, attribute fields are not optional, and Sparky weights them more heavily than most surfaces. Every empty attribute is a query Sparky cannot match you to. Complete the fields, and make the values consistent with your title and description.',
  },
  {
    label: 'AI Retrievability',
    extracts: 'The structural readability of your catalog data. Clean structured text versus image-locked info, consistent attributes versus contradictions, complete versus partial.',
    weak: 'A listing where the load count and certifications live only in a packaging image and the ingredient field is blank.',
    strong: 'A listing where every spec is in machine-readable catalog text, the attribute fields are complete, and the same values appear on Walmart, on your DTC site, and anywhere else the product is listed.',
    takeaway: 'Sparky cannot recommend what it cannot read confidently. Image-locked information is invisible. Cross-channel inconsistency creates uncertainty. Both get you skipped, and on Walmart, incomplete attributes are the most common form of both.',
  },
]

const REORDER_LEVERS = [
  {
    title: "Enroll consumables in Walmart's subscription and auto-reorder programs",
    body: 'The agent reorders what is structured to be reordered. A consumable SKU with no subscription or replenishment option gives Sparky no mechanism to default to. This is table stakes for the reorder layer.',
  },
  {
    title: 'Make your replenishment cadence explicit in product data',
    body: 'A 30-day supply. A 96-load bottle. A 60-count. The clearer your consumption cadence, the easier it is for Sparky to time the restock. Vague quantity data forces the agent to guess, and agents do not like guessing.',
  },
  {
    title: 'Maintain availability consistency',
    body: 'A stockout during a scheduled reorder teaches the agent to find a backup, and the backup may quietly become the new default before you notice. The agent reorders what it can reliably get, and Walmart\'s fulfillment signals feed that judgment.',
  },
  {
    title: 'Keep pricing stable',
    body: "Walmart's whole positioning is predictable everyday value, so price thrash reads as especially out of place to an agent planning a recurring purchase. Frequent deep discounts that look like promotions to humans look like unreliability to Sparky. The agent defaults to products it can reorder at a stable price.",
  },
]

const AUDITS = [
  {
    title: 'Test your products in Sparky directly, in the app and in ChatGPT or Gemini.',
    body: 'Open the Walmart app and use Ask Sparky to run the queries your buyers ask. Then run the same queries inside ChatGPT and Gemini, where Sparky now travels. A SKU that surfaces in the app can miss in the embedded surfaces if its data is thin. If your products do not surface, the issue is your listing, not the algorithm. Run 5 to 10 buyer queries per top SKU and log which ones return your product.',
  },
  {
    title: 'Run your top 10 SKUs through the 6-dimension framework.',
    body: 'Score each dimension 0 to 3 for each SKU. Anything below 2 is a fix in priority order. Most brands find WHO and AI Retrievability are the bottom two and fix them first.',
  },
  {
    title: 'Audit your Walmart attribute completeness.',
    body: 'Sparky weights structured attributes heavily, so empty fields cost more here than on most surfaces. Fill every relevant attribute, and make the values consistent with your title and description. Pay extra attention to size, count, ingredients, certifications, and compatibility fields.',
  },
  {
    title: 'Rewrite your titles and descriptions as natural-language sentences.',
    body: 'Replace keyword strings with sentences that name the buyer, the use case, and the constraint. Test the rewrites by running buyer queries in Ask Sparky before and after.',
  },
  {
    title: 'Audit subscription and replenishment enrollment for consumables.',
    body: "For every consumable SKU, confirm it is enrolled in Walmart's subscription or auto-reorder options and that its cadence is explicit in the product data. This is what makes a SKU eligible for the reorder layer, not just discovery.",
  },
]

export default function WalmartSparkyPage() {
  return (
    <>
      <SchemaMarkup data={articleSchema} />
      <SchemaMarkup data={faqSchema} />
      <SchemaMarkup data={breadcrumbSchema} />

      {/* ───────────────────── Hero ───────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">
            GEO Cluster &middot; Walmart Sparky
          </span>
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight mb-8">
            How to Optimize Your Walmart Listings for Sparky in 2026
          </h1>

          {/* Stat callout */}
          <div className="bg-white/[0.05] backdrop-blur-md border-l-4 border-brand-gold rounded-r-xl p-6 md:p-7 mb-8">
            <p className="text-[15px] text-gray-300 leading-relaxed">
              Walmart&apos;s Q1 FY27 earnings showed Sparky users spend <strong className="text-brand-gold">35% more per order</strong> than non-Sparky users. Weekly active users grew <strong className="text-brand-gold">over 100% quarter-over-quarter</strong>. Units purchased through Sparky grew <strong className="text-brand-gold">more than 4x sequentially</strong>. Sparky now travels into ChatGPT and Gemini, extending Walmart&apos;s catalog reach beyond Walmart.com.
            </p>
          </div>

          <p className="text-base text-gray-300 leading-relaxed mb-5">
            Walmart Sparky is Walmart&apos;s generative AI shopping assistant, accessed through &ldquo;Ask Sparky&rdquo; in the Walmart app and now embedded inside ChatGPT and Gemini. It answers conversational buyer queries with specific product recommendations pulled from Walmart&apos;s catalog. It reads your structured catalog data, your product attributes and descriptions, your reviews, and your Q&amp;A, and it weights attribute completeness heavily. It does not rank by keyword density. It matches the meaning of a query against the meaning of your listing. Where traditional Walmart search ranks on keywords, price, and sales signals, Sparky reads for persona, use case, and constraint, then recommends the products whose data answers the question the buyer actually asked. CEO John Furner put it plainly on the Q1 call: &ldquo;We&apos;re becoming AI native. And Sparky, our AI shopping agent, is making this possible.&rdquo; Membership and advertising now make up roughly one-third of Walmart&apos;s operating income, and Sparky engagement feeds that flywheel.
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            This is the cluster guide for optimizing on Walmart&apos;s AI shopping surface specifically. The broader framework lives on the{' '}
            <Link href="/geo" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">GEO pillar page</Link>. Every section below answers a question marketplace sellers actually ask when they realize their Walmart search rank no longer predicts whether Sparky recommends them.
          </p>
        </div>
      </section>

      {/* ───────────────────── How Sparky works ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            How Sparky actually works
          </h2>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            Sparky does not read your listing the way Walmart&apos;s traditional search ranking does. Three things matter: how it reads listings, what it reads versus what it ignores, and the cross-platform dimension that makes Walmart&apos;s assistant different from Amazon&apos;s.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">How Sparky reads listings</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                Sparky reads natural language and structured attributes, not keyword density. A buyer asking &ldquo;what laundry detergent is safe for a baby with sensitive skin&rdquo; gets a different result than a buyer asking &ldquo;cheapest large laundry detergent,&rdquo; even though both land in the same Walmart category. The first is a persona-and-constraint match. The second is a price-and-attribute match. Sparky surfaces different products for each because the underlying intent is different. The engine extracts intent from the query, matches it against your catalog data, and ranks on contextual relevance. Brands that write listings as if every query is the same query lose this match. The Walmart-specific wrinkle is that Sparky leans on the structured catalog more heavily than Amazon&apos;s assistant does, so your attribute fields are not a nice-to-have. They are a primary input.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">What Sparky reads vs what it ignores</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                Sparky reads: titles as natural language, product descriptions, structured attributes and specifications, review text (extracted for use case and persona signals), and customer Q&amp;A. It ignores: keyword stuffing, image-locked information, vague feature lists, and inconsistent attribute data across the listing. If a buyer query asks about a specific certification and your listing only shows it as a logo in an image, Sparky cannot match it. If your title says &ldquo;fragrance-free for sensitive skin&rdquo; and your attributes leave the fragrance field blank or contradict it, Sparky reads the inconsistency as risk and skips you. On Walmart, missing or contradictory attribute data is the single most common reason a product that should match a query does not.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">The cross-platform dimension: one catalog, three surfaces</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                This is what makes Sparky different from Amazon&apos;s walled approach. Sparky does not stay inside Walmart. It travels. The same assistant operates on Walmart.com, in the Walmart app, and embedded inside ChatGPT and Gemini conversations, all reading the same catalog. Optimize the listing once and the improvement propagates across every surface Sparky touches. Roughly 200,000 Walmart products were available in ChatGPT during the earlier integration phase, and Sparky now carries that catalog into those conversations directly. The practical takeaway for sellers: a single clean Walmart listing is not a single-surface asset. It is the input three different AI surfaces read. The cross-platform mechanics are covered in{' '}
                <Link href="/blog/walmart-sparky-chatgpt-gemini" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">how Sparky travels into ChatGPT and Gemini</Link>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Why Walmart pulled Instant Checkout and went with Sparky</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                Walmart had a different model first and abandoned it on purpose. OpenAI&apos;s Instant Checkout let shoppers buy Walmart products inside ChatGPT directly, but it converted at about one-third the rate of the same traffic on Walmart.com. Walmart pulled it and replaced it with Sparky as a traveling agent rather than a checkout button. EVP Daniel Danker called the Instant Checkout era &ldquo;a very temporary moment in time.&rdquo; The strategic read is that Walmart would rather own the recommendation layer everywhere than rent a checkout widget on one platform. For sellers, that means the thing being optimized is not a checkout integration. It is whether Sparky recommends your product when it reaches the buyer, wherever that buyer is. The revenue stakes behind this shift are laid out in{' '}
                <Link href="/blog/rufus-sparky-ai-revenue-impact" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">the Rufus and Sparky revenue analysis</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── 6 Dimensions ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            How to score your listing using the 6-dimension framework
          </h2>
          <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-3xl">
            The{' '}
            <Link href="/blog/6-dimension-geo-audit-framework-amazon-listing" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">6-dimension GEO framework</Link>
            {' '}applies to every AI surface. Here is how it scores specifically against how Sparky reads your Walmart listing. Each dimension answers a question Sparky is silently asking when it evaluates whether your product fits a buyer query. The running example below is a household consumable, the kind of value-and-family product Walmart shoppers buy most.
          </p>

          <div className="space-y-5">
            {DIMENSIONS.map((d) => (
              <div key={d.label} className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7">
                <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-accent bg-brand-accent/[0.12] px-3 py-1 rounded-full mb-4">
                  {d.label}
                </span>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  <strong className="text-gray-300">What Sparky extracts:</strong> {d.extracts}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <div className="bg-red-400/[0.06] border border-red-400/[0.15] rounded-lg p-4">
                    <span className="block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-red-400/70 mb-1.5">Weak</span>
                    <p className="text-sm text-gray-400 leading-relaxed">&ldquo;{d.weak}&rdquo;</p>
                  </div>
                  <div className="bg-emerald-400/[0.06] border border-emerald-400/[0.15] rounded-lg p-4">
                    <span className="block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-emerald-400/70 mb-1.5">Strong</span>
                    <p className="text-sm text-gray-400 leading-relaxed">&ldquo;{d.strong}&rdquo;</p>
                  </div>
                </div>
                <p className="text-sm text-brand-accent/80 font-medium border-l-2 border-brand-accent pl-4 leading-relaxed">
                  {d.takeaway}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── Reorder shift ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            Sparky is becoming a reorder engine, not just a discovery engine
          </h2>
          <p className="text-[15px] text-gray-400 leading-relaxed mb-8">
            Discovery optimization gets you recommended once. The Q1 data showed something more important than raw growth: Sparky usage is shifting from general merchandise discovery toward food and consumables, driven by replenishment, meal planning, and personalization features. That shift turns Sparky into a reorder engine. For consumable and replenishable brands, the reorder position is worth more than any single discovery placement, because every future purchase in the category flows to the default until something breaks the pattern. The full breakdown is in{' '}
            <Link href="/blog/walmart-sparky-q1-earnings-replenishment-shift" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">Walmart&apos;s Q1 earnings and the replenishment shift</Link>.
          </p>

          <div className="space-y-4 mb-8">
            {REORDER_LEVERS.map((lever, i) => (
              <div key={lever.title} className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 flex gap-5">
                <span className="text-[11px] font-mono font-bold text-brand-gold/60 tracking-widest mt-1 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">{lever.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{lever.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[15px] text-gray-400 leading-relaxed">
            Amazon&apos;s Alexa for Shopping is building the identical reorder dynamic with auto-restock and scheduled deliveries, covered in{' '}
            <Link href="/geo/alexa-for-shopping" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">the Alexa for Shopping cluster guide</Link>
            . Both major US retailers are converging on agentic replenishment, which means the brands that lock in the default reorder position now compound across both.
          </p>
        </div>
      </section>

      {/* ───────────────────── Audits ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-10">
            Five audits to run on your top 10 SKUs this week
          </h2>
          <div className="space-y-4">
            {AUDITS.map((audit, i) => (
              <div key={audit.title} className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 flex gap-5">
                <span className="text-[11px] font-mono font-bold text-brand-accent/60 tracking-widest mt-1 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">{audit.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{audit.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── What not to do ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            What not to do
          </h2>
          <div className="space-y-5 text-[15px] text-gray-400 leading-relaxed">
            <p>
              Do not chase keyword density. Sparky reads context and structured attributes, not keyword count. A listing with 15 well-placed natural-language signals and complete attributes beats a listing with 50 stuffed keywords every time. The old SEO playbook of cramming variants into titles and descriptions hurts your match score because it crowds out the contextual signal Sparky is actually looking for. This is the same shift covered in{' '}
              <Link href="/blog/geo-vs-seo-marketplace-sellers" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">GEO vs SEO: What Marketplace Sellers Need to Stop Doing in 2026</Link>.
            </p>
            <p>
              Do not optimize for Sparky in isolation. The same data quality work that lifts your visibility here also lifts{' '}
              <Link href="/geo/alexa-for-shopping" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">Alexa for Shopping</Link>
              , ChatGPT, Perplexity, and the agentic surfaces still being built. Treating Walmart&apos;s AI surface as a one-platform problem leaves the compounding return on the table, and on Sparky specifically, the return is unusually large because the assistant physically carries your listing into ChatGPT and Gemini.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────── Closing + CTA ───────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28 border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/60 via-brand-dark to-brand-dark" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            Where this fits in the bigger picture
          </h2>
          <div className="space-y-5 text-[15px] text-gray-400 leading-relaxed mb-10">
            <p>
              Sparky is the most aggressive cross-platform AI shopping agent in the market. Where Amazon keeps Alexa for Shopping inside its own walls, Walmart sends Sparky out to where shoppers already are, embedding it inside ChatGPT and Gemini. That makes the Walmart catalog a three-surface asset and makes clean listing data unusually high-leverage: one optimization pass propagates everywhere Sparky travels. The optimization work compounds across every surface that reads the same product data inputs, and the agentic flows being built on top of these surfaces (<Link href="/aeo" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">AEO</Link>) depend on the same data quality discipline that Sparky already rewards today, plus the reorder positioning it is starting to transact on.
            </p>
            <p>
              For the broader framework that powers this and every other cluster page on this site, see the{' '}
              <Link href="/geo" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">GEO pillar</Link>
              . The data work compounds. The brands that do this work now are the brands Sparky will be recommending and reordering two quarters from now. The brands that wait will spend those quarters doing the audits the early movers already shipped.
            </p>
          </div>

          <div className="text-center">
            <a
              href={NEWSLETTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-gold text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Subscribe to Hu&apos;s Weekly Hoot
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────── FAQ ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">FAQ</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              Frequently Asked Questions about Walmart Sparky optimization
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6">
                <h3 className="text-[15px] font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
