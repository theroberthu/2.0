import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { generateOgImage } from './generate-og-image.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Parse .env.local manually
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

// Generate OG image
const ogImagePath = generateOgImage(
  'amazon-whole-foods-project-cremini',
  "Amazon's Project Cremini: How Whole Foods Integration Reshapes Grocery E-commerce",
  'E-commerce Strategy'
)

console.log('Generated OG image:', ogImagePath)

const post = {
  slug: 'amazon-whole-foods-project-cremini',
  title: "Amazon's Project Cremini: How Whole Foods Integration Reshapes Grocery E-commerce",
  excerpt: "Amazon's Project Cremini integrates 100,000+ Whole Foods employees into its core operations, targeting $94M in profit gains by 2026. Here's what this means for e-commerce brands and grocery retail.",
  meta_title: 'Amazon Project Cremini: Whole Foods Integration',
  meta_description: 'Amazon is absorbing 100K+ Whole Foods employees into its core systems. Robert Hu breaks down what Project Cremini means for grocery e-commerce brands.',
  og_image: ogImagePath,
  category: 'E-commerce Strategy',
  tags: ['Amazon Whole Foods integration', 'Project Cremini', 'grocery e-commerce', 'marketplace strategy', 'Amazon grocery'],
  status: 'published',
  featured: false,
  read_time_minutes: 7,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: "What is Amazon's Project Cremini?",
        a: "Project Cremini is Amazon's initiative to fully integrate 100,000+ Whole Foods employees into Amazon's core business systems by 2026, including unified payroll, HR, vendor management, and fulfillment."
      },
      {
        q: 'How does Project Cremini affect e-commerce brands?',
        a: "It consolidates Amazon's grocery vendor management across online and physical stores. Brands optimized for digital discovery benefit, while those treating online as an afterthought risk losing placement as AI-powered inventory systems raise the bar."
      },
      {
        q: 'When will the Whole Foods integration be completed?',
        a: 'Amazon targets full integration by 2026, starting with its 16 largest food vendors, projecting at least $94 million in additional profit over three years.'
      },
      {
        q: 'What is Project Fusion?',
        a: 'Project Fusion is a companion initiative delivering grocery products across Fresh warehouses, Fresh stores, and Whole Foods locations, sharing inventory across channels for faster delivery.'
      },
      {
        q: 'How will customers notice changes from Project Cremini?',
        a: 'Customers may see improved delivery speed through cross-platform fulfillment and more Amazon-integrated features at Whole Foods stores, though the premium product selection is expected to remain.'
      }
    ],
    related_services: ['ecommerce-strategy', 'product-listing-optimization'],
    related_posts: ['costco-digital-ecommerce-strategy', 'kroger-ecommerce-profitability'],
    featured_image_alt: 'Amazon Project Cremini Whole Foods workforce integration and grocery e-commerce strategy'
  },
  published_at: '2025-11-15T12:00:00.000Z',
  updated_at: '2026-02-15T00:00:00.000Z',
  content: `<p class="text-sm text-brand-accent/80 italic">Updated February 2026</p>

<p>Eight years after Amazon's $13.7 billion acquisition of Whole Foods, the e-commerce giant is pulling the premium grocer fully into its orbit. Project Cremini is Amazon's most ambitious grocery integration effort yet, and it signals a fundamental shift in how the company approaches physical and digital retail.</p>

<h2>What Is Amazon's Project Cremini?</h2>

<p>Project Cremini is Amazon's internal initiative to fully integrate all 100,000+ Whole Foods employees into Amazon's core business systems by 2026. Since the 2017 acquisition, Whole Foods maintained a surprising degree of autonomy with separate systems, distinct cultures, and independent operations. That era is officially over.</p>

<p>According to internal documents reviewed by Business Insider, the integration includes:</p>

<ul>
<li><strong>Unified payroll systems:</strong> All Whole Foods employees will receive paychecks directly from Amazon</li>
<li><strong>Integrated HR tools:</strong> Performance reviews, workplace tools, and employee management through Amazon's systems</li>
<li><strong>Single operational structure:</strong> End of the dual-company approach that defined the relationship since 2017</li>
<li><strong>Cultural transformation:</strong> Whole Foods' distinct identity absorbed into Amazon's corporate ecosystem</li>
</ul>

<h2>Why Now? The "One Grocery" Vision</h2>

<p>The integration push comes from Whole Foods CEO and Amazon VP of Worldwide Grocery Jason Buechel, who was promoted to oversee Amazon's entire grocery business in early 2025. Buechel has championed what he calls a "One Grocery" mindset, unifying all of Amazon's grocery operations under a single strategic umbrella.</p>

<p>Amazon's grocery business now serves over 150 million customers with nearly 3 million grocery and everyday items. In the first half of 2025, Amazon's everyday essentials (including groceries) grew nearly twice as fast as all other categories in the US. With this kind of momentum, Amazon sees an opportunity to eliminate redundancies and accelerate growth.</p>

<h2>The $94 Million Efficiency Play</h2>

<p>Project Cremini is fundamentally about profit. Amazon is consolidating vendor-management teams across online and physical stores, a 3-year process starting with its 16 largest food vendors that is expected to generate at least $94 million in additional profit.</p>

<p>Previously, Amazon used different supply chain teams, infrastructure, and tools for vendor buying and forecasting functions. This created massive inefficiencies: duplicate work, conflicting priorities, and missed opportunities. The new unified approach aims to create a single, efficient grocery business. This move follows a broader pattern across major retailers. <a href="/blog/costco-digital-ecommerce-strategy">Costco's own digital transformation push</a> shows that even the most traditional players are now investing heavily in operational efficiency.</p>

<h2>Project Fusion: Cross-Platform Fulfillment</h2>

<p>Alongside Project Cremini, Amazon launched Project Fusion in August 2025. This internal initiative delivers grocery products from Fresh warehouses, Fresh stores, and Whole Foods locations. This cross-platform fulfillment strategy represents Amazon's vision for the future: inventory shared across channels, faster delivery, and better customer experience.</p>

<p>The economics are compelling. Rather than maintaining separate inventory pools for each brand, Amazon can route orders to whichever location gets the product to the customer fastest. This reduces waste, improves delivery times, and creates a more resilient supply chain.</p>

<h2>What This Means for Employees</h2>

<p>For Whole Foods' 100,000+ employees, this integration represents a major transition:</p>

<ul>
<li><strong>New performance systems:</strong> Adapting to Amazon's notoriously data-driven performance metrics</li>
<li><strong>Different workplace culture:</strong> Moving from Whole Foods' premium retail ethos to Amazon's efficiency-first approach</li>
<li><strong>Career path changes:</strong> New opportunities within Amazon's broader ecosystem, but also different expectations</li>
<li><strong>Benefits alignment:</strong> Transition to Amazon's employee benefits structure</li>
</ul>

<p>While Amazon emphasizes making it easier to collaborate and innovate, employees may experience culture shock as Whole Foods' distinct identity fades into Amazon's corporate machine.</p>

<h2>The Broader Retail Strategy</h2>

<p>Project Cremini reveals Amazon's grocery strategy: scale through integration. Rather than running Whole Foods as an independent premium brand, Amazon is treating it as a piece of a larger grocery puzzle alongside Amazon Fresh stores, online grocery, and everyday essentials.</p>

<p>Robert Hu has tracked this pattern across major retailers for over 20 years: when a platform bets on operational integration over brand independence, the brands that adapt fastest to the new systems win. Those that don't lose visibility, regardless of product quality.</p>

<p>This approach contrasts with competitors who maintain distinct brand identities. Walmart keeps Sam's Club separate. Target preserves its brand consistency. But Amazon is betting that operational efficiency trumps brand preservation.</p>

<h2>Challenges and Risks</h2>

<p>The integration is not without risks:</p>

<ul>
<li><strong>Brand dilution:</strong> Whole Foods built its reputation on premium quality and unique culture. Will that survive Amazon's efficiency focus?</li>
<li><strong>Employee retention:</strong> Cultural transitions often lead to turnover, especially among long-time employees who value the company's original mission</li>
<li><strong>Customer perception:</strong> Whole Foods customers chose the brand for its distinctiveness. Will they embrace a more Amazon-integrated experience?</li>
<li><strong>Operational complexity:</strong> Integrating 100,000+ employees across different systems is extraordinarily complex</li>
</ul>

<h2>How Does Project Cremini Affect E-commerce Brands?</h2>

<p>For brands selling through Amazon's grocery ecosystem, Project Cremini changes the playing field. The consolidation of vendor management means your relationship with Amazon is no longer split across separate teams. Here are the key lessons for e-commerce operators.</p>

<h3>Timing Matters for Integration</h3>

<p>Amazon waited 8 years to fully integrate Whole Foods. They collected data, learned the business, and identified inefficiencies before making the move. The takeaway: don't rush post-acquisition integration. Understand what you're integrating first.</p>

<h3>Efficiency vs. Brand Identity</h3>

<p>Amazon chose operational efficiency over brand preservation. This works for their scale, but smaller businesses might need to preserve brand distinctiveness to compete. Know which matters more for your market position.</p>

<h3>Data-Driven Integration</h3>

<p>The $94 million profit projection didn't come from guesswork. It came from analyzing duplicate systems and quantifying waste. Use data to justify integration efforts, especially when managing stakeholder expectations.</p>

<h3>Cross-Platform Thinking</h3>

<p>Project Fusion's cross-platform fulfillment mirrors omnichannel retail strategies. Whether you're selling on Amazon, Shopify, or physical retail, unified inventory and fulfillment systems create competitive advantage.</p>

<h2>The Future of Grocery Retail</h2>

<p>Project Cremini signals where grocery retail is heading: scale through technology and operational efficiency. Traditional grocers who can't match Amazon's systems and integration will struggle to compete on price and convenience.</p>

<p>We're watching the industrialization of grocery retail in real time. Just as Amazon transformed e-commerce through logistics excellence, they're now applying the same playbook to physical grocery: unified systems, data-driven decisions, and relentless efficiency.</p>

<p>Amazon's Project Cremini represents more than workforce integration. It's a statement about the future of retail, one where distinct brands and independent operations give way to unified platforms and operational efficiency. For the industry, it's a signal that the grocery wars are entering a new phase where backend efficiency matters as much as front-end experience.</p>

<p>If your brand sells through Amazon's grocery ecosystem and you need help navigating these changes, <a href="/services/ecommerce-strategy">explore how a focused e-commerce strategy</a> can position you for what comes next.</p>`
}

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
