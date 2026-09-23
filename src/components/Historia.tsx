import { Photo } from './Photo'
import { SectionHeading } from './ui'

// TODO: reemplazar con la historia real del lugar (quién es "ella", cuándo abrió, quién hace la masa).
const CHAPTERS = [
  {
    n: 'i.',
    title: 'La masa',
    text: 'Se estira a mano, sin prisa, sobre harina. Por eso no hay dos pizzas iguales.',
  },
  {
    n: 'ii.',
    title: 'El fuego',
    text: 'Horno de leña: calor alto, bordes que se inflan y se tuestan, y ese olor que se siente desde la calle.',
  },
  {
    n: 'iii.',
    title: 'El pueblo',
    text: 'Santa Lucía: calles empedradas, casas coloniales y aire de montaña, a pocos minutos de Tegucigalpa.',
  },
]

export function Historia() {
  return (
    <section id="historia" aria-labelledby="historia-title" className="notte grain relative py-20 md:py-32">
      <div className="relative z-[2] mx-auto grid max-w-[92rem] gap-12 px-4 sm:px-6 md:grid-cols-12 md:gap-8 lg:px-10">
        {/* Foto sticky (desktop) */}
        <div className="order-2 md:order-1 md:col-span-5">
          <div className="md:sticky md:top-24">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 border border-oro/50 md:translate-x-5 md:translate-y-5"
              />
              <div className="relative aspect-[4/5] overflow-hidden shadow-vela md:aspect-[3/4] md:max-h-[78vh]">
                <Photo id="historiaHorno" sizes="(min-width: 768px) 40vw, 100vw" />
              </div>
            </div>
            <p className="kicker mt-8 text-ink-muted">
              <span className="text-oro">Fig. 1</span> — El horno de leña.
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2 md:col-span-6 md:col-start-7">
          <SectionHeading num="01" kicker="La historia" italian="«para ella», en italiano" id="historia-title">
            Todo empieza <em className="italiano text-tomate">per lei</em>
          </SectionHeading>

          <p className="reveal mt-10 max-w-[34ch] font-display text-[clamp(1.4rem,5vw,2rem)] leading-[1.2] tracking-[-0.015em] [font-variation-settings:'opsz'_48]">
            Un nombre que suena a dedicatoria: una mesa puesta con cuidado y una pizza que sale del fuego pensada
            para alguien.
          </p>

          <ol className="mt-14 space-y-10 md:mt-20 md:space-y-14">
            {CHAPTERS.map((c) => (
              <li key={c.n} className="reveal grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-line pt-6 md:grid-cols-[5rem_1fr]">
                <span className="italiano text-4xl leading-none text-oro md:text-5xl">{c.n}</span>
                <div>
                  <h3 className="text-[1.75rem] leading-tight tracking-[-0.02em] md:text-4xl">{c.title}</h3>
                  <p className="mt-3 max-w-[46ch] text-ink-muted">{c.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="reveal relative mt-14 ml-auto aspect-square w-3/4 overflow-hidden md:mt-20 md:w-2/3">
            <Photo id="historiaMasa" sizes="(min-width: 768px) 30vw, 75vw" />
          </div>
        </div>
      </div>
    </section>
  )
}
