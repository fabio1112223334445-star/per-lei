import type { ReactNode } from 'react'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import frauncesUrl from '@fontsource-variable/fraunces/files/fraunces-latin-opsz-normal.woff2?url'
import { business } from '#/data/business'
// CSS inline en el <head>: evita una petición bloqueante extra en la primera carga.
import appCss from '../styles.css?inline'

const title = 'Per Lei — Pizzería artesanal de leña en Santa Lucía, Honduras'
const ogImage = `${business.url}/og.jpg` // TODO: crear /public/og.jpg (1200×630) con foto real del horno o una pizza

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: business.name,
  description: business.description,
  url: business.url,
  image: ogImage,
  telephone: business.phone.e164,
  priceRange: `L ${business.priceRange.min}–${business.priceRange.max}`,
  currenciesAccepted: business.priceRange.currency,
  servesCuisine: ['Pizza', 'Italiana'],
  acceptsReservations: true,
  hasMap: `https://www.google.com/maps/search/?api=1&query=${business.geo.lat},${business.geo.lng}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng },
  openingHoursSpecification: Object.entries(business.hours)
    .filter(([, h]) => h)
    .map(([day, h]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][Number(day)]}`,
      opens: h!.open,
      closes: h!.close,
    })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: business.rating.value,
    reviewCount: business.rating.count,
    bestRating: 5,
  },
  sameAs: Object.values(business.social).filter(Boolean),
}

// Antes del primer pintado: marca JS disponible (reveals con fallback) y aplica el tema guardado.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')d.dataset.theme=t}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { title },
      { name: 'description', content: business.description },
      { name: 'theme-color', content: '#f3eadb', media: '(prefers-color-scheme: light)' },
      { name: 'theme-color', content: '#120e0b', media: '(prefers-color-scheme: dark)' },
      { property: 'og:type', content: 'restaurant' },
      { property: 'og:locale', content: 'es_HN' },
      { property: 'og:site_name', content: business.name },
      { property: 'og:title', content: title },
      { property: 'og:description', content: business.description },
      { property: 'og:url', content: business.url },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: business.description },
      { name: 'twitter:image', content: ogImage },
      { name: 'geo.region', content: 'HN-FM' },
      { name: 'geo.placename', content: `${business.address.locality}, ${business.address.region}` },
      { name: 'geo.position', content: `${business.geo.lat};${business.geo.lng}` },
    ],
    links: [
      { rel: 'preload', href: frauncesUrl, as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'canonical', href: business.url },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'icon', href: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.webmanifest' },
    ],
    styles: [{ children: appCss }],
    scripts: [
      { children: bootScript },
      { type: 'application/ld+json', children: JSON.stringify(jsonLd) },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="es-HN" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-tomate focus:px-5 focus:py-3 focus:text-on-tomate"
        >
          Saltar al contenido
        </a>
        {children}
        <div aria-hidden="true" className="film-grain" />
        <Scripts />
      </body>
    </html>
  )
}

