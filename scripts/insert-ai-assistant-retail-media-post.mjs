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

const DESCRIPTION = "Criteo now treats a retailer's AI shopping assistant as a Sponsored Products page type. How conversations become keywords, what advertisers control, and what is unsettled."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'ai-shopping-assistant-retail-media-sponsored-products',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'AI Shopping Assistants Are Becoming a Standard Retail Media Placement',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Criteo Sponsored Products in AI Assistants: How It Works',
  excerpt: "Criteo now lists a retailer's AI shopping assistant as one of its Sponsored Products page types, live at Albertsons since June. The assistant translates the conversation into keywords and filters, and the existing auction, bids and reports do the rest. The keyword did not disappear in conversational commerce. It moved behind the conversation.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/ai-shopping-assistant-retail-media-sponsored-products.svg',
  category: 'Digital Marketing',
  tags: ['retail media', 'Criteo', 'Sponsored Products', 'AI shopping assistant', 'conversational commerce', 'Albertsons'],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['retail-media-programmatic-buying-openrtb-koddi-teads', 'openai-sponsored-agents-chatgpt-ads-shopify', 'instacart-gopuff-carrot-ads-retail-media-infrastructure'],
    featured_image_alt: 'A shopper conversation with a retailer AI assistant translated into keywords and filters that enter an existing sponsored products auction',
  },
  published_at: new Date().toISOString(),
  content: `<p>When retailers put AI shopping assistants on their sites, the obvious question for retail media was whether it would need a whole new ad system. <a href="https://help.cyield.criteo.com/kb/guide/en/monetize-your-ai-shopping-assistant-with-sponsored-products-UcIM4tzd5g/Steps/5745454" ${EXT}>Criteo's answer, in its own documentation, is no</a>. A retailer's AI assistant becomes one more page type.</p>

<p>That sounds like a technical detail. It is the most useful thing to understand about how advertising is entering conversational shopping.</p>

<h2>What Criteo actually built</h2>

<p>Criteo's Sponsored Products already run across page types such as search results, category pages, product pages, the homepage and checkout. Its documentation now lists a tenth: AI Assistant, defined simply as "the retailer's AI shopping assistant."</p>

<p>Albertsons was the first retailer to switch it on. <a href="https://www.albertsonscompanies.com/newsroom/press-releases/news-details/2026/Albertsons-Media-Collective-Brings-Sponsored-Product-Discovery-to-AI-Powered-Conversational-Search/default.aspx" ${EXT}>On June 23, Albertsons Media Collective announced</a> that "eligible sponsored products can appear within AI-powered conversational search product carousels" through Criteo, and Criteo called Albertsons "our first retailer to bring Sponsored Products into an AI-powered shopping assistant."</p>

<p>Availability depends on the retailer. Criteo's advertiser guide says the inventory appears "only when the selected retailer has enabled this feature." Most retailers on Criteo do not have an AI assistant to monetize yet.</p>

<h2>How a conversation becomes an ad request</h2>

<p>The mechanism is the part worth reading slowly.</p>

<p>A shopper asks the retailer's assistant something like "best running shoes for long distance under $150." Criteo's retailer guide says the retailer's system, or its LLM partner, "extracts the relevant keywords and filters from the conversation and passes them to the Criteo Sponsored Products engine as a standard ad request." The engine runs its usual auction and returns sponsored products, which the assistant places alongside its organic recommendations.</p>

<p><a href="https://developers.criteo.com/retailer-integration/docs/ai-assistant" ${EXT}>The developer documentation makes it even plainer</a>. An AI Assistant ad request uses the same event type as a search results page. The main parameter is "the search query predicted by the LLM," plus filters such as price or color.</p>

<p>In other words, the advertising system does not read the conversation. The assistant translates the conversation back into a keyword, and the keyword enters the auction that already exists.</p>

<p>Something is compressed along the way. A shopper's request can carry a budget, an occasion, a distance, a preference. Filters keep some of that, like price. The rest is reduced to the same unit retail media has always priced: a search term.</p>

<p>Criteo also says what it receives: "only the structured output from your system: the keywords and filters extracted from the conversation. The raw conversational text stays within your own environment and is never transmitted to us." That is Criteo's description of its integration, and it is a meaningful one for any retailer worried about handing shopper conversations to an ad platform.</p>

<h2>What advertisers get, and what they cannot choose</h2>

<p>For brands, almost nothing changes, which is the point. <a href="https://help.retailmedia.criteo.com/kb/guide/en/reach-shoppers-in-ai-assistants-with-sponsored-products-Ed4zMZ3Bo6/Steps/5745300" ${EXT}>Criteo's guide says</a> "your existing Sponsored Products campaigns are automatically eligible," using "the same keyword targeting and cost-per-click (CPC) bids." There are "no premium floors or separate ratecards." The AI Assistant surface is priced on "the same pricing terms as search page placements."</p>

<p>Three details deserve attention.</p>

<p><strong>It is on by default.</strong> Where a retailer has enabled it, AI Assistant inventory "is activated by default within your All Inventory settings." Advertisers do not have to opt in for their existing campaigns to become eligible.</p>

<p><strong>You can adjust it but not isolate it.</strong> A page type bid multiplier raises or lowers what you bid on the assistant relative to other pages. But "you cannot configure a line item to serve exclusively on the AI Assistant surface."</p>

<p><strong>You can measure it separately.</strong> Reporting has a page type dimension, so advertisers can filter to AI Assistant and see impressions, clicks, click-through rate, spend and return on ad spend for that surface alone.</p>

<p>Criteo's pitch for the surface is scarcity. An assistant "typically surfaces only three to five products per response," far fewer than a search results page. Fewer slots means each one matters more, which is good for whoever wins it and harder for everyone else.</p>

<h2>Why this is the more likely path</h2>

<p>I have been tracking two ways advertising enters AI shopping. One is new formats built by AI platforms, like the sponsored conversations OpenAI began testing, which I wrote about in <a href="/blog/openai-sponsored-agents-chatgpt-ads-shopify">The Ad Click Is Becoming a Conversation</a>. The other is retail media absorbing the new surface into what it already runs.</p>

<p>Criteo's design is the second path, and it fits a pattern. Retail media has been <a href="/blog/retail-media-programmatic-buying-openrtb-koddi-teads">losing its separate buying interface</a> as inventory moves into pipes advertisers already use. A retailer's assistant becoming one more page type is the same move: new surface, old auction, old bids, old reports. It is also why <a href="/blog/instacart-gopuff-carrot-ads-retail-media-infrastructure">retail media is becoming infrastructure</a> rather than something every retailer builds. Infrastructure absorbs a new surface faster than each retailer can design an ad product for it.</p>

<p>It also answers a question I left open when <a href="/blog/instacart-clementine-ask-shipt-ai-basket">Instacart and Shipt launched assistants that build whole carts</a>, which was where paid visibility enters a conversation. At least for conversational search, it enters the way it always has. Through a keyword.</p>

<p>The keyword did not disappear in conversational commerce. It moved behind the conversation.</p>

<h2>What is still unsettled</h2>

<p>Two things are left to the retailer, and they matter.</p>

<p>The first is the translation. Which keywords the assistant predicts decides which ads are eligible. "Affordable running shoes" and "long distance trainers under $150" can produce different auctions from the same shopper. The retailer, or its LLM partner, now controls a step that shapes advertiser competition.</p>

<p>That step matters most when the request is vague. Albertsons says over 85% of its AI-powered conversations begin with open-ended or exploratory questions. A broad prompt leaves the extraction step the most room to decide what the shopper meant, and therefore which brands compete for the answer.</p>

<p>The second is disclosure. Criteo does not prescribe a single visual treatment for sponsored recommendations; retailers control how those placements are integrated and disclosed within the assistant experience. That does not remove whatever legal or platform disclosure requirements already apply. It means the presentation varies by retailer, and when an assistant shows three products and one is paid, how clearly that one is marked matters more than it does on a full results page.</p>

<p>Neither Criteo nor Albertsons has published performance data for sponsored products in the assistant, so there is no evidence yet that these placements outperform search.</p>

<h2>What operators should do</h2>

<p>If you advertise through Criteo, check whether your retailers have enabled AI Assistant. Existing Sponsored Products campaigns can become eligible for AI Assistant inventory without a separate campaign when a retailer enables that page type, so filter your reporting to it before deciding whether to bid it up or down.</p>

<p>If you run a retailer's assistant, treat keyword extraction as a commercial system, not just a technical one, and decide your sponsored labeling before you switch on the inventory.</p>

<p>When an assistant recommends three products, does your shopper know which one was paid for?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
