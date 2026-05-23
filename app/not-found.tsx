import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080B11] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00AEEF] to-[#7C3AED] flex items-center justify-center mx-auto mb-8">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <h1 className="font-display text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-slate-400 text-lg mb-8">This page could not be found.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00AEEF] text-[#080B11] font-semibold text-sm hover:bg-[#009FD9] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
