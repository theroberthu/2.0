/**
 * Writes the Board-approved Key findings from Content/blog/_key-findings-review.md
 * into schema_json.key_findings for each listed slug. Merges into the existing
 * schema_json; other keys are untouched. Run only after Board approval.
 *
 *   node scripts/apply-key-findings.mjs            # dry run: prints what would change
 *   node scripts/apply-key-findings.mjs --apply    # writes to Supabase
 */
import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const envVars = {}
readFileSync(join(root, '.env.local'), 'utf-8').split('\n').forEach((line) => {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) envVars[match[1].trim()] = match[2].trim()
})

const supabase = createClient(envVars.NEXT_PUBLIC_SUPABASE_URL, envVars.SUPABASE_SERVICE_ROLE_KEY)

// Parse "## <slug>" sections and their numbered findings.
const md = readFileSync(join(root, 'Content/blog/_key-findings-review.md'), 'utf-8')
const findingsBySlug = {}
let current = null
for (const line of md.split('\n')) {
  const heading = line.match(/^## ([a-z0-9-]+)\s*$/)
  if (heading) {
    current = heading[1]
    findingsBySlug[current] = []
    continue
  }
  if (line.startsWith('## ')) current = null
  const item = line.match(/^\d+\.\s+(.+)$/)
  if (current && item) findingsBySlug[current].push(item[1].trim())
}

const apply = process.argv.includes('--apply')
for (const [slug, findings] of Object.entries(findingsBySlug)) {
  if (findings.length < 3 || findings.length > 5) {
    console.error(`${slug}: expected 3 to 5 findings, got ${findings.length}`)
    process.exit(1)
  }
  if (findings.some((f) => /[–—]/.test(f))) {
    console.error(`${slug}: contains an em or en dash`)
    process.exit(1)
  }
  const { data: post, error } = await supabase.from('blog_posts').select('id, schema_json').eq('slug', slug).single()
  if (error || !post) {
    console.error(`${slug}: not found`, error)
    process.exit(1)
  }
  const schema_json = { ...(post.schema_json || {}), key_findings: findings }
  if (!apply) {
    console.log(`[dry run] ${slug}: ${findings.length} findings`)
    continue
  }
  const { error: updateError } = await supabase.from('blog_posts').update({ schema_json }).eq('id', post.id)
  if (updateError) {
    console.error(`${slug}: update failed`, updateError)
    process.exit(1)
  }
  console.log(`${slug}: ${findings.length} findings written`)
}
