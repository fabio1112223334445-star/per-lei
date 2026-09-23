import { createFileRoute } from '@tanstack/react-router'
import { SITE_URL } from '#/data/business'

export const Route = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: () =>
        new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`, {
          headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' },
        }),
    },
  },
})
