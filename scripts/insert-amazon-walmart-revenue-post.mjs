import { createClient } from '@supabase/supabase-js'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load env
const envPath = join(__dirname, '..', '.env.local')
const env = readFileSync(envPath, 'utf-8')
const vars = {}
env.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) vars[match[1].trim()] = match[2].trim()
})

const supabase = createClient(vars.NEXT_PUBLIC_SUPABASE_URL, vars.SUPABASE_SERVICE_ROLE_KEY)

// --- OG Image Generator ---
function generateOGImage(slug, title, category) {
  const escapedCategory = category
    .toUpperCase()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  const words = title.split(' ')
  const lines = []
  let current = ''
  for (const word of words) {
    const test = current ? `${current} ${word}` : word
    if (test.length > 32) {
      lines.push(current)
      current = word
    } else {
      current = test
    }
  }
  if (current) lines.push(current)
  const trimmed = lines.slice(0, 3)

  const totalHeight = trimmed.length * 50
  const startY = 315 - totalHeight / 2 + 22

  const titleLines = trimmed
    .map((line, i) => {
      const escaped = line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&quot;')
      return `    <text x="600" y="${startY + i * 50}" text-anchor="middle" font-family="'DM Sans', system-ui, sans-serif" font-size="36" font-weight="700" fill="#f7f9fb">${escaped}</text>`
    })
    .join('\n')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Background -->
  <rect width="1200" height="630" fill="#1a2a32"/>

  <!-- Subtle geometric accents -->
  <line x1="0" y1="580" x2="1200" y2="580" stroke="#2d7d9a" stroke-width="2" opacity="0.3"/>
  <line x1="80" y1="0" x2="80" y2="630" stroke="#2d7d9a" stroke-width="1" opacity="0.08"/>
  <line x1="1120" y1="0" x2="1120" y2="630" stroke="#2d7d9a" stroke-width="1" opacity="0.08"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="4" fill="#2d7d9a" opacity="0.6"/>

  <!-- Corner accent -->
  <rect x="60" y="50" width="40" height="3" fill="#2d7d9a" opacity="0.4"/>
  <rect x="60" y="50" width="3" height="30" fill="#2d7d9a" opacity="0.4"/>

  <!-- Category tag -->
  <text x="600" y="257" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="#2d7d9a" letter-spacing="3" text-transform="uppercase">${escapedCategory}</text>

  <!-- Title -->
${titleLines}

  <!-- HU mark -->
  <text x="1150" y="605" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="500" fill="#8a9aa2" opacity="0.5">HU</text>
</svg>`

  const outputPath = join(__dirname, '..', 'public', 'images', 'blog', `${slug}.svg`)
  writeFileSync(outputPath, svg, 'utf-8')
  console.log(`Generated OG image: /images/blog/${slug}.svg`)
  return `/images/blog/${slug}.svg`
}

// --- Post Data ---
const slug = 'amazon-revenue-walmart-sellers-2026'
const title = "Amazon Passed Walmart in Revenue. That's Not the Story."
const category = 'E-commerce Strategy'
const ogImage = generateOGImage(slug, title, category)

const content = `<p>Amazon just overtook Walmart in annual revenue for the first time. The headlines are calling it a historic shift. For sellers, the real story is more complicated, and more useful, than the headline suggests.</p>

<p>According to <a href="https://www.cnbc.com/2026/02/19/amazon-revenue-passes-walmart-earnings-reports.html" target="_blank" rel="noopener noreferrer">CNBC's earnings coverage</a>, Amazon's total revenue crossed Walmart's on the back of massive growth in AWS (cloud computing) and advertising. The marketplace itself, where your products actually live, is a different picture.</p>

<h2>What's Actually Driving Amazon's Revenue Growth?</h2>

<p>Amazon's revenue milestone is real, but it's not coming from happy sellers moving more units. AWS and advertising are doing the heavy lifting. Amazon's advertising business alone is now generating tens of billions annually, which means Amazon is increasingly making money <em>from</em> sellers, not <em>with</em> them.</p>

<p>When a platform's fastest-growing revenue lines are cloud infrastructure and pay-to-play ad placements, that tells you something important about where seller interests sit in the priority stack. The marketplace is the distribution channel. The money is elsewhere.</p>

<p>Meanwhile, Walmart just hired a dedicated e-commerce CEO and is moving aggressively to build out their marketplace infrastructure, seller tools, and fulfillment network. They're investing in the marketplace itself, not just extracting from it.</p>

<h2>Does Amazon Getting Bigger Mean Better for Sellers?</h2>

<p>Not automatically. Bigger can mean more buyers, but it also means more competition, higher ad costs, and more complexity. I've worked with brands doing $100K to $2M on Amazon, and the consistent theme over the past two years is that the same sales volume costs more to generate than it did before.</p>

<p>Ad costs on Amazon have risen sharply as more sellers compete for the same placements. Category pages that used to convert organically now require sponsored placement to stay visible. And Amazon's seller support infrastructure hasn't scaled with its ambitions, so when something goes wrong, it takes longer to fix.</p>

<p>Bigger customer base plus thinner margins for sellers is not a win. It's a squeeze.</p>

<h2>Why This Headline Actually Makes the Case for Diversification</h2>

<p>The Amazon vs. Walmart revenue comparison matters less than the trajectory each marketplace is on for sellers specifically.</p>

<p>Amazon is scaling AWS and ads. Walmart is scaling its marketplace. Those are different bets, and right now Walmart's bet is more aligned with seller growth. Walmart's marketplace has lower competition, lower ad costs, and a platform that's actively courting brands with incentives and support that Amazon stopped offering years ago.</p>

<p>I wrote about Walmart's new e-commerce CEO hire a few weeks ago and what it signals for brand strategy. <a href="/blog/walmart-new-ceo-ecommerce-brands">That post is worth reading alongside this one</a>, because the hiring decision makes more sense now that you can see the revenue context. Walmart is building for sellers. Amazon is building for Amazon.</p>

<p>This doesn't mean leaving Amazon. It means being strategic about where you grow.</p>

<h2>What Should You Actually Do About This?</h2>

<p>Here are four things worth doing in the next 90 days if you're primarily Amazon-dependent:</p>

<ol>
<li><strong>Audit your Amazon ad spend versus organic revenue ratio.</strong> If you're spending more than 20% of revenue on ads to maintain your position, you're funding Amazon's growth more than your own. That ratio has a ceiling.</li>
<li><strong>Get your listings on Walmart.com if they aren't already.</strong> The barrier to entry is lower than it's ever been, and Walmart is actively prioritizing catalog expansion. The early advantage goes to brands who move now, not after the category gets crowded.</li>
<li><strong>Compare your margins on Amazon versus Walmart.</strong> FBA fees, referral fees, and ad costs have all moved upward on Amazon. Run the real numbers, not the top-line revenue, and see where you're actually keeping money.</li>
<li><strong>Treat your DTC channel as insurance, not an afterthought.</strong> Dependence on any single marketplace is a structural risk. Amazon's revenue growth does not make that risk smaller.</li>
</ol>

<h2>The Bigger Picture</h2>

<p>When Amazon overtook Walmart in revenue, the business press read it as Amazon winning. Robert Hu's read: it's a signal that Amazon's incentives and seller interests are increasingly misaligned. The platform is monetizing its scale through services, not seller success.</p>

<p>Walmart's marketplace is where the growth opportunity is for sellers right now, precisely because it hasn't been squeezed yet. Low competition, active investment, and a platform that still has room to reward brands who show up with good content and solid operations.</p>

<p>The headline is about Amazon passing Walmart. The strategy is about not putting all your eggs in the platform that's already past its peak for sellers.</p>

<p>If you want help thinking through your marketplace mix and where to focus growth for 2026, <a href="/services/ecommerce-strategy">my e-commerce strategy work</a> is built around exactly this kind of platform analysis. Or <a href="/free-strategy-session">book a free 15-minute session</a> and let's talk through your specific situation.</p>`

const schemaJson = {
  has_faq_schema: true,
  faq_data: [
    {
      q: 'Does Amazon passing Walmart in revenue mean Amazon is better for sellers?',
      a: "Not necessarily. Amazon's revenue growth is driven by AWS and advertising, not marketplace seller success. Rising ad costs and more competition mean seller margins on Amazon have been compressing, even as Amazon's total revenue grows.",
    },
    {
      q: 'Should I move my brand from Amazon to Walmart?',
      a: "The smart move isn't either/or, it's diversification. Add Walmart as a growth channel while managing Amazon strategically. Walmart has lower competition, lower ad costs, and is actively investing in its marketplace infrastructure right now.",
    },
    {
      q: 'Why is Walmart a better opportunity for sellers in 2026?',
      a: "Walmart is in active marketplace-building mode: they just hired a dedicated e-commerce CEO and are investing in seller tools and fulfillment. Lower category competition and lower ad costs mean earlier movers get a real advantage before it gets crowded.",
    },
    {
      q: 'What is a healthy Amazon ad spend percentage?',
      a: 'A rough benchmark is keeping ad spend below 20% of Amazon revenue. If you are spending more than that to maintain your sales position, your growth is largely funding Amazon\'s advertising business rather than your own margins.',
    },
    {
      q: 'How does Amazon vs Walmart revenue affect my e-commerce strategy?',
      a: "Revenue size tells you about the platform's scale, not seller profitability. Focus instead on marketplace trajectory: Walmart is investing in sellers; Amazon is increasingly monetizing through services. Align your growth channel strategy with where seller incentives and platform investment are actually pointing.",
    },
  ],
  related_posts: ['walmart-new-ceo-ecommerce-brands', 'walmart-sparky-ai-ads'],
  related_services: ['ecommerce-strategy'],
  featured_image_alt:
    'Amazon vs Walmart revenue comparison 2026 and what it means for marketplace sellers',
}

async function insertPost() {
  const { data: existing } = await supabase
    .from('blog_posts')
    .select('id')
    .eq('slug', slug)
    .single()

  const postData = {
    slug,
    title,
    excerpt:
      "Amazon just passed Walmart in revenue, but the growth is coming from AWS and ads, not marketplace sellers. Here's what the real story means for your brand strategy.",
    content,
    meta_title: 'Amazon Passed Walmart in Revenue. What It Means for Sellers',
    meta_description:
      "Amazon's revenue passed Walmart's, driven by AWS and ads, not seller success. Rising ad costs and competition mean Walmart is the better growth bet for brands in 2026.",
    og_image: ogImage,
    category,
    tags: [
      'amazon revenue walmart',
      'amazon vs walmart sellers 2026',
      'amazon walmart marketplace comparison',
      'walmart marketplace sellers',
      'ecommerce diversification',
    ],
    status: 'published',
    featured: false,
    read_time_minutes: 5,
    schema_json: schemaJson,
    published_at: '2026-02-20T12:00:00.000Z',
  }

  if (existing) {
    console.log('Post already exists, updating...')
    const { data, error } = await supabase
      .from('blog_posts')
      .update(postData)
      .eq('slug', slug)
      .select('id, slug, title')
      .single()
    if (error) {
      console.error('Error updating post:', error)
    } else {
      console.log('Post updated successfully:', data.id)
      console.log('Slug:', data.slug)
      console.log('Title:', data.title)
    }
  } else {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(postData)
      .select('id, slug, title')
      .single()
    if (error) {
      console.error('Error inserting post:', error)
    } else {
      console.log('Post inserted successfully:', data.id)
      console.log('Slug:', data.slug)
      console.log('Title:', data.title)
    }
  }
}

insertPost()
