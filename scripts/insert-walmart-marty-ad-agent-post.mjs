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

const ogImagePath = '/images/blog/walmart-marty-ad-agent.svg'

const post = {
  slug: 'walmart-marty-ad-agent',
  title: "Walmart's 'Marty' Ad Agent Is Coming for Your Sponsored Search Campaigns. Here's What Dual-Channel Brands Need to Know.",
  excerpt: "Walmart launched Marty, an agentic AI advertising assistant for Sponsored Search. For brands running ads on both Amazon and Walmart, this changes how you allocate spend, structure campaigns, and measure performance.",
  meta_title: "Walmart Marty AI Ad Agent: What Sellers Need to Know | Robert Hu",
  meta_description: "Walmart's Marty AI agent builds, optimizes, and troubleshoots Sponsored Search campaigns. What dual-channel Amazon and Walmart brands need to know in 2026.",
  og_image: ogImagePath,
  category: 'Digital Marketing',
  tags: ['walmart marty ad agent', 'walmart connect ai advertising', 'walmart vs amazon retail media', 'walmart sponsored search ai 2026'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'What is Walmart Marty and how does it work?',
        a: "Marty is Walmart Connect's agentic AI advertising assistant, currently in beta for Sponsored Search campaigns and rolling out to all Sponsored Search advertisers in the first half of 2026. It builds, optimizes, and troubleshoots campaigns through conversational chat. It handles bidding, keyword management, billing questions, and generates research reports including share of voice and category benchmarks."
      },
      {
        q: "How does Walmart Marty compare to Amazon's AI ad tools?",
        a: "Amazon launched its own agentic AI ad capabilities at unBoxed in late 2024, focused on campaign creation and creative generation. Marty is more focused on campaign management and strategic research, offering four types of reports and handling real-time optimization. Both platforms are moving toward AI-managed campaigns, but with different strengths. Amazon's tools lean toward creative automation, while Marty leans toward operational intelligence."
      },
      {
        q: 'Can Marty manage Walmart Sponsored Products and Display ads?',
        a: 'Not yet. Marty is currently limited to Sponsored Search campaigns. Walmart has indicated plans to expand its capabilities to other ad formats, but no timeline has been confirmed. For now, Sponsored Products and Display campaigns still require manual management or third-party tools.'
      },
      {
        q: 'Should I shift ad budget from Amazon to Walmart Connect?',
        a: "Not blindly, but the math is worth evaluating. Walmart Connect grew 33% in the US in Q3 2025 versus Amazon Ads at 24%. CPCs on Walmart are generally lower with less auction competition. The right approach is to test incremental budget on Walmart while maintaining Amazon performance, then shift allocation based on ROAS data from both platforms."
      }
    ],
    related_services: ['ecommerce-strategy'],
    related_posts: ['walmart-sparky-35-percent-higher-aov', 'walmart-sparky-chatgpt-gemini', 'amazon-advertising-strategy-2026'],
    featured_image_alt: 'Walmart Marty AI advertising agent for Sponsored Search campaigns and what it means for dual-channel e-commerce brands'
  },
  published_at: '2026-03-22T14:00:00.000Z',
  content: `<p>Walmart just gave its advertising platform an AI agent. It's called Marty, it's in beta for Sponsored Search, and it's rolling out to all Sponsored Search advertisers in the first half of 2026.</p>

<p>This is not a chatbot that answers FAQ questions about your ad account. Marty builds campaigns, adjusts bids, manages keywords, troubleshoots billing issues, and generates research reports through conversational chat. <strong>97% of user queries are unique</strong>, which tells you advertisers are using it for real campaign work, not canned questions.</p>

<p>For brands running ads on both Amazon and Walmart, the implications are significant. Both retail media giants are now building AI agents to manage your ad spend. How you respond will determine whether AI works for you or against you.</p>

<div class="callout-box">
  <p class="callout-label">Key Takeaways</p>
  <ul>
    <li><strong>$4.4 billion</strong> in Walmart Connect revenue in 2024, with US ad sales growing 33% in Q3 2025 (versus Amazon Ads at 24%).</li>
    <li><strong>97% unique queries</strong> to Marty, showing advertisers are using the AI agent for real, personalized campaign management.</li>
    <li><strong>81% of Sparky users</strong> check product availability before buying, and Walmart is testing sponsored ads inside its AI shopping assistant.</li>
    <li><strong>Dual-channel brands</strong> now face AI-managed ad tools on both Amazon and Walmart, requiring a new approach to cross-platform strategy.</li>
  </ul>
</div>

<h2>What Does Marty Actually Do (and Not Do Yet)?</h2>

<p>Marty is an agentic AI assistant built into the Walmart Connect advertising platform. It operates through conversational chat, meaning you describe what you want and Marty executes it.</p>

<p>Here's what it handles today:</p>

<ul>
<li><strong>Campaign creation and optimization.</strong> Tell Marty your goals, budget, and target products. It builds the campaign structure, sets bids, and selects keywords.</li>
<li><strong>Bid and keyword management.</strong> Marty adjusts bids in real time and recommends keyword additions or removals based on performance data.</li>
<li><strong>Billing and account troubleshooting.</strong> Instead of digging through help docs or waiting for support tickets, you ask Marty and get immediate answers.</li>
<li><strong>Research reports.</strong> Marty generates four types of reports: share of voice, category benchmarks, competitive positioning, and performance summaries. This is where it gets interesting for strategic decision-making.</li>
</ul>

<p>What it does not do yet: Marty is limited to Sponsored Search. It does not manage Sponsored Products, Display, or video campaigns. Walmart has signaled expansion plans but hasn't committed to a timeline.</p>

<h2>How Does Marty Compare to Amazon's Agentic Ad Tools?</h2>

<p>Amazon launched its own AI-powered advertising tools at unBoxed in late 2024. The two platforms are solving similar problems with different approaches.</p>

<p><strong>Amazon's AI ad tools</strong> lean heavily toward creative automation. They generate ad copy, create product images, build video ads from a single product image, and optimize campaign structure. Amazon is betting that the creative bottleneck is what slows advertisers down.</p>

<p><strong>Walmart's Marty</strong> leans toward operational intelligence. The share of voice reports, category benchmarks, and conversational campaign management suggest Walmart sees the bottleneck as strategic decision-making, not creative production.</p>

<p>Both are right. And for dual-channel brands, this means you're now operating in an environment where AI is managing meaningful parts of your ad campaigns on both platforms. The question is no longer whether to use AI for advertising. It's how to maintain strategic control when the platforms themselves are pushing you toward algorithmic management.</p>

<h2>Why Sponsored Ads Inside Sparky Changes Discovery</h2>

<p>The bigger story here isn't Marty alone. It's what happens when you combine Marty's campaign management with Walmart's AI shopping assistant, Sparky.</p>

<p>Walmart is testing sponsored ads inside Sparky. <strong>81% of Sparky users check product availability before buying</strong>, which means they're high-intent shoppers already. <a href="/blog/walmart-sparky-35-percent-higher-aov">Sparky drives 35% higher average order values</a> compared to standard search. And Sparky is now <a href="/blog/walmart-sparky-chatgpt-gemini">integrated into ChatGPT and Gemini</a>, extending Walmart's ad surfaces beyond walmart.com entirely.</p>

<p>This is the convergence that matters: AI agents are becoming the discovery layer for shoppers, and the ad platforms are building AI agents to help brands show up inside that discovery layer. It's AI all the way down.</p>

<p>For brands, the practical implication is that your advertising strategy and your <a href="/geo">generative engine optimization strategy</a> are converging. The same product data quality that helps you rank in organic AI recommendations also determines how effectively AI ad tools can promote your products. Marty can only work with the product content you give it.</p>

<h2>The Retail Media Math: Walmart Connect vs. Amazon Ads</h2>

<p>The numbers tell a clear story about momentum:</p>

<ul>
<li><strong>Walmart Connect:</strong> $4.4 billion in 2024 revenue. US ad sales grew 33% in Q3 2025. Lower CPCs in most categories. Less auction competition. Growing advertiser base but still far less saturated than Amazon.</li>
<li><strong>Amazon Ads:</strong> Over $50 billion in annual revenue. Growing at 24% in Q3 2025. Mature auction dynamics with higher CPCs. Significantly more competition per keyword. More ad formats and measurement tools available.</li>
</ul>

<p>Amazon's ad platform is 10x larger, but Walmart's is growing faster. For a brand doing $100K to $2M, the practical difference is that a dollar spent on Walmart Connect often goes further than a dollar spent on Amazon Ads because of lower competition. That gap is narrowing as more advertisers join Walmart, which is exactly why moving now matters.</p>

<p>The brands that establish campaign history, accumulate performance data, and build advertiser reputation on Walmart Connect today will have structural advantages in auction dynamics as the platform scales. Robert Hu has seen this pattern repeat across every emerging ad platform: early movers lock in efficiency that latecomers can't replicate at the same cost.</p>

<h2>What Should You Do About It?</h2>

<p>If you're running ads on Amazon and either selling or considering selling on Walmart, here are the moves that matter:</p>

<p><strong>1. Get into the Marty beta or prepare for the rollout.</strong> Marty is rolling out to all Sponsored Search advertisers in H1 2026. When it arrives, test it on a subset of campaigns. Let it handle bid optimization and keyword management on a controlled budget. Evaluate whether its recommendations align with your strategy before expanding its role.</p>

<p><strong>2. Audit your product data for AI readability.</strong> Both Marty and Amazon's AI tools are only as good as the product content they work with. If your listings have thin descriptions, missing attributes, or inconsistent data across platforms, AI ad tools will underperform. Fix the foundation before layering automation on top. This is where <a href="/services/ecommerce-strategy">a clear e-commerce strategy</a> pays for itself.</p>

<p><strong>3. Test incremental Walmart Connect budget.</strong> Don't shift budget away from a working Amazon campaign. Add incremental spend on Walmart Sponsored Search for your top 5 to 10 SKUs. Use the first 60 to 90 days for data collection, not ROAS optimization. You need category-specific CPC benchmarks before you can make informed allocation decisions.</p>

<p><strong>4. Track AI-surface performance separately.</strong> As Walmart tests sponsored ads inside Sparky and Amazon expands Rufus-influenced shopping, your ad performance will increasingly be driven by AI surfaces rather than traditional keyword search. Build reporting that separates AI-influenced conversions from standard search conversions. The performance profiles are different, and blending them will obscure the signal.</p>

<p><strong>5. Maintain strategic control.</strong> AI ad agents are optimization tools, not strategy tools. They will maximize the objectives you give them. If your objective is wrong, the AI will efficiently pursue the wrong goal. Keep the strategic layer (budget allocation, target ROAS, channel mix, product prioritization) with a human. Let the AI handle execution within those constraints.</p>

<h2>The Bigger Picture</h2>

<p>Amazon and Walmart are both building toward the same future: AI-managed advertising on AI-driven shopping surfaces. The brands that understand how to work with these tools, while maintaining strategic control over their cross-platform ad spend, will outperform brands that either ignore the shift or hand over the keys entirely.</p>

<p>Marty is just the latest signal. The retail media landscape is being rebuilt around AI, and dual-channel brands that adapt their approach now will have a meaningful advantage by the time these tools hit full scale.</p>

<p>If you want to evaluate your cross-platform advertising strategy and figure out where AI tools fit into your <a href="/blog/amazon-advertising-strategy-2026">Amazon</a> and Walmart ad approach, <a href="/free-strategy-session">book a free strategy session</a> and we'll walk through it together.</p>`
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
