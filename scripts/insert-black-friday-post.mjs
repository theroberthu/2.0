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
  'black-friday-2025-online-sales',
  'Black Friday 2025: Online Sales Hit Record $8.6 Billion',
  'E-commerce Strategy'
)
console.log('Generated OG image:', ogImagePath)

const post = {
  slug: 'black-friday-2025-online-sales',
  title: 'Black Friday 2025: Online Sales Hit Record $8.6 Billion',
  excerpt: 'U.S. shoppers spent $8.6 billion online by 6:30 PM on Black Friday 2025, up 9.4% year-over-year. Full day projections reached $11.9 billion, cementing the shift from in-store crowds to digital-first shopping.',
  meta_title: 'Black Friday 2025: $8.6B Record Online Sales',
  meta_description: 'Black Friday 2025 online sales hit $8.6B by 6:30 PM, up 9.4% YoY. Robert Hu breaks down what record digital spending means for e-commerce brands and sellers.',
  og_image: ogImagePath,
  category: 'E-commerce Strategy',
  tags: ['Black Friday 2025', 'online sales record', 'e-commerce trends', 'holiday shopping', 'Cyber Monday'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'How much did Black Friday 2025 online sales reach?',
        a: 'Black Friday 2025 U.S. online sales reached $8.6 billion by 6:30 PM ET, a 9.4% increase from the previous year according to Adobe Analytics. Full-day projections estimated between $11.7 billion and $11.9 billion, setting a new Black Friday record for online spending.'
      },
      {
        q: 'Why did consumers choose online over in-store shopping on Black Friday 2025?',
        a: 'Three factors drove the shift: persistent inflation making consumers more cautious and likely to comparison shop online, trade policy uncertainty encouraging deliberate purchasing decisions, and a soft labor market causing shoppers to be more strategic with holiday budgets. Online shopping enabled more informed decisions without battling crowds.'
      },
      {
        q: 'How much were Cyber Monday 2025 online sales projected to reach?',
        a: 'Adobe Analytics projected Cyber Monday 2025 would reach $14.2 billion in online sales, representing 6.3% growth year-over-year. Cyber Monday remained the biggest online shopping day of the holiday season.'
      },
      {
        q: 'What should e-commerce sellers learn from Black Friday 2025?',
        a: 'Key takeaways: mobile optimization is critical as more consumers shop on smartphones, economic uncertainty creates opportunity for value-focused messaging, the full weekend matters (not just Friday), real-time analytics enable on-the-fly pricing adjustments, and online-first infrastructure is now a long-term investment, not a seasonal play.'
      },
      {
        q: 'Is in-store Black Friday shopping declining?',
        a: 'In-store traffic was subdued on Black Friday 2025, but physical retail is not dead. The shift is toward digital-first shopping as the default, with in-store serving complementary roles like BOPIS (buy online, pick up in store) and same-day delivery. The trend is maturation, not replacement.'
      }
    ],
    related_services: ['ecommerce-strategy', 'product-listing-optimization'],
    related_posts: ['tiktok-shop-revolution-2025', 'walmart-grocery-ecommerce-growth'],
    featured_image_alt: 'Black Friday 2025 record online sales reaching $8.6 billion in e-commerce spending'
  },
  published_at: '2025-11-29T12:00:00.000Z',
  updated_at: '2026-02-15T00:00:00.000Z',
  content: `<p class="text-sm text-brand-accent/80 italic">Updated February 2026</p>

<p>Black Friday 2025 online sales reached $8.6 billion by 6:30 PM ET, a 9.4% increase from the previous year according to Adobe Analytics. The full-day total was projected between $11.7 billion and $11.9 billion, setting a new record for Black Friday online spending. The data, collected from over one trillion visits to U.S. retail sites, confirms that digital-first shopping is now the default for holiday purchasing.</p>

<p>Cyber Monday was projected to hit $14.2 billion (up 6.3% year-over-year), remaining the biggest online shopping day of the season. For e-commerce brands and sellers, these numbers tell a clear story: digital infrastructure investment is no longer optional.</p>

<h2>Why Did Consumers Choose Online Over In-Store on Black Friday 2025?</h2>

<p>The subdued in-store shopping activity was not due to lack of consumer interest but rather a combination of economic headwinds and changing preferences. Three key factors drove shoppers online:</p>

<ul>
<li><strong>Persistent inflation:</strong> Consumers are more cautious about spending, preferring to comparison shop online rather than make impulse purchases in stores</li>
<li><strong>Trade policy uncertainty:</strong> Concerns about tariffs and economic policy are making shoppers think twice before major purchases</li>
<li><strong>Soft labor market:</strong> Job market uncertainty is encouraging consumers to be more strategic with their holiday budgets</li>
</ul>

<p>Despite these headwinds, the shift to online shopping enabled more informed purchasing decisions. Shoppers compared prices across multiple retailers, read reviews, and took advantage of targeted promotions without battling crowds.</p>

<h2>The Holiday Weekend Forecast</h2>

<p>Adobe Analytics projected strong momentum across the entire weekend:</p>

<ul>
<li><strong>Saturday:</strong> $5.5 billion (3.8% growth vs. 2024)</li>
<li><strong>Sunday:</strong> $5.9 billion (5.4% growth vs. 2024)</li>
<li><strong>Cyber Monday:</strong> $14.2 billion (6.3% growth vs. 2024)</li>
</ul>

<p>Cyber Monday continued its reign as the season's biggest online shopping day. The $14.2 billion projection represented sustained consumer confidence in online retail platforms despite economic uncertainty.</p>

<h2>What Does This Mean for E-Commerce Brands?</h2>

<p>Robert Hu has worked in e-commerce for over 20 years and sees Black Friday 2025 as confirmation of a permanent shift, not a temporary trend. The brands that won Black Friday 2025 invested in four areas:</p>

<ul>
<li><strong>Mobile-optimized experiences:</strong> With more consumers shopping on smartphones, mobile responsiveness is not optional</li>
<li><strong>Flexible fulfillment:</strong> Buy online pick up in-store (BOPIS) and same-day delivery are table stakes</li>
<li><strong>Personalized promotions:</strong> Generic discounts underperform; consumers expect targeted deals based on their shopping history</li>
<li><strong>Seamless payment:</strong> Digital wallets, buy-now-pay-later, and one-click checkout reduce friction at the most critical moment</li>
</ul>

<h2>The Bigger Picture: Maturation, Not Explosion</h2>

<p>While 9.4% growth is impressive, it is worth noting that Adobe had initially forecasted 8.3% growth and warned that holiday online sales would grow at a slower pace this year. The fact that actual performance exceeded projections demonstrates the resilience of online shopping despite economic headwinds.</p>

<p>This is not a story about explosive growth anymore. It is about the maturation and normalization of online shopping as the default channel for holiday purchases. The pandemic accelerated a trend that was already happening, and now we are seeing sustained, steady growth as consumers fully embrace digital-first shopping.</p>

<h2>Key Takeaways for E-Commerce Leaders</h2>

<ul>
<li><strong>Mobile matters more than ever:</strong> Ensure your site loads quickly and converts seamlessly on smartphones</li>
<li><strong>Economic uncertainty creates opportunity:</strong> Consumers shopping cautiously are also shopping more deliberately. Make it easy for them to find value.</li>
<li><strong>The weekend is not over after Friday:</strong> Saturday, Sunday, and especially Cyber Monday represent massive opportunities. Do not stop optimizing after Friday.</li>
<li><strong>Data drives decisions:</strong> Retailers tracking real-time analytics can adjust pricing, inventory, and promotions on the fly to capture more sales</li>
<li><strong>Online is the new normal:</strong> This is not a temporary shift. Invest in e-commerce infrastructure for the long term.</li>
</ul>

<p>Black Friday 2025's record-breaking online sales are not just about one day. They represent a fundamental transformation in retail that will shape strategy for years to come.</p>

<p>If you are preparing your e-commerce strategy for the next holiday season, <a href="/services/ecommerce-strategy">an e-commerce strategy consultation</a> can help you build the infrastructure to capture this growth. For more on how platforms are competing for shopper attention, see the <a href="/blog/tiktok-shop-revolution-2025">TikTok Shop revolution</a> reshaping social commerce.</p>`
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
