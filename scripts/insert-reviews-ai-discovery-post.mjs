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

const DESCRIPTION = 'New data shows most AI-cited product pages carry many reviews. It cannot show reviews cause citation. The real shift is whether AI can read reviews at all.'

// Primary sources: the Bazaarvoice and Bluefish release, Bazaarvoice's own
// September 1 package release, and independent randomized research.
const SRC_STUDY = 'https://www.globenewswire.com/news-release/2026/09/17/3364022/19098/en/bazaarvoice-and-bluefish-team-up-as-new-research-shows-9-in-10-shoppers-want-real-reviews-behind-ai-product-recommendations.html'
const SRC_SEP1 = 'https://www.globenewswire.com/news-release/2026/09/01/3354231/19098/en/bazaarvoice-introduces-ai-visibility-package-to-prime-brand-content-and-ugc-for-ai-recommendation.html'
const SRC_ACES = 'https://arxiv.org/abs/2508.02630'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'reviews-ai-discovery-infrastructure-bazaarvoice-bluefish',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Your Reviews Are No Longer Just Conversion Content',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Bazaarvoice and Bluefish: Reviews on AI-Cited Product Pages',
  excerpt: 'Bazaarvoice and Bluefish found most AI-cited product pages carry many reviews. The data cannot show reviews cause citation. The more durable shift is whether AI systems can retrieve customer evidence at all.',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/reviews-ai-discovery-infrastructure-bazaarvoice-bluefish.svg',
  category: 'GEO & SEO',
  tags: ['reviews', 'UGC', 'AI search', 'GEO', 'AI shopping', 'product data'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['product-data-shared-infrastructure-google-ai-mode', 'google-ai-overview-ai-mode-citation-teardown-geo', 'niq-similarweb-agentic-commerce-measurement'],
    featured_image_alt: 'Customer reviews moving from a widget rendered for shoppers on a product page into structured data an AI system can retrieve',
  },
  published_at: new Date().toISOString(),
  content: `<p>Reviews have always lived at the bottom of the product page, and their job was to close. A shopper found the product somewhere else, arrived, scrolled down, and read enough other people's experience to feel safe buying.</p>

<p><a href="${SRC_STUDY}" ${EXT}>Research published on September 17</a> by Bazaarvoice and Bluefish points somewhere earlier in that sequence. I have argued before that AI shopping systems care about reviews. The question that was never settled is a different one: whether a system could actually retrieve that customer evidence before the shopper ever opened the product page. Reviews that sit on a page can still be out of reach if they are delivered mainly for human eyes.</p>

<h2>What the data shows</h2>

<p>Bluefish analyzed AI citation data collected from September 1 to 7, 2026, across ChatGPT Web, Google AI Overviews and Perplexity: 237,804 citation instances pointing to 23,592 unique brand and ecommerce URLs, in consumer categories including apparel, snacks, beverages and toys.</p>

<p>Among product pages that were cited, 59% had 100 or more reviews, 92% had ratings of four stars or higher, and 65% displayed a review summary at the top. Bazaarvoice was detected on about one third of cited product pages that carried reviews. The release itself describes these as "common characteristics of AI-cited pages," which is the right phrasing.</p>

<p>A separate Bazaarvoice survey of more than 1,700 active AI users across the US, APAC and EMEA found 57% chose authentic reviews and star ratings as what makes them trust an AI product recommendation most. Another 57% said it was very important to know an AI tool had sourced its recommendation from real reviews and photos, with 33% saying somewhat important. And 62% said they trust AI recommendations more than they did six months ago.</p>

<h2>What it cannot show</h2>

<p>The dataset describes the winners. Without a comparable group of uncited product pages, it cannot tell us which characteristics made them winners. We learn that 59% of cited pages have 100 or more reviews, but not how many uncited pages do, so the figure does not show that heavily reviewed products are more likely to be cited. The same holds for the 92% with high ratings, the 65% with a review summary at the top, and the share carrying Bazaarvoice.</p>

<p>And the obvious alternative explanation is strong. Heavily reviewed products tend to belong to stronger brands, draw more traffic and demand, sell through more retailers, and sit on better pages with more links and authority. Any of those could be doing the work, with review count simply travelling alongside. A cited page is also a source, not necessarily a recommendation, and the three surfaces studied do not select sources the same way.</p>

<p>The scope is narrow: one week, a handful of consumer categories, three AI surfaces. The research comes from two companies that sell review and AI-visibility services, and Bluefish was already named as a measurement partner in the AI Visibility package Bazaarvoice launched on September 1. The survey measures what people say they trust, which is not the same as what the systems use.</p>

<p>None of that is unusual for vendor research, and the same limit applies to <a href="/blog/google-ai-overview-ai-mode-citation-teardown-geo">my own teardown of posts that got cited</a>.</p>

<h2>The better evidence says it depends</h2>

<p>The strongest evidence I know of is not observational. In <a href="${SRC_ACES}" ${EXT}>a randomized audit of AI shopping agents</a>, Allouah and colleagues found that sensitivities to price, ratings and reviews vary sharply across models, and that model updates can drastically reshuffle which products get chosen.</p>

<p>That is a sandbox, with agents choosing products on a page rather than AI answers citing sources. It does not show that reviews drive citation, and it does not make the Bluefish correlations causal. What it does is cut against any single rule about what reviews do for AI visibility.</p>

<p>I have written as though review language were a settled input. Inside a retailer's own assistant that still holds up reasonably well, because <a href="/geo/alexa-for-shopping">the reviews sit in the catalog the assistant reads</a>. ChatGPT search, AI Overviews and Perplexity are different. They have to reach the evidence first, so on the open web the honest version is weaker, and delivery matters as much as content.</p>

<h2>What is actually changing</h2>

<p>The more durable story is not whether AI values reviews. It is whether AI can read them at all.</p>

<p><a href="${SRC_SEP1}" ${EXT}>In launching that September 1 package</a>, Bazaarvoice said that "standard JavaScript rendering creates a massive blind spot for AI crawlers," and that customer reviews, photos and star ratings are "essentially left in the dark." That is a review vendor saying the display layer the industry built for human shoppers was, by its own account, a blind spot for machines.</p>

<p>Its own product sequence this year has been an attempt to fix that. In April it launched an API to serve review content in a crawlable format, initially limited to certain enterprise packages. In May it described sending Google a direct feed of reviews and customer photos every 24 hours, naming Gemini, AI Overviews and AI Mode among the surfaces, for clients on qualifying packages who opt in. In September it packaged the conversion of ratings, reviews and gallery images into structured data.</p>

<p>I have seen the endpoint of that in practice. In one Google AI Mode answer I analyzed, <a href="/blog/product-data-shared-infrastructure-google-ai-mode">the system quoted a customer review from a brand's own site</a> and attributed it to the reviewer by name.</p>

<p>This is my interpretation rather than anything either company has shown. Reviews are being re-plumbed from a widget rendered for people into structured, distributable data. If that continues, customer evidence can shape how a system understands and describes a product before the shopper ever reads a review. That is the upstream shift. Whether it then changes which products get recommended is exactly what this dataset cannot establish.</p>

<h2>What operators can check</h2>

<p>Not review-count targets. The dataset supports none. The checks are about whether the evidence you already have is reachable.</p>

<p>Check whether review text is present in the HTML a crawler receives or appears only after scripts run. Check whether ratings and review summaries are exposed as structured data. Check whether the same UGC is consistent across retailer and brand product pages, or whether each copy tells a different story. Check whether reviews contain real use-case language or mostly "great product, fast shipping." And where a supported feed exists, check whether the brand is actually opted in.</p>

<p>These checks fall across CRO, reputation, merchandising, product data and search, which is usually why nobody owns them.</p>

<p>There is a risk attached. Once review content becomes machine input, fake or manipulated reviews stop being only a human-trust problem. They become a grounding problem, because poisoned customer evidence can influence the systems that consume it. Quality and authenticity matter more in that world than volume.</p>

<p>If an AI system could read only the version of your reviews a crawler sees today, what would it learn about your product?</p>
`,
}

const { data: existing } = await supabase
  .from('blog_posts')
  .select('id, slug')
  .eq('slug', post.slug)
  .maybeSingle()

if (existing) {
  const { error } = await supabase.from('blog_posts').update(post).eq('id', existing.id)
  if (error) { console.error('Update failed:', error); process.exit(1) }
  console.log('Post updated successfully:', existing.id)
} else {
  const { data, error } = await supabase.from('blog_posts').insert(post).select('id').single()
  if (error) { console.error('Insert failed:', error); process.exit(1) }
  console.log('Post inserted successfully:', data.id)
}
console.log('URL: https://theroberthu.com/blog/' + post.slug)
