import { useEffect, useState } from 'react'
import { business, TIMEZONE } from '#/data/business'

const DAYS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
const WEEKDAY_INDEX: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }

export interface OpenStatus {
  open: boolean
  label: string
  detail: string
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

/** "12:00" → "12 PM", "20:30" → "8:30 PM" */
export const formatHour = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number)
  const suffix = h >= 12 ? 'PM' : 'AM'
  const h12 = h % 12 === 0 ? 12 : h % 12
  return m ? `${h12}:${String(m).padStart(2, '0')} ${suffix}` : `${h12} ${suffix}`
}

function nowInHonduras(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIMEZONE,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  return { day: WEEKDAY_INDEX[get('weekday')] ?? 0, minutes: Number(get('hour')) * 60 + Number(get('minute')) }
}

/**
 * Estado según la hora de Honduras. Mientras `business.openDays` sea null (días sin confirmar)
 * solo se comparan las horas; cuando se definan los días, también se respetan.
 */
export function getOpenStatus(date = new Date()): OpenStatus {
  const { day, minutes } = nowInHonduras(date)
  const { open, close } = business.hours
  const days = business.openDays
  const opensToday = !days || days.includes(day)
  const opensAt = formatHour(open)

  if (opensToday && minutes >= toMinutes(open) && minutes < toMinutes(close)) {
    return { open: true, label: 'Abierto ahora', detail: `cierra a las ${formatHour(close)}` }
  }
  if (opensToday && minutes < toMinutes(open)) {
    return { open: false, label: 'Cerrado', detail: `abre ${days ? 'hoy ' : ''}a las ${opensAt}` }
  }
  if (!days) return { open: false, label: 'Cerrado', detail: `abre a las ${opensAt}` }

  for (let i = 1; i <= 7; i++) {
    const next = (day + i) % 7
    if (days.includes(next)) {
      const when = i === 1 ? 'mañana' : `el ${DAYS[next]}`
      return { open: false, label: 'Cerrado', detail: `abre ${when} a las ${opensAt}` }
    }
  }
  return { open: false, label: 'Cerrado', detail: 'consulta el horario' }
}

/** Solo en cliente (evita desajustes de hidratación). `null` durante SSR. */
export function useOpenStatus() {
  const [status, setStatus] = useState<OpenStatus | null>(null)
  useEffect(() => {
    const tick = () => setStatus(getOpenStatus())
    tick()
    const id = window.setInterval(tick, 60_000)
    return () => window.clearInterval(id)
  }, [])
  return status
}
