import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { siteConfig, navLinks } from '@/lib/site-config'

export function Footer() {
  return (
    <footer className="relative border-t border-gold/20 bg-card/60">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <span className="font-serif text-2xl font-bold text-gold">Ekta Avenue</span>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Phase 3
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              A gated luxury plotted township near the Delhi–Dehradun Expressway, crafted for
              premium living and assured appreciation.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">RERA No. {siteConfig.rera}</p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">Explore</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                {siteConfig.address}
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <Phone className="size-4 shrink-0 text-gold" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <Mail className="size-4 shrink-0 text-gold" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">Ready to invest?</h3>
            <p className="mt-5 text-sm text-muted-foreground">
              Speak to a property advisor and get the latest Phase 3 price list.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#enquiry"
                className="rounded-full bg-gold px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Enquire Now
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Ekta Avenue. All rights reserved.</p>
          <p className="max-w-xl text-pretty">
            Disclaimer: Images are artistic representations. Prices, plans and specifications are
            subject to change. This is not a legal offer.
          </p>
        </div>
      </div>
    </footer>
  )
}
