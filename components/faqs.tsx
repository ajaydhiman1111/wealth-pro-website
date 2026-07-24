'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Where exactly is Ekta Avenue Phase 3 located?',
    a: 'The township is situated just on the Paonta–Dehradun Expressway in Dehradun, Uttarakhand —well connected to the city centre, airport and railway station.',
  },
  {
    q: 'Are the plots MDDA approved with clear titles?',
    a: 'Yes. All plots in Phase 3 are MDDA registered with clear, marketable titles and are ready for immediate registration in the buyer\'s name.',
  },
  {
    q: 'What plot sizes and price ranges are available?',
    a: 'We offer plots ranging from 75 to 266 sq. yards, starting from ₹13 Lakh. Corner, park-facing plots are available at a premium. Contact our team for the current price list.',
  },
  {
    q: 'What amenities are included in the township?',
    a: 'A resort, swimming pool, gymnasium, landscaped park, 24×7 security, power backup and wide internal roads,Community centre.',
  },
  {
    q: 'Can NRIs purchase plots here?',
    a: 'Absolutely. We have a dedicated NRI desk that manages virtual site visits, documentation and remote booking so you can invest seamlessly from anywhere in the world.',
  },
]

export function FAQs() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faqs" className="relative bg-card/40 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="FAQs"
          title={<>Frequently Asked Questions</>}
          description="Everything you need to know before you invest. Still have questions? Our team is a call away."
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className="glass overflow-hidden rounded-2xl">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-medium">{faq.q}</span>
                  <Plus
                    className={cn(
                      'size-5 shrink-0 text-gold transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
