import {
  Waves,
  Dumbbell,
  Trees,
  Baby,
  ShieldCheck,
  Car,
  Zap,
  Volleyball,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const featured = [
  {
    img: '/images/clubhouse.png',
    title: 'Luxury Clubhouse & Pool',
    desc: 'A resort-style clubhouse with an infinity pool, lounge and banquet space.',
  },
  {
    img: '/images/central-park.png',
    title: 'Central Landscaped Park',
    desc: 'Acres of manicured greens with Big parks and water features.',
  },
  {
    img: '/images/lifestyle.png',
    title: 'Community Lifestyle Zones',
    desc: 'Resourt, Swimming pool and gathering spaces for the community.',
  },
]

const list = [
  { icon: Waves, label: 'Swimming Pool' },
  { icon: Dumbbell, label: 'Modern Gymnasium' },
  { icon: Trees, label: 'Landscaped Gardens' },
  { icon: Baby, label: "Kids' Play Area" },
  { icon: Volleyball, label: 'Parks' },
  { icon: ShieldCheck, label: '24×7 Security' },
  { icon: Car, label: 'Wide Internal Roads' },
  { icon: Zap, label: 'Power Backup' },
]

export function Amenities() {
  return (
    <section id="amenities" className="relative bg-card/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Lifestyle"
          title={<>World-class Amenities</>}
          description="Live every day like a getaway. Ekta Avenue Phase 3 is packed with amenities designed for comfort, wellness and recreation."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 100}
              className="group relative overflow-hidden rounded-3xl border border-gold/20"
            >
              <img
                src={item.img || '/placeholder.svg'}
                alt={item.title}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {list.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 60}
              className="glass flex items-center gap-3 rounded-2xl px-5 py-4"
            >
              <item.icon className="size-6 shrink-0 text-gold" />
              <span className="text-sm font-medium">{item.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
