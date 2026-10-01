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

const DESCRIPTION = "DoorDash says nearly half of Ask orders go to restaurants the customer never tried. The exploration work did not vanish. It moved from the shopper to the system."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'doordash-ai-shopping-messy-middle-discovery',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'AI Did Not Kill the Messy Middle. It Moved It Into the Machine.',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'DoorDash Data Shows AI Moves Discovery Into the Machine',
  excerpt: "DoorDash reports that nearly half of restaurant orders placed through its assistant go to local spots the customer had not tried before. The visible consideration set shrinks while the searched set grows, which relocates discovery rather than compressing it away.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/doordash-ai-shopping-messy-middle-discovery.svg',
  category: 'E-commerce Strategy',
  tags: ['AI shopping', 'DoorDash', 'product discovery', 'marketplaces', 'conversational commerce', 'messy middle'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['ai-compresses-messy-middle-ecommerce', 'instacart-clementine-ask-shipt-ai-basket', 'retailers-ai-traffic-customer-ownership'],
    featured_image_alt: 'A shopper seeing three recommendations while the system behind them evaluates a much larger set of restaurants and products that the shopper never sees',
  },
  published_at: new Date().toISOString(),
  content: `<p>In March I wrote that AI was compressing the shopping journey from dozens of options down to three or five recommendations, and that the exploration loop brands used to compete inside was collapsing.</p>

<p><a href="https://about.doordash.com/en-us/news/text-doordash" ${EXT}>DoorDash published numbers on September 30</a> that make me want to say it more precisely. The loop is not collapsing. It is changing owner.</p>

<h2>What DoorDash actually shipped</h2>

<p>Two things, three months apart. Ask DoorDash launched June 11 as an in-app conversational search, on iOS, in select areas, for restaurants and groceries. On September 30 the company added Text DoorDash, where a customer texts what they want, DoorDash searches, suggests a cart, and the customer confirms inside the thread. It is a United States beta with a waitlist.</p>

<p>Keep the scope in view. One is an assistant inside an app that rolled out gradually. The other is a beta you apply to join. Neither is the default way anyone orders dinner.</p>

<h2>The number worth sitting with</h2>

<p>DoorDash says that in three months, users "discovered more than 40,000 new restaurants" through Ask, and that "nearly half of Ask DoorDash restaurant orders" went to "local spots the consumer has never tried before." The footnote covers June through August 2026.</p>

<p>That second figure is the interesting one, and it needs handling. DoorDash does not define discovered, so the 40,000 could mean viewed, recommended or ordered from. Never tried is DoorDash's phrasing, not mine, and a delivery platform can only observe its own order history, so the defensible reading is a restaurant the customer had not ordered from on DoorDash. Local spots is also not independent. Local may mean nearby, and a nearby franchise is still local.</p>

<p>What survives all that trimming is still worth noticing. Orders placed through the assistant skew heavily toward merchants the customer had not bought from before, inside a marketplace where the same company runs both the assistant and the ranking.</p>

<h2>DoorDash describes the mechanism itself</h2>

<p>The <a href="https://about.doordash.com/en-us/news/ask-doordash" ${EXT}>June launch post</a> contains the sentence that explains why. Ask, the company writes, can connect a customer with a restaurant "even if that restaurant might not have caught their eye in their usual scroll."</p>

<p>That is the whole argument in one line, written by the platform. The scroll was the filter. It favored what was visible, familiar and near the top. Remove the scroll and the filtering still happens, but somewhere the customer cannot see.</p>

<p>The scale framing supports it. DoorDash estimates the average United States consumer has around 800,000 menu items and grocery products available, based on a sample of 10,000 consumers and limited to items eligible for delivery within an hour. Nobody browses that. The company says Ask searches that inventory to find a match, and Andy Fang describes the product as "a personal shopper that helps you discover and compare thousands of items."</p>

<p>Discover and compare. That is the exploration work, described by the company as something the software now performs.</p>

<h2>The shape of the change</h2>

<p>Four stages sit between a craving and a cart: the supply universe, whatever the system retrieves from it, the ranked shortlist, and the order.</p>

<p>The customer used to work in the middle two. They scrolled, compared, recognized a name, narrowed, chose. Now they state intent at one end and approve at the other. The middle stages still exist, and the honest position is that we cannot see them. DoorDash has not published how many candidates Ask considers, how it ranks them, or what weights a recommendation.</p>

<p>So the visible consideration set shrinks while the searched set plausibly grows. The messy middle did not disappear. The shopper outsourced it.</p>

<h2>Where this revises what I wrote</h2>

<p><a href="/blog/ai-compresses-messy-middle-ecommerce">My March piece</a> argued the exploration loop was being compressed, and that sellers should make listings interpretable enough to be chosen. The compression claim was right about what the human experiences. It was incomplete about what happens to the work.</p>

<p>The practical advice gets stronger rather than weaker. If exploration moves into software, then being findable by a machine matters more than being recognizable to a person, and the thing I called GEO is simply the cost of entering a candidate set you cannot observe. What I would retire is the implication that less exploration happens. On this evidence, more of it may happen, just not by the customer.</p>

<p>That is also what separates this from <a href="/blog/instacart-clementine-ask-shipt-ai-basket">the question of which brands survive into an assembled cart</a>. That argument starts once a shortlist exists. This one is about what happens to the supply universe before the shortlist is formed.</p>

<h2>The part that should temper the optimism</h2>

<p>It would be easy to read half of orders going to untried restaurants as evidence that machine discovery is fairer. Nothing here supports that.</p>

<p>Ranking did not go away. It moved. Familiarity bias gets replaced by whatever the model weighs, which may include data quality, menu structure, ratings, availability and delivery time, none of which DoorDash documents for Ask. And on the commercial side, <a href="https://advertising.doordash.com/en-us/2026-doordash-ads-announcements" ${EXT}>DoorDash's own advertising materials</a> list sponsored placements across search results, homefeed, category pages and carousels, with no mention of Ask DoorDash anywhere. Whether sponsored merchants can appear in assistant recommendations is simply not documented, which is a strange thing to be unable to answer about a surface this important.</p>

<p>The messy middle moving into software does not remove gatekeeping. It makes more of the gatekeeping invisible.</p>

<h2>The objections</h2>

<p>Start with causality, because the data is observational. People who open an assistant to ask what is for dinner may be the people already looking for something new, which would produce this result without the assistant changing anybody's behavior. DoorDash publishes no sample size for the order figures, no control group and no breakdown of new versus existing users.</p>

<p>The grocery numbers deserve the same discipline and a specific caution. Baskets built with Ask are reported as five times faster, with nearly 50% higher basket value and about 60% more unique items than the same consumers' traditional orders. Same-consumer comparison is a real strength. But the speed figure is footnoted to June 2026 marketplace data while the basket figures come from August into early September, so the three numbers do not share a measurement window, and a bigger basket may reflect a different kind of shopping trip rather than a better one.</p>

<p>Then the limits of the case itself. This is one marketplace, with first-party data, reporting on its own product, in a category where novelty is cheap and a disappointing dinner costs twenty dollars. Restaurant discovery may generalize to groceries poorly and to considered purchases not at all.</p>

<p>If the exploration now happens where your customer cannot watch it, what exactly are you optimizing for?</p>
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
