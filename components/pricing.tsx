import { Check, Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'

const plots = [
  {
    name: 'Residential Plots',
    size: '67 sq. yd',
    price: '₹13.4 Lakh*',
    note: 'onwards',
    features: ['East/West/North/South facing','30 ft road access', 'Ready to register'],
    popular: false,
  },
  {
    name: 'Premium Plots',
    size: '67 sq. yd',
    price: '₹18.7 Lakh*',
    note: 'onwards',
    features: [
      'Corner & wide-frontage',
      'Resort and swimming pool proximity',
      '40 ft road access',
      'Priority allotment',
    ],
    popular: true,
  },
  {
    name: 'Commercial',
    size: '75 sq. yd',
    price: '₹16.5 Lakh*',
    note: 'onwards',
    features: ['Prime central sectors', 'Green-belt frontage', '80 ft Wide roads'],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-card/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Investment"
          title={<>Plot Pricing</>}
          description="Transparent pricing across a range of plot sizes. Limited inventory in Phase 3 — enquire for the current price list and offers."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plots.map((plot, i) => (
            <Reveal
              key={plot.name}
              delay={i * 100}
              className={cn(
                'relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1',
                plot.popular
                  ? 'glass-strong border-gold/60 shadow-2xl shadow-gold/10'
                  : 'glass',
              )}
            >
              {plot.popular ? (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                  <Star className="size-3.5" /> Most Popular
                </span>
              ) : null}

              <h3 className="font-serif text-2xl font-semibold">{plot.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">
                {plot.size}
              </p>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-serif text-4xl font-bold text-gold">{plot.price}</span>
                <span className="pb-1 text-xs text-muted-foreground">{plot.note}</span>
              </div>

              <ul className="mt-7 flex-1 space-y-3">
                {plot.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Check className="size-3.5" />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#enquiry"
                className={cn(
                  'mt-8 rounded-full py-3.5 text-center text-sm font-semibold transition-all',
                  plot.popular
                    ? 'bg-gold text-primary-foreground hover:scale-[1.03]'
                    : 'border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground',
                )}
              >
                Enquire Now
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          *Prices are indicative and exclusive of applicable charges &amp; taxes. Call{' '}
          <a href={`tel:${siteConfig.phone}`} className="text-gold hover:underline">
            {siteConfig.phoneDisplay}
          </a>{' '}
          for the latest price list.
        </p>
      </div>
    </section>
  )
}
