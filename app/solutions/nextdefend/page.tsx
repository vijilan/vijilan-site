// Design: Atmospheric Depth — dark carbon (#080B11), Purple (#A78BFA), Bricolage Grotesque + Hanken Grotesk
// Revision 01: wordmark colors, expand tier descriptions

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Wordmark } from '@/app/components/Wordmark'

export const metadata: Metadata = {
  title: 'Managed CrowdStrike Next-Gen SIEM | NextDefend™ by Vijilan',
  description:
    'Deploy, sustain, or fully operate CrowdStrike Next-Gen SIEM. NextDefend gives you onboarding, ongoing engineering, or a fully managed 24/7 SOC with threat hunting. You choose how much we carry.',
}

const engagements = [
  {
    name: 'Deploy',
    subtitle: 'Onboarding',
    what: 'One-time setup and onboarding. We stand up your CrowdStrike Next-Gen SIEM correctly from day one — data sources connected, Cribl Stream pipelines built, parsers written, dashboards live.',
    who: 'Teams with the staff to run it day-to-day, but who want it architected right the first time.',
    outcome: 'A production-ready Next-Gen SIEM, properly engineered, handed to your team.',
    includes: [
      'Data source onboarding — endpoints, identity, cloud, network, SaaS connected and normalized',
      'Cribl Stream pipeline architecture — efficient routing, filtering, and transformation at ingest',
      'Custom parser development — any log format parsed and mapped to CrowdStrike\'s data model',
      'Detection content — initial rule set built and tuned to your environment',
      'Dashboard and reporting setup — operational visibility from day one',
    ],
    soc: false,
  },
  {
    name: 'Sustain',
    subtitle: 'Ongoing Engineering',
    what: 'An annual engineering retainer. We keep your Next-Gen SIEM tuned, current, and healthy — parser development, pipeline optimization, new data-source integration, detection-rule maintenance.',
    who: "Teams that run their own SOC but don't have dedicated SIEM engineers.",
    outcome: 'A SIEM that stays sharp instead of decaying. Bundle with Deploy for a discount.',
    includes: [
      'Ongoing parser development — new log sources added as your environment grows',
      'Cribl Stream pipeline optimization — reduce noise, improve fidelity, control ingest costs',
      'Detection rule maintenance — rules tuned as adversary TTPs and your environment evolve',
      'New data-source integration — add coverage as your stack changes',
      'Health monitoring — proactive identification of gaps, failures, and coverage drift',
    ],
    soc: false,
  },
  {
    name: 'Operate',
    subtitle: 'Fully Managed',
    what: 'Everything. Onboarding plus ongoing engineering plus a 24/7 Vijilan SOC plus proactive threat hunting. We run the entire Next-Gen SIEM and the operations around it.',
    who: 'Teams that want the outcome — detection and response — without owning any of the operational burden.',
    outcome: 'A fully managed Next-Gen SIEM with round-the-clock human-verified SOC coverage.',
    includes: [
      'Everything in Deploy and Sustain',
      'Praxis AI Engine — machine-speed triage, MITRE ATT&CK mapping, IOC enrichment, behavioral correlation',
      'Cross-source threat hunting — hypothesis-driven hunts across all ingested data, not just Falcon telemetry',
      'Custom detection content — Vijilan-authored rules, scheduled searches, custom IOAs beyond CrowdStrike defaults',
      '24/7 human-verified SOC — every automated action verified by a human analyst',
      'ThreatContain™ — SOC acts directly on confirmed threats across your environment',
    ],
    soc: true,
  },
]

const faqs = [
  { q: 'Is NextDefend a tiered ladder?', a: 'No. Deploy, Sustain, and Operate are three independent engagements. You pick the one that matches how much you want to hand off.' },
  { q: 'When do I get a 24/7 SOC?', a: 'Only with Operate. Deploy is onboarding; Sustain is ongoing engineering; Operate adds the fully managed 24/7 SOC and threat hunting.' },
  { q: 'Can I bundle Deploy and Sustain?', a: 'Yes — bundling Sustain with Deploy earns a discount.' },
  { q: 'How does this avoid overlapping with Falcon Complete?', a: 'CrowdStrike owns Falcon-native detection and endpoint containment. Vijilan owns custom rules, third-party data, cross-source hunting, parser development, and remediation beyond the endpoint. No duplication.' },
  { q: 'How experienced is Vijilan with Next-Gen SIEM?', a: 'Vijilan has operated CrowdStrike Next-Gen SIEM since 2023 and supported 50+ organizations across multiple regulated sectors.' },
]

export default function NextDefendPage() {
  return (
    <div className="min-h-screen bg-[#080B11]">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(167,139,250,0.08),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#A78BFA]/20 bg-[#A78BFA]/5 text-[#A78BFA] text-xs font-medium mb-8">
            For teams buried under SIEM data
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-800 text-white leading-tight mb-6">
            CrowdStrike&apos;s Next-Gen SIEM is powerful.{' '}
            <span style={{ color: '#A78BFA' }}>Running it is a second job.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            The platform ingests everything. Tuning it, parsing it, hunting in it, and staffing a SOC around it is where teams drown. <Wordmark product="NextDefend" /> takes that weight — as much or as little as you want. Deployed. Sustained. Operated.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg font-semibold text-sm text-[#080B11] hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: '#A78BFA' }}
            >
              Talk to an Engineer
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              See How It Works <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── THREE ENGAGEMENTS ── */}
      <section className="py-20 px-6 bg-[#0D1117]">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#A78BFA]/20 bg-[#A78BFA]/5 text-[#A78BFA] text-xs font-medium mb-6">
            Deployed. Sustained. Operated.
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-white mb-4">
            Three engagements. You choose how much we carry.
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl">
            <Wordmark product="NextDefend" /> isn&apos;t a ladder you climb — it&apos;s three independent ways to engage, matched to how much of the CrowdStrike Next-Gen SIEM burden you want to hand off.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagements.map((eng) => (
              <div
                key={eng.name}
                className="card-glass rounded-2xl p-8 relative overflow-hidden"
                style={eng.soc ? { borderColor: 'rgba(167,139,250,0.3)' } : {}}
              >
                {eng.soc && (
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #A78BFA, transparent)' }} />
                )}
                <div className="mb-6">
                  <p className="text-xs text-slate-500 mb-1">{eng.subtitle}</p>
                  <h3 className="font-display text-2xl font-700" style={{ color: '#A78BFA' }}>{eng.name}</h3>
                  {eng.soc && (
                    <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full border font-medium" style={{ backgroundColor: 'rgba(167,139,250,0.1)', color: '#A78BFA', borderColor: 'rgba(167,139,250,0.2)' }}>
                      Includes 24/7 SOC
                    </span>
                  )}
                </div>
                <div className="space-y-4 text-sm mb-6">
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">What it is</p>
                    <p className="text-slate-300 leading-relaxed">{eng.what}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Who it&apos;s for</p>
                    <p className="text-slate-400 leading-relaxed">{eng.who}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Outcome</p>
                    <p className="leading-relaxed" style={{ color: '#A78BFA' }}>{eng.outcome}</p>
                  </div>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">Includes</p>
                  <div className="space-y-2">
                    {eng.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0" style={{ color: '#A78BFA' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOC BOUNDARY ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#A78BFA]/20 bg-[#A78BFA]/5 text-[#A78BFA] text-xs font-medium mb-6">
            Clean Division of Responsibility
          </div>
          <h2 className="font-display text-3xl font-700 text-white mb-4">
            We own the layer Falcon Complete can&apos;t reach.
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-3xl">
            On CrowdStrike Next-Gen SIEM, CrowdStrike owns Falcon-native detections, OverWatch hunting on Falcon telemetry, and endpoint-native containment. The Vijilan SOC owns everything else: Vijilan-authored detection rules, third-party passthrough alerts, custom IOAs, scheduled searches, cross-source hunting on non-Falcon data, parser development, Cribl Stream operations, and remediation across systems Falcon Complete can&apos;t touch. No duplication. Clean handoff.
          </p>
        </div>
      </section>

      {/* ── TRACK RECORD ── */}
      <section className="py-20 px-6 bg-[#0D1117]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#A78BFA]/20 bg-[#A78BFA]/5 text-[#A78BFA] text-xs font-medium mb-6">
            We Didn&apos;t Just Start Doing This
          </div>
          <h2 className="font-display text-3xl font-700 text-white mb-4">
            CrowdStrike Next-Gen SIEM subcontractor since 2023.
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Vijilan began as a CrowdStrike Next-Gen SIEM subcontractor in 2023 and has supported 50+ organizations across logistics, browser security, healthcare, financial services, government, critical infrastructure, and a forestry multinational in Chile.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Cribl Certified User', 'CCSC', 'CCFA', 'CCFR', 'CCSE'].map((cert) => (
              <span key={cert} className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-slate-400 bg-white/[0.03]">
                {cert}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500">Languages: English · Spanish · Portuguese</p>
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
            Stop drowning in data. Start seeing threats.
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Tell us where you are — buried in setup, behind on tuning, or done running it yourself — and we&apos;ll match you to Deploy, Sustain, or Operate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-[#080B11] hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: '#A78BFA' }}
          >
            Talk to an Engineer <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}
