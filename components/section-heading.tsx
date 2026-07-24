import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-6 bg-gold" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-balance font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
