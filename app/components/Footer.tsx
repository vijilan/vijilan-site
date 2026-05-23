import Link from 'next/link'
import { Shield } from 'lucide-react'

const footerLinks = [
  {
    heading: 'Products',
    links: [
      { label: 'ThreatRespond™', href: '/products/threatrespond' },
      { label: 'ThreatDefend™', href: '/products/threatdefend' },
      { label: 'NextDefend™', href: '/products/nextdefend' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Vijilan Guard™', href: '/guard' },
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#00D4FF] to-[#7C3AED] flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                <span className="text-white">Vijilan</span>
                <span className="text-[#00D4FF]">.ai</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Enterprise-grade managed security, delivered as a service.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
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
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Vijilan, Inc. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            SOC 2 Type II Certified · HIPAA Compliant · ISO 27001
          </p>
        </div>
      </div>
    </footer>
  )
}
