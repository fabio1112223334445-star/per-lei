import { business, fullAddress, links, messages } from '#/data/business'
import { ClockIcon, MapPinIcon, NavigationIcon, PhoneIcon, WhatsAppIcon } from './icons'
import { SectionHeading } from './ui'

export function Reservas() {
  return (
    <section id="reservas" aria-labelledby="reservas-title" className="cv-auto relative py-20 md:py-32">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading num="07" kicker="Reservas y ubicación" italian="ti aspettiamo" id="reservas-title">
          Una mesa <em className="italiano text-tomate">per lei</em>
        </SectionHeading>

        {/* Boleto perforado */}
        <div className="reveal mt-14 flex flex-col bg-tomate text-on-tomate shadow-vela md:mt-20 md:flex-row">
          <div className="grain flex-1 p-6 sm:p-8 md:p-12">
            <div className="relative z-[2]">
              <p className="kicker opacity-80">Admite · 1 mesa · Santa Lucía</p>
              <p className="display mt-6 text-[clamp(2.6rem,10vw,5.5rem)]">
                Reserva <em className="italiano">por WhatsApp</em>
              </p>
              <p className="mt-5 max-w-[44ch] text-lg opacity-90">
                Escríbenos con el día, la hora y cuántas personas vienen. Te confirmamos por el mismo chat.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={links.whatsapp(messages.reservar)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#f3eadb] px-7 text-lg font-semibold text-[#1c1714]"
                >
                  <WhatsAppIcon />
                  Reservar mesa
                  <span className="sr-only">por WhatsApp (se abre en otra pestaña)</span>
                </a>
                <a
                  href={links.tel}
                  className="press inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-current/40 px-7 text-lg font-semibold"
                >
                  <PhoneIcon />
                  {business.phone.display}
                </a>
              </div>
            </div>
          </div>

          {/* perforación */}
          <div aria-hidden="true" className="ticket-edge h-5 w-full md:h-auto md:w-5" />

          <dl className="grid gap-6 p-6 sm:p-8 md:w-[22rem] md:p-10 lg:w-[26rem]">
            <div>
              <dt className="kicker flex items-center gap-2 opacity-95">
                <ClockIcon className="size-4" /> Horario
              </dt>
              <dd className="mt-2 font-display text-2xl leading-tight">{business.hoursLabel}</dd>
            </div>
            <div>
              <dt className="kicker flex items-center gap-2 opacity-95">
                <MapPinIcon className="size-4" /> Dirección
              </dt>
              <dd className="mt-2">
                <address className="not-italic">{fullAddress}</address>
                <span className="mt-1 block font-mono text-sm opacity-95">{business.address.plusCode}</span>
              </dd>
            </div>
            <div>
              <dt className="kicker opacity-95">Servicios</dt>
              <dd className="mt-2">{business.services.join(' · ')}</dd>
            </div>
          </dl>
        </div>

        {/* Mapa */}
        <div className="reveal mt-6 grid gap-4 md:grid-cols-12 md:gap-6">
          <div className="relative aspect-[4/3] overflow-hidden bg-surface md:col-span-8 md:aspect-[16/8]">
            <iframe
              src={links.mapEmbed}
              title={`Mapa: ${business.name}, ${fullAddress}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.35] sepia-[0.25]"
            />
          </div>
          <div className="flex flex-col justify-between gap-6 md:col-span-4">
            <p className="font-display text-[clamp(1.5rem,5vw,2rem)] leading-[1.15] tracking-[-0.01em]">
              A 50 metros del antiguo cabildo,{' '}
              <em className="italiano text-tomate">en el centro de Santa Lucía</em>.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-ink px-4 font-semibold text-bg"
              >
                <MapPinIcon className="size-[1.1rem]" />
                Google Maps
              </a>
              <a
                href={links.waze}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-ink/30 px-4 font-semibold"
              >
                <NavigationIcon className="size-[1.1rem]" />
                Waze
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
