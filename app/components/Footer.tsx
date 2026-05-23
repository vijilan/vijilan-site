import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

const internalLinks = [
  {
    heading: 'Solutions',
    links: [
      { label: 'ThreatRespond™', href: '/solutions/threatrespond' },
      { label: 'ThreatDefend™', href: '/solutions/threatdefend' },
      { label: 'NextDefend™', href: '/solutions/nextdefend' },
      { label: 'All Solutions', href: '/solutions' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'FAQ', href: '/resources/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080B11]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            {/* Official SVG Logo — white wordmark on dark footer */}
            <Link href="/" className="inline-block mb-4" aria-label="Vijilan home">
              <Image
                src="/vijilan-logo-white-wordmark.svg"
                alt="Vijilan"
                width={120}
                height={47}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              AI-augmented managed security for MSPs and MSSPs. Machine speed. Human judgment.
            </p>
            {/* Praxis brand callout */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Powered by</span>
              <a
                href="https://praxisops.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#000', color: '#ED1C24', border: '1px solid #ED1C24' }}
              >
                PRAXIS
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Internal links */}
          {internalLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Platform — Praxis external */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://praxisops.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Praxis AI Engine
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <Link href="/guard" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Vijilan Guard™
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Vijilan Security, Inc. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            SOC 2 Type 2 · ISO 27001 · CrowdStrike CPSP · Authorized CrowdStrike Reseller
          </p>
        </div>
      </div>
    </footer>
  )
}
