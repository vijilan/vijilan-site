// Design: Atmospheric Depth — dark carbon (#080B11), purple glow (#7C3AED), Bricolage Grotesque + Hanken Grotesk
// Content: Claude 04_Platform_Praxis.md

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap, Brain, Shield, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Praxis AI Engine — Machine-Speed Threat Defense | Vijilan Platform',
  description:
    'Praxis is Vijilan\'s AI Engine: a multi-agent pipeline for MITRE ATT&CK mapping, IOC enrichment, auto-triage, and behavioral correlation. Machine-speed containment, human-verified. Median time to contain under one minute.',
}

const pipeline = [
  {
    stage: 'MITRE ATT&CK Mapping',
    what: 'Every alert is automatically mapped to adversary tactics and techniques — instant context on what stage of an attack you\'re seeing.',
    icon: Shield,
  },
  {
    stage: 'IOC Enrichment',
    what: 'Indicators are enriched in real time against live threat intelligence — is this IP, hash, or domain known-hostile right now?',
    icon: Activity,
  },
  {
    stage: 'Auto-Triage',
    what: 'Signals are scored, deduplicated, and prioritized. The noise drops away; the real threats surface.',
    icon: Zap,
  },
  {
    stage: 'Behavioral Correlation',
    what: 'Praxis connects events across endpoints, identity, cloud, and network — spotting the pattern a single-source tool would miss.',
    icon: Brain,
  },
  {
    stage: 'RAG Threat Context',
    what: 'Retrieval-augmented intelligence pulls relevant adversary playbooks and prior incidents into the investigation automatically.',
    icon: Brain,
  },
]

const stats = [
  { value: '< 1 minute', label: 'Median time to contain' },
  { value: '24/7', label: 'Human-verified operations' },
  { value: 'Every alert', label: 'Mapped to MITRE ATT&CK' },
  { value: 'Real-time', label: 'IOC enrichment + correlation' },
]

export default function PraxisPage() {
  return (
    <div className="min-h-screen bg-[#080B11]">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(124,58,237,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_50%,rgba(0,212,255,0.06),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-xs font-medium mb-8">
            <Zap className="w-3 h-3" />
            The Praxis AI Engine
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-800 text-white leading-tight mb-6">
            Adversaries automate.{' '}
            <span className="text-[#A78BFA]">So do we.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Praxis is the AI Engine behind every Vijilan service — defending against adversaries at machine speed, then handing the decision to a human. Machine velocity. Human judgment. Neither alone is enough.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-[#7C3AED] text-white font-semibold text-sm hover:bg-[#6D28D9] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Demo
            </Link>
            <Link
              href="/solutions"
              className="px-6 py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              See the Architecture <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-20 px-6 bg-[#0D1117]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-slate-400 text-xs font-medium mb-6">
            Why Machine Speed Matters
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-white mb-6">
            The attack is automated. The defense usually isn&apos;t.
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg max-w-3xl">
            Modern intrusions move at script speed — credential theft to lateral movement to data exfiltration in minutes. Most SOCs are still triaging by hand, alert by alert, while the queue grows past a thousand. By the time a human reads alert number 847, the adversary is already gone. The gap between attack speed and defense speed is where breaches live. Praxis closes that gap.
          </p>
        </div>
      </section>

      {/* ── PIPELINE ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-xs font-medium mb-6">
            Inside the Engine
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-white mb-4">
            A multi-agent pipeline, working every signal in parallel.
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Praxis isn&apos;t a single model. It&apos;s a coordinated pipeline of specialized agents, each handling one part of the investigation, running in parallel on every signal that enters the SOC.
          </p>

          <div className="space-y-4">
            {pipeline.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.stage} className="card-glass rounded-2xl p-6 flex gap-6 items-start">
                  <div className="shrink-0 flex items-center gap-3">
                    <span className="font-mono text-xs text-slate-600 w-5">{String(i + 1).padStart(2, '0')}</span>
                    <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#A78BFA]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-600 text-white mb-2">{step.stage}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.what}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FORCE MULTIPLIER ── */}
      <section className="py-20 px-6 bg-[#0D1117]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-xs font-medium mb-6">
            Machine Speed, Human Judgment
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-white mb-6">
            Praxis doesn&apos;t replace analysts. It makes each one ten times faster.
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg max-w-3xl mb-8">
            Every containment action Praxis recommends is verified by a human SOC analyst before — or immediately validated after — it executes. The AI handles the speed and the scale: the triage, the correlation, the enrichment that would drown a human team. The analyst handles the judgment: the context, the decision, the accountability. This is why Praxis can hold a median time-to-contain under one minute without the false-positive chaos of fully autonomous &ldquo;AI security.&rdquo;
          </p>
          <blockquote className="border-l-2 border-[#7C3AED] pl-6 py-2">
            <p className="text-slate-300 text-lg italic">
              &ldquo;The AI is the reflexes. The analyst is the brain. You need both to win at machine speed.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/5 bg-[#080B11]">
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-700 text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRAXIS ACROSS SERVICES ── */}
      <section className="py-20 px-6 bg-[#0D1117]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-700 text-white mb-4">One engine. Every service.</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl">
            Whether you keep your own tools (ThreatRespond), run our CrowdStrike stack (ThreatDefend), or hand us your Next-Gen SIEM (NextDefend), Praxis is the engine underneath. The service decides whose telemetry Praxis watches. Praxis decides how fast the threat gets caught.
          </p>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#A78BFA] hover:text-[#7C3AED] transition-colors"
          >
            Explore the Solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-700 text-white mb-4">
            Watch Praxis contain a live threat.
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Book a 30-minute demo and see machine-speed defense on a real scenario — triage, correlation, containment, all in real time.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#7C3AED] text-white font-semibold text-sm hover:bg-[#6D28D9] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}
