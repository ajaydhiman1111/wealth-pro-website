import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const points = [
  'Thoughtfully master-planned plotted development',
  'Plot sizes from 67 to 266 sq. yards',
  'Clear title, ready-to-register plots',
  'Backed by a legacy of 2,000+ happy families',
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/20">
            <img
              src="/images/entrance-gate.png"
              alt="Grand entrance gateway at Ekta Avenue Phase 3"
              className="h-[360px] w-full object-cover sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
          <div className="glass absolute -bottom-6 left-6 rounded-2xl px-6 py-5 sm:left-8">
            <p className="font-serif text-3xl font-bold text-gold">Est. 2024</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
            
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-6 bg-gold" />
            About the Project
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            A landmark address in the Doon Valley
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Ekta Avenue Phase 3 continues our vision of crafting self-sustained, gated
            communities that blend nature with modern living. Set against the backdrop of the
            Himalayan foothills and connected by the new Dehradun-Paonta Sahib Expressway, it offers a
            rare opportunity to invest in one of North India's most promising growth corridors.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every plot is designed for premium living — with wide roads, underground utilities,
            lush landscaping and a lifestyle-first clubhouse at the heart of the community.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-foreground/90">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="size-3.5" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#enquiry"
            className="mt-9 inline-flex rounded-full bg-gold px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Request Brochure
          </a>
        </Reveal>
      </div>
    </section>
  )
}
