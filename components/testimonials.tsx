'use client'

import { useState, useEffect, useCallback } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Rajeev Malhotra',
    role: 'Plot Owner, Sector B',
    quote:
      'Booking a plot at Ekta Avenue was the best decision for my family. The connectivity to the expressway and the quality of infrastructure is unmatched in this region.',
    initials: 'RM',
  },
  {
    name: 'Sunita & Anil Verma',
    role: 'Investors, Delhi',
    quote:
      'We invested purely for appreciation and the value has already grown significantly. Transparent paperwork and a very professional team throughout.',
    initials: 'SV',
  },
  {
    name: 'Karan Bhatia',
    role: 'NRI Buyer, Dubai',
    quote:
      'Managed the entire booking remotely. The team shared videos, documents and handled everything smoothly. The gated community concept is exactly what I wanted.',
    initials: 'KB',
  },
  {
    name: 'Dr. Meera Nair',
    role: 'Plot Owner, Sector D',
    quote:
      'The central park and clubhouse make it feel like a resort. I look forward to building my dream home here in the Doon Valley.',
    initials: 'MN',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), [])
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const active = testimonials[index]

  return (
    <section id="testimonials" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Loved by our owners</>}
          description="Join over 2,000 families who have trusted Ekta Avenue with their most important investment."
        />

        <div className="glass-strong relative mt-14 rounded-[2rem] p-8 sm:p-12">
          <Quote className="size-12 text-gold/40" />
          <div key={index} className="reveal in-view">
            <p className="mt-4 text-balance font-serif text-xl leading-relaxed sm:text-2xl">
              {active.quote}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-gold/15 font-serif text-lg font-bold text-gold">
                {active.initials}
              </div>
              <div>
                <p className="font-semibold">{active.name}</p>
                <p className="text-sm text-muted-foreground">{active.role}</p>
              </div>
              <div className="ml-auto hidden gap-1 sm:flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === index ? 'w-8 bg-gold' : 'w-2 bg-muted-foreground/40',
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="flex size-10 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="flex size-10 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground"
                aria-label="Next testimonial"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
