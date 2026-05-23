import type { Metadata } from 'next'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Vijilan.ai',
  description: 'Get in touch with the Vijilan team. Schedule a free threat assessment or request a demo.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* ── HERO ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,212,255,0.08),transparent)]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-800 text-white mb-4 tracking-tight">
            Let&apos;s Talk Security
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Schedule a free 30-minute threat assessment. No commitment, no sales pressure — just clarity on your current exposure.
          </p>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card-glass rounded-2xl p-8">
              <h2 className="font-display text-xl font-700 text-white mb-6">Send Us a Message</h2>
              <form className="space-y-5" action="mailto:hello@vijilan.ai" method="get">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-slate-400 mb-2 font-medium">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]/40 transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-2 font-medium">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]/40 transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2 font-medium">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]/40 transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2 font-medium">Company</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]/40 transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2 font-medium">I&apos;m interested in</label>
                  <select
                    name="interest"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D4FF]/40 transition-colors"
                  >
                    <option value="" className="bg-[#0D1117]">Select a product or service</option>
                    <option value="threatrespond" className="bg-[#0D1117]">ThreatRespond™ — MDR</option>
                    <option value="threatdefend" className="bg-[#0D1117]">ThreatDefend™ — Managed EDR</option>
                    <option value="nextdefend" className="bg-[#0D1117]">NextDefend™ — Zero-Trust</option>
                    <option value="guard" className="bg-[#0D1117]">Vijilan Guard™ — Partner Program</option>
                    <option value="general" className="bg-[#0D1117]">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2 font-medium">Message</label>
                  <textarea
                    name="body"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]/40 transition-colors resize-none"
                    placeholder="Tell us about your security needs or ask a question..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#00D4FF] text-[#080B11] font-semibold text-sm hover:bg-[#00BFEA] transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-display text-lg font-700 text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#00D4FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Email</p>
                    <a href="mailto:hello@vijilan.ai" className="text-sm text-white hover:text-[#00D4FF] transition-colors">
                      hello@vijilan.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#00D4FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                    <a href="tel:+18005551234" className="text-sm text-white hover:text-[#00D4FF] transition-colors">
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#00D4FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Headquarters</p>
                    <p className="text-sm text-white">Miami, FL</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-2xl p-6">
              <h4 className="font-display text-base font-600 text-white mb-2">Response Time</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                We respond to all inquiries within 4 business hours. For urgent security incidents, call our 24/7 SOC hotline.
              </p>
            </div>

            <div className="card-glass rounded-2xl p-6">
              <h4 className="font-display text-base font-600 text-white mb-2">Partner Inquiries</h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Interested in the Vijilan Guard™ partner program? Select &quot;Partner Program&quot; in the form or email us directly.
              </p>
              <a
                href="mailto:partners@vijilan.ai"
                className="text-sm text-[#00D4FF] hover:underline"
              >
                partners@vijilan.ai
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
