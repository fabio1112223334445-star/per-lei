import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { gallery, photos } from '#/data/gallery'
import { ArrowUpRightIcon, ChevronLeftIcon, ChevronRightIcon, XIcon } from './icons'
import { Photo } from './Photo'
import { SectionHeading } from './ui'

const SHAPES = {
  tall: 'row-span-2 md:col-span-4',
  wide: 'col-span-2 md:col-span-8',
  square: 'md:col-span-4',
}

export function Galeria() {
  const [index, setIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])
  const lastIndex = useRef(0)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (index !== null && !dialog.open) dialog.showModal()
    if (index === null && dialog.open) dialog.close()
    if (index !== null) lastIndex.current = index
  }, [index])

  const go = (delta: number) => setIndex((i) => (i === null ? i : (i + delta + gallery.length) % gallery.length))

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') go(1)
    if (e.key === 'ArrowLeft') go(-1)
  }

  const current = index !== null ? gallery[index] : null

  return (
    <section id="galeria" aria-labelledby="galeria-title" className="cv-auto relative py-20 md:py-32">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <SectionHeading italian="guardare, poi assaggiare" id="galeria-title" className="md:col-span-8">
            Mesa, fuego <em className="italiano text-tomate">y montaña</em>
          </SectionHeading>
          <p className="reveal max-w-[36ch] text-ink-muted md:col-span-4">
            Toca cualquier imagen para verla en grande. {/* TODO: reemplazar ilustraciones por fotos reales en src/data/gallery.ts */}
          </p>
        </div>

        <ul className="mt-14 grid grid-flow-dense auto-rows-[42vw] grid-cols-2 gap-3 md:mt-20 md:auto-rows-[18vw] md:grid-cols-12 md:gap-5 xl:auto-rows-[16rem]">
          {gallery.map((g, i) => (
            <li key={g.id} className={`reveal ${SHAPES[g.shape]}`}>
              <button
                ref={(el) => {
                  triggerRefs.current[i] = el
                }}
                type="button"
                onClick={() => setIndex(i)}
                className="press group relative block h-full w-full overflow-hidden text-left"
              >
                <span className="sr-only">Ver en grande: </span>
                <span className="absolute inset-0 block transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]">
                  <Photo id={g.id} sizes="(min-width: 768px) 33vw, 50vw" />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-3 z-[3] flex size-10 items-center justify-center rounded-full bg-[#f3eadb] text-[#1c1714] opacity-0 transition-[opacity,transform] duration-300 ease-out-expo group-hover:opacity-100 group-focus-visible:opacity-100 max-md:opacity-100 max-md:scale-90"
                >
                  <ArrowUpRightIcon className="size-4" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Galería ampliada"
        onClose={() => {
          setIndex(null)
          triggerRefs.current[lastIndex.current]?.focus()
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIndex(null)
        }}
        onKeyDown={onKeyDown}
        className="notte m-auto h-dvh max-h-none w-full max-w-none bg-transparent p-0 text-ink backdrop:bg-[#0b0806]/92 backdrop:backdrop-blur-sm"
      >
        {current && (
          <div className="pointer-events-none flex h-full flex-col px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8">
            <div className="pointer-events-auto flex items-center justify-between">
              <p className="kicker text-ink-muted" aria-live="polite">
                <span className="text-oro">{String((index ?? 0) + 1).padStart(2, '0')}</span> / {String(gallery.length).padStart(2, '0')}
              </p>
              <button
                type="button"
                onClick={() => setIndex(null)}
                className="press inline-flex size-12 items-center justify-center rounded-full border border-ink/25 bg-bg"
                aria-label="Cerrar galería"
                autoFocus
              >
                <XIcon className="size-6" />
              </button>
            </div>

            <figure className="pointer-events-auto m-auto flex w-full max-w-5xl flex-col gap-4 py-4">
              <div
                key={current.id}
                className="relative mx-auto overflow-hidden [animation:fade-up_.45s_var(--ease-out-expo)_both]"
                style={{
                  aspectRatio: `${photos[current.id].width} / ${photos[current.id].height}`,
                  width: `min(100%, calc(68dvh * ${photos[current.id].width / photos[current.id].height}))`,
                }}
              >
                <Photo id={current.id} sizes="90vw" />
              </div>
              <figcaption className="text-center text-ink-muted">{photos[current.id].alt}</figcaption>
            </figure>

            <div className="pointer-events-auto flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                className="press inline-flex size-12 items-center justify-center rounded-full border border-ink/25 bg-bg"
                aria-label="Imagen anterior"
              >
                <ChevronLeftIcon className="size-6" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="press inline-flex size-12 items-center justify-center rounded-full border border-ink/25 bg-bg"
                aria-label="Imagen siguiente"
              >
                <ChevronRightIcon className="size-6" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
