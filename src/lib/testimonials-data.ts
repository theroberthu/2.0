export interface Testimonial {
  id: string
  author: string
  role?: string
  source: 'linkedin' | 'verified'
  text: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'jack-sherrill',
    author: 'Jack Sherrill',
    role: 'Purchasing Specialist at A&W Supply',
    source: 'linkedin',
    text: 'We collaborated on various projects and marketing campaigns. Throughout our collaboration, he consistently displayed great attention to detail, strong problem-solving skills, and extensive knowledge in the ecommerce and marketing fields. Robert is truly an asset to any team.',
    rating: 5,
  },
  {
    id: 'upwork-fba-support',
    author: 'Verified Client',
    role: 'Amazon FBA & Seller Central Support',
    source: 'verified',
    text: 'Robert was professional, friendly and knew his ways around Amazon Seller Central, and helped me resolve my Amazon FBA issue. Hope to work with him again in the future.',
    rating: 5,
  },
  {
    id: 'upwork-listing-optimization',
    author: 'Verified Client',
    role: 'Amazon FBA Listing Optimization',
    source: 'verified',
    text: 'Robert is down-to-earth, cool, and great at what he does. His mini-videos really help us understand what needs to be done.',
    rating: 5,
  },
]
