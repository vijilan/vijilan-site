import { sanityFetch } from '@/app/sanity/lib/client'
import { homepageQuery, allProductsQuery } from '@/app/sanity/lib/queries'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, Brain, Users, ChevronRight } from 'lucide-react'

export const revalidate = 60 // ISR: revalidate every 60 seconds

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch(homepageQuery)
  return {
    title: data?.seoTitle || 'Vijilan.ai — AI-Powered Managed Cybersecurity',
    description: data?.seoDescription,
  }
}

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
}

const productAccents: Record<string, string> = {
  threatrespond: '#00D4FF',
  threatdefend: '#7C3AED',
  nextdefend: '#10B981',
}

export default async function HomePage() {
  const [homepage, products] = await Promise.all([
    sanityFetch(homepageQuery, {}, ['homepage']),
    sanityFetch(allProductsQuery, {}, ['product']),
  ])

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Atmospheric background */}
        <div className="absolute inset-0 bg-[#080B11]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,212,255,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(124,58,237,0.08),transparent)]" />
        {/* Grid overlay */}
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
            AI-Powered Managed Security
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-800 leading-[1.05] tracking-tight mb-6">
            <span className="text-white">{homepage?.heroHeadline?.split(' ').slice(0, -2).join(' ') || 'Stop Threats Before They'}</span>
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)' }}
            >
              {homepage?.heroHeadline?.split(' ').slice(-2).join(' ') || 'Become Breaches'}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {homepage?.heroSubheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={homepage?.heroPrimaryCtaHref || '/contact'}
              className="px-6 py-3 rounded-lg bg-[#00D4FF] text-[#080B11] font-semibold text-sm hover:bg-[#00BFEA] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {homepage?.heroPrimaryCta || 'Get Protected'}
            </Link>
            <Link
              href={homepage?.heroSecondaryCtaHref || '/products/threatrespond'}
              className="px-6 py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              {homepage?.heroSecondaryCta || 'See How It Works'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-slate-600" />
        </div>
      </section>

      {/* ── STATS ── */}
      {homepage?.stats?.length > 0 && (
        <section className="border-y border-white/5 bg-[#0D1117]">
          <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {homepage.stats.map((stat: { _key: string; value: string; label: string }) => (
              <div key={stat._key} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-800 text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── PRODUCTS ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-4">
              {homepage?.productsSectionHeadline || 'The Vijilan Security Platform'}
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {homepage?.productsSectionSubheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products?.map((product: { slug: string; name: string; tagline: string; accentColor: string }) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="card-glass rounded-2xl p-8 group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${product.accentColor || '#00D4FF'}, transparent)` }}
                />
                <div
                  className="w-10 h-10 rounded-xl mb-6 flex items-center justify-center"
                  style={{ background: `${product.accentColor || '#00D4FF'}15`, border: `1px solid ${product.accentColor || '#00D4FF'}30` }}
                >
                  <Shield className="w-5 h-5" style={{ color: product.accentColor || '#00D4FF' }} />
                </div>
                <h3 className="font-display text-xl font-700 text-white mb-2">{product.name}</h3>
                <p className="text-sm text-slate-400 mb-6">{product.tagline}</p>
                <div className="flex items-center gap-1 text-sm font-medium" style={{ color: product.accentColor || '#00D4FF' }}>
                  Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY VIJILAN ── */}
      {homepage?.whyVijilan && (
        <section className="py-24 px-6 bg-[#0D1117]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-4">
                {homepage.whyVijilan.headline}
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                {homepage.whyVijilan.subheadline}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {homepage.whyVijilan.pillars?.map((pillar: { _key: string; icon: string; title: string; description: string }) => (
                <div key={pillar._key} className="card-glass rounded-2xl p-6 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center shrink-0 text-[#00D4FF]">
                    {iconMap[pillar.icon] || <Shield className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-600 text-white mb-2">{pillar.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIALS ── */}
      {homepage?.testimonials?.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl font-700 text-white text-center mb-16">
              Trusted by Security Leaders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {homepage.testimonials.map((t: { _key: string; quote: string; author: string; role: string; company: string }) => (
                <div key={t._key} className="card-glass rounded-2xl p-6">
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-white text-sm font-medium">{t.author}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{t.role}, {t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BAND ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 via-transparent to-[#7C3AED]/10" />
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-700 text-white mb-4">
                {homepage?.ctaBandHeadline}
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                {homepage?.ctaBandSubheadline}
              </p>
              <Link
                href={homepage?.ctaBandPrimaryCtaHref || '/contact'}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00D4FF] text-[#080B11] font-semibold text-sm hover:bg-[#00BFEA] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {homepage?.ctaBandPrimaryCta || 'Schedule Free Assessment'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
