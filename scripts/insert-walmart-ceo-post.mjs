import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { generateOgImage } from './generate-og-image.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Parse .env.local manually
const envFile = readFileSync(join(__dirname, '..', '.env.local'), 'utf-8')
const envVars = {}
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) envVars[match[1].trim()] = match[2].trim()
})

// Use service role key to bypass RLS
const supabase = createClient(
  envVars.NEXT_PUBLIC_SUPABASE_URL,
  envVars.SUPABASE_SERVICE_ROLE_KEY
)

// Generate OG image
const ogImagePath = generateOgImage(
  'walmart-new-ceo-ecommerce-brands',
  'Walmart\'s New CEO Came From E-commerce. Here\'s What That Means for Your Brand.',
  'E-commerce Strategy'
)
console.log('Generated OG image:', ogImagePath)

const post = {
  slug: 'walmart-new-ceo-ecommerce-brands',
  title: 'Walmart\'s New CEO Came From E-commerce. Here\'s What That Means for Your Brand.',
  excerpt: 'Walmart just named its chief e-commerce officer, a former Amazon exec, as the new CEO of Walmart U.S. For brands frustrated with Amazon\'s deteriorating seller experience, this is the clearest signal yet that Walmart is building a marketplace designed by someone who understands sellers from the inside.',
  meta_title: 'Walmart New CEO: What E-commerce Brands Need to Know',
  meta_description: 'Walmart named its e-commerce chief as new US CEO. Robert Hu breaks down why this signals a major opportunity for brands frustrated with Amazon.',
  og_image: ogImagePath,
  category: 'E-commerce Strategy',
  tags: ['Walmart marketplace', 'Amazon vs Walmart', 'e-commerce strategy', 'marketplace diversification', 'David Guggina', 'Walmart e-commerce'],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'Why Does Walmart\'s CEO Choice Matter for Marketplace Sellers?',
        a: 'This is more than a leadership reshuffle. Walmart just put someone with zero store operations experience and nine years at Amazon in charge of the division that generates 69% of the company\'s revenue. That\'s a strategic declaration: Walmart\'s future is digital commerce, and the investments will follow the leadership.'
      },
      {
        q: 'Is Amazon\'s Seller Experience Getting Worse?',
        a: 'Yes, and it\'s not just perception. Amazon has been automating its seller support, and the results have been rough. Sellers report AI-generated responses that misclassify problems, block access to real humans, and leave them in loops of irrelevant replies. New policies are adding pressure too: mandatory prepaid returns, shorter refund windows, and removed buyer-seller messaging during returns.'
      },
      {
        q: 'Should Your Brand Be Selling on Walmart Marketplace Right Now?',
        a: 'If your products fit the Walmart customer and you\'re doing $100K to $2M in revenue, the answer is yes. Walmart is actively courting third-party sellers, the competition per category is still a fraction of Amazon\'s, and the brands that build organic visibility and review history now will have an advantage that latecomers will have to pay a premium to match.'
      }
    ],
    related_services: ['ecommerce-strategy'],
    related_posts: ['costco-digital-ecommerce-strategy', 'openai-openclaw-ai-agents-ecommerce'],
    featured_image_alt: 'Walmart new CEO David Guggina e-commerce background and what it means for marketplace sellers'
  },
  published_at: new Date().toISOString(),
  content: `<p>Walmart just named David Guggina, their chief e-commerce officer and a former Amazon executive, as the new CEO of Walmart U.S. For e-commerce brands (especially those frustrated with Amazon right now), this is the clearest signal yet that Walmart is building a marketplace designed by someone who understands digital sellers from the inside out.</p>

<h2>What Happened</h2>

<p>Effective February 1, 2026, David Guggina became president and CEO of Walmart U.S., the division responsible for 69% of the company's total revenue. He replaced John Furner, who moved up to become CEO of Walmart Inc. after Doug McMillon retired. (<a href="https://corporate.walmart.com/news/2026/01/16/walmart-announces-leadership-changes">Source: Walmart Corporate</a>)</p>

<p>Here's what makes this hire notable: Guggina is the first Walmart U.S. CEO with no store operations or merchandising background. He spent nine years at Amazon before joining Walmart eight years ago, where he led e-commerce, automation, and supply chain. Under his leadership, Walmart built delivery capabilities that reach 95% of U.S. households in under three hours, and U.S. digital sales hit roughly $100 billion per year with 27% growth last quarter. Alongside this, Seth Dallaire was elevated to Chief Growth Officer overseeing Walmart Connect, Walmart+, Data Ventures, and the global Marketplace platform.</p>

<h2>Why Does Walmart's CEO Choice Matter for Marketplace Sellers?</h2>

<p>This is more than a leadership reshuffle. Walmart just put someone with zero store operations experience and nine years at Amazon in charge of the division that generates 69% of the company's revenue. That's a strategic declaration: Walmart's future is digital commerce, and the investments will follow the leadership.</p>

<p>Guggina understands how marketplace ecosystems work because he helped build one at Amazon. He knows what sellers need, what frustrates them, and how platforms can either enable or alienate the brands that sell on them. That perspective at the CEO level is something Walmart has never had before.</p>

<p>The Dallaire promotion matters just as much. Having Walmart Connect (their ad platform), Walmart+ (their membership program), and the global Marketplace all under one growth-focused executive means those pieces will be integrated in ways they haven't been before. <strong>For sellers, this means a more cohesive platform where advertising, fulfillment, and marketplace operations work together</strong> instead of operating as separate initiatives.</p>

<p>I've watched every major marketplace evolution over the past 20+ years. The pattern is consistent: when leadership shifts toward digital, platform investments follow. When Amazon doubled down on marketplace in its early years, the sellers who were already there captured compounding advantages. The same thing is happening at Walmart right now.</p>

<h2>Is Amazon's Seller Experience Getting Worse?</h2>

<p>Yes, and it's not just perception. Amazon has been automating its seller support aggressively, and the results have been rough. Sellers report AI-generated responses that misclassify problems, block access to real humans, and leave them stuck in loops of irrelevant replies. On Amazon's own Seller Central forums, sellers are calling support "a disaster" and "useless."</p>

<p>New policies are adding pressure too. As of February 2026, all U.S. seller-fulfilled orders must use Amazon's prepaid return label program with no exceptions. Refund timelines have been cut from 14 days to 7 days. And buyer-seller messaging during returns has been removed entirely. Each policy individually is manageable. Together, they paint a picture of a platform optimizing for buyer convenience while making sellers absorb more cost and complexity.</p>

<p>When I talk to brand owners, Amazon frustration is at an all-time high. Not because the marketplace is bad (it's still essential), but because the seller experience is deteriorating while fees keep climbing. <strong>Amazon is optimizing for the buyer and for automation. Walmart is investing in seller-friendly leadership.</strong> That contrast is hard to ignore.</p>

<p>The second-order effect most people aren't seeing: Amazon's approach works when they're the only viable marketplace. But as Walmart's platform matures, brands have a real alternative for the first time. The leverage is starting to shift.</p>

<h2>Should Your Brand Be Selling on Walmart Marketplace Right Now?</h2>

<p>If your products fit the Walmart customer and you're doing $100K to $2M in revenue, the answer is yes. The window for early-mover advantage on Walmart Marketplace is still open, but it won't be forever.</p>

<p>Right now, Walmart is actively courting third-party sellers. The competition per category is still a fraction of what you face on Amazon. That means better organic visibility, lower ad costs, and a chance to build review history before the marketplace gets crowded. If you've sold on Amazon for years, you know how expensive it is to compete for visibility on a mature platform. Walmart isn't there yet, and that's exactly why now is the time.</p>

<p>Walmart Connect (their ad platform) is maturing fast under Dallaire's leadership. Early ad spend on growing platforms historically delivers outsized returns because the auction isn't as competitive. I saw this play out when Amazon's ad platform was young, and I'm seeing the same dynamics on Walmart right now. The brands that <a href="/services/ecommerce-strategy">build a multi-marketplace strategy</a> today will capture value that latecomers will have to pay a premium to match.</p>

<h2>What Should E-commerce Brands Do Right Now?</h2>

<ol>
<li><strong>Apply for Walmart Marketplace if you haven't already.</strong> Stop treating it as a "someday" project. The application process takes time, and you want to be building visibility and reviews before your competitors show up. If you're already approved but haven't optimized your presence, that's your first priority.</li>

<li><strong>Audit your Amazon dependency.</strong> What percentage of your revenue comes from a single platform? If it's over 70%, you have a concentration risk that one policy change or account issue could turn into an existential problem. Diversification isn't just smart strategy, it's risk management.</li>

<li><strong>Invest in Walmart-specific listing optimization.</strong> What works on Amazon does not copy and paste to Walmart. The search algorithm is different. The content requirements are different. The customer expectations are different. Treat Walmart as its own platform, not an Amazon afterthought. (Related: <a href="/blog/costco-digital-ecommerce-strategy">how Costco's digital push is creating similar opportunities for optimized brands</a>.)</li>

<li><strong>Watch Walmart Connect closely.</strong> Early ad spend on maturing platforms delivers outsized returns because the auction isn't competitive yet. If you're spending six figures on Amazon PPC, even redirecting 10-15% toward Walmart Connect testing could reveal opportunities with significantly better ROAS.</li>
</ol>

<h2>The Bigger Picture</h2>

<p>The multi-marketplace era is here. Amazon is still essential, and it will remain the largest e-commerce platform for the foreseeable future. But it's no longer sufficient on its own. Walmart's leadership changes, combined with <a href="/blog/openai-openclaw-ai-agents-ecommerce">the rise of AI-powered e-commerce tools</a>, are reshaping what it takes to build a durable brand online. The brands that spread their presence across platforms, optimize for each one individually, and use the competitive tension between marketplaces to their advantage will be the ones that thrive.</p>

<p><strong>Amazon built the playbook for online marketplace selling. Walmart just hired someone who helped write it.</strong></p>

<p>If you're thinking about diversifying beyond Amazon or want help building a Walmart marketplace strategy, <a href="/free-strategy-session">let's talk about what that looks like for your brand</a>.</p>`
}

async function insertPost() {
  // Check if post already exists
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

    if (error) {
      console.error('Error updating post:', error)
      process.exit(1)
    }
    console.log('Post updated successfully:', data[0].id)
  } else {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(post)
      .select()

    if (error) {
      console.error('Error inserting post:', error)
      process.exit(1)
    }
    console.log('Post inserted successfully:', data[0].id)
  }

  console.log('Slug:', post.slug)
  console.log('Title:', post.title)
  console.log('URL: /blog/' + post.slug)
}

insertPost()
