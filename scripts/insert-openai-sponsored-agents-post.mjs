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

const DESCRIPTION = 'OpenAI is testing Sponsored Agents and opened ChatGPT Ads to Shopify merchants. The click may stop being the end of the ad and become the start of a chat.'

// Primary sources: OpenAI's launch post, its Shopify setup documentation, and
// the January ads principles.
const SRC_LAUNCH = 'https://openai.com/index/reimagining-advertising-with-ai/'
const SRC_HELP = 'https://help.openai.com/en/articles/20001523-set-up-chatgpt-ads-for-shopify'
const SRC_PRINCIPLES = 'https://openai.com/index/our-approach-to-advertising-and-expanding-access/'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'openai-sponsored-agents-chatgpt-ads-shopify',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'The Ad Click Is Becoming a Conversation',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'OpenAI Sponsored Agents and ChatGPT Ads for Shopify',
  excerpt: 'OpenAI is testing Sponsored Agents, a labeled conversation a shopper can enter after an ad, and opened ChatGPT Ads to Shopify merchants. The paid layer is growing a post-click stage.',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/openai-sponsored-agents-chatgpt-ads-shopify.svg',
  category: 'Digital Marketing',
  tags: ['OpenAI', 'ChatGPT Ads', 'Shopify', 'retail media', 'agentic commerce', 'AI advertising'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['amazon-ads-chatgpt-openai-partnership', 'chatgpt-ads-self-serve-geo-still-wins-marketplace-sellers', 'snipp-promotions-loyalty-ai-commercial-layer'],
    featured_image_alt: 'A shopper moving from an independent AI answer to a clearly labeled sponsored conversation run by a business, and then to the merchant site',
  },
  published_at: new Date().toISOString(),
  content: `<p>For thirty years the ad click has ended in the same place. A person sees an ad, clicks, and arrives on a page the advertiser controls. Everything after that is the landing page's job.</p>

<p>On September 16, <a href="${SRC_LAUNCH}" ${EXT}>OpenAI described something different</a>. After seeing a relevant ad in ChatGPT, a user can choose to start what OpenAI calls a clearly labeled conversation with a business-sponsored agent, ask follow-up questions, and then follow a link to the business's website. The example given is a shopper who sees a dining table and wants to know whether it fits the space, how many it seats, and how to care for the finish.</p>

<p>That is not a new placement. It is a new destination.</p>

<h2>Two announcements, one post</h2>

<p>The same post carried a second item that is more concrete. Shopify is OpenAI's first ecommerce partner, and US merchants can now install a ChatGPT Ads app in the Shopify App Store to create and manage campaigns. It reaches other eligible markets on September 23.</p>

<p><a href="${SRC_HELP}" ${EXT}>The setup documentation</a> is the interesting part. The app connects a store's product catalog and commerce-event data to Ads Manager. Product inventory and catalog information sync into a ChatGPT Ads product feed, store updates help keep product information current, and eligible commerce events flow through an OpenAI Pixel for Shopify to track and optimize performance. Merchants pick a budget, an optimization event, targeting and products, watch overall results in Shopify's Analytics tab, and go to Ads Manager for detail.</p>

<p>Sponsored Agents are being tested with select advertisers in the United States. The Shopify app is live now.</p>

<h2>Why the Shopify piece matters more than it looks</h2>

<p>Nine days ago I wrote that when <a href="/blog/amazon-ads-chatgpt-openai-partnership">Amazon began selling ChatGPT ad inventory</a>, the advertiser relationship moved but the commerce data did not. Nothing published showed Amazon's purchase data traveling with the ad or closing a measurement loop.</p>

<p>The Shopify integration is the other shape. A merchant installs an app, and the merchant's own catalog and commerce events move into the ad platform through a pixel the merchant connects. That is direct plumbing between a store and an ad system, not a media network extending a relationship. The two are different architectures and worth keeping apart.</p>

<p>Catalog syncing to ad platforms is not new in kind; Google Merchant Center did it. What changed is the destination those feeds point at.</p>

<h2>A second commercial surface</h2>

<p>In May I argued that <a href="/blog/chatgpt-ads-self-serve-geo-still-wins-marketplace-sellers">ChatGPT's paid placement does not solve the organic visibility problem</a>, because the answer and the ad are separate systems and the buyer reads the answer first. That distinction holds; this adds to it rather than correcting it.</p>

<p>Earlier this week I described AI shopping <a href="/blog/snipp-promotions-loyalty-ai-commercial-layer">growing a third commercial layer</a>, separating organic recommendation, paid visibility and the brand's own incentive data. Sponsored Agents suggest the paid layer is itself splitting in two.</p>

<p>That leaves three surfaces worth keeping apart. The independent answer, produced by ChatGPT's normal assistant systems. The paid placement, clearly labeled advertising. And the Sponsored Agent, a separate advertiser-sponsored conversation the user chooses to enter. The last two are both paid, and collapsing them loses the new part: the paid layer now has a post-click conversational stage. An independent assistant presents the ad. A labeled sponsored agent handles the commercial conversation. The merchant site remains the destination.</p>

<p>What OpenAI has not described is the join between its two announcements. It announced the commerce-data connection and the sponsored conversational format together, but it has not documented them as one integrated system. Nothing published says the Shopify catalog grounds a sponsored agent's answers, that pixel events measure what happens inside a sponsored conversation, or that sponsored interactions appear in Shopify reporting. They are adjacent capabilities that arrived in the same post, and I would not infer the join.</p>

<h2>The boundary that has to hold</h2>

<p><a href="${SRC_PRINCIPLES}" ${EXT}>OpenAI's ads principles, published in January</a>, commit to answer independence and conversation privacy: ads do not influence answers, ads are separate and clearly labeled, conversations stay private from advertisers and data is never sold to them. Its February test post is more specific, saying advertisers have no access to chats, chat history, memories or personal details, and receive aggregate information such as views and clicks.</p>

<p>Read those against a sponsored conversation and something shifts. That protection covers the user's original ChatGPT conversation. A Sponsored Agent is a new interaction the shopper voluntarily enters with the advertiser's representative, and OpenAI's current materials do not fully document what data from that sponsored exchange is retained, shared, or available to the advertiser. I am not asserting the advertiser receives the transcript, and I cannot say it does not. Neither is documented.</p>

<p>The point is narrower. A new data relationship may begin at the moment the shopper opts in, while the original conversation stays protected.</p>

<p>So the labeling is not a formality. It is the only thing telling a person they have crossed from an independent assistant into a commercial conversation, in an interface where both sides look like chat. That label has to survive the fourth follow-up question, not just the first screen.</p>

<h2>What this asks of ecommerce teams</h2>

<p>These are implications, not descriptions of what OpenAI has built. If a brand-run agent answers questions after the click, the governed surface grows.</p>

<p>Which product data grounds its answers. Who approves the claims it makes. How price, availability and policy stay current inside a conversation. What happens when its answer conflicts with the product page a shopper reaches next. How the sponsored framing is preserved deeper into the exchange. And which events feed back into optimization.</p>

<p>I have <a href="/blog/youtube-amazon-shopping-discovery-transaction">argued before</a> that when content and commerce fuse, the hard question is who owns the claim. In <a href="https://www.linkedin.com/pulse/hus-weekly-hoot-week-37-robert-hu-tr9hc" ${EXT}>Hu's Weekly Hoot Week 37</a> I put it as a brand needing control over whether its product stays buyable through an unsupported claim, even when it cannot control the creator's post. A sponsored agent moves that question inside the brand's own surface, where there is no creator to blame.</p>

<h2>The objections</h2>

<p>This is a test with select advertisers, and conversational ad units have a long history of promising more than they deliver. An extra conversational step is friction compared to a click, and plenty of shoppers will skip it.</p>

<p>The Shopify app may be convenience rather than capability, since campaigns could already be built in Ads Manager. "First ecommerce partner" is a distribution deal, and distribution deals are easier to announce than to matter.</p>

<p>Most importantly, OpenAI has published no performance evidence at all here. Nothing about conversion, return on ad spend, acquisition cost, or whether a sponsored conversation outperforms a landing page. The announcement describes a mechanism, not a result.</p>

<p>The mechanism is still the part worth watching. If the click stops being the end of the ad and becomes the start of a conversation, the quality of a brand's product data stops being a feed problem and becomes the script its agent speaks from.</p>

<p>If a shopper asked your sponsored agent a question your product page cannot answer today, what would it say?</p>
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
