'use client'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/app/components/Navbar'), { ssr: false })
const Footer = dynamic(() => import('@/app/components/Footer'), { ssr: false })

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
