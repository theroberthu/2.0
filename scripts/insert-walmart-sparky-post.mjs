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
  'walmart-sparky-ai-ads',
  'Walmart Sparky AI Gets Ads: Sponsored Prompts Explained',
  'E-commerce Strategy'
)
console.log('Generated OG image:', ogImagePath)

const post = {
  slug: 'walmart-sparky-ai-ads',
  title: 'Walmart Sparky AI Gets Ads: What Sponsored Prompts Mean for Sellers',
  excerpt: 'Walmart is testing Sponsored Prompts inside Sparky, its AI shopping assistant. Brands can pay to surface products in AI conversations. Here is what this means for e-commerce advertising.',
  meta_title: 'Walmart Sparky AI: Sponsored Prompts Explained',
  meta_description: 'Walmart tests Sponsored Prompts in its Sparky AI assistant. Robert Hu explains what AI shopping ads mean for brands, sellers, and the future of e-commerce.',
  og_image: ogImagePath,
  category: 'E-commerce Strategy',
  tags: ['Walmart Sparky', 'AI shopping', 'sponsored prompts', 'retail media', 'e-commerce advertising'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'What is Walmart Sparky AI?',
        a: 'Sparky is Walmart\'s AI shopping assistant, launched in June 2025 and embedded in the Walmart mobile app. Instead of typing keywords and scrolling results, shoppers have natural conversations about what they need. Sparky considers location, dietary preferences, budget, and past purchases to recommend products.'
      },
      {
        q: 'What are Sponsored Prompts in Walmart Sparky?',
        a: 'Sponsored Prompts are a new ad format Walmart is testing inside Sparky. Brands can pay to have their products mentioned when relevant topics arise in AI shopping conversations. This represents a new frontier where conversational commerce meets advertising.'
      },
      {
        q: 'How will AI shopping ads affect the user experience?',
        a: 'The key tension is between helpfulness and monetization. If Sponsored Prompts feel like helpful suggestions, they add value. If they feel like intrusive sales pitches, users will lose trust. Transparent disclosure of sponsored content is critical for success.'
      },
      {
        q: 'How can sellers prepare for AI shopping assistants like Sparky?',
        a: 'Sellers should ensure product data is AI-friendly with detailed descriptions, attributes, and reviews. They should explore Sponsored Prompts as they become available and consider how AI assistants will describe their products. Traditional SEO and PPC strategies will not translate directly to conversational AI.'
      },
      {
        q: 'Which other retailers have AI shopping assistants?',
        a: 'Amazon has Rufus, its AI shopping assistant for natural language product discovery. Google Shopping integrates AI-powered recommendations into search results. Shopify is partnering with AI providers for conversational commerce. Startups like Perplexity are building AI shopping experiences from scratch.'
      }
    ],
    related_services: ['ecommerce-strategy', 'product-listing-optimization'],
    related_posts: ['walmart-grocery-ecommerce-growth', 'tiktok-shop-revolution-2025'],
    featured_image_alt: 'Walmart Sparky AI shopping assistant with Sponsored Prompts ad format for brands and sellers'
  },
  published_at: '2025-11-26T12:00:00.000Z',
  updated_at: '2026-02-15T00:00:00.000Z',
  content: `<p class="text-sm text-brand-accent/80 italic">Updated February 2026</p>

<p>Walmart is testing advertisements inside Sparky, its AI-powered shopping assistant. The new format, called Sponsored Prompts, lets brands pay to have their products mentioned when relevant topics arise in AI shopping conversations. This is the first major move by a top retailer to monetize conversational AI, and it sets the precedent for how AI shopping assistants will generate revenue across the industry.</p>

<p>Walmart Connect, the company's advertising business, generated over $3.4 billion in ad revenue in 2024 with 30%+ year-over-year growth. As shopping shifts from keyword search to AI-driven conversation, Sponsored Prompts represent Walmart's strategy for keeping that ad revenue growing.</p>

<h2>What Is Walmart Sparky and How Does It Work?</h2>

<p>Sparky is Walmart's AI shopping assistant, launched in June 2025 and embedded directly in the Walmart mobile app. Instead of typing keywords and scrolling through hundreds of results, shoppers have natural conversations about what they need. You can ask Sparky something like "I need a birthday cake for a 5-year-old's party with 20 kids" and it considers your location, dietary preferences, budget, and past purchases to recommend specific products.</p>

<p>The assistant works through natural language, understands context across a conversation, personalizes recommendations based on your history, and supports multi-turn dialogue so you can refine your search through back-and-forth conversation.</p>

<h2>What Are Sponsored Prompts and Why Do They Matter?</h2>

<p>Sponsored Prompts are a new ad format Walmart is testing inside Sparky's conversational interface. While the full details have not been made public, the concept introduces advertising into AI-driven shopping conversations. This is fundamentally different from traditional e-commerce advertising, where sponsored listings appear at the top of search results with clear labels.</p>

<p>In a conversational interface, the challenge is integrating paid placements without disrupting the natural flow of dialogue. Robert Hu has spent over 20 years in e-commerce and sees this as one of the most significant shifts in retail advertising since the rise of Amazon Sponsored Products.</p>

<p>Several potential formats are being explored:</p>

<table>
<thead><tr><th>Ad Format</th><th>How It Works</th><th>Potential Issues</th></tr></thead>
<tbody>
<tr><td>Sponsored Suggestions</td><td>Sparky prioritizes advertiser products in initial recommendations</td><td>Could feel manipulative if not clearly labeled</td></tr>
<tr><td>Branded Follow-ups</td><td>After organic results, Sparky mentions a sponsored brand</td><td>Interrupts natural conversation flow</td></tr>
<tr><td>Category Sponsorships</td><td>Brands sponsor entire product categories</td><td>Less transparent, harder for users to spot</td></tr>
<tr><td>Prompt Suggestions</td><td>Brands bid on suggested prompts before you type</td><td>Influences what questions users ask</td></tr>
</tbody>
</table>

<h2>The Consumer Perspective: Help or Hype?</h2>

<p>The success of Sponsored Prompts depends entirely on whether they feel helpful or intrusive. Shoppers want genuine recommendations, clear disclosure when content is sponsored, value-first experiences where ads enhance rather than detract, and the ability to filter out sponsored content if they choose.</p>

<p>The most successful AI shopping ads will be those that feel like helpful suggestions rather than pushy sales pitches. If Sparky starts feeling like a salesperson rather than an assistant, users will lose trust quickly. In traditional search, sponsored listings work because they are relevant and clearly marked. The challenge with conversational AI is maintaining that clarity while preserving natural dialogue.</p>

<h2>The Broader AI Commerce Landscape</h2>

<p>Walmart is not alone in exploring AI-powered shopping. Amazon has Rufus for natural language product discovery. Google Shopping integrates AI-powered recommendations into search results. Shopify is partnering with AI providers for conversational commerce. Startups like Perplexity are building AI shopping experiences from scratch.</p>

<p>As these platforms compete for shopper attention, advertising will play a role. The question is not whether AI shopping will be monetized through ads, but how it will be done in a way that respects user trust and delivers genuine value.</p>

<h2>How Should Brands Prepare for AI Shopping Ads?</h2>

<p>For brands selling on Walmart and other major platforms, AI shopping assistants represent both opportunity and challenge. The traditional SEO and PPC playbook will not translate directly to conversational AI. Brands need to think about "AI optimization" as a new discipline.</p>

<p>Key actions for sellers:</p>
<ul>
<li><strong>Optimize product data for AI:</strong> Detailed descriptions, complete attributes, and strong reviews make products more discoverable in AI conversations</li>
<li><strong>Explore paid placement:</strong> Test Sponsored Prompts and similar formats as they become available</li>
<li><strong>Consider brand voice:</strong> Think about how your products will be described when an AI assistant recommends them</li>
<li><strong>Track new metrics:</strong> New KPIs will emerge for measuring AI-driven sales that differ from traditional click-through rates</li>
</ul>

<h2>Regulatory Considerations</h2>

<p>As AI shopping ads evolve, regulatory scrutiny is inevitable. The FTC has already issued warnings about AI shopping assistants, emphasizing that companies must clearly distinguish between organic recommendations and paid placements. Applying traditional advertising disclosure rules to conversational interfaces presents new challenges, and updated guidance is likely as these technologies mature.</p>

<h2>Looking Ahead</h2>

<p>Walmart's Sponsored Prompts experiment is a pivotal moment in e-commerce evolution. The advertising models that fund AI shopping experiences will shape how we all shop online. The retailers that balance monetization with user experience will win. Push too hard on advertising and shoppers abandon your assistant. Hold back too much and you cannot justify the investment.</p>

<p>The future of shopping is conversational, personalized, and AI-powered. Now we are about to find out how advertising fits into that picture.</p>

<p>If you are navigating how AI and retail media changes affect your brand, <a href="/services/ecommerce-strategy">an e-commerce strategy consultation</a> can help you prepare. For more on how Walmart is executing across digital, see the breakdown of <a href="/blog/walmart-grocery-ecommerce-growth">Walmart's grocery e-commerce growth streak</a>.</p>`
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
