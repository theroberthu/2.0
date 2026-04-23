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
  slug: 'google-geo-partner-manager-job-listing',
  title: "Google Is Hiring for GEO Roles While Telling SEOs It Doesn't Exist. Here's What That Contradiction Tells Sellers.",
  excerpt: "Google just posted a GEO Partner Manager role that mentions GEO seven times, months after Gary Illyes told SEOs that specialized GEO optimization isn't needed. The ads team and the search team disagree. Here's what that signals for marketplace sellers.",
  meta_title: "Google GEO Partner Manager: What It Tells Marketplace Sellers",
  meta_description: "Google posted a GEO Partner Manager job with 7 mentions of Generative Engine Optimization while its search team says GEO isn't real. The best GEO strategy for sellers in 2026.",
  og_image: '/images/blog/google-geo-partner-manager-job-listing.svg',
  category: 'GEO & SEO',
  tags: ['google geo partner manager', 'generative engine optimization google', 'best geo strategy 2026', 'geo vs seo ecommerce'],
  status: 'published',
  featured: false,
  read_time_minutes: 4,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'What is the Google GEO Partner Manager role?',
        a: "Google posted a job listing for a GEO Partner Manager, Performance Solutions inside its ads organization. The listing references Generative Engine Optimization seven times. Core responsibilities include shaping the GEO ecosystem to prioritize Google surfaces, managing relationships with GEO and AEO companies, and building measurement frameworks like Share of Model. This is the ads side of Google publicly recognizing GEO as a working category."
      },
      {
        q: 'Why is Google contradicting itself on GEO?',
        a: "Google's search team, including Gary Illyes, has publicly said standard SEO is sufficient for AI Overviews and AI Mode, and that specialized GEO or AEO optimization is not needed. At the same time, the ads team is hiring a full-time GEO Partner Manager. The two statements come from the same company but different incentives. Search protects Google's current funnel. Ads follow where brands are spending money, which increasingly includes GEO."
      },
      {
        q: 'What is Share of Model and why does it matter?',
        a: "Share of Model is an emerging metric for how often a brand or product appears in AI-generated responses across ChatGPT, Claude, Gemini, Perplexity, and other large language models. Traditional SEO measures Share of Search. Share of Model measures Share of AI Answers. For brands that rely on AI-driven product discovery, Share of Model is becoming as important as rankings were a decade ago."
      },
      {
        q: 'What does this mean for Amazon and Walmart sellers?',
        a: "Google's ads team validating GEO as a category means brands are asking for GEO services, agencies are selling them, and the measurement frameworks are being built. If Google is staffing for this, sellers who ignore GEO will be outcompeted by sellers whose listings are already optimized for AI discovery on Rufus, Sparky, ChatGPT, and Gemini. The contradiction inside Google tells you the direction. The ads team always follows the money."
      }
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['adobe-ai-traffic-393-percent-retail', 'shopify-geo-playbook-marketplace-sellers', 'rufus-sparky-ai-revenue-impact'],
    featured_image_alt: "Google GEO Partner Manager job listing contradiction with Gary Illyes statements about Generative Engine Optimization for marketplace sellers"
  },
  published_at: '2026-04-24T12:00:00.000Z',
  content: `<p>Google just posted a job listing for a <strong>GEO Partner Manager, Performance Solutions</strong>. The role uses "Generative Engine Optimization" twice and references GEO seven times. The job description says the role will shape the GEO ecosystem to prioritize Google surfaces and manage relationships with GEO and AEO companies.</p>

<p>There's a catch. Last July, Google's Gary Illyes publicly said standard SEO is sufficient for AI Overviews and AI Mode, and that specialized GEO optimization is not needed. Both statements are from the same company. Google's search team says GEO isn't real. Google's ads team is hiring someone to manage the GEO ecosystem.</p>

<div class="callout-box">
  <p class="callout-label">Key Takeaways</p>
  <ul>
    <li><strong>7 mentions of GEO</strong> in a single Google ads job listing, including the role title itself. The ads org is treating Generative Engine Optimization as a working category.</li>
    <li><strong>Gary Illyes publicly said GEO isn't needed</strong> just 9 months ago. Google's search team and ads team are now openly contradicting each other.</li>
    <li><strong>"Share of Model" is a real metric</strong> Google is building partner frameworks around. It measures how often a brand appears in AI responses, the way Share of Search measured traditional rankings.</li>
    <li><strong>If Google is staffing for GEO,</strong> the brands that write it off because of Illyes' comments will be outcompeted by brands already optimizing for AI discovery.</li>
  </ul>
</div>

<h2>What Did Google Just Post?</h2>

<p>The listing is inside Google's Performance Solutions ads org. The role is explicitly titled "GEO Partner Manager." The job description calls out specific responsibilities:</p>

<ul>
<li>Shape the GEO ecosystem to prioritize Google surfaces like Gemini and AI Overviews</li>
<li>Manage relationships with GEO and AEO companies and agencies</li>
<li>Develop measurement frameworks for advertiser visibility across AI-generated responses, including emerging metrics like Share of Model</li>
<li>Partner with product teams on ad products that integrate into AI-powered surfaces</li>
</ul>

<p>None of this makes sense if GEO is a made-up category that doesn't require specialized optimization. The ads team is acting like GEO is not just real but already mature enough to support a full-time partner manager role.</p>

<h2>Why Is Google Contradicting Itself?</h2>

<p>This isn't confusion. It's two different incentives.</p>

<p><strong>Google's search team</strong> has every reason to downplay GEO publicly. If brands and agencies accept that AI search requires specialized optimization, that undermines Google's pitch that AI Overviews will just pick up whatever you already do for SEO. Search's incentive is to protect the existing playbook because Google still monetizes most of its revenue through traditional search ads.</p>

<p><strong>Google's ads team</strong> has a different incentive. They follow the money. If brands are spending on GEO agencies, asking Google how AI visibility works, and measuring Share of Model in quarterly reviews, the ads team needs to meet that demand. Staffing a GEO Partner Manager isn't about validating the category philosophically. It's about capturing the budget that's already flowing toward GEO services.</p>

<p>When Google's two orgs publicly disagree like this, pay attention to the one spending money, not the one managing messaging. The ads team is always a year ahead of the search team on where brand budgets actually go.</p>

<h2>What Is "Share of Model" and Why Does It Matter?</h2>

<p>Share of Model measures how often your brand or product appears in AI-generated responses across ChatGPT, Claude, Gemini, Perplexity, and other large language models. It's the AI-era analog to Share of Search.</p>

<p>Traditional SEO measured rankings, impressions, and clicks in Google's search results. Share of Model measures recommendations, citations, and mentions in AI answers. The measurement problem is harder (AI outputs are variable and personalized) but the business question is the same. When a customer asks for a product recommendation in your category, how often does your brand come up?</p>

<p><a href="/blog/adobe-ai-traffic-393-percent-retail">Adobe's Q1 2026 data</a> already showed AI traffic growing 393% and converting 42% better than other channels. The measurement infrastructure is catching up to the traffic reality. Google building Share of Model tooling is the ads side confirming what the Adobe data showed on the traffic side: AI visibility is now a measurable, trackable, buyable thing.</p>

<h2>What Does This Mean for Marketplace Sellers?</h2>

<p>If Google's ads team is building partnerships with GEO companies, several things are true:</p>

<p><strong>Brands are asking about GEO.</strong> Google doesn't staff partner managers for categories that aren't generating inbound questions. The fact that this role exists means enough advertisers are raising GEO as a strategic priority that Google needs a dedicated relationship manager for it.</p>

<p><strong>Agencies are selling GEO services.</strong> "Manage relationships with GEO and AEO companies" requires there to be GEO and AEO companies to manage relationships with. The supply side of the category has matured to the point where Google needs a formal partnership structure.</p>

<p><strong>Measurement is being standardized.</strong> Share of Model frameworks, partner measurement APIs, and ad products that plug into AI surfaces are all mentioned in the listing. The tooling gap that made GEO hard to prove is actively being closed.</p>

<p>For brands doing $100K to $2M on Amazon and Walmart, the signal is clear. The people arguing GEO isn't real are protecting yesterday's playbook. The people betting GEO is real are hiring for it. Amazon Rufus is driving <a href="/blog/rufus-sparky-ai-revenue-impact">$10 billion in incremental sales</a>. Walmart Sparky is now in ChatGPT and Gemini. <a href="/geo">Generative Engine Optimization</a> isn't a theory. It's the layer where the next decade of product discovery is being decided.</p>

<p>The sellers who write off GEO because Google's search team downplays it are going to be outcompeted by sellers whose <a href="/services/product-listing-optimization">listings are already optimized for AI discovery</a>. The gap is measurable today. It gets harder to close every quarter.</p>

<p>If you want help translating the GEO signal into concrete optimizations for your Amazon and Walmart listings, <a href="/free-strategy-session">book a free strategy session</a> and we'll walk through your top products together.</p>`
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
