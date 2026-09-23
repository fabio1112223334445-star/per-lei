import { photos, type PhotoId } from '#/data/gallery'
import { ArtDrawing } from './art'

interface PhotoProps {
  id: PhotoId
  className?: string
  /** `sizes` para el <img> real */
  sizes?: string
  priority?: boolean
  artClassName?: string
}

/**
 * Foto real si existe (`hasPhoto`), o placeholder ilustrado duotono con grano.
 * El contenedor controla el tamaño; este componente siempre llena su caja.
 */
export function Photo({ id, className = '', sizes = '100vw', priority, artClassName }: PhotoProps) {
  const p = photos[id]

  if (p.hasPhoto) {
    return (
      <img
        src={p.src}
        alt={p.alt}
        width={p.width}
        height={p.height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={p.alt}
      className={`duo duo-${p.tone} grain flex h-full w-full items-center justify-center overflow-hidden ${className}`}
    >
      <ArtDrawing art={p.art} className={artClassName ?? 'relative z-0 h-3/5 max-h-[26rem] w-3/5 max-w-[26rem]'} />
    </div>
  )
}
