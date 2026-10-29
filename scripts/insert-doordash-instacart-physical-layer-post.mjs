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

const DESCRIPTION = "DoorDash's proposed Instacart deal shows why fulfillment and retailer infrastructure matter more as shopping fragments across AI assistants."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: "doordash-instacart-physical-layer-ai-commerce",
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "DoorDash Is Buying Instacart to Win the Physical Layer of AI Commerce",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: "DoorDash, Instacart and the Physical Layer of AI Commerce",
  excerpt: "DoorDash agreed on October 29 to acquire Instacart for about $17 billion, pending shareholder and regulatory approval, with closing expected at the end of 2027 or in the first half of 2028. Its shareholder letter says DoorDash is competing to be the physical network that fulfills tasks, not the leading AI assistant.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/doordash-instacart-physical-layer-ai-commerce.svg',
  category: "E-commerce Strategy",
  tags: ["DoorDash", "Instacart", "Instacart Enterprise", "grocery delivery", "AI shopping agents", "operating layer", "retail media", "fulfillment"],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ["doordash-ai-shopping-messy-middle-discovery", "instacart-gopuff-carrot-ads-retail-media-infrastructure", "instacart-clementine-ask-shipt-ai-basket"],
    featured_image_alt: "Pull quote from Robert Hu on DoorDash and Instacart: An assistant can work out what someone wants. It cannot pick the avocado.",
  },
  published_at: new Date().toISOString(),
  content: `<p>On October 29, DoorDash and Instacart <a href="https://ir.doordash.com/news/news-details/2026/DoorDash-to-Acquire-Instacart-to-Help-Local-Stores-Win/default.aspx" ${EXT}>announced a definitive agreement</a> for DoorDash to acquire Instacart at $65 a share, an equity value of about $17 billion. It is an agreement, not a completed acquisition. It needs Instacart shareholder approval, clearance under the Hart-Scott-Rodino Act and approvals in Canada and Israel, and the companies expect it to close at the end of 2027 or in the first half of 2028. Until then they operate as separate, independent companies.</p>

<p>The price is not the interesting part. The interesting part is a section of DoorDash's <a href="https://www.sec.gov/Archives/edgar/data/1792789/000179278926000062/proddashex991-pressrelease.htm" ${EXT}>third quarter shareholder letter</a> explaining what kind of company it wants to be as AI agents spread.</p>

<h2>Atoms vs Bits</h2>

<p>DoorDash says it saw two contests when ChatGPT launched: becoming the leading digital personal assistant, and becoming "the leading physical network to help fulfill tasks in the real world." It chose the second. As AI personal agents go mainstream, the letter says, its strategy "remains focused on winning the battle for atoms."</p>

<p>That does not mean DoorDash has stopped building software. The same letter lists Ask DoorDash, which helps customers build grocery baskets faster, Text DoorDash for ordering by text, and an announced DoorDash connector built on Model Context Protocol (MCP) for compatible workplace AI tools. Companies could join its beta waitlist beginning September 30. But DoorDash says its competitive focus remains the end-to-end physical network, even as it builds software that lets assistants reach that network.</p>

<p>Read plainly, it is a bet that the shopping interface will fragment across assistants DoorDash does not own, and that the scarce position sits underneath them. I described an early version of this when <a href="/blog/doordash-ai-shopping-messy-middle-discovery">DoorDash's own assistant moved discovery into the machine</a>. An assistant can work out what someone wants. It cannot pick the avocado. The defensible layer is not atoms alone. It is the software, retailer relationships and fulfillment network that turn digital intent into physical execution.</p>

<h2>What the physical layer actually is</h2>

<p>Grocery shows the gap between interface and execution more clearly than any other category. Once a customer or an agent has a list, someone still has to find the items in a specific store, assemble the basket, choose a substitute when something is missing, keep cold goods cold, deliver within a window and reconcile what was ordered with what arrived. Tony Xu's version, in the announcement, is finding a substitute "you'd choose yourself."</p>

<p>DoorDash's letter is candid that the product is not finished. It says grocery delivery still asks consumers to pay a premium for imperfect delivery, and that managing inventory for third-party grocers is part of the fix. When DoorDash manages inventory itself through DashMart, it reports more than 99% fulfillment accuracy and deliveries more than ten minutes faster on average. Warehouses are a fixed-cost business, and the letter names Instacart's scale as one reason the deal appeals: more volume to spread those costs across.</p>

<h2>What each side would bring</h2>

<p>The announcement combines the two companies on paper, not yet in practice.</p>

<p>DoorDash brings a consumer marketplace and DashPass membership, a local delivery network, DashMart Fulfillment Services for grocers that need more order capacity, an advertising business and its own AI ordering tools.</p>

<p>Instacart brings a grocery marketplace spanning more than 2,200 retail banners and nearly 100,000 stores, Instacart+ membership and Instacart Enterprise. <a href="https://www.sec.gov/Archives/edgar/data/1579091/000157909126000018/cart-20251231.htm" ${EXT}>Its annual report</a> describes Enterprise as modular technology for retailers: storefront software behind more than 380 grocers' ecommerce sites, a fulfillment API, in-store tools such as Caper Carts and FoodStorm, Carrot Ads for retailers' own sites and near real-time insights. Instacart reported <a href="https://www.sec.gov/Archives/edgar/data/1579091/000119312526437014/d24470dex991.htm" ${EXT}>$331 million in advertising and other revenue</a> in the third quarter, and it builds AI basket tools, including <a href="/blog/instacart-clementine-ask-shipt-ai-basket">Cart Assistant for grocers' own sites</a>. Its CEO now describes the goal as "the operating system for grocery."</p>

<p>DoorDash says it expects to keep Instacart's brand, app and enterprise technology products after closing. The companies propose a single membership fee for DashPass and Instacart+ members and say Instacart customers could gain access to more than 50,000 additional stores. Both are post-close proposals, not current products. DoorDash sees a multi-year path to at least $500 million in annual synergies, net of investments, but expects to reinvest more than 100% of them in the first year after closing. Those are targets, not savings. Neither company has announced a specific AI product that would combine the two after closing.</p>

<h2>The operating-layer trade</h2>

<p>In <a href="/ai-commerce-2027">AI Commerce 2027</a>, I argued that platform power is shifting to the operating layer: a merchant can diversify where demand comes from while consolidating how the business runs. If it closes, this deal is the grocery version. A local grocer could take orders from DoorDash, Instacart, its own website and any assistant that eventually reaches it, while the storefront software, picking, delivery, ads and data behind those orders come from one company.</p>

<p>For a smaller grocer, renting that stack may be the only realistic way to compete with retailers that build their own fleets, warehouses and assistants, which is the case DoorDash makes. The cost is concentration. Operational data, advertising economics, fulfillment capacity and customer access would sit with one provider. Retail media already shows the pattern: in September, Gopuff chose to run its storefront advertising on Instacart's Carrot Ads, part of a broader shift toward <a href="/blog/instacart-gopuff-carrot-ads-retail-media-infrastructure">retail media as rented infrastructure</a>. If the deal closes, that infrastructure would belong to DoorDash.</p>

<p>DoorDash has made post-close commitments that speak to this. Grocers can work with any delivery platform they choose, with no grocery exclusivity, and Instacart Shoppers can choose whether to take DoorDash orders. Regulators will weigh the rest, and <a href="https://www.sec.gov/Archives/edgar/data/1792789/000114036126041111/ef20084547_8k.htm" ${EXT}>the agreement itself</a> prices the risk. DoorDash would owe Instacart $1.25 billion if antitrust obstacles end the deal, and the outside date can extend to two years from signing while antitrust conditions remain open.</p>

<h2>What would prove it</h2>

<p>An announcement cannot test the thesis. After closing, the evidence would be retailer adoption and retention of the combined enterprise offering, order volume moving across both apps, measured gains in fulfillment cost or accuracy, uptake of the single membership, advertiser adoption and, for the AI argument specifically, whether outside agents send meaningful demand through the stack. DoorDash has announced the MCP connector and opened a beta waitlist. It has published no usage or order volume.</p>

<p>Nor does the deal prove that agentic commerce is arriving, and AI is not the main financial case DoorDash makes. That case rests on density, fulfillment cost and scale. What the deal shows is a company with a stated view of AI deciding that the defensible asset is the one an assistant cannot download.</p>

<p>If assistants can send an order from anywhere, who do local grocers want holding the infrastructure that fills it?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
