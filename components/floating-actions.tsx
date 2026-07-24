'use client'

import { useEffect, useState } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function FloatingActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed bottom-5 right-5 z-50 flex flex-col gap-3 transition-all duration-500',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0',
      )}
    >
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-110"
      >
        <MessageCircle className="size-7" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-background px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow transition-opacity group-hover:opacity-100">
          WhatsApp us
        </span>
      </a>
      <a
        href={`tel:${siteConfig.phone}`}
        aria-label="Call now"
        className="group flex size-14 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-lg shadow-black/40 transition-transform hover:scale-110"
      >
        <Phone className="size-6" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-background px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow transition-opacity group-hover:opacity-100">
          Call now
        </span>
      </a>
    </div>
  )
}
