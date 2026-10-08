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

const DESCRIPTION = "The RealReal opened Ask TRR, its Gemini-built AI shopping agent, to all members. Why conversational search suits one-of-one resale inventory, and what is unproven."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'the-realreal-ask-trr-ai-shopping-agent',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'The RealReal Ask TRR: Why AI Search Works Differently for One-of-One Inventory',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: "Ask TRR: How The RealReal's AI Shopping Agent Works",
  excerpt: "The RealReal opened Ask TRR, its AI shopping agent built with Gemini Enterprise, to all 45 million members. Its catalog is the interesting part: nearly every item is one of a kind and inventory turns over daily. Conversational search is worth most when inventory changes constantly and shoppers know their intent better than the terminology, and The RealReal's own case for it is about markdowns, not just conversion.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/the-realreal-ask-trr-ai-shopping-agent.svg',
  category: 'E-commerce Strategy',
  tags: ['The RealReal', 'Ask TRR', 'AI shopping agent', 'conversational search', 'luxury resale', 'marketplace search'],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['product-data-shared-infrastructure-google-ai-mode', 'doordash-ai-shopping-messy-middle-discovery', 'anthropic-project-swap-agentic-commerce-shopper-preferences'],
    featured_image_alt: 'A shopper describing an occasion and a look in natural language, matched to single, one-of-a-kind luxury resale items',
  },
  published_at: new Date().toISOString(),
  content: `<p><a href="https://www.googlecloudpresscorner.com/2026-10-08-The-RealReal-Expands-Ask-TRR-AI-Shopping-Agent-With-Google-Clouds-Gemini-Enterprise" ${EXT}>On October 8, The RealReal expanded Ask TRR</a>, its AI shopping agent built with Google Cloud's Gemini Enterprise for Customer Experience, to all 45 million members after a pilot.</p>

<p>Most retailer shopping assistants are interesting for what they say about AI. This one is more interesting for what it says about catalogs. The RealReal sells luxury resale, with more than one million unique pieces listed, and nearly every item is the only one of its kind.</p>

<h2>What Ask TRR does today</h2>

<p>Ask TRR lets shoppers search The RealReal's assortment in natural language instead of keywords and filters. The company's example is a question as open as "What luxury bag should I buy?", answered with recommendations "designed around their intent and preferences." It searches The RealReal's own inventory. It is not a general shopping assistant.</p>

<p>Two things are planned rather than live. The RealReal says it will add AI-driven recommendations to product description pages, with no date given. And it has not documented which personalization inputs the agent uses beyond pointing to "fifteen years of proprietary data."</p>

<p>Two numbers need care. Forty-five million is The RealReal's member count, not the number of people using Ask TRR. And the pilot is described as "successful," but The RealReal has published no conversion, engagement or sales result from it.</p>

<h2>Why conventional search has a harder job with one-of-one inventory</h2>

<p>The RealReal states its own reasoning plainly: "Traditional keyword search was built for retailers selling many units of the same product. At The RealReal, every item is one-of-one: once a piece sells, it's gone for good, and new inventory arrives every day."</p>

<p>That is a real structural difference. Keyword search and filters work well when the same product is listed repeatedly, its attributes are clean and stable, and the shopper knows roughly what to type. A shopper looking for a specific phone case can name it.</p>

<p>Luxury resale strains all three. Each listing is a single unit, so there are no repeat sales to learn from. Inventory turns over daily, so whatever a shopper found last week may be gone. And, in The RealReal's words, shoppers "often know what they want, like a silhouette, an era, or a look for an occasion, but lack the exact designer name or keyword to find it."</p>

<p>When the shopper knows the occasion but not the label, a search box that expects a label has little to work with.</p>

<h2>The part underneath the agent</h2>

<p>The more useful detail came on <a href="https://www.fool.com/earnings/call-transcripts/2026/08/13/realreal-real-q2-2026-earnings-call-transcript/" ${EXT}>The RealReal's second quarter earnings call in August</a>, when it was still testing the agent. CEO Rati Levesque gave the example of someone "looking for a dress for a fall wedding in Upstate New York," then described the work underneath it: the company is "using AI and our proprietary data to automatically add richer detail to every listing, information like occasion, collection and trend data."</p>

<p>That is the point most coverage skipped. An agent can only match "fall wedding" to a dress if something in the data connects them. The RealReal is not just adding a chat window. It is generating the attributes that make intent-based matching possible, and it says the same enrichment makes items more discoverable off its own site too.</p>

<p>I made a similar argument about <a href="/blog/product-data-shared-infrastructure-google-ai-mode">product data becoming shared infrastructure</a> for AI surfaces. Ask TRR is the on-site version of it.</p>

<h2>The sell-through question</h2>

<p>On the same call, an analyst asked the sharpest question about the project. Shopping assistants usually raise conversion, he noted, but The RealReal already has high sell-through, and he asked how this would help financially.</p>

<p>Levesque's answer moved the case from whether items sell to when and at what price: "our sell-through is good, but does that mean less discounting when you're getting the product, the right product to the right buyer even faster." CFO Ajay Gopal said on the same call that the company had extended its AI pricing algorithm to manage how an item's price moves from the moment it launches. Price falls as an item ages, so getting it to the right buyer sooner could protect price.</p>

<p>That is a coherent theory for unique inventory, where the risk is less that an item never sells and more that it sells late and cheap. It is also only a theory. Management said it was "looking at conversion to see what that KPI looks like," and nothing since has reported the answer.</p>

<h2>Where this applies, and where it does not</h2>

<p>The useful takeaway is not that AI search beats keyword search. It is that two conditions decide how much a conversational layer is worth.</p>

<p>The first is how unique and fast-changing the inventory is. The second is how precisely shoppers can describe what they want. The RealReal is high on both. Vintage, art, collectibles and home decor sit closer to it.</p>

<p>Put plainly: a stable catalog of repeat products rewards exact attributes, because the shopper and the store already share a vocabulary. A catalog of single, constantly changing items, sold to shoppers who describe a feeling rather than a product, needs that vocabulary translated. That translation is the job an intent layer does.</p>

<p>Catalogs where shoppers know exact specifications sit somewhere else. Auto parts are a long tail, but fitment is a hard constraint, and structured filters remain the safer tool. B2B buyers often search by part number. On the same day as Ask TRR, <a href="https://chainstoreage.com/newegg-realreal-team-google-conversational-ai-shopping" ${EXT}>Newegg announced checkout inside Google AI Mode and Gemini</a>, built around "product specs and use cases." That is a different job: distributing a specification-driven catalog to outside AI surfaces, not translating fuzzy intent inside one.</p>

<p>Neither approach replaces keyword search. They answer different kinds of shoppers.</p>

<h2>What marketplace operators should take from it</h2>

<p>Start by placing your own catalog on those two dimensions before you buy a conversational layer. If your inventory repeats and your shoppers search by model number, better filters may beat a chat window.</p>

<p>If your catalog looks more like The RealReal's, invest in the attributes first. Occasion, use case, style and era have to exist in your data before any agent can match them. The <a href="/blog/anthropic-project-swap-agentic-commerce-shopper-preferences">hardest part of agentic shopping</a> is knowing what the shopper wants, and the second hardest is describing the inventory in the same terms.</p>

<p>Then measure what the theory predicts. For unique inventory, that means time to sale and markdown depth, not only conversion. It is also what <a href="/blog/doordash-ai-shopping-messy-middle-discovery">AI moving the messy middle into the machine</a> looks like on a retailer's own site.</p>

<p>If a shopper describes your product perfectly but uses none of your keywords, does your search find it?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
