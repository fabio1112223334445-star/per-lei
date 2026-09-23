import { useEffect, useRef, useState } from 'react'
import { links, messages } from '#/data/business'
import { MenuIcon, XIcon } from './icons'

const NAV = [
  { href: '#historia', label: 'Historia', num: '01' },
  { href: '#carta', label: 'Carta', num: '03' },
  { href: '#galeria', label: 'Galería', num: '04' },
  { href: '#eventos', label: 'Eventos', num: '06' },
  { href: '#reservas', label: 'Ubicación', num: '07' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const dialog = menuRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,padding] duration-500 ease-out-expo ${
          scrolled ? 'bg-bg/85 py-2 shadow-[0_1px_0_var(--line)] backdrop-blur-md' : 'py-4'
        }`}
      >
        <nav aria-label="Principal" className="mx-auto flex max-w-[92rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          <a href="#inicio" className="flex min-h-12 items-center gap-2" aria-label="Per Lei, ir al inicio">
            <span className="display text-[1.75rem] leading-none tracking-[-0.04em]">
              Per <em className="italiano text-tomate">Lei</em>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="kicker relative inline-flex min-h-12 items-center px-3 text-ink-muted transition-colors hover:text-ink after:absolute after:inset-x-3 after:bottom-3 after:h-px after:origin-left after:scale-x-0 after:bg-tomate after:transition-transform after:duration-300 after:ease-out-expo hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={links.whatsapp(messages.reservar)}
              target="_blank"
              rel="noopener noreferrer"
              className="press hidden min-h-11 items-center rounded-full bg-tomate px-5 text-sm font-semibold text-on-tomate sm:inline-flex"
            >
              Reservar mesa
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="press inline-flex size-12 items-center justify-center rounded-full border border-ink/20 lg:hidden"
              aria-label="Abrir menú"
              aria-expanded={open}
              aria-controls="menu-movil"
            >
              <MenuIcon className="size-6" />
            </button>
          </div>
        </nav>
      </header>

      <dialog
        ref={menuRef}
        id="menu-movil"
        aria-label="Menú"
        onClose={() => setOpen(false)}
        className="notte m-0 h-dvh max-h-none w-full max-w-none bg-bg p-0 text-ink backdrop:bg-black/60"
      >
        <div className="grain flex h-full flex-col px-4 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6">
          <div className="flex items-center justify-between">
            <span className="display text-[1.75rem] leading-none">
              Per <em className="italiano text-tomate">Lei</em>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="press inline-flex size-12 items-center justify-center rounded-full border border-ink/25"
              aria-label="Cerrar menú"
            >
              <XIcon className="size-6" />
            </button>
          </div>
          <ul className="relative z-[2] mt-10 flex flex-1 flex-col justify-center gap-1">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-16 items-baseline justify-between py-3"
                >
                  <span className="display text-[clamp(2.75rem,13vw,4.5rem)]">{item.label}</span>
                  <span className="kicker text-oro">{item.num}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={links.whatsapp(messages.reservar)}
            target="_blank"
            rel="noopener noreferrer"
            className="press relative z-[2] mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-tomate font-semibold text-on-tomate"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </dialog>
    </>
  )
}
