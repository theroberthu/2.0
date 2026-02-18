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
  'amazon-rufus-ai-shopping-sellers',
  "Amazon's AI Shopping Tools Are Redirecting Your Customers",
  'GEO & SEO'
)
console.log('Generated OG image:', ogImagePath)

const post = {
  slug: 'amazon-rufus-ai-shopping-sellers',
  title: "Amazon's AI Shopping Tools Are Redirecting Your Customers. Are You Ready?",
  excerpt: "Amazon Rufus has reached 250 million shoppers, and its AI tools are reshaping how customers discover products. Sellers who optimize for AI-driven discovery now will win. The rest will watch their traffic disappear.",
  meta_title: 'Amazon AI Shopping Tools & GEO for Sellers',
  meta_description: 'Amazon Rufus and AI shopping tools are changing how customers find products. Learn why GEO matters for Amazon sellers and what to do about it now.',
  og_image: ogImagePath,
  category: 'GEO & SEO',
  tags: ['amazon ai shopping', 'amazon rufus sellers', 'ai product recommendations amazon', 'GEO', 'Amazon Rufus'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'How is Amazon Rufus changing product discovery for sellers?',
        a: 'Amazon Rufus is an AI shopping assistant used by over 250 million shoppers. It answers product questions, compares options, and makes recommendations directly in the shopping flow. Customers who engage with Rufus are 60% more likely to complete a purchase, which means the AI layer is increasingly deciding which products get seen and which get buried.'
      },
      {
        q: 'What is GEO and why does it matter for Amazon sellers?',
        a: 'Generative Engine Optimization (GEO) is the practice of optimizing your product content so AI systems can understand, recommend, and cite your products. Traditional SEO targets keyword rankings. GEO targets the AI models that are now sitting between your product and the customer, including Amazon Rufus, ChatGPT, Perplexity, and Google AI Overviews.'
      },
      {
        q: 'What should Amazon sellers do right now to prepare for AI shopping?',
        a: 'Start by auditing your top listings for AI readability. Structure your bullet points and descriptions to answer specific customer questions directly. Build brand entity signals through consistent naming and structured data. And treat GEO as a core part of your listing optimization strategy, not an afterthought.'
      }
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['costco-digital-ecommerce-strategy'],
    featured_image_alt: 'Amazon AI shopping tools and Rufus reshaping product discovery for e-commerce sellers',
    video_data: {
      name: "Amazon's AI Shopping Tools Are Redirecting Your Customers",
      description: "Robert Hu breaks down how Amazon Rufus, Buy for Me, and Shop Direct are reshaping product discovery, and why GEO (Generative Engine Optimization) matters for Amazon sellers.",
      thumbnailUrl: 'https://img.youtube.com/vi/3TfjmWpA1HQ/maxresdefault.jpg',
      uploadDate: '2026-02-18',
      contentUrl: 'https://www.youtube.com/watch?v=3TfjmWpA1HQ',
      embedUrl: 'https://www.youtube.com/embed/3TfjmWpA1HQ'
    }
  },
  published_at: '2026-02-18T12:00:00.000Z',
  content: `<p>Amazon's AI shopping tools are no longer an experiment. They are the product discovery layer for over 250 million shoppers. And most Amazon sellers have no strategy for it.</p>

<p>Rufus, Amazon's conversational AI assistant, is now embedded in the shopping experience. Alongside it, Amazon has rolled out Buy for Me and Shop Direct, tools that let AI agents find, compare, and purchase products on behalf of customers. <a href="https://www.cnbc.com/2026/01/06/amazons-ai-shopping-tool-sparks-backlash-from-some-online-retailers.html" target="_blank" rel="noopener noreferrer">CNBC recently reported</a> that these tools have sparked backlash from retailers who say Amazon scraped their sites and listed products without permission. Over 180 business owners came forward with complaints, and more than 500,000 products are now available through the Buy for Me program alone.</p>

<p>The scraping controversy is a real issue. But if you are an Amazon seller, it is not the part of this story that should keep you up at night.</p>

<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/3TfjmWpA1HQ" title="Amazon AI Shopping Tools and GEO for Sellers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<h2>How Is Amazon Rufus Changing Product Discovery for Sellers?</h2>

<p>Amazon Rufus is an AI shopping assistant that answers product questions, compares options, and makes recommendations directly inside the Amazon shopping experience. Over 250 million shoppers have used it. Customers who engage with Rufus are 60% more likely to complete a purchase.</p>

<p>Think about what that means for your listings. Rufus is not just a search bar replacement. It is an intermediary. When a customer asks "what's the best dog treats for sensitive stomachs," Rufus does not show them a list of keyword matches. It reads product content, reviews, Q&A sections, and brand information, then synthesizes a recommendation. If your listing is not structured in a way that Rufus can parse and understand, you are invisible to a growing share of Amazon's highest-intent shoppers.</p>

<p>This is the shift that most sellers are missing. The customer journey on Amazon is changing from "search, scroll, click" to "ask, get a recommendation, buy." And the AI is deciding which products make the recommendation list.</p>

<h2>The Real Story Behind the Backlash</h2>

<p>The CNBC report focused on external retailers who were angry that Amazon's Buy for Me and Shop Direct tools scraped their websites and listed their products without consent. That is a legitimate concern, especially given that Amazon has simultaneously blocked external AI crawlers from accessing its own site. The double standard is hard to ignore.</p>

<p>But for Amazon sellers, the backlash story obscures a more important trend: <strong>AI is becoming the primary way customers discover and evaluate products, and most listings are not optimized for it.</strong></p>

<p>Amazon is projecting that Rufus will generate over $10 billion in incremental annual sales. That revenue is not appearing out of thin air. It is being redirected. From some sellers to others. From products that AI tools cannot parse to products that they can.</p>

<p>Robert Hu has been tracking this shift across the brands he works with. The pattern is consistent: sellers who have optimized their content for AI readability are seeing stronger conversion rates and better organic visibility. Sellers who have not are watching their numbers flatten or decline and blaming the algorithm.</p>

<h2>What Is GEO and Why Does It Matter for Amazon Sellers?</h2>

<p>Generative Engine Optimization (GEO) is the practice of optimizing your product content so AI systems can understand, recommend, and cite your products. It is not a replacement for traditional SEO. It is the next layer on top of it.</p>

<p>Traditional SEO targets keyword rankings. You optimize for specific search terms and try to appear in the results. GEO targets the AI models that now sit between your product and the customer. That includes Amazon Rufus, but also ChatGPT, Perplexity, Google AI Overviews, and other tools that shoppers increasingly use before or during their purchase decisions.</p>

<p>Here is the difference in practice:</p>

<ul>
<li><strong>SEO-optimized listing:</strong> Front-loads keywords in the title, stuffs bullet points with search terms, focuses on indexing.</li>
<li><strong>GEO-optimized listing:</strong> Answers specific customer questions directly, uses structured and clear language, provides context that an AI can synthesize into a recommendation, and builds brand signals that make the product recognizable across AI platforms.</li>
</ul>

<p>The sellers winning in AI-driven discovery are doing both. Their listings rank in traditional search AND get recommended by Rufus, ChatGPT, and Google AI Overviews. The ones who only optimized for keywords are slowly losing ground to competitors whose content AI tools can actually work with.</p>

<h2>What Should Amazon Sellers Do Right Now to Prepare for AI Shopping?</h2>

<p>This is not a "wait and see" situation. AI shopping tools are already redirecting customer behavior. Here is what to do about it:</p>

<p><strong>1. Audit your top listings for AI readability.</strong> Read your bullet points and descriptions out loud. Do they answer specific questions a customer would ask? Or are they keyword-stuffed walls of text that no AI model can parse into a useful recommendation? If an AI assistant asked "why should I buy this product," would your listing give it a clear answer?</p>

<p><strong>2. Structure your content for conversational queries.</strong> Rufus and other AI tools process natural language questions. Your content needs to match. Instead of "Premium organic dog treats, grain-free, all-natural ingredients, USA-made," write content that explains what makes your product the right choice for a specific use case. "Made with single-source protein for dogs with sensitive stomachs" gives an AI something to work with.</p>

<p><strong>3. Build your brand entity signals.</strong> AI tools do not just read one listing. They pull from reviews, Q&A, your brand store, your A+ content, and even off-Amazon mentions. The more consistent and clear your brand identity is across all of these touchpoints, the more likely AI tools are to recognize and recommend your products. This is <a href="/services/product-listing-optimization">where product listing optimization meets GEO</a>.</p>

<p><strong>4. Treat GEO as a core strategy, not an afterthought.</strong> Most Amazon sellers are still optimizing exclusively for traditional search. That playbook worked for a decade. It is no longer sufficient. Build GEO into your listing optimization process alongside keyword strategy, not as a separate initiative you will get to later.</p>

<h2>The Bigger Picture</h2>

<p>Amazon Rufus is not an isolated development. OpenAI, Google, and Perplexity are all building AI tools that let consumers shop across the internet without visiting individual product pages. The agentic commerce sector is projected to reach $1 trillion in U.S. sales. This is not a trend. It is the new infrastructure of online shopping.</p>

<p>The sellers who panic about AI tools scraping their data are fighting the last war. The sellers who understand that <strong>AI is the new storefront</strong> and optimize accordingly will capture the customers that these tools are actively redirecting.</p>

<p>Most Amazon sellers do not even know what GEO is yet. That is both the problem and the opportunity. The brands that figure this out first will have a significant competitive advantage. The ones that wait will spend the next two years wondering where their traffic went.</p>

<p>If your listings are not optimized for AI-driven product discovery, a <a href="/geo-audit">free GEO audit</a> is the fastest way to find out where you stand and what to fix first.</p>`
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
