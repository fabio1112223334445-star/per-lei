# Fotos de Per Lei

Coloca aquí las fotos reales con estos nombres y luego activa `hasPhoto: true`
en `src/data/gallery.ts` (ajusta `width`/`height` a la proporción real).
Formato recomendado: .webp o .avif, ~1600 px de lado mayor, < 250 KB.
Si usas otra extensión, cambia también `src` en gallery.ts.

| Archivo | Dónde se usa | Proporción sugerida |
|---|---|---|
| hero-horno.jpg | Hero (arco) + galería | 3:4 vertical |
| historia-fuego.jpg | Historia (foto sticky) | 3:4 vertical |
| historia-masa.jpg | Historia | 1:1 |
| pizza-margherita.jpg | Experiencia, carta, galería | 1:1 |
| pizza-especial.jpg | Carta | 1:1 |
| sangria.jpg | Experiencia, carta, galería | 4:5 vertical |
| tabla-quesos.jpg | Carta, galería | 5:4 horizontal |
| vista-santa-lucia.jpg | Experiencia, galería | 16:10 horizontal |
| ambiente-mesa.jpg | Galería | 4:5 vertical |
| evento-boda.jpg | Eventos, galería | 3:2 horizontal |
| postre.jpg | Carta, galería | 1:1 |
| parqueo.jpg | (reservada) | 4:3 |

La imagen para redes (`/public/og.jpg`, 1200×630) se genera con `npm run og` desde `scripts/og/og.html`.
