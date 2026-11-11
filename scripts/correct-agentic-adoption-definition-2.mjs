// Second wording pass for /blog/agentic-commerce-adoption-definition-problem,
// approved by Robert Hu on 2026-11-09. Brings the H2, one sentence and the
// excerpt in line with the Release 1.87 corrections: the ACI release never says
// respondents could pick only one position, and the "unmeasured" claims rest on
// the two public releases.
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
const CONTENT_EDITS = [
  ['Six levels, and the two nobody measured', 'Six levels, and the two with no figure'],
  ['which single description a consumer picks', 'which description a consumer picks'],
]
const EXCERPT_EDITS = [['two of them are barely measured', 'two of them have no public figure']]

const { data: post, error } = await supabase
  .from('blog_posts')
  .select('id, content, excerpt, meta_description')
  .eq('slug', SLUG)
  .single()
if (error) { console.error('Read failed:', error); process.exit(1) }

function applyEdits(text, edits) {
  let out = text
  for (const [prev, next] of edits) {
    const count = out.split(prev).length - 1
    if (count !== 1) { console.error(`Expected once, found ${count}: ${prev}`); process.exit(1) }
    out = out.replace(prev, next)
    console.log('- ' + prev + '\n+ ' + next + '\n')
  }
  return out
}

if ([...CONTENT_EDITS].every(([, n]) => post.content.includes(n)) && EXCERPT_EDITS.every(([, n]) => post.excerpt.includes(n))) {
  console.log('Already corrected; nothing to do.')
  process.exit(0)
}

const content = applyEdits(post.content, CONTENT_EDITS)
const excerpt = applyEdits(post.excerpt, EXCERPT_EDITS)
console.log('Excerpt now:', excerpt)
console.log('Meta description (unchanged):', post.meta_description)

if (!APPLY) { console.log('\nDry run. Pass --apply to write.'); process.exit(0) }

const { error: upErr } = await supabase
  .from('blog_posts')
  .update({ content, excerpt, updated_at: new Date().toISOString() })
  .eq('id', post.id)
if (upErr) { console.error('Update failed:', upErr); process.exit(1) }
console.log('\nCorrection applied: https://theroberthu.com/blog/' + SLUG)
