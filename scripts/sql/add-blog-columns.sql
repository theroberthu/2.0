-- Blog Infrastructure Migration
-- Run this in Supabase SQL Editor to add new columns for the blog system

-- Add new columns
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS category text;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS featured_image_alt text;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS author text DEFAULT 'Robert Hu';
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS keywords text[] DEFAULT '{}';
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS related_posts text[] DEFAULT '{}';
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS related_services text[] DEFAULT '{}';
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS reading_time integer;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS has_faq_schema boolean DEFAULT false;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS faq_data jsonb DEFAULT '[]'::jsonb;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT now();

-- Add constraint for valid categories
ALTER TABLE blog_posts ADD CONSTRAINT valid_category CHECK (
  category IS NULL OR category IN (
    'E-commerce Strategy', 'GEO & SEO', 'Digital Marketing',
    'Digital Transformation', 'The Messy Middle'
  )
);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts (category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts (published, published_at DESC);

-- Auto-update updated_at on row changes
CREATE OR REPLACE FUNCTION update_blog_posts_updated_at()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS blog_posts_updated_at ON blog_posts;
CREATE TRIGGER blog_posts_updated_at BEFORE UPDATE ON blog_posts
FOR EACH ROW EXECUTE FUNCTION update_blog_posts_updated_at();
