'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig, navLinks } from '@/lib/site-config'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'glass-strong py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <a href="#top" className="flex flex-col leading-none" aria-label={siteConfig.project}>
          <span className="font-serif text-xl font-bold tracking-wide text-gold sm:text-2xl">
            Ekta Avenue
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground">
            Phase 3
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-primary-foreground md:inline-flex"
          >
            <Phone className="size-4" />
            Call Now
          </a>
          <a
            href="#enquiry"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Enquire
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-gold/40 text-gold lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-[68px] z-40 origin-top overflow-hidden transition-all duration-300 lg:hidden',
          open ? 'max-h-[80vh] opacity-100' : 'pointer-events-none max-h-0 opacity-0',
        )}
      >
        <div className="glass-strong mx-4 rounded-2xl p-5">
          <ul className="flex flex-col divide-y divide-border">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base font-medium text-foreground/90 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 py-3 text-sm font-semibold text-gold"
            >
              <Phone className="size-4" /> Call
            </a>
            <a
              href="#enquiry"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-gold py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Enquire
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
