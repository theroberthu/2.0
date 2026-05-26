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
  slug: 'walmart-sparky-q1-earnings-replenishment-shift',
  title: "Walmart's Q1 Earnings Revealed the Real Sparky Shift: From Discovery to Reorder",
  excerpt: "Everyone is quoting Walmart's Sparky growth numbers from Q1 earnings. The line that matters is about usage: Sparky is becoming a reorder engine for consumables, not just a discovery tool. Here is what that means for marketplace sellers.",
  meta_title: "Walmart's Q1 Earnings Revealed the Real Sparky Shift: From Discovery to Reorder",
  meta_description: "Everyone is quoting Walmart's Sparky growth numbers from Q1 earnings. The line that matters is about usage: Sparky is becoming a reorder engine for consumables, not just a discovery tool. Here is what that means for marketplace sellers.",
  og_image: '/images/blog/walmart-sparky-q1-earnings-replenishment-shift.svg',
  category: 'E-commerce Strategy',
  tags: ['Walmart Sparky earnings 2026', 'Sparky replenishment optimization', 'Walmart Sparky consumables', 'AI shopping agent reorder', 'Sparky average order value'],
  status: 'published',
  featured: false,
  read_time_minutes: 7,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'What is the difference between discovery optimization and reorder optimization?',
        a: 'Discovery optimization wins the moment a buyer asks the agent for a recommendation. It competes on relevance, persona match, and listing signals that get you into the recommendation set. Reorder optimization wins the moment the agent decides on its own to restock. It competes on subscription enrollment, consistent availability, stable pricing, and a track record of reliable past purchases. Discovery is a pitch. Reorder is a habit.',
      },
      {
        q: 'Does reorder optimization matter if I sell durable goods?',
        a: 'Less directly. Durable and one-time-purchase categories (standing desks, luggage, kitchen appliances) are exposed to the discovery dynamic but not the reorder dynamic in the same way. Durable brands still need discovery optimization done well. Consumable and replenishable brands need both discovery and reorder optimization, in that order.',
      },
      {
        q: "How do I become Sparky's default reorder for my product?",
        a: "Five moves. Enroll in Walmart's subscription and auto-reorder programs so the agent has a mechanism to default to you. Make your consumption cadence explicit in product data. Maintain ruthless in-stock consistency. Keep pricing stable instead of running frequent deep discounts. And earn the first purchase through discovery optimization, because reorder cannot start until discovery wins.",
      },
    ],
    related_services: ['ecommerce-strategy', 'product-listing-optimization'],
    related_posts: ['walmart-sparky-chatgpt-gemini', 'rufus-alexa-for-shopping-rebrand-marketplace-sellers', 'rufus-sparky-ai-revenue-impact'],
    featured_image_alt: 'Walmart Q1 FY27 earnings showed Sparky shifting from general merchandise discovery into a replenishment engine for food and consumables',
  },
  published_at: '2026-05-22T12:00:00.000Z',
  content: `<p>Walmart reported Q1 earnings on May 21, and Sparky was the headline. Weekly active users up over 100% quarter-over-quarter. Average order value 35% higher for Sparky users than non-Sparky users. Units purchased through Sparky up more than 4x sequentially. Sparky's intelligence and response quality up 40% this year. CEO John Furner told investors, "We're becoming AI native. And Sparky, our AI shopping agent, is making this possible." Every consultant in the space is quoting those numbers this week with the same conclusion: get optimized for Sparky.</p>

<p>That conclusion is correct but incomplete. The most important thing Walmart said on that call was not a growth number. It was a sentence about how people are using Sparky. The agent launched as a tool to discover general merchandise. With new replenishment, meal planning, and personalization features, customers are increasingly using it for food and consumables. That is the shift that matters. Sparky is becoming a reorder engine, not just a discovery engine. And reorder optimization is a different game than discovery optimization.</p>

<p>Getting recommended once is discovery. Becoming the product the agent reorders without the customer re-deciding is something else entirely. This post is about the second one, because that is where the next phase of <a href="/geo">AI visibility</a> is heading.</p>

<h2>What Walmart reported about Sparky in Q1</h2>

<p>The verified numbers from the May 21 call. Weekly active users on Sparky up over 100% quarter-over-quarter. AOV 35% higher for Sparky users. Units transacted through Sparky up more than 4x sequentially. Sparky intelligence and response quality up 40% year-to-date. Total Walmart revenue for Q1 FY27 came in at $177.75 billion. Membership and advertising now make up roughly a third of operating income, and Sparky engagement is part of what fuels that flywheel because higher-engagement shoppers convert more advertising inventory and renew memberships at higher rates. The <a href="/blog/rufus-sparky-ai-revenue-impact">broader AI revenue picture across Rufus and Sparky</a> lines up with this read.</p>

<p>Most coverage stops there. These numbers prove Sparky is real, growing fast, and driving higher-value transactions. The standard takeaway is that brands need clean, structured product data to be recommended by Sparky. That takeaway is true. It is also the same takeaway from last quarter, and the quarter before. The growth numbers confirm the trend. They do not reveal what changed. What changed is in the usage data, not the growth data.</p>

<h2>The line everyone skipped: Sparky is becoming a reorder engine</h2>

<p>Sparky launched as a discovery tool for general merchandise. Find me a coffee maker. Find me wireless earbuds. Help me pick a backpack. The new capabilities Walmart highlighted on the call (replenishment, meal planning, personalization) move Sparky into food and consumables. Those are not one-time discovery purchases. They are recurring purchases. A customer does not rediscover their laundry detergent every month. They reorder it. And increasingly, Sparky is the one initiating the reorder. The same dynamic is showing up across Sparky's <a href="/blog/walmart-sparky-chatgpt-gemini">cross-platform footprint inside ChatGPT and Gemini</a>, where the agent is being asked to manage recurring household needs, not just answer one-off product questions.</p>

<p>Reorder optimization is a different problem than discovery optimization. Discovery optimization is about winning the moment a buyer asks "what should I buy." You compete on relevance, persona match, and the <a href="/blog/6-dimension-geo-audit-framework-amazon-listing">6-dimension framework signals</a> that get you into the recommendation set. Reorder optimization is about winning the moment the agent decides "time to restock, here is what I will reorder." You compete on being the established default: subscription enrollment, consistent availability, reliable pricing, and a track record of successful past purchases the agent can lean on. Discovery is a pitch. Reorder is a habit.</p>

<p>The habit is worth more than the pitch. A discovery win is one transaction. A reorder win is a recurring transaction the competitor has to actively dislodge. Once Sparky defaults to reordering your product, every future purchase in that category flows to you until something breaks the pattern. The 35% higher AOV becomes 35% higher AOV every month, automatically. This is the same auto-restock dynamic Amazon is building into <a href="/blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers">Alexa for Shopping</a>. Both major retailers are building agentic replenishment because recurring revenue is worth more than one-time discovery.</p>

<h2>Which brands this matters most for</h2>

<p>Consumable and replenishable brands have the most at stake. Supplements, food, beverages, personal care, household goods, pet supplies, anything a customer buys on a recurring cadence. For these categories, becoming the agent's default reorder is the difference between winning a category and renting it one transaction at a time. A supplement brand that becomes the default reorder for "my magnesium" owns that customer's recurring spend in a way no single discovery placement can match. The economics shift from paying to win each transaction to retaining a recurring one at a fraction of the original acquisition cost.</p>

<p>Durable and one-time-purchase brands are less exposed to the reorder shift but still need discovery optimization. If you sell standing desks or luggage, the reorder dynamic does not apply the same way, but the discovery dynamic absolutely does. Know which game you are playing. Consumable brands need both discovery and reorder optimization. Durable brands need discovery optimization done well.</p>

<h2>How to become Sparky's default reorder</h2>

<ol>
  <li><strong>Enroll in Walmart's subscription and auto-reorder programs.</strong> The agent reorders what is structured to be reordered. If your product is not enrolled in subscription or replenishment programs, the agent has no mechanism to default to it. This is table stakes. Sit out of the program and you are sitting out of the reorder layer entirely.</li>
  <li><strong>Make your replenishment cadence explicit in your product data.</strong> A 30-day supply. A 60-count. A monthly refill. The clearer your consumption cadence, the easier it is for the agent to schedule the reorder at the right interval. Vague quantity data means the agent cannot time the restock without guessing.</li>
  <li><strong>Maintain ruthless availability consistency.</strong> An out-of-stock event during a scheduled reorder is how you lose the default. The agent reorders what it can reliably get. One stockout teaches the agent to find a backup, and the backup may quietly become the new default before you notice.</li>
  <li><strong>Keep pricing stable.</strong> The full-year price history surfaced by both Sparky and Alexa for Shopping means price thrash reads as instability. The agent defaults to products it can reorder at a predictable price. Frequent deep discounts that look like promotions to humans look like unreliability to an agent that is optimizing for reliable forward planning.</li>
  <li><strong>Earn the first purchase with discovery optimization.</strong> You cannot become the default reorder without winning the first purchase. Discovery optimization (the <a href="/geo">6-dimension framework</a>) is the on-ramp. Reorder optimization is what compounds after. Do both, in order.</li>
</ol>

<h2>Closing</h2>

<p>The Sparky growth numbers are real. The 100% weekly active user jump and the 4x sequential unit growth are not hype. But the story underneath those numbers is the shift from discovery to reorder. Both Walmart and Amazon are building agentic replenishment because the recurring transaction is worth more than the one-time discovery. The brands that win the next phase are the ones that become the agent's default reorder, not just an occasional recommendation. For consumable and replenishable brands, this is the single most important shift in marketplace strategy this year.</p>

<p>The deeper foundation is the <a href="/geo">GEO pillar</a>. The forward-looking layer is the <a href="/aeo">agentic commerce direction</a>, where reorder behavior is the leading edge of what buying agents are about to do across more categories.</p>

<p>If you sell a consumable or replenishable product and want a read on whether you are positioned to become an agent's default reorder, <a href="/free-strategy-session">book a free strategy session</a>. The audit covers your top SKUs, your subscription and replenishment posture, and the prioritized fixes that protect your category from being quietly handed to a competitor on Sparky's next restock cycle.</p>

<h2>Frequently Asked Questions</h2>

<h3>What is the difference between discovery optimization and reorder optimization?</h3>
<p>Discovery optimization wins the moment a buyer asks the agent for a recommendation. It competes on relevance, persona match, and listing signals that get you into the recommendation set. Reorder optimization wins the moment the agent decides on its own to restock. It competes on subscription enrollment, consistent availability, stable pricing, and a track record of reliable past purchases. Discovery is a pitch. Reorder is a habit.</p>

<h3>Does reorder optimization matter if I sell durable goods?</h3>
<p>Less directly. Durable and one-time-purchase categories (standing desks, luggage, kitchen appliances) are exposed to the discovery dynamic but not the reorder dynamic in the same way. Durable brands still need discovery optimization done well. Consumable and replenishable brands need both discovery and reorder optimization, in that order.</p>

<h3>How do I become Sparky's default reorder for my product?</h3>
<p>Five moves. Enroll in Walmart's subscription and auto-reorder programs so the agent has a mechanism to default to you. Make your consumption cadence explicit in product data. Maintain ruthless in-stock consistency. Keep pricing stable instead of running frequent deep discounts. And earn the first purchase through discovery optimization, because reorder cannot start until discovery wins.</p>
`,
}

const { data: existing } = await supabase
  .from('blog_posts')
  .select('id, slug')
  .eq('slug', post.slug)
  .maybeSingle()

if (existing) {
  const { error } = await supabase.from('blog_posts').update(post).eq('id', existing.id)
  if (error) {
    console.error('Update failed:', error)
    process.exit(1)
  }
  console.log('Post updated successfully:', existing.id)
} else {
  const { data, error } = await supabase.from('blog_posts').insert(post).select('id').single()
  if (error) {
    console.error('Insert failed:', error)
    process.exit(1)
  }
  console.log('Post inserted successfully:', data.id)
}
console.log('Slug:', post.slug)
console.log('Title:', post.title)
console.log('URL: https://theroberthu.com/blog/' + post.slug)
