'use client'

// Design: Atmospheric Depth — dark carbon (#080B11), cyan/purple glows, Bricolage Grotesque + Hanken Grotesk
// Revision 02: Wordmark component in dropdowns, Praxis → external praxisops.ai, ThreatRespond → #56C9E8

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, ExternalLink } from 'lucide-react'
import { Wordmark } from '@/app/components/Wordmark'

// Nav structure — Praxis is now an external link to praxisops.ai
const solutionsChildren = [
  {
    product: 'ThreatRespond' as const,
    href: '/solutions/threatrespond',
    desc: 'Your tools. Our SOC.',
    external: false,
  },
  {
    product: 'ThreatDefend' as const,
    href: '/solutions/threatdefend',
    desc: 'CrowdStrike Falcon, fully managed.',
    external: false,
  },
  {
    product: 'NextDefend' as const,
    href: '/solutions/nextdefend',
    desc: 'Managed CrowdStrike Next-Gen SIEM.',
    external: false,
  },
]

const topLinks = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/resources/faq' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B11]/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Official SVG Logo — white wordmark on dark surface */}
        <Link href="/" className="flex items-center group" aria-label="Vijilan home">
          {/* Full lockup: hidden below 360px, shown from xs up */}
          <Image
            src="/vijilan-logo-white-wordmark.svg"
            alt="Vijilan"
            width={130}
            height={51}
            className="hidden xs:block h-9 w-auto"
            priority
          />
          {/* Waveform mark only: shown below 360px */}
          <Image
            src="/vijilan-logo-white-wordmark.svg"
            alt="Vijilan"
            width={36}
            height={36}
            className="xs:hidden h-8 w-8 object-left object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">

          {/* Solutions dropdown */}
          <div className="relative">
            <button
              className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              onMouseEnter={() => setOpenDropdown('Solutions')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              Solutions
              <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                openDropdown === 'Solutions'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
              onMouseEnter={() => setOpenDropdown('Solutions')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="bg-[#0D1117] border border-white/10 rounded-xl p-2 w-76 shadow-2xl" style={{ width: '300px' }}>
                {solutionsChildren.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm font-medium text-white">
                      <Wordmark product={child.product} />
                    </span>
                    <span className="text-xs text-slate-400 mt-0.5">{child.desc}</span>
                  </Link>
                ))}
                <div className="border-t border-white/5 mt-1 pt-1">
                  <Link
                    href="/solutions"
                    className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm font-medium text-white">All Solutions</span>
                    <span className="text-xs text-slate-400 mt-0.5">Find the right fit for your situation.</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Platform dropdown — Praxis is external */}
          <div className="relative">
            <button
              className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              onMouseEnter={() => setOpenDropdown('Platform')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              Platform
              <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                openDropdown === 'Platform'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
              onMouseEnter={() => setOpenDropdown('Platform')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="bg-[#0D1117] border border-white/10 rounded-xl p-2 shadow-2xl" style={{ width: '280px' }}>
                {/* Praxis — external link with brand styling */}
                <a
                  href="https://praxisops.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group/praxis"
                >
                  <span className="flex items-center gap-1.5 text-sm font-medium text-white">
                    {/* Praxis brand mark: black bg + red text */}
                    <span
                      className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider"
                      style={{ backgroundColor: '#000', color: '#ED1C24', border: '1px solid #ED1C24' }}
                    >
                      PRAXIS
                    </span>
                    AI Engine
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover/praxis:text-slate-300 transition-colors" />
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5">Machine-speed triage, human-verified. ↗ praxisops.ai</span>
                </a>
              </div>
            </div>
          </div>

          {/* Flat links */}
          {topLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-sm transition-colors ${
                pathname === item.href ? 'text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Vijilan Guard™ */}
          <Link
            href="/guard"
            className="px-4 py-2 text-sm transition-colors text-slate-300 hover:text-white"
          >
            <Wordmark product="VililanGuard" />
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium rounded-lg text-[#080B11] hover:opacity-90 transition-colors"
            style={{ backgroundColor: '#00AEEF' }}
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D1117] border-t border-white/5 px-6 py-4 space-y-1">
          <p className="text-xs text-slate-500 uppercase tracking-wider px-3 py-2">Solutions</p>
          {solutionsChildren.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm rounded-lg hover:bg-white/5 text-white"
            >
              <Wordmark product={child.product} />
            </Link>
          ))}
          <Link
            href="/solutions"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5"
          >
            All Solutions
          </Link>

          <p className="text-xs text-slate-500 uppercase tracking-wider px-3 py-2 pt-3">Platform</p>
          <a
            href="https://praxisops.ai"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5"
          >
            <span
              className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider"
              style={{ backgroundColor: '#000', color: '#ED1C24', border: '1px solid #ED1C24' }}
            >
              PRAXIS
            </span>
            AI Engine
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>

          {topLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/guard"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2 text-sm rounded-lg hover:bg-white/5 text-white"
          >
            <Wordmark product="VililanGuard" />
          </Link>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-2.5 text-sm font-medium rounded-lg text-[#080B11] hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#00AEEF' }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
