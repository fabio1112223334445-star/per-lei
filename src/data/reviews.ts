/** Reseñas reales de Google, textuales. */

export interface Review {
  author: string
  badge?: string
  text: string
  highlight: string
  source: 'Reseña en Google'
}

export const reviews: Review[] = [
  {
    author: 'Marlen Maldonado',
    text: 'Una experiencia 10/10, amo su comida, las pizzas, la sangría y las tablas de queso… el personal muy atento y amable, un ambiente muy agradable, muy bonito para pasarla en familia ❤️',
    highlight: 'Una experiencia 10/10',
    source: 'Reseña en Google',
  },
  {
    author: 'Delia Isaula',
    text: 'Una experiencia excelente de principio a fin. El lugar es hermoso, la atención fue impecable y cada detalle estuvo muy bien cuidado. Gracias por hacer que el día de nuestra boda fuese tan especial e inolvidable.',
    highlight: 'El día de nuestra boda',
    source: 'Reseña en Google',
  },
  {
    author: 'Kelsin Maldonado',
    badge: 'Local Guide',
    text: 'Excelente calidad precio, pizzas artesanales, parqueo, precios no elevados, pizzas ricas, buena atención y música',
    highlight: 'Excelente calidad precio',
    source: 'Reseña en Google',
  },
]
