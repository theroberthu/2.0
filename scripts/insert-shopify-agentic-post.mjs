import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { generateOgImage } from './generate-og-image.mjs'

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

const ogImagePath = generateOgImage(
  'shopify-agentic-merit-based-shopping',
  "Shopify Says AI Shopping Is Merit-Based. Here's Why That Matters for Small Sellers.",
  'GEO & SEO'
)
console.log('Generated OG image:', ogImagePath)

const post = {
  slug: 'shopify-agentic-merit-based-shopping',
  title: "Shopify Says AI Shopping Is \"Merit-Based.\" Here's Why That Matters for Small Sellers.",
  excerpt: "Shopify president Harley Finkelstein says agentic commerce is fundamentally merit-based. If AI agents recommend products based on fit instead of ad spend, small Amazon and Walmart sellers may finally get a fair shot at discovery.",
  meta_title: 'Shopify Agentic Commerce: Merit-Based AI Shopping | Robert Hu',
  meta_description: "Shopify's president says AI shopping agents are merit-based, not ad-based. What agentic commerce means for small Amazon and Walmart sellers in 2026.",
  og_image: ogImagePath,
  category: 'GEO & SEO',
  tags: ['agentic shopping merit based', 'ai product discovery small brands', 'shopify agentic commerce', 'amazon rufus small brands', 'GEO'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'What does merit-based AI shopping mean for small sellers?',
        a: 'Merit-based AI shopping means that AI agents recommend products based on quality, relevance, and fit rather than advertising budgets or retail scale. Shopify president Harley Finkelstein argues that agentic commerce levels the playing field for smaller brands because AI agents evaluate product content on its merits, not on who paid the most for placement.'
      },
      {
        q: 'How does agentic commerce change product discovery on Amazon and Walmart?',
        a: 'Agentic commerce shifts product discovery from keyword-based search to AI-driven recommendations. Instead of customers scrolling through sponsored results, AI agents like Amazon Rufus, ChatGPT, and Perplexity evaluate product content, reviews, and brand signals to make personalized recommendations. This means product content quality matters more than ad spend for visibility.'
      },
      {
        q: 'What should small brands do to prepare for agentic shopping?',
        a: 'Small brands should optimize their product listings for AI readability by answering specific customer questions directly, building consistent brand entity signals across platforms, and investing in Generative Engine Optimization (GEO). Brands that prepare now will have a structural advantage as agentic commerce scales to an estimated $385 billion in U.S. spending by 2030.'
      }
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['amazon-rufus-optimization', 'ai-compresses-messy-middle-ecommerce'],
    featured_image_alt: 'Shopify agentic commerce merit-based AI shopping for small e-commerce sellers'
  },
  published_at: '2026-03-19T12:00:00.000Z',
  content: `<p>Shopify's president just said the quiet part out loud: AI shopping agents don't care about your ad budget.</p>

<p>At the Upfront Summit in Los Angeles, Harley Finkelstein described agentic commerce as "fundamentally merit-based." His argument is simple. When an AI agent shops for a customer, it evaluates products based on fit, quality, and relevance. Not on who paid more for placement. If that holds true at scale, it is the most significant structural shift in product discovery since Amazon launched Sponsored Products.</p>

<p>For small Amazon and Walmart sellers who have spent years competing against brands with 10x their ad budgets, this could be the opening they have been waiting for.</p>

<div class="callout-box">
  <p class="callout-label">Key Takeaways</p>
  <ul>
    <li><strong>14x increase</strong> in AI agent-sourced orders on Shopify stores over the past 12 months, signaling rapid adoption of agentic commerce.</li>
    <li><strong>$385 billion</strong> in U.S. e-commerce spending could flow through agentic channels by 2030, according to Morgan Stanley.</li>
    <li><strong>45% of consumers</strong> already use AI for at least part of their buying journey, per IBM's January 2026 report.</li>
    <li><strong>Merit-based discovery</strong> means product content quality will outweigh ad spend for AI-driven recommendations.</li>
  </ul>
</div>

<h2>What Does "Merit-Based" AI Shopping Actually Mean?</h2>

<p>"Agentic is fundamentally merit-based as opposed to, if you go to a search engine, you type sneakers, you're going to see Footlocker," Finkelstein <a href="https://www.retailbrew.com/stories/2026/01/16/shopify-president-agentic-commerce-could-usher-in-merit-based-shopping" target="_blank" rel="noopener noreferrer">told Retail Brew</a>. His point is that traditional search rewards scale and spend. AI agents reward relevance.</p>

<p>Here is the difference. When a customer types "running shoes" into Google or Amazon, the first results are dominated by brands that paid for placement or have decades of domain authority. A small brand making exceptional trail runners has almost no chance of appearing on page one, regardless of product quality.</p>

<p>In an agentic model, the AI knows the customer's preferences, past purchases, and specific needs. It recommends the product that best fits, not the product with the biggest ad budget. Finkelstein used the example of Tom Sachs' NikeCraft shoes. They would never surface in a traditional search for "sneakers." But an AI agent that knows a shopper's taste would recommend them immediately.</p>

<p>This is the core promise: <strong>product quality and content clarity could matter more than marketing spend.</strong></p>

<h2>How Does Agentic Commerce Change Product Discovery on Amazon and Walmart?</h2>

<p>The shift is already happening. Amazon Rufus now handles an estimated <strong>35% of shopping sessions</strong> during peak periods, up from 13.7% of daily queries when it first launched. Customers who engage with Rufus are <strong>60% more likely to complete a purchase</strong>. Amazon projects Rufus will generate over $10 billion in incremental annual sales.</p>

<p>Walmart is making the same bet with Sparky, its AI shopping assistant, which is now integrated into ChatGPT and Gemini. These are not experiments. They are the new infrastructure of product discovery.</p>

<p>For small sellers, this changes the game in two ways:</p>

<ul>
<li><strong>Discovery shifts from keywords to context.</strong> Traditional Amazon SEO is about matching search terms. AI agents evaluate your entire product story: bullet points, descriptions, reviews, Q&A, A+ content, and even off-platform mentions. The brands with the clearest, most structured content win, not the brands with the most keyword stuffing.</li>
<li><strong>The advertising moat narrows.</strong> When a customer asks Rufus "what's the best protein powder for runners," the AI does not show them a sponsored result. It synthesizes information from product content, reviews, and brand signals. If your product genuinely answers that question better than the competition, you have a real shot at the recommendation, regardless of your PPC budget.</li>
</ul>

<p>This is what Robert Hu has been seeing across the brands he works with. Sellers who have invested in <a href="/blog/amazon-rufus-optimization">optimizing their listings for AI readability</a> are outperforming competitors with larger ad budgets. The pattern is consistent: content clarity beats spend in AI-driven discovery.</p>

<h2>The Numbers Behind the Shift</h2>

<p>This is not theoretical. The data shows agentic commerce is scaling fast:</p>

<ul>
<li><strong>Morgan Stanley estimates</strong> agentic shoppers could represent $190 billion to $385 billion in U.S. e-commerce spending by 2030.</li>
<li><strong>McKinsey projects</strong> agentic commerce could generate $3 trillion to $5 trillion globally by 2030.</li>
<li><strong>During Cyber Week 2025,</strong> 20% of all global orders were influenced by AI agents or shopping assistants.</li>
<li><strong>Over 1 million Shopify merchants</strong> have already opted into OpenAI's Instant Checkout, enabling purchases directly within ChatGPT.</li>
<li><strong>Google's Universal Commerce Protocol (UCP),</strong> co-developed with Shopify and Walmart, is creating an open standard for AI agents to discover and transact with merchants at scale.</li>
</ul>

<p>The trajectory is clear. AI agents are not replacing search. They are becoming the primary filter between search and purchase. The <a href="/blog/ai-compresses-messy-middle-ecommerce">messy middle of product discovery</a> is getting compressed by AI, and the brands that AI agents can understand are the ones that will survive the compression.</p>

<h2>What Should Small Brands Do to Prepare for Agentic Shopping?</h2>

<p>If Finkelstein is right and agentic commerce really is merit-based, then small brands need to compete on merit. Here is what that looks like in practice:</p>

<p><strong>1. Invest in GEO, not just SEO.</strong> Generative Engine Optimization is the practice of structuring your product content so AI systems can understand, recommend, and cite your products. Traditional SEO gets you indexed. <a href="/geo">GEO gets you recommended</a>. If your listings are not optimized for AI agents, you are invisible to a growing share of high-intent shoppers.</p>

<p><strong>2. Answer questions, don't just list features.</strong> AI agents process natural language queries. "Best dog treats for sensitive stomachs" is a question that Rufus will try to answer. If your listing clearly states "single-source protein for dogs with sensitive stomachs," the AI has something to work with. If your listing says "premium all-natural grain-free USA-made treats," it does not.</p>

<p><strong>3. Build brand entity signals across platforms.</strong> AI agents do not just read one listing. They pull from reviews, Q&A, your brand store, A+ content, social mentions, and off-platform references. The more consistent your brand identity is across all of these touchpoints, the more likely AI tools are to recognize and recommend your products. This is where <a href="/services/product-listing-optimization">product listing optimization meets GEO</a>.</p>

<p><strong>4. Stop treating AI shopping as a future problem.</strong> 45% of consumers already use AI for part of their buying journey. Shopify has seen a 14x increase in agent-sourced orders. Amazon Rufus is handling over a third of shopping sessions during peak traffic. The brands that optimize now will have a structural advantage that compounds over time. The brands that wait will spend the next two years wondering where their traffic went.</p>

<h2>The Catch: Merit-Based Does Not Mean Guaranteed</h2>

<p>There is an important caveat. "Merit-based" does not mean the playing field is perfectly level. Amazon Rufus recommendations have been found to be <strong>83% self-serving</strong>, pushing Amazon's own products. Google and OpenAI will inevitably monetize agentic commerce through some form of sponsored placement. The platforms building these AI agents have their own incentives.</p>

<p>But even with those limitations, the direction is clear. Product content quality is becoming a more important signal than ad spend. AI agents need to recommend something, and they are going to recommend the products they can best understand and match to customer intent. That is a structural advantage for brands with strong fundamentals, clear messaging, and well-optimized content.</p>

<p>For small Amazon and Walmart sellers, that is the opportunity. You may never outspend the category leader on PPC. But you can out-content them. You can build listings that AI agents actually understand. You can be the brand that Rufus, ChatGPT, and Perplexity recommend when a customer asks a specific question about your category.</p>

<p>The meritocracy is not perfect. But it is better than what we had. And the sellers who figure that out first will have a significant head start.</p>

<p>If you want to see where your listings stand for AI-driven discovery, <a href="/free-strategy-session">book a free strategy session</a> and we will run through your top products together.</p>`
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
}

insertPost()
