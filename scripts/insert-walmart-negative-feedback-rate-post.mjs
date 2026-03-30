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

const ogImagePath = '/images/blog/walmart-negative-feedback-rate.svg'

const post = {
  slug: 'walmart-negative-feedback-rate',
  title: "Walmart's New Negative Feedback Rate Metric Is Live. Here's Why It Rewards the Same Brands That Win with AI.",
  excerpt: "Walmart rolled out a new seller health metric: Negative Feedback Rate. Stay under 2% or risk suspension. But this isn't just compliance. It's the same data quality that makes AI recommend you accurately.",
  meta_title: 'Walmart Negative Feedback Rate: Seller Guide 2026',
  meta_description: "Walmart's Negative Feedback Rate metric is live. Stay under 2% of 1-2 star ratings in 60 days or face suspension. Why this connects directly to AI readiness and GEO.",
  og_image: ogImagePath,
  category: 'E-commerce Strategy',
  tags: ['walmart negative feedback rate', 'walmart seller metrics 2026', 'walmart seller health', 'walmart marketplace compliance'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: "What is Walmart's Negative Feedback Rate and how is it calculated?",
        a: "Negative Feedback Rate is a seller health metric that measures the percentage of your orders that receive 1 or 2-star ratings over a rolling 60-day window. You need to stay under 2% to remain in good standing. Walmart calculates it as total 1-2 star ratings divided by total orders in the period."
      },
      {
        q: 'What happens if my Walmart Negative Feedback Rate exceeds 2%?',
        a: "Walmart enforces a three-tier system. First, your listings get suppressed in search results, reducing visibility. Second, your selling privileges are suspended, cutting off sales entirely. Third, your account is terminated, and Walmart terminations are permanent with no reinstatement path."
      },
      {
        q: 'Are WFS sellers protected from Negative Feedback Rate penalties?',
        a: "Partially. If you use Walmart Fulfillment Services, negative feedback caused by shipping delays, damaged packaging, or other fulfillment issues is excluded from your rate. But product quality complaints, misleading descriptions, and items not matching the listing still count against you."
      },
      {
        q: 'How does Negative Feedback Rate connect to AI and GEO?',
        a: "The same listing data quality that keeps your Negative Feedback Rate low is the same data quality that AI shopping assistants like Sparky and Rufus need to recommend your products accurately. Specific, accurate product descriptions lead to correct AI recommendations, which lead to satisfied customers, which lead to low negative feedback. Bad data creates the opposite cycle."
      }
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['walmart-sparky-chatgpt-gemini', 'walmart-marketplace-200k-sellers'],
    featured_image_alt: 'Walmart Negative Feedback Rate seller health metric and its connection to AI product discovery in 2026'
  },
  published_at: '2026-03-30T12:00:00.000Z',
  content: `<p>Walmart just rolled out a new seller health metric called Negative Feedback Rate. If more than 2% of your orders receive 1 or 2-star ratings over a rolling 60-day window, you risk listing suppression, account suspension, or permanent termination.</p>

<p>Most sellers will read that as a compliance story. Keep your ratings up or lose your account. But the real story is what this metric reveals about where Walmart is heading and why the brands that win on data quality are the same brands that win with AI.</p>

<div class="callout-box">
  <p class="callout-label">Key Takeaways</p>
  <ul>
    <li><strong>2% threshold</strong> on 1-2 star ratings over a rolling 60-day window. Exceed it and your listings get suppressed, your account suspended, or permanently terminated.</li>
    <li><strong>Terminations are permanent.</strong> Unlike Amazon, Walmart does not offer a reinstatement path once your account is terminated for seller health violations.</li>
    <li><strong>WFS sellers get partial protection</strong> from fulfillment-related complaints, but product quality and listing accuracy issues still count against you.</li>
    <li><strong>Data quality is the common thread.</strong> The same listing specificity that keeps negative feedback low is what AI shopping assistants need to recommend your products accurately.</li>
  </ul>
</div>

<h2>What Is Walmart's Negative Feedback Rate?</h2>

<p>Negative Feedback Rate measures the percentage of your fulfilled orders that receive 1 or 2-star customer ratings in a rolling 60-day period. Walmart calculates it as total negative ratings divided by total orders.</p>

<p>The threshold is <strong>2%</strong>. If you stay under it, you're in good standing. If you exceed it, Walmart takes action on a three-tier enforcement scale:</p>

<ul>
<li><strong>Listing suppression.</strong> Your products drop in search rankings or get removed from search results entirely. You're still technically selling, but nobody can find you.</li>
<li><strong>Account suspension.</strong> Your selling privileges are paused. No sales, no revenue, no visibility. You need to submit a plan of action to get reinstated.</li>
<li><strong>Account termination.</strong> Your account is permanently closed. This is the critical difference from Amazon. <strong>Walmart terminations are final.</strong> There is no appeal, no reinstatement, no second chance.</li>
</ul>

<p>That last point is worth repeating. Amazon sellers are used to the reinstatement dance. You get suspended, you write a plan of action, you get back on. Walmart does not play that game. If your account gets terminated for seller health violations, it's over.</p>

<h2>Why This Is Really About Data Quality</h2>

<p>Here's what most sellers miss about this metric. The 1 and 2-star reviews that push you over the 2% threshold almost never come from products that are genuinely bad. They come from products where <strong>the customer's expectation didn't match reality.</strong></p>

<p>That gap between expectation and reality is a listing problem, not a product problem. It happens when:</p>

<ul>
<li>Your product description is vague enough that customers fill in the details with their own assumptions</li>
<li>Your images show a different size, color, or configuration than what ships</li>
<li>Your bullet points list features without specifying who the product is for or how it should be used</li>
<li>Your title contains keywords that attract the wrong buyer (someone searching for a professional tool lands on your consumer version)</li>
</ul>

<p>Every one of these is a data quality issue. And every one of them is fixable without changing your actual product.</p>

<h2>How Does Negative Feedback Rate Connect to AI and GEO?</h2>

<p>This is where it gets interesting. The same data specificity that prevents bad ratings is the same data that AI shopping assistants need to recommend your products accurately.</p>

<p><a href="/blog/walmart-sparky-chatgpt-gemini">Walmart's Sparky</a> and Amazon's Rufus work by matching customer queries to product listings. When a customer asks "what's the best protein powder for runners over 40," the AI needs to find a product whose listing explicitly says it's designed for runners, suitable for people over 40, and explains why.</p>

<p>If your listing is vague ("premium protein powder, great taste, high quality"), two bad things happen simultaneously:</p>

<p><strong>1. AI can't recommend you confidently.</strong> Sparky has nothing specific to match against the customer's query. You're invisible in AI-powered discovery.</p>

<p><strong>2. The wrong customers find you anyway through traditional search.</strong> They buy based on assumptions, receive a product that doesn't match their expectations, and leave a 1-star review.</p>

<p>Flip the script. If your listing says "plant-based protein isolate formulated for endurance athletes, 40g protein per serving, low-impact on joints," then:</p>

<p><strong>1. AI recommends you to the right customer.</strong> Sparky matches you to the runner asking about protein. You show up in the exact context where your product wins.</p>

<p><strong>2. That customer gets what they expected.</strong> The product matches the description. They leave a 4 or 5-star review. Your Negative Feedback Rate stays low.</p>

<p>This is the cycle Robert Hu keeps seeing across the brands he works with. <strong>Good data leads to accurate AI discovery leads to satisfied customers leads to growth.</strong> Bad data leads to invisibility in AI plus wrong-fit customers plus bad reviews plus account risk. Walmart's new metric is just making the consequences of that cycle more explicit.</p>

<h2>Do WFS Sellers Get Protection?</h2>

<p>Partially. If you use Walmart Fulfillment Services, negative feedback that's caused by fulfillment issues (late shipping, damaged packaging, delivery problems) is excluded from your Negative Feedback Rate calculation. Walmart recognizes that those are their operational problems, not yours.</p>

<p>But here's what WFS does not protect you from:</p>

<ul>
<li>Product quality complaints ("this broke after one use")</li>
<li>Listing accuracy issues ("this was smaller than I expected")</li>
<li>Wrong-fit purchases ("this doesn't work for what I needed")</li>
<li>Missing features or specifications ("the listing didn't mention it needed batteries")</li>
</ul>

<p>All of these are listing data problems. WFS handles the logistics side, but the product content side is entirely on you. And that's the side that determines whether AI recommends you to the right customer in the first place.</p>

<h2>What Should You Audit on Your Walmart Listings Right Now?</h2>

<p>If you're selling on Walmart Marketplace (and with the platform <a href="/blog/walmart-marketplace-200k-sellers">crossing 200,000 sellers</a>, you should be), here are five things to check this week:</p>

<p><strong>1. Read your 1 and 2-star reviews for patterns.</strong> Don't just count them. Read them. Look for phrases like "not what I expected," "smaller than it looked," "doesn't work for my situation." These are signals that your listing is creating wrong expectations. Group them by theme and prioritize the most common complaint.</p>

<p><strong>2. Check your product descriptions for specificity.</strong> Can a reader tell exactly who this product is for, when they should use it, and where it works best? If your description could apply to any product in your category, it's too vague. Add the WHO, WHEN, and WHERE context that both AI and customers need. This is core <a href="/geo">Generative Engine Optimization</a>.</p>

<p><strong>3. Verify your images match what ships.</strong> This sounds basic, but it's one of the top drivers of negative feedback. Check that product dimensions are clear, colors are accurate, and the packaging shown matches what the customer receives. If you sell variations, make sure each variation has its own accurate images.</p>

<p><strong>4. Audit your attributes for completeness.</strong> Walmart's catalog system uses structured attributes (size, material, weight, compatibility, age range) to power search and AI recommendations. Missing attributes mean AI can't filter correctly, which means wrong customers land on your listing. Fill in every applicable attribute field. <a href="/services/product-listing-optimization">Product listing optimization</a> starts here.</p>

<p><strong>5. Calculate your current rate and set an alert.</strong> Pull your last 60 days of order data and count the 1-2 star ratings. If you're at 1.5% or above, you're one bad week away from suppression. Don't wait for Walmart to notify you. Track it yourself and fix the root cause before it becomes an account-level problem.</p>

<h2>The Bigger Picture</h2>

<p>Walmart is doing something smart here. They're aligning seller health metrics with the same data quality standards that power AI-driven product discovery. The brands that maintain accurate, specific, structured listings will simultaneously:</p>

<ul>
<li>Stay under the 2% Negative Feedback Rate threshold</li>
<li>Get recommended by Sparky in AI shopping conversations</li>
<li>Convert better because the right customers are finding them</li>
<li>Build the review history that compounds into long-term marketplace authority</li>
</ul>

<p>It's not four separate problems. It's one problem with one solution: make your product data specific enough that both AI and customers know exactly what they're getting.</p>

<p>The brands that figure this out don't just survive the new metric. They use it as a competitive advantage while less disciplined sellers get suppressed around them.</p>

<p>If you want to audit your Walmart listings for both AI readiness and Negative Feedback Rate risk, <a href="/free-strategy-session">book a free strategy session</a> and we'll walk through your top products together.</p>`
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
