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

const SLUG = 'aws-marketplace-agentcore-agentic-payments-x402'

// Comparison table approved by Robert on 2026-11-23, inserted at the end of
// "What changes compared with Visa and BILL", directly before the next H2.
// Uses only facts already stated in the article.
const TABLE = `<div class="table-wrapper">
<table>
<thead><tr><th>Decision point</th><th>Visa, BILL and Billtrust pilot</th><th>AWS agentic payments</th><th>AWS agent-mode checkout</th></tr></thead>
<tbody>
<tr><td>What a person approves</td><td>The specific invoice payment</td><td>The boundary: the account, a session budget, the products the organization allows</td><td>Each purchase, before it completes</td></tr>
<tr><td>What the agent decides</td><td>How to submit an already-approved payment, not whether, to whom or how much</td><td>Which permitted paid input to buy, mid-task</td><td>Nothing final. It walks the buyer through pricing, license terms and purchase-order thresholds</td></tr>
<tr><td>What limits the agent</td><td>Controls tied to the approved instruction</td><td>A seller-signed fixed price, a session cap when one is configured, and Private Marketplace where it is used</td><td>Human confirmation</td></tr>
</tbody>
</table>
</div>`

const ANCHOR = '<h2>Why this may work before consumer shopping</h2>'

const { data: post, error: readErr } = await supabase
  .from('blog_posts')
  .select('id, slug, content')
  .eq('slug', SLUG)
  .maybeSingle()
if (readErr || !post) { console.error('Post not found:', readErr); process.exit(1) }

const before = post.content
if (before.includes('<th>Decision point</th>')) {
  console.log('Table already present. No change made.')
  process.exit(0)
}

const anchorCount = before.split(ANCHOR).length - 1
if (anchorCount !== 1) { console.error('Anchor found ' + anchorCount + ' times, expected 1'); process.exit(1) }

const after = before.replace(ANCHOR, TABLE + '\n\n' + ANCHOR)

// Copy guard: the article's prose must be byte identical once the table is removed.
const restored = after.replace(TABLE + '\n\n', '')
if (restored !== before) { console.error('Copy changed. Aborting.'); process.exit(1) }

const { error } = await supabase.from('blog_posts').update({ content: after }).eq('id', post.id)
if (error) { console.error('Update failed:', error); process.exit(1) }
console.log('Table inserted. Post id:', post.id)
console.log('Content length:', before.length, '->', after.length)
console.log('URL: https://theroberthu.com/blog/' + SLUG)
