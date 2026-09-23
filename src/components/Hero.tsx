import type { CSSProperties } from 'react'
import { business, links } from '#/data/business'
import { MapPinIcon, PhoneIcon, StarIcon } from './icons'
import { Photo } from './Photo'
import { Cta, OpenBadge } from './ui'

const i = (n: number) => ({ '--i': n }) as CSSProperties

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-[5.5rem] pb-10 md:pt-28 md:pb-14"
    >
      {/* resplandor de horno detrás del arco */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[8%] right-[-20%] size-[120vw] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] md:right-[-5%] md:size-[60vw]"
      />

      <div className="relative mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-10">
        <div className="fade-in flex flex-wrap items-center justify-end gap-3 max-md:justify-start" style={i(0)}>
          <OpenBadge />
        </div>

        <h1 id="hero-title" className="relative mt-6 grid md:mt-4">
          <span className="sr-only">Per Lei — pizzería artesanal de leña en Santa Lucía</span>

          {/* Arco colonial con el horno */}
          <span
            aria-hidden="true"
            className="fade-in arch relative z-10 col-start-1 row-start-1 mt-[16vw] aspect-[3/4] w-[56%] justify-self-end overflow-hidden shadow-vela md:mt-0 md:mr-[4%] md:w-[28%]"
            style={i(3)}
          >
            <Photo id="heroHorno" priority sizes="(min-width: 768px) 31vw, 56vw" artClassName="relative z-0 mt-[20%] h-1/2 w-3/4" />
          </span>

          {/* "Per" delante */}
          <span
            aria-hidden="true"
            className="display line-mask relative z-20 col-start-1 row-start-1 self-start justify-self-start text-[40vw] md:text-[min(19vw,19rem)]"
          >
            <span style={i(0)}>Per</span>
          </span>

          {/* "Lei": relleno tomate que pasa por detrás del arco… */}
          <span
            aria-hidden="true"
            className="italiano line-mask relative z-0 col-start-1 row-start-1 ml-[14vw] self-end justify-self-start pr-[0.1em] text-[40vw] leading-[0.86] tracking-[0.01em] text-tomate md:mb-[2%] md:ml-[56%] md:text-[min(19vw,19rem)]"
          >
            <span style={i(1)}>Lei</span>
          </span>
          {/* …y su contorno crema continúa por encima de la foto */}
          <span
            aria-hidden="true"
            className="italiano line-mask text-stroke-cream relative z-20 col-start-1 row-start-1 ml-[14vw] self-end justify-self-start pr-[0.1em] text-[40vw] leading-[0.86] tracking-[0.01em] md:mb-[2%] md:ml-[56%] md:text-[min(19vw,19rem)]"
          >
            <span style={i(1)}>Lei</span>
          </span>
        </h1>

        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:items-end">
          <p
            className="fade-in font-display text-[clamp(1.6rem,6.4vw,2.6rem)] leading-[1.08] tracking-[-0.02em] md:col-span-6 [font-variation-settings:'opsz'_72]"
            style={i(4)}
          >
            Pizza de leña, <em className="italiano text-tomate">fatta a mano</em>, en el corazón colonial de Santa Lucía.
          </p>

          <div className="fade-in flex flex-col gap-5 md:col-span-5 md:col-start-8" style={i(5)}>
            <a
              href={business.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-3 self-start"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-sm font-semibold text-bg">
                <StarIcon className="size-3.5 text-oro" />
                {business.rating.value.toLocaleString('es-HN')}
              </span>
              <span className="text-sm text-ink-muted underline decoration-line underline-offset-4 transition-colors group-hover:text-ink">
                en Google · {business.rating.count} reseñas
              </span>
              <span className="sr-only">(se abre en otra pestaña)</span>
            </a>
            <div className="grid grid-cols-2 gap-3 sm:flex">
              <Cta href={links.tel} icon={<PhoneIcon className="size-[1.1rem]" />}>
                Llamar
              </Cta>
              <Cta href={links.googleMaps} variant="outline" external icon={<MapPinIcon className="size-[1.1rem]" />}>
                Cómo llegar
              </Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
