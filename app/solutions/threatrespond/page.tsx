// Design: Atmospheric Depth — dark carbon (#080B11), Vijilan Blue (#56C9E8), Bricolage Grotesque + Hanken Grotesk
// Revision 01: wordmark colors, hide Elite pricing, expand tier descriptions, fix CTA links

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield } from 'lucide-react'
import { Wordmark } from '@/app/components/Wordmark'

export const metadata: Metadata = {
  title: 'Managed SOC for Your Existing Tools | ThreatRespond™ by Vijilan',
  description:
    'Keep your EDR, SIEM, and identity tools — add a 24/7 AI-augmented SOC. ThreatRespond is vendor-agnostic managed XDR. Six domains, human-verified, from $4/user/mo.',
}

const domains = [
  { domain: 'Endpoints & Devices', coverage: 'Any existing EDR — SentinelOne, Microsoft Defender, CrowdStrike, Carbon Black, Cylance, Sophos' },
  { domain: 'Identity & Access', coverage: 'AD, Entra ID, Okta, Google Workspace, Duo' },
  { domain: 'Data & Cloud Apps', coverage: 'M365, Exchange, SharePoint, Teams, Salesforce' },
  { domain: 'Networks & Firewalls', coverage: 'Palo Alto, Fortinet, Cisco, SonicWall, Meraki' },
  { domain: 'Cloud Infrastructure', coverage: 'Azure, AWS, GCP — API activity and control-plane events' },
  { domain: 'Applications & SaaS', coverage: 'Custom app logs, WAF, custom parsers (Advanced+)' },
]

const tiers = [
  {
    name: 'Essential',
    price: '$4',
    unit: '/user/mo',
    soc: 'SOC advises, your team acts',
    itdr: false,
    highlights: [
      '24/7 monitoring across all six domains',
      'ThreatLog™ SIEM — no data caps, 7-year retention',
      'MITRE ATT&CK mapping on every alert',
      'White-label ready for MSP delivery',
      'PSA/ITSM integration (ConnectWise, Autotask, HaloPSA, FreshService, Zendesk)',
    ],
    popular: false,
  },
  {
    name: 'Advanced',
    price: '$7',
    unit: '/user/mo',
    soc: 'SOC acts via ThreatContain™',
    itdr: true,
    highlights: [
      'ThreatContain™ — SOC disables accounts, isolates hosts, and blocks malicious IPs directly on your tooling',
      'Full ITDR — dark web credential monitoring, impossible travel, MFA-fatigue, BEC, OAuth abuse, lateral movement',
      'External Attack Surface Management — finds internet-facing assets and shadow IT before attackers do',
      '15-minute response SLA',
      'Volume discounts auto-apply at 250+ users',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$12',
    unit: '/user/mo',
    soc: 'SOC acts + proactive threat hunting',
    itdr: true,
    highlights: [
      'Proactive threat hunting — hypothesis-driven hunts mapped to MITRE ATT&CK, not just reactive triage',
      'EASM — continuous external attack surface monitoring',
      'CMMC Level 2 evidence package — audit-ready documentation',
      'Compliance reporting for HIPAA, PCI DSS, NIST CSF, SOC 2, ISO 27001',
    ],
    popular: false,
  },
  {
    name: 'Elite',
    price: null,
    unit: '',
    soc: 'Dedicated concierge analyst',
    itdr: true,
    highlights: [
      'Named senior analyst — dedicated point of contact',
      'Custom SLA — negotiated response and resolution targets',
      'vCISO advisory — strategic security leadership',
      'IR retainer — pre-committed incident response hours',
    ],
    popular: false,
  },
]

const faqs = [
  { q: 'Do I have to replace my current EDR?', a: 'No. ThreatRespond is vendor-agnostic and works with any major EDR. That\'s the entire point — keep what you have, add the SOC.' },
  { q: 'When does the SOC take action versus just alerting?', a: 'At Essential, the SOC advises and your team acts. From Advanced upward, ThreatContain™ lets the Vijilan SOC act directly — disabling accounts, isolating hosts, blocking IPs.' },
  { q: 'Is identity threat detection included?', a: 'ITDR is included from the Advanced tier up. Essential is monitoring and guided response.' },
  { q: 'How long is onboarding?', a: 'About one hour, using the ThreatSensor™ virtual appliance powered by Cribl Stream.' },
  { q: 'Is there a data cap on the SIEM?', a: 'No. ThreatLog™ has no data caps and no per-GB fees, with 7-year retention.' },
]

export default function ThreatRespondPage() {
  return (
    <div className="min-h-screen bg-[#080B11]">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(86,201,232,0.12),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#56C9E8]/30 bg-[#56C9E8]/10 text-[#56C9E8] text-xs font-medium mb-8">
            For teams who&apos;ve already invested in security tools
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-800 text-white leading-tight mb-6">
            You bought the tools.{' '}
            <span style={{ color: '#56C9E8' }}>Now get the team that watches them 24/7.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            You don&apos;t need to rip out your stack to get a real SOC. Keep your EDR, your SIEM, your identity provider — and add our AI-augmented Security Operations Center on top. <strong className="text-white">Your tools. Our SOC.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg font-semibold text-sm text-white hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: '#56C9E8' }}
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#56C9E8]/30 bg-[#56C9E8]/10 text-[#56C9E8] text-xs font-medium mb-6">
            Your Tools. Our SOC.
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-white mb-6">
            Vendor-agnostic by design.
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg max-w-3xl">
            <Wordmark product="ThreatRespond" /> works with what you already run — SentinelOne, Microsoft Defender, Carbon Black, CrowdStrike, Cylance, Sophos, and more. No rip-and-replace. No retraining. Praxis ingests your existing telemetry, maps it to MITRE ATT&CK, correlates across all six domains, and surfaces real threats in seconds. A human analyst verifies and — from the Advanced tier — acts.
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
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(86,201,232,0.12)', border: '1px solid rgba(86,201,232,0.25)' }}>
                  <Shield className="w-4 h-4" style={{ color: '#56C9E8' }} />
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
                className={`card-glass rounded-2xl p-6 relative overflow-hidden ${tier.popular ? '' : ''}`}
                style={tier.popular ? { borderColor: 'rgba(86,201,232,0.4)' } : {}}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #56C9E8, transparent)' }} />
                )}
                {tier.popular && (
                  <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: 'rgba(86,201,232,0.12)', color: '#56C9E8', border: '1px solid rgba(86,201,232,0.25)' }}>
                    Most Popular
                  </span>
                )}
                <div className="mb-4">
                  <p className="text-sm text-slate-400 mb-1">{tier.name}</p>
                  {tier.price ? (
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-3xl font-700 text-white">{tier.price}</span>
                      <span className="text-xs text-slate-500">{tier.unit}</span>
                    </div>
                  ) : (
                    <div>
                      <p className="text-base font-600 text-white">Custom</p>
                      <Link href="/contact" className="text-xs mt-0.5 hover:underline" style={{ color: '#56C9E8' }}>Contact us →</Link>
                    </div>
                  )}
                </div>
                <p className="text-xs text-slate-400 mb-4 leading-snug">{tier.soc}</p>
                <div className="space-y-2.5">
                  {tier.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0" style={{ color: '#56C9E8' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                  {tier.itdr && (
                    <div className="flex items-center gap-2 text-xs font-medium" style={{ color: '#56C9E8' }}>
                      <CheckCircle className="w-3 h-3 shrink-0" />
                      Full ITDR Included
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: '#56C9E8' }}
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all"
            >
              Compare with <Wordmark product="ThreatDefend" /> <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
