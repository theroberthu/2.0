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

const DESCRIPTION = 'YouTube and Amazon connected discovery and checkout without merging systems. The creator bridging them sees the least about what worked.'

// Primary sources, cited at the claims they support.
const SRC_BLOG = 'https://blog.youtube/news-and-events/youtube-shopping-amazon-creator-affiliates/'
const SRC_AMZ = 'https://support.google.com/youtube/answer/17105501'
const SRC_ELIG = 'https://support.google.com/youtube/answer/13376398'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'youtube-amazon-shopping-discovery-transaction',
  title: 'YouTube and Amazon Just Split the Shopping Journey',
  excerpt: 'Amazon joined the YouTube Shopping Affiliate Program today. The interesting part is not that creators can tag Amazon products. It is that YouTube’s own documentation says creators cannot see which videos or products drove the purchases, which tells you exactly where the seam between the two companies sits.',
  meta_title: 'YouTube and Amazon Just Split the Shopping Journey',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/youtube-amazon-shopping-discovery-transaction.svg',
  category: 'E-commerce Strategy',
  tags: ['YouTube Shopping', 'Amazon Associates', 'creator commerce', 'social commerce', 'affiliate marketing', 'customer ownership'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['amazon-ai-walled-garden', 'tiktok-shop-plus-final-conversion', 'retailers-ai-traffic-customer-ownership'],
    featured_image_alt: 'A creator connecting YouTube product discovery to an Amazon transaction without either system merging',
  },
  published_at: '2026-08-27T20:00:00.000Z',
  content: `<p>YouTube <a href="${SRC_BLOG}" ${EXT}>announced today</a> that Amazon is joining the YouTube Shopping Affiliate Program. YouTube says eligible U.S. creators can now tag Amazon products in Shorts, long-form videos, and livestreams, although its <a href="${SRC_AMZ}" ${EXT}>Help documentation</a> describes the integration as gated: tagging opens only after a creator links accounts and their channel "gains access," and products come from "a selection of Amazon products" rather than the full catalog.</p>

<p>Creators have been sending viewers to Amazon through affiliate links for years, so the headline is not the news. What is worth looking at is the shape of the arrangement, because the two companies connected their commerce systems without merging much of anything, and the documentation is unusually specific about where the seams are.</p>

<h2>What actually has to be true for this to work</h2>

<p>The requirements tell you more than the announcement does.</p>

<p>A creator has to be in the YouTube Partner Program, enrolled in the YouTube Shopping affiliate program in the United States, and separately a member of the Amazon Influencer Program or Amazon Associates Program with an account "active and in good standing." Then the two accounts have to be linked. Tagging happens in YouTube Studio. Buying happens on Amazon.</p>

<p>Notice that neither company absorbed the other's system. YouTube did not become a marketplace, and Amazon did not move its catalog into YouTube. A creator maintains two separate program relationships, and a link between them lets a product tag in one place resolve to a purchase in the other.</p>

<h2>Amazon does not need to own the discovery surface</h2>

<p>Amazon has spent the last two years being selective about which outside systems get access to its marketplace. It has kept third-party shopping agents out while running its own assistant inside its own walls, a pattern I traced when it <a href="/blog/amazon-ai-walled-garden">blocked one agent and expanded merchant access in the same week</a>.</p>

<p>This looks like a different move, but I do not think it contradicts that one. The distinction Amazon appears to be drawing is not between open and closed. It is between systems that would intermediate the transaction and systems that deliver traffic into it. An agent that completes a purchase on the customer's behalf sits between Amazon and the buyer. A creator who tags a product sends the buyer to Amazon and then leaves.</p>

<p>Stated as a strategy rather than a description: protect the transaction, distribute the inventory. That is my interpretation of the pattern, not something Amazon has said.</p>

<h2>YouTube gets a commerce layer without building one</h2>

<p>The logic on the other side is at least as clear.</p>

<p>YouTube already has the part that is hard to manufacture. Creators, demonstrations, trust, and an audience that arrives with attention rather than intent. What it lacks is everything that happens after someone decides to buy: catalog, pricing, inventory, payment, fulfillment, returns, customer service.</p>

<p>Connecting Amazon inventory makes more of that content commercially actionable without YouTube building any of it. YouTube does run its own shopping infrastructure, and this is an addition to an existing affiliate program rather than a first step into commerce. But the division of labor is the point. One company supplies the reason to want something. The other supplies everything required to get it.</p>

<h2>The reporting is the most revealing part</h2>

<p>Here is the detail I keep returning to, and it is stated plainly in YouTube's own documentation.</p>

<p>Creators see performance metrics in YouTube Studio Analytics, "such as clicks and estimated revenue." Then comes the limitation: "You can see aggregate daily revenue, clicks, and sales, but you can't check which specific videos or products drove Amazon purchases."</p>

<p>Sit with that. Commissions lock monthly and finalized Amazon earnings are paid through the creator's AdSense account. YouTube Studio therefore exposes aggregate revenue, clicks, and sales even though it withholds product- and video-level purchase attribution from the creator.</p>

<p>Amazon, of course, sees the transaction that happens on its own commerce system. What I cannot establish from the public documentation is how much content-level attribution Amazon receives from YouTube, or how much transaction-level detail flows back in the other direction. The seam is visible. The full data exchange is not.</p>

<p>That is the structural fact worth carrying out of this announcement. The creator generating the intent gets a surprisingly limited view of what that intent produced.</p>

<h2>What that means for the product page</h2>

<p>None of this makes product detail pages less necessary. It moves what they are for.</p>

<p>If a viewer has already watched someone they trust use a product, explain why it matters, and show it working, then the PDP is not where discovery starts. It is where the decision gets confirmed and executed. That continues a pattern I have written about as the <a href="/blog/ai-compresses-messy-middle-ecommerce">compression of the messy middle</a>, where exploration and evaluation keep migrating away from the retailer.</p>

<p>For sellers, the practical consequence is that the listing has to survive comparison against a demonstration the seller did not produce and cannot see.</p>

<h2>The counterargument deserves weight</h2>

<p>There is a reasonable case that this is incremental.</p>

<p>Affiliate links to Amazon are not new, and creators have been driving Amazon sales from YouTube for years. This makes the tagging native and the payment cleaner, which is an interface improvement on top of a behavior that already existed. Amazon already receives enormous affiliate traffic without any of it changing who owns the customer.</p>

<p>The customer also still leaves YouTube. This is a handoff, not an embedded checkout, which makes it less integrated than <a href="/blog/tiktok-shop-plus-final-conversion">TikTok Shop's attempt to own the final conversion inside its own app</a>. By that measure, YouTube is doing less here, not more.</p>

<p>And I should be careful about my own strongest section. YouTube receiving aggregate revenue, clicks, and sales is a meaningful amount of information. The documentation tells us what creators can see, not what the two companies exchange with each other. It is possible the platforms share more than the creator-facing reporting implies. I have no evidence either way, and neither company has published the data flow.</p>

<p>Nothing here establishes that creators will earn more, that native tags convert better than links, or that Amazon has changed its posture toward agents. Amazon commission rates and attribution windows are set under Amazon's affiliate programs, and <a href="${SRC_ELIG}" ${EXT}>YouTube says each participating brand sets its own</a>. YouTube's own economics in this arrangement are not disclosed anywhere I could find.</p>

<h2>The durable distinction</h2>

<p>For a long time the assumption in commerce was that you wanted to own the whole funnel, and companies spent enormous sums trying.</p>

<p>This arrangement suggests something narrower and probably more realistic. YouTube owns the moment that creates wanting. Amazon owns the moment that resolves it. The creator connects them and is paid for the connection without controlling either end. Each party is doing the part it is actually good at and connecting cleanly to the rest, which is a different ambition from owning everything.</p>

<p>It also sharpens a question I have been circling for a while. I argued recently that <a href="/blog/retailers-ai-traffic-customer-ownership">assistants keep the discovery context while retailers get the order</a>. This is the same split with a human in the middle instead of a model, and it produces the same asymmetry: the party that knows why someone wanted the product is not the party that knows what they bought.</p>

<p>If YouTube knows why someone wanted the product and Amazon knows what they actually bought, which of them is holding the more valuable half, and how would anyone find out?</p>
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
