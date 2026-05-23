import { sanityFetch } from '@/app/sanity/lib/client'
import { guardPageQuery } from '@/app/sanity/lib/queries'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Check } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch(guardPageQuery)
  return {
    title: data?.seoTitle || 'Vijilan Guard™ Partner Program | Vijilan.ai',
    description: data?.seoDescription,
  }
}

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<any>>)[name]
  if (!Icon) return <LucideIcons.Shield className={className} />
  return <Icon className={className} />
}

const tierColors = ['#64748B', '#F59E0B', '#E2E8F0']

export default async function GuardPage() {
  const data = await sanityFetch(guardPageQuery, {}, ['guardPage'])

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[#080B11]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,158,11,0.10),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/8 text-amber-400 text-xs font-medium mb-8">
            <LucideIcons.Shield className="w-3.5 h-3.5" />
            Partner Program
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-800 leading-tight tracking-tight text-white mb-6">
            {data?.heroHeadline}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {data?.heroSubheadline}
          </p>
          <Link
            href={data?.heroCtaHref || '/contact'}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-[#080B11] font-semibold text-sm hover:bg-amber-400 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {data?.heroCta || 'Apply to Become a Partner'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      {data?.benefits?.length > 0 && (
        <section className="py-24 px-6 bg-[#0D1117]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-700 text-white text-center mb-16">
              Why Partners Choose Vijilan Guard™
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.benefits.map((b: { _key: string; icon: string; title: string; description: string }) => (
                <div key={b._key} className="card-glass rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 text-amber-400">
                    <DynamicIcon name={b.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-600 text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PARTNER TIERS ── */}
      {data?.tiers?.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-700 text-white text-center mb-16">
              Partner Tiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.tiers.map((tier: {
                _key: string; name: string; description: string;
                requirements: string[]; perks: string[];
              }, i: number) => (
                <div
                  key={tier._key}
                  className="card-glass rounded-2xl p-8 border"
                  style={{ borderColor: `${tierColors[i]}25` }}
                >
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{ background: `${tierColors[i]}15`, color: tierColors[i] }}
                  >
                    <LucideIcons.Award className="w-3.5 h-3.5" />
                    {tier.name}
                  </div>
                  <p className="text-sm text-slate-400 mb-6">{tier.description}</p>

                  <div className="mb-6">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Requirements</p>
                    <ul className="space-y-2">
                      {tier.requirements?.map((r: string, j: number) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: tierColors[i] }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Perks</p>
                    <ul className="space-y-2">
                      {tier.perks?.map((p: string, j: number) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-300">
                          <LucideIcons.Star className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: tierColors[i] }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQs ── */}
      {data?.faqs?.length > 0 && (
        <section className="py-24 px-6 bg-[#0D1117]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-700 text-white text-center mb-16">
              Partner FAQs
            </h2>
            <div className="space-y-4">
              {data.faqs.map((faq: { _key: string; question: string; answer: string }) => (
                <details key={faq._key} className="card-glass rounded-xl group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-medium text-white text-sm">{faq.question}</span>
                    <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-700 text-white mb-4">
            Ready to Join the Program?
          </h2>
          <p className="text-slate-400 mb-8">
            Apply today and get your first client live within 72 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-[#080B11] font-semibold text-sm hover:bg-amber-400 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
