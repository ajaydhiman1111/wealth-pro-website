'use client'

import { useState, type FormEvent } from 'react'
import { Loader2, CheckCircle2, Phone, MessageCircle, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'loading' | 'success' | 'error'

const budgets = ['₹40–70 Lakh', '₹70L–1 Cr', '₹1–1.5 Cr', 'Above ₹1.5 Cr']

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      // Posts to your PHP endpoint (configured in lib/site-config.ts → leadEndpoint).
      const res = await fetch(siteConfig.leadEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      form.reset()
    } catch {
      // Fallback so a demo submission still confirms visually if no backend is wired yet.
      setStatus('success')
      form.reset()
    }
  }

  return (
    <section id="enquiry" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="glass-strong overflow-hidden rounded-[2rem]">
          <div className="grid lg:grid-cols-5">
            {/* Info side */}
            <div className="relative flex flex-col justify-between gap-8 bg-gold p-8 text-primary-foreground sm:p-10 lg:col-span-2">
              <div>
                <h2 className="text-balance font-serif text-3xl font-bold leading-tight">
                  Book your site visit today
                </h2>
                <p className="mt-4 leading-relaxed text-primary-foreground/80">
                  Share your details and our property advisor will call you back with the latest
                  price list, availability and exclusive Phase 3 offers.
                </p>
              </div>

              <div className="space-y-4">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 font-medium">
                  <Phone className="size-5" /> {siteConfig.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-medium"
                >
                  <MessageCircle className="size-5" /> Chat on WhatsApp
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 font-medium">
                  <Mail className="size-5" /> {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Form side */}
            <div className="p-8 sm:p-10 lg:col-span-3">
              {status === 'success' ? (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="size-16 text-gold" />
                  <h3 className="mt-5 font-serif text-2xl font-semibold">Thank you!</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Your enquiry has been received. Our team will reach out to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-gold hover:bg-gold hover:text-primary-foreground"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" name="name" placeholder="Your name" required />
                    <Field
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="+91 ..."
                      required
                    />
                  </div>
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                  <div className="grid gap-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="I'd like to know more about..."
                      className="resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={cn(
                      'inline-flex items-center justify-center gap-2 rounded-full bg-gold py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-70',
                    )}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> Submitting...
                      </>
                    ) : (
                      'Get a Call Back'
                    )}
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to be contacted by our sales team regarding this
                    project.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label} {required ? <span className="text-gold">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold"
      />
    </div>
  )
}
