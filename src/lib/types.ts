export interface Service {
  id: string
  slug: string
  title: string
  description: string
  long_description: string | null
  problem: string | null
  approach_steps: { title: string; description: string }[] | null
  deliverables: string[] | null
  who_its_for: string[] | null
  faq: { q: string; a: string }[] | null
  meta_title: string | null
  meta_description: string | null
  icon: string | null
  created_at: string
}

export type BlogCategory =
  | 'E-commerce Strategy'
  | 'GEO & SEO'
  | 'Digital Marketing'
  | 'Digital Transformation'
  | 'The Messy Middle'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string | null
  content: string | null
  published: boolean
  published_at: string | null
  meta_title: string | null
  meta_description: string | null
  featured_image: string | null
  featured_image_alt: string | null
  category: BlogCategory | null
  author: string | null
  keywords: string[] | null
  related_posts: string[] | null
  related_services: string[] | null
  reading_time: number | null
  has_faq_schema: boolean | null
  faq_data: { q: string; a: string }[] | null
  updated_at: string | null
  created_at: string
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  excerpt: string | null
  content: string | null
  client_name: string | null
  results: string | null
  published: boolean
  published_at: string | null
  meta_title: string | null
  meta_description: string | null
  featured_image: string | null
  created_at: string
}

export interface Lead {
  id?: string
  name: string
  email: string
  website_url: string | null
  revenue_range: string | null
  challenge: string | null
  created_at?: string
}

export interface Subscriber {
  id?: string
  email: string
  created_at?: string
}

export interface Database {
  public: {
    Tables: {
      services: {
        Row: Service
        Insert: Omit<Service, 'id' | 'created_at'>
        Update: Partial<Omit<Service, 'id' | 'created_at'>>
      }
      blog_posts: {
        Row: BlogPost
        Insert: Omit<BlogPost, 'id' | 'created_at'>
        Update: Partial<Omit<BlogPost, 'id' | 'created_at'>>
      }
      case_studies: {
        Row: CaseStudy
        Insert: Omit<CaseStudy, 'id' | 'created_at'>
        Update: Partial<Omit<CaseStudy, 'id' | 'created_at'>>
      }
      leads: {
        Row: Lead
        Insert: Omit<Lead, 'id' | 'created_at'>
        Update: Partial<Omit<Lead, 'id' | 'created_at'>>
      }
      subscribers: {
        Row: Subscriber
        Insert: Omit<Subscriber, 'id' | 'created_at'>
        Update: Partial<Omit<Subscriber, 'id' | 'created_at'>>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
