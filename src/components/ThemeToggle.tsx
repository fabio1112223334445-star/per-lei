import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './icons'

type Theme = 'light' | 'dark'

const systemTheme = (): Theme => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

/** Alterna harina ↔ notte al forno. Guarda la elección; sin elección, sigue al sistema. */
export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const saved = document.documentElement.dataset.theme
    setTheme(saved === 'light' || saved === 'dark' ? saved : systemTheme())
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    for (const meta of document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')) {
      meta.content = next === 'dark' ? '#120e0b' : '#f3eadb'
    }
    try {
      localStorage.setItem('theme', next)
    } catch {
      // almacenamiento bloqueado: el cambio vale solo para esta visita
    }
    setTheme(next)
  }

  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggle}
      className={`press inline-flex size-12 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-ink/50 ${className}`}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
    >
      {isDark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
    </button>
  )
}
