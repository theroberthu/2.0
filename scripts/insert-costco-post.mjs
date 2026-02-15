import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Parse .env.local manually
const envFile = readFileSync(join(__dirname, '..', '.env.local'), 'utf-8')
const envVars = {}
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) envVars[match[1].trim()] = match[2].trim()
})

const supabase = createClient(
  envVars.NEXT_PUBLIC_SUPABASE_URL,
  envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Only use fields that exist in current DB schema
const post = {
  slug: 'costco-digital-ecommerce-strategy',
  title: 'Costco Is Finally Going Digital. Here\'s What It Means for E-commerce Brands.',
  excerpt: 'Costco just reported a 20.5% surge in digitally enabled sales and is rolling out AI-powered inventory systems. When the last holdout goes digital, it changes the game for every brand in its ecosystem.',
  meta_title: 'Costco Goes Digital: What It Means for E-commerce Brands',
  meta_description: 'Costco reported 20.5% growth in digital sales and is investing in AI inventory systems. Robert Hu breaks down what this means for e-commerce brands doing $100K to $2M.',
  featured_image: null,
  published: true,
  published_at: new Date().toISOString(),
  content: `<p>Costco just reported a 20.5% surge in digitally enabled comparable sales, driven by a 24% increase in site traffic and a 48% uptick in app traffic. The company is rolling out a digital wallet, AI-powered inventory systems, and pre-scanning checkout tools. For years, Costco resisted the digital shift. Now they're all in, and the ripple effects will hit brands selling across every major marketplace.</p>

<h2>What Happened?</h2>

<p>Costco's digital pivot comes after Walmart's digital transformation pushed its market cap to $1 trillion. Walmart reported 27% e-commerce growth in its most recent quarter, and the market rewarded them for it. Costco, with a $447 billion market cap, is now following the same playbook.</p>

<p>CEO Ron Vachris made the strategy explicit: "Our digital vision at Costco is to deliver a seamless experience that builds trust and loyalty with our members both in warehouses and online." The investments aren't cosmetic. AI-supported inventory systems, a digital wallet, and checkout automation signal a fundamental shift in how Costco thinks about technology. (<a href="https://www.thestreet.com/retail/costco-bets-big-on-e-commerce-after-walmart-surge">Source: TheStreet</a>)</p>

<h2>How Does Costco's Digital Push Affect Amazon and Walmart Sellers?</h2>

<p>When a company like Costco decides to rebuild its digital infrastructure, it changes the playing field for every brand in its ecosystem. This isn't just about Costco catching up to Walmart. It's about what happens to your brand when the platforms you sell on start competing on technology, not just shelf space.</p>

<p>Here's what I've seen play out over 20+ years of e-commerce: <strong>when a major retailer goes digital, the brands that win are the ones already optimized for digital discovery.</strong> The ones still treating online as an afterthought get left behind fast.</p>

<p>Robert Hu has watched this pattern repeat with every major platform shift. Amazon's A9 algorithm changed how product discovery worked. Walmart's marketplace launch created new opportunities for brands willing to optimize early. Now Costco's digital push is creating the same kind of window.</p>

<p>The second-order effect most people aren't seeing: Costco's AI inventory systems will change what it means to be a reliable supplier. If their system predicts demand more accurately and expects tighter fulfillment, brands with inconsistent supply chains will lose placement. The bar for operational excellence just went up.</p>

<h2>Should E-commerce Brands Start Selling on Costco.com?</h2>

<p>If your products fit Costco's value-oriented model and you can handle the margin structure, the answer is yes, and now is the time. Here's why: Costco's digital platform is still maturing. That means less competition, more visibility for early movers, and a retailer actively investing in making its digital shelf better.</p>

<p>Compare that to Amazon, where organic visibility is brutally competitive, or Walmart Marketplace, where the early-mover window has already started closing. Costco's digital shelf is where Amazon was ten years ago in terms of opportunity.</p>

<h2>What You Should Do About It</h2>

<ol>
<li><strong>Audit your multi-marketplace strategy now.</strong> If you're only on Amazon, you're putting all your eggs in one basket. Costco's digital push means there's a new viable channel worth evaluating. Look at whether your product catalog fits their model.</li>

<li><strong>Optimize your product content for multiple discovery systems.</strong> Each platform has different algorithms and different ways consumers find products. What works on Amazon doesn't automatically work on Costco.com. Your listings, images, and content need to be tailored.</li>

<li><strong>Tighten your supply chain operations.</strong> AI-powered inventory at the retailer level means they'll expect more from you. Stockouts, late shipments, and inconsistent supply will cost you more when the retailer's system is designed to surface the most reliable brands.</li>

<li><strong>Watch consumer behavior shifts.</strong> With inflation still running at 2.7% and half of Americans worried about meeting financial goals in 2026, value-oriented shopping is growing. Costco's digital expansion captures exactly this trend. If your brand plays in the value space, this is your moment.</li>
</ol>

<h2>What Does AI-Powered Inventory Mean for Brands Selling Through Retailers?</h2>

<p>This is the part of the story that most brand owners are overlooking. When retailers deploy AI for inventory management, the entire supplier relationship changes. Better demand forecasting means fewer stockouts on the retailer side, but it also means the retailer expects you to keep up.</p>

<p>Late shipments that used to be tolerated will hurt your placement. Inconsistent supply that used to be managed manually will now be flagged automatically. The brands that invest in their own operations to match the retailer's systems will get rewarded with better visibility. The ones that don't will quietly lose shelf space, both physical and digital.</p>

<h2>The Bigger Picture</h2>

<p>Costco's move is part of a broader pattern: <strong>every major retailer is now a technology company.</strong> Walmart proved the model. Amazon set the standard. Now Costco is following, and the rest of retail will too.</p>

<p>For brands doing $100K to $2M in revenue, this means the complexity of selling online is only going to increase. You're not just optimizing listings anymore. You're managing relationships with AI-powered systems across multiple platforms, each with its own rules for discovery, fulfillment, and content.</p>

<p>The brands that build systems for this complexity (multi-marketplace optimization, GEO-ready content, operational automation) will scale. The ones trying to manage it all manually will hit a ceiling.</p>

<p><strong>When the last holdout goes digital, it's not a trend anymore. It's the new baseline.</strong></p>

<p>If you're thinking about expanding your marketplace strategy or need help getting your brand ready for AI-powered retail, <a href="/free-strategy-session">let's talk about what that looks like for your business</a>.</p>`
}

// NOTE: After running Supabase migration to add new columns, update this post with:
// category: 'E-commerce Strategy'
// author: 'Robert Hu'
// keywords: ['Costco e-commerce', 'digital transformation retail', 'Walmart e-commerce', 'marketplace strategy', 'AI inventory systems']
// reading_time: 5
// related_services: ['ecommerce-strategy', 'digital-transformation']
// has_faq_schema: true
// faq_data with 3 Q&A pairs

async function insertPost() {
  // Check if post already exists
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

    if (error) {
      console.error('Error updating post:', error)
      process.exit(1)
    }
    console.log('Post updated successfully:', data[0].id)
  } else {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(post)
      .select()

    if (error) {
      console.error('Error inserting post:', error)
      process.exit(1)
    }
    console.log('Post inserted successfully:', data[0].id)
  }

  console.log('Slug:', post.slug)
  console.log('Title:', post.title)
}

insertPost()
