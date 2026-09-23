import { links, messages } from '#/data/business'
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from './icons'

const item =
  'press flex min-h-14 flex-1 flex-col items-center justify-center gap-1 rounded-full text-[0.72rem] font-semibold tracking-wide'

/** Barra de acción fija en móvil: Llamar · WhatsApp · Cómo llegar */
export function MobileBar() {
  return (
    <nav
      aria-label="Acciones rápidas"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
    >
      <div className="notte flex gap-1 rounded-full border border-line bg-bg/92 p-1.5 shadow-vela backdrop-blur-md">
        <a href={links.tel} className={`${item} text-ink`}>
          <PhoneIcon className="size-5" />
          Llamar
        </a>
        <a
          href={links.whatsapp(messages.reservar)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} bg-tomate text-on-tomate`}
        >
          <WhatsAppIcon className="size-5" />
          WhatsApp
        </a>
        <a href={links.googleMaps} target="_blank" rel="noopener noreferrer" className={`${item} text-ink`}>
          <MapPinIcon className="size-5" />
          Cómo llegar
        </a>
      </div>
    </nav>
  )
}
