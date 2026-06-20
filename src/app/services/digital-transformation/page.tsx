import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Digital Transformation',
  description:
    'E-commerce digital transformation consulting. AI tool evaluation, workflow automation, team enablement, SOPs, tech stack optimization, and data infrastructure for growing brands.',
  alternates: { canonical: '/services/digital-transformation' },
  openGraph: {
    title: 'Digital Transformation | Robert Hu - E-commerce Strategist',
    description:
      'E-commerce digital transformation consulting. AI tool evaluation, workflow automation, team enablement, SOPs, tech stack optimization, and data infrastructure for growing brands.',
    url: `${SITE_URL}/services/digital-transformation`,
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Transformation',
  serviceType: 'Digital Transformation Consulting',
  description:
    'E-commerce digital transformation — AI tool evaluation, workflow automation, team enablement, and tech stack optimization for growing brands.',
  provider: {
    '@type': 'Person',
    name: 'Robert Hu',
    url: `${SITE_URL}/about`,
  },
  areaServed: 'US',
  url: `${SITE_URL}/services/digital-transformation`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What AI tools should my e-commerce brand be using?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your specific workflows and pain points, which is why I start with an assessment rather than a tool recommendation. The right AI tools for your brand depend on where you are spending the most time on repetitive tasks, where errors are costing you money, and what your team can realistically adopt. I help you cut through the noise and focus on the tools that will actually move the needle for your business.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from hiring an IT consultant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I am not an IT consultant. I am an e-commerce strategist who understands technology. The difference is that my recommendations are grounded in 20+ years of e-commerce operations experience, not just technical capability. I evaluate tools and workflows based on how they impact your revenue, margins, and competitive position, not just whether they work technically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my team need technical skills to use the tools you recommend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. I specifically evaluate tools based on what your team can realistically adopt. If a tool requires a developer to maintain, and you do not have a developer, it is not the right tool. Every recommendation includes a training plan and documentation so your team can use it confidently from day one.',
      },
    },
  ],
}

export default function DigitalTransformationPage() {
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
          <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">Transformation</span>
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight mb-4">
            Digital Transformation
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
            Your competitors are using AI to do in minutes what takes your team hours. I help you close that gap with workflows that actually get adopted.
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
              I help e-commerce brands modernize how they operate by implementing the right tools, automating the right workflows, and building systems their teams can actually use. This isn&apos;t about chasing every new AI tool. It&apos;s about finding the ones that solve real problems in your business. Here&apos;s what that covers:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">AI Tool Evaluation and Selection</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  There are hundreds of AI tools claiming to transform your e-commerce business. Most of them won&apos;t. I evaluate tools based on your specific workflows, team capabilities, and business goals. You get a shortlist of tools that are worth your time and money, with a clear implementation plan for each one.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Workflow Automation</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Identifying the repetitive tasks that are eating your team&apos;s time and building automated workflows to handle them. This includes inventory alerts, order processing, customer service triage, listing updates, review monitoring, and reporting. The goal is to free up your team&apos;s time for the work that actually requires human judgment.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Team Enablement and Training</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  Tools are only as good as the people using them. I build training programs that get your team comfortable with new workflows quickly, with hands-on sessions and documentation they can reference later. Adoption is the difference between a tool that transforms your business and one that collects dust.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Process Documentation and SOPs</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  If your processes live in people&apos;s heads, your business is fragile. I help brands document their core workflows as standard operating procedures that any team member can follow. This makes hiring easier, training faster, and ensures that quality doesn&apos;t depend on any single person being available.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Tech Stack Evaluation</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  A full review of every tool in your e-commerce operation: inventory management, analytics, repricing, customer service, project management, and everything in between. I identify redundancies, gaps, and integration opportunities. Most brands are paying for tools they don&apos;t fully use while missing tools that would save them hours every week.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Data and Reporting Infrastructure</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  You can&apos;t improve what you can&apos;t measure, and most brands are drowning in data without any real insight. I help you build reporting infrastructure that connects your marketplace data, advertising performance, inventory levels, and financials into dashboards that actually inform decisions.
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
              You&apos;re an e-commerce brand owner or operator who knows you&apos;re still doing too much manually. Your team is spending hours on tasks that should be automated. Your tools don&apos;t talk to each other. Your reporting is a collection of spreadsheets that takes half a day to compile. You know AI could help, but you&apos;re not sure where to start or which tools are worth the investment.
            </p>
            <p>
              Maybe you&apos;ve tried a few AI tools on your own and they didn&apos;t stick, or you signed up for software that seemed great in the demo but doesn&apos;t fit how your team actually works. You don&apos;t need another tool recommendation. You need someone who can look at your entire operation and tell you what to change, in what order, and how to make it stick.
            </p>
            <p>
              You&apos;re doing $500K to $5M in revenue and your growth is starting to outpace your systems. The processes that got you here won&apos;t get you to the next level, and you can feel it in every bottleneck, every manual workaround, and every decision you make based on gut feeling instead of data.
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
                <h3 className="text-[15px] font-semibold text-white mb-1">Assessment</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  I map your current tools, workflows, and team structure. I identify where time is being wasted, where errors are creeping in, and where the biggest opportunities for automation and improvement exist. This includes a full tech stack audit and an evaluation of your team&apos;s readiness for new tools.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-mono font-bold text-brand-accent/60 tracking-widest mt-1">02</span>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Roadmap</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  I build a prioritized transformation roadmap with specific tools, timelines, and expected outcomes. Quick wins come first so you see value immediately, followed by larger structural changes that compound over time. Every recommendation includes cost, implementation effort, and projected time savings so you can make informed decisions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-mono font-bold text-brand-accent/60 tracking-widest mt-1">03</span>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1">Implementation Support</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  I work alongside your team to implement the roadmap, from tool setup and configuration to workflow design and team training. I don&apos;t hand you a plan and disappear. I stay involved until the new systems are running smoothly and your team is confident using them.
                </p>
              </div>
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
              A modernized operation with tools that talk to each other, workflows that run without manual intervention, and a team that knows how to use everything. You get SOPs for every core process, a reporting dashboard that gives you real visibility into your business, and the confidence that your systems can handle the growth you&apos;re building toward.
            </p>
            <p>
              The brands I work with typically reclaim 10 to 20 hours per week in team time within the first month. That&apos;s not a projection. It&apos;s the direct result of automating the repetitive work that was consuming your most valuable resource: your team&apos;s attention.
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
            Let&apos;s Modernize Your Operations
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
