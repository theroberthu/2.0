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
  slug: 'geo-vs-seo-marketplace-sellers',
  title: "GEO vs SEO: What Marketplace Sellers Need to Stop Doing in 2026",
  excerpt: "GEO and SEO are not in conflict, but five SEO tactics most marketplace sellers still run are actively hurting their AI visibility. Here's what to stop doing.",
  meta_title: "GEO vs SEO: What Marketplace Sellers Need to Stop Doing in 2026",
  meta_description: "GEO and SEO are not in conflict, but five SEO tactics most marketplace sellers still run are actively hurting their AI visibility. Here's what to stop doing.",
  og_image: '/images/blog/geo-vs-seo-marketplace-sellers.svg',
  category: 'GEO & SEO',
  tags: ['GEO vs SEO', 'generative engine optimization vs SEO', 'GEO vs SEO ecommerce', 'AI search optimization vs SEO', 'GEO for marketplace sellers'],
  status: 'published',
  featured: false,
  read_time_minutes: 9,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'Does GEO replace SEO?',
        a: "No. GEO sits on top of SEO. Your Google rankings, your Amazon organic search position, and your DTC site indexing all still depend on traditional SEO work. GEO addresses what happens when buyers shift from typing keywords into Google to asking ChatGPT, Rufus, or Sparky. The brands that win in 2026 are running both playbooks.",
      },
      {
        q: 'Should I rewrite my Amazon listings for GEO right now?',
        a: 'Start with your top 10 SKUs. Audit titles, bullets, and backend attributes against the WHO/WHEN/WHERE/WHY framework. Rewrite the worst-performing dimension first. Most brands find that titles and backend attributes return the fastest gains because Rufus weights both heavily and the rewrites compound across all AI surfaces.',
      },
      {
        q: 'How do I know if my SEO tactics are hurting my GEO performance?',
        a: 'Test it directly. Ask Rufus, ChatGPT, and Perplexity for category recommendations that match your product. If your brand never surfaces, your listings are not telling the AI engines what they need to know to recommend you. Then compare to your Amazon search rank for the same keywords. A meaningful gap between SEO rank and AI recommendation rate is the signal.',
      },
      {
        q: "What's the easiest GEO change I can make this week?",
        a: "Rewrite your top SKU's title from a keyword string into a natural-language sentence that names the buyer and the use case. That single change tends to compound fastest because Rufus and Sparky both treat titles as the primary signal of what the product is and who it serves.",
      },
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['rufus-sparky-ai-revenue-impact', 'amazon-rufus-optimization', 'walmart-sparky-chatgpt-gemini'],
    featured_image_alt: 'GEO vs SEO comparison with five outdated SEO tactics crossed out for marketplace sellers in 2026',
  },
  published_at: '2026-05-04T12:00:00.000Z',
  content: `<p>Walmart's CEO said in February that Sparky users have <strong>35% higher average order values</strong> than non-Sparky shoppers. ChatGPT now drives roughly <strong>21% of Walmart's referral traffic</strong>. Amazon Rufus handles <strong>13% or more of Amazon searches</strong> and growing. None of these surfaces reward the SEO tactics that built most marketplace listings.</p>

<p><a href="/geo">Generative Engine Optimization</a> and SEO are not in conflict. They share source content. They share authority signals. They even share some of the underlying ranking factors. But the SEO playbook actively undermines the GEO playbook in five specific places, and most marketplace sellers are still running the wrong one on listings that AI engines now read.</p>

<p>The reading engine changed. The buyer's prompt changed. The optimization should change with it. The numbers from <a href="/blog/rufus-sparky-ai-revenue-impact">Rufus driving $10 billion in incremental Amazon sales and Sparky lifting AOVs 35%</a> are not directional anymore. They are definitive. The brands getting recommended by AI are pulling away. The brands still optimizing for the SEO era are stuck.</p>

<p>Here's the harder part. The biggest GEO wins for most $500K to $5M brands do not come from doing more. They come from stopping the SEO tactics that AI engines no longer reward. Every paragraph below identifies one specific SEO tactic to abandon and the GEO replacement that takes its place.</p>

<h2>What's the actual difference between GEO and SEO?</h2>

<p>SEO optimizes for keyword-matching crawlers that rank pages on a SERP. The reading engine is Googlebot and its peers. The output is a ranked list of links. The buyer evaluates the list, clicks one or two results, and decides. Optimization rewards keyword relevance, link authority, on-page signals, and indexability. The playbook is well understood, the metrics are mature, and the tactics have not meaningfully changed in a decade.</p>

<p>GEO optimizes for language models that synthesize answers and recommendations from structured data, reviews, and entity signals. The reading engines are Amazon Rufus, Walmart Sparky, ChatGPT, Claude, Gemini, and Perplexity. The output is a curated short list of products with reasoning. The buyer reads the recommendation and acts. Optimization rewards specificity, attribute completeness, persona language, and entity clarity. The metrics are still maturing, the tactics are early, and the brands willing to ship before the playbook is canonical have an outsized opening.</p>

<p>Most marketplace listings were written for the SEO era. They are full of keyword-stuffed titles, comma-separated backend keyword strings, and bullets engineered for keyword density. The reading engines changed. The listings did not. That gap is what the next five sections address.</p>

<h2>Five SEO tactics that hurt your AI visibility</h2>

<h3>Stop stuffing keywords into titles. Start writing titles that answer who and what.</h3>

<p>The old Amazon playbook treated the product title as a keyword container. Cram every searchable phrase into the 200-character limit, separated by spaces, with capitalization tuned to keyword density. A title like "Best Stainless Steel Water Bottle 32oz Insulated Coffee Travel Mug Leak Proof BPA Free Eco Friendly" scored well on the old A9 algorithm because every searchable token was present and indexable.</p>

<p>Rufus and Sparky read titles as natural language. A keyword string is parsed as low-context noise. There is no buyer in that string, no use case, no reason to recommend it over a competitor's listing. When a shopper asks Sparky "what's a good water bottle for my gym bag," the AI is matching against context, not keyword overlap. Listings written for keyword density lose this match by default because the data has no context to extract.</p>

<p>The GEO replacement is a sentence-style title that names the buyer and the use case. "32oz Insulated Stainless Steel Water Bottle for All-Day Hydration at Work or the Gym" gives Rufus the WHO (active commuters, gym users), the WHAT (32oz insulated stainless steel), and an implied WHEN (all-day, work, gym). That match is what gets recommended. Keyword strings are what gets passed over.</p>

<h3>Stop optimizing bullet points for keyword density. Start writing bullets that answer when, where, and why.</h3>

<p>The old playbook capitalized the first phrase of each bullet to signal SEO relevance. "PREMIUM CONSTRUCTION: Made with 304-grade stainless steel..." was the standard format. Every bullet started with a capitalized keyword phrase because that is what the SEO-era ranking systems treated as the bullet's topic.</p>

<p>AI engines now extract context from full sentences. Capitalized keyword phrases at the start of bullets used to signal SEO relevance. They now signal incomplete data. Rufus reads the entire bullet as a context block. If the bullet does not describe a use case, a temporal context, or a buyer scenario, it does not feed any signal Rufus can match against a conversational query.</p>

<p>The GEO replacement is bullets that read as full sentences and describe specific use cases. "Designed for runners with knee pain who train on hard surfaces three to five times per week" tells the AI exactly who the product is for, when they use it, and why it solves their problem. That is the format AI engines reward. The capitalized keyword bullet is the format AI engines have stopped rewarding, even if the SERP rank chart still tells you it works.</p>

<h3>Stop using comma-separated backend keywords. Start writing backend attributes as natural-language phrases.</h3>

<p>The old playbook for Amazon backend search terms was a comma-separated list of keywords designed to capture every long-tail variation a shopper might type. "Knee pain running shoes hard surface, marathon training, plantar fasciitis, overpronation, neutral arch" was a typical entry. The objective was coverage, not coherence.</p>

<p>Rufus and <a href="/blog/walmart-sparky-chatgpt-gemini">Sparky now read backend attributes as natural-language context</a>, not as keyword lists. Comma-separated lists are parsed as fragments. Fragments do not get matched as recommendation signals. The backend field that used to be invisible plumbing for the SEO ranker is now the first place Rufus looks for the structured context that distinguishes one running shoe from another.</p>

<p>The GEO replacement is a natural-language phrase that uses the same vocabulary a shopper would use. "Designed for marathon trainers with knee pain and plantar fasciitis who need supportive cushioning on hard surfaces" gives the AI a complete buyer profile and use case. The keyword list version covers the same surface area but with no coherent story for the AI to extract. Rufus rewards the story.</p>

<h3>Stop chasing backlinks for ranking. Start building entity reinforcement for citations.</h3>

<p>The old SEO playbook was domain authority. Run backlink campaigns to high-DA sites, build referring domains, lift the ranking signal Google uses to decide whose pages are credible. The tactic still works for traditional SEO. It does not transfer to AI engines the way most brands assume.</p>

<p>AI engines build a model of what your brand is and who it's for from the consistency of mentions across the web. A backlink from a low-authority site that says "Brand X makes the best knee-support running shoes for marathon trainers" reinforces the entity definition that Rufus and ChatGPT will pull from. A high-authority backlink with generic anchor text does almost nothing for GEO because it adds no semantic information about what the brand actually is. <a href="/blog/amazon-rufus-optimization">Rufus uses entity reinforcement specifically</a> when deciding which products to recommend in a category.</p>

<p>The GEO replacement is consistent brand-entity language across review aggregators, comparison content, third-party guides, and category sites. The tactic is closer to PR than SEO. Get cited the same way across enough places, and the AI engines treat your brand as a confident match for the queries that vocabulary describes. Authority follows specificity now, not the other way around.</p>

<h3>Stop measuring success by rankings. Start measuring by recommendation appearances.</h3>

<p>The old measurement stack was a keyword rank tracker. Pull SERP positions weekly, watch the trend lines, optimize the dropping keywords, celebrate the rising ones. The metric was clean, the dashboards were familiar, and the workflow was predictable.</p>

<p>Rankings on the Amazon SERP no longer correlate cleanly with whether Rufus recommends your product to a shopper. The two systems use different inputs. A keyword-rich listing can rank well organically and still get skipped by Rufus because the listing fails the persona-match the AI is running. Tracking only the SERP position misses the channel that is now growing fastest in actual buyer time.</p>

<p>The GEO replacement is weekly tracking of how often your brand appears in AI-generated recommendations across ChatGPT, Claude, Gemini, Perplexity, Rufus, and Sparky. RecoScope tracks this across 10 categories on a weekly cadence. The point is not to add another tracker. The channel you cannot measure is the channel you cannot optimize.</p>

<h2>What still works from SEO?</h2>

<p>GEO does not replace SEO. Three SEO disciplines still matter and now matter more than they did before AI surfaces existed.</p>

<p><strong>Schema markup.</strong> Product schema, FAQPage schema, and Review schema all feed the AI Retrievability layer of GEO. Explicit structured data is the cleanest signal an AI engine can use to extract product attributes without inferring from prose. The brands shipping schema markup on their DTC sites are giving Rufus and ChatGPT the data both engines prefer to read first.</p>

<p><strong>Site architecture and indexability.</strong> AI engines pull from indexed web content. If your DTC site is not crawlable, your brand does not show up in the off-platform AI surfaces that drive ChatGPT and Perplexity recommendations. Site architecture is the foundation that lets the AI find the data in the first place.</p>

<p><strong>Content depth and authority.</strong> Long-form content still gets cited. Thin content still gets ignored. Comparison guides, buying guides, and FAQ-rich category pages on your owned site feed the same engines that drive marketplace AI surfaces. The publisher GEO layer compounds the ecommerce GEO layer through brand entity reinforcement.</p>

<p>The brands that win in 2026 are running both playbooks. The brands that lose are running neither, or running SEO tactics on listings that AI engines no longer reward.</p>

<h2>When does GEO matter more than SEO for marketplace sellers?</h2>

<p>Three scenarios where GEO is the higher-leverage investment right now:</p>

<ul>
  <li><strong>AI surfaces drive meaningful traffic to your listings.</strong> If you can see referral traffic from ChatGPT, Perplexity, or Rufus-influenced sessions in your analytics, GEO is already shaping your revenue.</li>
  <li><strong>Your category has buyers asking conversational questions.</strong> "Best running shoe for marathon trainers with knee pain" is a GEO query. "Running shoes" is a SEO query. The first wins on data quality. The second wins on keyword density.</li>
  <li><strong>You're already at parity on traditional SEO and looking for the next compounding edge.</strong> Brands at the top of the SERP have less to gain from another SEO push. They have everything to gain from a GEO foundation that compounds across every AI engine.</li>
</ul>

<p>Once <a href="/aeo">agentic commerce surfaces start completing transactions</a> on the buyer's behalf, the GEO foundation becomes the AEO foundation. Skipping GEO now means rebuilding both layers later under time pressure.</p>

<h2>Closing</h2>

<p>SEO and GEO are not in conflict. But the SEO tactics most marketplace sellers still run are actively hurting their AI visibility. The five shifts above are where to stop. Each one replaces a tactic that used to compound on Google with a tactic that compounds on Rufus, Sparky, ChatGPT, and the rest of the AI surfaces buyers are now using to make decisions.</p>

<p>The deeper resource is the <a href="/geo">GEO pillar page</a>, which covers the 6-dimension framework, the live category data, and the seven-step implementation sequence in detail.</p>

<p>If you want to see exactly where your brand stands across the six AI surfaces that matter, <a href="/free-strategy-session">book a free strategy session</a>. The audit covers your category, your top SKUs, and the prioritized fixes that will compound fastest.</p>`,
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
