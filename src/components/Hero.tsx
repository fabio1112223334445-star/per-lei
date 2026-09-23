import { useEffect, useRef, type CSSProperties } from 'react'
import { links } from '#/data/business'
import { MapPinIcon, PhoneIcon } from './icons'
import { Photo } from './Photo'
import { Cta, OpenBadge } from './ui'

const i = (n: number) => ({ '--i': n }) as CSSProperties

// Brasas deterministas (mismo resultado en SSR y cliente). En móvil se muestran solo las 8 primeras.
const EMBERS = Array.from({ length: 14 }, (_, n) => {
  // Redondeado a 2 decimales: Math.sin no da exactamente lo mismo en el servidor y en el navegador.
  const r = (k: number) => Math.round((((Math.sin(n * 12.9898 + k * 78.233) * 43758.5453) % 1) + 1) % 1 * 100) / 100
  return {
    '--x': `${Math.round(18 + r(1) * 64)}%`,
    '--s': `${Math.round(3 + r(2) * 5)}px`,
    '--d': `${(3.2 + r(3) * 3.4).toFixed(2)}s`,
    '--delay': `${(-r(4) * 6).toFixed(2)}s`,
    '--dx': `${Math.round((r(5) - 0.5) * 1400) / 100}vw`,
  } as CSSProperties
})

/** Pausa brasas/grano fuera de pantalla y alimenta el fallback de parallax (--hp). */
function useHeroMotion() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => el.classList.toggle('is-offscreen', !e.isIntersecting))
    io.observe(el)

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() =>
        el.style.setProperty('--hp', String(Math.min(window.scrollY / window.innerHeight, 1))),
      )
    }
    const needsFallback =
      !CSS.supports('animation-timeline: scroll()') && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (needsFallback) window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return ref
}

export function Hero() {
  const ref = useHeroMotion()
  return (
    <section
      ref={ref}
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-clip pt-[5.5rem] pb-10 md:pt-28 md:pb-14"
    >
      {/* grano de película animado, solo en el hero */}
      <div aria-hidden="true" className="hero-grain" />

      {/* capa 1: resplandor de horno */}
      <div
        aria-hidden="true"
        className="par-glow pointer-events-none absolute top-[8%] right-[-20%] size-[120vw] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] md:right-[-5%] md:size-[60vw]"
      />

      <div className="relative mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-10">
        <h1 id="hero-title" className="relative mt-4 grid md:mt-2">
          <span className="sr-only">Per Lei — pizzería artesanal de leña en Santa Lucía</span>

          {/* capa 2: arco colonial con el horno, y las brasas que salen de él */}
          <span
            aria-hidden="true"
            className="par-arch relative z-10 col-start-1 row-start-1 mt-[16vw] aspect-[3/4] w-[56%] justify-self-end md:mt-0 md:mr-[4%] md:w-[28%]"
          >
            <span className="fade-in arch block h-full w-full overflow-hidden shadow-vela" style={i(3)}>
              <Photo id="heroHorno" priority sizes="(min-width: 768px) 31vw, 56vw" artClassName="relative z-0 mt-[20%] h-1/2 w-3/4" />
            </span>
            <span className="pointer-events-none absolute inset-x-0 bottom-[38%] h-0">
              {EMBERS.map((style, n) => (
                <span key={n} className="ember" style={style} />
              ))}
            </span>
          </span>

          {/* "Per" delante */}
          <span
            aria-hidden="true"
            className="par-per display line-mask relative z-20 col-start-1 row-start-1 self-start justify-self-start text-[40vw] md:text-[min(19vw,19rem)]"
          >
            <span style={i(0)}>Per</span>
          </span>

          {/* "Lei": relleno tomate que pasa por detrás del arco… */}
          <span
            aria-hidden="true"
            className="par-lei italiano line-mask relative z-0 col-start-1 row-start-1 ml-[14vw] self-end justify-self-start pr-[0.1em] text-[40vw] leading-[0.86] tracking-[0.01em] text-tomate md:mb-[2%] md:ml-[56%] md:text-[min(19vw,19rem)]"
          >
            <span style={i(1)}>Lei</span>
          </span>
          {/* …y su contorno crema continúa por encima de la foto */}
          <span
            aria-hidden="true"
            className="par-lei italiano line-mask text-stroke-cream relative z-20 col-start-1 row-start-1 ml-[14vw] self-end justify-self-start pr-[0.1em] text-[40vw] leading-[0.86] tracking-[0.01em] md:mb-[2%] md:ml-[56%] md:text-[min(19vw,19rem)]"
          >
            <span style={i(1)}>Lei</span>
          </span>
        </h1>

        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:items-end">
          <p
            className="fade-in font-display text-[clamp(1.6rem,6.4vw,2.6rem)] leading-[1.08] tracking-[-0.02em] md:col-span-7 lg:col-span-6 [font-variation-settings:'opsz'_72]"
            style={i(4)}
          >
            Pizza de leña, <em className="italiano text-tomate">fatta a mano</em>, en el corazón colonial de Santa Lucía.
          </p>

          <div className="fade-in flex flex-col gap-5 md:col-span-5 md:col-start-8" style={i(5)}>
            <OpenBadge className="self-start" />
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
