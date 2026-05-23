'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Shield } from 'lucide-react'

const navLinks = [
  {
    label: 'Products',
    children: [
      { label: 'ThreatRespond™', href: '/products/threatrespond', desc: 'Managed Detection & Response' },
      { label: 'ThreatDefend™', href: '/products/threatdefend', desc: 'Managed Endpoint Security' },
      { label: 'NextDefend™', href: '/products/nextdefend', desc: 'Zero-Trust Network Security' },
    ],
  },
  { label: 'Vijilan Guard™', href: '/guard' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

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
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#00D4FF] to-[#7C3AED] flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-700 text-lg tracking-tight">
            <span className="text-white">Vijilan</span>
            <span className="text-[#00D4FF]">.ai</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  {item.label}
                  <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                    productsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <div className="bg-[#0D1117] border border-white/10 rounded-xl p-2 w-64 shadow-2xl">
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
            className="px-4 py-2 text-sm font-medium rounded-lg bg-[#00D4FF] text-[#080B11] hover:bg-[#00BFEA] transition-colors"
          >
            Get Protected
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
              className="block w-full text-center px-4 py-2.5 text-sm font-medium rounded-lg bg-[#00D4FF] text-[#080B11] hover:bg-[#00BFEA] transition-colors"
            >
              Get Protected
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
