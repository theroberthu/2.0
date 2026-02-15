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

// Use Supabase's REST API to get table info
// First try inserting an empty row to see what columns are required
const { data, error } = await supabase.from('blog_posts').insert({}).select()
if (error) {
  console.log('Insert error reveals column info:', error)
}

// Also try the OpenAPI spec
const response = await fetch(`${envVars.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/blog_posts?select=*&limit=0`, {
  headers: {
    'apikey': envVars.SUPABASE_SERVICE_ROLE_KEY,
    'Authorization': `Bearer ${envVars.SUPABASE_SERVICE_ROLE_KEY}`,
    'Accept': 'application/json',
    'Prefer': 'count=exact'
  }
})
console.log('\nResponse status:', response.status)
console.log('Content-Range:', response.headers.get('content-range'))

// Try to get the definition
const defResponse = await fetch(`${envVars.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/`, {
  headers: {
    'apikey': envVars.SUPABASE_SERVICE_ROLE_KEY,
    'Authorization': `Bearer ${envVars.SUPABASE_SERVICE_ROLE_KEY}`,
    'Accept': 'application/openapi+json'
  }
})
if (defResponse.ok) {
  const spec = await defResponse.json()
  const blogPostsDef = spec.definitions?.blog_posts
  if (blogPostsDef) {
    console.log('\nblog_posts columns:')
    for (const [col, info] of Object.entries(blogPostsDef.properties)) {
      console.log(`  ${col}: ${info.type || info.format || 'unknown'}${info.description ? ' - ' + info.description : ''}`)
    }
    console.log('\nRequired:', blogPostsDef.required || 'none')
  } else {
    console.log('\nNo blog_posts definition found')
    console.log('Available tables:', Object.keys(spec.definitions || {}))
  }
}
