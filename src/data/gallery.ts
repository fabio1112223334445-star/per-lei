/**
 * Imágenes del sitio. Todas las rutas viven aquí.
 *
 * Para usar una foto real:
 *   1. Guarda el archivo en /public/images con el nombre de `src` (idealmente .webp o .avif, ~1600px lado mayor).
 *   2. Cambia `hasPhoto` a `true` (y ajusta width/height a la proporción real).
 * Mientras `hasPhoto` sea `false` se muestra el placeholder ilustrado duotono.
 */

export type Art = 'horno' | 'pizza' | 'copa' | 'tabla' | 'vista' | 'mesa' | 'masa' | 'boda' | 'postre' | 'parqueo'
export type Tone = 'tomate' | 'carbon' | 'albahaca'

export interface PhotoData {
  src: string
  alt: string
  /** Nombre corto de referencia (no se muestra en el sitio) */
  label: string
  art: Art
  tone: Tone
  hasPhoto: boolean
  width: number
  height: number
}

const photo = (p: Omit<PhotoData, 'hasPhoto'> & { hasPhoto?: boolean }): PhotoData => ({ hasPhoto: false, ...p })

export const photos = {
  heroHorno: photo({
    src: '/images/hero-horno.jpg',
    alt: 'El horno de leña de Per Lei encendido, con una pizza entrando al fuego',
    label: 'Horno',
    art: 'horno',
    tone: 'carbon',
    width: 1200,
    height: 1600,
  }),
  historiaHorno: photo({
    src: '/images/historia-fuego.jpg',
    alt: 'Detalle de las llamas dentro del horno de leña',
    label: 'Fuego',
    art: 'horno',
    tone: 'tomate',
    width: 1200,
    height: 1500,
  }),
  historiaMasa: photo({
    src: '/images/historia-masa.jpg',
    alt: 'Manos estirando la masa de pizza sobre harina',
    label: 'Masa',
    art: 'masa',
    tone: 'carbon',
    width: 1200,
    height: 1500,
  }),
  pizzaMargherita: photo({
    src: '/images/pizza-margherita.jpg',
    alt: 'Pizza margherita recién salida del horno con albahaca fresca',
    label: 'Margherita',
    art: 'pizza',
    tone: 'tomate',
    width: 1200,
    height: 1200,
  }),
  pizzaEspecial: photo({
    src: '/images/pizza-especial.jpg',
    alt: 'Pizza artesanal de la casa sobre tabla de madera',
    label: 'Pizza',
    art: 'pizza',
    tone: 'carbon',
    width: 1200,
    height: 1200,
  }),
  sangria: photo({
    src: '/images/sangria.jpg',
    alt: 'Copa de sangría con frutas sobre la mesa',
    label: 'Sangría',
    art: 'copa',
    tone: 'tomate',
    width: 1200,
    height: 1500,
  }),
  tablaQuesos: photo({
    src: '/images/tabla-quesos.jpg',
    alt: 'Tabla de quesos con uvas y pan',
    label: 'Tabla',
    art: 'tabla',
    tone: 'albahaca',
    width: 1500,
    height: 1200,
  }),
  vista: photo({
    src: '/images/vista-santa-lucia.jpg',
    alt: 'Vista de las montañas y el pueblo colonial de Santa Lucía desde Per Lei',
    label: 'Vista',
    art: 'vista',
    tone: 'albahaca',
    width: 1600,
    height: 1000,
  }),
  ambiente: photo({
    src: '/images/ambiente-mesa.jpg',
    alt: 'Mesa puesta con velas y copas al atardecer',
    label: 'Ambiente',
    art: 'mesa',
    tone: 'carbon',
    width: 1200,
    height: 1500,
  }),
  boda: photo({
    src: '/images/evento-boda.jpg',
    alt: 'Montaje de boda con luces colgantes en Per Lei',
    label: 'Boda',
    art: 'boda',
    tone: 'carbon',
    width: 1600,
    height: 1100,
  }),
  postre: photo({
    src: '/images/postre.jpg',
    alt: 'Postre de la casa servido en plato de cerámica',
    label: 'Postre',
    art: 'postre',
    tone: 'albahaca',
    width: 1200,
    height: 1200,
  }),
  parqueo: photo({
    src: '/images/parqueo.jpg',
    alt: 'Área de parqueo del restaurante',
    label: 'Parqueo',
    art: 'parqueo',
    tone: 'albahaca',
    width: 1200,
    height: 900,
  }),
} satisfies Record<string, PhotoData>

export type PhotoId = keyof typeof photos

/** Orden y formato de la galería (grid asimétrico: el orden está pensado para que el grid cierre sin huecos). */
export const gallery: { id: PhotoId; shape: 'tall' | 'wide' | 'square' }[] = [
  { id: 'heroHorno', shape: 'tall' },
  { id: 'pizzaMargherita', shape: 'square' },
  { id: 'tablaQuesos', shape: 'square' },
  { id: 'vista', shape: 'wide' },
  { id: 'sangria', shape: 'tall' },
  { id: 'boda', shape: 'wide' },
  { id: 'ambiente', shape: 'square' },
  { id: 'postre', shape: 'square' },
]
