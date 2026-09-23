import type { Art } from '#/data/gallery'

/**
 * Ilustraciones lineales para los placeholders duotono.
 * Trazo en `currentColor` (crema) y acentos con --art-accent.
 */

const accent = 'var(--art-accent)'
const fill = 'var(--art-fill)'

function Horno() {
  return (
    <>
      {/* humo */}
      <path d="M120 38c-8-8 8-14 0-22M132 40c-6-6 6-11 0-17" strokeLinecap="round" opacity=".55" />
      {/* chimenea */}
      <path d="M110 62V40h20v22" />
      {/* cúpula */}
      <path d="M36 176c0-58 36-112 84-114 48 2 84 56 84 114" fill={fill} />
      <path d="M52 176c0-46 28-92 68-94 40 2 68 48 68 94" opacity=".35" />
      {/* boca del horno */}
      <path d="M84 176v-32c0-22 16-38 36-38s36 16 36 38v32" fill="#140f0c" />
      {/* fuego */}
      <path
        d="M104 176c-6-12 2-20 8-28 2 8 6 10 8 4 2-10 10-16 10-24 8 10 14 22 8 34 4-2 6-6 6-10 6 10 4 18-2 24z"
        fill={accent}
        stroke="none"
      />
      <path d="M113 176c-2-6 2-10 5-14 1 4 4 5 5 2 3 5 5 10 1 12z" fill="#f3eadb" stroke="none" opacity=".85" />
      {/* base de ladrillo */}
      <path d="M22 176h196M22 192h196M22 208h196M22 176v32M218 176v32" />
      <path d="M52 176v16M92 176v16M132 176v16M172 176v16M72 192v16M112 192v16M152 192v16M192 192v16" opacity=".5" />
    </>
  )
}

function Pizza() {
  return (
    <>
      <circle cx="120" cy="120" r="86" fill={fill} />
      <circle cx="120" cy="120" r="72" />
      <path d="M120 48v144M58 84l124 72M58 156l124-72" opacity=".45" />
      {/* mozzarella */}
      <g fill="#f3eadb" stroke="none" opacity=".9">
        <ellipse cx="96" cy="92" rx="11" ry="8" />
        <ellipse cx="148" cy="104" rx="9" ry="7" />
        <ellipse cx="110" cy="146" rx="12" ry="8" />
        <ellipse cx="152" cy="150" rx="8" ry="6" />
        <ellipse cx="80" cy="128" rx="7" ry="6" />
      </g>
      {/* albahaca */}
      <g fill="#5d9a5f" stroke="none">
        <path d="M120 108c10-10 24-8 26 0-8 8-20 10-26 0z" />
        <path d="M86 150c4-12 16-16 22-10-4 10-14 14-22 10z" />
        <path d="M150 76c2-10 12-14 18-8-4 8-12 12-18 8z" />
      </g>
      <g fill={accent} stroke="none" opacity=".8">
        <circle cx="132" cy="132" r="3" />
        <circle cx="100" cy="118" r="2.5" />
        <circle cx="136" cy="84" r="2.5" />
      </g>
    </>
  )
}

function Copa() {
  return (
    <>
      <path d="M78 42h84c4 52-10 86-42 92-32-6-46-40-42-92z" fill={fill} />
      <path d="M81 84h78c-4 28-18 44-39 48-21-4-35-20-39-48z" fill={accent} stroke="none" opacity=".9" />
      <path d="M120 134v62M88 200c10-6 54-6 64 0" />
      {/* fruta */}
      <circle cx="158" cy="46" r="20" fill="#f3eadb" fillOpacity=".12" />
      <path d="M158 26v40M138 46h40M144 32l28 28M144 60l28-28" opacity=".6" />
      <g fill="#f3eadb" stroke="none" opacity=".75">
        <rect x="100" y="98" width="9" height="9" rx="1.5" transform="rotate(14 104 102)" />
        <rect x="126" y="108" width="8" height="8" rx="1.5" transform="rotate(-18 130 112)" />
      </g>
      <path d="M96 60c6-4 14-4 20 0" opacity=".5" strokeLinecap="round" />
    </>
  )
}

function Tabla() {
  return (
    <>
      <path d="M30 150l140-70c10-5 22 0 26 10l4 8c4 10 0 20-10 24L50 192c-10 5-22 0-26-10l-2-6c-4-10 0-20 8-26z" fill={fill} />
      <path d="M196 98l22-11" strokeLinecap="round" strokeWidth="6" />
      {/* quesos */}
      <path d="M70 146l46-24 6 30-44 20z" fill="#f3eadb" fillOpacity=".85" stroke="#f3eadb" />
      <g fill="#6e140f" stroke="none" opacity=".45">
        <circle cx="96" cy="146" r="4" />
        <circle cx="108" cy="156" r="3" />
        <circle cx="86" cy="160" r="2.5" />
      </g>
      <path d="M128 118l30-14 4 22-28 12z" fill={accent} fillOpacity=".85" stroke="none" />
      {/* uvas */}
      <g fill="none">
        <circle cx="150" cy="148" r="7" />
        <circle cx="162" cy="140" r="7" />
        <circle cx="164" cy="154" r="7" />
        <circle cx="176" cy="146" r="7" />
        <circle cx="170" cy="130" r="7" />
      </g>
      <path d="M176 124c4-8 10-10 16-8" strokeLinecap="round" />
    </>
  )
}

function Vista() {
  return (
    <>
      <circle cx="168" cy="62" r="18" fill={accent} stroke="none" opacity=".9" />
      <path d="M0 150l40-44 30 26 44-56 44 50 30-28 52 52" fill={fill} />
      <path d="M0 168l56-30 42 20 50-34 48 26 44-18" opacity=".55" />
      {/* iglesia colonial */}
      <path d="M92 204v-50h56v50" fill="#140f0c" fillOpacity=".35" />
      <path d="M104 154v-34h14v-10l6-8 6 8v10h0v34" />
      <path d="M124 94v-10M120 88h8" />
      <path d="M112 204v-20c0-6 4-10 8-10s8 4 8 10v20" />
      <path d="M140 164c0-6 4-10 8-10" opacity=".5" />
      {/* pinos */}
      <path d="M36 204l14-40 14 40zM178 204l12-34 12 34zM196 204l10-28 10 28z" fill={fill} />
      <path d="M0 204h240" />
    </>
  )
}

function Mesa() {
  return (
    <>
      {/* vela */}
      <path d="M112 112h16v70h-16z" fill="#f3eadb" fillOpacity=".15" />
      <path d="M120 112v-8" />
      <path d="M120 72c-8 12-8 22 0 28 8-6 8-16 0-28z" fill={accent} stroke="none" />
      <circle cx="120" cy="92" r="30" fill={accent} stroke="none" opacity=".12" />
      {/* copas brindando */}
      <path d="M52 92h36c2 26-6 40-18 42-12-2-20-16-18-42z" fill={fill} />
      <path d="M70 134v40M56 176h28" />
      <path d="M156 92h36c2 26-6 40-18 42-12-2-20-16-18-42z" fill={fill} />
      <path d="M174 134v40M160 176h28" />
      <path d="M55 110h30M159 110h30" opacity=".5" />
      {/* mesa */}
      <path d="M20 184h200M40 184v24M200 184v24" />
    </>
  )
}

function Masa() {
  return (
    <>
      <ellipse cx="120" cy="150" rx="84" ry="34" fill={fill} />
      <ellipse cx="120" cy="146" rx="62" ry="22" fill="#f3eadb" fillOpacity=".85" stroke="#f3eadb" />
      {/* rodillo */}
      <path d="M44 78l140 48" strokeWidth="14" strokeLinecap="round" opacity=".9" />
      <path d="M32 74l12 4M184 126l12 4" strokeWidth="6" strokeLinecap="round" />
      {/* harina */}
      <g fill="#f3eadb" stroke="none" opacity=".7">
        <circle cx="60" cy="120" r="1.8" />
        <circle cx="74" cy="182" r="1.5" />
        <circle cx="180" cy="170" r="2" />
        <circle cx="196" cy="140" r="1.5" />
        <circle cx="40" cy="150" r="1.3" />
        <circle cx="160" cy="94" r="1.6" />
      </g>
      {/* espiga de trigo */}
      <path d="M196 40c-10 20-16 40-18 62" />
      <g fill={accent} stroke="none">
        <ellipse cx="192" cy="52" rx="4" ry="8" transform="rotate(30 192 52)" />
        <ellipse cx="202" cy="58" rx="4" ry="8" transform="rotate(-30 202 58)" />
        <ellipse cx="188" cy="68" rx="4" ry="8" transform="rotate(30 188 68)" />
        <ellipse cx="198" cy="74" rx="4" ry="8" transform="rotate(-30 198 74)" />
      </g>
    </>
  )
}

function Boda() {
  return (
    <>
      {/* guirnalda de luces */}
      <path d="M0 40c60 40 180 40 240 0" opacity=".6" />
      <path d="M0 76c60 34 180 34 240 0" opacity=".4" />
      <g fill={accent} stroke="none">
        {[20, 50, 80, 110, 140, 170, 200, 228].map((x, i) => {
          const y = 40 + Math.sin((x / 240) * Math.PI) * 30
          return <circle key={i} cx={x} cy={y + 4} r="4" />
        })}
      </g>
      {/* anillos entrelazados */}
      <circle cx="100" cy="146" r="38" strokeWidth="5" />
      <circle cx="140" cy="146" r="38" strokeWidth="5" />
      <path d="M140 102l-6-10h12z" fill={accent} stroke="none" />
    </>
  )
}

function Postre() {
  return (
    <>
      <ellipse cx="120" cy="170" rx="86" ry="22" fill={fill} />
      <ellipse cx="120" cy="164" rx="64" ry="14" />
      {/* porción */}
      <path d="M70 158l26-70 70 38v24z" fill="#f3eadb" fillOpacity=".85" stroke="#f3eadb" />
      <path d="M78 136l84 6M86 114l72 16" stroke="#6e140f" opacity=".4" />
      <path d="M96 88l70 38" stroke={accent} strokeWidth="6" strokeLinecap="round" />
      {/* hojita de menta */}
      <path d="M128 92c6-10 18-10 20-2-6 6-14 8-20 2z" fill="#5d9a5f" stroke="none" />
    </>
  )
}

function Parqueo() {
  return (
    <>
      <rect x="48" y="40" width="144" height="144" rx="18" fill={fill} />
      <path d="M100 150V78h26c14 0 24 10 24 22s-10 22-24 22h-26" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M120 184v36" strokeWidth="6" />
      <circle cx="196" cy="44" r="10" fill={accent} stroke="none" />
    </>
  )
}

const drawings: Record<Art, () => React.JSX.Element> = {
  horno: Horno,
  pizza: Pizza,
  copa: Copa,
  tabla: Tabla,
  vista: Vista,
  mesa: Mesa,
  masa: Masa,
  boda: Boda,
  postre: Postre,
  parqueo: Parqueo,
}

export function ArtDrawing({ art, className }: { art: Art; className?: string }) {
  const Drawing = drawings[art]
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <Drawing />
    </svg>
  )
}
