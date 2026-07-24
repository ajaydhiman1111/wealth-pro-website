'use client'

import { MapPin, ChevronDown, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const stats = [
  { value: '130', label: 'Acres Township' },
  { value: '5 min', label: 'To Expressway' },
  { value: 'MDDA', label: 'Approved Plots' },
  { value: '2 min', label: 'To Hospital' },

]

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Full-screen video / cinematic backdrop.
          Drop an MP4 into /public and set the <source> to enable video playback. */}
      <div className="absolute inset-0 -z-10">
        {/* To enable video playback, add a file at /public/videos/hero.mp4 and
            uncomment the <video> block below — it will layer over the still image. */}
        {/*
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-aerial.png"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        */}
        <img
          src="/images/hero-aerial.png"
          alt="Aerial view of Ekta Avenue plotted township at golden hour"
          className="animate-slow-zoom h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pt-28 pb-20 lg:px-8">
        <div className="max-w-2xl">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide text-gold">
            <MapPin className="size-3.5" />
            {siteConfig.tagline}
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Own a piece of the <span className="gold-gradient-text">new Dehradun</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
            Ekta Avenue is a gated luxury plotted township minutes from the
            Delhi–Dehradun Expressway — wide boulevards, world-class amenities and
            assured appreciation in the heart of the Doon Valley.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#enquiry"
              className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-gold/20 transition-transform hover:scale-[1.03]"
            >
              Book a Site Visit
            </a>
            <a
              href="#pricing"
              className="glass rounded-full px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:text-gold"
            >
              View Plot Pricing
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 text-gold" />
            MDDA No. {siteConfig.MDDA}
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-4 py-5 text-center">
                <dt className="font-serif text-2xl font-bold text-gold sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <a
        href="#highlights"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/70 transition-colors hover:text-gold"
        aria-label="Scroll to highlights"
      >
        <ChevronDown className="size-7 animate-bounce" />
      </a>
    </section>
  )
}
