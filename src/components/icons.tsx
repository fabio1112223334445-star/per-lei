/** Iconos de trazo 1.75px, estilo Lucide. Decorativos: el texto del botón da el nombre accesible. */

type IconProps = { className?: string }

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export const PhoneIcon = ({ className = 'size-5' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
)

export const WhatsAppIcon = ({ className = 'size-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.36A9.9 9.9 0 1 0 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.8.83-3-.2-.31a8.2 8.2 0 1 1 6.97 3.84zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25 0-.38.11-.5l.37-.44c.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.47a.9.9 0 0 0-.66.31 2.8 2.8 0 0 0-.87 2.07c0 1.22.89 2.4 1.01 2.57.13.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.47-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.17-.47-.29z" />
  </svg>
)

export const MapPinIcon = ({ className = 'size-5' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const NavigationIcon = ({ className = 'size-5' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
)

export const ClockIcon = ({ className = 'size-5' }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

export const ArrowUpRightIcon = ({ className = 'size-5' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
)

export const ArrowRightIcon = ({ className = 'size-5' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export const XIcon = ({ className = 'size-5' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

export const ChevronLeftIcon = ({ className = 'size-5' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="m15 18-6-6 6-6" />
  </svg>
)

export const ChevronRightIcon = ({ className = 'size-5' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
)

export const MenuIcon = ({ className = 'size-5' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 8h16M4 16h10" />
  </svg>
)

export const StarIcon = ({ className = 'size-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
  </svg>
)

export const CarIcon = ({ className = 'size-5' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M19 17h2v-4.5a2 2 0 0 0-.6-1.4L18 9l-1.6-3.2A2 2 0 0 0 14.6 5H9.4a2 2 0 0 0-1.8 1.1L6 9l-2.4 2.1a2 2 0 0 0-.6 1.4V17h2" />
    <circle cx="7.5" cy="17" r="2" />
    <circle cx="16.5" cy="17" r="2" />
    <path d="M9.5 17h5M6 9h12" />
  </svg>
)

export const SunIcon = ({ className = 'size-5' }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
)

export const MoonIcon = ({ className = 'size-5' }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
  </svg>
)

/** Ornamento del marquee: estrella de 8 puntas (sello de horno). */
export const Ornament = ({ className = 'size-6' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 0l2 8.5L21 3l-5.5 7L24 12l-8.5 2 5.5 7-7-5.5L12 24l-2-8.5L3 21l5.5-7L0 12l8.5-2L3 3l7 5.5z" />
  </svg>
)
