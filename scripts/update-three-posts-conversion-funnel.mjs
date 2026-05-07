/**
 * Apply three-part conversion funnel fix to three existing blog posts:
 *   1. Mid-post inline callout (gold left border, links to /geo)
 *   2. "Related reading" block at end of body (before closing CTA)
 *   3. Replace closing CTA with topic-specific RecoScope + strategy-session copy
 *
 * Updates Supabase blog_posts.content directly. Also writes a .md record
 * to /Content/blog/[slug].md as a paper trail.
 */
import { createClient } from '@supabase/supabase-js'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const envFile = readFileSync(join(__dirname, '..', '.env.local'), 'utf-8')
const envVars = {}
envFile.split('\n').forEach(line => {
  const m = line.match(/^([^#=]+)=(.*)$/)
  if (m) envVars[m[1].trim()] = m[2].trim()
})
const supabase = createClient(envVars.NEXT_PUBLIC_SUPABASE_URL, envVars.SUPABASE_SERVICE_ROLE_KEY)

const CALLOUT_STYLE =
  'background: rgba(197, 169, 78, 0.08); border-left: 4px solid #c5a94e; border-radius: 0 0.75rem 0.75rem 0; padding: 1.25rem 1.5rem; margin: 2rem 0;'
const CALLOUT_TEXT_STYLE = 'margin: 0; font-size: 0.95rem; line-height: 1.65; color: #e8edf0;'

function calloutHtml(copy) {
  return `<blockquote style="${CALLOUT_STYLE}">\n  <p style="${CALLOUT_TEXT_STYLE}">${copy}</p>\n</blockquote>`
}

const RELATED_TITLES = {
  'meta-hatch-instagram-shopping-agent-marketplace-sellers': "Meta's Hatch and the Instagram Shopping Agent: What Marketplace Sellers Need to Know",
  'walmart-sparky-chatgpt-gemini': "Walmart Just Killed Instant Checkout. Sparky Goes Live in ChatGPT and Gemini.",
  'rufus-sparky-ai-revenue-impact': "Rufus Is Driving $10B for Amazon. Sparky Is Lifting AOVs 35% for Walmart.",
  'amazon-joins-universal-commerce-protocol': "Amazon Just Joined the Agentic Commerce Governance Body It Spent 8 Months Fighting.",
  'geo-vs-seo-marketplace-sellers': 'GEO vs SEO: What Marketplace Sellers Need to Stop Doing in 2026',
}

const RELATED_BLURBS = {
  'meta-hatch-instagram-shopping-agent-marketplace-sellers': "Meta's parallel agentic shopping play and the Instagram catalog audit it triggers.",
  'walmart-sparky-chatgpt-gemini': 'The platform-side agent precedent that other retailers are now copying.',
  'rufus-sparky-ai-revenue-impact': 'The revenue context: $10B Rufus, 35% Sparky AOV lift, and why data quality is the gating factor.',
  'amazon-joins-universal-commerce-protocol': "Amazon's agentic commerce reversal and what UCP membership signals for sellers.",
  'geo-vs-seo-marketplace-sellers': 'The five SEO tactics that actively hurt AI visibility, with the GEO replacements that compound across surfaces.',
}

function relatedReadingHtml(slugs) {
  const items = slugs.map(slug => {
    const title = RELATED_TITLES[slug]
    const blurb = RELATED_BLURBS[slug]
    return `  <li><a href="/blog/${slug}">${title}</a><br /><span style="color: #8a9aa2; font-size: 0.875rem;">${blurb}</span></li>`
  }).join('\n')
  return `<h2>Related reading</h2>\n<ul style="list-style: disc; padding-left: 1.25rem;">\n${items}\n</ul>`
}

const POSTS = [
  {
    slug: 'amazon-joins-universal-commerce-protocol',
    callout: calloutHtml(
      'UCP readiness comes down to one thing: whether AI agents can read your product data confidently enough to recommend or transact. The 6-dimension GEO framework is how to score that. <a href="/geo" style="color: #c5a94e; text-decoration: underline; text-underline-offset: 2px;">See the framework on the GEO pillar page &rarr;</a>'
    ),
    insertCalloutBefore: '<h2>What Does UCP Actually Do?</h2>',
    relatedSlugs: [
      'meta-hatch-instagram-shopping-agent-marketplace-sellers',
      'walmart-sparky-chatgpt-gemini',
      'geo-vs-seo-marketplace-sellers',
    ],
    oldCtaParagraph:
      `<p>If you want help auditing your structured product data and preparing for protocol-driven commerce across Amazon, Walmart, and beyond, <a href="/free-strategy-session">book a free strategy session</a> and we'll walk through your top SKUs together.</p>`,
    newCtaParagraph:
      `<p>Want to see if your brand is showing up where AI agents can find it? <a href="https://getrecoscope.com" target="_blank" rel="noopener noreferrer">Get a free RecoScope snapshot</a> - it tracks your brand's appearances across ChatGPT, Claude, Gemini, and Perplexity. Or <a href="/free-strategy-session">book a strategy session</a> for a deeper conversation about your specific category.</p>`,
  },
  {
    slug: 'walmart-sparky-chatgpt-gemini',
    callout: calloutHtml(
      "Sparky doesn't recommend brands. It recommends data. The brands getting picked have clean catalogs, structured attributes, and ICP-aligned positioning. The 6-dimension GEO framework scores exactly this. <a href=\"/geo\" style=\"color: #c5a94e; text-decoration: underline; text-underline-offset: 2px;\">See the framework &rarr;</a>"
    ),
    insertCalloutBefore: '<h2>How Does Sparky Optimization Work Across Platforms?</h2>',
    relatedSlugs: [
      'rufus-sparky-ai-revenue-impact',
      'meta-hatch-instagram-shopping-agent-marketplace-sellers',
      'geo-vs-seo-marketplace-sellers',
    ],
    oldCtaParagraph:
      `<p>If your Walmart listings aren't structured for Sparky, you're now invisible on three platforms instead of one. <a href="/free-strategy-session">Book a free strategy session</a> to find out where your product data gaps are and how to close them.</p>`,
    newCtaParagraph:
      `<p>If your Walmart listings aren't structured for Sparky, you're now invisible on three platforms instead of one.</p>\n\n<p>Curious whether your brand is surfacing in Sparky's recommendations? <a href="https://getrecoscope.com" target="_blank" rel="noopener noreferrer">Get a free RecoScope snapshot</a> and see your brand's coverage across the AI shopping engines that matter. Or <a href="/free-strategy-session">book a strategy session</a> if you want a deeper read on your category.</p>`,
  },
  {
    slug: 'rufus-sparky-ai-revenue-impact',
    callout: calloutHtml(
      'Revenue from AI surfaces compounds for the brands with the cleanest product data. The 6-dimension GEO framework is how to audit your own listings against the way Rufus and Sparky actually evaluate. <a href="/geo" style="color: #c5a94e; text-decoration: underline; text-underline-offset: 2px;">See the framework &rarr;</a>'
    ),
    insertCalloutBefore: '<h2>How Does the Compound Effect Work?</h2>',
    relatedSlugs: [
      'walmart-sparky-chatgpt-gemini',
      'amazon-joins-universal-commerce-protocol',
      'geo-vs-seo-marketplace-sellers',
    ],
    oldCtaParagraph:
      `<p>If you want to see where your listings stand and which gaps are costing you AI recommendations, <a href="/free-strategy-session">book a free strategy session</a> and we'll audit your top products together.</p>`,
    newCtaParagraph:
      `<p>Find out where your brand stands across Rufus, Sparky, ChatGPT, Claude, Gemini, and Perplexity. <a href="https://getrecoscope.com" target="_blank" rel="noopener noreferrer">Get a free RecoScope snapshot</a> for an instant read. Or <a href="/free-strategy-session">book a strategy session</a> to discuss your specific revenue opportunity.</p>`,
  },
]

async function applyFix(post) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('content, title, meta_title, meta_description, category, published_at, status')
    .eq('slug', post.slug)
    .single()
  if (error) { console.error(post.slug, error); return false }

  let content = data.content

  // Idempotency guard
  if (content.includes('Related reading') && content.includes('getrecoscope.com')) {
    console.log(`  - ${post.slug}: already updated, skipping`)
    return true
  }

  // CHANGE 1: Insert mid-post callout before the chosen H2
  if (!content.includes(post.insertCalloutBefore)) {
    console.error(`✗ ${post.slug}: target H2 not found:`, post.insertCalloutBefore)
    return false
  }
  content = content.replace(post.insertCalloutBefore, post.callout + '\n\n' + post.insertCalloutBefore)

  // CHANGE 3: Replace closing CTA paragraph
  if (!content.includes(post.oldCtaParagraph)) {
    console.error(`✗ ${post.slug}: old CTA not found verbatim`)
    return false
  }
  content = content.replace(post.oldCtaParagraph, post.newCtaParagraph)

  // CHANGE 2: Insert "Related reading" block BEFORE the new CTA
  // (The new CTA is the last paragraph(s) we just inserted; place related reading before it.)
  const related = relatedReadingHtml(post.relatedSlugs)
  content = content.replace(post.newCtaParagraph, related + '\n\n' + post.newCtaParagraph)

  // Update Supabase
  const { error: updateErr } = await supabase
    .from('blog_posts')
    .update({ content })
    .eq('slug', post.slug)
  if (updateErr) { console.error(post.slug, updateErr); return false }
  console.log(`✓ ${post.slug} updated in Supabase`)

  // Write a markdown record
  const md = `# ${data.title}\n\n**Slug:** ${post.slug}\n**Category:** ${data.category}\n**Status:** ${data.status}\n**Published:** ${data.published_at}\n\n---\n\n${content}\n`
  const mdPath = join(__dirname, '..', 'Content', 'blog', `${post.slug}.md`)
  writeFileSync(mdPath, md, 'utf-8')
  console.log(`  - wrote ${mdPath}`)

  return true
}

;(async () => {
  let ok = 0
  for (const post of POSTS) {
    const result = await applyFix(post)
    if (result) ok++
  }
  console.log(`\n${ok}/${POSTS.length} posts updated.`)
})()
