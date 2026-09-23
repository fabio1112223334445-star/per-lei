import { useEffect, useRef } from 'react'
import { Ornament } from './icons'

const WORDS = [
  { text: 'fatta a mano', italic: true },
  { text: 'Sangría' },
  { text: 'tablas de queso', italic: true },
  { text: 'Horno de leña' },
  { text: 'per lei', italic: true },
  { text: 'Santa Lucía' },
  { text: 'forno a legna', italic: true },
  { text: 'Buena música' },
]

function Row() {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden="true">
      {WORDS.map((w) => (
        <li key={w.text} className="flex items-center">
          <span
            className={`px-6 text-[clamp(2.5rem,9vw,5.5rem)] leading-none whitespace-nowrap md:px-10 ${
              w.italic ? 'italiano' : 'display'
            }`}
          >
            {w.text}
          </span>
          <Ornament className="size-[clamp(1.25rem,3vw,2rem)] shrink-0 text-oro" />
        </li>
      ))}
    </ul>
  )
}

/**
 * Marquee reactivo: la velocidad sube con la velocidad del scroll y la dirección
 * sigue al scroll (bajar → izquierda, subir → derecha). Solo corre en pantalla.
 */
function useScrollReactive() {
  const wrap = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = track.current
    const box = wrap.current
    if (!node || !box || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const anim = node.getAnimations()[0]
    if (!anim) return
    // Adelanta el reloj muchas vueltas para que la marcha atrás nunca llegue al inicio y se detenga.
    const duration = Number(anim.effect?.getComputedTiming().duration) || 38_000
    anim.currentTime = duration * 1000

    let frame = 0
    let running = false
    let lastY = window.scrollY
    let rate = 1
    let dir = 1

    const loop = () => {
      const y = window.scrollY
      const v = y - lastY
      lastY = y
      if (Math.abs(v) > 0.5) dir = v > 0 ? 1 : -1
      const target = dir * (1 + Math.min(Math.abs(v) * 0.22, 5))
      rate += (target - rate) * 0.08
      anim.playbackRate = rate
      if (running) frame = requestAnimationFrame(loop)
    }

    const io = new IntersectionObserver(([e]) => {
      running = e.isIntersecting
      cancelAnimationFrame(frame)
      if (running) {
        lastY = window.scrollY
        frame = requestAnimationFrame(loop)
      }
    })
    io.observe(box)
    return () => {
      running = false
      io.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])

  return { wrap, track }
}

export function Marquee() {
  const { wrap, track } = useScrollReactive()
  return (
    <div ref={wrap} className="relative z-10 -my-2 overflow-hidden py-6 md:py-10">
      <div className="grain -mx-4 -rotate-2 bg-tomate py-5 text-on-tomate shadow-vela md:py-7">
        <p className="sr-only">
          Fatta a mano, sangría, tablas de queso, horno de leña, per lei, Santa Lucía.
        </p>
        <div ref={track} className="marquee-track flex w-max">
          <Row />
          <Row />
        </div>
      </div>
    </div>
  )
}
