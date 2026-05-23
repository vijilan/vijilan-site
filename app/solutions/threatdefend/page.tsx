// Design: Atmospheric Depth — dark carbon (#080B11), CrowdStrike Red (#ED1C24), Bricolage Grotesque + Hanken Grotesk
// Revision 01: wordmark colors, hide Elite pricing, expand tier descriptions, ThreatAssess CTA → /solutions/threatassess

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Wordmark } from '@/app/components/Wordmark'

export const metadata: Metadata = {
  title: 'CrowdStrike Falcon, Fully Managed | ThreatDefend™ by Vijilan',
  description:
    'Get CrowdStrike Falcon deployed, configured, and run by experts — without hiring a CrowdStrike team. ThreatDefend is managed XDR with full ITDR from the entry tier. SOC acts on every tier.',
}

const tiers = [
  {
    name: 'Essential',
    ep: '$6',
    user: '$4',
    blended: '~$10',
    soc: 'SOC acts',
    highlights: [
      'Falcon EDR — AI-powered endpoint detection and prevention, behavioral IOAs, and real-time response',
      'Falcon NGAV — next-generation antivirus with machine learning and exploit blocking',
      'Full ITDR — dark web credential monitoring, impossible travel, MFA-fatigue, BEC, OAuth abuse, lateral movement, privilege escalation',
      'ThreatLog™ SIEM — no data caps, 7-year retention',
      'ThreatContain™ — SOC disables accounts, isolates hosts, and blocks malicious IPs directly',
    ],
    popular: false,
  },
  {
    name: 'Advanced',
    ep: '$10',
    user: '$5',
    blended: '~$15',
    soc: 'SOC acts',
    highlights: [
      'Falcon Discover — continuous asset inventory across managed and unmanaged devices, shadow IT visibility',
      'Falcon Spotlight — scanless, always-on vulnerability assessment prioritized by real exploitation likelihood (ExPRT.AI)',
      'External Attack Surface Management — finds internet-facing assets and shadow IT before attackers do',
      '15-minute response SLA',
      'Free ThreatAssess — 60-day exposure assessment at no charge',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    ep: '$14',
    user: '$7',
    blended: '~$21',
    soc: 'SOC acts',
    highlights: [
      'Dual threat hunting — Vijilan SOC and CrowdStrike OverWatch hunt your environment independently and simultaneously',
      'Proactive threat hunting — hypothesis-driven hunts mapped to MITRE ATT&CK, not just reactive triage',
      'Compliance reporting — HIPAA, PCI DSS, NIST CSF, CMMC L2, SOC 2, ISO 27001 evidence packages',
    ],
    popular: false,
  },
  {
    name: 'Elite',
    ep: null,
    user: null,
    blended: null,
    soc: 'Dedicated concierge analyst',
    highlights: [
      'Named senior analyst — dedicated point of contact for your account',
      'Custom SLA — negotiated response and resolution targets',
      'IR retainer — pre-committed incident response hours',
      'vCISO advisory — strategic security leadership',
    ],
    popular: false,
  },
]

const faqs = [
  { q: "Does my client need CrowdStrike expertise?", a: "No. Vijilan deploys, configures, and operates the entire Falcon platform. The client never touches the console." },
  { q: "Is ITDR really included at the entry tier?", a: "Yes. Full ITDR is included from Essential — dark web monitoring, impossible travel, MFA fatigue, BEC, OAuth abuse, lateral movement, privilege escalation." },
  { q: "How is ThreatDefend priced?", a: "Dual pricing: a per-endpoint rate plus a per-user rate. Most environments approximate a 1:1 ratio; endpoint-heavy environments (manufacturing, healthcare, IoT) skew higher on endpoints." },
  { q: "What is dual hunting?", a: "At Premium, the Vijilan SOC and CrowdStrike OverWatch hunt your environment independently and simultaneously, with different intelligence and methods." },
  { q: "How does this relate to Falcon Complete?", a: "Complementary. CrowdStrike owns Falcon-native detection and endpoint containment; Vijilan owns cross-source correlation, custom detections, and remediation beyond what Falcon Complete reaches." },
]

export default function ThreatDefendPage() {
  return (
    <div className="min-h-screen bg-[#080B11]">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(237,28,36,0.08),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-8" style={{ borderColor: 'rgba(237,28,36,0.25)', backgroundColor: 'rgba(237,28,36,0.08)', color: '#F87171' }}>
            For teams who want CrowdStrike — without the CrowdStrike headcount
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-800 text-white leading-tight mb-6">
            Enterprise-grade protection.{' '}
            <span style={{ color: '#ED1C24' }}>Without hiring the team to run it.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            CrowdStrike Falcon is the gold standard. Running it well is a full-time specialty. We deploy it, configure it, and operate it for you — your client never touches the console. <strong className="text-white">Our stack. Our SOC.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg font-semibold text-sm text-white hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: '#ED1C24' }}
            >
              Book a Demo
            </Link>
            <Link
              href="/solutions/threatassess"
              className="px-6 py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              Try <Wordmark product="ThreatAssess" /> Free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="py-20 px-6 bg-[#0D1117]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-6" style={{ borderColor: 'rgba(237,28,36,0.25)', backgroundColor: 'rgba(237,28,36,0.08)', color: '#F87171' }}>
            Our Stack. Our SOC.
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-white mb-6">
            The full Falcon platform, run by people who do it all day.
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg max-w-3xl">
            With <Wordmark product="ThreatDefend" />, Vijilan deploys and operates CrowdStrike Falcon end-to-end — EDR, NGAV, Identity Protection, and more. Praxis layers machine-speed triage and correlation on top of Falcon&apos;s telemetry, and the Vijilan SOC acts directly on confirmed threats. Your team gets enterprise-grade outcomes without becoming CrowdStrike engineers.
          </p>
        </div>
      </section>

      {/* ── ITDR DIFFERENTIATOR ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden p-10 border" style={{ borderColor: 'rgba(237,28,36,0.15)' }}>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(237,28,36,0.06) 0%, transparent 60%)' }} />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-6" style={{ borderColor: 'rgba(237,28,36,0.25)', backgroundColor: 'rgba(237,28,36,0.08)', color: '#F87171' }}>
                Full ITDR From Day One
              </div>
              <h2 className="font-display text-3xl font-700 text-white mb-4">
                Identity protection that most providers charge extra for — included at the entry tier.
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Every <Wordmark product="ThreatDefend" /> client gets full Identity Threat Detection and Response from Essential: dark web credential monitoring, impossible-travel detection, MFA-fatigue alerts, BEC detection, OAuth abuse, lateral-movement tracking, and privilege-escalation alerts. Most competitors gate ITDR behind premium tiers or sell it as an add-on. We don&apos;t.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Dark web credential monitoring', 'Impossible travel', 'MFA fatigue', 'BEC detection', 'OAuth abuse', 'Lateral movement', 'Privilege escalation'].map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full border text-xs" style={{ borderColor: 'rgba(237,28,36,0.2)', color: '#F87171', backgroundColor: 'rgba(237,28,36,0.05)' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIERS ── */}
      <section className="py-20 px-6 bg-[#0D1117]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-700 text-white mb-2">Four tiers. SOC acts on all of them.</h2>
          <p className="text-slate-400 mb-10 text-sm">
            Dual pricing — per endpoint + per user, monthly. Formula: (Endpoints × EP rate) + (Users × User rate). $500/mo platform minimum. 15% annual prepay discount.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="card-glass rounded-2xl p-6 relative overflow-hidden"
                style={tier.popular ? { borderColor: 'rgba(237,28,36,0.35)' } : {}}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #ED1C24, transparent)' }} />
                )}
                {tier.popular && (
                  <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: 'rgba(237,28,36,0.1)', color: '#F87171', border: '1px solid rgba(237,28,36,0.2)' }}>
                    Most Popular
                  </span>
                )}
                <div className="mb-4">
                  <p className="text-sm text-slate-400 mb-2">{tier.name}</p>
                  {tier.ep ? (
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-2xl font-700 text-white">{tier.ep}</span>
                        <span className="text-xs text-slate-500">/endpoint</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-2xl font-700 text-white">{tier.user}</span>
                        <span className="text-xs text-slate-500">/user</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Blended {tier.blended}</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-base font-600 text-white">Custom</p>
                      <Link href="/contact" className="text-xs mt-0.5 hover:underline" style={{ color: '#F87171' }}>Contact us →</Link>
                    </div>
                  )}
                </div>
                <p className="text-xs mb-4" style={{ color: '#F87171' }}>SOC: {tier.soc}</p>
                <div className="space-y-2.5">
                  {tier.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0" style={{ color: '#ED1C24' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DUAL HUNTING ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-6" style={{ borderColor: 'rgba(237,28,36,0.25)', backgroundColor: 'rgba(237,28,36,0.08)', color: '#F87171' }}>
            Premium Tier
          </div>
          <h2 className="font-display text-3xl font-700 text-white mb-4">
            Two independent hunting teams. Same environment. Same time.
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-3xl">
            At Premium, two completely independent threat-hunting teams work your environment simultaneously: the Vijilan SOC with proprietary playbooks and Praxis correlation, plus CrowdStrike OverWatch — CrowdStrike&apos;s elite global hunting team. Different intelligence, different triggers. A threat that slips past one is caught by the other.
          </p>
        </div>
      </section>

      {/* ── CROWDSTRIKE CREDENTIALS ── */}
      <section className="py-20 px-6 bg-[#0D1117]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-700 text-white mb-4">An authorized CrowdStrike partner.</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Vijilan is a CrowdStrike Powered Service Provider (CPSP), Authorized Reseller, and member of the CrowdStrike Services Partner Program. Falcon Complete is complementary, not competitive — CrowdStrike owns Falcon-native detection and containment; Vijilan owns the cross-source correlation, custom detections, and remediation that reach beyond the endpoint.
          </p>
          <div className="flex flex-wrap gap-2">
            {['CrowdStrike CPSP', 'Authorized Reseller', 'Services Partner Program'].map((badge) => (
              <span key={badge} className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-slate-400 bg-white/[0.03]">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6">
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
      <section className="py-24 px-6 bg-[#0D1117]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-700 text-white mb-4">
            Get CrowdStrike&apos;s power. Skip the CrowdStrike payroll.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: '#ED1C24' }}
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/solutions/threatassess"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all"
            >
              Try <Wordmark product="ThreatAssess" /> Free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
