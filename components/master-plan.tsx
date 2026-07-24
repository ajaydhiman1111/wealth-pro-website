import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { Download, LandPlot, Waypoints, Fence } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const facts = [
  { icon: LandPlot, value: '130', label: 'Bigha Township' },
  { icon: LandPlot, value: '600', label: 'Premium Plots' },
  { icon: Waypoints, value: '40 ft', label: 'Wide Roads' },
  { icon: Fence, value: '2', label: 'Big Parks' },
]

export function MasterPlan() {
  return (
    <section id="master-plan" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The Blueprint"
          title={<>Master Plan</>}
          description="A meticulously planned layout that maximises open space, connectivity and privacy for every resident."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass relative overflow-hidden rounded-3xl p-3">
              <img
                src="/images/master-plan1.png"
                alt="Master plan layout of Ekta Avenue Phase 3 showing plots, roads and amenities"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-semibold">
              Designed around light, air & green
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The layout places the clubhouse and central park at the heart of the township, with
              plots radiating outward along wide, tree-lined avenues. Every plot enjoys excellent
              orientation, ventilation and easy access to amenities.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {facts.map((fact) => (
                <div key={fact.label} className="glass rounded-2xl px-4 py-5 text-center">
                  <fact.icon className="mx-auto size-6 text-gold" />
                  <p className="mt-3 font-serif text-2xl font-bold text-gold">{fact.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Please share the Ekta Avenue Phase 3 master plan PDF.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              <Download className="size-4" />
              Download Master Plan
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
