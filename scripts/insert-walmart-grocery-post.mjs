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
  'walmart-grocery-ecommerce-growth',
  'Walmart Grocery E-Commerce: 7 Quarters of 20%+ Growth',
  'E-commerce Strategy'
)
console.log('Generated OG image:', ogImagePath)

const post = {
  slug: 'walmart-grocery-ecommerce-growth',
  title: 'Walmart Grocery E-Commerce: 7 Consecutive Quarters Above 20% Growth',
  excerpt: 'Walmart posted its seventh straight quarter of 20%+ e-commerce growth in grocery by turning 4,600+ stores into fulfillment hubs. Here is how the store-based model is beating dedicated automation.',
  meta_title: 'Walmart Grocery E-Commerce: 7 Quarters of Growth',
  meta_description: 'Walmart hit 7 straight quarters of 20%+ e-commerce growth in grocery. Robert Hu breaks down how store-based fulfillment and pricing strategy drive the results.',
  og_image: ogImagePath,
  category: 'E-commerce Strategy',
  tags: ['Walmart e-commerce', 'grocery e-commerce', 'store fulfillment', 'Walmart+', 'retail strategy'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'How is Walmart achieving 20%+ e-commerce growth for seven straight quarters?',
        a: 'Walmart uses its 4,600+ stores as fulfillment hubs instead of building expensive standalone distribution centers. This store-based model delivers lower costs, faster delivery through proximity to customers, and inventory efficiency by serving both in-store and online orders from the same stock.'
      },
      {
        q: 'What is Walmart store-based fulfillment strategy?',
        a: 'Walmart fulfills e-commerce orders directly from its retail stores rather than dedicated warehouses. In Q3, store-based orders surged nearly 50%, with a third completed in three hours or less. This approach is cheaper than standalone fulfillment centers and faster because stores are already near customers.'
      },
      {
        q: 'How does Walmart+ contribute to their e-commerce success?',
        a: 'Walmart+ recorded double-digit growth in fee income during Q3. The membership program provides recurring revenue, increases shopping frequency, delivers better customer data, and creates a competitive moat since members are less likely to comparison shop at other retailers.'
      },
      {
        q: 'Why is Walmart more profitable in e-commerce than Kroger?',
        a: 'Walmart leverages physical assets it already owns, avoiding the massive capital requirements of dedicated automation facilities. While Kroger closed automated fulfillment centers due to profitability concerns, Walmart turns existing stores into low-cost fulfillment hubs that serve both channels.'
      },
      {
        q: 'How fast is Walmart grocery delivery?',
        a: 'Approximately 33% of Walmart e-commerce orders are now delivered in three hours or less. Expedited deliveries increased 70% during Q3, reaching 95% of U.S. households. This speed comes from using nearby stores as fulfillment points rather than distant warehouses.'
      }
    ],
    related_services: ['ecommerce-strategy', 'product-listing-optimization'],
    related_posts: ['amazon-whole-foods-project-cremini', 'costco-digital-ecommerce-strategy'],
    featured_image_alt: 'Walmart grocery e-commerce growth metrics showing store-based fulfillment and delivery performance'
  },
  published_at: '2025-11-20T12:00:00.000Z',
  updated_at: '2026-02-15T00:00:00.000Z',
  content: `<p class="text-sm text-brand-accent/80 italic">Updated February 2026</p>

<p>Walmart just posted its seventh consecutive quarter of e-commerce growth above 20% in grocery. The strategy behind it is straightforward: use 4,600+ stores as fulfillment hubs instead of building expensive standalone distribution centers. While competitors struggle with e-commerce profitability, Walmart is proving that physical stores are assets, not liabilities, in the digital age.</p>

<p>With comparable-store sales excluding fuel up 4.5% and store-based fulfillment orders surging nearly 50%, the results show what happens when a retailer with massive physical infrastructure commits fully to omnichannel execution.</p>

<h2>How Is Walmart Achieving 20%+ E-Commerce Growth in Grocery?</h2>

<p>Walmart achieves consistent grocery e-commerce growth by fulfilling online orders directly from its retail stores. This store-based model is cheaper than dedicated fulfillment centers, faster because stores are already near customers, and more efficient because a single inventory serves both channels.</p>

<p>In Q3, e-commerce orders fulfilled in stores surged nearly 50%, with roughly a third completed in three hours or less. This approach delivers multiple advantages:</p>

<ul>
<li><strong>Lower costs:</strong> No need for expensive standalone fulfillment centers</li>
<li><strong>Faster delivery:</strong> Proximity to customers enables 3-hour windows</li>
<li><strong>Inventory efficiency:</strong> Single stock serving both in-store and online channels</li>
<li><strong>Customer convenience:</strong> Same-day pickup and delivery options</li>
</ul>

<h2>The Speed Advantage: Express Delivery</h2>

<p>Walmart's expedited deliveries increased 70% during the quarter, now reaching 95% of U.S. households. This is not just a convenience feature. It is fundamentally changing customer expectations for grocery delivery.</p>

<table>
<thead><tr><th>Metric</th><th>Performance</th><th>Impact</th></tr></thead>
<tbody>
<tr><td>Store-Based Orders</td><td>+50% growth</td><td>Lower fulfillment costs</td></tr>
<tr><td>3-Hour Delivery</td><td>33% of orders</td><td>Premium convenience</td></tr>
<tr><td>Express Deliveries</td><td>+70% growth</td><td>95% US coverage</td></tr>
<tr><td>Walmart+ Members</td><td>Double-digit growth</td><td>Recurring revenue</td></tr>
</tbody>
</table>

<p>While Kroger has been closing automated fulfillment centers due to profitability concerns, Walmart's approach of using existing stores as fulfillment hubs delivers both growth and margins. The key difference is that Walmart leverages assets it already owns, avoiding the massive capital requirements of dedicated automation facilities.</p>

<h2>Affordability as a Competitive Moat</h2>

<p>Walmart President and CEO Doug McMillon revealed that approximately 7,400 temporary price reductions are currently in place, with about half focused on food items. The Thanksgiving meal deal exemplified this positioning: feeding 10 people for under $4 each.</p>

<p>This is not holiday marketing. It is a strategic statement that positions Walmart as the destination for value-conscious shoppers during the most critical shopping season. In an era where consumers are increasingly price-conscious, aggressive affordability creates a moat that competitors without Walmart's scale cannot replicate.</p>

<h2>Walmart+ Momentum: The Subscription Play</h2>

<p>Walmart+ recorded double-digit growth in fee income during Q3. The membership program provides recurring revenue, increases shopping frequency, delivers better customer data, and creates a competitive moat. Members shop more often and are less likely to comparison shop at other retailers.</p>

<p>While Walmart+ has a smaller member base than Amazon Prime, the growth trajectory suggests customers see clear value in the offering, especially as free delivery and fuel discounts become table stakes in retail competition.</p>

<h2>What Does Walmart's Growth Mean for E-Commerce Brands?</h2>

<p>Walmart's sustained 20%+ e-commerce growth for seven consecutive quarters sends a clear message to every brand and seller in the grocery space. Robert Hu sees five strategic lessons in these results:</p>

<ul>
<li><strong>Store-based fulfillment works:</strong> Physical assets can be digital advantages</li>
<li><strong>Speed matters:</strong> 3-hour delivery is becoming the expectation, not the exception</li>
<li><strong>Price is paramount:</strong> Affordability drives grocery shopping decisions at every level</li>
<li><strong>Scale wins:</strong> Walmart's size enables pricing and delivery advantages smaller players cannot match</li>
<li><strong>Omnichannel is required:</strong> Physical and digital strengthen each other when executed together</li>
</ul>

<p>For traditional grocers and third-party platforms, Walmart's performance raises difficult questions about long-term competitiveness. How do you compete with a retailer that can leverage 4,600+ U.S. locations as fulfillment centers while maintaining aggressive pricing?</p>

<h2>The Road Ahead</h2>

<p>Seven consecutive quarters of 20%+ growth is impressive, but the real question is sustainability. Several factors suggest Walmart can maintain this pace: significant room to grow online grocery market share, a store network that provides a natural infrastructure moat, continued technology investments in picking, packing, and delivery, and better customer data enabling personalization over time.</p>

<p>Walmart's grocery e-commerce strategy offers a blueprint for what happens when a retailer commits fully to connecting physical and digital, prioritizes customer convenience, and never loses sight of affordability.</p>

<p>If you are rethinking your marketplace strategy as these shifts accelerate, <a href="/services/ecommerce-strategy">an e-commerce strategy consultation</a> can help you position your brand. For more on how Amazon is responding with its own grocery integration, see the breakdown of <a href="/blog/amazon-whole-foods-project-cremini">Amazon's Project Cremini</a>.</p>`
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
