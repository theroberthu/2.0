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

const post = {
  slug: 'amazon-buy-for-me-scraping-dtc',
  title: "Amazon's 'Buy for Me' AI Is Scraping Small Business Websites Without Permission. Here's What Dual-Channel Sellers Need to Know.",
  excerpt: "Amazon's Buy for Me agent places orders on Shopify stores without seller consent. Broken notifications, chargebacks, and pricing conflicts are hitting small brands. Here's how to check and how to opt out.",
  meta_title: "Amazon Buy for Me Scraping DTC Stores: Seller Guide",
  meta_description: "Amazon's Buy for Me AI is placing orders on Shopify stores without consent. Broken emails, chargebacks, no opt-in. How to check if you're affected and how to opt out.",
  og_image: '/images/blog/amazon-buy-for-me-scraping-dtc.svg',
  category: 'E-commerce Strategy',
  tags: ['amazon buy for me', 'amazon shop direct backlash', 'amazon scraping shopify stores', 'amazon buy for me opt out'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: "What is Amazon Buy for Me and how does it work?",
        a: "Buy for Me is an AI shopping agent built into Amazon's app. When a customer finds a product through Amazon's Shop Direct program, they can click 'Buy for Me' and Amazon's AI navigates to the seller's external website, fills in the checkout form using the customer's Amazon payment info, and completes the purchase. The seller receives an order from an auto-generated buyforme.amazon email address, not the actual customer's email."
      },
      {
        q: "How do I know if Amazon Buy for Me is placing orders on my store?",
        a: "Check your Shopify (or other platform) order history for orders with email addresses ending in @buyforme.amazon.com. Also look for orders with unfamiliar shipping addresses, payment methods you didn't expect, or customer service inquiries about tracking from people who say they ordered through Amazon."
      },
      {
        q: "How do I opt out of Amazon Buy for Me?",
        a: "Email branddirect@amazon.com and request removal from the Shop Direct program. Include your store URL and brand name. There is currently no self-service opt-out dashboard. Amazon has said they will remove stores that request it, but processing times vary."
      },
      {
        q: "Did Amazon get permission to list my store in Buy for Me?",
        a: "In most reported cases, no. Amazon's Shop Direct program scrapes product data from external websites and lists them in Amazon search results without requiring the store owner to opt in. Multiple Shopify sellers have reported discovering their stores were listed without any prior contact from Amazon."
      }
    ],
    related_services: ['ecommerce-strategy'],
    related_posts: ['amazon-shop-direct-sellers', 'amazon-ai-walled-garden'],
    featured_image_alt: "Amazon Buy for Me AI agent scraping Shopify stores without permission and what dual-channel sellers need to know"
  },
  published_at: '2026-04-08T12:00:00.000Z',
  content: `<p>Amazon launched Buy for Me as part of its Shop Direct program. The pitch: Amazon's AI agent shops your DTC website on behalf of Amazon customers, expanding your reach to hundreds of millions of shoppers. The reality: small Shopify sellers are reporting orders they never agreed to, auto-generated email addresses that break their shipping systems, and rising chargebacks from customers they can't communicate with.</p>

<p>If you sell on both Amazon and your own DTC site, this affects you directly. Amazon may already be placing orders on your store without your knowledge or consent.</p>

<div class="callout-box">
  <p class="callout-label">Key Takeaways</p>
  <ul>
    <li><strong>No opt-in required.</strong> Amazon's Buy for Me agent is placing orders on external Shopify stores without seller consent. Some sellers discovered it only after seeing unfamiliar orders.</li>
    <li><strong>Broken customer experience.</strong> Orders come through with auto-generated @buyforme.amazon email addresses. Shipping notifications, order updates, and customer communication all break.</li>
    <li><strong>Chargebacks are rising.</strong> Customers who ordered through Buy for Me contact Amazon for support, not your store. When issues arise, sellers report increased chargeback rates.</li>
    <li><strong>To opt out,</strong> email branddirect@amazon.com with your store URL. There is no self-service dashboard.</li>
  </ul>
</div>

<h2>What Does Amazon Buy for Me Actually Do?</h2>

<p>Buy for Me is an AI shopping agent inside the Amazon app. Here's how it works:</p>

<p>A customer searches for a product on Amazon. <a href="/blog/amazon-shop-direct-sellers">Through the Shop Direct program</a>, Amazon shows products from external DTC stores alongside its marketplace results. When the customer clicks "Buy for Me," Amazon's AI agent navigates to the seller's website, adds the product to cart, fills in checkout using the customer's Amazon payment details, and completes the purchase.</p>

<p>The seller receives an order. But the email address is something like user123@buyforme.amazon.com. The shipping address is real, but the customer's actual email, phone number, and identity are masked by Amazon's proxy layer.</p>

<p>From the seller's perspective, a stranger just placed an order on their website through a process they didn't authorize, using a fake email address that breaks every post-purchase communication flow they've built.</p>

<h2>What Problems Are Sellers Reporting?</h2>

<p>The complaints from small business owners are consistent and specific:</p>

<p><strong>Shipping notifications don't reach the customer.</strong> Your order confirmation and tracking emails go to buyforme.amazon.com, not the actual buyer. The customer expects tracking from Amazon. Your Shopify store sends it to a dead-end email. The customer contacts Amazon support. Amazon tells them to contact you. Nobody has the right information.</p>

<p><strong>Customer service breaks down.</strong> When a customer has an issue with their order, they call Amazon because that's where they made the purchase. Amazon tells them to contact the store. But the store has no way to reach the customer because the only email on file is Amazon's proxy address. The loop has no resolution.</p>

<p><strong>Chargebacks increase.</strong> When customers can't get resolution through Amazon or the store, some dispute the charge with their credit card company. The seller eats the chargeback fee plus the cost of the product. Multiple sellers have reported chargeback rates increasing after Buy for Me orders started appearing.</p>

<p><strong>No consent was given.</strong> This is the core issue. Multiple Shopify sellers have reported that their stores were listed in Amazon's Shop Direct program without any outreach, agreement, or notification from Amazon. They discovered it only after seeing unfamiliar orders with buyforme email addresses.</p>

<h2>The Hypocrisy Problem</h2>

<p>Amazon <a href="/blog/amazon-ai-walled-garden">sued Perplexity for using an AI agent to scrape Amazon's product pages</a> and facilitate purchases outside of Amazon's ecosystem. Amazon argued that Perplexity's Comet agent violated its terms of service by accessing Amazon's data without permission.</p>

<p>Buy for Me does the same thing in reverse. Amazon's AI agent accesses small business websites, scrapes their product data, navigates their checkout flows, and completes transactions, all without the store owner's permission.</p>

<p>When Perplexity does it to Amazon, it's a terms of service violation worth a federal lawsuit. When Amazon does it to independent stores, it's a feature called Buy for Me.</p>

<p>This matters beyond the legal arguments because it reveals Amazon's strategic position. Amazon wants to control product discovery and the transaction layer for all of e-commerce, not just its marketplace. Buy for Me extends Amazon's reach into DTC stores whether those stores want it or not.</p>

<h2>What Does This Mean for Dual-Channel Brands?</h2>

<p>If you're a brand doing $100K to $2M selling on both Amazon and your own Shopify store, Buy for Me creates several specific risks:</p>

<p><strong>Pricing conflicts.</strong> Many brands run different pricing on Amazon versus their DTC site. DTC prices might be higher (to account for no referral fees) or lower (as a direct-to-consumer incentive). Buy for Me lets Amazon customers purchase at whatever price is on your DTC site, bypassing any channel-specific pricing strategy you've set.</p>

<p><strong>Channel cannibalization.</strong> If Amazon surfaces your DTC products in its search results and handles the purchase through Buy for Me, those are DTC sales routed through Amazon's ecosystem. You lose the direct customer relationship, the email address, and the ability to remarket. The sale looks like a DTC order in your Shopify dashboard, but the customer thinks they bought from Amazon.</p>

<p><strong>Customer experience you can't control.</strong> Post-purchase communication, returns, support: all of it breaks when the customer email is a proxy address. Your brand reputation is at stake on an order flow you didn't design and can't manage.</p>

<p><strong>Inventory and fulfillment surprises.</strong> Buy for Me orders hit your DTC fulfillment pipeline. If you manage Amazon FBA and DTC fulfillment separately (which most dual-channel brands do), these unexpected orders can create inventory allocation issues, especially during high-volume periods.</p>

<h2>How to Check If Your Store Is Being Scraped</h2>

<p>Run these checks this week:</p>

<p><strong>1. Search your orders for @buyforme.amazon email addresses.</strong> In Shopify, go to Orders and search for "buyforme" or "amazon" in the email field. Any matches mean Buy for Me is active on your store.</p>

<p><strong>2. Check your server logs for Amazon's AI crawler.</strong> Look for user agents that identify as Amazon's shopping agent. The specific user agent strings vary, but unusual automated traffic patterns on your product and checkout pages are a signal.</p>

<p><strong>3. Search for your products on Amazon.</strong> Open the Amazon app, search for your product category, and look for listings that link to your DTC store instead of an Amazon marketplace listing. If your products appear with a "Buy for Me" option, your store is in the program.</p>

<p><strong>4. Ask your customers.</strong> If you've received customer service inquiries from people who say they ordered through Amazon but the order came through your Shopify store, that's Buy for Me.</p>

<h2>How to Opt Out</h2>

<p>There is currently one path: <strong>email branddirect@amazon.com</strong> and request removal from the Shop Direct program. Include your store URL, brand name, and a clear statement that you do not consent to having your store listed or accessed by Amazon's Buy for Me agent.</p>

<p>There is no self-service dashboard. Amazon has stated they will process removal requests, but sellers report variable processing times. Some were removed within a week. Others are still waiting.</p>

<h2>Should You Actually Opt Out?</h2>

<p>This depends on your specific situation. Here's how Robert Hu thinks about it for the brands he works with:</p>

<p><strong>Opt out if:</strong> You run different pricing on DTC versus Amazon and can't afford channel conflict. Your post-purchase email flows are critical to retention and lifetime value. Your chargeback rate is already near processor thresholds. You have a small support team that can't handle the broken communication loop.</p>

<p><strong>Consider staying in if:</strong> Your DTC and Amazon pricing are identical. You have the operational capacity to handle proxy email orders. The incremental volume is meaningful and the economics work even with higher chargeback risk. You're treating it as an acquisition channel and can absorb the customer experience friction.</p>

<p><strong>For most $100K to $2M brands:</strong> opt out for now. The customer experience risk and chargeback exposure outweigh the incremental volume at this stage. Amazon will likely improve the program over time (better email forwarding, proper seller onboarding, consent flows). When they do, you can re-evaluate. But right now, the implementation is too rough for brands that depend on clean DTC operations.</p>

<p>If you want help evaluating whether Buy for Me orders are affecting your dual-channel economics, or you need to restructure your <a href="/services/ecommerce-strategy">channel strategy</a> around this shift, <a href="/free-strategy-session">book a free strategy session</a> and we'll look at your specific numbers.</p>`
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
