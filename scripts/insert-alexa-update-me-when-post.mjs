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

const DESCRIPTION = 'Amazon turned on Update Me When. Notifications are not new. What changed is where in the shopping journey the assistant now sits.'

// Sources cited at the claims they support.
const SRC_TC = 'https://techcrunch.com/2026/09/01/amazon-alexa-can-now-alert-you-when-something-new-might-tempt-you-to-shop/'
const SRC_AFS = 'https://www.aboutamazon.com/news/retail/alexa-for-shopping-ai-assistant'
const SRC_ABOUTYOU = 'https://www.aboutamazon.com/news/retail/amazon-about-you-personalization-preferences'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'amazon-alexa-shopping-search-anticipation',
  title: 'Amazon Is Extending the Shopping Journey Beyond the Search',
  excerpt: 'Amazon turned on a feature that alerts shoppers when a brand launches, an author publishes, or a tour is announced. Shoppers configure the alerts themselves, so this is monitoring rather than prediction. The interesting part is that the assistant now stays involved during the interval when no shopping is happening.',
  meta_title: 'Amazon Is Extending the Shopping Journey Beyond the Search',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/amazon-alexa-shopping-search-anticipation.svg',
  category: 'E-commerce Strategy',
  tags: ['Alexa for Shopping', 'Amazon', 'AI shopping assistants', 'personalization', 'shopper data', 'agentic commerce'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['amazon-rufus-account-memory', 'amazon-ai-shopping-business-model', 'ai-compresses-messy-middle-ecommerce'],
    featured_image_alt: 'A shopping assistant preserving a shopper intent across the interval between shopping sessions',
  },
  published_at: '2026-09-02T13:00:00.000Z',
  content: `<p>Consider a shopping intention ecommerce has never handled well. You want the next version of a product and it does not exist yet. There may be nothing useful to search for or buy yet, so the shopper has to remember to come back or find some other way to keep watching.</p>

<p><a href="${SRC_TC}" ${EXT}>TechCrunch reported yesterday</a> that Amazon has turned on a feature called Update Me When inside Alexa for Shopping, which sends a notification when something a shopper is following actually happens. A brand launches a line. An author publishes. A tour gets announced. A device gets a ship date.</p>

<p>The feature is a notification system, and notifications are not new. What is worth thinking about is where in the shopping journey it sits.</p>

<h2>What was actually launched</h2>

<p>The details matter here, so I want to be careful about attribution.</p>

<p>Per TechCrunch, the feature is called Update Me When, it lives in Alexa for Shopping, and shoppers set the alerts themselves in the Amazon Shopping app or on Amazon. The reported examples are phrased the way you would say them out loud: "Update me when Reacher Season 5 drops on Prime Video," or "Update me when a new Kindle releases." The assistant searches Amazon's catalog and the web, then alerts you when it happens.</p>

<p>One line in that reporting is load-bearing: "Initially, consumers have to configure these alerts directly." The shopper decides what is worth watching. Alexa does not decide for them.</p>

<p>I should note a gap. I could not find an Amazon announcement for this feature on the Amazon newsroom or its Alexa for Shopping tag page, so the feature claims here rest on TechCrunch rather than Amazon's own documentation. The surrounding capabilities are documented by Amazon and sourced separately.</p>

<h2>Search waits for intent. Monitoring preserves it.</h2>

<p>Every shopping interface I can think of begins after the intent exists. You know you want something, so you search or browse. The system responds to a signal you generated.</p>

<p>Monitoring works differently. The shopper expresses interest once, when no transaction is possible, and hands off the waiting. The intent gets stored rather than spent.</p>

<p>That changes how long the assistant can remain involved after intent first appears. It is not present because you started shopping. It is present because you said once that something might matter later. The shopping session no longer ends when the conversation does.</p>

<h2>Amazon has been filling in the timeline</h2>

<p>This lands in a product that already covers a lot of ground between curiosity and purchase, and Amazon documents the rest of it.</p>

<p><a href="/geo/alexa-for-shopping">Alexa for Shopping</a> can <a href="${SRC_AFS}" ${EXT}>compare products side by side</a>, check price history for up to a full year, set price alerts, build carts from past orders, and create Scheduled Actions for routine restocking. It can also, in Amazon's words, handle "Auto Buying items at a set price."</p>

<p>Read those together and a progression appears. The assistant can answer a question, hold a preference, watch a condition, and in the price case act without you. Update Me When extends the watching from prices, which Amazon already tracked, to events, which it did not.</p>

<h2>The other half of the architecture</h2>

<p>Here is where it gets more interesting, and where I need to separate what is documented from what is speculation.</p>

<p>Amazon runs <a href="${SRC_ABOUTYOU}" ${EXT}>a page called About You</a>. I found it the way most people would, by asking the assistant what it knows about me and being pointed there. Amazon documents it plainly: "Your Amazon shopping experience is personalized through information including your conversations with Alexa for Shopping, product reviews you've authored, your purchase history, items you've saved to Lists, and your searches." Shoppers can view that, correct it, or remove things they do not want used. Amazon even documents the phrasing, telling users they can ask Alexa for Shopping, "What do you know about me?"</p>

<p>So Amazon maintains a shopper model, exposes it, and lets you edit it. That extends what I looked at when <a href="/blog/amazon-rufus-account-memory">Rufus gained persistent account memory</a>.</p>

<p>Now put the two beside each other. One system holds a durable view of what a shopper cares about. The other watches the world for events and reports back. Those are the two halves of relevance detection: knowing the person, and knowing what changed.</p>

<p>Amazon has not connected them automatically, and I want to be unambiguous about that. Nothing in Amazon's documentation or in the reporting says About You informs which alerts get created, and the feature as described requires the shopper to configure each one. TechCrunch speculates that "it's not hard to imagine a future where Amazon automatically generates alerts or may suggest alerts for shoppers to subscribe to," and that is TechCrunch imagining, not Amazon shipping.</p>

<p>What I would say is narrower. The components are now visible in the same product.</p>

<h2>The strongest objection</h2>

<p>Amazon has built a smarter reminder system. That is the honest deflationary reading and it deserves to be stated properly rather than waved at.</p>

<p>Alerts of this kind have existed for years. Wishlist price drops, back-in-stock notifications, and preorder emails all preserve intent across time. Update Me When is more conversational and covers more event types, but the mechanism is familiar. Monitoring is also not prediction. A system that watches what you told it to watch has learned nothing about you.</p>

<p>There is a demand question too. Nobody has shown that shoppers want more proactive prompts, and notification fatigue is a well-documented way to make an assistant less welcome. An alert at the wrong moment is worse than none. And any competitor with a catalog and a notification channel can build this.</p>

<p>I think the deflationary reading is mostly right about the feature and wrong about the direction. The individual capability is modest. The position it occupies is not, because it puts the assistant in the shopper's life during the interval when no shopping is happening, and that interval is most of the time.</p>

<h2>Why the position matters economically</h2>

<p>I would not claim this drives revenue. Amazon has published nothing about its performance, and I have no basis for saying it converts.</p>

<p>The structural argument is simpler. Alexa for Shopping already ties to order value, membership, and advertising, connections I traced in <a href="/blog/amazon-ai-shopping-business-model">Amazon's own disclosures</a>. A system that can create a reason to return has more chances to start the session in which any of that happens. That is an argument about opportunity, not outcome.</p>

<p>For brands there is a quieter implication. If assistants watch for events, then launches, restocks, versions, and release dates become things a machine may need to read, not just product attributes. Whether Amazon exposes a structured way to publish those events is not something I could establish today.</p>

<h2>Where this leaves me</h2>

<p>The change worth marking is not the notification. It is that the assistant can now stay involved after the shopper stops shopping, on terms the shopper set.</p>

<p>For as long as I have worked in commerce, most shopping systems have treated each new session as another chance to rediscover intent. <a href="/blog/ai-compresses-messy-middle-ecommerce">AI has already compressed the middle of that journey</a>. What Amazon is starting to do here is preserve the intent itself across the time when the shopper is gone.</p>

<p>The more speculative step comes next. If persistent shopper understanding is eventually connected to persistent event monitoring, the assistant could begin recognizing which changes are worth bringing back to you without waiting for you to specify every one. Amazon has not said it is doing that today.</p>

<p>If a shopping assistant can keep intent alive between sessions, when does the shopping journey actually end?</p>
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
