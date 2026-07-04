import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL, SOCIAL_LINKS } from '@/lib/constants'

const ABOUT_DESCRIPTION =
  'Robert Hu studies how technology changes commerce. Every stage of his career, from ecommerce and marketplaces to Amazon, digital transformation, and AI, has been driven by the same question.'

export const metadata: Metadata = {
  title: 'About',
  description: ABOUT_DESCRIPTION,
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Robert Hu',
    description: ABOUT_DESCRIPTION,
    url: `${SITE_URL}/about`,
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Robert Hu',
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/images/robert-hu-headshot.png`,
  jobTitle: 'Commerce and Technology Researcher',
  description:
    'Robert Hu studies how technology changes commerce, from ecommerce and marketplaces to Amazon, digital transformation, and AI.',
  sameAs: [
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.x,
    SOCIAL_LINKS.youtube,
  ],
  knowsAbout: [
    'AI Commerce',
    'Agentic Commerce',
    'Product Discovery',
    'Customer Decision Making',
    'Digital Transformation',
    'Generative Engine Optimization',
  ],
}

const careerStages = [
  'Marketing',
  'Startup',
  'Technology',
  'Marketplaces',
  'Amazon',
  'Digital Marketing',
  'Merchandising',
  'Digital Commerce',
  'Digital Transformation',
  'AI Commerce',
]

const principles = [
  {
    title: 'Technology changes relationships more than departments',
    desc: 'A new system rarely stops at the org chart. It quietly reshapes how buyers and sellers find, trust, and depend on each other.',
  },
  {
    title: 'AI is changing commerce because it changes customer decision making',
    desc: 'The interesting shift is not the tooling. It is that people are deciding what to buy in an entirely new way.',
  },
  {
    title: 'The best insights come from connecting ideas across disciplines',
    desc: 'Merchandising, marketing, technology, operations, and customer behavior are usually studied apart. The signal lives where they meet.',
  },
  {
    title: 'Understanding systems matters more than mastering tools',
    desc: 'Tools are replaced constantly. The person who understands how the pieces fit together adapts to whatever comes next.',
  },
  {
    title: 'The best operators learn continuously',
    desc: 'Technology never stops changing, so the work of understanding it is never finished. That is the point, not the burden.',
  },
]

const researchAreas = [
  'AI Commerce',
  'Agentic Commerce',
  'Product Discovery',
  'Customer Decision Making',
  'Google AI Mode',
  'Retail Technology',
  'Digital Transformation',
  'Structured Product Information',
  'GEO',
]

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup data={personSchema} />

      {/* ───────────────────── Hero ───────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark py-24 md:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 items-start">
            <div>
              <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-5">About</span>
              <h1 className="text-3xl md:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-4">
                About Robert Hu
              </h1>
              <p className="text-xl md:text-2xl text-brand-accent font-medium leading-snug mb-7">
                I study how technology changes commerce.
              </p>
              <p className="text-[15px] md:text-base text-gray-400 leading-relaxed max-w-xl mb-6">
                For more than two decades I have worked at the intersection of ecommerce, merchandising, marketplaces, Amazon, digital commerce, digital transformation, and now AI. Every stage of my career has been driven by the same question.
              </p>
              <p className="text-lg md:text-xl text-white font-medium leading-snug max-w-xl">
                How does technology change the way businesses sell, compete, and grow?
              </p>
            </div>

            {/* Headshot */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-[260px] h-[320px] rounded-2xl bg-gradient-to-br from-brand-accent/10 to-brand-deep/10 overflow-hidden border border-white/[0.08] shadow-elevated">
                  <Image
                    src="/images/robert-hu-headshot.png"
                    alt="Robert Hu"
                    width={260}
                    height={320}
                    className="object-cover object-top w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Section 1: It started with one lesson ───────────────────── */}
      <section className="py-24 md:py-32 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <div className="mb-12">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4 block">Where It Began</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight leading-tight">
              It started with one lesson.
            </h2>
          </div>

          <div className="space-y-6 text-[16px] text-gray-300 leading-relaxed">
            <p>
              I trained as a marketer. Early on I joined an ecommerce startup, drawn to the pace and the promise of building something new.
            </p>
            <p>
              No one on the team had a technology background. So when the platform needed someone to own the technology, the responsibility landed with me. I learned it because the business needed me to, not because it was the plan.
            </p>
            <p>
              Then customer behavior shifted. Mobile traffic grew faster than anyone expected, and the platform was not built for it. The technology moved before the business was ready, and I was the one standing where those two things met.
            </p>
          </div>

          <blockquote className="my-12 border-l-4 border-brand-gold bg-white/[0.04] rounded-r-xl p-6 md:p-8">
            <p className="text-lg md:text-xl text-white font-medium leading-snug">
              Technology does not care whether a business is ready.
            </p>
          </blockquote>

          <div className="space-y-6 text-[16px] text-gray-300 leading-relaxed">
            <p>
              That lesson reshaped how I saw everything that came after. The change itself was not the surprise. The surprise was how much advantage went to the people who saw it coming, and how much cost fell on the people who did not.
            </p>
            <p className="text-white font-medium">
              Since then I have made it a priority to understand technological shifts before they become business problems.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────── Section 2: One question ───────────────────── */}
      <section className="py-24 md:py-32 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4 block">The Through Line</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight leading-tight">
              One question has guided my career.
            </h2>
          </div>

          {/* Timeline */}
          <div className="flex flex-col items-center">
            {careerStages.map((stage, i) => (
              <div key={stage} className="flex flex-col items-center w-full">
                <div className={`w-full max-w-xs text-center rounded-full border px-6 py-3 backdrop-blur-md transition-colors ${
                  i === careerStages.length - 1
                    ? 'border-brand-gold/40 bg-brand-gold/[0.08] text-white font-semibold'
                    : 'border-white/[0.08] bg-white/[0.04] text-gray-300'
                }`}>
                  {stage}
                </div>
                {i < careerStages.length - 1 && (
                  <div className="h-6 w-px bg-gradient-to-b from-white/20 to-white/5 my-1" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 text-center space-y-3">
            <p className="text-[16px] text-gray-400 leading-relaxed">
              The roles changed. The question stayed the same.
            </p>
            <p className="text-lg md:text-xl text-brand-accent font-medium leading-snug">
              How is technology changing commerce?
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────── Section 3: How I think ───────────────────── */}
      <section className="py-24 md:py-32 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4 block">Principles</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              How I think
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map((p, i) => (
              <div
                key={i}
                className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-7 md:p-8 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-[0_0_20px_rgba(45,125,154,0.12)] transition-all duration-300"
              >
                <span className="text-[13px] font-mono font-semibold text-brand-gold mb-4 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── Section 4: Why this website exists ───────────────────── */}
      <section className="py-24 md:py-32 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <div className="mb-12">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4 block">The Notebook</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight leading-tight">
              Why this website exists
            </h2>
          </div>

          <div className="space-y-6 text-[16px] text-gray-300 leading-relaxed">
            <p className="text-lg text-white font-medium">
              This website is my public research lab.
            </p>
            <p>
              I publish research because writing is how I think. Putting an idea into words forces me to test whether I actually understand it.
            </p>
            <p>
              I use AI to challenge my assumptions, connect ideas across disciplines, and accelerate how quickly I learn. Every article is an attempt to understand how technology is changing commerce, not simply to report that it is changing.
            </p>
            <p className="text-white font-medium">
              The goal is not to predict the future. The goal is to understand the shift early enough to help operators make better decisions.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────── Section 5: Current Research ───────────────────── */}
      <section className="py-24 md:py-32 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4 block">In Progress</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">
              Current research
            </h2>
            <p className="text-[15px] text-gray-400 leading-relaxed max-w-lg mx-auto">
              The questions I am actively working through right now.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {researchAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-md px-4 py-2.5 text-sm text-gray-300 hover:border-brand-accent/40 hover:text-white transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── Closing ───────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark py-24 md:py-32 border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/50 via-brand-dark to-brand-dark" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <div className="space-y-4 mb-12">
            <p className="text-xl md:text-2xl text-white font-medium leading-snug">
              Technology will continue to evolve.
            </p>
            <p className="text-xl md:text-2xl text-white font-medium leading-snug">
              Commerce will continue to evolve with it.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed pt-2">
              My work is to keep asking better questions, connect the dots across disciplines, and help others understand the shift before it becomes obvious.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-brand-gold text-white font-semibold px-7 py-3.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              Read the research
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="flex items-center gap-3">
              {[
                { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { href: SOCIAL_LINKS.x, label: 'X', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { href: SOCIAL_LINKS.youtube, label: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-200"
                  aria-label={social.label}
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
