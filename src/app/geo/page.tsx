import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'

const GEO_DESCRIPTION =
  'Research on how AI engines like Rufus, Sparky, ChatGPT, Claude, Gemini, and Perplexity recommend products, with the 6-dimension framework and live RecoScope data behind the shift in product discovery.'

export const metadata: Metadata = {
  title: 'Generative Engine Optimization (GEO) and AI Product Discovery',
  description: GEO_DESCRIPTION,
  alternates: { canonical: '/geo' },
  openGraph: {
    title: 'Generative Engine Optimization (GEO) and AI Product Discovery | Robert Hu',
    description: GEO_DESCRIPTION,
    url: `${SITE_URL}/geo`,
    type: 'website',
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
      'Research on how AI engines like Rufus, Sparky, ChatGPT, Gemini, and Perplexity recommend products.',
    images: ['/images/geo/geo.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Generative Engine Optimization for Ecommerce',
  description:
    'Research on how AI engines recommend products, with the 6-dimension framework and live RecoScope data behind the shift in product discovery.',
  image: `${SITE_URL}/images/geo/geo.png`,
  author: {
    '@type': 'Person',
    name: 'Robert Hu',
    url: `${SITE_URL}/about`,
    jobTitle: 'Commerce and Technology Researcher',
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
  datePublished: '2026-04-30T12:00:00-07:00',
  dateModified: '2026-07-05T12:00:00-07:00',
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

const FAQS: { q: string; a: string; link?: string }[] = [
  {
    q: 'Is GEO replacing SEO?',
    a: 'No. GEO is an additional optimization layer on top of SEO. Your Google rankings, your Amazon organic search position, and your DTC site indexing all still depend on traditional SEO work. GEO addresses what happens when buyers shift their search behavior from typing keywords into Google to asking ChatGPT, Rufus, or Sparky a natural-language question. Both surfaces still drive revenue. The brands that win in 2026 are running both playbooks.',
  },
  {
    q: 'Do I need GEO if I only sell on Amazon?',
    a: 'Yes. Amazon Rufus already handles 13% or more of Amazon searches and growing. ChatGPT, Perplexity, and Gemini also drive traffic to Amazon listings through their shopping flows. If your listings are not optimized for natural-language matching, you are invisible to a fast-growing share of high-intent traffic that lands on Amazon from off-platform AI surfaces.',
  },
  {
    q: 'How do I know if my products are showing up in AI search?',
    a: 'Run prompts in ChatGPT, Claude, Gemini, and Perplexity that match how your buyers describe their need. Ask Rufus on the Amazon app for category recommendations. Track which brands get cited and where you appear. RecoScope automates this across 10 categories on a weekly cadence and is the fastest way to build a baseline.',
  },
  {
    q: 'How long does GEO take to show results?',
    a: 'Listing-level changes (titles, bullets, backend attributes, schema markup) compound within weeks if the underlying data is strong. Brand-entity reinforcement (citations, review velocity, content layer) takes 2 to 4 months to show in tracker data. The brands that see fast results are the ones with already-clean data who are filling specific gaps. The brands that take longer are usually rebuilding the foundation.',
  },
  {
    q: "What's the difference between GEO and AEO?",
    a: "GEO gets you mentioned inside an AI answer. AEO gets you purchased by an AI agent. GEO is the foundation for AEO. Without GEO data structure, AI agents cannot find or evaluate your product to complete a transaction. Most brands should focus on GEO first. AEO becomes the priority when agent-driven purchase volume meaningfully appears in your category.",
    link: '/aeo',
  },
  {
    q: 'Can I do GEO myself?',
    a: 'The basics, yes. You can run prompt-based diagnostics in ChatGPT, Claude, Gemini, and Perplexity, audit your own listings against the 6-dimension framework, and add schema markup to your DTC site. The strategic layer (cross-platform data consistency, category-specific positioning, longitudinal tracker analysis) is where most brands hit a wall.',
  },
  {
    q: 'Does GEO work for Walmart sellers the same way it works for Amazon?',
    a: 'The 6-dimension framework applies to both. The implementation differs. Walmart Sparky weights backend attribute completeness more heavily than Rufus does and pulls structured catalog data with less reliance on review sentiment than Amazon. Walmart is also explicitly treating AI as organic discovery rather than a paid traffic surface, which means data quality outperforms ad budget on Sparky in a way it does not yet on Rufus.',
  },
  {
    q: "Do I need GEO if I'm running paid ads on Amazon Connect or Walmart Connect?",
    a: 'Yes, and the two are complementary. Paid ads buy visibility in keyword and category placements. GEO buys visibility in AI-generated recommendations, which are growing faster than keyword search. The brands that get the best return on paid ads are the ones with strong organic GEO foundations because the AI surfaces and the ad surfaces share the same underlying product data. Weak data hurts both.',
  },
  {
    q: 'What\'s the difference between GEO and "AI SEO"?',
    a: '"AI SEO" is a marketing term used inconsistently. Some agencies use it to mean optimizing content for AI Overviews (which is publisher GEO). Others use it to mean optimizing keywords for AI search (which is closer to traditional SEO with new tools). GEO is a more precise term: it specifically describes optimization for generative AI engines that synthesize answers and recommendations rather than rank links. If a vendor cannot tell you which AI surface they optimize for, they probably do not optimize for any of them.',
  },
  {
    q: 'How do I measure GEO performance?',
    a: 'Three layers. First, recommendation appearances: how often your brand surfaces in AI answers across ChatGPT, Claude, Gemini, Perplexity, Rufus, and Sparky. Second, AI-influenced traffic and conversion: traffic from AI referrers and the conversion rate of that traffic relative to your other channels. Third, share of category: the percentage of relevant prompts in your category where your brand shows up. RecoScope tracks the first and third on a weekly cadence.',
  },
  {
    q: 'Can I do GEO without changing my Amazon listings?',
    a: 'Partially. You can add schema to your DTC site, build content that supports brand entity reinforcement, and improve cross-platform consistency without touching Amazon directly. But the core of ecommerce GEO is the listing data itself, and Amazon represents the largest single bucket of listing surface area for most brands. Skipping the Amazon listing rewrite limits the upside meaningfully.',
  },
  {
    q: 'How long does it take to see Sparky and Rufus citations after listing changes?',
    a: 'Walmart Sparky tends to reflect changes in 1 to 3 weeks because Sparky pulls heavily from the structured catalog, which Walmart updates quickly. Amazon Rufus tends to take 3 to 6 weeks because Rufus relies on the COSMO knowledge graph plus review accumulation, both of which update on slower cycles. Tracker data on RecoScope shows consistent week-over-week movement in both, which is why ongoing tracking matters more than one-time before-and-after measurements.',
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

const AI_SURFACES: { name: string; body: string; href?: string }[] = [
  {
    name: 'Alexa for Shopping (formerly Rufus)',
    body: "Rufus handles 13% or more of Amazon searches and growing. It reads your product listing, customer reviews, the Q&A section, and A+ content. It cross-references this against the COSMO knowledge graph, which is Amazon's proprietary commonsense reasoning engine for shopping. Rufus ignores image-locked text, vague marketing copy, and any data Amazon's structured attribute fields cannot parse. RecoScope's Rufus tracker shows category coverage that often differs from organic Amazon search rankings, especially in categories with strong review sentiment patterns.",
    href: '/geo/alexa-for-shopping',
  },
  {
    name: 'Walmart Sparky',
    body: "Sparky drives 35% higher average order values than non-Sparky shoppers on walmart.com and is now embedded inside ChatGPT and Gemini conversations. It reads Walmart's structured catalog data, including backend attributes, specifications, and product descriptions. It also reads reviews and Q&A but weights structured attribute completeness more heavily than Rufus does. Sparky ignores listings with empty backend attribute fields and inconsistent cross-platform data. RecoScope's Sparky tracker shows that the brands winning organic Sparky recommendations are not always the ones spending the most on Walmart Connect ads.",
    href: '/geo/walmart-sparky',
  },
  {
    name: 'ChatGPT and Perplexity',
    body: 'ChatGPT (consumer plus the Operator agent) and Perplexity (with its Comet shopping agent) are off-platform recommendation engines. They pull from indexed web content, third-party reviews, retailer product pages, and structured product data exposed through schema markup. They ignore unstructured marketing pages and content locked behind login walls. RecoScope tracks both engines weekly across 10 categories. The data shows that ChatGPT and Perplexity often surface different brands than the Amazon or Walmart organic top performers, which means visibility on these platforms requires a separate optimization track.',
  },
  {
    name: 'Google AI Overviews',
    body: "Google AI Overviews are top-of-funnel discovery for product research queries. They pull from indexed web content, schema markup on retailer and brand sites, and YouTube video transcripts. They ignore content that lacks structured data and content that does not match the conversational query intent. AI Overviews are less mature than the dedicated shopping AI surfaces but cover a wider range of informational shopping queries. RecoScope monitors AI Overviews coverage as a leading indicator for which brands will show up in Google's eventual agentic shopping rollouts.",
  },
]

const DIMENSIONS = [
  {
    label: 'WHO',
    body: 'WHO is the buyer your product is for, defined with enough specificity that an AI engine can match it against a stated buyer profile. Demographics (age range, gender, life stage), use case (beginner, professional, hobbyist), lifestyle (apartment dweller, road warrior, parent of toddlers), and skill level all count.',
    weak: '"yoga mat for everyone."',
    strong: '"extra-thick yoga mat designed for beginners and joint-sensitive practitioners over 40."',
    takeaway: 'Vague WHO data forces the AI to guess. AI engines do not guess. They skip.',
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
    body: 'WHY is the outcome your product delivers, not the feature it contains. AI engines reward outcome language because that is how shoppers state their needs. "I want to sleep better" is the prompt. "Memory foam mattress" is the feature. The outcome bridges the two.',
    weak: '"12-inch memory foam mattress."',
    strong: '"12-inch memory foam mattress designed to relieve hip and shoulder pressure for side sleepers."',
    takeaway: 'Features describe what the product is. WHY describes what the buyer leaves with. AI engines match outcomes.',
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
  { dim: 'What gets ranked', seo: 'Web pages', geo: 'Answers and product recommendations' },
  { dim: 'How success is measured', seo: 'Rankings, impressions, clicks', geo: 'Citations, AI mentions, recommendation appearances' },
  { dim: 'Where the buyer sees you', seo: 'SERP results page', geo: 'Inside the AI answer or shopping flow' },
  { dim: 'Time to compound', seo: 'Months', geo: 'Weeks if the data is good, longer if it needs rebuilding' },
]

const CATEGORY_DATA = [
  { cat: 'Air Purifiers', distinct: 6, top: 6 },
  { cat: 'Skincare', distinct: 16, top: 4 },
  { cat: 'Lawn Fertilizer', distinct: 11, top: 12 },
  { cat: 'Running Shoes', distinct: 10, top: 6 },
  { cat: 'Standing Desks', distinct: 16, top: 7 },
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
    body: 'Score each top SKU against WHO, WHEN, WHERE, WHY, WHAT, and AI Retrievability. Use a 0 to 5 scale per dimension. The audit reveals which dimension is your weakest link. For most brands, AI Retrievability and WHO are the bottom two, which means structured data and persona clarity are the highest-leverage fixes.',
  },
  {
    n: '03',
    title: 'Rewrite titles and bullets in ICP language',
    body: "Replace keyword strings with sentence-style language that mirrors how the ICP describes their need. Titles should answer who and what. Bullets should answer when, where, why, and what. Stop optimizing for Amazon's old keyword density model. Start optimizing for natural-language matching against shopper queries.",
  },
  {
    n: '04',
    title: 'Expand backend keywords to natural-language phrases',
    body: 'Backend search terms used to be a comma-separated list of keywords. Rufus and Sparky now read backend attributes as natural-language context. Rewrite as descriptive phrases: "designed for runners with knee pain who train on hard surfaces," not "running shoes knee pain hard surface."',
  },
  {
    n: '05',
    title: 'Add schema markup for DTC pages',
    body: 'On your owned site, add Product schema, FAQPage schema for product Q&A, and Review schema for aggregated ratings. Schema is the explicit signal AI engines use to extract structured data without inferring from prose. The more explicit the markup, the higher your AI Retrievability score.',
  },
  {
    n: '06',
    title: 'Build the content layer',
    body: 'On your owned site, publish FAQ pages, comparison content, and buying guides that match the conversational queries shoppers send to ChatGPT and Perplexity. This is the publisher GEO layer that feeds the ecommerce GEO layer. Brand entity reinforcement compounds across both surfaces.',
  },
  {
    n: '07',
    title: 'Track and iterate via RecoScope',
    body: 'Set up category tracking on RecoScope. Watch weekly runs for movement in and out of the top 5. Iterate based on what changed. The brands that compound visibility are the ones treating GEO as ongoing data quality discipline, not a one-time project.',
  },
]

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'The 7-step GEO implementation framework',
  description: 'A practitioner-grade implementation framework for marketplace brands deploying Generative Engine Optimization across Amazon, Walmart, and DTC.',
  step: STEPS.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.title,
    text: s.body,
  })),
}

const WHO_NEEDS = [
  "Amazon and Walmart sellers whose products aren't surfacing in AI shopping tools when buyers ask",
  'Dual-channel brands seeing organic traffic shift from Google to ChatGPT, Perplexity, and Rufus',
  'Brand owners who want to compound the early-mover advantage before competitors close the data gap',
]

const RECOSCOPE_TRACKERS = [
  { category: 'Office Chairs', type: 'Evergreen Tracker', href: 'https://www.getrecoscope.com/tracker/evergreen/office-chairs' },
  { category: 'Running Shoes', type: 'Evergreen Tracker', href: 'https://www.getrecoscope.com/tracker/evergreen/running-shoes' },
  { category: 'Protein Powder', type: 'Monthly Tracker', href: 'https://getrecoscope.com/tracker/evergreen/protein-powder' },
]

const KEY_TAKEAWAYS = [
  'GEO is the discipline of structuring your product data so AI engines like Amazon Rufus, Walmart Sparky, ChatGPT, Gemini, and Perplexity recommend your products when buyers ask. It is a layer on top of SEO, not a replacement for it.',
  'Ecommerce GEO (getting products recommended inside AI shopping flows) is a different discipline from publisher GEO (getting content cited in AI answers). Marketplace brands should prioritize the ecommerce track.',
  'Four surfaces drive most AI-influenced product discovery today: Amazon Rufus, Walmart Sparky, ChatGPT and Perplexity, and Google AI Overviews. Each reads different signals and shows different category coverage.',
  'The 6-dimension framework (WHO, WHEN, WHERE, WHY, WHAT, and AI Retrievability) scores whether an AI engine can match a listing to a buyer’s stated need. Vague data gets skipped.',
  'Live RecoScope tracking shows the AI top 5 rotates run to run, category concentration varies widely, and the brands with the cleanest structured data compound visibility over time.',
  'GEO is the foundation for AEO, where AI agents complete the purchase. Get the GEO data structure right first, then layer AEO as agent-driven buying grows.',
]

// Internal articles and topic pages that already exist. Pages that do not exist
// yet are left as TODO comments in the Related Reading section rather than linked.
const RELATED_READING: { title: string; desc: string; href: string }[] = [
  {
    title: 'Amazon Rufus and Alexa for Shopping',
    desc: 'How to structure Amazon listings for Amazon’s AI shopping assistant.',
    href: '/geo/alexa-for-shopping',
  },
  {
    title: 'Walmart Sparky',
    desc: 'The GEO playbook for Walmart’s AI assistant across walmart.com, ChatGPT, and Gemini.',
    href: '/geo/walmart-sparky',
  },
  {
    title: 'Agentic Engine Optimization (AEO)',
    desc: 'What changes when AI shopping agents complete the purchase, not just the recommendation.',
    href: '/aeo',
  },
  {
    title: 'GEO vs SEO for marketplace sellers',
    desc: 'The five SEO tactics that actively hurt AI visibility in 2026.',
    href: '/blog/geo-vs-seo-marketplace-sellers',
  },
]

export default function GEOPage() {
  return (
    <>
      <SchemaMarkup data={articleSchema} />
      <SchemaMarkup data={faqSchema} />
      <SchemaMarkup data={breadcrumbSchema} />
      <SchemaMarkup data={howToSchema} />

      {/* SECTION 1: Hero + Definition */}
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
              Across 10 product categories tracked on RecoScope, an average of 12 brands rotate through the top 5 ChatGPT recommendations. The category leader holds an average of 6 placements over recent runs. Every other brand is fighting for visibility that shifts run to run. <strong className="text-brand-gold font-semibold">That gap is GEO.</strong>
            </p>
          </blockquote>

          <p className="text-base text-gray-300 leading-relaxed mb-5">
            Generative Engine Optimization (GEO) is the discipline of structuring your product data, listings, and brand presence so that AI engines like Amazon Rufus, Walmart Sparky, ChatGPT, Claude, Gemini, and Perplexity recommend your products when buyers ask. It is not a renamed version of SEO. The reading engine changed, the buyer&apos;s prompt changed, and the optimization changed with it.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-8">
            Most GEO content is written for content publishers and B2B SaaS. This page is written for the brand owner doing $500K to $5M on Amazon, Walmart, or both. The frameworks, examples, and live data are all built around how AI surfaces actually evaluate marketplace listings, not how they cite blog posts.
          </p>
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
            <strong className="text-white">Ecommerce GEO</strong> is about getting your product recommended inside an AI shopping flow. The reading engines are Amazon Rufus, Walmart Sparky, ChatGPT shopping, Perplexity Shopping, and the new agentic surfaces from OpenAI and Google. The optimization targets are product listings, structured attributes, review sentiment, A+ content, and DTC product pages. The success metric is whether your product shows up when a shopper asks &ldquo;what should I buy.&rdquo;
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-5">
            <strong className="text-white">Publisher GEO</strong> is about getting your content cited inside an AI answer. The reading engines are ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews when they answer informational queries. The optimization targets are blog posts, white papers, comparison articles, and reference content. The success metric is whether your domain shows up as a citation in the AI&apos;s response.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-5">
            This page is about ecommerce GEO. Different mechanics, different surfaces, different optimizations. If you sell physical products on Amazon, Walmart, or DTC, your priority is the first track. The publisher GEO playbook is a supporting layer that feeds the ecommerce one through brand entity reinforcement.
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            The reason this distinction matters: most &ldquo;GEO&rdquo; articles you find online are publisher GEO content written for SaaS companies trying to rank inside AI answers. The optimizations they prescribe (FAQ schema, citation-friendly content, expert quotes) help on the publisher side and are not enough on their own to move the needle on AI shopping recommendations. Ecommerce GEO requires structured listing data, persona-specific language, and review quality work that publisher GEO articles do not address.
          </p>
        </div>
      </section>

      {/* SECTION 3: The Four AI Surfaces */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">
            Which AI engines are recommending products to your buyers?
          </h2>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            Four engines drive the majority of AI-influenced product discovery for marketplace brands today. Each one reads different signals, ignores different content types, and shows different category coverage. Optimizing for one without understanding the others leaves visibility on the table.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {AI_SURFACES.map((surface) => (
              <div key={surface.name} className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7 hover:border-brand-accent/30 transition-colors duration-300 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {surface.href ? (
                    <Link href={surface.href} className="hover:text-brand-accent transition-colors duration-200">
                      {surface.name}
                    </Link>
                  ) : (
                    surface.name
                  )}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{surface.body}</p>
                {surface.href && (
                  <Link
                    href={surface.href}
                    className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-brand-accent hover:gap-2.5 transition-all duration-200"
                  >
                    Read the optimization guide
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
              Most listing audits score against generic best practices: keyword density, image count, bullet length. The GEO framework scores against the confirmed ICP. Every dimension answers a question the AI engine is silently asking when it evaluates whether to recommend your product.
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
          <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl overflow-hidden mb-10">
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
            The reading engines reward different things. SEO rewards pages that match how a crawler indexes the web. GEO rewards data that matches how a language model evaluates a buyer&apos;s stated need. Most marketplace listings were written for the SEO era, which is why most listings are invisible to AI surfaces today.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-5">
            For a $500K Amazon brand, SEO is still real. Your Google traffic and your Amazon organic search position both still depend on traditional optimization. But GEO is where the marginal customer is now spending their search time. AI shopping referral volume is growing fast across every retailer with public data on it. Walmart reported ChatGPT alone now drives roughly 21% of its referral traffic. The brands that ignore GEO will keep their existing SEO performance and watch the AI-influenced share of buying shift to competitors with better-structured data.
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            For a deeper breakdown of the five SEO tactics that actively hurt AI visibility, read{' '}
            <Link href="/blog/geo-vs-seo-marketplace-sellers" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">
              GEO vs SEO: What Marketplace Sellers Need to Stop Doing in 2026
            </Link>
            .
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
            The mechanics differ. GEO optimizes for whether ChatGPT, Perplexity, or Sparky names your brand when a buyer asks for a recommendation. AEO optimizes for whether an AI shopping agent (OpenAI Operator, Perplexity Comet, Google&apos;s agentic surfaces) actually completes a purchase from your brand on the buyer&apos;s behalf. AEO requires deeper structural work: machine-readable pricing, real-time inventory exposure, structured return policies, agent-friendly checkout flows.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-5">
            AEO is forward-looking. The volume of agent-completed purchases is small today but growing fast, and major retailers and payment infrastructure providers are publicly building the rails. Amazon, Meta, Microsoft, and Stripe just joined the Universal Commerce Protocol governance body. The infrastructure is being built in public.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-8">
            For most brands at $500K to $5M, the right priority order is GEO first, then AEO. Without GEO foundations (clean structured data, persona-specific language, complete attributes), AEO has nothing to work with. The brands that nail GEO are positioned to add AEO incrementally as agent volume scales. The brands that skip GEO and try to optimize for agents directly find that the agents cannot find them in the first place.
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

      {/* SECTION 7: Live AI Recommendation Data */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">Proprietary Data</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              What does the data actually show?
            </h2>
          </div>

          <p className="text-base text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
            <a href="https://getrecoscope.com" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">RecoScope</a> tracks 10 categories (8 evergreen, 2 seasonal) across ChatGPT, Claude, Gemini, and Perplexity, with separate trackers for Amazon Rufus and Walmart Sparky. Across those categories, three patterns hold up.
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7">
              <h3 className="text-lg font-semibold text-white mb-3">The top 5 is rarely the same five brands</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                In Running Shoes, eight different brands appear in at least one of the last three weekly runs. New Balance appears in two of seven runs. Hoka appears in three. On appears in one. These are major brands with significant Amazon presence and large marketing budgets. Their AI visibility is inconsistent, which means there is room for smaller brands with cleaner data to break in.
              </p>
            </div>
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7">
              <h3 className="text-lg font-semibold text-white mb-3">Category concentration varies dramatically</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Lawn Fertilizer has one dominant brand (Scotts) holding 12 top-5 placements across recent runs. Skincare has no dominant brand at all: 16 different brands rotate through the top 5, and the leader holds only 4 placements. The strategy for breaking into a high-concentration category like Lawn Fertilizer is different from the strategy for a fragmented category like Skincare. RecoScope&apos;s category-level data tells you which game you are playing before you write a single line of listing copy.
              </p>
            </div>
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7">
              <h3 className="text-lg font-semibold text-white mb-3">Volatility creates the opening</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The brands that move from outside the top 5 to inside it over consecutive weekly runs are the ones with the cleanest listing data and the most consistent cross-platform signals. The brands that fall out of the top 5 are usually the ones that stopped paying attention to listing maintenance after launch. Weekly tracking exposes both directions, and the directional signal is often more actionable than the static snapshot.
              </p>
            </div>
          </div>

          {/* Comparison table */}
          <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-gray-400 px-5 py-4">Category</th>
                  <th className="text-left text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-gray-400 px-5 py-4">Distinct brands competing for top 5</th>
                  <th className="text-left text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-gold px-5 py-4">Top brand placement count</th>
                </tr>
              </thead>
              <tbody>
                {CATEGORY_DATA.map((row, i) => (
                  <tr key={row.cat} className={i < CATEGORY_DATA.length - 1 ? 'border-b border-white/[0.05]' : ''}>
                    <td className="text-white font-medium px-5 py-4">{row.cat}</td>
                    <td className="text-gray-400 px-5 py-4">{row.distinct}</td>
                    <td className="text-brand-gold font-semibold px-5 py-4">{row.top}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 italic mb-12">
            How concentrated is your category? RecoScope tracks the rotation of brands through the top 5 ChatGPT recommendations weekly.
          </p>

          {/* Live tracker cards (kept from existing) */}
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
            RecoScope tracks AI recommendations across four general engines plus Rufus and Sparky on a weekly cadence. That is the dataset behind the analysis on this page.
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

      {/* SECTION 9: Who Needs GEO */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-8">
            Which brands need GEO right now?
          </h2>
          <div className="space-y-4 mb-8">
            {WHO_NEEDS.map((point) => (
              <div key={point} className="flex gap-3 items-start">
                <svg className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[15px] text-gray-300 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-gray-300 leading-relaxed">
            If your competitors get cited by ChatGPT three months before you do, that gap will compound. Recommendation engines reward consistency. The brand that gets recommended for the first time in week one builds the review velocity, the entity reinforcement, and the cross-platform consistency that make week 12 easier. The brand that arrives in week 12 is starting from zero against a competitor with three months of compounding data quality.
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
                      <Link href={faq.link} className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">
                        Learn more about AEO &rarr;
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: Editorial ending - Key Takeaways, Related Reading, update note */}
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

          {/* Related Reading */}
          <h2 className="text-xl font-bold text-white tracking-tight mb-5">
            Related reading
          </h2>
          <ul className="border-t border-white/[0.06] mb-10">
            {/* TODO: Add a dedicated "AI Commerce" topic/hub page and link it here once it exists. */}
            {/* TODO: Add a "Google AI Mode" article or topic page and link it here once it exists. */}
            {RELATED_READING.map((item) => (
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
            <p className="text-[13px] text-gray-500">Last updated: July 2026</p>
            <p className="text-[13px] text-gray-500 mt-1">
              This guide is updated as AI commerce platforms continue to evolve.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
