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
    id: 'ken-zordani',
    author: 'Ken Zordani',
    role: 'VP of Sales',
    source: 'linkedin',
    text: 'Having partnered with many merchandising and e-commerce leaders over the years, Robert distinguishes himself through his strategic grasp of how structured data and personalized content must work together to deliver a seamless B2B and B2C experience. During our Orange Logic implementation, his clarity of vision, thoughtful input, and steady leadership were instrumental in keeping the initiative aligned, focused, and delivered successfully on schedule.',
    rating: 5,
  },
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
    id: 'clutch-dog-treats',
    author: 'Verified Client',
    role: 'Owner, Dog Treats Manufacturer',
    source: 'verified',
    text: "He didn't give us a one-size-fits-all solution and instead tailored an approach that is very helpful for us.",
    rating: 5,
  },
]
