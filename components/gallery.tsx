'use client'

import { useState, useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type Category = 'All' | 'Aerial' | 'Amenities' | 'Landscape' | 'Homes'

const images: { src: string; alt: string; category: Exclude<Category, 'All'>; wide?: boolean }[] = [
  { src: '/images/hero-aerial.png', alt: 'Aerial view of the township', category: 'Aerial', wide: true },
  { src: '/images/clubhouse.png', alt: 'Luxury clubhouse and pool', category: 'Amenities' },
  { src: '/images/central-park.png', alt: 'Central landscaped park', category: 'Landscape' },
  { src: '/images/entrance-gate.png', alt: 'Grand entrance gateway', category: 'Landscape' },
  { src: '/images/streetscape.png', alt: 'Tree-lined internal boulevard', category: 'Landscape', wide: true },
  { src: '/images/villa-render.png', alt: 'Luxury villa render on a plot', category: 'Homes' },
  { src: '/images/lifestyle.png', alt: 'Community lifestyle lounge', category: 'Amenities' },
  { src: '/images/master-plan1.png', alt: 'Master plan layout', category: 'Aerial' },
]

const categories: Category[] = ['All', 'Aerial', 'Amenities', 'Landscape', 'Homes']

export function Gallery() {
  const [filter, setFilter] = useState<Category>('All')
  const [active, setActive] = useState<number | null>(null)

  const filtered = images.filter((img) => filter === 'All' || img.category === filter)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length],
  )
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, next, prev])

  return (
    <section id="gallery" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={<>A glimpse of the good life</>}
          description="Explore the vistas, amenities and spaces that make Ekta Avenue Phase 3 a truly premium address."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all',
                filter === cat
                  ? 'bg-gold text-primary-foreground'
                  : 'glass text-foreground/80 hover:text-gold',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4">
          {filtered.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 60}
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-gold/15',
                img.wide && 'sm:col-span-2',
              )}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="h-full w-full"
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src || '/placeholder.svg'}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 transition-opacity group-hover:opacity-100">
                  <ZoomIn className="size-8 text-gold" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground"
            aria-label="Close gallery"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-4 flex size-12 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-5xl">
            <img
              src={filtered[active].src || '/placeholder.svg'}
              alt={filtered[active].alt}
              className="max-h-[80vh] w-auto rounded-2xl border border-gold/20 object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              {filtered[active].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-4 flex size-12 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      ) : null}
    </section>
  )
}
