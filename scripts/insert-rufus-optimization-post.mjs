import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { generateOgImage } from './generate-og-image.mjs'

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

const ogImagePath = generateOgImage(
  'amazon-rufus-optimization',
  'How to Optimize Your Amazon Listings for Rufus',
  'GEO & SEO'
)
console.log('Generated OG image:', ogImagePath)

const post = {
  slug: 'amazon-rufus-optimization',
  title: 'How to Optimize Your Amazon Listings for Rufus',
  excerpt: 'Amazon Rufus now handles 13%+ of Amazon searches and uses semantic understanding, not keyword matching. Here are 6 specific changes sellers can make to their listings today to show up in AI-driven recommendations.',
  meta_title: 'How to Optimize Amazon Listings for Rufus',
  meta_description: 'Amazon Rufus handles 13%+ of searches using COSMO semantic AI, not keywords. Learn 6 specific listing changes to make today to capture AI-driven traffic.',
  og_image: ogImagePath,
  category: 'GEO & SEO',
  tags: ['amazon rufus optimization', 'amazon rufus sellers', 'how to optimize for amazon rufus', 'amazon ai shopping assistant', 'COSMO algorithm'],
  status: 'published',
  featured: false,
  read_time_minutes: 8,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'What is Amazon Rufus and how does it work?',
        a: 'Amazon Rufus is an AI shopping assistant built into the Amazon app and website. It answers product questions, compares options, and makes personalized recommendations using Amazon\'s COSMO algorithm, which understands the meaning and context behind customer queries rather than just matching keywords. Rufus now handles over 13% of Amazon searches.'
      },
      {
        q: 'How is optimizing for Rufus different from traditional Amazon SEO?',
        a: 'Traditional Amazon SEO focuses on keyword density, exact-match phrases, and A9 algorithm ranking signals. Rufus uses semantic understanding via the COSMO algorithm, which means it reads your listing to understand what your product actually does, who it\'s for, and how it compares to alternatives. A listing optimized for Rufus answers questions directly, uses natural language, and provides context that an AI can synthesize into a recommendation.'
      },
      {
        q: 'Which listing elements does Rufus read when making recommendations?',
        a: 'Rufus reads your product title, bullet points, product description, A+ content, customer Q&A, and reviews. It also factors in your brand store content and off-Amazon brand signals. The Q&A section is particularly important because it mirrors the conversational queries customers ask Rufus directly.'
      },
      {
        q: 'How do I know if my listings are Rufus-ready?',
        a: 'Open the Amazon app, tap the Rufus button, and ask questions about your own product category. If Rufus recommends competitors but not you, your listings likely lack the semantic structure Rufus needs. Check whether your bullets answer specific customer questions directly, whether your use cases are clearly stated, and whether your brand appears consistently across all content touchpoints.'
      },
      {
        q: 'How does Amazon Rufus optimization connect to GEO?',
        a: 'Rufus optimization is a form of Generative Engine Optimization (GEO) applied specifically to Amazon. GEO is the practice of structuring content so AI systems can understand, recommend, and cite your products. The same principles that help Rufus recommend your product also help ChatGPT, Perplexity, and Google AI Overviews surface your brand in AI-generated search results.'
      }
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['amazon-rufus-ai-shopping-sellers'],
    featured_image_alt: 'How to optimize Amazon product listings for Rufus AI shopping assistant using COSMO semantic algorithm'
  },
  published_at: '2026-02-19T12:00:00.000Z',
  content: `<p>Amazon Rufus is now handling more than 13% of all Amazon searches, and that share is growing every month. It uses semantic understanding, not keyword matching, to decide which products to recommend. Most sellers are still optimizing for a search algorithm that is no longer the primary way their customers find products.</p>

<p>Here is what that means practically: you could have perfect keyword coverage and a strong sales rank, and Rufus might still skip your listing in favor of a competitor whose content is structured to answer the questions customers actually ask. This is not a future problem. It is happening right now, on every category page where Rufus has been rolled out.</p>

<p>This post covers what Rufus is, how it thinks differently from traditional Amazon search, and six specific changes you can make to your listings today to show up in AI-driven recommendations.</p>

<h2>What Is Amazon Rufus and How Does It Work?</h2>

<p>Amazon Rufus is an AI shopping assistant built into the Amazon app and website. Customers use it to ask product questions, compare options, and get personalized recommendations in natural language. Instead of typing "dog treats grain free," they ask "what are the best treats for a dog with a sensitive stomach?" Rufus reads that question, understands the intent behind it, and recommends products it thinks best answer it.</p>

<p>The engine behind Rufus is <strong>COSMO</strong>, Amazon's semantic understanding algorithm. COSMO does not match keywords. It builds a model of what a product is, what it does, who uses it, and in what contexts, by reading everything Amazon has about that product: the title, bullets, description, A+ content, Q&A, and reviews. When a customer asks Rufus a question, COSMO matches the question's intent to that model, not to a keyword string.</p>

<p>This is a fundamental shift. Traditional Amazon search (the A9/A10 algorithm) rewards keyword density, click-through rate, and conversion history. Rufus rewards semantic clarity. The better your listing explains what your product actually does, who it is for, and why it is the right choice for a specific situation, the more likely Rufus is to surface it.</p>

<h2>How Is This Different From Traditional Amazon SEO?</h2>

<p>Traditional Amazon SEO is built on a simple premise: if you want to rank for "waterproof hiking boots women," you put those words in your title, bullets, and backend search terms as many times as the algorithm will tolerate. It works because A9 is largely a keyword matching system weighted by sales velocity.</p>

<p>Rufus does not care how many times you used the word "waterproof." It cares whether your listing makes clear that your boot is waterproof, why that matters, in what conditions it performs best, and whether it is appropriate for the type of customer asking the question. That distinction matters more than most sellers realize.</p>

<p>Here is the practical difference. A traditional A9-optimized bullet point looks like this:</p>

<blockquote>WATERPROOF HIKING BOOTS WOMEN: Premium waterproof hiking boots for women, waterproof construction, durable outsole, women's outdoor hiking boots for trail walking</blockquote>

<p>A Rufus-optimized bullet point looks like this:</p>

<blockquote>Keeps feet dry in stream crossings and all-day rain, with a Gore-Tex membrane rated to 10,000mm hydrostatic head, so you can stay out longer without stopping to wring out your socks</blockquote>

<p>The second version answers the question a customer would actually ask Rufus: "Will these boots keep my feet dry in wet conditions?" The first version just stuffs a keyword string into a sentence. COSMO reads both. Only one of them tells it something useful about the product.</p>

<h2>6 Specific Changes to Make Your Listings Rufus-Ready</h2>

<h3>1. Rewrite your bullets as answers to customer questions</h3>

<p>Before writing each bullet point, ask: what question is a customer asking when they need to know this? Then answer that question directly in the first line of the bullet. Every bullet should start with the outcome or context, not the feature name.</p>

<p>Before: <em>PREMIUM STAINLESS STEEL CONSTRUCTION: Made with 18/8 food-grade stainless steel for lasting durability</em></p>

<p>After: <em>Safe for daily hot beverages and acidic drinks, with 18/8 food-grade stainless steel that does not leach metallic taste even after years of use</em></p>

<p>The "after" version directly answers "is this safe for my morning coffee?" The "before" version just describes a material spec the customer has to interpret themselves.</p>

<h3>2. Build out your Q&A section strategically</h3>

<p>The customer Q&A section is the most underused listing element for Rufus optimization. Rufus reads it directly, and because it is written in natural conversational language, it maps extremely well to the way customers phrase their questions to Rufus.</p>

<p>Do not wait for customers to submit questions. Seed your Q&A with the 8-10 questions your customers actually ask, pulled from your reviews, your support inbox, and common search queries in your category. Answer each one in 2-3 sentences with specific, useful detail. Rufus will pull from these answers when recommending your product to customers asking similar questions.</p>

<h3>3. State your use cases explicitly in the description</h3>

<p>COSMO builds a contextual model of your product that includes when, where, and for whom it is appropriate. If those contexts are not stated explicitly in your listing, COSMO has to infer them from indirect signals, which means it will miss nuances that could qualify you for more recommendations.</p>

<p>Add a section to your product description (or A+ content if you have Brand Registry) that lists your primary use cases clearly: "Designed for X situation, ideal for Y customer, works best when Z." Not as keyword stuffing. As plain-language context that tells Rufus what category of customer needs this product and when.</p>

<h3>4. Match your title to how customers describe the problem, not the product</h3>

<p>Most product titles lead with brand name and product type. Rufus often responds to problem-based queries ("what's good for dry skin in winter?" "best gift for someone who camps a lot?"). Your title needs enough natural language to bridge from the product category to the problem it solves.</p>

<p>This does not mean removing your brand name or product type. It means making sure the title includes the context that signals relevance to a problem-based query. A title like "CeraVe Moisturizing Cream, Daily Face and Body Lotion for Dry Skin" maps well to "what moisturizer is good for dry skin" because the use case and problem are named. A title like "CeraVe Moisturizing Cream 16 oz" does not give Rufus much to work with.</p>

<h3>5. Optimize your A+ content for AI extraction</h3>

<p>A+ content is not just for conversion rate. Rufus reads it. The mistake most brands make is treating A+ content as a lifestyle branding exercise: beautiful images, short punchy phrases, minimal actual information. That looks good to humans browsing. It does not give Rufus much to extract.</p>

<p>Balance your A+ modules between visual storytelling and substantive text. Include comparison charts where relevant (Rufus reads those to understand where your product fits relative to alternatives). Write module copy that is information-dense, not just aesthetic. Each text block should communicate something specific about your product that a question-answering AI could use.</p>

<h3>6. Audit your brand consistency across all touchpoints</h3>

<p>COSMO does not just read your individual listing. It builds a brand entity model that includes your brand store, your other products, and increasingly off-Amazon content. Inconsistencies in how you describe your brand, your positioning, and your product benefits across these touchpoints create noise in that model.</p>

<p>Robert Hu has seen this pattern repeatedly: brands that maintain tight, consistent messaging across their brand store, A+ content, and product listings perform noticeably better in Rufus recommendations than brands with fragmented or inconsistent content, even when the fragmented brand has stronger keyword coverage. Consistency signals reliability to the model. Pick a consistent brand voice, a consistent product benefit hierarchy, and use it everywhere.</p>

<h2>How Does Rufus Optimization Connect to GEO?</h2>

<p>Rufus optimization is not a one-off Amazon tactic. It is a specific application of <a href="/geo">Generative Engine Optimization (GEO)</a>, the broader practice of structuring your content so AI systems can understand, recommend, and cite your products and brand.</p>

<p>The same principles that make your Amazon listings Rufus-ready also make your brand more visible in ChatGPT product recommendations, Perplexity shopping results, and Google AI Overviews. Clear use cases, direct question-and-answer structure, consistent brand entity signals, and information-dense content over keyword stuffing. These are GEO fundamentals applied to a marketplace context.</p>

<p>The brands that understand this connection will build content ecosystems that compound. Every listing they optimize for Rufus also strengthens their position in every other AI-driven discovery channel. The brands that treat Rufus optimization as a separate Amazon-specific task will have to rebuild that work for every new AI channel that emerges.</p>

<h2>What Happens If You Ignore This</h2>

<p>Rufus is not going to stop at 13% of Amazon searches. Amazon is actively expanding where and how Rufus surfaces in the shopping experience. As that share grows, the gap between Rufus-ready listings and keyword-stuffed listings will widen.</p>

<p>The pattern I have watched play out in traditional search is repeating here. Early adopters adapt their content, capture disproportionate visibility while the field is thin, and then that advantage compounds as the algorithm learns from their performance data. Late adopters do the same work later, against stiffer competition, for less reward.</p>

<p><strong>The window to adapt early is open right now. Most sellers are still arguing about keyword placement in their titles.</strong></p>

<p>If you want an honest assessment of where your listings stand for AI-driven discovery, <a href="/services/product-listing-optimization">product listing optimization</a> is where to start. Or if you want to talk through your specific situation first, <a href="/free-strategy-session">book a free 15-minute strategy session</a> and we can look at your top listings together.</p>`
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
}

insertPost()
