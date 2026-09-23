import { business, fullAddress, links } from '#/data/business'

const SOCIAL_LABELS: Record<keyof typeof business.social, string> = {
  linktree: 'Linktree',
  instagram: 'Instagram',
  facebook: 'Facebook',
  tiktok: 'TikTok',
}

export function Footer() {
  const socials = (Object.keys(business.social) as (keyof typeof business.social)[]).filter((k) => business.social[k])

  return (
    <footer className="notte grain relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-12">
      <div className="relative z-[2] mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="italiano text-3xl text-oro">fatta a mano, per lei.</p>
            <p className="mt-4 max-w-[36ch] text-ink-muted">{business.description}</p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h2 className="kicker text-ink-muted">Visítanos</h2>
            <address className="mt-3 not-italic">{fullAddress}</address>
            <p className="mt-2 text-ink-muted">{business.hoursLabel}</p>
          </div>

          <div className="md:col-span-3">
            <h2 className="kicker text-ink-muted">Contacto</h2>
            <ul className="mt-3 space-y-1">
              <li>
                <a href={links.tel} className="inline-flex min-h-11 items-center underline decoration-line underline-offset-4 hover:decoration-tomate">
                  {business.phone.international}
                </a>
              </li>
              {socials.length > 0 ? (
                socials.map((k) => (
                  <li key={k}>
                    <a
                      href={business.social[k]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center underline decoration-line underline-offset-4 hover:decoration-tomate"
                    >
                      {SOCIAL_LABELS[k]}
                    </a>
                  </li>
                ))
              ) : (
                // TODO: se oculta cuando existan redes reales en business.social
                <li className="text-sm text-ink-muted">Redes sociales: próximamente</li>
              )}
            </ul>
            <p className="mt-4 text-sm text-ink-muted">{business.services.join(' · ')}</p>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="display mt-16 text-center text-[31vw] leading-[0.78] tracking-[-0.05em] md:mt-24 md:text-[27vw]"
        >
          Per <em className="italiano text-tomate">Lei</em>
        </p>

        <div className="kicker mt-8 flex flex-col gap-2 border-t border-line pt-6 text-[0.65rem] text-ink-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name} · Santa Lucía, Francisco Morazán, Honduras
          </p>
          <p>Pizzería artesanal · Forno a legna</p>
        </div>
      </div>
    </footer>
  )
}
