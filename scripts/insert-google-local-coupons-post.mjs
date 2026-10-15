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

const DESCRIPTION = "Google Local Coupons is a closed-beta Search ad billed only when a shopper redeems the code in store. How it works, what you pay for and what the POS measures."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'google-local-coupons-pay-per-redemption-ads',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Google Local Coupons: How Pay-on-Redemption Search Ads Work',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Google Local Coupons: How Retailers Pay Per Redemption',
  excerpt: "Google Local Coupons is a closed-beta Search ad, available to select U.S. accounts as of October 2026, that bills retailers only when a shopper redeems a single-use code at the register. How it works, what the retailer pays for, and what the point-of-sale integration measures. Pay per redemption, not pay per click and not necessarily pay per sale.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/google-local-coupons-pay-per-redemption-ads.svg',
  category: 'Digital Marketing',
  tags: ['Google Ads', 'Local Coupons', 'local retail', 'in-store attribution', 'Lightspeed', 'retail media'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['retail-media-programmatic-buying-openrtb-koddi-teads', 'google-ucp-analytics-merchant-center-ai-checkout', 'ai-shopping-retailer-recommendation-gap-lightspeed-vaer'],
    featured_image_alt: 'A Search ad coupon redeemed at a store register, with the retailer billed only on redemption',
  },
  published_at: new Date().toISOString(),
  content: `<p>Google is testing a Search ad that a retailer pays for only when a shopper hands over a coupon code at the register. It is called Local Coupons, and the most detailed public documentation of how it works comes from a point-of-sale company, Lightspeed, rather than from Google.</p>

<p><strong>Availability: closed beta, select U.S. accounts, as of October 2026.</strong> Google has not published its own help page for Local Coupons, so this guide covers what is documented today.</p>

<h2>What Google Local Coupons is</h2>

<p><a href="https://x-series-support.lightspeedhq.com/hc/en-us/articles/53103095790491-Setting-up-Google-Local-Coupons-promotions" ${EXT}>Lightspeed's setup guide</a> describes Local Coupons as "a new Google Ads feature that aims to help you drive in-store traffic." The ad appears on Google Search to people nearby who search for the kind of product a store sells, such as "shoe store." It shows the business name and location, the discount, the type of product it applies to, and the promotion dates and terms.</p>

<p>Google's own public references are brief. Its <a href="https://blog.google/products/ads-commerce/google-marketing-live-search-ads/" ${EXT}>May 20 post on Direct Offers</a> said brands can upload promotions in Google Ads "including discounts, giveaways and local coupons." On October 8, Selin Song, a vice president at Google Customer Solutions, described the Local Coupons pilot in a LinkedIn post, and <a href="https://www.mediapost.com/publications/article/418625/google-pilots-in-store-retail-attribution-from-cli.html" ${EXT}>trade coverage</a> reported that the coupon can be saved to a phone's wallet.</p>

<h2>Who can use Google Local Coupons</h2>

<p>Lightspeed says the integration "is in closed beta and available for select US accounts (United States English) only." A retailer also needs a Lightspeed Retail plan that includes promotions.</p>

<p>The store needs a verified Google Business Profile, and the address and business details in the point-of-sale system must match it. Each promotion is tied to an outlet that matches a verified Business Profile location.</p>

<p>This is not open to every Google Ads advertiser, and it does not work with every point-of-sale system. Trade coverage of the pilot names Clover alongside Lightspeed. No other systems have been publicly confirmed.</p>

<h2>How shoppers claim and redeem the coupon</h2>

<p>A shopper who sees the ad clicks Claim offer, which gives them a single-use promo code. Where the store's hardware supports it, the shopper can show a barcode instead. At checkout, the cashier applies the code in the point-of-sale system the same way as any other promo code.</p>

<p>Codes only work while the promotion is active. If the retailer ends a promotion early, Lightspeed says redemption at the register stops immediately, while Google can take up to three business days to stop showing the ad. A shopper who claimed a code in that window would not be able to use it.</p>

<h2>What retailers pay for</h2>

<p>Lightspeed's guide says: "you only get billed after a customer actually redeems a promo code in your store."</p>

<p>The retailer sets a bid, described as the maximum it is willing to pay per in-store redemption, and labeled Target CPA in the setup form. It also sets a spending limit. Lightspeed's billing section calls this a monthly spending cap, while its setup steps describe a total campaign budget for the whole promotion. "If no one redeems a coupon, the bill is $0." Google invoices the retailer monthly, and Lightspeed says it does not charge for running the campaign.</p>

<p>The retailer pays twice for each redeemed coupon: once in the discount it gives the shopper, and again in the fee to Google. The real cost of a redeemed customer is the discount plus the bid.</p>

<p>This is pay per redemption: not pay per click, and not necessarily pay per sale. The billing event is a code applied to a transaction. Lightspeed does not document what happens to the charge if that purchase is later returned or voided.</p>

<h2>What you can promote</h2>

<p>The discount can be a fixed amount or a percentage, applied to the whole catalog or to a product category. Lightspeed is explicit that this promotion "cannot be applied to specific SKUs, brands, or individual products." That makes Local Coupons a store promotion, not a way for a brand to promote its own product at a retailer.</p>

<p>The retailer describes the promotion target in a short phrase, such as "sneakers." Google reviews each promotion, which can take up to three business days. Once a promotion is live it cannot be edited, so changing the discount or the dates means ending it and creating a new one. Lightspeed suggests protecting margin with a threshold just above the average order, such as $50 off $200.</p>

<h2>What the point-of-sale integration measures</h2>

<p>Campaigns are created and managed only in the point-of-sale system. Connecting the app creates a new Google Ads account managed by Lightspeed, and the retailer cannot manage the promotions from that account.</p>

<p>For results, the retailer can see a list of redeemed codes with their redemption dates, and a link to a Google Ads report on the promotion's performance. Lightspeed does not detail what that report contains.</p>

<p>A redemption creates a directly observed commercial event tied to the ad, which is much cleaner than modeled store-visit measurement, but it still does not prove the ad caused the purchase. A shopper who was already heading to the store can claim the coupon on the way in. A redemption shows where an ad met a sale. It does not show how much of that sale the ad created.</p>

<h2>How Local Coupons compares with other Google options</h2>

<p><strong>Search ads billed per click.</strong> The retailer pays when someone clicks, whether or not they ever visit the store.</p>

<p><strong>Store visit conversions.</strong> <a href="https://support.google.com/google-ads/answer/6100636" ${EXT}>Google describes store visits as modeled estimates</a>, built from aggregated, anonymized data and extrapolated to a wider population. Local Coupons counts actual redemptions at the register, but only for shoppers who use the code.</p>

<p><strong><a href="https://support.google.com/merchants/answer/15582436" ${EXT}>Merchant Center local promotions</a>.</strong> These attach store-specific offers to local inventory ads, require a retailer to already run local inventory ads, and are billed at the ads' cost-per-click rates. Shoppers can be asked to show a code in store, but the retailer still pays for the click.</p>

<p><strong>Direct Offers.</strong> This is Google's pilot for showing brand offers in AI Mode, running since January 2026. Google listed local coupons among the offer types it is adding. It has not said whether Local Coupons will appear in AI Mode or how the two are billed together.</p>

<h2>What Google has not documented yet</h2>

<p>Several details are still undocumented by Google:</p>

<ul>
<li>a public help page, eligibility rules, rollout dates and markets;</li>
<li>whether ads appear outside Search, such as in Maps or AI Mode;</li>
<li>how returns, voids and partial refunds affect billing;</li>
<li>whether the bid works as a hard cap or a target average;</li>
<li>what the performance report includes.</li>
</ul>

<h2>Why the billing event matters</h2>

<p>The coupon is not the change. The billing event is.</p>

<p>Charging when a code is redeemed at the register moves local search advertising toward how retail media is sold: against an outcome recorded in the retailer's own system, not a click. Running the campaign from the point-of-sale system follows a pattern I described when <a href="/blog/retail-media-programmatic-buying-openrtb-koddi-teads">retail media started losing its separate buying interface</a>. It also echoes <a href="/blog/google-ucp-analytics-merchant-center-ai-checkout">Google's UCP Analytics</a>, where measurement starts at a transaction event rather than an impression.</p>

<p>For small retailers, the appeal is plain. Many already struggle to be <a href="/blog/ai-shopping-retailer-recommendation-gap-lightspeed-vaer">recommended by AI systems over larger chains</a>, and paying only when a shopper actually shows up at the register lowers the risk of local advertising. The discipline is to treat redemptions as the start of measurement, not the end. Compare redeemed baskets with your normal baskets, and watch how many redeemers were already your customers.</p>

<p>If you only paid when a coupon was redeemed, how many of those customers would have come in anyway?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
