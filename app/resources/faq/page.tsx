// Design: Atmospheric Depth — dark carbon (#080B11), cyan/purple glows, Bricolage Grotesque + Hanken Grotesk
// Content: Claude 09_FAQ.md — GEO-critical FAQ page with FAQPage JSON-LD

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Vijilan Managed Security',
  description:
    "Answers about Vijilan's AI-augmented SOC, Praxis AI Engine, ThreatRespond, ThreatDefend, NextDefend, pricing, certifications, and integrations.",
}

const faqSections = [
  {
    title: 'About the Platform',
    faqs: [
      {
        q: 'What is Praxis?',
        a: "Praxis is Vijilan's proprietary AI Engine. It runs a multi-agent pipeline that maps alerts to MITRE ATT&CK, enriches indicators with live threat intelligence, auto-triages, and correlates behavior across your environment — achieving a median time to contain under one minute. Every automated action is verified by a human SOC analyst. Praxis is a force multiplier for analysts, not a replacement.",
      },
      {
        q: 'Does Vijilan use AI to replace human analysts?',
        a: 'No. Praxis handles speed and scale — triage, correlation, enrichment. Human analysts handle judgment and accountability. Every containment action is human-verified.',
      },
      {
        q: 'What does "machine speed, human-verified" mean?',
        a: "The AI detects, triages, and recommends containment in seconds. A human analyst confirms and owns the decision. You get automation's speed without the false-positive risk of fully autonomous security.",
      },
    ],
  },
  {
    title: 'Choosing a Solution',
    faqs: [
      {
        q: "What's the difference between ThreatRespond and ThreatDefend?",
        a: 'ThreatRespond works with your existing security tools — vendor-agnostic, "your tools, our SOC." ThreatDefend is CrowdStrike Falcon deployed and managed entirely by Vijilan — "our stack, our SOC." A client uses one or the other, never both on the same environment.',
      },
      {
        q: 'What is NextDefend?',
        a: 'NextDefend is managed CrowdStrike Next-Gen SIEM, offered three ways: Deploy (onboarding), Sustain (ongoing engineering), and Operate (fully managed with 24/7 SOC and threat hunting).',
      },
      {
        q: "I'm not sure which service I need. Where do I start?",
        a: 'Start with your situation. Keeping your tools → ThreatRespond. Want CrowdStrike managed → ThreatDefend. Drowning in SIEM data → NextDefend. Need to see your exposure first → ThreatAssess (free 60 days).',
      },
    ],
  },
  {
    title: 'Pricing',
    faqs: [
      {
        q: 'How much does it cost?',
        a: 'ThreatRespond is $4–$21 per user per month across four tiers. ThreatDefend uses dual pricing from $6/endpoint + $4/user. Both have a $500/month minimum and 15% annual prepay discount. NextDefend is scoped per environment.',
      },
      {
        q: 'Are there volume discounts?',
        a: 'Yes. ThreatRespond Advanced and up earn automatic volume discounts from 250 users, up to 22% at 2,500+.',
      },
    ],
  },
  {
    title: 'Trust & Compliance',
    faqs: [
      {
        q: 'What certifications does Vijilan hold?',
        a: 'SOC 2 Type 2 and ISO 27001, both independently audited. Vijilan is also a CrowdStrike Powered Service Provider (CPSP), Authorized Reseller, and member of the CrowdStrike Services Partner Program.',
      },
      {
        q: 'What compliance frameworks can Vijilan support?',
        a: 'HIPAA, PCI DSS, NIST CSF, CMMC 2.0, SOC 2, and ISO 27001, with audit-ready documentation at the appropriate tiers.',
      },
      {
        q: 'Is the SOC really 24/7?',
        a: 'Yes — a global SOC with round-the-clock human-verified coverage.',
      },
    ],
  },
  {
    title: 'Integrations',
    faqs: [
      {
        q: 'What PSA and ITSM platforms does Vijilan integrate with?',
        a: 'ConnectWise, Autotask (Datto), HaloPSA, FreshService, and Zendesk — so alerts, tickets, and incident reports flow into the systems your team already uses.',
      },
      {
        q: 'Which security tools does Vijilan work with?',
        a: 'Any major EDR (SentinelOne, Microsoft Defender, CrowdStrike, Carbon Black, Cylance, Sophos), identity providers (AD, Entra ID, Okta, Google Workspace), firewalls (Palo Alto, Fortinet, Cisco, SonicWall), and cloud platforms (Azure, AWS, GCP).',
      },
    ],
  },
]

// Build FAQPage JSON-LD for GEO/SEO
const allFaqs = faqSections.flatMap((s) => s.faqs)
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#080B11]">
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,212,255,0.07),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00AEEF]/20 bg-[#00AEEF]/5 text-[#00AEEF] text-xs font-medium mb-8">
            FAQ
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-800 text-white leading-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Answers about Vijilan&apos;s AI-augmented SOC, Praxis AI Engine, ThreatRespond, ThreatDefend, NextDefend, pricing, certifications, and integrations.
          </p>
        </div>
      </section>

      {/* ── FAQ SECTIONS ── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {faqSections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-700 text-white mb-8 pb-3 border-b border-white/10">
                {section.title}
              </h2>
              <div className="space-y-8">
                {section.faqs.map((faq) => (
                  <div key={faq.q}>
                    <p className="text-white font-medium mb-3 leading-snug">{faq.q}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS ── */}
      <section className="py-24 px-6 bg-[#0D1117]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-700 text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-slate-400 mb-8">
            Talk to a Vijilan security engineer — no sales pitch, just answers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00AEEF] text-[#080B11] font-semibold text-sm hover:bg-[#009FD9] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all"
            >
              Find Your Solution <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
