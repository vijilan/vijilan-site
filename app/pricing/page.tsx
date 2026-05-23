// Design: Atmospheric Depth — dark carbon (#080B11), cyan/purple/red glows, Bricolage Grotesque + Hanken Grotesk
// Revision 01: hide Elite pricing, wordmark colors, updated meta, expanded feature descriptions

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Wordmark } from '@/app/components/Wordmark'

export const metadata: Metadata = {
  title: 'Transparent Pricing — Managed Security for MSPs | Vijilan',
  description:
    'Published per-user and per-endpoint pricing. ThreatRespond from $4/user/mo. ThreatDefend from $6/endpoint + $4/user. Volume discounts auto-apply. No "contact sales for a quote."',
}

const trTiers = [
  {
    name: 'Essential',
    price: '$4',
    soc: 'SOC advises',
    itdr: false,
    best: '24/7 monitoring + guided response across 6 domains',
    popular: false,
    accentColor: '#275FAC',
  },
  {
    name: 'Advanced',
    price: '$7',
    soc: 'SOC acts via ThreatContain™',
    itdr: true,
    best: 'Active containment + full ITDR + EASM',
    popular: true,
    accentColor: '#275FAC',
  },
  {
    name: 'Premium',
    price: '$12',
    soc: 'SOC acts + proactive threat hunting',
    itdr: true,
    best: 'Threat hunting + compliance evidence packages',
    popular: false,
    accentColor: '#275FAC',
  },
  {
    name: 'Elite',
    price: null,
    soc: 'Dedicated concierge analyst',
    itdr: true,
    best: 'Named analyst, custom SLA, vCISO, IR retainer',
    popular: false,
    accentColor: '#275FAC',
  },
]

const volumeDiscounts = [
  { range: '50–249', price: '$7.00', discount: 'Base' },
  { range: '250–499', price: '$6.44', discount: '8%' },
  { range: '500–999', price: '$6.16', discount: '12%' },
  { range: '1,000–2,499', price: '$5.74', discount: '18%' },
  { range: '2,500+', price: '$5.46', discount: '22%' },
]

const tdTiers = [
  {
    name: 'Essential',
    ep: '$6',
    user: '$4',
    blended: '~$10',
    itdr: true,
    popular: false,
    best: 'Falcon EDR + NGAV + full ITDR + ThreatContain™',
  },
  {
    name: 'Advanced',
    ep: '$10',
    user: '$5',
    blended: '~$15',
    itdr: true,
    popular: true,
    best: 'Adds Falcon Discover, Spotlight, EASM, 15-min SLA',
  },
  {
    name: 'Premium',
    ep: '$14',
    user: '$7',
    blended: '~$21',
    itdr: true,
    popular: false,
    best: 'Dual hunting: Vijilan SOC + CrowdStrike OverWatch',
  },
  {
    name: 'Elite',
    ep: null,
    user: null,
    blended: null,
    itdr: true,
    popular: false,
    best: 'Named analyst, custom SLA, IR retainer',
  },
]

const alwaysIncluded = [
  'Praxis AI Engine — machine-speed triage, MITRE ATT&CK mapping, IOC enrichment',
  'Human-verified SOC — every action confirmed by a human analyst',
  'ThreatLog™ SIEM — no data caps, no per-GB fees, 7-year retention',
  'White-label — deliver under your brand',
  'MITRE ATT&CK mapping — every alert placed in adversary context',
  'PSA/ITSM integration — ConnectWise, Autotask, HaloPSA (in progress), FreshService, Zendesk',
]

const pricingFaqs = [
  { q: 'Is there really no hidden enterprise pricing?', a: 'ThreatRespond and ThreatDefend per-unit rates for Essential, Advanced, and Premium are published in full. Elite and NextDefend are scoped to your needs — contact us for those.' },
  { q: 'How do volume discounts work?', a: 'For ThreatRespond Advanced and up, discounts apply automatically starting at 250 users — no negotiation.' },
  { q: "What's the platform minimum?", a: '$500/month per partner account, regardless of client count.' },
  { q: 'Is there an annual discount?', a: 'Yes — 15% off when paid annually.' },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#080B11]">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,212,255,0.07),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-medium mb-8">
            Transparent Pricing
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-800 text-white leading-tight mb-6">
            No &ldquo;contact sales for a quote&rdquo; games.
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Per-user and per-endpoint pricing, published. <Wordmark product="ThreatRespond" /> from $4/user/mo. Volume discounts that apply automatically. See exactly what you&apos;ll pay before you talk to anyone.
          </p>
        </div>
      </section>

      {/* ── THREATRESPOND PRICING ── */}
      <section className="py-20 px-6 bg-[#0D1117]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-700 text-white mb-2">
              <Wordmark product="ThreatRespond" /> — Your tools. Our SOC.
            </h2>
            <p className="text-slate-400 text-sm">Per user / month. Vendor-agnostic managed XDR.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {trTiers.map((tier) => (
              <div
                key={tier.name}
                className="card-glass rounded-2xl p-6 relative overflow-hidden"
                style={tier.popular ? { borderColor: 'rgba(39,95,172,0.4)' } : {}}
              >
                {tier.popular && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #275FAC, transparent)' }} />
                    <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: 'rgba(39,95,172,0.1)', color: '#6B9FE4', border: '1px solid rgba(39,95,172,0.2)' }}>
                      ⭐ Popular
                    </span>
                  </>
                )}
                <p className="text-sm text-slate-400 mb-2">{tier.name}</p>
                {tier.price ? (
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display text-3xl font-700 text-white">{tier.price}</span>
                    <span className="text-xs text-slate-500">/user/mo</span>
                  </div>
                ) : (
                  <div className="mb-1">
                    <p className="text-base font-600 text-white">Custom</p>
                    <Link href="/contact" className="text-xs hover:underline" style={{ color: '#6B9FE4' }}>Contact us →</Link>
                  </div>
                )}
                <p className="text-xs text-slate-500 mb-3">SOC: {tier.soc}</p>
                <p className="text-xs text-slate-400 mb-3 leading-snug">{tier.best}</p>
                {tier.itdr && (
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: '#6B9FE4' }}>
                    <CheckCircle className="w-3 h-3" /> ITDR Included
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">$500/mo platform minimum. 15% discount on annual prepay.</p>
        </div>
      </section>

      {/* ── VOLUME DISCOUNTS ── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-xl font-700 text-white mb-2">Volume discounts apply automatically (Advanced+).</h3>
          <p className="text-slate-400 text-sm mb-8">No negotiation required — discounts apply at checkout.</p>
          <div className="card-glass rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-5 text-xs text-slate-500 uppercase tracking-wider font-medium">Users</th>
                  <th className="text-left py-3 px-5 text-xs text-slate-500 uppercase tracking-wider font-medium">Price/user</th>
                  <th className="text-left py-3 px-5 text-xs text-slate-500 uppercase tracking-wider font-medium">Discount</th>
                </tr>
              </thead>
              <tbody>
                {volumeDiscounts.map((row, i) => (
                  <tr key={row.range} className={`border-b border-white/5 ${i === 0 ? 'opacity-60' : ''}`}>
                    <td className="py-3 px-5 text-sm text-white">{row.range}</td>
                    <td className="py-3 px-5 text-sm font-mono" style={{ color: '#6B9FE4' }}>{row.price}</td>
                    <td className="py-3 px-5 text-sm text-slate-400">{row.discount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── THREATDEFEND PRICING ── */}
      <section className="py-20 px-6 bg-[#0D1117]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-700 text-white mb-2">
              <Wordmark product="ThreatDefend" /> — Our stack. Our SOC.
            </h2>
            <p className="text-slate-400 text-sm">Powered by CrowdStrike Falcon. Dual pricing: per endpoint + per user. SOC acts on every tier.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {tdTiers.map((tier) => (
              <div
                key={tier.name}
                className="card-glass rounded-2xl p-6 relative overflow-hidden"
                style={tier.popular ? { borderColor: 'rgba(237,28,36,0.35)' } : {}}
              >
                {tier.popular && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #ED1C24, transparent)' }} />
                    <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: 'rgba(237,28,36,0.1)', color: '#F87171', border: '1px solid rgba(237,28,36,0.2)' }}>
                      ⭐ Popular
                    </span>
                  </>
                )}
                <p className="text-sm text-slate-400 mb-3">{tier.name}</p>
                {tier.ep ? (
                  <div className="space-y-1 mb-2">
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
                  <div className="mb-2">
                    <p className="text-base font-600 text-white">Custom</p>
                    <Link href="/contact" className="text-xs hover:underline" style={{ color: '#F87171' }}>Contact us →</Link>
                  </div>
                )}
                <p className="text-xs text-slate-400 mb-3 leading-snug">{tier.best}</p>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: '#F87171' }}>
                  <CheckCircle className="w-3 h-3" /> ITDR Included
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            Formula: (Endpoints × EP rate) + (Users × User rate). $500/mo platform minimum. 15% annual prepay discount.
          </p>
        </div>
      </section>

      {/* ── NEXTDEFEND PRICING ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-700 text-white mb-2">
            <Wordmark product="NextDefend" /> — Deployed. Sustained. Operated.
          </h2>
          <p className="text-slate-400 text-sm mb-6">Managed CrowdStrike Next-Gen SIEM. Scoped to your environment.</p>
          <div className="card-glass rounded-2xl p-8">
            <p className="text-slate-400 leading-relaxed mb-6">
              Because data volume, sources, and operational scope vary widely, <Wordmark product="NextDefend" /> is scoped per engagement rather than list-priced. Deploy (onboarding), Sustain (ongoing engineering), and Operate (fully managed 24/7 SOC) are each sized to your environment. Operate&apos;s SOC coverage scales with ingest volume.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-[#080B11] hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: '#A78BFA' }}
            >
              Request Scoping <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ALWAYS INCLUDED ── */}
      <section className="py-20 px-6 bg-[#0D1117]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-700 text-white mb-8">Every tier, every product.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {alwaysIncluded.map((item) => (
              <div key={item} className="flex items-start gap-3 card-glass rounded-xl p-4">
                <CheckCircle className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING FAQ ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-700 text-white mb-10">Pricing FAQ</h2>
          <div className="space-y-6">
            {pricingFaqs.map((faq) => (
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
            Know your number? Let&apos;s get you live.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00D4FF] text-[#080B11] font-semibold text-sm hover:bg-[#00BFEA] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all"
            >
              Compare Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
