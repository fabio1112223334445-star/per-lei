import { Ornament } from './icons'

const WORDS = [
  { text: 'fatta a mano', italic: true },
  { text: 'Sangría' },
  { text: 'tablas de queso', italic: true },
  { text: 'Horno de leña' },
  { text: 'per lei', italic: true },
  { text: 'Santa Lucía' },
  { text: 'forno a legna', italic: true },
  { text: 'Buena música' },
]

function Row() {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden="true">
      {WORDS.map((w) => (
        <li key={w.text} className="flex items-center">
          <span
            className={`px-6 text-[clamp(2.5rem,9vw,5.5rem)] leading-none whitespace-nowrap md:px-10 ${
              w.italic ? 'italiano' : 'display'
            }`}
          >
            {w.text}
          </span>
          <Ornament className="size-[clamp(1.25rem,3vw,2rem)] shrink-0 text-oro" />
        </li>
      ))}
    </ul>
  )
}

export function Marquee() {
  return (
    <div className="relative z-10 -my-2 overflow-hidden py-6 md:py-10">
      <div className="grain -mx-4 -rotate-2 bg-tomate py-5 text-on-tomate shadow-vela md:py-7">
        <p className="sr-only">
          Fatta a mano, sangría, tablas de queso, horno de leña, per lei, Santa Lucía.
        </p>
        <div className="marquee-track flex w-max">
          <Row />
          <Row />
        </div>
      </div>
    </div>
  )
}
