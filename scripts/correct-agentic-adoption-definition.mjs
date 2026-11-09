// Wording corrections for /blog/agentic-commerce-adoption-definition-problem
// (Release 1.87), approved by Robert Hu on 2026-11-09. The ACI release never
// says respondents could pick only one position, and the "unmeasured" claims
// rest on the two public releases because both full reports were not reviewed.
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

const SLUG = 'agentic-commerce-adoption-definition-problem'
const APPLY = process.argv.includes('--apply')
const EDITS = [
  ['ACI asks respondents to choose one posture.', 'ACI reports four positions.'],
  [
    'Those four options sum to 94, so the choices compete with each other in a way a category comfort scale does not.',
    'Those four sum to 94, which suggests respondents picked one, though the release does not say so. If they did, the choices compete with each other in a way a category comfort scale does not.',
  ],
  ['Neither study measures it, which matters', 'Neither public release reports a figure for it, which matters'],
  ['Neither study measures this cleanly either.', 'Neither public release reports a clean figure for this either.'],
  ['Two of six levels are unmeasured, and one', 'Two of six levels have no figure in either public release, and one'],
]

const { data: post, error } = await supabase.from('blog_posts').select('id, content').eq('slug', SLUG).single()
if (error) { console.error('Read failed:', error); process.exit(1) }

let content = post.content
if (EDITS.every(([, next]) => content.includes(next))) { console.log('Already corrected; nothing to do.'); process.exit(0) }
for (const [prev, next] of EDITS) {
  const count = content.split(prev).length - 1
  if (count !== 1) { console.error(`Expected once, found ${count}: ${prev}`); process.exit(1) }
  content = content.replace(prev, next)
  console.log('- ' + prev + '\n+ ' + next + '\n')
}
console.log('Length change:', content.length - post.content.length)

if (!APPLY) { console.log('\nDry run. Pass --apply to write.'); process.exit(0) }

const { error: upErr } = await supabase
  .from('blog_posts')
  .update({ content, updated_at: new Date().toISOString() })
  .eq('id', post.id)
if (upErr) { console.error('Update failed:', upErr); process.exit(1) }
console.log('\nCorrection applied: https://theroberthu.com/blog/' + SLUG)
