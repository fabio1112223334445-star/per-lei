import { links, messages } from '#/data/business'
import { reviews } from '#/data/reviews'
import { WhatsAppIcon } from './icons'
import { Photo } from './Photo'
import { SectionHeading } from './ui'

// TODO: confirmar con el dueño tipos de evento, capacidad y si hay paquetes/menú para eventos.
const EVENT_TYPES = [
  { title: 'Bodas', text: 'Ceremonia íntima o celebración completa, con la montaña de fondo.' },
  { title: 'Celebraciones familiares', text: 'Cumpleaños, aniversarios y reuniones con toda la familia.' },
  { title: 'Eventos privados', text: 'Cuéntanos la idea y armamos la propuesta contigo.' },
]

const weddingReview = reviews.find((r) => r.author === 'Delia Isaula')

export function Eventos() {
  return (
    <section id="eventos" aria-labelledby="eventos-title" className="cv-auto notte grain relative overflow-clip py-20 md:py-32">
      {/* "per sempre" gigante que sangra fuera del grid */}
      <p
        aria-hidden="true"
        className="italiano pointer-events-none absolute top-[38%] -right-[8vw] z-0 text-[34vw] leading-none whitespace-nowrap text-oro/10 select-none md:top-[18%] md:text-[22vw]"
      >
        per sempre
      </p>

      <div className="relative z-[2] mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading italian="per sempre" id="eventos-title">
          Bodas <em className="italiano text-tomate">y</em>
          <br />
          celebraciones
        </SectionHeading>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-8">
          <div className="reveal relative -mx-4 aspect-[4/3] overflow-hidden sm:-mx-6 md:col-span-7 md:mx-0 md:aspect-auto md:min-h-[32rem] lg:-ml-10">
            <Photo id="boda" sizes="(min-width: 768px) 60vw, 100vw" />
          </div>

          <div className="flex flex-col justify-between gap-10 md:col-span-5">
            {weddingReview && (
              <figure className="reveal">
                <blockquote className="italiano text-[clamp(1.6rem,5.6vw,2.4rem)] leading-[1.15] tracking-[-0.01em]">
                  <p>
                    “Gracias por hacer que el día de nuestra boda fuese tan{' '}
                    <span className="text-tomate">especial e inolvidable</span>.”
                  </p>
                </blockquote>
                <figcaption className="kicker mt-5 text-ink-muted">
                  — {weddingReview.author} · {weddingReview.source}
                </figcaption>
              </figure>
            )}

            <ul className="reveal">
              {EVENT_TYPES.map((e) => (
                <li key={e.title} className="border-t border-line py-5">
                  <div>
                    <h3 className="text-2xl tracking-[-0.01em]">{e.title}</h3>
                    <p className="mt-1 text-[0.95rem] text-ink-muted">{e.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={links.whatsapp(messages.evento)}
              target="_blank"
              rel="noopener noreferrer"
              className="press reveal inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-tomate px-7 text-lg font-semibold text-on-tomate shadow-vela"
            >
              <WhatsAppIcon />
              Cotizar mi evento
              <span className="sr-only">por WhatsApp (se abre en otra pestaña)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
