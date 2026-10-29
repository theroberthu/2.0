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

const DESCRIPTION = "Shopify now lets merchants govern the product and business facts shared with AI agents. Here is what its Knowledge Base means for ecommerce GEO."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: "shopify-ai-knowledge-base-ecommerce-geo",
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "Shopify's AI Knowledge Base Shows What Ecommerce GEO Actually Requires",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: "Shopify AI Knowledge Base: What Ecommerce GEO Requires",
  excerpt: "Shopify moved its AI knowledge base into the admin on October 26, making a store's non-product facts a merchant-approved record beside Shopify Catalog. Merchants govern the facts and their sources, not the final answer, and publishing a fact does not guarantee that an agent retrieves it.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/shopify-ai-knowledge-base-ecommerce-geo.svg',
  category: "GEO & SEO",
  tags: ["Shopify", "Shopify Knowledge Base", "Shopify Catalog", "ecommerce GEO", "AI agents", "Storefront MCP", "UCP", "agentic storefronts"],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ["shopify-webmcp-checkout-ai-agent-storefront", "product-data-shared-infrastructure-google-ai-mode", "agentic-commerce-platform-default-shopify-google"],
    featured_image_alt: "Pull quote from Robert Hu on Shopify's AI knowledge base: What the merchant controls is the fact, not the sentence.",
  },
  published_at: new Date().toISOString(),
  content: `<p>Most ecommerce GEO advice starts with a page: rewrite the description, add schema, answer the FAQ. Shopify's latest change moves part of the work somewhere less visible, deciding which facts about a store an AI agent should receive, where each fact comes from and who approved it.</p>

<p>On October 26, Shopify moved its knowledge base for AI agents into the admin, under Sales channels and Agentic. Its Help Center describes the published knowledge base as the <a href="https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/knowledge-base" ${EXT}>source of truth for AI agents</a> on all non-product information about a store. Shopify Catalog already plays that role for products. Keeping both records accurate is a governance job before it is a writing job.</p>

<h2>What actually changed</h2>

<p>The idea is not new. Shopify launched a standalone Knowledge Base app in May 2025 and featured it in its <a href="https://www.shopify.com/blog/expanding-your-ai-horizons-summer-edition-25" ${EXT}>Summer '25 Edition</a>. It generated AI-readable FAQs from a store's policies and settings, let merchants edit and add to them, and showed which questions shoppers asked AI agents. Shopify's <a href="http://web.archive.org/web/20251211085553/https://shopify.dev/docs/apps/build/storefront-mcp/servers/storefront" ${EXT}>Storefront MCP documentation</a> suggested the app for managing the store policies behind its policy and FAQ tool.</p>

<p>What changed is where the work lives and how it is governed. <a href="https://changelog.shopify.com/posts/knowledge-base-is-now-available-in-your-admin" ${EXT}>Shopify's changelog</a> says the knowledge base is now built into the admin and replaces the app, which will no longer be available after January 15, 2027. The <a href="https://www.shopify.com/editions/fall2026" ${EXT}>Fall '26 Edition</a> repeated it on October 28. Shopify now drafts facts by scanning the public storefront and sorts them into categories, from store description, target audience and brand values to policies, contact details, payment, returns, gift services and fulfillment. Merchants can add their own facts as paragraphs, yes or no answers or tags, such as materials and certifications.</p>

<p>Existing app users may have had their edited and additional facts transferred and published automatically. Stores above Shopify's migration limit must manually add the facts they want to retain before the standalone app is retired on January 15, 2027. Custom storefronts and stores on the Agentic plan can add only additional facts, according to Shopify's Help Center.</p>

<h2>Two records beside the storefront</h2>

<p>For products, the <a href="https://help.shopify.com/en/manual/shopify-catalog/mapping" ${EXT}>Channel mapping page</a> lets a merchant choose which product field or metafield Shopify Catalog uses for the title and description without changing what the online store shows. Merchants can also send agents the compare-at price as the list price, which Shopify passes only when it is higher than the current price, through the <code>list_price</code> field of the Universal Commerce Protocol (UCP). Custom variant grouping tells Catalog which separate listings are really one product.</p>

<p>So a Shopify merchant now manages three representations of the business: the storefront people browse, the product record Shopify Catalog supplies to AI channels and the non-product record agents can query through the knowledge base. It extends my argument that <a href="/blog/product-data-shared-infrastructure-google-ai-mode">product data has become shared infrastructure</a> to the facts around the product.</p>

<h2>What the merchant actually controls</h2>

<p>Facts Shopify drafts from a storefront scan start unpublished. Facts linked to admin settings, such as policies and contact details, publish when Shopify creates them. When a later scan finds something new, Shopify offers a suggested update that the merchant approves or rejects, and the Help Center says Shopify never changes knowledge base content on the merchant's behalf. A merchant can publish or unpublish the whole knowledge base, one category or a single field.</p>

<p>Each field has one source, a storefront scan, an admin setting or manual entry, and can carry several reference links that are passed to the agent with the fact. A rescan can take up to 48 hours and may miss changes, so Shopify suggests entering important facts directly.</p>

<p>What the merchant controls is the fact, not the sentence. For a paragraph fact, Shopify says an agent uses the merchant's text as its source but answers in its own words. Shopify's <a href="https://shopify.dev/docs/agents/ask" ${EXT}>Ask MCP tool</a>, <code>ask_business</code>, returns an answer drawn from the knowledge base and policies that the outside agent can use in its reply. Approval governs the source information, not the final wording.</p>

<h2>Where the thesis breaks</h2>

<p>The tempting conclusion is that ecommerce GEO now means governing what AI agents may retrieve. The evidence supports something narrower.</p>

<p>Shopify's Help Center describes the knowledge base as publicly available through Storefront MCP. Its <a href="https://shopify.dev/docs/apps/build/storefront-mcp" ${EXT}>current developer documentation</a> says the older Storefront MCP catalog and cart tools were removed, while policy and FAQ questions now use Ask MCP's <code>ask_business</code> tool through the UCP endpoint. Ask remains a draft capability that an agent must declare. The delivery path is still evolving, which reinforces the limit: publishing a fact does not mean every agent can or will retrieve it. Shopify also names no third-party channel that queries the knowledge base.</p>

<p>Shopify's own <a href="https://help.shopify.com/en/manual/shopify-catalog" ${EXT}>Catalog documentation</a> says inclusion does not guarantee that a product appears in an AI answer, and that each channel controls the final ranking, wording and shopping experience. The <a href="http://web.archive.org/web/20251008201321/https://help.shopify.com/en/manual/promoting-marketing/knowledge-base" ${EXT}>old app's help page</a> said the knowledge base improved the accuracy of AI responses without affecting how often a store appeared. The mapping preview is not an exact picture of what an AI channel displays, and a compare-at price lets an agent show a markdown without obliging it to. Shopify has published no visibility, traffic or conversion results for any of this.</p>

<p>The public web does not disappear either. Some knowledge-base facts come from storefront pages, others come from Shopify admin settings or manual entries, and merchants can attach external public references. Shopify still asks merchants to keep those facts consistent with customer-facing information. The knowledge base adds a governed retrieval layer; it does not replace the public evidence behind it, much as Shopify gave the storefront <a href="/blog/shopify-webmcp-checkout-ai-agent-storefront">a second front door for AI agents</a> without removing the original.</p>

<h2>What it means for ecommerce GEO</h2>

<p>Against the <a href="/geo">six dimensions I use for ecommerce GEO</a>, the knowledge base strengthens AI Retrievability across store-level facts. Target audience supports WHO. Policies and services support WHAT. Shipping timelines and return windows support WHEN. Locations and delivery markets support WHERE. Brand values support WHY. It can support all six dimensions, although publishing the information does not guarantee that an agent retrieves it.</p>

<p>The bigger change is operational. Ecommerce teams have long run the storefront, product feed, policies, informational pages and service scripts with different owners. An agent that can access those sources may treat them as one account of the business. For each fact, someone now has to decide which source owns it, what the agent should receive, who approves a suggested change and how anyone knows it is still current. Because <a href="/blog/agentic-commerce-platform-default-shopify-google">agentic storefronts are active by default</a> for eligible stores, and the knowledge base now sits inside the same Agentic area of the admin, this governance work can appear before a merchant has assigned anyone to own it. Policy and contact facts may already be published while storefront-drafted facts wait for review, so the operating model gets defined either deliberately or by neglect.</p>

<p>Start small: publish only what a public page supports, tie fast-changing facts such as return windows to their admin source or a named owner, and review suggested updates on a schedule.</p>

<p>When an AI agent describes your return policy next month, will anyone on your team know which source it came from?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
