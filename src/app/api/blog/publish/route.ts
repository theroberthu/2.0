import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  if (!token || token !== process.env.BLOG_API_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = getSupabaseAdmin()
  if (!supabase) {
    return NextResponse.json({ error: 'Database unavailable' }, { status: 503 })
  }

  try {
    const body = await request.json()
    const { slug } = body

    if (!slug || !body.title || !body.content) {
      return NextResponse.json({ error: 'Missing required fields: slug, title, content' }, { status: 400 })
    }

    // Upsert by slug
    const { data: existing } = await supabase
      .from('blog_posts')
      .select('id')
      .eq('slug', slug)
      .single()

    if (existing) {
      const { data, error } = await supabase
        .from('blog_posts')
        .update(body)
        .eq('slug', slug)
        .select('id, slug, title, status')
      if (error) return NextResponse.json({ error: error.message }, { status: 500 })
      return NextResponse.json({ action: 'updated', post: data![0] })
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .insert(body)
      .select('id, slug, title, status')
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ action: 'inserted', post: data![0] })
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }
}
