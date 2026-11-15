import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const envFile = readFileSync(join(__dirname, '..', '.env.local'), 'utf-8')
const envVars = {}
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) envVars[match[1].trim()] = match[2].trim()
})

const supabase = createClient(
  envVars.NEXT_PUBLIC_SUPABASE_URL,
  envVars.SUPABASE_SERVICE_ROLE_KEY
)

const DESCRIPTION = "Reuters saw an Amazon plan to map product relationships across the web. Why feeds are not enough for AI shopping agents, and what brands should govern."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: "amazon-world-product-graph-ai-shopping",
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "Amazon's World Product Graph Shows Why Product Feeds Are Not Enough",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: "Amazon World Product Graph and the Future of AI Shopping",
  excerpt: "Reuters reported an internal Amazon proposal to map how products relate across the web. Feeds tell a platform what exists. Relationships shape which product an agent recommends.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/amazon-world-product-graph-ai-shopping.svg',
  category: "E-commerce Strategy",
  tags: ["Amazon", "World Product Graph", "Alexa for Shopping", "Shop Direct", "product data", "product feeds", "agentic commerce"],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ["product-data-shared-infrastructure-google-ai-mode", "walmart-agent-gateway-agent-profiles", "openai-business-hub-chatgpt-business-agents"],
    featured_image_alt: "Pull quote from Robert Hu on Amazon's World Product Graph: Feeds tell a platform what exists. Relationships shape which product an agent recommends.",
  },
  published_at: new Date().toISOString(),
  content: `<p>On November 13, <a href="https://finance.yahoo.com/technology/ai/articles/exclusive-amazon-plan-own-world-110216227.html" ${EXT}>Reuters reported</a> Amazon has drafted a plan, called World Product Graph, to collect data on virtually every product for sale, whether or not Amazon stocks it. Greg Bensinger's report rests on an internal Amazon document and people familiar with the matter.</p>

<p>The more useful detail is what the document says is missing. Robert Tekiela, a vice president in Amazon's Selection and Catalog Systems unit, writes that shoppers could always find products on Amazon. What they lacked was an answer to "how do these products relate to each other." That is a claim about relationships, not listings.</p>

<h2>What Reuters found</h2>

<p>The document is a PR/FAQ, the memo format Amazon uses to argue for a new product, and carries an aspirational release date of October 1, 2027. Reuters could not determine whether or when the plan will be implemented, or whether that date is realistic. People familiar with it said the project could be modified or abandoned for financial or other reasons.</p>

<p>Amazon told Reuters that draft, outdated documents often give an incomplete picture, and that a brainstorming document does not necessarily reflect its current plans. It said it constantly works to make its catalog comprehensive, accurate and helpful.</p>

<p><a href="https://www.amazon.jobs/content/en/teams/e-commerce-foundation/ascs" ${EXT}>Amazon's careers site</a> describes Selection and Catalog Systems as running the systems behind its catalog. The document says Coca-Cola and Bayer, among others, have signed up to contribute product data, and describes a CEO-level summit with Procter & Gamble for a trial. None of the three responded to Reuters, and none has publicly confirmed taking part.</p>

<p>The data would come from brands and retailers contributing continuously, and from Amazon independently crawling other retailers' websites. The document says the project depends on discovering how brands organize products on their own sites. Reuters could not determine how the crawling would work or whether Amazon would seek permission in every case.</p>

<h2>Why Amazon needs data beyond its own marketplace</h2>

<p>The document's stated problem is that shoppers leave Amazon to work out how products relate, on Google, brand websites, review sites and forums. It also says many answers from Amazon's assistant, then called Rufus, were wrong or incomplete in ways shoppers could not detect, and that better data would let Amazon run cheaper models. Amazon disputed the document's usage figures as significantly outdated and said Alexa for Shopping is roughly 97% accurate globally by its own measure.</p>

<p>People familiar with the matter told Reuters executives worry that outside AI shopping agents could send traffic to sites with more complete data. Amazon blocked Meta's Muse agent in September and is in litigation with Perplexity over similar access. Blocking keeps agents out. A fuller product record would strengthen Amazon's own assistant and could make Amazon's interpretation of products harder for competing agents to ignore.</p>

<h2>A feed describes an offer. A graph determines how products relate.</h2>

<p>A product feed describes one merchant's offers: identifiers, price, availability and attributes. Feeds are how merchants reach Google Merchant Center, Amazon's Shop Direct and OpenAI's Business Hub. They remain necessary, but each is one merchant's view of its own items.</p>

<p>An agent shopping across the web needs answers no single feed holds: whether three retailer listings are the same headphones, whether a model is current or last year's, which cases fit it and what replaced a discontinued version. Answering means reconciling identities and relationships across sources, which involves judgment and some uncertainty. That reconciliation is the graph.</p>

<figure style="margin: 2.5rem 0;">
<picture>
<source media="(max-width: 640px)" type="image/svg+xml" srcset="/images/blog/amazon-world-product-graph-relationships-mobile.svg" width="600" height="1060" />
<source type="image/svg+xml" srcset="/images/blog/amazon-world-product-graph-relationships.svg" width="1600" height="900" />
<img src="/images/blog/amazon-world-product-graph-relationships.png" alt="Illustration of Wireless Headphones Model X linked to three unbranded retailer offers as the same product, to its predecessor Model W, and to two compatible accessories." width="1600" height="900" loading="lazy" style="max-width: 100%; height: auto; border-radius: 8px; display: block; margin: 0;" />
</picture>
<figcaption style="margin-top: 0.75rem; font-size: 0.875rem; line-height: 1.55; color: #8a9aa2;">One product can appear as multiple retailer offers while retaining relationships to earlier models, variants and compatible accessories. A product graph reconciles those relationships. Illustration: TRH.</figcaption>
</figure>

<p>Amazon already models some relationships within its catalog. Its <a href="https://developer-docs.amazon/sp-api/docs/catalog-items-api-v2022-04-01-reference" ${EXT}>Selling Partner API defines variation families and package hierarchies</a>, and in 2020 Amazon researchers <a href="https://www.amazon.science/blog/building-product-graphs-automatically" ${EXT}>published work from an Amazon Product Graph group</a>. Reuters does not describe World Product Graph's design, so whether it extends that work is unclear. Google's comparable <a href="https://blog.google/products-and-platforms/products/shopping/more-ways-to-shop/" ${EXT}>Shopping Graph, introduced in 2021</a>, models products, sellers, brands, reviews and how they relate, using Merchant Center data and the wider web. Google <a href="https://blog.google/products-and-platforms/products/shopping/google-shopping-ai-mode-virtual-try-on-update/" ${EXT}>said in May 2025</a> it held more than 50 billion listings.</p>

<h2>Where Alexa for Shopping fits</h2>

<p>The cross-web part is already live. Amazon's <a href="/geo/alexa-for-shopping">Alexa for Shopping</a> page says the assistant lets customers <a href="https://www.aboutamazon.com/news/retail/alexa-for-shopping-ai-assistant" ${EXT}>shop other retailers across the web</a> through Shop Direct, compares features, prices and reviews across Amazon and the web, and, for eligible items, uses Buy for Me to complete the purchase on the merchant's site. Amazon's November 4 <a href="https://www.aboutamazon.com/news/retail/amazon-shop-direct-merchant-workspace" ${EXT}>Shop Direct Merchant Workspace announcement</a> says those products appear in searches and within Alexa for Shopping.</p>

<p>Nothing establishes that World Product Graph powers any of it. The document ties the project to the assistant's accuracy, and employees describe it as an expansion of Buy for Me and Shop Direct. That it would become the relationship layer underneath Alexa for Shopping is my inference.</p>

<h2>The decision layer does not need the sale</h2>

<p>In Shop Direct, the merchant fulfills the order and handles returns and service. With Buy for Me, Amazon's agent buys from the merchant's website. Amazon is not the seller, yet the comparison, recommendation and route to purchase run through Amazon.</p>

<p>A relationship layer would extend that position. Whoever decides that two listings are the same item, that one model succeeds another or that an accessory fits frames the choice before any retailer competes on price. Reuters reports that people familiar with the plan see a sufficiently complete product record as a way to make Amazon harder for outside shopping agents to bypass, while protecting its ad business. Nothing in the reporting suggests a neutral database.</p>

<p>Amazon is not alone. <a href="/blog/walmart-agent-gateway-agent-profiles">Walmart's Agent Gateway</a>, an invitation-only beta, offers agents product and fulfillment data from Walmart in place of scraping. <a href="/blog/openai-business-hub-chatgpt-business-agents">OpenAI's Business Hub</a> lets verified businesses connect product feeds while OpenAI keeps the right to supplement, edit or replace what they submit using other sources. Each wants to be where product facts get settled.</p>

<h2>What brands and retailers should do now</h2>

<p>Do not optimize for an unlaunched project. Do work that already pays off with every system reading product data, the shared record I described in <a href="/blog/product-data-shared-infrastructure-google-ai-mode">Google AI Mode's use of product data</a>.</p>

<p>Govern relationships, not just listings:</p>

<ul>
<li>Canonical identity: the same identifiers for the same product everywhere it is sold.</li>
<li>Model lineage: which model replaced which, and when.</li>
<li>Variants: size, color and style families that resolve to one parent.</li>
<li>Compatibility and replacements, stated in text a machine can read.</li>
<li>Current specifications, with retired versions clearly marked.</li>
<li>Retailer consistency, so partners do not describe one item three ways.</li>
<li>Evidence for claims, such as certifications and test results, that a system can check.</li>
</ul>

<p>The document ties the graph to how brands organize their own websites. Whether or not it ships, the brand site is becoming one of the reference records platforms reconcile. Where it is ambiguous, another party's interpretation fills the gap.</p>

<h2>What remains unconfirmed</h2>

<p>Amazon has not launched World Product Graph or confirmed a date, and the plan may change or end. Brand participation rests on the document, not the companies. Crawling methods and permissions are unknown. There is no public evidence of the graph's coverage, accuracy or effect on purchases.</p>

<p>The report does show where Amazon thinks the advantage lies. Feeds tell a platform what exists. Relationships shape which product an agent recommends.</p>

<p>If Amazon can decide how products relate across the web, how much will it matter who completes the sale?</p>`,
}

const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', post.slug)
if (existing && existing.length) { console.error('Slug already exists, not inserting'); process.exit(1) }

if (!process.argv.includes('--apply')) {
  console.log('Dry run. Content length:', post.content.length, '- pass --apply to insert.')
  process.exit(0)
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
