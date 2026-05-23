import { sanityFetch } from '@/app/sanity/lib/client'
import { productBySlugQuery, allProductsQuery } from '@/app/sanity/lib/queries'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

export const revalidate = 60

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  const products = await sanityFetch(allProductsQuery)
  return products.map((p: { slug: string }) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const product = await sanityFetch(productBySlugQuery, { slug })
  if (!product) return {}
  return {
    title: product.seoTitle || `${product.name} | Vijilan.ai`,
    description: product.seoDescription,
  }
}

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<any>>)[name]
  if (!Icon) return <LucideIcons.Shield className={className} />
  return <Icon className={className} />
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params
  const product = await sanityFetch(productBySlugQuery, { slug }, ['product'])
  if (!product) notFound()

  const accent = product.accentColor || '#00AEEF'

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[#080B11]" />
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${accent}18, transparent)` }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${accent}50 1px, transparent 1px), linear-gradient(90deg, ${accent}50 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-8"
            style={{ borderColor: `${accent}30`, background: `${accent}08`, color: accent }}
          >
            {product.name}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-800 leading-tight tracking-tight text-white mb-6">
            {product.heroHeadline}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {product.heroSubheadline}
          </p>
          <Link
            href={product.heroCtaHref || '/contact'}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: accent, color: '#080B11' }}
          >
            {product.heroCta || 'Request a Demo'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── FEATURES ── */}
      {product.features?.length > 0 && (
        <section className="py-24 px-6 bg-[#0D1117]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-700 text-white text-center mb-16">
              Everything You Need to Stay Secure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((f: { _key: string; icon: string; title: string; description: string }) => (
                <div key={f._key} className="card-glass rounded-2xl p-6">
                  <div
                    className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                    style={{ background: `${accent}12`, border: `1px solid ${accent}25` }}
                  >
                    <DynamicIcon name={f.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-600 text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PRICING ── */}
      {product.pricingTiers?.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-700 text-white text-center mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-slate-400 text-center mb-16">No hidden fees. Cancel anytime.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.pricingTiers.map((tier: {
                _key: string; name: string; price: string; description: string;
                isPopular: boolean; isGated: boolean; features: string[];
                ctaLabel: string; ctaHref: string;
              }) => (
                <div
                  key={tier._key}
                  className={`relative rounded-2xl p-8 border transition-all ${
                    tier.isPopular
                      ? 'border-[#00AEEF]/40 bg-[#0D1117]'
                      : 'border-white/8 bg-[#0D1117]/60'
                  }`}
                >
                  {tier.isPopular && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: accent, color: '#080B11' }}
                    >
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display text-lg font-700 text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    {tier.isGated ? (
                      <span className="text-2xl font-display font-700 text-white">Contact Us</span>
                    ) : (
                      <span className="text-3xl font-display font-800 text-white">{tier.price}</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-400 mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features?.map((feat: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accent }} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.ctaHref || '/contact'}
                    className={`block w-full text-center py-3 rounded-lg text-sm font-semibold transition-all ${
                      tier.isPopular
                        ? 'hover:opacity-90'
                        : 'border border-white/10 text-white hover:border-white/20 hover:bg-white/5'
                    }`}
                    style={tier.isPopular ? { background: accent, color: '#080B11' } : {}}
                  >
                    {tier.ctaLabel || 'Get Started'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQs ── */}
      {product.faqs?.length > 0 && (
        <section className="py-24 px-6 bg-[#0D1117]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-700 text-white text-center mb-16">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {product.faqs.map((faq: { _key: string; question: string; answer: string }) => (
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
            Ready to Get Started?
          </h2>
          <p className="text-slate-400 mb-8">
            Schedule a 30-minute demo and see {product.name} in action.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: accent, color: '#080B11' }}
          >
            Schedule a Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
