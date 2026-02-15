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

const supabase = createClient(envVars.NEXT_PUBLIC_SUPABASE_URL, envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY)

// Try to get all data from the table
const { data, error } = await supabase.from('blog_posts').select('*')
console.log('Data:', JSON.stringify(data, null, 2))
console.log('Error:', error)

if (data && data.length > 0) {
  console.log('\nColumns:', Object.keys(data[0]).join(', '))
} else {
  console.log('\nTable is empty or does not exist')
  // Try a minimal insert with just slug and title
  const { data: d2, error: e2 } = await supabase
    .from('blog_posts')
    .insert({ slug: 'test' })
    .select()
  console.log('Minimal insert result:', d2, e2)
}
