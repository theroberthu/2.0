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

const post = {
  slug: 'chatgpt-ads-self-serve-geo-still-wins-marketplace-sellers',
  title: "ChatGPT Just Opened Self-Serve Ads. Here's Why GEO Still Wins for Marketplace Sellers.",
  excerpt: "OpenAI's ChatGPT Ads are now self-serve with CPC bidding and pixel measurement. Most marketplace sellers will hear the agency pitch this week. Here's the practitioner's take on why GEO still wins and what to do instead.",
  meta_title: "ChatGPT Just Opened Self-Serve Ads. Here's Why GEO Still Wins for Marketplace Sellers",
  meta_description: "OpenAI's ChatGPT Ads are now self-serve with CPC bidding and pixel measurement. Most marketplace sellers will hear the agency pitch this week. Here's the practitioner's take on why GEO still wins and what to do instead.",
  og_image: '/images/blog/chatgpt-ads-self-serve-geo-still-wins-marketplace-sellers.svg',
  category: 'GEO & SEO',
  tags: ['ChatGPT ads for marketplace sellers', 'ChatGPT Ads Manager self-serve', 'ChatGPT ads vs GEO', 'AI search advertising for ecommerce', 'should I buy ChatGPT ads'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'Should I buy ChatGPT Ads right now?',
        a: 'Most marketplace sellers should not. The minimum spend has dropped from $250K to $50K in three months and is still falling. Self-serve is in beta. Wait 90 days, fix your organic GEO foundation first, and revisit ChatGPT Ads when the platform stabilizes and entry pricing reaches the under-$10K range it is trending toward.',
      },
      {
        q: 'Will ChatGPT Ads replace GEO?',
        a: "No. Ads run below ChatGPT's organic answer. The recommendation is what buyers act on. ChatGPT's ad system also evaluates the same product data the recommendation system evaluates, so brands with weak GEO foundations underperform on paid placement too. GEO is the foundation. Ads are an amplifier. Amplifying broken signal makes the problem more expensive, not solved.",
      },
      {
        q: 'What is the minimum spend on ChatGPT Ads?',
        a: '$50K as of May 5, 2026, down from $250K at the February 9 pilot launch. Self-serve via the new Ads Manager beta at ads.openai.com is currently US-only. The minimum will keep dropping as the platform scales. By late 2026 it will likely be accessible to mid-market ecommerce ad budgets.',
      },
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['geo-vs-seo-marketplace-sellers', 'meta-hatch-instagram-shopping-agent-marketplace-sellers', 'walmart-sparky-chatgpt-gemini'],
    featured_image_alt: 'ChatGPT self-serve ads launch with practitioner take on why GEO still wins for marketplace sellers in 2026',
  },
  published_at: '2026-05-06T12:00:00.000Z',
  content: `<p>OpenAI announced on May 5 that ChatGPT Ads are now self-serve. A beta Ads Manager is live at ads.openai.com. CPC bidding is live alongside the existing CPM model. A Conversions API and pixel measurement just shipped. Six hundred-plus advertisers have spent enough in the pilot for OpenAI to cross $100 million in annualized revenue in six weeks. The minimum spend has dropped from $250K at launch to $50K today. Self-serve will keep pulling that number down.</p>

<p>Most marketplace sellers will hear about this from agencies pitching paid AI placement as the next channel. The pitch will be that paid presence in ChatGPT is the answer to the AI visibility problem. The pitch is wrong. ChatGPT Ads do not replace <a href="/geo">GEO</a>. Brands that lead with paid placement before fixing their organic AI visibility will burn budget without solving the underlying problem.</p>

<h2>What OpenAI announced on May 5</h2>

<p>The self-serve Ads Manager at ads.openai.com is now in beta for US advertisers. CPC bidding joins CPM. New ad tech partners (Adobe, Criteo, Kargo, Pacvue, StackAdapt) connect ChatGPT inventory to existing campaign tooling alongside the agency-side Dentsu, Omnicom, Publicis, and WPP relationships. The Conversions API and pixel measurement close the attribution gap that defined the pilot.</p>

<p>OpenAI crossed $100 million in annualized revenue in six weeks. The minimum spend dropped from $250K to $50K in three months. By Q3 it will be lower. By Q4 it will be effectively zero. Marketplace sellers who today think "ChatGPT Ads is enterprise-only" will see it on their feed by end of summer.</p>

<p>Ads still appear below ChatGPT's responses, not inside them. OpenAI's stated principle is that ads do not influence organic answers. The recommendation engine still operates separately from the ad auction. The buyer reads ChatGPT's answer first. Then sees ads. The order matters more than the channel.</p>

<h2>Three reasons paid placement does not solve the AI visibility problem</h2>

<h3>1. The ads run below the answer, not inside it</h3>

<p>The recommendation is what gets acted on. Buyers using ChatGPT for product discovery are not in scrolling-the-feed mode. They asked a question. They got an answer. The answer recommended specific brands. Those brands get the consideration. Sponsored placements below the answer get a fraction of the attention the organic recommendation captures. The ad inventory is plentiful precisely because the natural eye path is to read the answer and act on it before scrolling to anything below.</p>

<h3>2. The ads compete with retail media you already buy</h3>

<p>Marketplace sellers are already running paid placement: Amazon Ads, Walmart Connect, Meta, Google Search, sometimes TikTok Shop. Adding ChatGPT Ads without proven ROI is budget reallocation, not net-new acquisition. The brands that win in 2026 are not the ones with one more ad channel. They are the ones with cleaner measurement across the channels they already run. ChatGPT Ads will compete for the same dollars as the channels you already report on. The honest question is not "should I add ChatGPT Ads" but "where does ChatGPT Ads outperform the channel I would have to cut to fund it."</p>

<h3>3. The brands that win paid AI placement are the brands that already win organic AI recommendation</h3>

<p>ChatGPT's ad system evaluates the same product data the recommendation system evaluates. If your listing tells ChatGPT clearly who the product is for, when it gets used, and why it solves the problem, your organic recommendations work and your paid ads convert. If your listing data is generic keyword stuffing, organic does not work and ads will not either. ChatGPT's system favors clarity at every layer. <a href="/blog/geo-vs-seo-marketplace-sellers">GEO is the foundation</a>. Paid spend is the amplifier. Amplifying broken signal makes the problem more expensive, not solved.</p>

<h2>When paid AI placement actually fits</h2>

<p>The reflex against ChatGPT Ads is not that they are bad. It is that they are the wrong first move for most marketplace sellers. Three legitimate use cases:</p>

<ol>
  <li><strong>Product launches</strong> where you have no organic recommendation history yet and need awareness fast. ChatGPT Ads compress the timeline for new SKUs that do not have review depth or category presence.</li>
  <li><strong>Geographic or category expansion</strong> where you have nailed organic in one segment and want paid amplification to enter a new one. Examples: expanding from US to Canada, or from "running shoes" to "trail running shoes."</li>
  <li><strong>Defending against a competitor's launch.</strong> When a new entrant gets organic recommendation share fast, paid placement is a legitimate short-term defense while you reinforce your organic position.</li>
</ol>

<p>In all three cases, the GEO foundation is still the prerequisite. Paid placement without clean product data underperforms. The ads run, the clicks happen, the conversions do not.</p>

<h2>What marketplace sellers should actually do this week</h2>

<ol>
  <li><strong>Don't budget for ChatGPT Ads yet.</strong> The platform is still in beta, the minimum spend is dropping fast, and you are better positioned in 90 days than today.</li>
  <li><strong>Audit your ChatGPT recommendation visibility.</strong> Run prompt-based diagnostics in ChatGPT for queries your buyers ask. If your brand never surfaces organically, fix that before paying for placement.</li>
  <li><strong>Apply the <a href="/geo">6-dimension GEO framework</a> to your top 10 SKUs.</strong> This is the work that compounds whether you ever buy a ChatGPT ad or not. The same listing data drives <a href="/blog/meta-hatch-instagram-shopping-agent-marketplace-sellers">Meta's Instagram shopping agent</a> and every other AI surface coming down the pipeline.</li>
  <li><strong>Set up the measurement layer.</strong> OpenAI's Conversions API and pixel only work if you have a tagging strategy on your DTC site. Set this up now so when you do buy ChatGPT Ads in Q3 or Q4 (if you decide to), the data is there.</li>
</ol>

<h2>Closing</h2>

<p>ChatGPT Ads are real. They are useful for specific scenarios. They are not the answer to the AI visibility problem most marketplace sellers face. The brands that compound through 2026 are running GEO as the foundation and treating paid AI placement as a tactical layer for specific use cases, not as a substitute for organic recommendation work.</p>

<p>The deeper resource is the <a href="/geo">GEO pillar page</a>. When agentic surfaces start completing transactions on the buyer's behalf, the same data quality discipline becomes the <a href="/aeo">AEO foundation</a> for paid and organic alike.</p>

<p>If you want a read on where your brand actually stands across the AI surfaces that matter (organic and paid), <a href="/free-strategy-session">book a free strategy session</a>. The audit covers your top SKUs, your category visibility across AI surfaces, and the prioritized fixes that will compound fastest.</p>`,
}

async function insertPost() {
  const { data: existing } = await supabase
    .from('blog_posts')
    .select('id')
    .eq('slug', post.slug)
    .single()

  if (existing) {
    console.log('Post already exists, updating...')
    const { data, error } = await supabase
      .from('blog_posts')
      .update(post)
      .eq('slug', post.slug)
      .select()
    if (error) { console.error('Error updating post:', error); process.exit(1) }
    console.log('Post updated successfully:', data[0].id)
  } else {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(post)
      .select()
    if (error) { console.error('Error inserting post:', error); process.exit(1) }
    console.log('Post inserted successfully:', data[0].id)
  }
  console.log('Slug:', post.slug)
  console.log('Title:', post.title)
  console.log('URL: https://theroberthu.com/blog/' + post.slug)
}

insertPost()
