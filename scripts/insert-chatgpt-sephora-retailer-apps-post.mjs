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

const ogImagePath = '/images/blog/chatgpt-sephora-retailer-apps.svg'

const post = {
  slug: 'chatgpt-sephora-retailer-apps',
  title: "Sephora Just Launched Inside ChatGPT. Here's What That Means for Every Other E-commerce Brand.",
  excerpt: "OpenAI killed Instant Checkout and is replacing it with retailer apps. Sephora is first. Walmart and Target are close behind. For brands doing $100K to $2M, the discovery layer just became the storefront.",
  meta_title: 'Sephora in ChatGPT: AI Shopping Retailer Apps | Robert Hu',
  meta_description: "Sephora launched inside ChatGPT as OpenAI shifts to retailer apps. What the end of Instant Checkout means for Amazon and DTC brands in 2026.",
  og_image: ogImagePath,
  category: 'GEO & SEO',
  tags: ['chatgpt shopping sephora', 'chatgpt retailer apps', 'openai instant checkout', 'ai product discovery 2026', 'GEO'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'What is happening with ChatGPT shopping in 2026?',
        a: "OpenAI is ending Instant Checkout and replacing it with retailer apps inside ChatGPT. Sephora launched first with a U.S. pilot that includes personalized recommendations based on Beauty Insider profiles. Walmart, Target, and other major retailers are expected to follow. The model shifts from OpenAI handling transactions to retailers bringing their own branded checkout experience into the ChatGPT interface."
      },
      {
        q: 'Why did OpenAI kill Instant Checkout?',
        a: "Three reasons. Users liked researching products in ChatGPT but did not want to complete purchases there. Managing real-time inventory, tax calculations, and shipping in a chat interface was too complex. And merchants wanted control over their branded checkout experience rather than handing it to a third-party flow they could not customize."
      },
      {
        q: 'What does the ChatGPT retailer app model mean for small e-commerce brands?',
        a: "Small brands will not build their own ChatGPT apps. But the shift confirms that AI platforms are becoming the primary product discovery layer. The brands that show up in ChatGPT product recommendations (through strong structured data, review signals, and AI-readable content) will capture demand, even if the transaction happens on Amazon or their DTC site. This is why Generative Engine Optimization matters now."
      }
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['chatgpt-shopping-pullback-sellers', 'walmart-sparky-chatgpt-gemini', 'amazon-shop-direct-sellers'],
    featured_image_alt: 'Sephora launches inside ChatGPT as OpenAI shifts to retailer apps for AI shopping in 2026'
  },
  published_at: '2026-03-24T12:00:00.000Z',
  content: `<p>Sephora just launched an app inside ChatGPT. Customers can get personalized product recommendations based on their Beauty Insider profile, complete with loyalty rewards and samples. In-app checkout is coming later.</p>

<p>This is not a one-off partnership. OpenAI confirmed it is ending Instant Checkout entirely and replacing it with a retailer-app model. Walmart is expected to bring Sparky into ChatGPT as early as this week. Target already launched a beta app earlier this year. The AI discovery layer is becoming the new storefront.</p>

<p>For brand owners doing $100K to $2M on Amazon and DTC, you are not going to build a ChatGPT app. But if your products are not showing up when ChatGPT recommends products in your category, you are losing ground to competitors who are.</p>

<div class="callout-box">
  <p class="callout-label">Key Takeaways</p>
  <ul>
    <li><strong>3 major retailers</strong> (Sephora, Target, Walmart) are now building branded shopping apps inside ChatGPT, replacing the failed Instant Checkout model.</li>
    <li><strong>100+ million</strong> weekly ChatGPT users are already researching products through conversational AI. The discovery is happening whether you are optimized for it or not.</li>
    <li><strong>Instant Checkout failed</strong> because users treat ChatGPT as a discovery tool, not a transaction platform. That distinction matters for your strategy.</li>
    <li><strong>GEO (Generative Engine Optimization)</strong> is how $100K to $2M brands show up in these AI shopping conversations without building their own ChatGPT app.</li>
  </ul>
</div>

<h2>Why Did OpenAI Kill Instant Checkout?</h2>

<p>Instant Checkout let users buy products directly inside ChatGPT without leaving the conversation. On paper, it was the future of frictionless commerce. In practice, it didn't work.</p>

<p>Three problems killed it:</p>

<ul>
<li><strong>Users liked researching, not buying.</strong> People used ChatGPT to compare products, narrow down options, and get recommendations. But when it came time to pull out a credit card, they wanted to transact somewhere they already trusted. Amazon. The brand's own site. Not a chat window.</li>
<li><strong>The operational complexity was brutal.</strong> Real-time inventory management, dynamic tax calculations across jurisdictions, shipping estimates, return policies. Managing all of that inside a conversational interface created more friction than it removed.</li>
<li><strong>Merchants wanted control.</strong> Brands spend millions building checkout experiences that maximize conversion and capture customer data. Handing that to OpenAI's generic checkout flow meant losing control of the most valuable touchpoint in the funnel.</li>
</ul>

<p>The retailer-app model fixes all three problems. Sephora controls its own checkout. The customer stays in an interface they trust. And the operational complexity lives where it belongs, inside the retailer's infrastructure.</p>

<h2>What Does the Retailer-App Model Actually Look Like?</h2>

<p>Sephora's ChatGPT app is a pilot in the U.S. market. It connects to the customer's Beauty Insider profile and uses that data to personalize product recommendations. Loyalty rewards and samples still apply. In-app checkout (handled by Sephora, not OpenAI) is coming in a later phase.</p>

<p><a href="/blog/walmart-sparky-chatgpt-gemini">Walmart is integrating Sparky</a>, its AI shopping assistant, into ChatGPT as early as this week. Sparky already drives <strong>35% higher average order values</strong> on walmart.com. Bringing it into ChatGPT extends that capability to wherever customers start their shopping conversations.</p>

<p>Target launched a beta app earlier this year. Google released shopping agent updates last week with real-time product data, multi-item carts, and loyalty membership integration.</p>

<p>The pattern is clear. Every major platform is building toward the same architecture: AI handles discovery and recommendation, the retailer handles transaction and fulfillment. The AI layer is the new top of funnel.</p>

<h2>What Does This Mean for Brands That Are Not Sephora?</h2>

<p>If you are running a $100K to $2M brand on Amazon, DTC, or both, you are not going to build a ChatGPT app. Neither is your competitor. That is a game for enterprise retailers with engineering teams and platform partnerships.</p>

<p>But here is what you can control: <strong>whether your products show up when ChatGPT recommends products in your category.</strong></p>

<p>The retailer-app shift actually makes this more important, not less. Here is why.</p>

<p>When Instant Checkout existed, ChatGPT was trying to be the entire funnel: discovery, comparison, transaction. That was messy and unreliable. Now that transaction is moving back to retailers, ChatGPT's role is becoming pure discovery and recommendation. That is exactly where it's strongest.</p>

<p>When a customer asks ChatGPT "what's the best protein powder for runners" or "which kitchen knife set is best under $150," the AI generates a recommendation. That recommendation is based on the structured data, reviews, and brand signals it can access. If your product has the data quality to get recommended, the customer clicks through to Amazon or your DTC site and buys there.</p>

<p>The transaction happening somewhere else does not matter. The recommendation is the moment that determines whether you get the sale.</p>

<h2>How Do You Get Recommended in AI Shopping Conversations?</h2>

<p>This is where <a href="/geo">Generative Engine Optimization (GEO)</a> comes in. GEO is the practice of structuring your product content so AI systems can understand, evaluate, and recommend your products.</p>

<p>The WHO/WHEN/WHERE/WHY framework Robert Hu uses with clients maps directly to how AI shopping agents evaluate products:</p>

<ul>
<li><strong>WHO is this product for?</strong> AI agents match products to specific customer profiles. If your listing says "premium kitchen knife set," the AI has nothing to work with. If it says "8-piece knife set designed for home cooks who want professional-grade sharpness without the professional price," the AI can match it to a specific query.</li>
<li><strong>WHEN do they need it?</strong> Usage occasions and timing signals help AI agents make contextual recommendations. "Great for meal prep" or "designed for daily use" gives the AI scenarios to recommend into.</li>
<li><strong>WHERE does this fit in their life?</strong> Size, compatibility, and context matter. AI agents are looking for products that fit the customer's specific situation, not generic "one size fits all" positioning.</li>
<li><strong>WHY this product over alternatives?</strong> Differentiation signals are critical. Price context, unique features, material quality, warranty terms. AI agents need explicit reasons to recommend your product over the next option in the category.</li>
</ul>

<p>SEO gets you found in traditional search. GEO gets you recommended in AI conversations. The Sephora news just made the "recommended" part more valuable because now the entire shopping journey starts with an AI recommendation.</p>

<h2>What Should You Do This Week?</h2>

<p>You do not need to panic. You do need to pay attention. Here are four moves that matter right now:</p>

<p><strong>1. Test your AI visibility.</strong> Go to ChatGPT, Perplexity, and Google AI Overviews. Search for your product category the way a customer would. "Best [your category] for [your target customer]." If your brand does not appear in the recommendations, you have a GEO gap. That gap is now directly connected to lost sales.</p>

<p><strong>2. Audit your structured product data.</strong> AI agents recommend the products they can understand most clearly. Every missing attribute (dimensions, materials, compatibility, use cases, certifications) is a reason to recommend a competitor instead. Your Amazon backend keywords, A+ content, and product descriptions are the raw material AI systems work with. <a href="/services/product-listing-optimization">Product listing optimization for AI readability</a> is no longer optional.</p>

<p><strong>3. Build review signals intentionally.</strong> AI agents weigh review sentiment heavily. Not just star ratings, but the specific language customers use in reviews. A product with 200 reviews that consistently mention "sharp," "durable," and "great for meal prep" gives the AI clear signals to match against customer queries. Encourage reviews that describe usage, not just satisfaction.</p>

<p><strong>4. Stop treating AI shopping as separate from your channel strategy.</strong> The <a href="/blog/chatgpt-shopping-pullback-sellers">OpenAI Instant Checkout pullback</a> proved that AI platforms are discovery tools, not transaction platforms. Your Amazon listings, DTC product pages, and brand content are what AI systems pull from when making recommendations. Improving those assets improves your AI visibility and your traditional conversion rates simultaneously.</p>

<h2>The Bigger Picture</h2>

<p>The Sephora launch is a signal, not a destination. The shopping journey is being restructured around AI discovery. Customers ask an AI for a recommendation. The AI evaluates products based on data quality, review signals, and brand clarity. The customer buys from the retailer they trust.</p>

<p>For enterprise retailers like Sephora, Walmart, and Target, the play is building branded apps inside ChatGPT to own the transaction. For $100K to $2M brands, the play is ensuring your products are the ones AI agents recommend, regardless of where the customer ultimately buys.</p>

<p>The brands investing in GEO now, making their product content AI-readable, building entity clarity across platforms, and earning the structured data signals that AI agents prioritize, will capture a growing share of this AI-mediated discovery. The brands that wait will spend the next two years wondering why their traffic is declining even though their Amazon PPC spend keeps going up.</p>

<p>AI is not replacing your sales channels. It is becoming the front door to all of them.</p>

<p>If you want to see how your products show up in AI shopping conversations and where the gaps are, <a href="/free-strategy-session">book a free strategy session</a> and we will run through it together.</p>`
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
