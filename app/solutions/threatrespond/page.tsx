// Design: Atmospheric Depth — dark carbon (#080B11), cyan glow (#00D4FF), Bricolage Grotesque + Hanken Grotesk
// Content: Claude 05_ThreatRespond.md

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Managed SOC for Your Existing Tools | ThreatRespond™ by Vijilan',
  description:
    'Keep your EDR, SIEM, and identity tools — add a 24/7 AI-augmented SOC. ThreatRespond is vendor-agnostic managed XDR. Six domains, human-verified, from $4/user/mo.',
}

const domains = [
  { domain: 'Endpoints & Devices', coverage: 'Any existing EDR' },
  { domain: 'Identity & Access', coverage: 'AD, Entra ID, Okta, Google Workspace, Duo' },
  { domain: 'Data & Cloud Apps', coverage: 'M365, Exchange, SharePoint, Teams, Salesforce' },
  { domain: 'Networks & Firewalls', coverage: 'Palo Alto, Fortinet, Cisco, SonicWall, Meraki' },
  { domain: 'Cloud Infrastructure', coverage: 'Azure, AWS, GCP, API activity' },
  { domain: 'Applications & SaaS', coverage: 'Custom app logs, WAF, custom parsers (Advanced+)' },
]

const tiers = [
  {
    name: 'Essential',
    price: '$4',
    unit: '/user/mo',
    soc: 'SOC advises, your team acts',
    itdr: false,
    highlights: ['24/7 monitoring', '6 domains', 'ThreatLog SIEM', 'White-label'],
    popular: false,
  },
  {
    name: 'Advanced',
    price: '$7',
    unit: '/user/mo',
    soc: 'SOC acts (ThreatContain™)',
    itdr: true,
    highlights: ['Full ITDR', 'Dark web monitoring', '15-min response', 'Volume discounts'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$12',
    unit: '/user/mo',
    soc: 'SOC acts + threat hunting',
    itdr: true,
    highlights: ['Proactive hunting', 'EASM', 'CMMC L2 evidence', 'Compliance reporting'],
    popular: false,
  },
  {
    name: 'Elite',
    price: '$21',
    unit: '/user/mo',
    soc: 'Dedicated concierge',
    itdr: true,
    highlights: ['Named analyst', 'Custom SLA', 'vCISO', 'IR retainer'],
    popular: false,
  },
]

const faqs = [
  { q: 'Do I have to replace my current EDR?', a: 'No. ThreatRespond is vendor-agnostic and works with any major EDR. That\'s the entire point — keep what you have, add the SOC.' },
  { q: 'When does the SOC take action versus just alerting?', a: 'At Essential, the SOC advises and your team acts. From Advanced upward, ThreatContain™ lets the Vijilan SOC act directly — disabling accounts, isolating hosts, blocking IPs.' },
  { q: 'Is identity threat detection included?', a: 'ITDR is included from the Advanced tier up. Essential is monitoring and guided response.' },
  { q: 'How long is onboarding?', a: 'About one hour, using the ThreatSensor virtual appliance.' },
  { q: 'Is there a data cap on the SIEM?', a: 'No. ThreatLog has no data caps and no per-GB fees, with 7-year retention.' },
]

export default function ThreatRespondPage() {
  return (
    <div className="min-h-screen bg-[#080B11]">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,212,255,0.10),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-medium mb-8">
            For teams who&apos;ve already invested in security tools
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-800 text-white leading-tight mb-6">
            You bought the tools.{' '}
            <span className="text-[#00D4FF]">Now get the team that watches them 24/7.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            You don&apos;t need to rip out your stack to get a real SOC. Keep your EDR, your SIEM, your identity provider — and add our AI-augmented Security Operations Center on top. We call it ThreatRespond. Your tools. Our SOC.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-[#00D4FF] text-[#080B11] font-semibold text-sm hover:bg-[#00BFEA] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              See Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="py-20 px-6 bg-[#0D1117]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-medium mb-6">
            Your Tools. Our SOC.
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-white mb-6">
            Vendor-agnostic by design.
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg max-w-3xl">
            ThreatRespond works with what you already run — SentinelOne, Microsoft Defender, Carbon Black, CrowdStrike, Cylance, Sophos, and more. No rip-and-replace. No retraining. Praxis ingests your existing telemetry, maps it to MITRE ATT&CK, correlates across all six domains, and surfaces real threats in seconds. A human analyst verifies and — from the Advanced tier — acts.
          </p>
        </div>
      </section>

      {/* ── SIX DOMAINS ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-700 text-white mb-2">One SOC. Every surface.</h2>
          <p className="text-slate-400 mb-10">Six security domains monitored simultaneously.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {domains.map((d) => (
              <div key={d.domain} className="card-glass rounded-xl p-5 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-[#00D4FF]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-1">{d.domain}</p>
                  <p className="text-xs text-slate-500">{d.coverage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIERS ── */}
      <section className="py-20 px-6 bg-[#0D1117]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-700 text-white mb-2">Four tiers. Pick how deep the SOC goes.</h2>
          <p className="text-slate-400 mb-10 text-sm">Per user / month. $500/mo platform minimum. 15% annual prepay discount. Volume discounts auto-apply at 250+ users.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`card-glass rounded-2xl p-6 relative overflow-hidden ${tier.popular ? 'border-[#00D4FF]/40' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent" />
                )}
                {tier.popular && (
                  <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20 font-medium">
                    Most Popular
                  </span>
                )}
                <div className="mb-4">
                  <p className="text-sm text-slate-400 mb-1">{tier.name}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl font-700 text-white">{tier.price}</span>
                    <span className="text-xs text-slate-500">{tier.unit}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mb-4 leading-snug">{tier.soc}</p>
                <div className="space-y-2">
                  {tier.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3 h-3 text-[#00D4FF] shrink-0" />
                      {h}
                    </div>
                  ))}
                  {tier.itdr && (
                    <div className="flex items-center gap-2 text-xs text-[#00D4FF]">
                      <CheckCircle className="w-3 h-3 shrink-0" />
                      ITDR Included
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL DEPTH ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-700 text-white mb-6">What the SOC actually does at each tier.</h2>
          <p className="text-slate-400 leading-relaxed">
            At Essential, Praxis triages and the SOC advises — your team executes containment. From Advanced up, ThreatContain™ activates: the Vijilan SOC disables compromised accounts, isolates hosts, and blocks malicious IPs directly on your tooling, in real time. Premium adds proactive, hypothesis-driven threat hunting on the MITRE ATT&CK framework. Onboarding runs ~1 hour via ThreatSensor™, our Cribl Stream-powered virtual appliance that routes your telemetry to the SOC and ThreatLog™ SIEM — no data caps, no per-GB fees, 7-year retention.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-[#0D1117]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-700 text-white mb-10">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-white/5 pb-6">
                <p className="text-white font-medium mb-2">{faq.q}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-700 text-white mb-4">
            Keep your tools. Add the SOC they were missing.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00D4FF] text-[#080B11] font-semibold text-sm hover:bg-[#00BFEA] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all"
            >
              Compare with ThreatDefend <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
