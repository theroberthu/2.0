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

// Changes applied:
// 1. TL;DR box at the very top
// 2. Bold key numbers/stats throughout
// 3. Each H2 leads with the most important sentence (conversion math section restructured)
// 4. "Common Mistakes" intro paragraph trimmed (was a weak 1-liner lead-in; merged into section)
// 5. Before/after wrapped in a callout box div

const updatedContent = `<div class="tldr-box">
<p class="tldr-label">TL;DR</p>
<ul>
<li>Conversion rate is the biggest revenue lever most Amazon sellers ignore. Moving from <strong>8% to 15%</strong> on a listing with 10,000 monthly sessions recovers <strong>$24,500 per month</strong> in revenue without buying more traffic.</li>
<li>The five clearest signs your listings are underperforming: conversion rate below category average, add-to-cart without purchase, clicks without conversions, flat revenue with strong rank, and ad spend propping up organic.</li>
<li>Most sellers audit only titles and bullets. A proper audit covers <strong>10 dimensions</strong>, and most listings have 8-12 specific, actionable improvements waiting.</li>
</ul>
</div>

<p>Most Amazon sellers focus on the wrong problem. They obsess over traffic: more ads, better keywords, higher bids. But the bigger leak in most accounts is not traffic. It is what happens after someone lands on a listing. A listing converting at <strong>8%</strong> that should be converting at <strong>15%</strong> is not an advertising problem. It is a content problem, and no amount of ad spend fixes a content problem.</p>

<p>After auditing hundreds of Amazon listings across categories, the pattern is consistent: sellers who have traffic but flat revenue almost always have listings that are losing the conversion. The revenue is there. The content is letting it walk away.</p>

<p>This post covers the math on what conversion rate actually means in dollars, five specific signs your listings are underperforming, the mistakes I see most often in audits, what a proper audit actually covers versus what most sellers check, and a before/after example of what optimization looks like in practice.</p>

<h2>What Does Conversion Rate Actually Mean in Dollars?</h2>

<p>On <strong>10,000 monthly sessions</strong> with a <strong>$35 average order value</strong>: at an <strong>8% conversion rate</strong>, that listing generates <strong>$28,000 per month</strong>. At <strong>15%</strong>, the same traffic generates <strong>$52,500 per month</strong>. The difference is <strong>$24,500 per month, or $294,000 per year</strong>, from the same number of sessions.</p>

<p>Even a more modest improvement tells the same story. Moving from <strong>8% to 11%</strong> on that same listing recovers <strong>$10,500 per month</strong>, or <strong>$126,000 annually</strong>, without buying a single additional click.</p>

<p>Conversion rate is not a line item in your ad dashboard. It lives in Seller Central business reports and gets ignored while everyone argues about ACoS. But it is the multiplier on every dollar of traffic spend. Fix it first, then scale traffic. Scaling traffic into a broken listing just burns more money faster.</p>

<p>The benchmark to know: a healthy conversion rate in most Amazon categories runs between <strong>10% and 15%</strong>. If your listing is converting below <strong>8%</strong>, your content is doing real damage regardless of how strong your other numbers look.</p>

<h2>5 Signs Your Listings Are Underperforming</h2>

<h3>1. Your conversion rate is below category average</h3>

<p>This is the clearest signal. Pull your conversion rate from Seller Central business reports (Units Ordered / Sessions) and compare it to your category benchmark. If you are below average in a competitive category, the listing is the problem, not the demand. Category averages vary: consumables and impulse purchases run higher, considered purchases and high-ticket items run lower. But if you are more than <strong>3-4 percentage points below your category norm</strong>, your content is actively pushing buyers to a competitor.</p>

<h3>2. Your add-to-cart rate is decent but your purchase rate is not</h3>

<p>When buyers add to cart but do not complete the purchase at a higher-than-average rate, they are experiencing something at the listing stage that creates hesitation. Common culprits: ambiguous sizing or compatibility information, a price point that looks high without sufficient value context, unclear return policies, or a listing that does not address the primary objection in the category. This is a content problem that shows up as a cart abandonment metric.</p>

<h3>3. Your main image gets clicks but the listing does not convert</h3>

<p>If your click-through rate from search results is strong but conversion on the listing page is weak, your main image is doing its job and your listing is failing. The main image creates the interest. The listing is supposed to close the sale. When there is a gap between clicks and conversions, it almost always means the listing is not delivering on what the main image promised, or is failing to address the buyer's next set of questions after they clicked.</p>

<h3>4. Your organic ranking is solid but revenue has plateaued</h3>

<p>Strong organic rank means the algorithm has recognized your relevance. Flat revenue with strong rank means buyers are finding you and leaving. This is the most expensive form of listing underperformance because you have already earned the visibility and you are not capturing it. The algorithm eventually notices too: declining conversion relative to category peers will erode that rank over time, compounding the problem.</p>

<h3>5. Your ad spend is high relative to organic revenue</h3>

<p>If paid traffic is doing a disproportionate share of the work to sustain your sales velocity, it is often because your organic conversion rate is too low to sustain momentum without that paid support. A listing that converts well organically builds its own momentum. Paid traffic should accelerate a listing that already works, not prop up one that does not.</p>

<h2>Common Mistakes I See After Auditing Hundreds of Listings</h2>

<p><strong>Leading with specs instead of outcomes in bullet points.</strong> Sellers write bullets like product data sheets: dimensions, materials, certifications. Buyers read bullets to answer the question "will this work for me?" Spec-first bullets make them do extra interpretive work. Outcome-first bullets answer the question directly. The rewrite is usually simple: instead of "Made with 18/8 stainless steel," write "Will not rust, chip, or retain flavor after years of daily use."</p>

<p><strong>Main images that do not show the product in real use.</strong> A white-background hero shot is required by Amazon, but it is not a conversion tool on its own. The secondary images are where buyers make the decision. Sellers who treat secondary images as a photo gallery are skipping the most important conversion real estate in the listing. Secondary images should show the product in use, address size/scale questions, and preemptively answer objections.</p>

<p><strong>An empty or neglected Q&A section.</strong> Buyers who read Q&A are close to a purchase decision; they have a specific question blocking them. An empty Q&A section tells that buyer nothing. Seed your Q&A with the <strong>8-10 most common pre-purchase questions</strong> and answer each thoroughly. It also feeds directly into Amazon Rufus recommendations, which now handle more than <strong>13% of all Amazon searches</strong>.</p>

<p><strong>A+ content that looks good but says little.</strong> Many brands treat A+ as a brand awareness exercise: beautiful lifestyle photography, short punchy taglines, minimal actual information. A+ content should answer the buyer's remaining questions after they have read the bullets. Comparison modules, feature callouts with meaningful detail, and use-case specificity all convert better than aspirational imagery with three-word headlines.</p>

<p><strong>Pricing that looks high without context.</strong> Most sellers respond to a conversion dip by discounting. The better response is to build value context in the listing so the price feels justified. Listing changes that communicate quality, longevity, or total cost of ownership often recover conversion without touching the price.</p>

<h2>What a Proper Listing Audit Covers (Versus What Most Sellers Check)</h2>

<p>Most sellers who "audit" their own listings check the title and bullets. A few check the main image. <strong>That covers maybe 20% of what actually drives conversion.</strong></p>

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

<p>Running this full audit on a single listing typically surfaces <strong>8-12 specific, actionable improvements</strong>. Most listings have two or three that are doing most of the conversion damage.</p>

<h2>Before and After: What Optimization Actually Looks Like</h2>

<p>This is the type of bullet point rewrite that shows up in nearly every audit. The category here is kitchen storage containers, but the pattern applies across categories.</p>

<div class="callout-box">
<p class="callout-label">Before vs. After</p>
<p><strong>Before (spec-first):</strong></p>
<blockquote>AIRTIGHT SEAL TECHNOLOGY: Features our patented 4-lock locking system with silicone gasket for maximum freshness. BPA-free, food-safe materials. Available in multiple sizes.</blockquote>

<p><strong>After (outcome-first):</strong></p>
<blockquote>Keeps flour, sugar, and coffee fresh for months without clumping or going stale, thanks to a silicone-sealed 4-lock lid that holds an airtight seal even when the container is stored on its side. BPA-free and dishwasher-safe.</blockquote>

<p>The "before" version names the technology and lists compliance specs. The "after" version answers the buyer's actual question: "Will my flour still be good in three months?" It includes a specific use case, addresses a common scenario, and keeps the compliance information without leading with it.</p>
</div>

<p>This single bullet rewrite, applied across five bullet points in a listing, typically moves conversion rate measurably within <strong>2-3 weeks</strong>. The traffic is identical. The revenue is not.</p>

<h2>Where to Start</h2>

<p>Start with one metric: pull your conversion rate from Seller Central business reports and compare it to your category benchmark. If you are more than a few points below average on a listing with meaningful traffic, you have found where revenue is leaking.</p>

<p>From there, check your secondary images and your Q&A section. These two elements are the most commonly neglected and the most quickly improved. If those look thin, the rest of the listing almost certainly has gaps too.</p>

<p>For a full assessment, <a href="/services/product-listing-optimization">product listing optimization</a> is where Robert Hu works through all ten audit dimensions and prioritizes the changes with the highest conversion impact. If you want to understand the opportunity in your specific listings before committing to anything, <a href="/free-strategy-session">book a free 15-minute strategy session</a> and bring your top two or three listings. That conversation alone usually surfaces the highest-leverage changes.</p>

<p>The math is clear. The traffic is already there. The question is how much of it you are converting.</p>`

async function updatePost() {
  const { data, error } = await supabase
    .from('blog_posts')
    .update({ content: updatedContent })
    .eq('slug', 'amazon-listing-optimization-cost')
    .select('id, slug')

  if (error) { console.error('Error updating post:', error); process.exit(1) }
  console.log('Post updated successfully:', data[0].id)
  console.log('Slug:', data[0].slug)
}

updatePost()
