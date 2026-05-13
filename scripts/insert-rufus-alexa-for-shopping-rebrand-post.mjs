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
  slug: 'rufus-alexa-for-shopping-rebrand-marketplace-sellers',
  title: "Rufus Is Dead. Long Live Alexa for Shopping. Here's What Changes for Marketplace Sellers.",
  excerpt: "Amazon retired the Rufus brand on May 13 and merged it into Alexa for Shopping, a unified agentic shopping experience across mobile, desktop, and Echo devices. Here's the practitioner take on what changes for marketplace sellers and what to audit this week.",
  meta_title: "Rufus Is Dead. Long Live Alexa for Shopping. Here's What Changes for Marketplace Sellers",
  meta_description: "Amazon retired the Rufus brand on May 13 and merged it into Alexa for Shopping, a unified agentic shopping experience across mobile, desktop, and Echo devices. Here's the practitioner take on what changes for marketplace sellers and what to audit this week.",
  og_image: '/images/blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers.svg',
  category: 'GEO & SEO',
  tags: ['Alexa for Shopping', 'Rufus rebrand Alexa', 'Amazon Alexa AI shopping agent', 'Alexa for Shopping optimization', 'Amazon agentic shopping 2026'],
  status: 'published',
  featured: false,
  read_time_minutes: 7,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'Is Rufus completely gone?',
        a: "Not completely. The Rufus brand is retired from the customer-facing experience. The cursive A icon now opens Alexa for Shopping, not Rufus. But Amazon was explicit that Rufus technology still powers parts of the new experience. The COSMO model and Rufus's recommendation logic continue to operate underneath. The brand layer changed. The reading engine did not.",
      },
      {
        q: 'Do I need to optimize differently for Alexa for Shopping than I did for Rufus?',
        a: 'The 6-dimension GEO framework still applies. WHO, WHEN, WHERE, WHY, WHAT, and AI Retrievability still determine whether your product gets recommended. What expanded is the surface area: voice queries, cross-device context, and subscription signals are now optimization layers on top of the listing data. The framework is the same. The optimization checklist got longer.',
      },
      {
        q: 'Will Alexa for Shopping work with non-Amazon retailers?',
        a: "No. Alexa for Shopping operates inside Amazon's owned surfaces: the Amazon app, Amazon.com, and Echo Show devices. It is the opposite play from Walmart, which pushed Sparky into ChatGPT and Gemini. Amazon is pulling all surfaces into one branded agent. For marketplace sellers, that means Alexa for Shopping visibility is an Amazon-channel question, not a cross-platform one.",
      },
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['rufus-sparky-ai-revenue-impact', 'agentic-commerce-tipping-point-marketplace-sellers-2026', 'amazon-joins-universal-commerce-protocol'],
    featured_image_alt: 'Amazon Rufus brand retired and merged into Alexa for Shopping with what changes for marketplace sellers in 2026',
  },
  published_at: '2026-05-14T12:00:00.000Z',
  content: `<p>Amazon announced on May 13 that it is retiring the Rufus brand. The standalone Rufus chatbot is being discontinued. In its place is "Alexa for Shopping," a unified AI shopping agent powered by Alexa+ that operates across the Amazon app, Amazon.com, and Echo Show devices. No Prime membership or Echo device required. Rajiv Mehta, Amazon's VP of conversational shopping, told Axios that more than 300 million customers used Rufus in 2025. The brand worked. Amazon retired it anyway.</p>

<p>Most coverage today is calling this a rebrand. It is not. A rebrand is when you change the name and keep the product. This is the opposite. Amazon kept the underlying Rufus technology and changed the product. The chatbot is becoming a multi-surface agent that can answer queries, compare products, and take actions on the customer's behalf, including auto-restocks, price-triggered purchases, and scheduled deliveries.</p>

<p>For marketplace sellers selling on Amazon, this expands the optimization surface area. The good news is the underlying <a href="/geo">GEO foundation</a> still applies. The new news is what now sits on top of it.</p>

<h2>What did Amazon announce on May 13?</h2>

<p>The customer-facing change is straightforward. Rufus is gone as a brand. The cursive "A" icon now opens Alexa for Shopping. The conversational search experience is embedded directly in the main Amazon search bar instead of living in a separate chatbot interface. Amazon is positioning Alexa for Shopping as the most personalized AI shopping assistant on the market, with an explicit pitch against ChatGPT, Gemini, and Perplexity shopping features.</p>

<p>The capabilities added are where the story actually is. Alexa for Shopping can monitor prices and automatically purchase items when they hit a target. It can restock household essentials on a schedule. It generates dynamic product comparisons (the launch coverage cites "Breville Barista Express vs..." as an example query). It surfaces up to a full year of price history. It creates personalized shopping guides for big purchases. These are agentic actions, not just chatbot responses. The buyer no longer asks the agent to recommend a product. The buyer asks the agent to handle the purchase.</p>

<p>The technology underneath is unchanged. Amazon was explicit that Rufus technology still powers parts of the new experience. Rufus's recommendation logic and shopping history continue to inform certain Alexa for Shopping queries. The COSMO model continues to operate. The brand layer changed. The reading engine did not. Listings Rufus surfaced last week are the listings Alexa for Shopping surfaces today.</p>

<h2>Why Amazon retired the Rufus brand</h2>

<p>Amazon is responding to ChatGPT, Gemini, and Perplexity moving into shopping. The Fast Company piece on the agentic commerce tipping point (covered last week in <a href="/blog/agentic-commerce-tipping-point-marketplace-sellers-2026">our blog post</a>) confirmed that Google and OpenAI commerce leads see the inflection coming in months, not years. Amazon is not waiting. By merging Rufus into Alexa, Amazon is unifying voice (Echo), visual (web and app), and agentic (actions on behalf of the user) into one branded experience. ChatGPT has voice. ChatGPT has visual. ChatGPT has agentic capabilities through OpenClaw. Amazon needed parity, and Alexa is the brand customers already associate with voice.</p>

<p>The cross-device continuity is the moat. The example Amazon gave in the launch coverage: a student brainstorms a science project with Alexa on their Echo, then later asks Alexa in the Amazon app to add the necessary project materials to their cart. ChatGPT cannot do that. Gemini cannot do that. Amazon can, because it owns both the conversation layer and the purchase layer. This is the same play <a href="/blog/walmart-sparky-chatgpt-gemini">Walmart ran when it pushed Sparky into ChatGPT and Gemini</a>, but in reverse. Instead of pushing the agent out to other surfaces, Amazon is pulling all surfaces into one agent.</p>

<h2>Three things that change for marketplace sellers</h2>

<h3>1. Voice query patterns now matter as much as visual queries</h3>

<p>The Rufus chatbot was primarily a text interface. Alexa for Shopping is voice-first across Echo devices and voice-enabled across mobile and desktop. The query patterns a buyer types are not the same as the query patterns a buyer speaks. Voice queries are longer, more conversational, more explicit about context ("I need a coffee maker that's good for my small apartment kitchen and easy enough for my partner to use too"). Listings that scored well against typed Rufus queries need to be re-evaluated against spoken queries. The optimization shift is from keyword-aware to conversation-aware.</p>

<h3>2. Cross-device context becomes a real signal</h3>

<p>Alexa for Shopping carries conversation state across devices. A buyer who asks Alexa on Echo about a product, then opens the Amazon app, then visits Amazon.com on desktop is the same buyer with the same context. The agent can recommend differently based on what the buyer asked an hour ago on a different device. For marketplace sellers, this means brands with rich persona-specific signals in their listings get matched to deeper buyer context. Listings with generic positioning get matched to generic queries.</p>

<h3>3. The agent can now take actions on behalf of the customer</h3>

<p>Auto-restock. Price-triggered purchases. Scheduled deliveries. These are not recommendations. They are transactions. For sellers, this means subscription-eligible products, regularly-replenished products, and price-sensitive products get a new lever. The brands that opt into Subscribe &amp; Save, that publish clear replenishment cadences, and that maintain consistent pricing become the agent's default choice for recurring transactions. The brands without those signals get bypassed for the brands that have them. <a href="/blog/rufus-sparky-ai-revenue-impact">Rufus already drove $10 billion in incremental Amazon sales</a>. Alexa for Shopping is built to compound on that number, not replace it.</p>

<h2>What does not change</h2>

<p>The underlying <a href="/geo">6-dimension GEO framework</a> still applies. Alexa for Shopping reads listings the same way Rufus did because Rufus technology still powers the reading engine. WHO, WHEN, WHERE, WHY, WHAT, and AI Retrievability all still score against your top SKUs. Your titles still need to read as natural language. Your bullets still need to answer when, where, and why. Your backend attributes still need to be natural-language phrases. Your reviews still need use-case specificity. The rebrand changes the surface area. It does not change the framework that determines whether you get recommended. This is the same data discipline that drives visibility on <a href="/blog/walmart-sparky-chatgpt-gemini">Walmart Sparky</a>, ChatGPT, Perplexity, and the agentic flows being built across <a href="/blog/amazon-joins-universal-commerce-protocol">the broader commerce landscape</a>.</p>

<h2>Four audits to run this week</h2>

<ol>
  <li><strong>Test your products with voice queries.</strong> Open the Alexa app on your phone or speak to an Echo. Ask the queries your buyers ask. Note where your products surface vs where competitors do. Voice query mismatch is the new optimization gap.</li>
  <li><strong>Audit your subscription and replenishment signals.</strong> If your product is consumable or replenishable, make sure Subscribe &amp; Save is enabled and the replenishment cadence is clear in your listing copy. Alexa for Shopping uses these signals to identify auto-restock candidates.</li>
  <li><strong>Check your price history consistency.</strong> The full-year price history Alexa for Shopping displays will expose brands that run frequent deep discounts. Price thrash that looks like noise to a human is a trust signal to the agent. Consistent pricing wins.</li>
  <li><strong>Run a cross-device test.</strong> Search a category on Amazon.com on desktop. Then ask Alexa for Shopping on your phone about the same category. The recommendations should be coherent. If they are not, that is data inconsistency the agent will compound against you.</li>
</ol>

<h2>Closing</h2>

<p>The rebrand is not cosmetic. It is Amazon unifying voice, visual, and agentic shopping into one product because the agentic commerce competition is escalating fast. For marketplace sellers, the underlying GEO foundation still applies, but the optimization surface area just expanded. The brands that audit voice queries, replenishment signals, and cross-device consistency this week will be 90 days ahead when the agent's behaviors compound.</p>

<p>The deeper resource on agentic commerce is the <a href="/aeo">AEO page</a>. The practical foundation that powers visibility across Alexa for Shopping, Sparky, ChatGPT, Perplexity, and Gemini is the <a href="/geo">GEO framework</a>.</p>

<p>If you want a read on where your brand stands across both the visual and voice surfaces of Alexa for Shopping, <a href="/free-strategy-session">book a free strategy session</a>.</p>`,
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
