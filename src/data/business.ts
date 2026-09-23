/**
 * Datos del negocio. Única fuente de verdad para textos de contacto, horario y SEO.
 * Busca "TODO" para ver lo que falta confirmar con el dueño.
 */

export const TIMEZONE = 'America/Tegucigalpa'

/**
 * URL pública del sitio: canonical, Open Graph, JSON-LD, sitemap y robots.
 * TODO: reemplazar por el dominio real cuando exista (y agregarlo en Vercel → Domains).
 */
export const SITE_URL = 'https://per-lei.vercel.app'

/** Horas en formato 24h, hora de Honduras. */
export interface Hours {
  open: string
  close: string
}

export const business = {
  name: 'Per Lei',
  legalName: 'Per Lei — pizzería artesanal',
  tagline: 'Pizza de leña, fatta a mano, en el corazón colonial de Santa Lucía.',
  description:
    'Pizzería artesanal de horno de leña en Santa Lucía, Francisco Morazán. Pizzas hechas a mano, sangría, tablas de queso y un espacio amplio con vista para compartir en familia, bodas y celebraciones.',
  url: SITE_URL,

  address: {
    street: 'A 50 mts del antiguo cabildo municipal',
    locality: 'Santa Lucía',
    region: 'Francisco Morazán',
    postalCode: '11112',
    country: 'HN',
    countryName: 'Honduras',
    plusCode: '4V8P+G8 Santa Lucía',
  },
  // Coordenadas decodificadas del Plus Code 766J4V8P+G8.
  // TODO: confirmar el pin exacto en Google Maps con el dueño.
  geo: { lat: 14.11631, lng: -87.11419 },

  phone: {
    display: '2779-0094',
    international: '+504 2779-0094',
    e164: '+50427790094',
  },
  // WhatsApp del negocio (+504 8988-1108). Las llamadas siguen yendo al fijo.
  whatsapp: '50489881108',
  whatsappDisplay: '+504 8988-1108',

  rating: { value: 4.6, count: 46 },
  priceRange: { min: 200, max: 800, currency: 'HNL', symbol: 'L' },
  services: ['Comer en el local', 'Para llevar', 'Delivery'] as const,

  // Horario confirmado: abre 12:00 PM y cierra 8:00 PM. El indicador "Abierto ahora" usa solo estas horas.
  hours: { open: '12:00', close: '20:00' } as Hours,
  // TODO: confirmar qué días abre. Formato: 0 = domingo … 6 = sábado, p. ej. [2, 3, 4, 5, 6, 0].
  // Mientras sea `null` no se muestran días, el indicador no los considera y el JSON-LD omite el horario.
  openDays: null as number[] | null,
  hoursLabel: '12:00 PM – 8:00 PM',

  // TODO: completar enlaces reales (Linktree, Instagram, Facebook, TikTok). Vacíos = no se muestran.
  social: {
    linktree: '',
    instagram: '',
    facebook: '',
    tiktok: '',
  },

  // TODO: reemplazar por el enlace directo a la ficha de Google (Compartir → Copiar enlace).
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Per+Lei+pizzer%C3%ADa+Santa+Luc%C3%ADa+Francisco+Moraz%C3%A1n',
} as const

export const messages = {
  reservar: 'Hola, quiero reservar una mesa en Per Lei',
  evento: 'Hola, me gustaría cotizar un evento en Per Lei',
  pedido: 'Hola, quiero hacer un pedido en Per Lei',
} as const

export const links = {
  tel: `tel:${business.phone.e164}`,
  whatsapp: (text: string) => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`,
  googleMaps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`766J4V8P+G8`)}`,
  waze: `https://waze.com/ul?ll=${business.geo.lat},${business.geo.lng}&navigate=yes`,
  mapEmbed: `https://maps.google.com/maps?q=${business.geo.lat},${business.geo.lng}&z=16&hl=es&output=embed`,
}

export const fullAddress = `${business.address.street}, ${business.address.locality}, ${business.address.region} ${business.address.postalCode}`
