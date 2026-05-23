// Design: Atmospheric Depth — dark carbon (#080B11), cyan/purple glows, Bricolage Grotesque + Hanken Grotesk
// Content: Claude 03_Solutions_Chooser.md — situation-based product chooser

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solutions — Find the Right Managed Security Service | Vijilan',
  description:
    'Not sure which managed security service fits? Start with your situation. Keep your tools, deploy CrowdStrike, tame your SIEM, or assess your exposure — Vijilan matches you to the right answer.',
}

const situations = [
  {
    situation: '"I\'ve already invested in security tools. I just need someone watching them 24/7."',
    answer: 'ThreatRespond™',
    tagline: 'Your tools. Our SOC.',
    why: 'Vendor-agnostic. Works with any EDR, SIEM, or identity provider you already run. We wrap our AI-augmented SOC around your existing stack — no rip-and-replace.',
    href: '/solutions/threatrespond',
    color: '#00D4FF',
    num: '01',
  },
  {
    situation: '"I want enterprise-grade protection, but I don\'t want to hire a CrowdStrike team to run it."',
    answer: 'ThreatDefend™',
    tagline: 'Our stack. Our SOC.',
    why: 'We deploy, configure, and operate CrowdStrike Falcon end-to-end. Your client never touches the console. Full ITDR from the entry tier. SOC acts on every tier.',
    href: '/solutions/threatdefend',
    color: '#7C3AED',
    num: '02',
  },
  {
    situation: '"I\'ve got CrowdStrike Next-Gen SIEM — or I want it — but the data and tuning are overwhelming."',
    answer: 'NextDefend™',
    tagline: 'Deployed. Sustained. Operated.',
    why: 'We stand up your CrowdStrike Next-Gen SIEM (Deploy), keep it engineered and tuned (Sustain), or run it fully with 24/7 SOC and threat hunting (Operate). You choose how much we carry.',
    href: '/solutions/nextdefend',
    color: '#10B981',
    num: '03',
  },
  {
    situation: '"Before I commit to anything, I need to know what\'s actually exposed right now."',
    answer: 'ThreatAssess™',
    tagline: 'Six-domain assessment. Free for 60 days.',
    why: 'A Falcon-powered live production assessment across six security domains. Real findings, full written report at day 60. No commitment.',
    href: '/contact',
    color: '#F59E0B',
    num: '04',
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#080B11]">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,212,255,0.08),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-medium mb-8">
            Solutions
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-800 text-white leading-tight mb-6">
            What are you trying to solve?
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            You don&apos;t need to know our product names. You need to know your situation. Pick the one that sounds like you — we&apos;ll take it from there.
          </p>
        </div>
      </section>

      {/* ── SITUATION CHOOSER ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-700 text-white text-center mb-12">
            Four situations. Four answers.
          </h2>

          <div className="space-y-6">
            {situations.map((s) => (
              <Link
                key={s.num}
                href={s.href}
                className="card-glass rounded-2xl p-8 group flex flex-col md:flex-row gap-6 relative overflow-hidden hover:border-white/20 transition-all block"
              >
                <div
                  className="absolute top-0 left-0 bottom-0 w-px opacity-60"
                  style={{ background: `linear-gradient(180deg, transparent, ${s.color}, transparent)` }}
                />
                <div className="shrink-0 md:w-12">
                  <span className="font-mono text-xs text-slate-600">{s.num}</span>
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 text-sm italic mb-4">{s.situation}</p>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-700 mb-1" style={{ color: s.color }}>
                        {s.answer}
                      </h3>
                      <p className="text-sm text-slate-300 mb-3">{s.tagline}</p>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-xl">{s.why}</p>
                    </div>
                    <div
                      className="shrink-0 flex items-center gap-1 text-sm font-medium mt-1 transition-all group-hover:gap-2"
                      style={{ color: s.color }}
                    >
                      Explore <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON NUDGE ── */}
      <section className="py-16 px-6 bg-[#0D1117]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-700 text-white mb-4">
            Want to see them side by side?
          </h2>
          <p className="text-slate-400 mb-8">
            Compare all four services by what they cover, who runs the tools, and how the SOC engages.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all"
          >
            Compare Solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── PRAXIS THREAD ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden p-12 border border-[#7C3AED]/20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/8 via-transparent to-transparent" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-xs font-medium mb-6">
                <Zap className="w-3 h-3" />
                One Engine Behind All Four
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-700 text-white mb-4">
                Whatever you choose, Praxis is underneath.
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl">
                Every Vijilan service runs on the same AI Engine — Praxis. Machine-speed triage, MITRE ATT&CK mapping, behavioral correlation, and live threat enrichment, with every action verified by a human analyst. The service you pick decides whose tools we watch. Praxis decides how fast we catch what&apos;s hunting you.
              </p>
              <Link
                href="/platform/praxis"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#A78BFA] hover:text-[#7C3AED] transition-colors"
              >
                See how Praxis works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 bg-[#0D1117]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-700 text-white mb-4">
            Still deciding? Let&apos;s talk it through.
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            A 30-minute call. We&apos;ll match your situation to the right service — no pressure, no slideware.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00D4FF] text-[#080B11] font-semibold text-sm hover:bg-[#00BFEA] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}
