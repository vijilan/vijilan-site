'use client'

// Design: Atmospheric Depth — dark carbon (#080B11), cyan/purple glows, Bricolage Grotesque + Hanken Grotesk
// Updated with new routes: /solutions, /platform/praxis, /pricing, /resources/faq

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  {
    label: 'Solutions',
    children: [
      { label: 'ThreatRespond™', href: '/solutions/threatrespond', desc: 'Your tools. Our SOC.' },
      { label: 'ThreatDefend™', href: '/solutions/threatdefend', desc: 'CrowdStrike Falcon, fully managed.' },
      { label: 'NextDefend™', href: '/solutions/nextdefend', desc: 'Managed CrowdStrike Next-Gen SIEM.' },
      { label: 'All Solutions', href: '/solutions', desc: 'Find the right fit for your situation.' },
    ],
  },
  {
    label: 'Platform',
    children: [
      { label: 'Praxis AI Engine', href: '/platform/praxis', desc: 'Machine-speed triage, human-verified.' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/resources/faq' },
  { label: 'Vijilan Guard™', href: '/guard' },
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
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.label}
                  <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                    openDropdown === item.label
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="bg-[#0D1117] border border-white/10 rounded-xl p-2 w-72 shadow-2xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <span className="text-sm font-medium text-white">{child.label}</span>
                        <span className="text-xs text-slate-400 mt-0.5">{child.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={`px-4 py-2 text-sm transition-colors ${
                  pathname === item.href ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
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
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label}>
                <p className="text-xs text-slate-500 uppercase tracking-wider px-3 py-2">{item.label}</p>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5"
              >
                {item.label}
              </Link>
            )
          )}
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
