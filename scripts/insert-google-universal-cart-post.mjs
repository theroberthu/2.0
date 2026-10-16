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

const DESCRIPTION = "Google Universal Cart saves products from many retailers in Search and Gemini. How its two checkout paths work, what UCP does and what merchants still own."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'google-universal-cart-retailers-ucp-checkout',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Google Universal Cart: How It Works and What Retailers Still Own',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Google Universal Cart: How Checkout and Cart Transfer Work',
  excerpt: "Google Universal Cart launched in the U.S. on October 15, 2026, in Search and the Gemini app. It saves products from different retailers in one cart, but checkout still happens merchant by merchant: Google Pay on Google for participating merchants, or a one-way transfer to the merchant's own cart. Google holds the shopping state; the retailer stays Merchant of Record and keeps the transaction.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/google-universal-cart-retailers-ucp-checkout.svg',
  category: 'E-commerce Strategy',
  tags: ['Google', 'Universal Cart', 'Universal Commerce Protocol', 'agentic checkout', 'Merchant Center', 'Google Pay'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['ai-checkout-interface-commerce-infrastructure', 'google-ucp-analytics-merchant-center-ai-checkout', 'agentic-commerce-platform-default-shopify-google'],
    featured_image_alt: 'A shopping cart holding items from several retailers on Google, with each purchase completed by the merchant',
  },
  published_at: new Date().toISOString(),
  content: `<p>Google's Universal Cart <a href="https://blog.google/products-and-platforms/products/shopping/universal-cart-launch/" ${EXT}>launched in the U.S. on October 15, 2026</a>, in Google Search and the Gemini app. A shopper can save products from different retailers in one cart, get alerts on price drops and restocks, then pay with Google Pay on Google or move the items to the retailer's own cart.</p>

<p>The easy reading is that Google is becoming the store. The documentation supports a narrower one: Universal Cart separates ownership of the shopping state from ownership of the transaction. Google holds the list of what a shopper is considering. The retailer still sells the product.</p>

<h2>What Google Universal Cart is</h2>

<p>Google's launch post describes four things the cart does:</p>

<ul>
<li>saves products from multiple retailers in one place, across Google's shopping surfaces;</li>
<li>sends notifications about price drops and restocks, drawing on the Shopping Graph's more than 60 billion product listings;</li>
<li>shows relevant promo codes and, because it is built on Google Wallet, suggests which of the shopper's cards to use;</li>
<li>lets the shopper check out with Google Pay or transfer items to the merchant's site.</li>
</ul>

<p>Google frames it as a shopping tool, not an agent acting for the shopper. The shopper adds items and decides when to buy.</p>

<h2>Where Universal Cart is available</h2>

<p>At launch, Universal Cart is U.S. only, in Google Search, including AI Mode, and the Gemini app. Google's <a href="https://support.google.com/gemini/answer/17085590?hl=en" ${EXT}>help page on managing the cart</a> notes that Gemini and AI Mode have limited access to it, so they may not list its contents or order updates inside a chat.</p>

<p>When Google <a href="https://blog.google/products-and-platforms/products/shopping/google-shopping-cart/" ${EXT}>announced the cart at I/O in May</a>, it said YouTube and Gmail would follow. The October launch post does not mention either, so neither should be treated as live.</p>

<h2>Can it hold items from different retailers?</h2>

<p>Yes, and products in the cart are grouped by merchant. But "universal" describes the cart, not the payment. A native checkout session is created with one merchant's system and can hold several of that merchant's items. Google documents no payment covering several retailers, so a cart with items from three stores means up to three separate purchases.</p>

<p>Google does not say which products can be saved, or what checkout looks like for a merchant that supports neither path.</p>

<h2>How checkout works: two paths</h2>

<p><strong>Checkout on Google.</strong> For participating merchants, the shopper pays with Google Pay inside Google's interface. This is <a href="https://developers.google.com/merchant/ucp/guides/overview/native-checkout" ${EXT}>native checkout through the Universal Commerce Protocol</a>: Google opens a checkout session with the merchant's system, and the merchant returns prices, taxes and shipping, then charges the payment through its own payment provider. It is limited to select merchants in an <a href="https://developers.google.com/merchant/ucp/guides/tools/merchant-center/overview" ${EXT}>early access program</a>, and only products marked eligible in the feed show the Buy button. Google's <a href="https://developers.google.com/merchant/ucp/guides/overview/merchant-center" ${EXT}>Merchant Center requirements</a> exclude subscriptions, personalized goods, pre-orders, final-sale items and age-restricted products.</p>

<p><strong>Transfer to the merchant's cart.</strong> For other merchants, Google fills a cart on the merchant's own site and the shopper finishes there. The <a href="https://developers.google.com/merchant/ucp/guides/overview/cart-overview" ${EXT}>Cart API overview</a> explains the mechanics. Google holds items as the shopper adds them, without calling the merchant. When the shopper clicks to transfer, Google sends one request with every item, and the merchant returns a link to a prefilled cart. The transfer is one-way: updating, deleting or syncing the cart is not supported in this first release. Merchants can offer transfer without building native checkout.</p>

<h2>What is UCP, and how is it different from Universal Cart?</h2>

<p>UCP is the plumbing and Universal Cart is the product. The Universal Commerce Protocol is an open standard Google co-developed with retailers that defines how Google's surfaces talk to a merchant's systems: opening a checkout, transferring a cart, linking an account, reporting an order. A merchant integrates with UCP. A shopper uses Universal Cart.</p>

<p>Many merchants may already be connected. Google lists many Shopify merchants among participants, and Shopify turns on direct checkout for Google's AI surfaces by default for eligible stores, as I covered when <a href="/blog/agentic-commerce-platform-default-shopify-google">agentic commerce became a platform default</a>.</p>

<h2>Does Google become the Merchant of Record?</h2>

<p>No. Google's launch post says the merchant remains the seller of record on both paths, and that confirmations and customer support come from the merchant. <a href="https://developers.google.com/merchant/ucp/faq" ${EXT}>The UCP FAQ for developers</a> states it directly: "you remain the Merchant of Record."</p>

<p>In checkout on Google, the merchant's terms of sale apply. It checks inventory in real time, validates shipping addresses, and must publish a return policy and support contacts in Merchant Center.</p>

<h2>Does the retailer keep customer data?</h2>

<p>For a completed purchase, yes. In native checkout, Google passes the buyer's name, email, phone and shipping details to the merchant, and Google's FAQ says the merchant owns the transaction data and the customer relationship. After a cart transfer, the merchant collects data at its own checkout as usual.</p>

<p>Two qualifications matter. Checkout on Google is guest checkout unless the merchant builds identity linking, so loyalty accounts do not connect by default. And an option for shoppers to opt in to marketing during checkout is, per the FAQ, still planned.</p>

<p>What the merchant does not get is the cart. Saved items live in the shopper's Google Wallet, and Google's UCP reporting counts checkout activity and cart transfers, not products saved. A retailer cannot see that its jacket has sat in a shopper's cart for two weeks next to a competitor's.</p>

<h2>How order tracking works</h2>

<p>After a purchase, shoppers can follow orders in a My Orders tab, but only when the merchant shares order data. For native checkout, the <a href="https://developers.google.com/merchant/ucp/guides/overview/order-lifecycle" ${EXT}>order lifecycle guide</a> requires merchants to send order created, shipped and delivered updates, with tracking, to Google. For purchases finished on a merchant's site, Google says some merchants do not share data back.</p>

<p>Google keeps My Orders data until the user deletes it, and the merchant's retention policies govern its copy. After the purchase, both hold a record of the order.</p>

<h2>What Google does not disclose</h2>

<p>Google's launch post, help page and the developer documentation I reviewed do not mention merchant fees, commissions or a revenue model. Google's FAQ says choosing native checkout does not change how offers rank, but Google has not said whether saved items affect ads or ranking, or given dates for YouTube, Gmail or two-way cart sync.</p>

<h2>What Universal Cart means for ecommerce brands</h2>

<p>A meaningful part of late-stage consideration used to become visible only after the shopper reached the retailer's own cart or wish list. For Universal Cart shoppers, it sits in Google Wallet, where Google tracks price changes, surfaces relevant promo codes, and can suggest which saved card to use. The retailer receives the cart at the end.</p>

<p>That is not a takeover. The merchant still sets prices, holds inventory, takes the payment and owns the order, the division of labor I described in <a href="/blog/ai-checkout-interface-commerce-infrastructure">what the retailer still owns when checkout moves</a>. What moves is the early signal: what a shopper is weighing, how long they hesitate and which promotion finally moved them.</p>

<p>A few practical steps follow:</p>

<ul>
<li>Decide whether you want native checkout, cart transfer or both. <a href="/ai-commerce-2027">AI Commerce 2027</a> treats these as separate postures with different tradeoffs.</li>
<li>If you offer transfer, make the landing cart fast and complete. Google recommends answering the transfer request in under a second.</li>
<li>Reconcile transfers against completed orders on your site, because <a href="/blog/google-ucp-analytics-merchant-center-ai-checkout">Google's UCP reporting counts transfers, not the purchases that follow</a>.</li>
<li>Keep prices and availability in Merchant Center accurate, since changes now trigger alerts in someone else's interface.</li>
</ul>

<p>If a shopper's cart lives with Google until the moment they buy, what does your site need to do in the minute after the transfer arrives?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
