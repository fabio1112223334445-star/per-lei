import { reviews } from '#/data/reviews'
import { SectionHeading, Stars } from './ui'

const OFFSETS = ['md:mt-0', 'md:mt-24', 'md:mt-10']

export function Testimonios() {
  return (
    <section aria-labelledby="resenas-title" className="cv-auto relative overflow-clip bg-surface py-20 md:py-32">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <SectionHeading italian="parole di chi è venuto" id="resenas-title" className="md:col-span-7">
            Lo que <em className="italiano text-tomate">dicen</em>
          </SectionHeading>

          <p className="reveal max-w-[34ch] font-display text-[clamp(1.4rem,5vw,1.9rem)] leading-[1.2] tracking-[-0.015em] text-ink-muted md:col-span-4 md:col-start-9 [font-variation-settings:'opsz'_48]">
            Familias, amigos y hasta una boda: palabras de quienes ya se sentaron{' '}
            <em className="italiano text-tomate">a tavola</em>.
          </p>
        </div>

        <ul
          className="reveal no-scrollbar -mx-4 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 md:mx-0 md:mt-20 md:grid md:grid-cols-3 md:items-start md:gap-6 md:overflow-visible md:px-0"
          aria-label="Testimonios de clientes"
          tabIndex={0}
        >
          {reviews.map((r, i) => (
            <li key={r.author} className={`w-[86%] shrink-0 snap-center md:w-auto ${OFFSETS[i]}`}>
              <figure className="flex h-full flex-col bg-bg p-6 shadow-vela md:p-8">
                <span aria-hidden="true" className="italiano -mb-6 text-8xl leading-none text-tomate">
                  “
                </span>
                <p className="italiano text-[1.65rem] leading-[1.1] tracking-[-0.01em] text-ink">{r.highlight}</p>
                <blockquote className="mt-4 text-[0.98rem] text-ink-muted">
                  <p>{r.text}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4">
                  <span className="font-semibold">{r.author}</span>
                  <Stars />
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="kicker mt-2 text-ink-muted md:hidden" aria-hidden="true">
          Desliza <span className="text-tomate">→</span>
        </p>

      </div>
    </section>
  )
}
