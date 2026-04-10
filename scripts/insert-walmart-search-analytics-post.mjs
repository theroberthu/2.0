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
  slug: 'walmart-search-analytics-sparky-optimization',
  title: "Best Ways to Use Walmart's New Search Analytics to Find What Sparky Is Recommending (and What It's Not)",
  excerpt: "Walmart's search analytics show impressions, clicks, cart adds, and purchases at the keyword level. Most sellers use this for PPC. The real play is reverse-engineering what Sparky prioritizes.",
  meta_title: "Best Walmart Search Analytics for Sparky Optimization",
  meta_description: "Walmart's new search analytics reveal what Sparky sees in your listing. Best ways to use keyword data to find AI recommendation gaps and fix them before competitors do.",
  og_image: '/images/blog/walmart-search-analytics-sparky-optimization.svg',
  category: 'GEO & SEO',
  tags: ['walmart search analytics sellers', 'walmart search insights', 'best walmart listing optimization', 'walmart sparky optimization'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: "What does Walmart's search analytics show sellers?",
        a: "Walmart's search analytics provide keyword-level data including impressions, clicks, add-to-carts, purchases, and competitor rankings. You can see exactly which search queries show your product, how often shoppers click through, whether they add to cart, and which competitors outrank you on specific keywords. The data is available through Walmart Seller Center under the Analytics tab."
      },
      {
        q: "How can I use Walmart search data to optimize for Sparky?",
        a: "Look for keywords where you have high impressions but low clicks. This means Sparky and search are showing your product, but your title or image isn't matching what shoppers expect for that query. Fix the gap by adding the missing context to your listing. For example, if you get impressions on 'best glass container for meal prep' but no clicks, your listing probably doesn't mention meal prep. Adding that use-case language helps both search rankings and Sparky recommendations."
      },
      {
        q: "What is the best way to read the Walmart Search Query Report?",
        a: "Focus on four patterns: high impressions with low clicks means your title doesn't match the query intent. Clicks with no cart adds means your product page content isn't convincing. Cart adds with no purchases means price, shipping, or trust signals are failing. Competitor outranking you on a keyword means their listing has better relevance signals for that specific query. Each pattern points to a different optimization."
      },
      {
        q: "How often should I check Walmart search analytics?",
        a: "Weekly for active optimization periods, biweekly for maintenance. Walmart updates the data regularly, and search patterns shift with seasonality, competitor activity, and Sparky algorithm updates. Set a recurring check every Monday to review the previous week's performance and identify any new keyword gaps or competitor movements."
      }
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['walmart-sparky-35-percent-higher-aov', 'walmart-sparky-chatgpt-gemini', 'walmart-marketplace-200k-sellers'],
    featured_image_alt: "Walmart search analytics dashboard showing keyword performance data for Sparky AI optimization in 2026"
  },
  published_at: '2026-04-10T12:00:00.000Z',
  content: `<p>Walmart rolled out search analytics that give sellers keyword-level data on impressions, clicks, cart adds, and purchases. Most sellers are treating this like Amazon Brand Analytics: tracking which keywords drive sales and adjusting PPC bids accordingly.</p>

<p>That's useful, but it's not the best use of this data. The real play is using Walmart's search analytics to reverse-engineer what Sparky sees when it evaluates your listing. Every gap in your keyword performance is a gap in your AI visibility.</p>

<div class="callout-box">
  <p class="callout-label">Key Takeaways</p>
  <ul>
    <li><strong>Keyword-level data</strong> now available in Walmart Seller Center: impressions, clicks, cart adds, purchases, and competitor rankings for every search query showing your product.</li>
    <li><strong>High impressions + low clicks</strong> means your title doesn't match what shoppers (or Sparky) expect for that query. This is the most actionable signal in the report.</li>
    <li><strong>92% of sellers</strong> will use this data only for PPC optimization. The best sellers will use it to find and fix the gaps between what shoppers search for and what their listings actually say.</li>
    <li><strong>Search query data + GEO framework</strong> gives you a direct map of where your listings fall short for AI-powered recommendations.</li>
  </ul>
</div>

<h2>What Does Walmart's Search Analytics Actually Show?</h2>

<p>Walmart's Search Query Performance report is available in Seller Center under the Analytics tab. Here's what you get:</p>

<ul>
<li><strong>Impressions:</strong> How many times your product appeared in search results for a specific keyword. This tells you which queries Walmart's algorithm (and Sparky) associate with your listing.</li>
<li><strong>Clicks:</strong> How many shoppers clicked through to your product page from that keyword. The click-through rate reveals whether your title, image, and price match what the shopper expected when they searched.</li>
<li><strong>Add-to-carts:</strong> How many shoppers added your product to cart after viewing it. This measures whether your product page content convinced them.</li>
<li><strong>Purchases:</strong> How many of those cart adds converted to sales. The gap between cart adds and purchases reveals friction in pricing, shipping, or trust signals.</li>
<li><strong>Competitor rankings:</strong> Which competitors rank above and below you for each keyword. This shows you exactly who is winning the queries you're targeting.</li>
</ul>

<p>Most sellers look at this data and ask "which keywords should I bid on?" That's the PPC question. The better question is: "what is this data telling me about how Walmart's AI evaluates my listing?"</p>

<h2>How Are Most Sellers Using This Wrong?</h2>

<p>The default approach is straightforward: find keywords with high purchases, increase PPC bids on those keywords, reduce bids on keywords with low conversion. This is fine. It's also what every other seller in your category is doing.</p>

<p>The problem is that PPC optimization is a competitive auction. If you and your competitor both discover the same high-converting keyword and both increase bids, the cost goes up and the advantage disappears. You're optimizing within a system where the rules favor whoever spends more.</p>

<p><a href="/blog/walmart-sparky-35-percent-higher-aov">Sparky drives 35% higher AOVs</a> and it doesn't run on PPC. It recommends products based on listing content quality, not bid amounts. The search analytics data tells you exactly where your listing content falls short for the queries Sparky is processing. That's the optimization most sellers miss.</p>

<h2>Best Way to Read the Data: The Four Patterns</h2>

<p>Every keyword in your search report tells a story. Here's how to read it:</p>

<p><strong>Pattern 1: High impressions, low clicks.</strong> Your product is showing up for this query, but shoppers aren't clicking. This means your title, main image, or price doesn't match what the shopper expected when they searched that term. If the keyword is "best glass container for meal prep" and your title says "Glass Storage Container Set, BPA-Free, 5-Pack," you're missing the "meal prep" context. Sparky sees the same gap. It can't recommend your product for meal prep queries if your listing doesn't mention meal prep.</p>

<p><strong>Pattern 2: Good clicks, low cart adds.</strong> Shoppers are clicking through but not adding to cart. Your title got them to the page, but your bullet points, images, or description didn't close the deal. This usually means your product page content is too generic. It doesn't answer the specific questions that query implies. "Best glass container for meal prep" shoppers want to know: how many compartments, is it microwave-safe, does it seal for transport? If your bullets don't answer those questions, no cart add.</p>

<p><strong>Pattern 3: Cart adds, low purchases.</strong> Shoppers are convinced enough to add to cart but abandon before checkout. This is usually a pricing, shipping, or trust issue. Check if competitors on this keyword offer better shipping speeds (WFS badge matters here), lower prices, or more reviews. This pattern is less about listing content and more about operational competitiveness.</p>

<p><strong>Pattern 4: Competitors outranking you.</strong> The report shows which competitors rank above you for specific keywords. Click through to their listings and compare. What do their titles say that yours doesn't? What attributes do they include? What use cases do they mention? The answers tell you exactly what Walmart's algorithm (and Sparky) values for that query.</p>

<h2>Best Approach: Using Search Data to Find AI Recommendation Gaps</h2>

<p>This is where the search analytics and <a href="/geo">GEO framework</a> converge. The WHO, WHEN, WHERE, and WHY dimensions map directly to the gaps the search data reveals.</p>

<p>Take the "best glass container for meal prep" example. If you have impressions but no clicks, your listing is missing the <strong>WHEN</strong> (meal prep is a use-case timing signal) and the <strong>WHY</strong> (the reason someone needs this specific product). Add "meal prep" to your title and "designed for weekly meal prep with leak-proof lids for transport" to your bullets. Now you've closed the gap for both search and Sparky.</p>

<p>Here's the process Robert Hu uses with the brands he works with:</p>

<p><strong>Step 1:</strong> Export your Search Query Performance report for the last 30 days.</p>

<p><strong>Step 2:</strong> Sort by impressions (highest first). These are the queries Walmart already associates with your product.</p>

<p><strong>Step 3:</strong> For every high-impression keyword with a click-through rate below 5%, ask: does my title contain the language this shopper used? If not, that's your first fix.</p>

<p><strong>Step 4:</strong> For every keyword with clicks but low cart adds, ask: does my product page answer the questions this keyword implies? Map each keyword against the WHO/WHEN/WHERE/WHY framework to find the missing dimension.</p>

<p><strong>Step 5:</strong> For every keyword where a competitor outranks you, read their listing and identify the specific content that makes their listing more relevant for that query.</p>

<h2>Best Listing Optimizations Based on What the Data Tells You</h2>

<p>Once you've identified the gaps, here are the five highest-impact fixes:</p>

<p><strong>1. Add missing use-case language to your title.</strong> If you get impressions on "outdoor picnic plates" but your title says "Bamboo Plate Set, Reusable, 8-Pack," add "outdoor" and "picnic" to the title. This is the single fastest way to improve click-through rates on queries where you already have impressions.</p>

<p><strong>2. Rewrite bullets to answer query-implied questions.</strong> Every search query implies a question. "Best protein powder for runners" implies: is it designed for endurance, does it help with recovery, is it easy to digest mid-run? Your bullets should answer those questions directly. Don't list features. Answer the questions behind the keywords where you're losing clicks to cart adds.</p>

<p><strong>3. Complete every backend attribute.</strong> <a href="/blog/walmart-marketplace-200k-sellers">Walmart's marketplace crossed 200,000 sellers</a> and the platform is heavily investing in structured data for both search and Sparky. Every empty attribute field is a missed filter opportunity. Material, size, age range, dietary info, compatibility. Fill them all. The search analytics won't directly show you backend attribute gaps, but they surface the symptoms (low rankings on queries your product should match).</p>

<p><strong>4. Add WHO specificity to your A+ content.</strong> If the search data shows you're getting impressions from persona-specific queries ("best yoga mat for beginners," "kids art supplies ages 5-7"), your A+ content should explicitly name those personas. <a href="/blog/walmart-sparky-chatgpt-gemini">Sparky reads A+ content</a> and uses it for personalized recommendations. Generic lifestyle imagery without text gives Sparky nothing to work with.</p>

<p><strong>5. Monitor competitor movements weekly.</strong> The competitor ranking data in the search report changes constantly. Set a weekly cadence to check your top 10 keywords. When a competitor moves up, investigate what changed on their listing. When you move down, check if your listing content has become stale relative to the query intent. <a href="/services/product-listing-optimization">Listing optimization</a> is not a one-time project. It's an ongoing discipline.</p>

<h2>The Bigger Picture</h2>

<p>Walmart giving sellers search analytics is not just a reporting upgrade. It's a window into how Walmart's algorithm and Sparky evaluate your listing against every query in your category. The best sellers in 2026 won't treat this as a PPC tool. They'll treat it as a diagnostic for AI readiness.</p>

<p>Every high-impression, low-click keyword is a GEO gap. Every competitor outranking you is a content quality signal. Every cart add that doesn't convert is an operational friction point. The data is now available. The sellers who act on it systematically will pull ahead of the 92% who are still writing listings the old way.</p>

<p>If you want help turning your Walmart search analytics into a prioritized optimization plan, <a href="/free-strategy-session">book a free strategy session</a> and we'll walk through your top keywords together.</p>`
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
