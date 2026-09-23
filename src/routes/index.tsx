import { useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Eventos } from '#/components/Eventos'
import { Experiencia } from '#/components/Experiencia'
import { Footer } from '#/components/Footer'
import { Galeria } from '#/components/Galeria'
import { Hero } from '#/components/Hero'
import { Historia } from '#/components/Historia'
import { Marquee } from '#/components/Marquee'
import { Menu } from '#/components/Menu'
import { MobileBar } from '#/components/MobileBar'
import { Nav } from '#/components/Nav'
import { Reservas } from '#/components/Reservas'

export const Route = createFileRoute('/')({ component: Home })

/** Fallback de los reveals para navegadores sin CSS scroll-driven animations. */
function useRevealFallback() {
  useEffect(() => {
    if (CSS.supports('animation-timeline: view()')) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Home() {
  useRevealFallback()
  return (
    <>
      <Nav />
      <main id="contenido">
        <Hero />
        <Marquee />
        <Historia />
        <Experiencia />
        <Menu />
        <Galeria />
        <Eventos />
        <Reservas />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
