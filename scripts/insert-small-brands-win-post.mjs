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

const ogImagePath = '/images/blog/small-brands-win-ai-doesnt-care-about-ad-budget.svg'

const post = {
  slug: 'small-brands-win-ai-doesnt-care-about-ad-budget',
  title: "Small Brands Win: AI Doesn't Care About Your Ad Budget",
  excerpt: "AI shopping assistants bypass sponsored results entirely. They recommend products based on listing quality, not ad spend. 92% of sellers aren't ready. Here's what to do about it.",
  meta_title: "AI Doesn't Care About Your Ad Budget | Robert Hu",
  meta_description: "AI shopping assistants bypass sponsored results and recommend based on listing quality. 92% of sellers aren't ready. Here's the WHO/WHEN/WHERE framework that fixes it.",
  og_image: ogImagePath,
  category: 'GEO & SEO',
  tags: ['ai product discovery small brands', 'GEO', 'amazon rufus optimization', 'ai shopping assistants', 'product listing optimization'],
  status: 'published',
  featured: false,
  read_time_minutes: 4,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'What does AI actually look for on your product listing?',
        a: "AI shopping assistants need more than what your product is and why someone should buy it. They need to know WHO it's for (age, lifestyle, skin type), WHEN to use it (morning, post-workout, seasonal), and WHERE to use it (home, gym, outdoors). This structured context lets AI match your product to conversational queries that traditional keyword search never captured."
      },
      {
        q: "How do small brands compete with big brands in AI shopping?",
        a: "AI shopping assistants like Amazon Rufus and Walmart Sparky bypass sponsored results entirely. They recommend products based on listing quality and relevance, not ad spend. Small brands that optimize their listings with specific WHO, WHEN, and WHERE context compete on merit against brands with 10x their budget. Most sellers haven't made this shift yet, which creates a window of opportunity."
      }
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['amazon-advertising-strategy-2026', 'amazon-rufus-optimization'],
    featured_image_alt: "Small brands winning in AI-powered shopping because AI doesn't care about ad budgets",
    video_data: {
      name: "Small Brands Win: AI Doesn't Care About Your Ad Budget",
      description: "Robert Hu explains why AI shopping assistants are the biggest opportunity for small e-commerce brands. The WHO, WHEN, WHERE framework for Generative Engine Optimization.",
      thumbnailUrl: 'https://img.youtube.com/vi/PxPvF-JUkf0/maxresdefault.jpg',
      uploadDate: '2026-03-25',
      contentUrl: 'https://www.youtube.com/watch?v=PxPvF-JUkf0',
      embedUrl: 'https://www.youtube.com/embed/PxPvF-JUkf0'
    }
  },
  published_at: '2026-03-25T12:00:00.000Z',
  content: `<p>Big brands have been outspending you for years. More ads, more reviews, more shelf space. They own the first row of sponsored results on Amazon and Walmart, and they've made it very clear that the price of visibility keeps going up.</p>

<p>AI doesn't care about any of that.</p>

<div class="callout-box">
  <p class="callout-label">Key Takeaways</p>
  <ul>
    <li><strong>92% of sellers</strong> are missing the shift to AI-powered product discovery, where recommendations are based on listing quality, not ad spend.</li>
    <li><strong>3 to 5 products</strong> is what AI shopping assistants recommend per query, bypassing sponsored results entirely.</li>
    <li><strong>WHO, WHEN, WHERE</strong> is the framework that separates listings AI can recommend from listings it ignores.</li>
  </ul>
</div>

<p>When Rufus on Amazon or Sparky on Walmart recommends a product, it isn't looking at who paid for the top sponsored slot. It's looking at product pages. It's scanning millions of listings, pulling information so it can answer the questions that real customers are asking in natural language. "I'm in my 40s, what type of hair gel do I need?" That's the kind of query AI shopping assistants are fielding right now.</p>

<p>The customer typing that question isn't getting a page of 48 results sorted by ad spend. They're getting three to five products that AI has determined are the best match for that specific person, that specific need, that specific moment. The sponsored line that big brands are spending big money on? AI is bypassing it entirely.</p>

<p><strong>That's the opportunity. And 92% of sellers are missing it.</strong></p>

<h2>What Does AI Actually Look For on Your Listing?</h2>

<p>Traditionally, product listings answer two questions: what the product is and why someone should buy it. That's table stakes. Every competitor in your category does that.</p>

<p>But AI shopping assistants need more than what and why. They need to build a profile of your product that's detailed enough to match it against conversational, personalized queries. That means your listing needs to answer three additional questions that most sellers have never thought about:</p>

<p><strong>Who is this product for?</strong> Not "everyone." AI needs specificity. Age range, lifestyle, skill level, skin type, hair type, pet size, dietary restriction. The more precisely you define the buyer, the more confidently AI can recommend your product to the right person.</p>

<p><strong>When should they use it?</strong> Morning routine, post-workout, seasonal, weekly maintenance, before bed, during travel. Temporal context helps AI match your product to situational queries that traditional keyword search never captured.</p>

<p><strong>Where should they use it?</strong> At home, in the office, outdoors, in the shower, in the car, at the gym. Location context is another dimension that AI uses to narrow recommendations and increase relevance.</p>

<p>If your listing only tells AI what your product is, you're competing with everybody else in your category on the same generic terms. That's the traditional game, and the big brands win that game every time because they have the budget to outbid you.</p>

<p>But if your listing tells AI who it's for, when they should use it, and where they should use it, you're competing with almost nobody. Most sellers haven't made this shift yet. The window is open, but it's closing fast.</p>

<h2>How Do Small Brands Compete with Big Brands in AI Shopping?</h2>

<p>This is what <a href="/geo">Generative Engine Optimization</a> looks like in practice. It's not a mystery. It's not complicated. It's answering the questions that AI needs answered so it can do its job.</p>

<p>The WHO, WHEN, and WHERE framework works because it gives AI the structured context it needs to recommend your product in conversational shopping experiences. Without that context, AI has nothing to work with beyond the same generic product attributes that every other listing already provides.</p>

<p>Here's the practical move: go look at your listing right now. Check the bullet points, the product description, the A+ content, anywhere that text lives on your product page. Can an AI crawler find clear answers to who this product is for, when someone should use it, and where they should use it?</p>

<p>If not, you're leaving the door open for a competitor with a smaller budget and a better-optimized listing to get recommended over you. That's the new reality of AI-powered shopping, and it's already happening on Amazon and Walmart today.</p>

<p>The brands that win in AI-powered shopping aren't the ones with the biggest budget. They're the ones whose listings answer the questions that customers are actually asking.</p>

<div class="blog-video-embed">
  <h3>Watch the Full Breakdown</h3>
  <div class="video-wrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/PxPvF-JUkf0" title="Small Brands Win: AI Doesn't Care About Your Ad Budget" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

<p>If you want to see how your listings stack up for AI-powered discovery, <a href="/free-strategy-session">book a free strategy session</a> and we'll audit your top products together.</p>

<p>Related: <a href="/blog/amazon-advertising-strategy-2026">Amazon Organic Visibility Is Declining. Here's How to Fix Your Ad Strategy.</a></p>

<div class="blog-testimonial-block">
  <div class="blog-testimonial-divider"></div>
  <blockquote class="blog-testimonial-quote">
    "Robert's strategic mindset and deep understanding of e-commerce have been invaluable. He doesn't just identify problems. He builds the systems to solve them."
  </blockquote>
  <p class="blog-testimonial-attribution">Ken Zordani, VP of Sales</p>
  <a href="/free-strategy-session" class="blog-testimonial-cta">Book a free 15-minute strategy call &rarr;</a>
</div>`
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
