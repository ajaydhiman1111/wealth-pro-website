import { MapPin, Navigation, Plane, TrainFront, GraduationCap, Building2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { siteConfig } from '@/lib/site-config'

const connectivity = [
  { icon: Navigation, label: 'Delhi–Dehradun Expressway', time: '10 min' },
  { icon: Plane, label: 'Jolly Grant Airport', time: '1.2 hrs' },
  { icon: TrainFront, label: 'Dehradun Railway Station', time: '40 min' },
  { icon: GraduationCap, label: 'Reputed Schools & Colleges', time: '20 min' },
  { icon: Building2, label: 'Hospitals', time: '5 min' },
  { icon: MapPin, label: 'Mussoorie Hill Station', time: '1.5hr' },
]

export function Location() {
  return (
    <section id="location" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Connectivity"
          title={<>Perfectly connected location</>}
          description="At the intersection of convenience and calm — close to everything that matters, yet away from the city rush."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass overflow-hidden rounded-3xl p-2">
              <iframe
                title="Ekta Avenue Phase 3 location map"
                src={siteConfig.mapsEmbed}
                className="h-[360px] w-full rounded-2xl sm:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <ul className="space-y-3">
              {connectivity.map((item) => (
                <li
                  key={item.label}
                  className="glass flex items-center gap-4 rounded-2xl px-5 py-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <item.icon className="size-5" />
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="ml-auto font-serif text-lg font-semibold text-gold">
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={siteConfig.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              <MapPin className="size-4" />
              Get Directions
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
