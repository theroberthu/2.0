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

const DESCRIPTION = "Instacart's Clementine and Shipt's Ask Shipt turn a request into a finished grocery cart. For brands, the question shifts from recommended to included."

// Primary sources, cited at the claims they support.
const SRC_IC = 'https://company.instacart.com/pressreleases/meet-clementine-instacart-s-ai-shopping-assistant-that-takes-what-s-for-dinner-off-your-plate'
const SRC_JUNE = 'https://company.instacart.com/updates/instacarts-ai-assistant-powered-by-14-years-of-grocery-expertise'
const SRC_SHIPT = 'https://www.prnewswire.com/news-releases/meet-ask-shipt-shipts-new-ai-shopping-assistant-302873122.html'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'instacart-clementine-ask-shipt-ai-basket',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'The Assistant Builds the Cart. Brands Now Compete to Be in It.',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Instacart Clementine and Ask Shipt: How AI Builds the Cart',
  excerpt: 'Instacart and Shipt both launched assistants that turn a request into a finished grocery cart. The question for brands shifts from whether their product was recommended to whether it was included in a basket the shopper never assembled.',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/instacart-clementine-ask-shipt-ai-basket.svg',
  category: 'E-commerce Strategy',
  tags: ['Instacart', 'Shipt', 'AI shopping assistants', 'grocery ecommerce', 'retail media', 'AEO'],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['albertsons-ai-planning-task-depth', 'product-data-shared-infrastructure-google-ai-mode', 'walmart-sparky-sponsored-prompts-ads'],
    featured_image_alt: 'A grocery cart assembled by an AI assistant from a single request, with individual brands competing to be included in the draft rather than ranked in a search',
  },
  published_at: '2026-09-14T12:00:00.000Z',
  content: `<p>Ask a grocery assistant for high-protein easy dinners for two and it returns a full cart in seconds. Somewhere in that cart is a box of pasta. Nobody searched for it. Nobody compared it to the one beside it on the shelf. It was simply included.</p>

<p>Which pasta, and why that one, is the question worth sitting with after two launches on September 9.</p>

<h2>What launched</h2>

<p><a href="${SRC_IC}" ${EXT}>Instacart introduced Clementine</a>, now available to most customers in the U.S. and Canada, which turns a conversation, a grocery list, a recipe or a photo of a handwritten list into a personalized cart. Instacart says it is grounded in real-time availability at the customer's chosen store and draws on order history and household preferences, and that it can surface deals and lower-cost alternatives. The same technology sits behind Cart Assistant, Instacart's white-label assistant for grocers' own websites and apps, now live at Food Bazaar, Heritage Grocers Group and Woodman's, with ALDI U.S., Harmon's, The Save Mart Companies and Stew Leonard's to follow.</p>

<p>The same day, <a href="${SRC_SHIPT}" ${EXT}>Shipt launched Ask Shipt</a>. A customer can describe a need, upload a recipe or photograph a dish, and get a complete cart for a weeknight meal under a budget or a tailgate for twenty-five, across more than 100 retailers in its marketplace.</p>

<p>Both keep a person in charge. Shipt says every recommendation can be reviewed, swapped or edited before checkout. Instacart says its assistant does not finalize anything without explicit action and that every decision is reviewed before checkout. These are drafting tools, not autonomous buyers.</p>

<h2>What the early numbers do and do not say</h2>

<p><a href="${SRC_JUNE}" ${EXT}>Instacart's June 18 update</a> said orders placed with its assistant were, on average, larger than its typical basket, with a platform average order value of $113. The footnote matters: the comparison is assistant orders through June 12, 2026 against the first-quarter platform average, two different windows. The September release updated that to orders exceeding a $115 average basket as of June 30, and added that they contain more items.</p>

<p>Neither source gives a percentage, a sample, or a control group. That is a directional signal, not evidence that the assistant causes anyone to spend more. One detail is also worth flagging: the June footnote attributes the result to Cart Assistant, the name Instacart now uses for its enterprise product.</p>

<h2>What is actually new here</h2>

<p>I have already argued that <a href="/blog/albertsons-ai-planning-task-depth">the value of a grocery assistant rises with how much of the customer's job it absorbs</a>, and that constructing a basket is a different act from finding a product. That was about why retailers see larger orders.</p>

<p>The part I did not address is what happens to the brand on the other side of that basket.</p>

<h2>The competition moves inside the cart</h2>

<p>Here is my interpretation rather than anything either company claimed.</p>

<p>Traditional ecommerce is fought one decision at a time. A shopper searches for pasta, sees results, compares, chooses. Every brand gets a moment of consideration, and search rank, reviews, price and sponsored placement all compete inside that moment.</p>

<p>Basket construction collapses many of those moments into one request. "High-protein dinners for two" resolves pasta, sauce, protein, vegetables and cheese together, and the shopper's first view is a finished draft. For a brand, the visibility question shifts from whether the product was recommended to whether it made it into the generated cart.</p>

<p>The detail that sharpens this is in Instacart's own description. The assistant adapts to established brand preferences and draws on order history, and the company says it learns from what consumers accept, refine and reject. If that holds, a brand already established in a household's history may enter the draft with an advantage because the assistant has an existing preference signal to work from. The contestable slots may be the new ones: a first recipe, a new occasion, a category the household has never bought, where no preference exists yet. Winning those depends on whether <a href="/blog/product-data-shared-infrastructure-google-ai-mode">a product's data tells the assistant it fits the request</a>: high-protein, gluten-free, enough to feed four.</p>

<p>That changes what merchandising, cross-sell and substitution are for. A substitution becomes more than a fulfillment fallback when the assistant is making the first selection. It is also a decision about which brand fills a slot the shopper may never have looked at.</p>

<h2>Where this leaves GEO and AEO</h2>

<p>My working framing has been that <a href="/aeo">SEO gets a product found, GEO gets it recommended and AEO gets it chosen</a>. Basket construction does not replace that ladder, but it complicates the middle of it. The assistant is choosing, just provisionally, and many products at once, with a person approving the draft rather than an agent completing the purchase.</p>

<p>That provisional choice may be the most consequential step, because editing a finished cart is more work than accepting it.</p>

<h2>The retail media question nobody has answered</h2>

<p>If shoppers stop searching item by item, sponsored search placement has fewer searches to sit beside. That creates an obvious question about where paid visibility enters a machine-built cart.</p>

<p>Neither company has said. Instacart runs an advertising business, Instacart Ads, and its June update mentions AI-powered ads tools for advertisers, but nothing in these announcements says sponsored products influence what Clementine or Ask Shipt put in a cart. Both name promotions and deals as inputs, which is not the same thing as paid placement. Walmart, by contrast, has <a href="/blog/walmart-sparky-sponsored-prompts-ads">been building sponsored prompts into Sparky</a>. For now, how inclusion is ranked in these two assistants is simply not public.</p>

<h2>The objections</h2>

<p>Grocery is unusually basket-shaped. Nobody asks for a complete wardrobe for a wedding and expects a finished cart, so this may not travel far beyond food and household goods.</p>

<p>The larger orders may reflect who uses the tool. Instacart itself says customers are using it for their full weekly shop, and people doing a full weekly shop place larger orders with or without an assistant.</p>

<p>Human review is mandatory, so this is a draft, and a shopper can still remove the pasta.</p>

<p>And product-level competition does not disappear because basket construction moved upstream. A shopper who swaps a brand is still making a product decision. The claim is narrower: the first decision may increasingly be made by the machine, and the brand has to be good enough to survive the edit.</p>

<p>If the draft cart is where the decision now starts, how does a brand find out it was never in it?</p>
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
