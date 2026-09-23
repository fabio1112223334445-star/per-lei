import type { PhotoId } from '#/data/gallery'
import { CarIcon } from './icons'
import { Photo } from './Photo'
import { SectionHeading } from './ui'

const MENTIONS = ['Buena música', 'Espacio amplio', 'Baños limpios', 'Atención al detalle', 'Calidad-precio']

interface Highlight {
  title: React.ReactNode
  text: string
  photo: PhotoId
}

const HIGHLIGHTS: Highlight[] = [
  {
    title: (
      <>
        Pizzas <em className="italiano">artesanales</em>
      </>
    ),
    text: 'Masa estirada a mano y horneada a la leña. Lo primero que nombran quienes nos visitan.',
    photo: 'pizzaMargherita',
  },
  {
    title: (
      <>
        Sangría <em className="italiano">&amp;</em> tablas de queso
      </>
    ),
    text: 'Para empezar la tarde o alargar la sobremesa. Pensadas para compartir.',
    photo: 'sangria',
  },
  {
    title: (
      <>
        Vista <em className="italiano">y</em> ambiente
      </>
    ),
    text: 'Espacio amplio, montaña alrededor y buena música. Para ir en pareja, con amigos o con toda la familia.',
    photo: 'vista',
  },
]

export function Experiencia() {
  return (
    <section aria-labelledby="experiencia-title" className="cv-auto relative py-20 md:py-32">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-10">
        <div className="md:grid md:grid-cols-12">
          <SectionHeading
            italian="a tavola, senza fretta"
            id="experiencia-title"
            className="md:col-span-8"
          >
            Lo que se <em className="italiano text-tomate">vive</em> aquí
          </SectionHeading>
        </div>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-12 md:gap-6">
          {/* i. grande, texto sobre imagen */}
          <article className="reveal group relative min-h-[28rem] overflow-hidden md:col-span-7 md:row-span-2 md:min-h-[44rem]">
            <div className="absolute inset-0 transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]">
              <Photo id={HIGHLIGHTS[0].photo} hideLabel sizes="(min-width: 768px) 58vw, 100vw" />
            </div>
            <div className="absolute inset-0 z-[3] bg-gradient-to-t from-[#140f0c] via-[#140f0c]/40 to-transparent" />
            <div className="relative z-[4] flex h-full min-h-[inherit] flex-col justify-end p-6 text-[#f3eadb] md:p-10">
              <h3 className="display text-[clamp(2.75rem,11vw,6rem)]">{HIGHLIGHTS[0].title}</h3>
              <p className="mt-4 max-w-[38ch] text-[#f3eadb]/85">{HIGHLIGHTS[0].text}</p>
            </div>
          </article>

          {HIGHLIGHTS.slice(1).map((h, idx) => (
            <article
              key={h.photo}
              className={`reveal grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-end gap-5 border-t border-line pt-5 md:col-span-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] ${
                idx === 0 ? 'md:mt-0' : 'md:mt-6'
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Photo id={h.photo} hideLabel sizes="(min-width: 768px) 18vw, 45vw" />
              </div>
              <div>
                <div>
                  <h3 className="text-[clamp(1.6rem,6vw,2.4rem)] leading-[1.05] tracking-[-0.02em]">{h.title}</h3>
                  <p className="mt-3 text-[0.95rem] text-ink-muted">{h.text}</p>
                </div>
              </div>
            </article>
          ))}

          {/* iv. parqueo: bloque tipográfico que rompe el grid */}
          <article className="reveal relative overflow-hidden bg-[#2e5a39] p-6 text-[#f3eadb] md:col-span-12 md:-mx-6 md:mt-10 md:grid md:grid-cols-12 md:items-center md:p-10 lg:-mx-10">
            <div className="flex items-center gap-4 md:col-span-5">
              <h3 className="display text-[clamp(3rem,12vw,7rem)]">Parqueo</h3>
            </div>
            <div className="mt-6 flex items-start gap-4 md:col-span-6 md:col-start-7 md:mt-0">
              <CarIcon className="mt-1 size-7 shrink-0 text-[#e8d3a4]" />
              <p className="max-w-[44ch] text-lg text-[#f3eadb]/90">
                Llega en carro sin complicarte y quédate el tiempo que quieras.
              </p>
            </div>
          </article>
        </div>

        <div className="reveal mt-12 md:mt-16">
          <p className="kicker text-ink-muted">Lo que más mencionan nuestros clientes</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {MENTIONS.map((m) => (
              <li key={m} className="rounded-full border border-line px-4 py-2 text-sm">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
