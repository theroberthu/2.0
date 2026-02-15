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

// Use service role key to bypass RLS
const supabase = createClient(
  envVars.NEXT_PUBLIC_SUPABASE_URL,
  envVars.SUPABASE_SERVICE_ROLE_KEY
)

// Step 1: Check current columns
console.log('--- Step 1: Checking current table structure ---')
const { data: checkData, error: checkErr } = await supabase.from('blog_posts').select('*').limit(0)
if (checkErr) {
  console.log('Table check error:', checkErr)
}

// Step 2: Run migration via SQL
console.log('\n--- Step 2: Running migration ---')
const migrationSQL = readFileSync(join(__dirname, 'sql', 'add-blog-columns.sql'), 'utf-8')

// Split into individual statements and run them
const statements = migrationSQL
  .split(';')
  .map(s => s.trim())
  .filter(s => s.length > 0 && !s.startsWith('--'))

for (const stmt of statements) {
  const { error } = await supabase.rpc('exec_sql', { sql: stmt + ';' }).maybeSingle()
  if (error) {
    // rpc might not exist, try raw SQL approach
    // We'll just try the insert and see if columns exist
    console.log('Note: Direct SQL execution not available via client. Migration may need to be run in Supabase dashboard.')
    break
  }
}

// Step 3: Try inserting with all columns first, fall back to basic columns
console.log('\n--- Step 3: Inserting blog post ---')

const fullPost = {
  slug: 'costco-digital-ecommerce-strategy',
  title: 'Costco Is Finally Going Digital. Here\'s What It Means for E-commerce Brands.',
  excerpt: 'Costco just reported a 20.5% surge in digitally enabled sales and is rolling out AI-powered inventory systems. When the last holdout goes digital, it changes the game for every brand in its ecosystem.',
  meta_title: 'Costco Goes Digital: What It Means for E-commerce Brands',
  meta_description: 'Costco reported 20.5% growth in digital sales and is investing in AI inventory systems. Robert Hu breaks down what this means for e-commerce brands doing $100K to $2M.',
  featured_image: null,
  published: true,
  published_at: new Date().toISOString(),
  category: 'E-commerce Strategy',
  author: 'Robert Hu',
  keywords: ['Costco e-commerce', 'digital transformation retail', 'Walmart e-commerce', 'marketplace strategy', 'AI inventory systems'],
  reading_time: 5,
  featured_image_alt: 'Costco digital e-commerce strategy analysis',
  related_posts: [],
  related_services: ['ecommerce-strategy', 'digital-transformation'],
  has_faq_schema: true,
  faq_data: [
    { q: 'How does Costco\'s digital push affect Amazon and Walmart sellers?', a: 'When Costco invests heavily in digital infrastructure, it creates more competition for the same consumer dollars online. Brands selling across multiple marketplaces need to optimize their listings and content for each platform\'s unique discovery system, including Costco\'s growing digital shelf.' },
    { q: 'Should e-commerce brands start selling on Costco.com?', a: 'If your products fit Costco\'s value-oriented model and you can handle the margin structure, now is a strategic window. Costco\'s digital platform is still maturing, which means less competition and more visibility for early movers compared to saturated marketplaces like Amazon.' },
    { q: 'What does AI-powered inventory mean for brands selling through retailers?', a: 'Retailers using AI for inventory management will have better demand forecasting and fewer stockouts. For brands, this means your supply chain needs to be tighter and more responsive. Late shipments or inconsistent supply will hurt you more when the retailer\'s system expects precision.' }
  ],
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

// Basic post (only existing columns)
const basicPost = {
  slug: fullPost.slug,
  title: fullPost.title,
  excerpt: fullPost.excerpt,
  meta_title: fullPost.meta_title,
  meta_description: fullPost.meta_description,
  published: fullPost.published,
  published_at: fullPost.published_at,
  content: fullPost.content,
}

async function tryInsert(postData, label) {
  // Check if already exists
  const { data: existing } = await supabase
    .from('blog_posts')
    .select('id')
    .eq('slug', postData.slug)
    .maybeSingle()

  if (existing) {
    console.log(`Post already exists (id: ${existing.id}), updating with ${label} fields...`)
    const { data, error } = await supabase
      .from('blog_posts')
      .update(postData)
      .eq('slug', postData.slug)
      .select('id, slug, title')
    if (error) return { success: false, error }
    return { success: true, data }
  } else {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(postData)
      .select('id, slug, title')
    if (error) return { success: false, error }
    return { success: true, data }
  }
}

// Try full post first
let result = await tryInsert(fullPost, 'full')
if (!result.success) {
  console.log('Full insert failed:', result.error.message)
  console.log('Trying with basic columns only...')
  result = await tryInsert(basicPost, 'basic')
  if (!result.success) {
    console.error('Basic insert also failed:', result.error)
    process.exit(1)
  }
  console.log('\nInserted with basic columns. Run add-blog-columns.sql in Supabase dashboard to add extended fields.')
}

console.log('\nPost inserted/updated successfully!')
console.log('ID:', result.data[0].id)
console.log('Slug:', result.data[0].slug)
console.log('Title:', result.data[0].title)
console.log('\nView at: https://theroberthu.com/blog/' + result.data[0].slug)
