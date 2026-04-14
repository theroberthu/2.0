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
  slug: 'ai-shopping-spending-macys-walmart-amazon',
  title: "Macy's AI Users Spend 4.75x More. Add Walmart's 35% and Amazon's $10B. The Debate Is Over.",
  excerpt: "Three retailers, three platforms, same result. Macy's Ask Macy's users spend 4.75x more. Walmart Sparky drives 35% higher AOVs. Amazon Rufus is pacing $10B. AI shoppers are the highest-value customers.",
  meta_title: "Best AI Shopping Data: Macy's 4.75x, Walmart 35%, Amazon $10B",
  meta_description: "Macy's AI users spend 4.75x more. Walmart Sparky lifts AOVs 35%. Amazon Rufus drives $10B. The best customers are using AI. Is your listing ready for them?",
  og_image: '/images/blog/ai-shopping-spending-macys-walmart-amazon.svg',
  category: 'GEO & SEO',
  tags: ['best ai shopping assistant results', "macy's ai assistant spending", 'ai shopping ecommerce data 2026'],
  status: 'published',
  featured: false,
  read_time_minutes: 4,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: "How much more do AI shopping assistant users spend?",
        a: "Macy's reports Ask Macy's users spend 4.75x more than non-users. Walmart says Sparky users spend 35% more per order. Amazon says Rufus is driving $10 billion in incremental annualized sales with users 60% more likely to purchase. The data is consistent across three different retailers and platforms: AI-assisted shoppers spend significantly more."
      },
      {
        q: "Why do shoppers who use AI assistants spend more?",
        a: "AI shopping assistants compress the discovery and evaluation phase. Instead of browsing dozens of options, the shopper gets a curated shortlist matched to their specific needs. This guided discovery builds purchase confidence faster, reduces decision fatigue, and leads to larger, more intentional purchases. The shopper isn't spending more because the AI upsells them. They're spending more because they find exactly what they want, faster."
      },
      {
        q: "What should Amazon and Walmart sellers do about this data?",
        a: "Optimize your listings for AI readability using the WHO, WHEN, WHERE, and WHY framework. Specify who your product is for, when and where to use it, and why it solves a specific problem. AI assistants recommend products they can match confidently to a shopper's stated need. Vague listings get skipped in favor of competitors with more specific, structured product data."
      }
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['rufus-sparky-ai-revenue-impact', 'walmart-sparky-35-percent-higher-aov', 'amazon-rufus-account-memory'],
    featured_image_alt: "AI shopping assistant spending data: Macy's 4.75x, Walmart Sparky 35% higher AOV, Amazon Rufus $10 billion incremental sales"
  },
  published_at: '2026-04-14T12:00:00.000Z',
  content: `<p>Macy's just reported that customers who use Ask Macy's, their AI shopping assistant, spend <strong>4.75x more</strong> than customers who don't. Add that to what we already know: <a href="/blog/walmart-sparky-35-percent-higher-aov">Walmart Sparky drives 35% higher average order values</a>. <a href="/blog/rufus-sparky-ai-revenue-impact">Amazon Rufus is pacing $10 billion in incremental annualized sales</a>.</p>

<p>Three different retailers. Three different AI platforms. Same result. Shoppers who use AI assistants spend dramatically more than shoppers who don't.</p>

<div class="callout-box">
  <p class="callout-label">Key Takeaways</p>
  <ul>
    <li><strong>4.75x higher spending</strong> from Macy's Ask Macy's AI assistant users compared to non-users.</li>
    <li><strong>35% higher AOVs</strong> from Walmart Sparky users compared to standard search shoppers.</li>
    <li><strong>$10 billion</strong> in incremental annualized sales from Amazon Rufus, with users 60% more likely to purchase.</li>
    <li><strong>The highest-value customers on every major platform are the ones using AI.</strong> If your listings aren't optimized for AI recommendations, you're invisible to the shoppers who spend the most.</li>
  </ul>
</div>

<h2>Why Do AI Shopping Users Spend So Much More?</h2>

<p>It's not because the AI is upselling them. It's because guided discovery builds purchase confidence.</p>

<p>A traditional shopper browses a page of 48 results, opens 6 tabs, reads reviews on 3 products, and eventually picks one (or abandons). Decision fatigue is real. The longer the process, the more likely the shopper downgrades to a cheaper option or leaves entirely.</p>

<p>An AI-assisted shopper tells the assistant what they need. The AI returns 3 to 5 products matched to that specific need with explanations for why each one fits. The shopper reads the reasoning, picks one, and buys. The entire evaluation phase collapses from 20 minutes of tab-switching to 2 minutes of reading AI-curated recommendations.</p>

<p>That compression has a direct effect on spending. When shoppers find exactly what they want faster, they buy with more confidence. They choose the product that best fits their need rather than the cheapest option on the page. They add complementary items because the AI suggested them in context. The 4.75x multiplier from Macy's isn't an anomaly. It's what happens when you remove friction from high-intent shopping.</p>

<h2>What This Means for Amazon and Walmart Sellers</h2>

<p>The math is simple. The highest-value customers on every major retail platform are now the ones using AI assistants. These shoppers spend 35% to 475% more per transaction. They convert at 60% higher rates. They represent $10 billion in incremental sales on Amazon alone.</p>

<p>If your listings aren't optimized for AI recommendations, you're invisible to this segment. Not underperforming. Invisible. <a href="/blog/amazon-rufus-account-memory">Rufus has persistent memory of shopper preferences</a>. Sparky is integrated into ChatGPT and Gemini. Ask Macy's is personalized to loyalty profiles. These AI assistants are recommending specific products to specific people. The products they recommend are the ones with clear, structured data about who they're for and why they matter.</p>

<p>The products they skip are the ones with vague, generic listings that don't give AI enough to work with.</p>

<h2>What Should You Do About It?</h2>

<p>The <a href="/geo">GEO framework</a> applies here directly. Every AI shopping assistant across Macy's, Walmart, and Amazon uses the same underlying logic: match product data against shopper intent. The brands that provide the clearest data win the recommendation.</p>

<p>Four things to audit on your top listings this week:</p>

<p><strong>WHO is this for?</strong> Not "everyone." Specify age range, lifestyle, skill level, or use case persona. "Protein powder for endurance runners over 40" gives AI a match point. "Premium protein powder" gives it nothing.</p>

<p><strong>WHEN do they use it?</strong> Morning, post-workout, weekly, seasonal, before bed. Temporal context helps AI match your product to situational queries that traditional keyword search never captured.</p>

<p><strong>WHERE do they use it?</strong> Home, gym, office, outdoors, travel. Location context is another dimension AI uses to narrow recommendations to the right shopper in the right moment.</p>

<p><strong>WHY is this the right product?</strong> Not features. Outcomes. "Reduces joint inflammation after long runs" converts better than "contains turmeric and ginger" because it matches the shopper's stated problem, not just an ingredient list.</p>

<p>These four dimensions are the difference between a listing an AI assistant can confidently recommend to a high-value shopper and a listing it skips entirely. With <a href="/services/product-listing-optimization">the right listing optimization</a>, you show up for the customers who spend 4.75x more. Without it, you compete for what's left.</p>

<p>The data from three different retailers is saying the same thing. The best customers are using AI. The brands AI recommends are the ones capturing that spend. The debate about whether this matters is over. The only question left is whether your listings are ready.</p>

<p>If you want to see where your listings stand for AI-powered recommendations, <a href="/free-strategy-session">book a free strategy session</a> and we'll audit your top products together.</p>`
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
