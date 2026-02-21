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
  'amazon-listing-optimization-cost',
  'The Real Cost of Bad Amazon Listings',
  'E-commerce Strategy'
)
console.log('Generated OG image:', ogImagePath)

const post = {
  slug: 'amazon-listing-optimization-cost',
  title: 'The Real Cost of Bad Amazon Listings (And How to Know If Yours Are Underperforming)',
  excerpt: 'Most Amazon sellers fixate on traffic and ad spend, but the real leak is conversion rate. A 1% improvement on 10,000 monthly sessions can mean $35,000 in recovered revenue. Here is how to know if your listings are leaving money on the table.',
  meta_title: 'The Real Cost of Bad Amazon Listings',
  meta_description: 'Bad Amazon listings lose you money silently. Learn the conversion math, 5 signs of underperformance, and what a proper listing audit actually covers.',
  og_image: ogImagePath,
  category: 'E-commerce Strategy',
  tags: [
    'amazon listing optimization',
    'bad amazon listings',
    'amazon listing audit',
    'improve amazon conversion rate',
    'amazon listing mistakes',
  ],
  status: 'published',
  featured: false,
  read_time_minutes: 7,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'What is a good Amazon conversion rate?',
        a: 'A healthy Amazon conversion rate varies by category, but a general benchmark for most product categories is 10-15%. If your listing is converting below 8%, your content is likely losing you meaningful revenue regardless of how much traffic you drive. Categories with higher price points or more competitive alternatives tend to sit lower; impulse-buy and well-known brand listings can exceed 20%.',
      },
      {
        q: 'How much revenue can a listing optimization actually recover?',
        a: 'The math is straightforward. On 10,000 monthly sessions at a $35 average order value, moving from an 8% to a 15% conversion rate means the difference between $28,000 and $52,500 in monthly revenue, a $24,500 monthly swing. Even a modest 2-3% improvement on a mid-volume listing typically recovers more revenue than the same budget spent on additional ad spend.',
      },
      {
        q: 'What are the most common Amazon listing mistakes?',
        a: "The most common mistakes from auditing hundreds of listings are: leading with specs instead of outcomes in bullet points, using lifestyle photography without showing the product in actual use, ignoring the Q&A section entirely, having an A+ content layout that is visually strong but information-thin, and failing to address the specific objections buyers have before purchasing. Most sellers also underestimate how much their review content and star rating affect conversion at the category average.",
      },
      {
        q: 'What does a proper Amazon listing audit cover?',
        a: "A thorough listing audit goes beyond checking titles and bullets. It covers: title structure and keyword relevance, bullet hierarchy and conversion logic, main and secondary image compliance and quality, A+ content effectiveness, Q&A section coverage and quality, review analysis to identify conversion objections, backend search term usage, category and browse node accuracy, pricing relative to category norms, and a conversion rate benchmark against category averages. Most sellers only check the first two or three of these.",
      },
      {
        q: 'How do I know if my Amazon listing is underperforming?',
        a: 'Five clear signals: your conversion rate is below category average, your add-to-cart rate is high but purchase rate is low (indicating buyer hesitation at checkout), your main image gets clicks but your listing does not convert, your organic ranking is strong but revenue has plateaued, and your ad spend is high relative to organic revenue because paid traffic is propping up a listing that does not convert on its own.',
      },
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['amazon-rufus-optimization', 'amazon-rufus-ai-shopping-sellers'],
    featured_image_alt:
      'Amazon listing optimization cost calculator showing conversion rate impact on monthly revenue',
  },
  published_at: '2026-02-21T12:00:00.000Z',
  content: `<p>Most Amazon sellers focus on the wrong problem. They obsess over traffic: more ads, better keywords, higher bids. But the bigger leak in most accounts is not traffic. It is what happens after someone lands on a listing. A listing converting at 8% that should be converting at 15% is not an advertising problem. It is a content problem, and no amount of ad spend fixes a content problem.</p>

<p>After auditing hundreds of Amazon listings across categories, the pattern is consistent: sellers who have traffic but flat revenue almost always have listings that are losing the conversion. The revenue is there. The content is letting it walk away.</p>

<p>This post covers the math on what conversion rate actually means in dollars, five specific signs your listings are underperforming, the mistakes I see most often in audits, what a proper audit actually covers versus what most sellers check, and a before/after example of what optimization looks like in practice.</p>

<h2>What Does Conversion Rate Actually Mean in Dollars?</h2>

<p>Here is the math sellers should run before they do anything else.</p>

<p>Take a listing with 10,000 monthly sessions and a $35 average order value. At an 8% conversion rate, that listing generates $28,000 per month. At 15%, the same traffic generates $52,500 per month. The difference is $24,500 per month, or $294,000 per year, from the same number of sessions.</p>

<p>Even a more modest improvement tells the same story. Moving from 8% to 11% on that same listing recovers $10,500 per month. That is $126,000 in annual revenue recovered without buying a single additional click.</p>

<p>Most sellers do not think about it this way because conversion rate is not a line item in their ad dashboard. It lives in Seller Central business reports and gets ignored while everyone argues about ACoS. But conversion rate is the multiplier on every dollar of traffic spend. Fix it first, then scale traffic. Scaling traffic into a broken listing just burns more money faster.</p>

<p>The benchmark to know: a healthy conversion rate in most Amazon categories runs between 10% and 15%. If your listing is converting below 8%, your content is doing real damage regardless of how strong your other numbers look.</p>

<h2>5 Signs Your Listings Are Underperforming</h2>

<h3>1. Your conversion rate is below category average</h3>

<p>This is the clearest signal. Pull your conversion rate from Seller Central business reports (Units Ordered / Sessions) and compare it to your category benchmark. If you are below average in a competitive category, the listing is the problem, not the demand. Category averages vary: consumables and impulse purchases run higher, considered purchases and high-ticket items run lower. But if you are more than 3-4 percentage points below your category norm, your content is actively pushing buyers to a competitor.</p>

<h3>2. Your add-to-cart rate is decent but your purchase rate is not</h3>

<p>When buyers add to cart but do not complete the purchase at a higher-than-average rate, they are experiencing something at the listing stage that creates hesitation. Common culprits: ambiguous sizing or compatibility information, a price point that looks high without sufficient value context, unclear return policies, or a listing that does not address the primary objection in the category. This is a content problem that shows up as a cart abandonment metric.</p>

<h3>3. Your main image gets clicks but the listing does not convert</h3>

<p>If your click-through rate from search results is strong but conversion on the listing page is weak, your main image is doing its job and your listing is failing. The main image creates the interest. The listing is supposed to close the sale. When there is a gap between clicks and conversions, it almost always means the listing is not delivering on what the main image promised, or is failing to address the buyer's next set of questions after they clicked.</p>

<h3>4. Your organic ranking is solid but revenue has plateaued</h3>

<p>Strong organic rank means the algorithm has recognized your relevance. Flat revenue with strong rank means buyers are finding you and leaving. This is the most expensive form of listing underperformance because you have already earned the visibility and you are not capturing it. The algorithm eventually notices too: declining conversion relative to category peers will erode that rank over time, compounding the problem.</p>

<h3>5. Your ad spend is high relative to organic revenue</h3>

<p>If paid traffic is doing a disproportionate share of the work to sustain your sales velocity, it is often because your organic conversion rate is too low to sustain momentum without that paid support. A listing that converts well organically builds its own momentum. A listing that only converts with significant ad pressure is a listing where the content is not carrying its weight. Paid traffic should accelerate a listing that already works, not prop up one that does not.</p>

<h2>Common Mistakes I See After Auditing Hundreds of Listings</h2>

<p>These are the patterns that appear repeatedly, regardless of category:</p>

<p><strong>Leading with specs instead of outcomes in bullet points.</strong> Sellers write bullets like product data sheets: dimensions, materials, certifications. Buyers read bullets to answer the question "will this work for me?" Spec-first bullets make them do extra interpretive work. Outcome-first bullets answer the question directly. The rewrite is usually simple: instead of "Made with 18/8 stainless steel," write "Will not rust, chip, or retain flavor after years of daily use."</p>

<p><strong>Main images that do not show the product in real use.</strong> A white-background hero shot is required by Amazon, but it is not a conversion tool on its own. The secondary images are where buyers make the decision. Sellers who treat secondary images as a photo gallery (multiple angles of the same product against white) are skipping the most important conversion real estate in the listing. The secondary images should show the product in use, address size/scale questions, and preemptively answer objections.</p>

<p><strong>An empty or neglected Q&A section.</strong> The customer Q&A section is one of the highest-value listing elements that most sellers ignore. Buyers who read Q&A are close to a purchase decision; they have a specific question blocking them. An empty Q&A section tells that buyer nothing. A seeded Q&A section with the 8-10 most common pre-purchase questions answered thoroughly closes more of those buyers. It also feeds directly into Amazon Rufus recommendations, which now handle more than 13% of all Amazon searches.</p>

<p><strong>A+ content that looks good but says little.</strong> Brand Registry unlocks A+ content, and many brands treat it as a brand awareness exercise: beautiful lifestyle photography, short punchy taglines, minimal actual information. That approach does not convert. A+ content should answer the buyer's remaining questions after they have read the bullets. Comparison modules, feature callouts with meaningful detail, and use-case specificity all convert better than aspirational imagery with three-word headlines.</p>

<p><strong>Pricing that looks high without context.</strong> Conversion rate drops when a price looks expensive relative to perceived value. Most sellers respond by discounting. The better response is to build the value context in the listing so the price feels justified. Listing changes that communicate quality, longevity, or total cost of ownership often recover conversion without touching the price.</p>

<h2>What a Proper Listing Audit Covers (Versus What Most Sellers Check)</h2>

<p>Most sellers who "audit" their own listings check the title and bullets. A few check the main image. That covers maybe 20% of what actually drives conversion. Here is what a thorough audit covers:</p>

<p><strong>What most sellers check:</strong> title keyword relevance, bullet point content, main image compliance.</p>

<p><strong>What a proper audit covers:</strong></p>

<ul>
<li>Title structure, keyword relevance, and readability for both search and AI recommendation systems</li>
<li>Bullet hierarchy: whether the first bullet leads with the most important conversion argument, not the most obvious feature</li>
<li>All seven image slots: compliance, quality, use-case coverage, objection handling, and size/scale clarity</li>
<li>A+ content: information density, module selection, comparison chart usage, and text-to-visual ratio</li>
<li>Q&A section: coverage of actual pre-purchase questions, quality of existing answers, and gaps versus competitor Q&A</li>
<li>Review analysis: the top objections and conversion blockers appearing in 3-star and 4-star reviews, which are the most actionable review tier for listing improvements</li>
<li>Backend search terms: unused capacity, redundancy, and missed long-tail opportunities</li>
<li>Category and browse node accuracy: misclassified listings miss category-level discovery traffic</li>
<li>Pricing relative to category norms and perceived value signals</li>
<li>Conversion rate benchmarked against category averages, not just absolute numbers</li>
</ul>

<p>Running this full audit on a single listing typically surfaces 8-12 specific, actionable improvements. Most listings have two or three that are doing most of the conversion damage.</p>

<h2>Before and After: What Optimization Actually Looks Like</h2>

<p>Here is a real example of the type of bullet point rewrite that shows up in most audits. The category is kitchen storage containers.</p>

<p><strong>Before:</strong></p>

<blockquote>AIRTIGHT SEAL TECHNOLOGY: Features our patented 4-lock locking system with silicone gasket for maximum freshness. BPA-free, food-safe materials. Available in multiple sizes.</blockquote>

<p><strong>After:</strong></p>

<blockquote>Keeps flour, sugar, and coffee fresh for months without clumping or going stale, thanks to a silicone-sealed 4-lock lid that holds an airtight seal even when the container is stored on its side. BPA-free and dishwasher-safe.</blockquote>

<p>The "before" version names the technology and lists compliance specs. The "after" version answers the buyer's actual question: "Will my flour still be good in three months?" It includes a specific use case (stored on its side), addresses a common kitchen storage scenario, and keeps the compliance information without leading with it.</p>

<p>This single bullet rewrite, applied across five bullet points in a listing, typically moves conversion rate measurably within 2-3 weeks. The traffic is identical. The revenue is not.</p>

<h2>Where to Start</h2>

<p>If you are not sure whether your listings are the problem, start with one metric: pull your conversion rate from Seller Central business reports and compare it to your category benchmark. If you are more than a few points below average on a listing with meaningful traffic, you have found where revenue is leaking.</p>

<p>From there, check your secondary images and your Q&A section. These two elements are the most commonly neglected and the most quickly improved. If those look thin, the rest of the listing almost certainly has gaps too.</p>

<p>For a full assessment, <a href="/services/product-listing-optimization">product listing optimization</a> is where Robert Hu works through all ten audit dimensions and prioritizes the changes with the highest conversion impact. If you want to understand the opportunity in your specific listings before committing to anything, <a href="/free-strategy-session">book a free 15-minute strategy session</a> and bring your top two or three listings. That conversation alone usually surfaces the highest-leverage changes.</p>

<p>The math is clear. The traffic is already there. The question is how much of it you are converting.</p>`,
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
