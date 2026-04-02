/**
 * Regenerate all blog post SVG featured images with a mobile-friendly design.
 *
 * New design: Left panel (large headline) + Right panel (2–3 large gold stats).
 * At 375px mobile scale (0.275×): 80px number → 22px (readable), 12px label → ~3px (invisible but OK).
 *
 * Usage: node scripts/regen-blog-svgs.mjs
 */

import { writeFileSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const OUTPUT_DIR = join(__dirname, '..', 'public', 'images', 'blog')

mkdirSync(OUTPUT_DIR, { recursive: true })

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** Adaptive font size so stat numbers don't overflow their column. */
function statFontSize(n, numStats) {
  const chars = String(n).length
  if (numStats >= 3) {
    return chars <= 3 ? 72 : chars <= 4 ? 60 : 52
  } else {
    return chars <= 3 ? 88 : chars <= 5 ? 76 : 64
  }
}

/**
 * Generate a single SVG.
 *
 * @param {object} p
 * @param {string}   p.slug     - Used for output filename
 * @param {string}   p.category - e.g. "E-commerce Strategy"
 * @param {string[]} p.lines    - Headline lines (2–3). Last line renders in brand blue.
 * @param {Array<{n:string, l:string}>} p.stats - 2–3 stat objects {n: number, l: short label}
 */
function generateSvg({ slug, category, lines, stats }) {
  const cat = esc(category.toUpperCase())
  const badgeW = Math.max(120, cat.length * 8.6 + 28)

  // Title lines — 52px for mobile readability (renders ~16px at 375px)
  const lineH = 63
  const titleStartY = lines.length === 3 ? 175 : lines.length === 2 ? 210 : 240
  const titleSvg = lines
    .map((line, i) => {
      const color = i === lines.length - 1 ? '#2d7d9a' : '#ffffff'
      return `  <text x="88" y="${titleStartY + i * lineH}" font-family="'Helvetica Neue', Arial, sans-serif" font-size="52" font-weight="700" fill="${color}" letter-spacing="-1">${esc(line)}</text>`
    })
    .join('\n')

  const dividerY = titleStartY + lines.length * lineH + 12

  // Author sits right below the divider — no tagline (unreadable on mobile)
  const authorY = dividerY + 40

  // Right panel — large stats
  const panelX = 625
  const panelW = 530
  const numStats = stats.length
  let statsSvg = ''

  if (numStats > 0) {
    const sectionW = panelW / numStats
    const parts = []

    for (let i = 0; i < numStats; i++) {
      const cx = Math.round(panelX + sectionW * i + sectionW / 2)
      const { n, l } = stats[i]
      const fs = statFontSize(n, numStats)
      parts.push(`  <text x="${cx}" y="340" font-family="'Helvetica Neue', Arial, sans-serif" font-size="${fs}" font-weight="700" fill="#c5a94e" text-anchor="middle">${esc(n)}</text>`)
      parts.push(`  <text x="${cx}" y="378" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12" fill="#4a6a7a" text-anchor="middle" letter-spacing="2">${esc(l)}</text>`)
      if (i < numStats - 1) {
        const sepX = Math.round(panelX + sectionW * (i + 1))
        parts.push(`  <line x1="${sepX}" y1="285" x2="${sepX}" y2="400" stroke="#2d7d9a" stroke-opacity="0.2" stroke-width="1"/>`)
      }
    }
    statsSvg = parts.join('\n')
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Background -->
  <rect width="1200" height="630" fill="#1a2a32"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="4" fill="#2d7d9a" opacity="0.6"/>

  <!-- Panel divider -->
  <line x1="610" y1="60" x2="610" y2="570" stroke="#2d7d9a" stroke-opacity="0.15" stroke-width="1"/>

  <!-- Left accent bar -->
  <rect x="72" y="60" width="4" height="510" rx="2" fill="#2d7d9a" opacity="0.3"/>

  <!-- Category badge -->
  <rect x="88" y="72" width="${Math.round(badgeW)}" height="28" rx="4" fill="#2d7d9a" opacity="0.2"/>
  <text x="${Math.round(88 + badgeW / 2)}" y="91" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="600" fill="#2d7d9a" text-anchor="middle" letter-spacing="2">${cat}</text>

  <!-- Headline -->
${titleSvg}

  <!-- Divider -->
  <line x1="88" y1="${dividerY}" x2="570" y2="${dividerY}" stroke="#2d7d9a" stroke-opacity="0.35" stroke-width="1"/>

  <!-- Author -->
  <text x="88" y="${authorY}" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15" fill="#2d7d9a" font-weight="600" letter-spacing="1">ROBERT HU</text>
  <text x="88" y="${authorY + 20}" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" fill="#4a6a7a">theroberthu.com</text>

  <!-- Right panel box -->
  <rect x="${panelX}" y="90" width="${panelW}" height="450" rx="8" fill="#ffffff" fill-opacity="0.02" stroke="#2d7d9a" stroke-opacity="0.12" stroke-width="1"/>

  <!-- Stats -->
${statsSvg}

  <!-- HU mark -->
  <text x="1150" y="605" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="500" fill="#8a9aa2" opacity="0.5">HU</text>
</svg>`
}

// ─── Per-post data ────────────────────────────────────────────────────────────

const posts = [
  {
    slug: 'ai-compresses-messy-middle-ecommerce',
    category: 'GEO & SEO',
    lines: ['AI Is Killing', 'the Messy Middle.'],
    tagline: ['The consideration phase just got compressed.', 'Be in the AI shortlist or be invisible.'],
    stats: [{ n: '75%', l: 'AI DISCOVERY' }, { n: '47%', l: 'FASTER BUY' }, { n: '8%', l: 'AI-READY' }],
  },
  {
    slug: 'amazon-advertising-strategy-2026',
    category: 'Digital Marketing',
    lines: ['Amazon Organic Is', 'Declining. Fix Your', 'Ad Strategy.'],
    tagline: ['More spend alone won\'t save you.', 'Your listings need to do the work.'],
    stats: [{ n: '70%', l: 'SELLERS RUN ADS' }, { n: '$31B', l: 'AD REVENUE' }],
  },
  {
    slug: 'amazon-ai-walled-garden',
    category: 'E-commerce Strategy',
    lines: ['Amazon Blocked One AI', 'Agent and Invited', 'Millions More.'],
    tagline: ['Two moves. Same week. One clear strategy.', 'Amazon controls who shops inside Amazon.'],
    stats: [{ n: '1', l: 'AI BLOCKED' }, { n: '400K+', l: 'MERCHANTS IN' }],
  },
  {
    slug: 'amazon-listing-optimization-cost',
    category: 'E-commerce Strategy',
    lines: ['The Real Cost of', 'Bad Amazon Listings'],
    tagline: ['Poor listings drain revenue silently.', 'Optimization isn\'t optional anymore.'],
    stats: [{ n: '30%', l: 'CONV. LOST' }, { n: '$50K+', l: 'ANNUAL COST' }],
  },
  {
    slug: 'amazon-openai-partnership-sellers',
    category: 'E-commerce Strategy',
    lines: ['Amazon\'s $50B OpenAI', 'Deal: What Sellers', 'Need to Know.'],
    tagline: ['The line that matters isn\'t about AI chips.', 'It\'s about who controls the buyer journey.'],
    stats: [{ n: '$50B', l: 'AI INVESTMENT' }, { n: '200M+', l: 'SHOPPERS' }],
  },
  {
    slug: 'amazon-revenue-walmart-sellers-2026',
    category: 'E-commerce Strategy',
    lines: ['Amazon Passed Walmart', 'in Revenue. That\'s', 'Not the Story.'],
    tagline: ['The number that matters is market share shift.', 'And what it means for your margins.'],
    stats: [{ n: '$638B', l: 'AMAZON REV' }, { n: '40%', l: 'US MARKET' }],
  },
  {
    slug: 'amazon-rufus-ai-shopping-sellers',
    category: 'GEO & SEO',
    lines: ['Amazon\'s AI Shopping', 'Tools Are Redirecting', 'Your Customers.'],
    tagline: ['Rufus doesn\'t just answer questions.', 'It redirects purchase intent.'],
    stats: [{ n: '35%', l: 'RUFUS SESSIONS' }, { n: '850M', l: 'SHOPPERS' }],
  },
  {
    slug: 'amazon-rufus-optimization',
    category: 'GEO & SEO',
    lines: ['How to Optimize Your', 'Amazon Listings', 'for Rufus'],
    tagline: ['Rufus reads your content differently.', 'Here\'s what it\'s looking for.'],
    stats: [{ n: '35%', l: 'RUFUS SESSIONS' }, { n: '4', l: 'GEO DIMENSIONS' }],
  },
  {
    slug: 'amazon-shop-direct-sellers',
    category: 'E-commerce Strategy',
    lines: ['Amazon Just Opened', 'Its Search Results', 'to External Stores.'],
    tagline: ['Your DTC catalog can now appear in front of', 'hundreds of millions of Amazon shoppers.'],
    stats: [{ n: '100M+', l: 'PRODUCTS' }, { n: '400K+', l: 'MERCHANTS' }],
  },
  {
    slug: 'amazon-variation-reviews-2026',
    category: 'E-commerce Strategy',
    lines: ['Amazon Is Splitting', 'Variation Reviews', 'in 2026.'],
    tagline: ['Review equity is changing across variants.', 'Are your variations ready for the shift?'],
    stats: [{ n: '2026', l: 'POLICY CHANGE' }, { n: '50%+', l: 'REVIEWS HIT' }],
  },
  {
    slug: 'amazon-whole-foods-project-cremini',
    category: 'E-commerce Strategy',
    lines: ['Amazon\'s Whole Foods', 'Integration Reshapes', 'Grocery E-comm.'],
    tagline: ['Project Cremini merges digital and physical.', 'The grocery shelf is moving online.'],
    stats: [{ n: '$20B', l: 'GROCERY MARKET' }, { n: '500+', l: 'WF STORES' }],
  },
  {
    slug: 'black-friday-2025-online-sales',
    category: 'E-commerce Strategy',
    lines: ['Black Friday Online', 'Sales Hit Record', '$8.6 Billion.'],
    tagline: ['The shift to digital is now the baseline.', 'Your Q4 strategy needs to catch up.'],
    stats: [{ n: '$8.6B', l: 'ONLINE SALES' }, { n: '16%', l: 'YOY GROWTH' }],
  },
  {
    slug: 'chatgpt-canvas-vs-claude-artifacts',
    category: 'Digital Transformation',
    lines: ['ChatGPT Canvas vs', 'Claude Artifacts:', 'Which AI Tool Wins?'],
    tagline: ['Two AI tools, two different use cases.', 'Here\'s the honest breakdown.'],
    stats: [{ n: '2', l: 'TOOLS TESTED' }, { n: '5x', l: 'SPEED GAIN' }],
  },
  {
    slug: 'chatgpt-checkout-pullback-sellers',
    category: 'GEO & SEO',
    lines: ['OpenAI Pulled Back on', 'ChatGPT Checkout.', 'Sellers Should Cheer.'],
    tagline: ['The retreat preserves marketplace economics.', 'Here\'s what sellers gained.'],
    stats: [{ n: '500M', l: 'CHATGPT USERS' }, { n: '0', l: 'CHECKOUT RISK' }],
  },
  {
    slug: 'chatgpt-shopping-pullback-sellers',
    category: 'GEO & SEO',
    lines: ['ChatGPT Dropped', 'Checkout. Good News', 'for Sellers.'],
    tagline: ['The marketplace model stays intact for now.', 'But AI shopping is still coming.'],
    stats: [{ n: '500M', l: 'CHATGPT USERS' }, { n: '0', l: 'CHECKOUT RISK' }],
  },
  {
    slug: 'claude-opus-4-6-inflection',
    category: 'Digital Transformation',
    lines: ['What Claude Opus 4.6', 'Signals About the', 'Future of Work'],
    tagline: ['This isn\'t another model release.', 'It\'s a signal about how work will change.'],
    stats: [{ n: '200K', l: 'TOKEN CONTEXT' }, { n: '4x', l: 'PERFORMANCE' }],
  },
  {
    slug: 'clawdbot-decision-fog',
    category: 'The Messy Middle',
    lines: ['The Decision Fog', 'Around AI Tools'],
    tagline: ['Every team is drowning in AI options.', 'Here\'s how to cut through it.'],
    stats: [{ n: '80%', l: 'FEEL OVERWHELMED' }, { n: '3', l: 'FRAMEWORKS' }],
  },
  {
    slug: 'costco-digital-ecommerce-strategy',
    category: 'E-commerce Strategy',
    lines: ['Costco Is Finally', 'Going Digital.'],
    tagline: ['When the last holdout goes digital,', 'it\'s no longer a trend. It\'s the baseline.'],
    stats: [{ n: '20.5%', l: 'DIGITAL SURGE' }, { n: '$447B', l: 'MARKET CAP' }],
  },
  {
    slug: 'heygen-review',
    category: 'Digital Transformation',
    lines: ['HeyGen Review:', 'AI Video That', 'Actually Delivers'],
    tagline: ['Video production without a studio or crew.', 'Here\'s what it can and can\'t do.'],
    stats: [{ n: '4/5', l: 'REVIEW SCORE' }, { n: '100+', l: 'TEMPLATES' }],
  },
  {
    slug: 'kroger-ecommerce-profitability',
    category: 'E-commerce Strategy',
    lines: ['Kroger\'s $400M', 'E-Commerce Pivot', 'to Profitability'],
    tagline: ['Store-based fulfillment changes the math.', 'Grocery e-comm is no longer a loss leader.'],
    stats: [{ n: '$400M', l: 'INVESTED' }, { n: '7x', l: 'ROI TARGET' }],
  },
  {
    slug: 'lovable-shopify-integration',
    category: 'Digital Transformation',
    lines: ['Lovable + Shopify:', 'Build E-comm Stores', 'with AI in Hours'],
    tagline: ['The barrier to launching a store just dropped.', 'Here\'s what it means for brand operators.'],
    stats: [{ n: '<4h', l: 'BUILD TIME' }, { n: '10x', l: 'FASTER' }],
  },
  {
    slug: 'moltbook-ai-agents-social',
    category: 'Digital Marketing',
    lines: ['When AI Agents Build', 'Their Own Social', 'Network'],
    tagline: ['Moltbook is what happens when AI agents', 'create content for other AI agents.'],
    stats: [{ n: '10M+', l: 'AI POSTS' }, { n: '3', l: 'PLATFORMS' }],
  },
  {
    slug: 'openai-codex-agents',
    category: 'Digital Transformation',
    lines: ['The Codex Shift:', 'When AI Becomes', 'a Team to Manage'],
    tagline: ['You\'re not managing code anymore.', 'You\'re managing agents that write code.'],
    stats: [{ n: '5', l: 'PARALLEL AGENTS' }, { n: '10x', l: 'CODE OUTPUT' }],
  },
  {
    slug: 'openai-openclaw-ai-agents-ecommerce',
    category: 'Digital Transformation',
    lines: ['OpenAI Hired the', 'Creator of OpenClaw.', 'Here\'s Why It Matters.'],
    tagline: ['AI agents are coming to e-commerce.', 'This hire is the clearest signal yet.'],
    stats: [{ n: '10', l: 'AGENTS LAUNCHED' }, { n: '$1T', l: 'AUTOMATION MKT' }],
  },
  {
    slug: 'shopify-geo-playbook-marketplace-sellers',
    category: 'GEO & SEO',
    lines: ['Shopify\'s GEO Playbook:', 'What Marketplace', 'Sellers Need Now'],
    tagline: ['GEO isn\'t optional for Shopify brands.', 'The rules are different from SEO.'],
    stats: [{ n: '40%', l: 'AI SEARCH SHARE' }, { n: '3', l: 'GEO PILLARS' }],
  },
  {
    slug: 'tiktok-shop-revolution-2025',
    category: 'E-commerce Strategy',
    lines: ['TikTok Shop:', 'The Social Commerce', 'Revolution Is Here'],
    tagline: ['150 million US users. A live shopping feed.', 'And a direct path to purchase.'],
    stats: [{ n: '$20B', l: 'US GMV TARGET' }, { n: '150M', l: 'US USERS' }],
  },
  {
    slug: 'walmart-grocery-ecommerce-growth',
    category: 'E-commerce Strategy',
    lines: ['Walmart Grocery:', '7 Quarters of', '20%+ Growth'],
    tagline: ['This isn\'t a fluke. It\'s a structural shift.', 'And it\'s coming for Amazon grocery next.'],
    stats: [{ n: '20%+', l: 'QUARTERLY GROWTH' }, { n: '7', l: 'QUARTERS STRAIGHT' }],
  },
  {
    slug: 'walmart-new-ceo-ecommerce-brands',
    category: 'E-commerce Strategy',
    lines: ['Walmart\'s New CEO', 'Came From E-comm.', 'What It Means for You.'],
    tagline: ['When the CEO has an e-commerce background,', 'digital becomes the core strategy.'],
    stats: [{ n: '$648B', l: 'REVENUE 2024' }, { n: '4600+', l: 'FULFILLMENT NODES' }],
  },
  {
    slug: 'walmart-sparky-35-percent-higher-aov',
    category: 'E-commerce Strategy',
    lines: ['Walmart Sparky Drives', '35% Higher Order', 'Values. Here\'s Why.'],
    tagline: ['AI recommendations are changing purchase behavior.', 'Your product data determines your cut.'],
    stats: [{ n: '35%', l: 'HIGHER AOV' }, { n: '85%', l: 'OPEN TO AI' }],
  },
  {
    slug: 'walmart-sparky-ai-ads',
    category: 'E-commerce Strategy',
    lines: ['Walmart Sparky Gets', 'Sponsored Prompts.', 'What Sellers Need.'],
    tagline: ['AI-generated ads inside an AI search engine.', 'The format is new. The challenge is familiar.'],
    stats: [{ n: '35%', l: 'HIGHER AOV' }, { n: '$2.7B', l: 'AD REVENUE' }],
  },
  {
    slug: 'who-pays-when-ai-agents-fail',
    category: 'The Messy Middle',
    lines: ['Who Pays When AI', 'Agents Make Mistakes?'],
    tagline: ['The liability question nobody is asking.', 'Until an agent buys the wrong thing.'],
    stats: [{ n: '40%', l: 'AGENT ERROR RATE' }, { n: '$1T', l: 'AGENT MARKET' }],
  },
  {
    slug: 'walmart-sparky-chatgpt-gemini',
    category: 'E-commerce Strategy',
    lines: ['Walmart Dumped', 'OpenAI\'s Checkout.', 'Plugged In Sparky.'],
    stats: [{ n: '1/3x', l: 'CHECKOUT CONV.' }, { n: '300M+', l: 'NEW REACH' }],
  },
  {
    slug: 'shopify-agentic-merit-based-shopping',
    category: 'GEO & SEO',
    lines: ['AI Shopping Is', 'Merit-Based.', 'Small Sellers Win.'],
    stats: [{ n: '14x', l: 'AGENT ORDERS' }, { n: '$385B', l: 'BY 2030' }],
  },
  {
    slug: 'walmart-marketplace-200k-sellers',
    category: 'E-commerce Strategy',
    lines: ['Walmart Hits 200K', 'Sellers. US Brands', 'Should Pay Attention.'],
    stats: [{ n: '200K', l: 'SELLERS' }, { n: '27%', l: 'ONLINE GROWTH' }],
  },
  {
    slug: 'walmart-marty-ad-agent',
    category: 'Digital Marketing',
    lines: ["Walmart's Marty Ad", 'Agent Is Coming for', 'Your Ad Campaigns.'],
    stats: [{ n: '$4.4B', l: 'AD REVENUE' }, { n: '33%', l: 'US GROWTH' }],
  },
  {
    slug: 'chatgpt-sephora-retailer-apps',
    category: 'GEO & SEO',
    lines: ['Sephora Just Launched', 'Inside ChatGPT.', 'Now What?'],
    stats: [{ n: '100M+', l: 'WEEKLY USERS' }, { n: '3', l: 'RETAILERS LIVE' }],
  },
  {
    slug: 'small-brands-win-ai-doesnt-care-about-ad-budget',
    category: 'GEO & SEO',
    lines: ['Small Brands Win:', "AI Doesn't Care", 'About Your Ad Budget.'],
    stats: [{ n: '92%', l: 'NOT READY' }, { n: '3-5', l: 'AI PICKS' }],
  },
  {
    slug: 'walmart-negative-feedback-rate',
    category: 'E-commerce Strategy',
    lines: ['Walmart\u2019s New', 'Feedback Metric', 'Rewards AI Brands.'],
    stats: [{ n: '2%', l: 'THRESHOLD' }, { n: '60', l: 'DAY WINDOW' }],
  },
  {
    slug: 'amazon-rufus-account-memory',
    category: 'GEO & SEO',
    lines: ['Rufus Remembers', 'Every Shopper.', 'Your Data Is the Filter.'],
    stats: [{ n: '250M+', l: 'USERS' }, { n: '60%', l: 'BUY RATE' }],
  },
]

// ─── Generate all SVGs ────────────────────────────────────────────────────────

let generated = 0
let skipped = 0

for (const post of posts) {
  try {
    const svg = generateSvg(post)
    const outputPath = join(OUTPUT_DIR, `${post.slug}.svg`)
    writeFileSync(outputPath, svg, 'utf-8')
    console.log(`✓ ${post.slug}`)
    generated++
  } catch (err) {
    console.error(`✗ ${post.slug}: ${err.message}`)
    skipped++
  }
}

console.log(`\nDone: ${generated} generated, ${skipped} skipped.`)
