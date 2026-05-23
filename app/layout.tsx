import type { Metadata } from 'next'
import { Bricolage_Grotesque, Hanken_Grotesk } from 'next/font/google'
import './globals.css'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${hanken.variable}`}>
      <body className="bg-[#080B11] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
