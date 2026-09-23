import type { PhotoId } from './gallery'

/**
 * Carta. TODO: todo el contenido de este archivo es PLACEHOLDER.
 * Reemplazar nombres, descripciones y precios con la carta real del dueño.
 * `price: null` se muestra como "L —".
 */

export interface MenuItem {
  name: string
  description: string
  price: number | null
  /** Aparece como tarjeta destacada (máx. 3 por categoría) */
  featured?: boolean
  photo?: PhotoId
  tags?: string[]
  placeholder: boolean
}

export interface MenuCategory {
  id: string
  label: string
  italian: string
  /** Foto que acompaña al cursor en la lista (desktop) cuando el ítem no tiene foto propia */
  cover: PhotoId
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: 'pizzas',
    cover: 'pizzaEspecial',
    label: 'Pizzas',
    italian: 'dal forno',
    items: [
      {
        name: 'Margherita',
        description: 'Salsa de tomate, mozzarella y albahaca fresca.',
        price: null,
        featured: true,
        photo: 'pizzaMargherita',
        tags: ['clásica'],
        placeholder: true,
      },
      {
        name: 'De la casa',
        description: 'La favorita de Per Lei. Ingredientes por confirmar.',
        price: null,
        featured: true,
        photo: 'pizzaEspecial',
        tags: ['recomendada'],
        placeholder: true,
      },
      {
        name: 'Cuatro quesos',
        description: 'Mezcla de quesos gratinados al fuego de leña.',
        price: null,
        featured: true,
        photo: 'tablaQuesos',
        placeholder: true,
      },
      { name: 'Pepperoni', description: 'Salsa de tomate, mozzarella y pepperoni.', price: null, placeholder: true },
      { name: 'Jamón y hongos', description: 'Jamón, champiñones y mozzarella.', price: null, placeholder: true },
      { name: 'Vegetariana', description: 'Vegetales de temporada asados.', price: null, placeholder: true },
    ],
  },
  {
    id: 'entradas',
    cover: 'tablaQuesos',
    label: 'Entradas y Tablas',
    italian: 'per cominciare',
    items: [
      {
        name: 'Tabla de quesos',
        description: 'Selección de quesos con acompañantes.',
        price: null,
        featured: true,
        photo: 'tablaQuesos',
        tags: ['para compartir'],
        placeholder: true,
      },
      {
        name: 'Pan de ajo al horno',
        description: 'Masa de la casa con ajo y hierbas.',
        price: null,
        featured: true,
        photo: 'pizzaEspecial',
        placeholder: true,
      },
      { name: 'Tabla mixta', description: 'Quesos y embutidos para compartir.', price: null, placeholder: true },
      { name: 'Bruschetta', description: 'Pan tostado con tomate y albahaca.', price: null, placeholder: true },
    ],
  },
  {
    id: 'bebidas',
    cover: 'sangria',
    label: 'Bebidas',
    italian: 'da bere',
    items: [
      {
        name: 'Sangría',
        description: 'La de la casa, con fruta. Por copa o por jarra.',
        price: null,
        featured: true,
        photo: 'sangria',
        tags: ['favorita'],
        placeholder: true,
      },
      { name: 'Vino de la casa', description: 'Tinto o blanco, por copa.', price: null, placeholder: true },
      { name: 'Limonada', description: 'Natural o con hierbabuena.', price: null, placeholder: true },
      { name: 'Refrescos', description: 'Variedad de sodas.', price: null, placeholder: true },
      { name: 'Café', description: 'Americano o espresso.', price: null, placeholder: true },
    ],
  },
  {
    id: 'postres',
    cover: 'postre',
    label: 'Postres',
    italian: 'dolci',
    items: [
      {
        name: 'Postre de la casa',
        description: 'Pregunta por el postre del día.',
        price: null,
        featured: true,
        photo: 'postre',
        placeholder: true,
      },
      { name: 'Pizza dulce', description: 'Masa al horno con cobertura dulce.', price: null, placeholder: true },
      { name: 'Helado', description: 'Una bola, sabores del día.', price: null, placeholder: true },
    ],
  },
]

export const formatPrice = (price: number | null) =>
  price === null ? 'L —' : `L ${price.toLocaleString('es-HN')}`
