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
  slug: 'amazon-rufus-account-memory',
  title: "Amazon Rufus Now Remembers Every Shopper. Your Listing Data Just Became the Filter.",
  excerpt: "Rufus now has persistent account memory. It tracks past purchases, browsing history, and stated preferences to personalize every recommendation. If your listing data is vague, Rufus skips you.",
  meta_title: 'Amazon Rufus Account Memory: Listing Guide 2026',
  meta_description: "Rufus now remembers shoppers' purchases, preferences, and browsing history. 250M+ users, 60% higher purchase rates. Here's how to optimize your listings for personalized AI recommendations.",
  og_image: '/images/blog/amazon-rufus-account-memory.svg',
  category: 'GEO & SEO',
  tags: ['amazon rufus AI 2026', 'amazon rufus account memory', 'amazon AI shopping assistant', 'rufus personalized recommendations', 'amazon listing optimization for AI'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: "What is Amazon Rufus account memory and how does it work?",
        a: "Rufus account memory is a persistent personalization layer that tracks each shopper's past purchases, browsing history, stated preferences, and even family details like children's ages. When a shopper asks Rufus a question, it uses this stored profile to filter and rank product recommendations. Over 250 million customers have interacted with Rufus, and shoppers who use it are 60% more likely to purchase during that session."
      },
      {
        q: 'How does Rufus account memory affect Amazon sellers?',
        a: "Rufus memory shifts product discovery from keyword matching to persona matching. Instead of matching your listing against search terms, Rufus matches it against a detailed shopper profile. If your listing lacks specificity about who your product is for, when to use it, and why it fits a particular need, Rufus cannot confidently recommend you to the right shopper. Listings with rich attribute data, use-case context, and persona clarity will get recommended more often."
      },
      {
        q: 'What parts of an Amazon listing does Rufus read?',
        a: "Rufus reads product titles, bullet points, product descriptions, A+ content, backend search terms and attributes, customer reviews, and the Q&A section. With account memory, every one of these data sources becomes more important because Rufus cross-references them against individual shopper profiles. Incomplete or vague data in any field reduces your chances of being matched."
      },
      {
        q: 'How should I optimize my Amazon listings for Rufus with account memory?',
        a: "Focus on five areas: audit your titles for persona clarity (who is this product for), rewrite bullet points as answers to the questions shoppers actually ask, complete every backend attribute field, add use-case context to A+ content (when and where to use the product), and check your Q&A section for unanswered questions that Rufus might surface. The goal is to give Rufus enough structured data to confidently match your product to a specific shopper profile."
      }
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['amazon-openai-partnership-sellers', 'walmart-sparky-chatgpt-gemini', 'chatgpt-sephora-retailer-apps'],
    featured_image_alt: 'Amazon Rufus account memory personalized AI shopping recommendations and listing optimization in 2026'
  },
  published_at: '2026-04-02T12:00:00.000Z',
  content: `<p>Amazon just shipped the most consequential Rufus update since launch. Rufus now has persistent account memory. It tracks past purchases, browsing history, stated preferences, and even family details for every shopper. Then it uses that profile to personalize every single recommendation.</p>

<p>This changes the game for sellers. Your listing data is no longer competing against keywords. It's competing against a detailed profile of the actual human on the other side of the screen. If your listing can't match that profile, Rufus skips you.</p>

<div class="callout-box">
  <p class="callout-label">Key Takeaways</p>
  <ul>
    <li><strong>250 million+ customers</strong> have used Rufus, with monthly active users up 149% year over year. This is not an experiment. It's Amazon's primary discovery interface.</li>
    <li><strong>60% higher purchase likelihood</strong> during sessions where shoppers engage with Rufus, making it the highest-converting discovery channel on Amazon.</li>
    <li><strong>$10 billion projected GMV impact</strong> from Rufus recommendations, with Amazon planning a 5x expansion of its Shopping LLM infrastructure.</li>
    <li><strong>Persona matching replaces keyword matching.</strong> Rufus now cross-references your listing data against individual shopper profiles built from purchase history, preferences, and browsing behavior.</li>
  </ul>
</div>

<h2>What Changed with Rufus Account Memory?</h2>

<p>Rufus launched as a conversational search tool. You asked it a question, it scanned listings and reviews, and it gave you an answer. Useful, but essentially a smarter search bar.</p>

<p>Account memory turns Rufus into something fundamentally different: a personalized shopping agent. Here's what it now tracks for each shopper:</p>

<ul>
<li><strong>Past purchases.</strong> Every product a customer has bought on Amazon. Rufus uses this to understand category preferences, price sensitivity, brand loyalty, and replenishment cycles.</li>
<li><strong>Browsing history.</strong> Products viewed, compared, and abandoned. Rufus learns what a shopper considered but didn't buy, and why (based on review patterns and Q&A engagement).</li>
<li><strong>Stated preferences.</strong> When a shopper tells Rufus "I have sensitive skin" or "I prefer organic ingredients," that preference persists across sessions and informs every future recommendation.</li>
<li><strong>Family and context details.</strong> A shopper who mentions a 5-year-old who loves dinosaurs gets that stored. Next time they ask for gift ideas, Rufus filters for age-appropriate, dinosaur-themed products automatically.</li>
</ul>

<p>This data doesn't reset. It compounds. Every interaction makes the profile more detailed, and every recommendation more personalized.</p>

<h2>Why Does Account Memory Change Everything for Sellers?</h2>

<p>Before account memory, Rufus was matching your listing against a query. "Best protein powder" returned results based on listing content, reviews, and relevance signals. The query was the only context.</p>

<p>Now Rufus matches your listing against a query <strong>plus</strong> a shopper profile. "Best protein powder" from a 45-year-old runner who previously bought plant-based supplements returns completely different results than the same query from a 22-year-old weightlifter who buys whey concentrate.</p>

<p>This is the shift from keyword matching to persona matching. And it exposes a critical weakness in how most sellers write listings.</p>

<p>If your protein powder listing says "premium protein powder, great taste, 30 servings," Rufus has no persona data to work with. It can't determine if your product fits the runner or the weightlifter. So it skips you in favor of a competitor whose listing says "plant-based protein isolate for endurance athletes over 40, low-impact on joints, 40g protein per serving."</p>

<p>The second listing gives Rufus three dimensions to match against: WHO (endurance athletes over 40), WHY (low-impact on joints), and WHAT (plant-based isolate, 40g protein). That's three connection points to a shopper profile versus zero.</p>

<h2>How Does This Connect to GEO?</h2>

<p>This maps directly to the <a href="/geo">Generative Engine Optimization</a> framework. Account memory amplifies the importance of every dimension:</p>

<p><strong>WHO becomes critical.</strong> Rufus is now matching buyer personas to listings in real time based on stored preferences. If a shopper's profile says "parent of a 7-year-old," Rufus needs your listing to explicitly state the target age range. "Kids toy" is too vague. "STEM building kit for ages 6-9" is a persona match. The more specific your WHO, the more often Rufus can confidently recommend you to the right shopper.</p>

<p><strong>WHY matters more than ever.</strong> Rufus needs use-case language to connect a shopper's stated need to your product. When someone tells Rufus "I need something for post-workout recovery," your listing needs to contain that exact context. Not just ingredients and features, but the use case those features serve. Robert Hu has seen this pattern consistently across the brands he works with: listings that describe the problem they solve outperform listings that only describe what they contain.</p>

<p><strong>WHAT (complete attributes) prevents missed matches.</strong> Every missing attribute in your listing is a missed match against a shopper's profile. If your product is gluten-free but your listing doesn't say so, Rufus can't recommend you to the shopper who stated a gluten-free preference. The shopper's profile has the data. Your listing doesn't. Match lost.</p>

<h2>What Does Rufus Actually Read on Your Listing?</h2>

<p>Rufus pulls from every text-based data source on your product page. With account memory, each source carries more weight because it's being cross-referenced against a persistent shopper profile:</p>

<ul>
<li><strong>Product titles.</strong> Your title is the first filter. If it doesn't contain persona-relevant language (age group, use case, key differentiator), Rufus may not even pull your listing into the candidate set for personalized recommendations.</li>
<li><strong>Bullet points.</strong> These are where most specific product attributes live. Rufus treats them as structured answers to potential shopper questions. Write bullets as answers, not feature dumps.</li>
<li><strong>A+ content.</strong> Rufus reads the text in your A+ modules. Use-case scenarios, comparison charts, and lifestyle context all feed into persona matching.</li>
<li><strong>Backend attributes.</strong> Material, size, age range, dietary info, compatibility. These structured fields are how Rufus filters at scale. Missing backend attributes mean your product gets filtered out before Rufus even evaluates your visible content.</li>
<li><strong>Customer reviews.</strong> Rufus reads and synthesizes review text. Reviews that mention specific use cases ("perfect for my 6-year-old," "great for marathon training") reinforce persona relevance. You can't control review content directly, but you can influence it by selling a product that delivers on the use cases your listing promises.</li>
<li><strong>Q&A section.</strong> Unanswered questions are missed signals. If a shopper asked "does this work for sensitive skin?" and nobody answered, Rufus has a gap. Answer every question. The Q&A section is training data for Rufus.</li>
</ul>

<h2>Amazon's 5x Shopping LLM Expansion Is Coming</h2>

<p>Amazon has announced plans to expand its Shopping LLM infrastructure by <strong>5x</strong>. That means more queries processed, more personalization depth, and a wider gap between listings that are optimized for AI and listings that are not.</p>

<p>Right now, the difference between an optimized and unoptimized listing might mean getting recommended in 3 out of 10 relevant Rufus conversations versus 1 out of 10. When the infrastructure scales 5x, the optimized listing gets recommended in 15 relevant conversations while the unoptimized one still gets 1. The gap compounds.</p>

<p>This is why Robert Hu keeps telling brands that <a href="/services/product-listing-optimization">listing optimization</a> is not a one-time project. It's an ongoing data quality discipline. Every Rufus update (and <a href="/blog/amazon-openai-partnership-sellers">every AI partnership Amazon enters</a>) raises the bar for what "optimized" means. The brands that treat listing content as living data will compound their advantage. The brands that wrote their bullets in 2022 and haven't touched them since are falling further behind with every update.</p>

<h2>5 Listing Changes to Make This Week</h2>

<p>If you're selling on Amazon (and especially if Rufus is active in your category), here's what to prioritize right now:</p>

<p><strong>1. Audit your titles for persona clarity.</strong> Does your title contain any signal about who this product is for? Not just the product category, but the buyer. "Yoga mat" tells Rufus nothing about persona. "Extra-thick yoga mat for beginners, 72-inch non-slip" tells Rufus this is for beginners who need comfort and stability. That's a persona match waiting to happen.</p>

<p><strong>2. Rewrite bullets as answers to real questions.</strong> Go to your Q&A section and your competitor's Q&A sections. Look at what shoppers actually ask. Then rewrite your bullets to answer those questions directly. "Is this safe for kids under 5?" should be answered in a bullet, not left for a stranger in Q&A.</p>

<p><strong>3. Complete every backend attribute field.</strong> Open your listing in Seller Central and check every attribute field Amazon offers for your category. Material, weight, age range, dietary attributes, compatibility, certification. Every empty field is a missed filter opportunity. Rufus can't match what isn't there.</p>

<p><strong>4. Add use-case context to A+ content.</strong> Your A+ modules should include specific scenarios: when to use the product, where to use it, and what problem it solves. "Use this after your morning run to reduce joint inflammation" gives Rufus a clear use-case anchor. A generic lifestyle image with no text gives Rufus nothing. Think about what shoppers are telling Rufus and then ensure your content answers those questions.</p>

<p><strong>5. Check Q&A for unanswered questions.</strong> Every unanswered question on your listing is a gap in Rufus's understanding of your product. Answer them all. Be specific. And look at competitor Q&As for questions that might apply to your product too, then proactively address those in your bullets or A+ content.</p>

<h2>The Bigger Picture</h2>

<p>Rufus with account memory is not the end state. It's the beginning of a world where every product recommendation on Amazon is personalized to the individual shopper. <a href="/blog/walmart-sparky-chatgpt-gemini">Walmart is building the same with Sparky</a>. <a href="/blog/chatgpt-sephora-retailer-apps">ChatGPT is becoming a shopping platform</a>. Google is rolling out agentic commerce features.</p>

<p>The common thread across all of these is the same: AI needs specific, structured, complete product data to make accurate recommendations. The platforms that deliver bad recommendations lose user trust. So they will systematically favor listings with rich data and deprioritize listings without it.</p>

<p>The old keyword game was about showing up in search results. The new game is about being the product an AI confidently recommends to a specific person. That requires a different kind of listing optimization, one built on specificity, completeness, and semantic clarity.</p>

<p>The brands that figure this out now will compound their advantage with every AI update. The brands that don't will keep wondering why their organic visibility is declining.</p>

<p>If you want to see how your listings score for AI-powered recommendations, <a href="/free-strategy-session">book a free strategy session</a> and we'll audit your top products against the new Rufus criteria together.</p>`
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
