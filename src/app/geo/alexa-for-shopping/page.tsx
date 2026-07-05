import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'

const NEWSLETTER_URL =
  'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232'

export const metadata: Metadata = {
  title: 'How to Optimize Amazon Listings for Alexa for Shopping in 2026 (formerly Rufus)',
  description:
    'Amazon merged Rufus into Alexa for Shopping in May 2026 and added agentic actions: auto-restock, price-triggered purchases, scheduled deliveries. Here is the 6-dimension framework for getting recommended, plus the new reorder layer, with weak vs strong examples.',
  alternates: { canonical: '/geo/alexa-for-shopping' },
  openGraph: {
    title: 'How to Optimize Amazon Listings for Alexa for Shopping in 2026 (formerly Rufus)',
    description:
      'Amazon merged Rufus into Alexa for Shopping in May 2026 and added agentic actions: auto-restock, price-triggered purchases, scheduled deliveries. Here is the 6-dimension framework for getting recommended, plus the new reorder layer.',
    url: `${SITE_URL}/geo/alexa-for-shopping`,
    type: 'article',
    siteName: 'Robert Hu',
    images: [`${SITE_URL}/images/geo/alexa-for-shopping.png`],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@theroberthu',
    creator: '@theroberthu',
    title: 'How to Optimize Amazon Listings for Alexa for Shopping in 2026 (formerly Rufus)',
    description:
      'Amazon merged Rufus into Alexa for Shopping in May 2026 and added agentic actions. The 6-dimension framework for getting recommended, plus the new reorder layer.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Optimize Your Amazon Listings for Alexa for Shopping in 2026',
  description:
    'Amazon merged Rufus into Alexa for Shopping in May 2026 and added agentic actions: auto-restock, price-triggered purchases, scheduled deliveries. Here is the 6-dimension framework for getting recommended, plus the new reorder layer, with weak vs strong examples.',
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
  datePublished: '2026-05-24',
  dateModified: '2026-05-24',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/geo/alexa-for-shopping`,
  },
  image: `${SITE_URL}/images/geo/alexa-for-shopping.png`,
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'GEO', item: `${SITE_URL}/geo` },
    { '@type': 'ListItem', position: 3, name: 'Alexa for Shopping', item: `${SITE_URL}/geo/alexa-for-shopping` },
  ],
}

const FAQS = [
  {
    q: 'What is Alexa for Shopping and how does it work?',
    a: "Alexa for Shopping is Amazon's AI shopping assistant, powered by Alexa+ and accessed through a cursive A icon in the Amazon app, on Amazon.com, and on Echo Show devices. No Prime membership or Echo device is required. It answers conversational buyer queries with specific product recommendations and can act on the buyer's behalf: auto-restock, price-triggered purchases, and scheduled deliveries. The COSMO model that powered Rufus continues to run the reading engine underneath.",
  },
  {
    q: 'What happened to Amazon Rufus?',
    a: 'Amazon retired the Rufus brand on May 13, 2026 and merged the experience into Alexa for Shopping. The name changed. The technology largely did not. More than 300 million customers used Rufus in 2025, and Amazon credited it with $12 billion in incremental sales. The same reading engine now operates under the Alexa for Shopping name with new agentic capabilities layered on top. Optimization work done for Rufus carries over directly.',
  },
  {
    q: 'How is Alexa for Shopping different from regular Amazon search?',
    a: "Traditional Amazon search ranks products against keyword relevance and sales velocity. Alexa for Shopping ranks products against the semantic match between a conversational query and a listing's natural-language content. A product can rank well on the search results page and still get skipped by the assistant if its content does not answer the persona, use case, or problem the buyer described.",
  },
  {
    q: 'Do I need to optimize differently for voice queries?',
    a: 'The data foundation is the same, but voice raises the bar on natural language. Spoken queries are longer, more conversational, and more constraint-heavy than typed ones, and the assistant reads the same listing data to answer both. Listings written as natural-language sentences that name the buyer, the use case, and the constraint match voice queries. Keyword fragments match neither. Test your top SKUs with spoken queries through the Alexa app or an Echo device, not just typed ones.',
  },
  {
    q: 'How do I become the default for auto-restock?',
    a: 'Four moves. Enroll consumable SKUs in Subscribe & Save so the agent has a reorder mechanism to default to. Make your replenishment cadence explicit in product data: a 30-day supply, a 60-count. Maintain in-stock consistency, because a stockout during a scheduled reorder teaches the agent to find a backup. Keep pricing stable, because the full year of price history the assistant surfaces makes price thrash read as unreliability.',
  },
  {
    q: 'Does optimizing for Alexa for Shopping help on other AI surfaces like ChatGPT?',
    a: 'Yes. Alexa for Shopping, ChatGPT, Perplexity, Sparky, and Gemini all read the same underlying inputs: titles, bullets, structured attributes, reviews, and entity signals across the web. The data quality work that lifts your visibility on Amazon\'s AI surface lifts every other AI surface that pulls from similar inputs. GEO is a portable optimization. Alexa for Shopping is the most mature place to start because the feedback loop is fast and the volume is enormous.',
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
    extracts: 'Persona signals from titles, bullets, and review text. Who is this product for in terms of demographics, lifestyle, skill level, sensitivity, or constraint?',
    weak: 'Premium protein powder for athletes.',
    strong: 'Whey-free pea protein for athletes with dairy sensitivity training 5+ days per week.',
    takeaway: 'The engine rewards specificity. "Athletes" is invisible because every protein powder claims to be for athletes. "Whey-free for dairy sensitivity, 5+ days per week" gets matched to a real query.',
  },
  {
    label: 'WHEN',
    extracts: 'Time-of-day, season, occasion, life stage, or training phase signals.',
    weak: 'Use as a meal replacement.',
    strong: 'Use post-workout within 30 minutes of finishing or as a 4pm energy meal.',
    takeaway: 'Buyers ask when-questions all the time ("what should I drink post-workout," "what\'s a good 3pm snack"). Listings without when-signals do not match those queries no matter how good the product is.',
  },
  {
    label: 'WHERE',
    extracts: 'Setting context. Home, gym, travel, kitchen, office, outdoor, indoor.',
    weak: 'Versatile use.',
    strong: 'Sized for gym bags and travel cases. Spill-proof container suitable for car commutes and office desks.',
    takeaway: 'Where-signals are usually missing entirely from listings. Adding one gets you matched to a query nobody else in your category answers. The cost of adding it is one sentence.',
  },
  {
    label: 'WHY',
    extracts: "Outcome and problem-solving language. Why does this product solve the buyer's specific issue?",
    weak: 'Made with high-quality ingredients.',
    strong: 'Reduces post-workout bloating common with whey-based powders. 26g protein supports muscle recovery without dairy-related digestive issues.',
    takeaway: 'Features tell the engine what a product is. Outcomes tell it what problem the product solves. Alexa for Shopping recommends solutions, not features. The brands that lead with outcomes win the queries that start with "I need help with..."',
  },
  {
    label: 'WHAT',
    extracts: 'Physical product attributes. Materials, size, weight, certifications, compatibility, ingredients.',
    weak: 'Large size available.',
    strong: '2.5 lb container. 30 servings. Third-party tested for purity. Vegan, gluten-free, non-GMO certified.',
    takeaway: 'Attribute fields are not optional. Every empty attribute is a query the engine cannot match you to. Brands with complete attribute fields outperform brands with partial ones on every query that includes a filter constraint.',
  },
  {
    label: 'AI Retrievability',
    extracts: 'The structural readability of your listing data. Clean structured text versus image-locked info, consistent attributes versus contradictions, complete versus partial.',
    weak: 'A listing where the dosage info is only in a lifestyle image and the certifications are vague.',
    strong: 'A listing where every spec is in machine-readable text, attribute fields are 100% complete, and the same data appears identically across the Amazon detail page and your DTC site.',
    takeaway: 'The engine cannot recommend what it cannot read confidently. Image-locked information is invisible. Cross-channel inconsistency creates uncertainty. Both get you skipped.',
  },
]

const REORDER_LEVERS = [
  {
    title: 'Subscribe & Save enrollment is table stakes for consumables',
    body: 'The agent restocks what is structured to be restocked. A consumable SKU not enrolled in a subscription or replenishment program gives the agent no mechanism to default to it.',
  },
  {
    title: 'Make your replenishment cadence explicit in product data',
    body: 'A 30-day supply. A 60-count. A monthly refill. The clearer your consumption cadence, the easier it is for the agent to time the restock. Vague quantity data forces the agent to guess, and agents do not like guessing.',
  },
  {
    title: 'Maintain availability consistency',
    body: 'A stockout during a scheduled reorder teaches the agent to find a backup, and the backup may quietly become the new default before you notice. The agent reorders what it can reliably get.',
  },
  {
    title: 'Keep pricing stable',
    body: 'Alexa for Shopping surfaces a full year of price history. Frequent deep discounts that look like promotions to humans look like unreliability to an agent optimizing for predictable forward planning. The agent defaults to products it can reorder at a stable price.',
  },
]

const AUDITS = [
  {
    title: 'Test your products in Alexa for Shopping directly, typed and spoken.',
    body: 'Open the Amazon app and ask the assistant (cursive "A" icon) the queries your buyers ask. Then run the same queries by voice through the Alexa app or an Echo device. Spoken queries run longer and more conversational, so a SKU that surfaces for the typed query can miss the spoken one. If your products do not surface, the issue is your listing, not the algorithm. Run 5 to 10 buyer queries per top SKU and log which ones return your product.',
  },
  {
    title: 'Run your top 10 SKUs through the 6-dimension framework.',
    body: 'Score each dimension 0 to 3 for each SKU. Anything below 2 is a fix in priority order. Most brands find that WHO and AI Retrievability are the bottom two and fix them first.',
  },
  {
    title: 'Audit your backend attributes for completeness.',
    body: 'Every empty field is a missed match. Fill them all. Pay extra attention to dietary attributes, compatibility, certifications, and age range fields, which the engine weights heavily.',
  },
  {
    title: 'Rewrite your titles and top bullets as natural-language sentences.',
    body: 'Test the rewrites by running buyer queries before and after.',
  },
  {
    title: 'Run a review prompt campaign for your top 5 SKUs.',
    body: 'Encourage buyers to describe specific use cases in reviews, not just product quality. A simple post-purchase email asking "what specific problem did this solve for you" is the highest-leverage prompt for review specificity.',
  },
]

export default function AlexaForShoppingPage() {
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
            GEO Cluster &middot; Alexa for Shopping
          </span>
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight mb-8">
            How to Optimize Your Amazon Listings for Alexa for Shopping in 2026
          </h1>

          {/* Stat callout */}
          <div className="bg-white/[0.05] backdrop-blur-md border-l-4 border-brand-gold rounded-r-xl p-6 md:p-7 mb-8">
            <p className="text-[15px] text-gray-300 leading-relaxed">
              Amazon credited Rufus, now Alexa for Shopping, with <strong className="text-brand-gold">$12 billion in incremental sales in 2025</strong>. More than <strong className="text-brand-gold">300 million customers</strong> used it last year. Rufus users converted at <strong className="text-brand-gold">60% higher rates</strong> than non-users. In May 2026 Amazon merged Rufus into Alexa for Shopping and added agentic actions: auto-restock, price-triggered purchases, and scheduled deliveries.
            </p>
          </div>

          <p className="text-base text-gray-300 leading-relaxed mb-5">
            Alexa for Shopping (formerly Rufus) is Amazon&apos;s AI shopping assistant, powered by Alexa+ and available across the Amazon app, Amazon.com, and Echo Show devices through a cursive &ldquo;A&rdquo; icon. No Prime membership or Echo device required. It answers conversational buyer queries with specific product recommendations, and since the May 13, 2026 rebrand it also acts: restocking consumables automatically, buying when a price target hits, and scheduling deliveries. It reads your listings, your reviews, your Q&amp;A section, and Amazon&apos;s behavioral signals to decide which products fit a given query. It does not match keywords. It matches meaning. The rebrand changed the name and added the action layer. The reading engine underneath, the technology formerly branded as Rufus, still works the same way.
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            This is the cluster guide for optimizing on Amazon&apos;s AI shopping surface specifically. The broader framework lives on the{' '}
            <Link href="/geo" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">GEO pillar page</Link>. Every section below answers a question marketplace sellers actually ask when they realize their organic Amazon rank no longer predicts AI visibility.
          </p>
        </div>
      </section>

      {/* ───────────────────── How it works ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            How Alexa for Shopping actually works
          </h2>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            The assistant does not read your listing the way Amazon&apos;s old A9 algorithm did. Four things matter: the engine behind it, what it reads versus what it ignores, the query patterns where it makes the most difference, and what the May 2026 rebrand added.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">The COSMO engine still runs the reading layer</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                Alexa for Shopping is powered underneath by Amazon&apos;s COSMO model, the same engine that powered Rufus before the rebrand. COSMO extracts intent signals from buyer queries, matches them against structured product data, and ranks results based on contextual relevance, not keyword density. A buyer asking &ldquo;what&apos;s the best protein powder for someone with whey sensitivity&rdquo; gets a different result than a buyer asking &ldquo;best protein powder under $30,&rdquo; even though both queries land in the same Amazon category. The first is a persona-and-constraint match. The second is a price-and-attribute match. COSMO surfaces different products for each because the underlying intent is different. Brands that write listings as if every query is the same query lose this match. Everything you optimized for Rufus still applies, because the reading engine did not change in the rebrand.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">What the engine reads vs what it ignores</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                It reads: titles as natural language (not as keyword strings), bullet points, A+ content text, structured product attributes, review text (extracted for use case and persona signals), customer Q&amp;A, brand store content, and category context. It ignores: keyword stuffing, image-locked information, vague feature lists, and inconsistent attribute data across the listing. If a buyer query asks about a specific certification and your listing only shows it as a logo in an image, the engine cannot match it. If your title says &ldquo;best for athletes&rdquo; and your bullets contradict that by targeting &ldquo;casual users,&rdquo; the engine reads the inconsistency as risk and skips you.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">The query patterns it handles best</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                Conversational queries with explicit personas, use cases, problems, or constraints. &ldquo;I need a [product] for [persona] who [problem].&rdquo; &ldquo;What&apos;s a good [product] for [use case] during [occasion].&rdquo; &ldquo;Best [product] under $X that works for [constraint].&rdquo; These patterns are where the assistant generates the most value and where the brands with sharp WHO, WHEN, WHERE, and WHY signals get recommended. Brands with vague feature-list listings lose every conversational query because their data does not match the way buyers actually phrase their needs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">What the rebrand added</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                Three things changed on May 13, 2026 that matter for optimization. First, voice. Alexa for Shopping handles spoken queries across Echo devices and the Alexa app, and spoken queries run longer and more conversational than typed ones, which raises the premium on natural-language listing content. Second, cross-device context. A shopping conversation started on an Echo Show carries to the Amazon app and the desktop site, so the assistant accumulates context about the buyer across sessions and devices instead of starting cold each time. Third, the agentic action layer: auto-restock, price-triggered purchases, and scheduled deliveries. The assistant no longer just recommends. It transacts on the buyer&apos;s behalf, which creates the reorder optimization problem covered below. The full rebrand analysis is in{' '}
                <Link href="/blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">the Alexa for Shopping rebrand post</Link>.
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
            {' '}applies to every AI surface. Here is how it scores specifically against how Alexa for Shopping reads your listing. Each dimension answers a question the engine is silently asking when it evaluates whether your product fits a buyer query.
          </p>

          <div className="space-y-5">
            {DIMENSIONS.map((d) => (
              <div key={d.label} className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7">
                <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-accent bg-brand-accent/[0.12] px-3 py-1 rounded-full mb-4">
                  {d.label}
                </span>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  <strong className="text-gray-300">What the engine extracts:</strong> {d.extracts}
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

      {/* ───────────────────── Backend keywords ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            How Alexa for Shopping reads backend search terms
          </h2>
          <div className="space-y-5 text-[15px] text-gray-400 leading-relaxed">
            <p>
              Backend keywords used to be a keyword stuffing playground. Comma-separated lists of variants, misspellings, and broad category terms designed to capture every long-tail buyer who might type one of them into the old A9 search box. That playbook is dead on the AI surface. The engine reads backend attributes as natural language context, not as a keyword index. Comma-separated fragments get parsed as low-context noise that adds nothing to your match score for any conversational query.
            </p>
            <p>
              The replacement is natural-language phrases that mirror how a buyer actually talks to the assistant. Five backend phrases that signal intent are more valuable than 50 backend keywords that signal nothing. The point of the backend field is no longer keyword coverage. It is contextual reinforcement of the persona, use case, and constraint signals already in your title and bullets.
            </p>
          </div>

          <div className="space-y-3 my-8">
            <div className="bg-red-400/[0.06] border border-red-400/[0.15] rounded-lg p-4">
              <span className="block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-red-400/70 mb-1.5">Bad</span>
              <p className="text-sm text-gray-400 leading-relaxed">&ldquo;protein powder, vegan, whey free, plant based, gluten free, vegan protein, dairy free, recovery protein&rdquo;</p>
            </div>
            <div className="bg-emerald-400/[0.06] border border-emerald-400/[0.15] rounded-lg p-4">
              <span className="block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-emerald-400/70 mb-1.5">Good</span>
              <p className="text-sm text-gray-400 leading-relaxed">&ldquo;Plant-based pea protein for athletes with whey sensitivity who need post-workout recovery without dairy.&rdquo;</p>
            </div>
            <div className="bg-emerald-400/[0.06] border border-emerald-400/[0.15] rounded-lg p-4">
              <span className="block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-emerald-400/70 mb-1.5">Good</span>
              <p className="text-sm text-gray-400 leading-relaxed">&ldquo;Vegan protein supplement for runners and lifters following gluten-free or dairy-free diets.&rdquo;</p>
            </div>
          </div>

          <p className="text-[15px] text-gray-400 leading-relaxed">
            The shift is structural, not stylistic. Comma-separated keyword strings are SEO artifacts. Natural-language phrases are GEO artifacts. The engine rewards the second and ignores the first. This is the same shift covered in{' '}
            <Link href="/blog/geo-vs-seo-marketplace-sellers" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">GEO vs SEO: What Marketplace Sellers Need to Stop Doing in 2026</Link>
            , applied specifically to the backend layer of your Amazon listing.
          </p>
        </div>
      </section>

      {/* ───────────────────── Reviews ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            How the engine reads reviews
          </h2>
          <div className="space-y-5 text-[15px] text-gray-400 leading-relaxed">
            <p>
              Alexa for Shopping does not just read your listing copy. It reads the language buyers use to describe your product in reviews. Specific reviews (&ldquo;perfect for my arthritic hands,&rdquo; &ldquo;great for my 5-year-old&apos;s eczema,&rdquo; &ldquo;fits in my carry-on,&rdquo; &ldquo;no bloating after my morning lift&rdquo;) give the engine persona and use-case signals it then matches to buyer queries with similar language. Vague reviews (&ldquo;good product, fast shipping, would buy again&rdquo;) give it nothing. Five stars without specifics adds nothing to your match score.
            </p>
            <p>
              This creates a compounding effect that most sellers underestimate. The brands that prompt buyers to describe specific use cases in reviews get richer training data for the engine to work with. Every specific review broadens the pool of conversational queries it can confidently match your product against. The brands with thin or generic review depth get skipped when the engine is looking for high-confidence persona matches because the AI has no language to lock onto. Review acquisition strategy is now AI optimization strategy. Asking buyers what problem your product solved for them, in their own words, is the highest-leverage post-purchase prompt you can run.
            </p>
            <p>
              For the broader context on review depth and AI shopping revenue, see{' '}
              <Link href="/blog/rufus-sparky-ai-revenue-impact" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">the Rufus and Sparky revenue analysis</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────── Reorder layer ───────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            The reorder layer: becoming the default the agent restocks
          </h2>
          <p className="text-[15px] text-gray-400 leading-relaxed mb-8">
            Discovery optimization gets you recommended once. The agentic actions Alexa for Shopping added in May 2026 (auto-restock, price-triggered purchases, scheduled deliveries) create a second optimization problem: becoming the product the agent reorders without the buyer re-deciding. For consumable and replenishable categories, the reorder position is worth more than any single discovery placement, because every future purchase in the category flows to the default until something breaks the pattern.
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
            Walmart&apos;s Sparky is building the identical reorder dynamic, confirmed in{' '}
            <Link href="/blog/walmart-sparky-q1-earnings-replenishment-shift" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">Walmart&apos;s Q1 FY27 earnings</Link>
            . Both major US retailers are converging on agentic replenishment. The rebrand context for Amazon&apos;s side is in{' '}
            <Link href="/blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">the Alexa for Shopping rebrand analysis</Link>.
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
              Do not chase keyword density. The engine reads context, not keyword count. A listing with 15 well-placed natural-language signals beats a listing with 50 stuffed keywords every time. The old SEO playbook of cramming variants into titles, bullets, and backend search terms hurts your match score because it crowds out the contextual signal the engine is actually looking for.
            </p>
            <p>
              Do not optimize for Alexa for Shopping in isolation. The same data quality work that lifts your visibility here also lifts Sparky, ChatGPT, Perplexity, and the agentic surfaces still being built. Treating Amazon&apos;s AI surface as a one-platform problem leaves the compounding return on the table.{' '}
              <Link href="/blog/amazon-joins-universal-commerce-protocol" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">See how this connects to Amazon&apos;s broader agent strategy</Link>.
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
              Alexa for Shopping is the most mature AI shopping agent on Amazon and the first with live agentic actions at scale. The optimization work you do here compounds across every AI surface that uses similar product data inputs. Sparky reads structured catalog data the same way, and{' '}
              <Link href="/blog/walmart-sparky-chatgpt-gemini" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">reaches buyers inside ChatGPT and Gemini</Link>
              . ChatGPT and Perplexity pull from review aggregators that get richer when your reviews are use-case specific. The agentic flows being built on top of these surfaces (<Link href="/aeo" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">AEO</Link>) depend on the same data quality discipline that Amazon&apos;s surface already rewards today, plus the reorder positioning it now transacts on. This is the cheapest place to learn what an AI agent looks for in a listing because the feedback loop is fast, the volume is high, and the test queries are infinite.
            </p>
            <p>
              For the broader framework that powers this and every other cluster page on this site, see the{' '}
              <Link href="/geo" className="text-brand-accent hover:text-white transition-colors underline underline-offset-2">GEO pillar</Link>
              . The data work compounds. The brands that do this work now are the brands the agent will be recommending and restocking two quarters from now. The brands that wait will spend those quarters doing the audits the early movers already shipped.
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
              Frequently Asked Questions about Alexa for Shopping optimization
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
