// Adds the approved "who controls what" grid to
// /blog/openai-business-hub-chatgpt-business-agents (Release 1.92), approved by
// Robert Hu on 2026-11-13. Inserted at the end of "Four layers, kept apart",
// after the checkout paragraph. No other text changes.
// Dry run by default; pass --apply to write.
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

const SLUG = 'openai-business-hub-chatgpt-business-agents'
const APPLY = process.argv.includes('--apply')
const ANCHOR = 'The terms say OpenAI does not become the seller.</p>'
const GRID = `<div class="table-wrapper">
<table>
<thead><tr><th>Layer</th><th>What the business can do</th><th>What OpenAI keeps</th></tr></thead>
<tbody>
<tr><td>Independent answer</td><td>Supply information ChatGPT may use. Claiming, feeds and advertising give no direct control over recommendations.</td><td>Deciding what to mention, compare and recommend</td></tr>
<tr><td>Verified profile</td><td>After Persona approval, submit updates to its details and connect a product feed</td><td>Reviewing and publishing changes, and the right to supplement, edit or replace submitted information using other sources</td></tr>
<tr><td>Business Agent</td><td>Supply product knowledge, policies and guidelines, preview the agent and decide whether to publish it. The business is responsible for its outputs.</td><td>The right to modify, suspend or remove the agent at any time without notice</td></tr>
<tr><td>Paid distribution</td><td>Sponsor its agent or make it a ChatGPT ad destination, under a separate advertising agreement</td><td>Labeling sponsored placements and keeping them separate from ChatGPT responses</td></tr>
<tr><td>Checkout</td><td>Complete the sale on its own checkout, outside all four layers</td><td>Not the seller. The current agent links out and cannot complete purchases.</td></tr>
</tbody>
</table>
</div>`

const { data: post, error } = await supabase
  .from('blog_posts')
  .select('id, content')
  .eq('slug', SLUG)
  .single()
if (error) { console.error('Read failed:', error); process.exit(1) }

if (post.content.includes('<th>What OpenAI keeps</th>')) {
  console.log('Grid already present; nothing to do.')
  process.exit(0)
}
const count = post.content.split(ANCHOR).length - 1
if (count !== 1) { console.error(`Expected anchor once, found ${count}`); process.exit(1) }

const content = post.content.replace(ANCHOR, ANCHOR + '\n\n' + GRID)
console.log('Inserting after: ' + ANCHOR + '\n\n' + GRID)

if (!APPLY) { console.log('\nDry run. Pass --apply to write.'); process.exit(0) }

const { error: upErr } = await supabase
  .from('blog_posts')
  .update({ content, updated_at: new Date().toISOString() })
  .eq('id', post.id)
if (upErr) { console.error('Update failed:', upErr); process.exit(1) }
console.log('\nGrid added: https://theroberthu.com/blog/' + SLUG)
