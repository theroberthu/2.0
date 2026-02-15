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
  'kroger-ecommerce-profitability',
  'Kroger $400M E-Commerce Pivot: Store-Based Fulfillment',
  'E-commerce Strategy'
)
console.log('Generated OG image:', ogImagePath)

const post = {
  slug: 'kroger-ecommerce-profitability',
  title: 'Kroger\'s $400M E-Commerce Pivot: Closing Automated Centers for Store-Based Fulfillment',
  excerpt: 'Kroger is closing three Ocado-powered fulfillment centers and taking a $2.6B write-down, pivoting to store-based fulfillment and third-party delivery to target $400M in profitability improvements by 2026.',
  meta_title: 'Kroger $400M E-Commerce Pivot Explained',
  meta_description: 'Kroger closes 3 automated fulfillment centers, takes $2.6B charge, and pivots to store-based fulfillment. Robert Hu breaks down the $400M profitability strategy.',
  og_image: ogImagePath,
  category: 'E-commerce Strategy',
  tags: ['Kroger e-commerce', 'grocery fulfillment', 'store-based fulfillment', 'Ocado partnership', 'retail strategy'],
  status: 'published',
  featured: false,
  read_time_minutes: 8,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'Why is Kroger closing three automated fulfillment centers?',
        a: 'The three Ocado-powered facilities lacked sufficient order density to justify their operational costs. Kroger concluded that massive centralized automation requires density that many markets do not have. The closures are part of a broader pivot toward store-based fulfillment targeting $400 million in profitability improvements by 2026.'
      },
      {
        q: 'What is Kroger\'s store-based fulfillment strategy?',
        a: 'Instead of dedicated mega-fulfillment centers, Kroger is investing in capital-light, store-based automation in high-volume markets. This uses existing store infrastructure to fulfill online orders, avoiding massive capital investment while enabling faster delivery through proximity to customers.'
      },
      {
        q: 'How much will this strategy improve Kroger\'s profitability?',
        a: 'Kroger targets approximately $400 million in profitability improvements by 2026. The company took a $2.6 billion impairment charge in Q3 2025 to close the three facilities, betting that the long-term savings from the pivot will far exceed the short-term write-down.'
      },
      {
        q: 'Is Kroger abandoning its partnership with Ocado?',
        a: 'No. Kroger is scaling back but not ending the Ocado partnership. Two additional centers in Charlotte and Phoenix are still planned for 2026. The closures signal that Kroger is being more selective about where dedicated automation makes sense versus where store-based fulfillment is more economical.'
      },
      {
        q: 'Which third-party delivery partners is Kroger working with?',
        a: 'Kroger has made Instacart its primary delivery fulfillment provider, expanded DoorDash delivery to approximately 2,700 stores, and is launching an Uber partnership in early 2026. Instacart is also piloting an AI shopping assistant within Kroger\'s mobile app.'
      }
    ],
    related_services: ['ecommerce-strategy'],
    related_posts: ['walmart-grocery-ecommerce-growth', 'amazon-whole-foods-project-cremini'],
    featured_image_alt: 'Kroger e-commerce fulfillment strategy pivoting from automated centers to store-based model'
  },
  published_at: '2025-11-19T12:00:00.000Z',
  updated_at: '2026-02-15T00:00:00.000Z',
  content: `<p class="text-sm text-brand-accent/80 italic">Updated February 2026</p>

<p>Kroger is closing three of its high-tech Ocado-powered automated fulfillment centers and taking a $2.6 billion impairment charge, pivoting toward a hybrid model of store-based fulfillment and third-party delivery partnerships. The move targets approximately $400 million in profitability improvements by 2026 and signals a fundamental rethinking of what infrastructure makes sense for profitable grocery e-commerce.</p>

<p>Despite reporting 16% e-commerce sales growth in Q2 2025 and five consecutive quarters of double-digit expansion, Kroger's e-commerce division remains unprofitable. The pivot is about changing that trajectory.</p>

<h2>Why Is Kroger Closing Automated Fulfillment Centers?</h2>

<p>Kroger is closing three Ocado-powered customer fulfillment centers because the facilities lacked sufficient order density to justify their operational costs. After a comprehensive review, Kroger concluded that massive centralized automation requires order volume that many markets simply do not have.</p>

<p>The three facilities slated for closure:</p>

<table>
<thead><tr><th>Location</th><th>Opened</th><th>Status</th></tr></thead>
<tbody>
<tr><td>Pleasant Prairie, Wisconsin</td><td>June 2022</td><td>Closing January 2025</td></tr>
<tr><td>Frederick, Maryland</td><td>June 2023</td><td>Closing January 2025</td></tr>
<tr><td>Groveland, Florida</td><td>June 2021</td><td>Closing January 2025</td></tr>
</tbody>
</table>

<p>The Ocado partnership launched in 2018 with high expectations. The companies envisioned a network of cutting-edge automated fulfillment centers that would revolutionize online grocery delivery. After opening several centers, Kroger paused new rollouts in 2023. While two additional centers in Charlotte and Phoenix are still planned for 2026, the closures represent a significant scaling back of the original vision.</p>

<h2>The Store-Based Alternative</h2>

<p>Rather than centralized mega-fulfillment centers, Kroger is betting on capital-light, store-based automation in high-volume markets. This approach leverages existing infrastructure: stores are already paying rent, employing staff, and receiving inventory. Adding fulfillment capabilities becomes an incremental cost rather than a massive capital investment.</p>

<p>The economics are compelling:</p>
<ul>
<li>Store-based fulfillment serves local demand with faster delivery times</li>
<li>Avoids the fixed costs of dedicated facilities</li>
<li>Customers in markets losing center coverage shift to pickup or delivery from nearby stores</li>
<li>Micro-fulfillment systems integrated into stores scale with demand rather than requiring massive upfront bets</li>
</ul>

<p>Robert Hu sees this as a validation of what <a href="/blog/walmart-grocery-ecommerce-growth">Walmart has been proving with its own store-based model</a>: physical assets can be digital advantages when the fulfillment strategy matches the market density.</p>

<h2>Embracing the Platform Economy</h2>

<p>Perhaps the most revealing aspect of Kroger's pivot is its deepening embrace of third-party delivery platforms. Rather than owning the entire customer experience end-to-end, Kroger is partnering with established players who have already solved last-mile delivery.</p>

<table>
<thead><tr><th>Partner</th><th>Role</th><th>Key Feature</th></tr></thead>
<tbody>
<tr><td>Instacart</td><td>Primary delivery provider</td><td>AI-powered shopping assistant</td></tr>
<tr><td>DoorDash</td><td>Delivery from ~2,700 stores</td><td>Expanded coverage</td></tr>
<tr><td>Uber</td><td>Growing partnership</td><td>Launch early 2026</td></tr>
</tbody>
</table>

<p>Instacart's AI shopping assistant, piloted within Kroger's mobile app, represents a bet that conversational commerce could increase basket sizes and frequency without Kroger building the AI infrastructure itself.</p>

<h2>What Does Kroger's Pivot Mean for Grocery E-Commerce?</h2>

<p>Kroger's strategic reset offers four lessons for the grocery e-commerce industry:</p>

<ul>
<li><strong>Automation is not one-size-fits-all:</strong> Massive centralized automation requires density that many markets lack. Store-based micro-fulfillment may be more scalable for most retailers.</li>
<li><strong>Own what differentiates, partner for the rest:</strong> Kroger is choosing to own product, stores, and customer relationships while outsourcing last-mile delivery and AI shopping to specialists.</li>
<li><strong>Profitability over growth:</strong> Taking a $2.6B charge to improve profitability by $400M annually signals a clear shift from growth-at-any-cost to disciplined economics.</li>
<li><strong>AI as the new competitive frontier:</strong> While pulling back on physical automation, Kroger is leaning into AI-powered shopping experiences via Instacart, suggesting software-driven personalization may deliver better ROI than robotic warehouses.</li>
</ul>

<h2>The Road Ahead</h2>

<p>The grocery industry is watching closely. If Kroger achieves its $400M profitability target by 2026, expect other retailers to follow this hybrid model. The playbook that is emerging: start with store-based fulfillment as the default, add dedicated automation only in proven high-density markets, partner with delivery platforms rather than building proprietary last-mile networks, and leverage AI to increase basket sizes through better personalization.</p>

<p>Kroger's $2.6B write-down is painful, but it may be the price of avoiding an even costlier strategic dead end. Sometimes the best path forward requires acknowledging what is not working and having the courage to change course.</p>

<p>If you are navigating fulfillment and marketplace strategy decisions like these, <a href="/services/ecommerce-strategy">an e-commerce strategy consultation</a> can help you evaluate which models fit your market. For more on how Amazon is approaching the same challenge differently, see the breakdown of <a href="/blog/amazon-whole-foods-project-cremini">Amazon's Project Cremini</a>.</p>`
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
