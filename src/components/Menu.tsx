import { useRef, useState, type KeyboardEvent } from 'react'
import { AnimatePresence, LazyMotion, MotionConfig, domMax, m } from 'motion/react'
import { business, links, messages } from '#/data/business'
import { formatPrice, menu, type MenuItem } from '#/data/menu'
import { WhatsAppIcon } from './icons'
import { Photo } from './Photo'
import { SectionHeading } from './ui'

const EASE = [0.16, 1, 0.3, 1] as const

function FeaturedCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <article className="press group relative flex flex-col bg-surface shadow-vela">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]">
          {item.photo && <Photo id={item.photo} sizes="(min-width: 768px) 30vw, 85vw" />}
        </div>
        <span className="kicker absolute top-3 right-3 z-[3] rounded-full bg-[#f3eadb] px-2.5 py-1 text-[0.65rem] text-[#1c1714]">
          N° {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h4 className="font-display text-[1.75rem] leading-tight tracking-[-0.02em]">{item.name}</h4>
          <span className="font-mono text-sm tabular-nums text-tomate">{formatPrice(item.price)}</span>
        </div>
        <p className="text-[0.95rem] text-ink-muted">{item.description}</p>
        {item.tags && (
          <p className="kicker mt-auto flex gap-3 pt-3 text-oro">
            {item.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </p>
        )}
      </div>
    </article>
  )
}

export function Menu() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const category = menu[active]
  const featured = category.items.filter((i) => i.featured).slice(0, 3)
  const rest = category.items.filter((i) => !featured.includes(i))

  const select = (index: number) => {
    setDirection(index > active ? 1 : -1)
    setActive(index)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    const keys: Record<string, number> = {
      ArrowRight: (active + 1) % menu.length,
      ArrowLeft: (active - 1 + menu.length) % menu.length,
      Home: 0,
      End: menu.length - 1,
    }
    if (!(e.key in keys)) return
    e.preventDefault()
    const next = keys[e.key]
    select(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="carta" aria-labelledby="carta-title" className="relative bg-surface py-20 md:py-32">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <SectionHeading num="03" kicker="La carta" italian="dal forno alla tavola" id="carta-title" className="md:col-span-7">
            La <em className="italiano text-tomate">carta</em>
          </SectionHeading>

          <div className="reveal md:col-span-4 md:col-start-9">
            <p className="kicker text-ink-muted">Por persona</p>
            <p className="display mt-2 text-[clamp(3rem,12vw,5.5rem)] tabular-nums">
              L {business.priceRange.min}
              <span className="italiano text-oro">–</span>
              {business.priceRange.max}
            </p>
            <p className="mt-3 text-sm text-ink-muted">{business.services.join(' · ')}</p>
          </div>
        </div>

        <LazyMotion features={domMax} strict>
          <MotionConfig reducedMotion="user">
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Categorías de la carta"
              onKeyDown={onKeyDown}
              className="no-scrollbar -mx-4 mt-14 flex gap-1 overflow-x-auto border-b border-line px-4 md:mx-0 md:mt-20 md:px-0"
            >
              {menu.map((c, index) => {
                const selected = index === active
                return (
                  <button
                    key={c.id}
                    ref={(el) => {
                      tabRefs.current[index] = el
                    }}
                    role="tab"
                    id={`tab-${c.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${c.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => select(index)}
                    className={`relative flex min-h-14 shrink-0 items-baseline gap-2 px-4 pb-3 pt-2 transition-colors duration-300 ${
                      selected ? 'text-ink' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    <span className="font-display text-xl tracking-[-0.01em] md:text-2xl">{c.label}</span>
                    <span className="italiano hidden text-sm text-oro sm:inline">{c.italian}</span>
                    {selected && (
                      <m.span
                        layoutId="tab-underline"
                        className="absolute inset-x-0 -bottom-px h-[3px] bg-tomate"
                        transition={{ type: 'spring', stiffness: 420, damping: 38 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Panel */}
            <div className="relative mt-10 md:mt-14">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <m.div
                  key={category.id}
                  id={`panel-${category.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${category.id}`}
                  tabIndex={0}
                  custom={direction}
                  variants={{
                    enter: (d: number) => ({ opacity: 0, x: d * 32 }),
                    center: { opacity: 1, x: 0, transition: { duration: 0.42, ease: EASE } },
                    exit: (d: number) => ({ opacity: 0, x: d * -20, transition: { duration: 0.22, ease: [0.5, 0, 0.75, 0] } }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="focus-visible:outline-offset-8"
                >
                  <h3 className="sr-only">{category.label}</h3>
                  {featured.length > 0 && (
                    <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
                      {featured.map((item, i) => (
                        <div key={item.name} className="w-[82%] shrink-0 snap-start md:w-auto">
                          <FeaturedCard item={item} index={i} />
                        </div>
                      ))}
                    </div>
                  )}

                  {rest.length > 0 && (
                    <ul className="mt-10 grid gap-x-16 md:mt-14 md:grid-cols-2">
                      {rest.map((item) => (
                        <li key={item.name} className="border-t border-line py-5">
                          <div className="flex items-baseline gap-3">
                            <h4 className="font-display text-[1.6rem] leading-tight tracking-[-0.015em]">{item.name}</h4>
                            <span
                              aria-hidden="true"
                              className="h-px flex-1 translate-y-[-0.3em] border-b border-dotted border-ink/35"
                            />
                            <span className="font-mono text-sm tabular-nums text-tomate">{formatPrice(item.price)}</span>
                          </div>
                          <p className="mt-1 text-[0.95rem] text-ink-muted">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </m.div>
              </AnimatePresence>
            </div>
          </MotionConfig>
        </LazyMotion>

        <div className="reveal mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[46ch] text-ink-muted">
            <em className="italiano text-lg text-ink">Precios por confirmar.</em> Pide para llevar o a domicilio por
            WhatsApp.
          </p>
          <a
            href={links.whatsapp(messages.pedido)}
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-ink px-6 font-semibold text-bg"
          >
            <WhatsAppIcon />
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
