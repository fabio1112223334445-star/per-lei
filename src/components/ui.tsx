import type { ReactNode } from 'react'
import { business } from '#/data/business'
import { useOpenStatus } from '#/lib/open-status'

type Variant = 'primary' | 'outline' | 'ghost'

const variants: Record<Variant, string> = {
  primary: 'bg-tomate text-on-tomate shadow-vela hover:brightness-110',
  outline: 'border border-ink/30 text-ink hover:border-ink hover:bg-ink/5',
  ghost: 'text-ink underline decoration-oro decoration-1 underline-offset-[0.35em] hover:decoration-tomate',
}

interface CtaProps {
  href: string
  children: ReactNode
  variant?: Variant
  icon?: ReactNode
  external?: boolean
  className?: string
}

/** Enlace-botón. Área táctil mínima 48px. */
export function Cta({ href, children, variant = 'primary', icon, external, className = '' }: CtaProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`press group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 text-[0.95rem] font-semibold tracking-[-0.01em] transition-[filter,background-color,border-color] duration-300 ${variants[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
      {external && <span className="sr-only"> (se abre en otra pestaña)</span>}
    </a>
  )
}

interface SectionHeadingProps {
  num: string
  kicker: string
  italian: string
  children: ReactNode
  id: string
  className?: string
}

/** Número monumental en contorno dorado + kicker mono + título display. */
export function SectionHeading({ num, kicker, italian, children, id, className = '' }: SectionHeadingProps) {
  return (
    <header className={`relative ${className}`}>
      <span
        aria-hidden="true"
        className="outline-num pointer-events-none absolute -top-[0.18em] -left-[0.06em] select-none text-[clamp(8rem,34vw,20rem)] opacity-90 md:-left-[0.12em]"
      >
        {num}
      </span>
      <div className="relative pt-[clamp(6rem,30vw,15rem)]">
        <p className="kicker flex items-center gap-3 text-ink-muted">
          <span className="text-tomate">N° {num}</span>
          <span aria-hidden="true" className="h-px w-8 bg-current opacity-40" />
          <span>{kicker}</span>
        </p>
        <h2 id={id} className="display mt-4 text-[clamp(3.25rem,13vw,9.5rem)]">
          {children}
        </h2>
        <p className="italiano mt-3 text-2xl text-tomate md:text-3xl">{italian}</p>
      </div>
    </header>
  )
}

/** Sello "Abierto ahora / Cerrado". Reserva espacio durante SSR para no mover el layout. */
export function OpenBadge({ className = '' }: { className?: string }) {
  const status = useOpenStatus()
  return (
    <p
      aria-live="polite"
      className={`kicker inline-flex min-h-9 items-center gap-2.5 rounded-full border border-current/25 px-3.5 py-1.5 ${className}`}
    >
      <span
        aria-hidden="true"
        className={`live-dot relative size-2 rounded-full ${
          status === null ? 'bg-ink-muted text-ink-muted' : status.open ? 'bg-albahaca text-albahaca' : 'bg-tomate text-tomate'
        }`}
      />
      {status === null ? (
        <span>{business.hoursLabel}</span>
      ) : (
        <span>
          <strong className="font-normal text-ink">{status.label}</strong>
          <span className="text-ink-muted"> · {status.detail}</span>
        </span>
      )}
    </p>
  )
}

export function Stars({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-oro ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
          <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
        </svg>
      ))}
    </span>
  )
}
