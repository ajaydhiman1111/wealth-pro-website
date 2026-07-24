'use client'

import { useState, useEffect } from 'react'
import { Play, X } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

// Replace youTubeId values with your project's real video IDs.
const videos = [
  {
    youTubeId: 'ScMzIvxBSi4',
    title: 'Project Walkthrough Film',
    duration: '2:45',
    poster: '/images/hero-aerial.png',
  },
  {
    youTubeId: 'ScMzIvxBSi4',
    title: 'Clubhouse & Amenities Tour',
    duration: '1:58',
    poster: '/images/clubhouse.png',
  },
  {
    youTubeId: 'ScMzIvxBSi4',
    title: 'Location & Connectivity',
    duration: '2:10',
    poster: '/images/streetscape.png',
  },
]

export function VideoGallery() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section id="videos" className="relative bg-card/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Watch"
          title={<>Video Gallery</>}
          description="Take a cinematic tour of Ekta Avenue Phase 3 — from the grand entrance to the lush central park."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {videos.map((video, i) => (
            <Reveal
              key={video.title}
              delay={i * 100}
              className="group relative overflow-hidden rounded-3xl border border-gold/20"
            >
              <button
                type="button"
                onClick={() => setActive(video.youTubeId)}
                className="block w-full text-left"
                aria-label={`Play ${video.title}`}
              >
                <img
                  src={video.poster || '/placeholder.svg'}
                  alt={video.title}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                  <Play className="ml-1 size-7 fill-current" />
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                  <h3 className="font-serif text-lg font-semibold">{video.title}</h3>
                  <span className="glass rounded-full px-3 py-1 text-xs text-gold">
                    {video.duration}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground"
            aria-label="Close video"
          >
            <X className="size-5" />
          </button>
          <div
            className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-gold/20"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${active}?autoplay=1`}
              title="Ekta Avenue Phase 3 video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}
    </section>
  )
}
