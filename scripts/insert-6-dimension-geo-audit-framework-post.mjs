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
  slug: '6-dimension-geo-audit-framework-amazon-listing',
  title: 'The 6-Dimension GEO Audit Framework: How to Score Your Amazon Listing for AI Visibility',
  excerpt: 'A concrete scoring system for auditing your Amazon listings against how Rufus, Alexa for Shopping, Sparky, and ChatGPT actually read product data. Six dimensions, scored 0-3 each, with weak vs strong examples and priority fixes.',
  meta_title: 'The 6-Dimension GEO Audit Framework: How to Score Your Amazon Listing',
  meta_description: 'A concrete scoring system for auditing your Amazon listings against how Rufus, Alexa for Shopping, Sparky, and ChatGPT actually read product data. Six dimensions, scored 0-3 each, with weak vs strong examples and priority fixes.',
  og_image: '/images/blog/6-dimension-geo-audit-framework-amazon-listing.svg',
  category: 'GEO & SEO',
  tags: ['GEO audit framework', 'how to audit Amazon listing for AI', 'Amazon listing AI visibility audit', '6-dimension GEO framework', 'score Amazon listing for Rufus'],
  status: 'published',
  featured: false,
  read_time_minutes: 11,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'How long does it take to score a listing against the 6-dimension framework?',
        a: "About 30 minutes per SKU once you have the rubrics in front of you. Scoring is straightforward. The work after scoring is what takes time. The two highest-leverage fixes (WHO and AI Retrievability) typically lift a listing's total score by 4 to 6 points in under two hours of rewriting.",
      },
      {
        q: 'Which dimension matters most?',
        a: 'WHO. Persona specificity unlocks every other dimension. A listing that does not name a specific buyer cannot answer when, where, or why for that buyer. Most listings score 0 or 1 on WHO. Fixing that single dimension is the single highest-leverage move in the framework and the fastest path to a competitive total score.',
      },
      {
        q: 'Can I use this framework for Walmart listings too?',
        a: 'Yes. The framework was built around how AI surfaces read product data, not how a specific marketplace serves search results. Walmart Sparky weights structured attributes slightly more heavily than Rufus does, so the WHAT dimension matters slightly more on Walmart. Otherwise the rubrics, scores, and priority order all apply identically.',
      },
      {
        q: 'Does the framework apply to DTC product pages?',
        a: 'Yes, and DTC pages often score worse than Amazon listings because brands write DTC copy for human storytelling and Amazon copy for the algorithm. ChatGPT, Perplexity, and Gemini all read DTC pages when generating shopping recommendations, so the same six dimensions determine whether your DTC product shows up in AI answers.',
      },
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['rufus-alexa-for-shopping-rebrand-marketplace-sellers', 'geo-vs-seo-marketplace-sellers', 'rufus-sparky-ai-revenue-impact'],
    featured_image_alt: 'The 6-dimension GEO audit framework for scoring Amazon listings against AI visibility on Rufus, Alexa for Shopping, Sparky, and ChatGPT',
  },
  published_at: '2026-05-21T12:00:00.000Z',
  content: `<p>Most Amazon sellers know their listings are not optimized for AI. They have read the news on <a href="/blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers">Rufus becoming Alexa for Shopping</a>, Sparky inside ChatGPT, and the agentic commerce wave coming this year. What they do not have is a way to score their own listings against how those AI surfaces actually read product data. Generic best practices tell you to "use natural language" and "fill in attributes." That is not a methodology. That is a vibe.</p>

<p>The 6-dimension <a href="/geo">GEO</a> framework gives you a concrete scoring system. Six dimensions, scored 0-3 each, for a total of 18. Run your top 10 SKUs through it. The lowest scores tell you what to fix first. The dimensions are WHO, WHEN, WHERE, WHY, WHAT, and AI Retrievability. This post walks through each one, with weak vs strong examples, and the priority order for the work.</p>

<h2>Why score listings against AI rather than buyers?</h2>

<p>The old model was to write listings for buyers. Buyers scanned, compared, and clicked. Listings rewarded keyword visibility. That model is decaying. In 2026, <a href="/blog/rufus-sparky-ai-revenue-impact">Rufus drives roughly $10 billion in incremental Amazon sales</a>. Sparky drives 35% higher AOV on Walmart. ChatGPT shopping queries crossed 21% of Walmart's referral traffic. The AI surface is not a future channel. It is a current channel that already evaluates your listing before the human ever sees it.</p>

<p>AI engines do not read listings the way buyers do. They extract structured signals from titles, bullets, attributes, A+ content, reviews, and Q&A. A listing optimized for human keyword scanning is invisible to AI reading natural language for context. The 6-dimension framework scores against the way AI actually reads, not the way buyers scan. It is also the framework that scores correctly across surfaces, because Rufus, Sparky, ChatGPT, Perplexity, and Gemini all evaluate similar signals. Score once. Apply everywhere.</p>

<h2>The 6-dimension framework at a glance</h2>

<p>Each dimension answers a question the AI engine is silently asking when it decides whether to recommend your product. Score each 0-3. Total possible score is 18. Higher scores correlate with stronger AI visibility. A listing in the mid-teens tends to outperform a listing in the single digits. A listing below 8 tends to be invisible to the AI surfaces that drive the fastest-growing share of marketplace revenue.</p>

<ol>
  <li><strong>WHO</strong> - Who is the product for?</li>
  <li><strong>WHEN</strong> - When does it get used?</li>
  <li><strong>WHERE</strong> - Where does it get used?</li>
  <li><strong>WHY</strong> - Why does it solve the buyer's problem?</li>
  <li><strong>WHAT</strong> - What is the product physically?</li>
  <li><strong>AI Retrievability</strong> - How cleanly is the data structured?</li>
</ol>

<p>The next six sections walk through each dimension with the same fictional 32oz insulated water bottle, so you can see what scoring looks like applied to a real product instead of an abstract methodology.</p>

<h2>Dimension 1 - WHO</h2>

<p><strong>What AI extracts:</strong> persona signals from titles, bullets, and review text. Who is this product for in demographics, lifestyle, skill level, sensitivity, or use case identity?</p>

<p><strong>Weak:</strong> "Premium insulated water bottle for active people."</p>

<p><strong>Strong:</strong> "32oz insulated water bottle for runners, hikers, and gym-goers who need cold water for 24 hours and hot drinks for 12."</p>

<p><strong>Scoring rubric:</strong></p>
<ul>
  <li>0: No persona signal anywhere</li>
  <li>1: Generic persona ("active people," "professionals," "anyone")</li>
  <li>2: One specific persona named</li>
  <li>3: 2-3 specific personas with use-context</li>
</ul>

<p><strong>Takeaway:</strong> AI rewards specificity. "Active people" is invisible because every active-lifestyle brand uses it. "Runners and hikers who need 24-hour cold retention" gets matched to a real query.</p>

<h2>Dimension 2 - WHEN</h2>

<p><strong>What AI extracts:</strong> time-of-day, season, occasion, life stage, or use frequency.</p>

<p><strong>Weak:</strong> "Use throughout the day."</p>

<p><strong>Strong:</strong> "Filled in the morning, stays cold through an 8-hour workday or a full day hike. Insulation rated for ice up to 24 hours, hot tea up to 12."</p>

<p><strong>Scoring rubric:</strong></p>
<ul>
  <li>0: No when-signal</li>
  <li>1: Vague timing ("anytime," "all day")</li>
  <li>2: One specific timing or duration</li>
  <li>3: Multiple time-context signals (duration plus use-case timing)</li>
</ul>

<p><strong>Takeaway:</strong> Buyers ask AI when-questions all the time ("what bottle holds ice through a full workday," "best bottle for hot tea during winter commutes"). Listings without when-signals do not match those queries no matter how good the product is.</p>

<h2>Dimension 3 - WHERE</h2>

<p><strong>What AI extracts:</strong> setting context. Home, gym, trail, office, car, kitchen, school.</p>

<p><strong>Weak:</strong> "Fits most cup holders."</p>

<p><strong>Strong:</strong> "Fits standard car cup holders, gym bag side pockets, and most backpack hydration sleeves. 3-inch base diameter, 10-inch height. Carries comfortably in one hand."</p>

<p><strong>Scoring rubric:</strong></p>
<ul>
  <li>0: No where-signal</li>
  <li>1: One generic location ("portable," "fits anywhere")</li>
  <li>2: One specific location with fit detail</li>
  <li>3: Multiple specific locations with measurements or fit constraints</li>
</ul>

<p><strong>Takeaway:</strong> Where-signals are usually missing entirely from listings. Adding one gets you matched to a query nobody else in your category is answering. The cost of adding it is one sentence and a tape measure.</p>

<h2>Dimension 4 - WHY</h2>

<p><strong>What AI extracts:</strong> outcome and problem-solving language. Why does this product solve the buyer's specific issue?</p>

<p><strong>Weak:</strong> "Made with high-quality stainless steel."</p>

<p><strong>Strong:</strong> "Eliminates the warm-water-by-noon problem that plagues single-wall bottles. Double-wall vacuum insulation keeps ice solid through a full marathon or a 9-hour workday without condensation rings on your desk."</p>

<p><strong>Scoring rubric:</strong></p>
<ul>
  <li>0: Features only, no outcome language</li>
  <li>1: One generic outcome ("keeps drinks cold")</li>
  <li>2: One specific outcome with problem context</li>
  <li>3: Multiple outcomes tied to specific buyer problems</li>
</ul>

<p><strong>Takeaway:</strong> Features tell AI what a product is. Outcomes tell AI what problem it solves. AI recommends solutions, not features. The brands that lead with outcomes win the queries that start with "I need help with..."</p>

<h2>Dimension 5 - WHAT</h2>

<p><strong>What AI extracts:</strong> physical product attributes. Materials, size, weight, certifications, compatibility, capacity.</p>

<p><strong>Weak:</strong> "Large size, food-grade material, eco-friendly."</p>

<p><strong>Strong:</strong> "32oz capacity. 18/8 food-grade stainless steel interior. BPA-free, lead-free, phthalate-free. 14oz unfilled weight. Wide-mouth opening (2.5 inches) compatible with standard ice cubes. Dishwasher safe (top rack). Lifetime warranty against insulation failure."</p>

<p><strong>Scoring rubric:</strong></p>
<ul>
  <li>0: Missing critical attributes</li>
  <li>1: 2-3 attributes listed, incomplete</li>
  <li>2: Most attributes listed with specifics</li>
  <li>3: All relevant attributes with measurements, certifications, compatibility, and warranty</li>
</ul>

<p><strong>Takeaway:</strong> Attribute fields are not optional. Every empty attribute is a query AI cannot match you to. Brands at 100% attribute completeness outperform brands at 60% completeness on every filter-constrained query in the category.</p>

<h2>Dimension 6 - AI Retrievability</h2>

<p><strong>What AI extracts:</strong> the structural readability of your listing data. Clean text vs image-locked info, consistent attributes vs contradictions, complete vs partial.</p>

<p><strong>Weak:</strong> A listing where the capacity is only shown in a lifestyle image, the certifications are baked into an A+ content graphic, and the Amazon listing says "32oz" while the DTC product page says "1L."</p>

<p><strong>Strong:</strong> A listing where every spec is in machine-readable text, attribute fields are 100% complete, Product schema validates clean on the DTC product page, and the same data appears identically across Amazon, Walmart, and DTC.</p>

<p><strong>Scoring rubric:</strong></p>
<ul>
  <li>0: Critical info image-locked or contradictory across channels</li>
  <li>1: Most info in text, some image-locked, minor inconsistencies</li>
  <li>2: All info in text, schema present on DTC, mostly consistent</li>
  <li>3: Fully machine-readable, schema validates clean, identical data across all channels</li>
</ul>

<p><strong>Takeaway:</strong> AI cannot recommend what it cannot read confidently. Image-locked data is the most common silent killer of AI visibility. The fix is one afternoon of moving copy out of images into structured text.</p>

<h2>How to score your own listing in 30 minutes</h2>

<p><strong>1. Pull up your top SKU on Amazon.</strong> Read the title and the top 5 bullets. Score WHO and WHEN against the rubrics above. Be honest. If your bullets do not name a specific persona or use-context, you score 0 or 1. Most listings score 1 on WHO. That is the silent gap that explains why your competitor with weaker SEO is getting recommended over you.</p>

<p><strong>2. Open the product detail page.</strong> Score WHERE and WHY based on what is visible on the page, not what you intended when you wrote the copy. If you cannot find where the product gets used or why it solves a specific problem, your buyer cannot either. Score what is there, not what you meant.</p>

<p><strong>3. Click into the Product Information section.</strong> Score WHAT against the attribute completeness rubric. Empty fields are 0. Filled fields with measurements, certifications, and compatibility details are 2 or 3. Most sellers think their attributes are filled because the required ones are filled. The optional ones matter just as much for AI matching.</p>

<p><strong>4. View the page with images turned off</strong> (or use a screen reader). Score AI Retrievability against the structural rubric. Anything you cannot find without images is a problem. Capacity, dimensions, certifications, ingredients, and material details should all be in text. If they are only in an image, AI cannot read them.</p>

<p>Total your scores. Anything below 8 is a triage situation. 8-13 is a fixable gap. 14+ is competitive.</p>

<p>The framework works whether you score yourself or pay for the audit. The scoring is the same. The action plan is the same. The only difference is who does the rewrites.</p>

<h2>Priority order for fixes</h2>

<p>Fix WHO first. Persona signals are the highest-leverage dimension because they unlock every other one. If your listing does not name a specific persona, it cannot answer when, where, why, or what for that persona. Most listings score 0-1 on WHO. Getting to 2 takes one rewrite of the title and top two bullets. Getting to 3 takes a review-mining pass to identify the personas your buyers actually describe themselves as.</p>

<p>Then fix AI Retrievability second. Most listings have image-locked information that AI cannot read. Moving capacity, dimensions, certifications, and material details from images into text fields typically lifts your AI Retrievability score from 0-1 to 2-3 in under an hour. WHO and AI Retrievability fixed first is the fastest path to a competitive total score because they remove the two biggest invisible drags on every other dimension.</p>

<p>After those two, work through WHEN, WHERE, WHY, and WHAT in any order. They all matter. None are as bottlenecked as the first two. This is also the same priority order I would use in a paid audit. The reason WHO and AI Retrievability come first is mathematical, not stylistic. Fixing them removes the ceiling on everything else.</p>

<h2>What the framework looks like applied</h2>

<p>The $499 audit takes this framework and applies it to your specific category, your specific ICP, and your top 3 competitors. The output is a 6-dimension score for your top SKU, the same score for each competitor, side-by-side rewrites of your title and weakest bullets, 10 backend keyword phrases mined from your category review language, and a priority action plan ordered by impact. The framework on this page is the methodology. The audit is the methodology applied. Both produce the same score for the same listing. The audit just does the work for you, and includes the competitive benchmark you cannot easily build on your own without access to the right data sources.</p>

<p>Want to talk through whether the audit fits your situation? <a href="/free-strategy-session">Book a free strategy session</a>.</p>

<h2>Closing</h2>

<p>The 6-dimension framework is how AI engines actually read your listing. Scoring against it is the difference between guessing your way through listing optimization and knowing exactly what to fix. The framework applies to Rufus and Alexa for Shopping. It applies to <a href="/blog/walmart-sparky-chatgpt-gemini">Sparky</a>. It applies to ChatGPT, Perplexity, and Gemini. It applies to <a href="/aeo">the agentic flows being built next</a>. One score. Every surface.</p>

<p>For the broader pillar resource, see <a href="/geo">GEO</a>. For the recent news context, see <a href="/blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers">Rufus becoming Alexa for Shopping</a> and <a href="/blog/geo-vs-seo-marketplace-sellers">the five SEO tactics to stop running on listings AI now reads</a>.</p>

<p>If you want the framework applied to your specific listings, <a href="/free-strategy-session">book a free strategy session</a>. The audit ($499) walks through your top SKU with the same scoring you would do yourself, plus the rewrites and the competitive benchmark you cannot easily build on your own.</p>`,
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
