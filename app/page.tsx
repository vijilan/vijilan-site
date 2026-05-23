// Design: Atmospheric Depth — dark carbon (#080B11), cyan/purple glows, Bricolage Grotesque + Hanken Grotesk
// Sections from Claude 02_Homepage.md: Hero, Situation Tiles, Praxis Strip, 2AM Story, Proof Bar, Integrations, Pricing Teaser, Final CTA

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, ChevronRight, Zap, Brain, Clock, CheckCircle } from 'lucide-react'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Vijilan — AI-Augmented SOC for MSPs & MSSPs | Machine-Speed Defense',
  description:
    'AI-augmented Security Operations Center built for MSPs and MSSPs. Praxis AI Engine contains threats in under a minute — verified by humans. SOC 2 Type 2, ISO 27001, CrowdStrike CPSP.',
}

const situationTiles = [
  {
    situation: 'I want to keep my existing security tools',
    answer: 'ThreatRespond™',
    tagline: 'Your tools. Our SOC.',
    href: '/solutions/threatrespond',
    color: '#00D4FF',
  },
  {
    situation: 'I want CrowdStrike deployed and managed for me',
    answer: 'ThreatDefend™',
    tagline: 'Our stack. Our SOC.',
    href: '/solutions/threatdefend',
    color: '#7C3AED',
  },
  {
    situation: "I'm drowning in SIEM data and alerts",
    answer: 'NextDefend™',
    tagline: 'CrowdStrike Next-Gen SIEM, managed.',
    href: '/solutions/nextdefend',
    color: '#10B981',
  },
  {
    situation: "I need to know what's exposed right now",
    answer: 'ThreatAssess™',
    tagline: 'Six-domain assessment. Free 60 days.',
    href: '/solutions',
    color: '#F59E0B',
  },
]

const praxisStats = [
  { value: '< 1 min', label: 'Median time to contain' },
  { value: '24/7', label: 'Human-verified SOC' },
  { value: 'MITRE ATT&CK', label: 'Mapped on every alert' },
  { value: 'Multi-agent', label: 'Autonomous triage pipeline' },
]

const timeline = [
  { time: '2:00 AM', other: 'Alert queues with 847 others', vijilan: 'Praxis triages instantly · analyst engaged' },
  { time: '2:11 AM', other: 'Email sent: "Please review"', vijilan: 'Account disabled · host isolated' },
  { time: '2:18 AM', other: 'Your phone rings', vijilan: 'Incident contained · report filed' },
  { time: '6:00 AM', other: 'Attacker had 4 hours inside', vijilan: 'You wake to a resolved ticket' },
]

const proofStats = [
  { value: '10+ years', label: 'Managed security operations' },
  { value: '50+ orgs', label: 'Supported across critical sectors' },
  { value: 'Global', label: '24/7 SOC presence worldwide' },
  { value: '100%', label: 'Channel-committed' },
]

const securityIntegrations = [
  'SentinelOne', 'Microsoft Defender', 'CrowdStrike Falcon', 'Carbon Black',
  'Cylance', 'Sophos', 'Palo Alto', 'Fortinet', 'Okta', 'Entra ID',
]

const psaIntegrations = [
  'ConnectWise', 'Autotask (Datto)', 'HaloPSA', 'FreshService', 'Zendesk',
]

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[#080B11]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,212,255,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(124,58,237,0.08),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            AI-Augmented SOC · Human-Verified
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-800 leading-[1.05] tracking-tight mb-6">
            <span className="text-white">The threat moves in seconds.</span>
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)' }}
            >
              Your team can&apos;t.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Praxis, our AI Engine, defends against adversaries at machine speed — triaging, correlating, and containing in under a minute. Every action verified by a human analyst. This is the SOC your MSP was supposed to have.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-[#00D4FF] text-[#080B11] font-semibold text-sm hover:bg-[#00BFEA] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Demo
            </Link>
            <Link
              href="/platform/praxis"
              className="px-6 py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              See How Praxis Works
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-slate-600" />
        </div>
      </section>

      {/* ── SITUATION TILES ── */}
      <section className="py-24 px-6 bg-[#0D1117]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-4">
              Start with where you are.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Four situations. Four answers. No jargon required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {situationTiles.map((tile) => (
              <Link
                key={tile.href}
                href={tile.href}
                className="card-glass rounded-2xl p-8 group relative overflow-hidden hover:border-white/20 transition-all"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${tile.color}, transparent)` }}
                />
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">&ldquo;{tile.situation}&rdquo;</p>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-700 mb-1" style={{ color: tile.color }}>
                      {tile.answer}
                    </h3>
                    <p className="text-sm text-slate-300">{tile.tagline}</p>
                  </div>
                  <ChevronRight
                    className="w-5 h-5 shrink-0 mt-1 transition-transform group-hover:translate-x-1"
                    style={{ color: tile.color }}
                  />
                </div>
              </Link>
            ))}
          </div>

          <p className="text-center mt-8 text-sm text-slate-500">
            Not sure which fits?{' '}
            <Link href="/solutions" className="text-[#00D4FF] hover:underline">
              Take the 60-second solution finder →
            </Link>
          </p>
        </div>
      </section>

      {/* ── PRAXIS STRIP ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#080B11]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(124,58,237,0.08),transparent)]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-xs font-medium mb-6">
                <Zap className="w-3 h-3" />
                Powered by Praxis
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-6 leading-tight">
                Defense at machine speed.{' '}
                <span className="text-[#7C3AED]">Judgment at human level.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Adversaries automate. So do we. Praxis is Vijilan&apos;s proprietary AI Engine — a multi-agent pipeline that maps every signal to MITRE ATT&CK, enriches it with live threat intelligence, correlates behavior across your entire environment, and triages in real time. What takes a human analyst 30 minutes, Praxis does in seconds. Then a human analyst verifies and acts. Machine speed, human judgment — neither alone is enough.
              </p>
              <Link
                href="/platform/praxis"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#7C3AED] hover:text-[#A78BFA] transition-colors"
              >
                Explore the Praxis Platform <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {praxisStats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-glass rounded-2xl p-6 text-center"
                >
                  <div className="font-display text-2xl md:text-3xl font-700 text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2AM STORY ── */}
      <section className="py-24 px-6 bg-[#0D1117]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-medium mb-6">
              <Clock className="w-3 h-3" />
              The Moment That Matters
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-4">
              At 2AM, we act. You sleep.
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-xs text-slate-500 uppercase tracking-wider font-medium w-24">Time</th>
                  <th className="text-left py-3 px-4 text-xs text-slate-500 uppercase tracking-wider font-medium">Other Tools</th>
                  <th className="text-left py-3 px-4 text-xs text-[#00D4FF] uppercase tracking-wider font-medium">Vijilan + Praxis</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 text-sm font-mono text-slate-400 whitespace-nowrap">{row.time}</td>
                    <td className="py-4 px-4 text-sm text-slate-500">{row.other}</td>
                    <td className="py-4 px-4 text-sm text-[#00D4FF]">{row.vijilan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PROOF BAR ── */}
      <section className="border-y border-white/5 bg-[#080B11]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl font-700 text-white text-center mb-12">
            Ten years protecting the protectors.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {proofStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-700 text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['SOC 2 Type 2', 'ISO 27001', 'CrowdStrike CPSP', 'Authorized CrowdStrike Reseller'].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-slate-400 bg-white/[0.03]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS CLOUD ── */}
      <section className="py-24 px-6 bg-[#0D1117]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-medium mb-6">
              Works With What You Already Run
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-4">
              Plugs into your stack — security and business alike.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Vijilan integrates across your security tooling and the PSA/ITSM platforms that run your business. Alerts, tickets, and incident reports flow into the systems your team already lives in.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3 text-center">Security Integrations</p>
              <div className="flex flex-wrap justify-center gap-2">
                {securityIntegrations.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg border border-white/10 text-sm text-slate-300 bg-white/[0.03] hover:border-[#00D4FF]/30 hover:text-white transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3 text-center">PSA / ITSM</p>
              <div className="flex flex-wrap justify-center gap-2">
                {psaIntegrations.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg border border-white/10 text-sm text-slate-300 bg-white/[0.03] hover:border-[#7C3AED]/30 hover:text-white transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center mt-8">
            <Link href="/solutions" className="text-sm text-[#00D4FF] hover:underline inline-flex items-center gap-1">
              See all integrations <ArrowRight className="w-3 h-3" />
            </Link>
          </p>
        </div>
      </section>

      {/* ── PRICING TEASER ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 via-transparent to-[#7C3AED]/5" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-medium mb-6">
                Transparent Pricing
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-4">
                No &ldquo;contact sales for a quote&rdquo; games.
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                Per-user and per-endpoint pricing, published. Volume discounts that apply automatically. See exactly what you&apos;ll pay before you ever talk to us.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00D4FF] text-[#080B11] font-semibold text-sm hover:bg-[#00BFEA] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                View Pricing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section className="py-24 px-6 bg-[#0D1117]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 border border-[#00D4FF]/20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 via-transparent to-[#7C3AED]/10" />
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-4">
                See Praxis defend your environment in real time.
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                Book a 30-minute demo. Watch machine-speed containment on a live scenario. No slideware.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00D4FF] text-[#080B11] font-semibold text-sm hover:bg-[#00BFEA] transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:partners@vijilan.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all"
                >
                  Talk to Partnerships
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
