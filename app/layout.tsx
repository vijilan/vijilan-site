import type { Metadata } from 'next'
import { Bricolage_Grotesque, Hanken_Grotesk } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'
import { sanityFetch } from '@/app/sanity/lib/client'
import { siteSettingsQuery } from '@/app/sanity/lib/queries'

const Navbar = dynamic(() => import('@/app/components/Navbar'), { ssr: false })
const Footer = dynamic(() => import('@/app/components/Footer'), { ssr: false })

interface SiteSettings {
  logo?: { asset?: { url?: string }; alt?: string } | null
  logoDark?: { asset?: { url?: string }; alt?: string } | null
}

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Vijilan.ai — AI-Powered Managed Cybersecurity',
    template: '%s | Vijilan.ai',
  },
  description:
    'Vijilan delivers 24/7 managed detection and response with sub-60-minute containment. Protect your organization with AI-powered MDR, EDR, and zero-trust security.',
  metadataBase: new URL('https://vijilan.ai'),
  openGraph: {
    siteName: 'Vijilan.ai',
    type: 'website',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Fetch logo from Sanity — cached 60s, falls back gracefully to static SVG
  const settings = await sanityFetch<SiteSettings>(
    siteSettingsQuery,
    {},
    ['siteSettings']
  ).catch(() => null)

  const logoUrl = settings?.logo?.asset?.url ?? null
  const logoAlt = settings?.logo?.alt ?? null

  return (
    <html lang="en" className={`${bricolage.variable} ${hanken.variable}`}>
      <body className="bg-[#080B11] text-white antialiased">
        <Navbar logoUrl={logoUrl} logoAlt={logoAlt} />
        <main>{children}</main>
        <Footer logoUrl={logoUrl} logoAlt={logoAlt} />
      </body>
    </html>
  )
}
