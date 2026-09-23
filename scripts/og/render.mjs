// Exporta scripts/og/og.html a public/og.jpg (1200×630) con Chrome sin interfaz.
// Uso: npm run og   (CHROME_PATH=/ruta/a/chrome si no está en la ruta por defecto)
import { existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import puppeteer from 'puppeteer-core'

const here = dirname(fileURLToPath(import.meta.url))
const out = resolve(here, '../../public/og.jpg')

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean)
const executablePath = candidates.find((p) => existsSync(p))
if (!executablePath) throw new Error('No encontré Chrome. Define CHROME_PATH.')

const browser = await puppeteer.launch({ executablePath, headless: true, args: ['--allow-file-access-from-files'] })
const page = await browser.newPage()
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 })
await page.goto(pathToFileURL(resolve(here, 'og.html')).href, { waitUntil: 'networkidle0' })
await page.evaluate(() => document.fonts.ready)
const card = await page.$('#og')
await card.screenshot({ path: out, type: 'jpeg', quality: 88 })
await browser.close()
console.log(`OG → ${out}`)
