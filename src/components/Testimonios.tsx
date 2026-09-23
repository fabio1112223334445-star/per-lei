import { business } from '#/data/business'
import { reviews } from '#/data/reviews'
import { ArrowUpRightIcon } from './icons'
import { SectionHeading, Stars } from './ui'

const OFFSETS = ['md:mt-0', 'md:mt-24', 'md:mt-10']

export function Testimonios() {
  return (
    <section aria-labelledby="resenas-title" className="relative overflow-hidden bg-surface py-20 md:py-32">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <SectionHeading num="05" kicker="Reseñas" italian="parole di chi è venuto" id="resenas-title" className="md:col-span-7">
            Lo que <em className="italiano text-tomate">dicen</em>
          </SectionHeading>

          <div className="reveal flex items-end gap-5 md:col-span-4 md:col-start-9">
            <p className="display text-[clamp(6rem,26vw,11rem)] leading-[0.75] tabular-nums">
              {business.rating.value.toLocaleString('es-HN')}
            </p>
            <div className="pb-2">
              <Stars />
              <p className="mt-2 text-sm text-ink-muted">
                {business.rating.count} reseñas
                <br />
                en Google
              </p>
            </div>
          </div>
        </div>

        <ul
          className="no-scrollbar -mx-4 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 md:mx-0 md:mt-20 md:grid md:grid-cols-3 md:items-start md:gap-6 md:overflow-visible md:px-0"
          aria-label="Reseñas de clientes"
        >
          {reviews.map((r, i) => (
            <li key={r.author} className={`w-[86%] shrink-0 snap-center md:w-auto ${OFFSETS[i]}`}>
              <figure className="reveal flex h-full flex-col bg-bg p-6 shadow-vela md:p-8">
                <span aria-hidden="true" className="italiano -mb-6 text-8xl leading-none text-tomate">
                  “
                </span>
                <p className="italiano text-[1.65rem] leading-[1.1] tracking-[-0.01em] text-ink">{r.highlight}</p>
                <blockquote className="mt-4 text-[0.98rem] text-ink-muted">
                  <p>{r.text}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4">
                  <span>
                    <span className="block font-semibold">{r.author}</span>
                    <span className="kicker text-[0.65rem] text-ink-muted">
                      {r.source}
                      {r.badge && ` · ${r.badge}`}
                    </span>
                  </span>
                  <Stars />
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="kicker mt-2 text-ink-muted md:hidden" aria-hidden="true">
          Desliza <span className="text-tomate">→</span>
        </p>

        <a
          href={business.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex min-h-12 items-center gap-3 font-display text-2xl tracking-[-0.01em] md:mt-16 md:text-3xl"
        >
          <span className="underline decoration-oro decoration-1 underline-offset-[0.25em] transition-colors group-hover:decoration-tomate">
            Ver más reseñas en Google
          </span>
          <ArrowUpRightIcon className="size-6 text-tomate transition-transform duration-300 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1" />
          <span className="sr-only">(se abre en otra pestaña)</span>
        </a>
      </div>
    </section>
  )
}
