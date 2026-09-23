import { useEffect, useRef, useState, type PointerEvent } from 'react'

const FINE = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

/** true solo con mouse/trackpad y sin "reducir movimiento". `false` en SSR y en táctil. */
export function useFinePointer() {
  const [fine, setFine] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(FINE)
    const update = () => setFine(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return fine
}

/** Tilt 3D leve: escribe --rx/--ry/--mx/--my en el elemento, un frame por movimiento. */
export function useTilt<T extends HTMLElement>(enabled: boolean, maxDeg = 6) {
  const ref = useRef<T>(null)
  const frame = useRef(0)

  const onPointerMove = (e: PointerEvent<T>) => {
    const el = ref.current
    if (!enabled || !el || e.pointerType !== 'mouse') return
    const { clientX, clientY } = e
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect()
      const px = (clientX - r.left) / r.width
      const py = (clientY - r.top) / r.height
      el.style.setProperty('--ry', `${(px - 0.5) * maxDeg * 2}deg`)
      el.style.setProperty('--rx', `${(0.5 - py) * maxDeg * 2}deg`)
      el.style.setProperty('--mx', `${px * 100}%`)
      el.style.setProperty('--my', `${py * 100}%`)
      el.classList.add('is-tilting')
    })
  }

  const onPointerLeave = () => {
    const el = ref.current
    if (!el) return
    cancelAnimationFrame(frame.current)
    el.classList.remove('is-tilting')
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  useEffect(() => () => cancelAnimationFrame(frame.current), [])

  return { ref, onPointerMove, onPointerLeave }
}
