import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
// import Logo from './Logo.jsx'

const APP_URL = 'https://app.flowsentinel.cloud'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Features',     href: '#features' },
    { label: 'Pricing',      href: '#pricing' },
    { label: 'Contact',      href: '#contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-md border-b border-subtle'
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2.5 no-underline group">
            {/* <img src="/logo-dark.svg" alt="FlowSentinel" className="h-9" /> */}
            <img src="/logo-dark.svg" alt="FlowSentinel" className="h-10" style={{ width: '180px' }} />

          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13.5px] text-slate-400 hover:text-white transition-colors duration-200 no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={APP_URL}
              className="text-[13.5px] font-medium text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5 no-underline"
            >
              Sign in
            </a>
            <a
              href="#contact"
              className="text-[13.5px] font-semibold text-navy bg-teal hover:bg-teal-dim transition-colors px-4 py-2 rounded-md no-underline"
            >
              Request demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden text-slate-400 hover:text-white p-2 rounded-md"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-navy/95 backdrop-blur-md" onClick={() => setMobileOpen(false)} />
          <div className="relative flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-light text-white hover:text-teal transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col items-center gap-4 mt-4">
              <a href={APP_URL} className="text-slate-400 no-underline" onClick={() => setMobileOpen(false)}>
                Sign in
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="px-8 py-3 bg-teal text-navy font-semibold rounded-lg no-underline"
              >
                Request demo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
