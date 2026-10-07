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

const DESCRIPTION = "Amazon Review Requests is a new ad type that invites recent buyers to rate or review. How it works, who qualifies, how it compares with Vine, and how to measure cost."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'amazon-review-requests-ads',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "Amazon Review Requests Ads: How Amazon's New Paid Review Invitations Work",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Amazon Review Requests Ads: How They Work vs. Vine',
  excerpt: "Amazon Review Requests is a new Amazon Ads campaign type that shows review invitations to customers who recently bought your product. Here is who qualifies, how it differs from the free Request a Review button and Amazon Vine, what Amazon has and has not said about billing and launch timing, and how to measure cost per incremental review.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/amazon-review-requests-ads.svg',
  category: 'Digital Marketing',
  tags: ['Amazon Ads', 'Review Requests', 'Amazon reviews', 'Amazon Vine', 'product launch', 'Amazon sellers'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['amazon-variation-reviews-2026', 'amazon-full-funnel-campaigns-ai-channel-mix', 'amazon-advertising-strategy-2026'],
    featured_image_alt: 'An Amazon review invitation shown to a customer who recently purchased the product, with a one-tap star rating',
  },
  published_at: new Date().toISOString(),
  content: `<p><a href="https://advertising.amazon.com/resources/whats-new/get-product-reviews-faster-with-review-requests" ${EXT}>Amazon Ads announced Review Requests on September 29, 2026</a>. It is a new campaign type that shows a review invitation to customers who recently bought your product, while they browse Amazon.</p>

<p>The important distinction is in the name. You are paying to put an invitation in front of verified buyers. You are not paying for a review, and you are not paying for a good one. That makes review acquisition a media decision for the first time, and it should be measured like one.</p>

<h2>What Review Requests ads are</h2>

<p>A customer who recently purchased your product sees a Review Requests ad. They can submit a star rating with one tap, then optionally add a written review with photos or video. Amazon says the invitations run on its highest-traffic pages, naming the homepage as an example.</p>

<p>Amazon frames the output as "the same authentic reviews customers already leave," and the review that results is an ordinary customer review on your product detail page. Because it sits on the detail page, any lift reaches every shopper who visits the listing, not only the ones who saw the ad.</p>

<p>You create and manage campaigns in <a href="/blog/amazon-full-funnel-campaigns-ai-channel-mix">Amazon Ads Agent</a>, Amazon's renamed advertising platform, or through the Amazon Ads Unified API, where Review Requests extends the existing campaign management endpoints.</p>

<h2>Who can use Review Requests</h2>

<p>Amazon's eligibility rules are specific:</p>

<p><strong>Advertisers:</strong> registered sellers and vendors with an advertising console account in good standing and no active policy violations.</p>

<p><strong>Products:</strong> fewer than 1,000 total ratings and reviews. Amazon checks eligibility when you create the campaign and again while it runs, and campaigns for a product pause automatically once it reaches 1,000.</p>

<p><strong>Geography:</strong> United States only at launch, with more marketplaces planned.</p>

<p>The 1,000 cap tells you what this is for: an early-life tool for products still building social proof.</p>

<h2>When it launches</h2>

<p>Amazon's own pages disagree. The launch announcement says Review Requests "launches in open beta in the United States in late October 2026." <a href="https://advertising.amazon.com/library/news/branded-conversations-review-requests" ${EXT}>Amazon's unBoxed news post</a> says it "will launch in November 2026." Until Amazon reconciles them, treat the date as whatever appears in your Ads Agent account.</p>

<h2>Review Requests vs. Request a Review vs. Vine</h2>

<p>Amazon now offers three compliant ways to get more reviews, and they solve different problems.</p>

<p><strong>Request a Review (free).</strong> A button on each shipped order in Seller Central. <a href="https://sellercentral.amazon.com/seller-forums/discussions/t/aefdbe9d-fd18-40f2-aba5-cdd70e86068f" ${EXT}>Amazon staff guidance in the Seller Forums</a> says it can be used once per order, between 5 and 30 days after delivery, and sends a standardized email asking for both a product review and seller feedback. It is free, and you should already use it on every eligible order.</p>

<p><strong>Amazon Vine (enrollment fee).</strong> You give up to 30 units to Amazon's invited reviewers. New products can enroll before launch once they have a customer-ready FBA listing, and existing products qualify with fewer than 30 reviews. <a href="https://sell.amazon.com/programs/vine" ${EXT}>Amazon says you are not billed until the first Vine review publishes</a>, and you are not charged if no review arrives within 90 days. Vine solves the zero-reviews problem at launch.</p>

<p><strong>Review Requests (advertising spend).</strong> Reaches customers who bought the product themselves, through an on-site ad rather than an email, for products under 1,000 reviews. It solves the problem that comes after Vine: a product with some reviews whose organic review rate is too slow.</p>

<h2>How Review Requests ads are billed</h2>

<p>This is the biggest open question, and the honest answer is that Amazon has not published it.</p>

<p>Amazon's documentation says only that campaigns use "the same bidding and budget controls you use for your other Amazon Ads campaigns." It does not say whether you pay per click, per impression, or per review submitted. One agency write-up states that brands pay only when a customer submits a review, but cites no Amazon source. Amazon has not documented minimum bids or budgets either.</p>

<p>Check the billing unit in Ads Agent before you spend anything. The measurement method below works under any of the three.</p>

<h2>What Amazon's 3x result actually shows</h2>

<p>Amazon says products in its closed beta received three times as many ratings and reviews per week "compared to before the test." The footnote cites internal Amazon data from a US closed beta that ran June 3 to 21, 2026.</p>

<p>That is a before-and-after comparison over 19 days. Amazon has not disclosed how many products took part, what categories they were in, what they spent, or whether any comparable products ran without the ad. It is a reasonable signal. It is not a forecast for your catalog, and it says nothing about cost.</p>

<h2>Is the invitation neutral?</h2>

<p>Amazon describes the ad as inviting recent buyers to submit "a star rating or written review," and the examples show a plain rating prompt. Nothing in Amazon's documentation suggests the invitation asks for positive reviews, and Amazon's community guidelines prohibit reviews given in exchange for anything of value.</p>

<p>What Amazon has not disclosed is how it chooses which recent buyers see the ad. Watch your average rating, not just your count. And do not follow Amazon's invitation with your own messages that route happy buyers to review and unhappy ones to support. That is review gating, and it is a policy problem even when the ad itself is compliant.</p>

<h2>How to measure cost per incremental review</h2>

<p>Faster review growth is not the same as a positive return. The useful number is how much campaign spend it took to earn each review above your normal rate.</p>

<p>Before launch, record each eligible product's reviews and ratings per week, and its units sold per week, for the previous four to eight weeks. That gives you a baseline review rate per unit sold, which matters because reviews rise with sales whether or not you advertise.</p>

<p>Then run the campaign and calculate:</p>

<p><strong>Cost per incremental review = campaign spend divided by (reviews received during the campaign minus reviews you would have expected at your baseline rate for the units you sold).</strong></p>

<p>If you can, hold back one or two similar products as a control. Count star-only ratings and written reviews separately. Written reviews carry more information for shoppers, and increasingly for the <a href="/blog/reviews-ai-discovery-infrastructure-bazaarvoice-bluefish">AI shopping assistants that summarize them</a>. And set a ceiling before you start: the highest cost per incremental review you will accept, based on what a higher count is worth to your conversion rate.</p>

<h2>What changes for product launch economics</h2>

<p>Amazon has spent this year tightening how reviews accumulate, including <a href="/blog/amazon-variation-reviews-2026">splitting reviews across functionally different variations</a>. Paid invitations are the other side of that policy: fewer ways to borrow reviews, one more way to ask for them.</p>

<p>For a new product, the sequence becomes clearer. Vine before or at launch for the first reviews. Request a Review on every eligible order, because it is free. Review Requests when the organic rate stalls and the product is still well under 1,000 reviews.</p>

<p>What Review Requests does not do is guarantee better ranking. Amazon has made no claim that the reviews it produces carry any search or ranking benefit beyond what any review carries, so do not budget as if they do.</p>

<p>The format is most useful for products with steady sales and a slow review rate. It is least useful for products whose real problem is that buyers do not like them, since more reviews will simply confirm it faster. <a href="/blog/amazon-advertising-strategy-2026">Fix the listing and the product first</a>, then pay to ask.</p>

<p>If asking for a review now has a price, what is one more review actually worth to your product?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
