import { Metadata } from 'next'
import Link from 'next/link'
import HideGlobalChrome from '@/components/HideGlobalChrome'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected research and experiments in AI product discovery, systems automation, and how technology changes commerce.',
  robots: { index: false, follow: false },
}

const PROJECTS = [
  {
    label: 'Product',
    title: 'YourGEOReport: Free AI Visibility Reports for E-commerce Brands',
    description: [
      'Productized the GEO audit concept into a free self-service tool. Tests real buyer-style prompts across ChatGPT and Claude, then generates a report showing which competitors AI recommends instead of the user\'s brand.',
      'Covers 2 AI engines, 10+ buyer prompts, and 5+ competitors per report. Built with Next.js. Reports delivered within 24 hours. I didn\'t just consult on GEO. I built a product around it.',
    ],
    link: 'https://yourgeoreport.com',
  },
  {
    label: 'Benchmarking',
    title: 'RecoScope: AI Recommendation Benchmarks for Consumer Brands',
    description: [
      'Built an ongoing benchmark tracking system that monitors how AI models (ChatGPT, Claude, Gemini) recommend brands across consumer categories. Classifies AI engines by commercial interest: independent vs. search-grounded vs. commerce-influenced.',
      'Runs standardized prompts monthly to build comparable datasets over time. Surfaces the gap between marketplace popularity and AI visibility. Proof of technical depth and conviction that AI-driven product discovery is a durable shift.',
    ],
    link: 'https://getrecoscope.com',
  },
  {
    label: 'Automation',
    title: 'Prospect Research Pipeline',
    description: [
      'Built a fully automated prospect research and outreach system that runs Monday and Thursday at 6am via Cowork on a Mac Mini. Three-session staged structure: Session 1 researches prospects, Session 2 scores them, Session 3 writes to CRM.',
      'Approval gates between each session. CRM integration via Apps Script writes to Google Sheets using header-name mapping. Cold outreach follows a Day 1 / Day 5 / Day 12 sequence with rules-based personalization. Operational systems thinking: the infrastructure a senior manager builds, not just executes.',
    ],
    link: null,
  },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <HideGlobalChrome />
      {/* Header */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-6 flex items-center justify-between">
          <span className="text-[15px] font-semibold text-white tracking-tight">Robert Hu</span>
          <Link
            href="/"
            className="text-[13px] text-gray-500 hover:text-brand-accent transition-colors duration-200"
          >
            theroberthu.com &rarr;
          </Link>
        </div>
      </header>

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight mb-4">
            Work
          </h1>
          <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
            Selected projects in Generative Engine Optimization, AI product discovery tooling, and systems automation. Each entry follows the same pattern: identify the problem, build the system, measure the result.
          </p>
        </div>
      </section>

      {/* Projects */}
      {PROJECTS.map((project) => (
        <section
          key={project.title}
          className="border-t border-white/[0.06] py-14 md:py-20"
        >
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent bg-brand-accent/[0.1] px-2.5 py-1 rounded-full">
              {project.label}
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mt-4 mb-4">
              {project.title}
            </h2>
            <div className="space-y-4 max-w-3xl">
              {project.description.map((p, j) => (
                <p key={j} className="text-sm text-gray-400 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent hover:text-white transition-colors duration-200 mt-5"
              >
                {new URL(project.link).hostname}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </section>
      ))}

      {/* SEO Foundation */}
      <section className="border-t border-white/[0.06] py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent bg-brand-accent/[0.1] px-2.5 py-1 rounded-full">
            Foundation
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mt-4 mb-4">
            SEO Foundation
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">
            Agency SEO background spanning technical audits, rankings recovery, and organic traffic growth across mid-market e-commerce brands. Traditional SEO is the foundation that GEO builds on. I have the fundamentals.
          </p>
        </div>
      </section>

      {/* Writing */}
      <section className="border-t border-white/[0.06] py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent bg-brand-accent/[0.1] px-2.5 py-1 rounded-full">
            Content
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mt-4 mb-4">
            Writing
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-3xl mb-5">
            Regular publishing on GEO, AI-powered product discovery, and e-commerce strategy. Blog at theroberthu.com plus a LinkedIn newsletter, Hu&apos;s Weekly Hoot, covering the intersection of AI and commerce.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent hover:text-white transition-colors duration-200"
          >
            theroberthu.com/blog
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-white/[0.06] py-10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          <span className="text-[13px] text-gray-600">Robert Hu</span>
          <Link
            href="/"
            className="text-[13px] text-gray-500 hover:text-brand-accent transition-colors duration-200"
          >
            theroberthu.com
          </Link>
        </div>
      </footer>
    </div>
  )
}
