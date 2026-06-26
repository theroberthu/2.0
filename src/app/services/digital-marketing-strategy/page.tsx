import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Digital Marketing Strategy',
  description:
    'Digital marketing strategy for e-commerce brands. Amazon PPC, Walmart Connect, campaign architecture, budget allocation, and performance analytics for profitable growth.',
  alternates: { canonical: '/services/digital-marketing-strategy' },
  openGraph: {
    title: 'Digital Marketing Strategy | Robert Hu',
    description:
      'Digital marketing strategy for e-commerce brands. Amazon PPC, Walmart Connect, campaign architecture, budget allocation, and performance analytics for profitable growth.',
    url: `${SITE_URL}/services/digital-marketing-strategy`,
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Marketing Strategy',
  serviceType: 'Digital Marketing Strategy',
  description:
    'Marketing strategy for e-commerce brands — Amazon PPC, Walmart Connect, campaign architecture, budget allocation, and performance analytics.',
  provider: {
    '@type': 'Person',
    name: 'Robert Hu',
    url: `${SITE_URL}/about`,
  },
  areaServed: 'US',
  url: `${SITE_URL}/services/digital-marketing-strategy`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much should I be spending on Amazon PPC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no universal answer because the right budget depends on your margins, competitive landscape, and growth goals. What I can tell you is that most brands I work with are either spending too much on the wrong campaigns or not enough on the right ones. I help you build a budget framework tied to your actual unit economics so every dollar has a clear purpose.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage ad accounts, or just build the strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. I offer one-time strategy engagements for brands that want a plan they can run themselves, and ongoing Amazon Ads management for brands that want someone in the account every week. Ongoing management starts at $1,000/month with no long-term contracts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Walmart Connect worth investing in right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and the window for early-mover advantage is still open. Walmart Connect is maturing fast, but the auction competition is still a fraction of what you face on Amazon. Brands that build their advertising presence on Walmart now are getting better returns and establishing visibility that will be much more expensive to buy later.',
      },
    },
  ],
}

export default function DigitalMarketingStrategyPage() {
  return (
    <>
      <SchemaMarkup data={serviceSchema} />
      <SchemaMarkup data={faqSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f7f9fb 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-400 hover:text-brand-accent transition-colors duration-200 mb-6">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">Marketing</span>
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight mb-4">
            Digital Marketing Strategy
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
            Stop guessing where your ad budget goes. I build marketing strategies that drive profitable growth, not just impressions.
          </p>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">What I Do</h2>
          </div>
          <div className="pl-12">
            <p className="text-[15px] text-gray-400 leading-relaxed mb-8">
              I help e-commerce brands build marketing strategies that connect ad spend to actual business outcomes. Not vanity metrics. Not ROAS in a vacuum. Real profitability at the product and campaign level. Here&apos;s what that looks like:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">PPC Strategy (Amazon, Walmart Connect)</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Sponsored Products, Sponsored Brands, Sponsored Display, and Walmart Connect campaigns built around your actual margins and growth goals. I design campaign structures that separate discovery from defense, match types to funnel stages, and give you clear visibility into what&apos;s working and why. Most brands I audit are running campaigns that were set up once and never restructured.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Campaign Architecture</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  How your campaigns are organized determines how efficiently you spend and how easily you can optimize. I build campaign architectures with clear naming conventions, logical ad group structures, and intentional keyword segmentation so you (or your team) can manage performance without guessing.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Budget Allocation and Forecasting</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Where your budget goes matters more than how much you spend. I build budget frameworks tied to your unit economics, with clear allocation across campaigns, product priorities, and growth vs. profitability objectives. You&apos;ll know exactly how much you need to spend, where it should go, and what return to expect.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Promotional Strategy</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Deals, coupons, Lightning Deals, and seasonal promotions that drive meaningful volume without training your customers to wait for discounts. I build promotional calendars aligned with marketplace events and your inventory cycle so promotions serve your strategy instead of undermining it.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Performance Analytics and Reporting</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  I help you build dashboards and reporting frameworks that show you what actually matters: contribution profit by product, TACoS trends, new-to-brand metrics, and the relationship between ad spend and organic rank. The goal is decision-quality data, not 40-page reports that nobody reads.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Off-Marketplace Traffic Strategy</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Driving external traffic to your Amazon or Walmart listings (from Google, social, email, or influencer channels) is one of the most underused growth levers in e-commerce. I help brands build external traffic strategies that improve organic rank, qualify for attribution bonuses, and reduce dependence on marketplace advertising alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">Who It&apos;s For</h2>
          </div>
          <div className="text-[15px] text-gray-400 leading-relaxed pl-12 space-y-4">
            <p>
              You&apos;re spending $5K or more per month on marketplace advertising, and you&apos;re not confident it&apos;s working as hard as it should. Your ACoS might look fine on paper, but you suspect you&apos;re overspending on branded terms, wasting budget on low-converting campaigns, or missing opportunities you can&apos;t see in your current reporting.
            </p>
            <p>
              Maybe an agency is managing your ads, but you don&apos;t really understand what they&apos;re doing or why. Or you&apos;re managing everything yourself because the last agency couldn&apos;t justify their fee with the results they delivered. Either way, you need someone who can look at the whole picture and tell you where the real opportunities are.
            </p>
            <p>
              You might also be selling on Amazon but haven&apos;t started advertising on Walmart yet, or you&apos;re not driving any external traffic to your listings. Those are two of the biggest missed opportunities I see in brands at the $500K to $5M revenue level.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">How It Works</h2>
          </div>
          <div className="pl-12 space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-mono font-bold text-brand-accent/60 tracking-widest mt-1">01</span>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Account Audit</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  I review your full advertising portfolio: campaign structure, keyword strategy, bid management, budget allocation, and performance by product. I also look at how your advertising connects to your organic rank and overall profitability, not just ROAS in isolation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-mono font-bold text-brand-accent/60 tracking-widest mt-1">02</span>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Restructure and Plan</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  I build a new campaign architecture, budget framework, and promotional calendar tailored to your products and goals. Every recommendation ties back to your unit economics so you know the expected impact before you spend a dollar.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-mono font-bold text-brand-accent/60 tracking-widest mt-1">03</span>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Optimize and Scale</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  I help you implement the strategy and build the reporting frameworks that let you (or your team) optimize ongoing. The goal is not to create a dependency on me. It&apos;s to give you a system that works and the knowledge to keep it running.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Strategy: Ongoing Ad Management */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">Beyond Strategy: Ongoing Ad Management</h2>
          </div>
          <div className="pl-12">
            <p className="text-[15px] text-gray-400 leading-relaxed mb-6">
              Some brands want a strategy they can run themselves. Others want someone in the account every week, optimizing bids, mining search terms, and managing spend. I offer ongoing Amazon Ads management for brands that want hands-on help — not just a plan.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Weekly bid optimization and search term harvesting',
                'Campaign restructuring and ongoing A/B testing',
                'Monthly performance reporting tied to your unit economics',
                'Direct access to me, not a junior account manager',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[15px] text-gray-400 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <p className="text-[15px] font-semibold text-white">
                Starting at $1,000/month.{' '}
                <span className="text-gray-400 font-normal">No long-term contracts.</span>
              </p>
              <a
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block shrink-0 border border-brand-gold text-brand-gold text-[13px] font-semibold px-5 py-2.5 rounded-md hover:bg-brand-gold hover:text-white transition-all duration-200"
              >
                Subscribe to Hu&apos;s Weekly Hoot
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">What You Walk Away With</h2>
          </div>
          <div className="text-[15px] text-gray-400 leading-relaxed pl-12 space-y-4">
            <p>
              A complete marketing strategy with restructured campaigns, a budget allocation framework, a promotional calendar, and a reporting dashboard that shows you what matters. Not a set of recommendations you have to figure out how to implement. A system that&apos;s ready to run.
            </p>
            <p>
              You&apos;ll understand exactly where your ad budget is going, why it&apos;s going there, and how to measure whether it&apos;s working. That clarity is what lets you scale advertising profitably instead of just spending more and hoping for the best.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-deep py-20 md:py-28">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white leading-snug mb-4 tracking-tight">
            Let&apos;s Fix Your Marketing
          </h2>
          <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
            15 minutes. No pitch. Just honest strategy for your brand.
          </p>
          <a
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-gold text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Subscribe to Hu&apos;s Weekly Hoot
          </a>
        </div>
      </section>
    </>
  )
}
