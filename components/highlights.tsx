import { Route, TreePine, ShieldCheck, TrendingUp, Building2, Droplets } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const highlights = [
  {
    icon: Route,
    title: 'Expressway Connectivity',
    desc: 'Just few minutes from the Delhi–Dehradun Expressway for seamless access to the capital.',
  },
  {
    icon: ShieldCheck,
    title: 'Gated & MDDA Approved',
    desc: 'Fully secured, boundary-walled township with clear titles and MDDA registration.',
  },
  {
    icon: TreePine,
    title: '40% Open & Green',
    desc: 'Landscaped parks, tree-lined avenues and open breathing spaces throughout.',
  },
  {
    icon: TrendingUp,
    title: 'High Appreciation',
    desc: 'Located in a fast-growing corridor with strong capital-value growth potential.',
  },
  {
    icon: Building2,
    title: 'Ready Infrastructure',
    desc: 'Wide internal roads, underground wiring, street lighting and 2 Big Parks, Swimming Pool and a Big community centre',
  },
  {
    icon: Droplets,
    title: 'Assured Utilities',
    desc: '24×7 water supply, power backup and security .',
  },
]

export function Highlights() {
  return (
    <section id="highlights" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Ekta Avenue"
          title={<>Project Highlights</>}
          description="Every detail engineered for a premium address you'll be proud to own — and a smart investment for years to come."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="glass group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                <item.icon className="size-7" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
