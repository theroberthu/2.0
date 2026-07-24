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

const DESCRIPTION = 'Business Insider reports TikTok is testing a paid membership, TikTok Shop Plus. What the test suggests about owning conversion, and what it cannot prove.'
const BI_URL = 'https://www.businessinsider.com/tiktok-is-testing-an-amazon-prime-style-membership-program-2026-7'

const post = {
  slug: 'tiktok-shop-plus-final-conversion',
  title: 'TikTok Shop Plus and the Fight to Own the Final Conversion',
  excerpt: 'TikTok has proven it can create demand. A reported membership test suggests the harder problem is keeping that demand from leaking to Amazon at the moment of purchase.',
  meta_title: 'TikTok Shop Plus and the Fight to Own the Final Conversion',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/tiktok-shop-plus-final-conversion.svg',
  category: 'E-commerce Strategy',
  tags: ['TikTok Shop Plus', 'social commerce', 'marketplace strategy', 'membership programs', 'conversion'],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['tiktok-shop-revolution-2025', 'amazon-ai-walled-garden', 'meta-hatch-instagram-shopping-agent-marketplace-sellers'],
    featured_image_alt: 'TikTok working to keep product demand created on the platform from converting on Amazon',
  },
  published_at: '2026-07-24T16:00:00.000Z',
  content: `<p>There is a pattern in social commerce that rarely shows up in a platform's reported numbers. A creator video does its job. Someone watches a demonstration, decides they want the product, and then opens a different app to buy it. Usually Amazon, where the card is already saved and the delivery date is already known. The demand was manufactured in one place and captured somewhere else.</p>

<p>TikTok has spent years proving it can do the first part. The <a href="/blog/tiktok-shop-revolution-2025">discovery engine works</a>, and in a way traditional retail media has struggled to replicate, because the product arrives inside entertainment rather than an ad unit. The harder question has always been what share of that demand TikTok keeps.</p>

<h2>What was reported</h2>

<p>On July 24, <a href="${BI_URL}" target="_blank" rel="noopener noreferrer">Business Insider reported</a> that TikTok is testing a membership program called TikTok Shop Plus. According to that report, some shoppers in the United States were shown an offer including free shipping, product discounts, and coupons. The reported price tests ran at $6, $10, and $15 per month. TikTok did not respond to Business Insider's request for comment. Business Insider also reported that a former TikTok Shop staffer had watched bottom-funnel shoppers discover products on TikTok and then complete their purchases on Amazon. The report framed the test as a rival to Amazon Prime.</p>

<p>Those are the reported facts and they are worth holding tightly. This is a test surfaced to some shoppers, not a national launch.</p>

<p>Everything after this point is my interpretation.</p>

<p>Testing multiple price points suggests TikTok is still working out what shoppers might pay, not rolling out a finished product. A test that appears in July can disappear in September without explanation.</p>

<h2>Membership as conversion infrastructure</h2>

<p>The instinct is to read a membership program as a loyalty play. Loyalty is part of it, but it is an incomplete frame. Loyalty programs are built to increase frequency among people who already buy from you. The reported benefit bundle also addresses the moment of hesitation before a first or occasional purchase.</p>

<p>Free shipping is the clearest signal. Shipping cost is a reliable cause of abandonment, felt most sharply on exactly the low-consideration, impulse-shaped purchase a creator video produces. A shopper who already paid a monthly fee has pre-committed to a decision they would otherwise make at checkout, every time. Discounts and coupons work the same seam, the gap between wanting a thing and completing the purchase.</p>

<p>Read that way, a membership is less a retention product than an attempt to shorten the distance between the video and the transaction, and to make leaving for another app feel like leaving money on the table. Sunk cost does quiet work here. Someone paying monthly has a reason to check TikTok first, which is the behavior the platform needs.</p>

<p>There is a second-order effect. A subscription generates a durable customer record: a billing relationship, a renewal date, a purchase history attached to a paying account rather than an anonymous session. A different asset than watch time.</p>

<h2>Borrowing from the marketplace playbook</h2>

<p>None of this is novel, which is part of why it is interesting. It is close to the sequence Amazon ran, reversed.</p>

<p>Amazon built the transaction first and spent two decades adding reasons never to leave. TikTok is attempting the reverse, starting from attention and working backward toward the transaction. The pattern of a platform trying to hold the entire journey inside its own walls is one I have written about in the context of <a href="/blog/amazon-ai-walled-garden">Amazon deciding who gets to shop inside Amazon</a>, and TikTok is not the only company running this play. Meta's <a href="/blog/meta-hatch-instagram-shopping-agent-marketplace-sellers">shopping agent work inside Instagram</a> points at the same objective from another direction.</p>

<p>What makes the timing coherent is that the distance between discovery and purchase keeps <a href="/blog/ai-compresses-messy-middle-ecommerce">getting shorter across every surface</a>. When the consideration phase compresses, whoever owns the final step captures disproportionate value, because there is less room in between for a competitor to intercept. Owning discovery without owning conversion is an increasingly expensive position.</p>

<h2>What it means for brands selling on TikTok Shop</h2>

<p>If the test becomes a product, the implications are mostly operational.</p>

<p>Someone has to fund the benefit. Free shipping and discounts get paid for by the platform, the seller, or both, and that answer usually emerges after sellers have built their assumptions around current economics. Any margin model treating TikTok Shop shipping as a fixed cost is worth revisiting before the terms are set.</p>

<p>Membership programs also tend to reshape assortment. If members get free shipping, the products that benefit most are the ones where shipping was previously the deciding friction, which shifts the advantage toward lower-priced and repeat-purchase items. That is a different catalog than the one optimized for a single viral moment.</p>

<p>And a platform that owns the final conversion also owns the customer relationship built on it. Brands treating TikTok as top-of-funnel, expecting to convert those buyers into a direct relationship later, should watch whether that path stays open.</p>

<h2>The honest counterpoint</h2>

<p>It would be easy to overread this.</p>

<p>Calling this a Prime rival, as the framing around the test does, sets a high bar. Prime's advantage was never only the discount. It combines enormous selection, trusted delivery promises, years of accumulated habit, and benefits extending well beyond commerce. TikTok does have a growing fulfillment operation, including Fulfilled by TikTok and free three-day delivery for eligible products. What it has not replicated is Amazon's scale, breadth, or mature membership ecosystem.</p>

<p>There is also a plainer possibility. Companies test many things, and most do not ship. Three price points suggest genuine uncertainty about willingness to pay. It is entirely possible the economics did not work and this is the last anyone hears of it.</p>

<h2>The question underneath</h2>

<p>The interesting question is not whether TikTok can copy Prime. It probably cannot, at least not soon. It is whether attention converts into durable shopping behavior at all. Social platforms have repeatedly shown they can create demand. What remains unsettled is whether they can turn an audience that arrived for entertainment into customers who return with intent, on a schedule, the way a marketplace customer does. A paid membership is a direct test of that proposition because it asks shoppers to commit before they know how often they will use the benefits.</p>

<p>If a meaningful number of people pay six dollars a month for the privilege of buying things they found in a video, that tells us something about social commerce that GMV figures cannot. If almost nobody does, that is informative too.</p>
`,
}

const { data: existing } = await supabase
  .from('blog_posts')
  .select('id, slug')
  .eq('slug', post.slug)
  .maybeSingle()

if (existing) {
  const { error } = await supabase.from('blog_posts').update(post).eq('id', existing.id)
  if (error) { console.error('Update failed:', error); process.exit(1) }
  console.log('Post updated successfully:', existing.id)
} else {
  const { data, error } = await supabase.from('blog_posts').insert(post).select('id').single()
  if (error) { console.error('Insert failed:', error); process.exit(1) }
  console.log('Post inserted successfully:', data.id)
}
console.log('URL: https://theroberthu.com/blog/' + post.slug)
