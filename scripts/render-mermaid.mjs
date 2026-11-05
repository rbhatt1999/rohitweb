/**
 * Render blog mermaid blocks to inline SVGs.
 *
 * Chrome lays the diagram out at build time. The page then inlines the SVG
 * and colours it with the site theme tokens, so readers do not download mermaid.
 * When Chrome is not installed (typical Vercel build), committed SVGs are reused.
 * A changed diagram with no matching SVG fails the build.
 */
import { createHash } from 'crypto'
import fs from 'fs'
import os from 'os'
import path from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'src/generated/mermaid')
const blogFile = path.join(root, 'src/app/api/blogs/blog.js')

function mermaidHash(source) {
  return createHash('sha256').update(source).digest('hex').slice(0, 16)
}

function diagrams() {
  const src = fs.readFileSync(blogFile, 'utf8')
  const found = []
  const re = /type:\s*`mermaid`\s*,\s*value:\s*`([\s\S]*?)`\s*,/g
  let match
  while ((match = re.exec(src))) found.push(match[1])
  return found
}

function chromePath() {
  const candidates = [
    process.env.CHROME_PATH,
    '/usr/bin/google-chrome-stable',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean)
  return candidates.find((candidate) => fs.existsSync(candidate))
}

function tidy(svg, id) {
  let out = svg.replace(/<style[\s\S]*?<\/style>/g, '')
  out = out.replace(/<defs>\s*<symbol[\s\S]*?<\/symbol>\s*<\/defs>/g, '')
  out = out.replace(/\s(?:fill|stroke)="[^"]*"/g, '')
  out = out.replace(/\sstyle="([^"]*)"/g, (_, style) => {
    const kept = style
      .split(';')
      .map((part) => part.trim())
      .filter((part) => part && !/^(fill|stroke|max-width)\s*:/.test(part))
    return kept.length ? ` style="${kept.join('; ')}"` : ''
  })
  out = out.replace(/<svg\b([^>]*)>/, (_, attrs) => {
    const cleaned = attrs
      .replace(/\s(?:width|height|id|style)="[^"]*"/g, '')
      .replace(/\s{2,}/g, ' ')
    return `<svg id="${id}" width="100%"${cleaned}>`
  })
  if (/<script|javascript:|\son[a-z]+=/i.test(out)) {
    throw new Error(`Refusing to write an unsafe diagram (${id})`)
  }
  return out.trim() + '\n'
}

function renderWithChrome(source, id, chrome) {
  const require = createRequire(import.meta.url)
  let puppeteer
  let mermaidJs
  try {
    puppeteer = require('puppeteer-core')
    mermaidJs = require.resolve('mermaid/dist/mermaid.min.js')
  } catch {
    throw new Error('Rendering a new diagram needs Chrome plus `npm install --no-save mermaid puppeteer-core`')
  }

  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mmd-'))
  const htmlPath = path.join(dir, 'index.html')
  const font = path.join(root, 'public/fonts/hanken-grotesk-latin.woff2')
  const payload = JSON.stringify(source).replace(/</g, '\\u003c')
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
@font-face {
  font-family: "Hanken Grotesk";
  src: url("file://${font}") format("woff2");
  font-weight: 400 700;
  font-style: normal;
}
body { margin: 0; font-family: "Hanken Grotesk", sans-serif; }
</style>
</head>
<body>
<pre id="src" style="display:none">${payload}</pre>
<div id="out"></div>
<script src="file://${mermaidJs}"></script>
<script>
  const source = JSON.parse(document.getElementById('src').textContent)
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: 'neutral',
    fontFamily: 'Hanken Grotesk, sans-serif',
    htmlLabels: false,
  })
  document.fonts.ready.then(() => mermaid.render(${JSON.stringify(id)}, source)).then(({ svg }) => {
    document.getElementById('out').innerHTML = svg
    document.body.dataset.ready = '1'
  }).catch((error) => {
    document.body.dataset.ready = 'error'
    document.body.dataset.error = String(error && error.stack || error)
  })
</script>
</body>
</html>`
  fs.writeFileSync(htmlPath, html)

  return puppeteer.launch({
    executablePath: chrome,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--font-render-hinting=none'],
  }).then(async (browser) => {
    try {
      const page = await browser.newPage()
      await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0', timeout: 30000 })
      await page.waitForSelector('body[data-ready]', { timeout: 20000 })
      const ready = await page.$eval('body', (el) => el.dataset.ready)
      if (ready !== '1') {
        const error = await page.$eval('body', (el) => el.dataset.error || 'unknown')
        throw new Error(error)
      }
      const svg = await page.$eval('#out svg', (el) => el.outerHTML)
      return tidy(svg, id)
    } finally {
      await browser.close()
      fs.rmSync(dir, { recursive: true, force: true })
    }
  })
}

const sources = diagrams()
fs.mkdirSync(outDir, { recursive: true })
const wanted = new Set()
const missing = []
for (const source of sources) {
  const hash = mermaidHash(source)
  const file = path.join(outDir, `${hash}.svg`)
  wanted.add(path.basename(file))
  if (!fs.existsSync(file)) missing.push({ source, hash, file })
}

for (const entry of fs.readdirSync(outDir)) {
  if (entry.endsWith('.svg') && !wanted.has(entry)) fs.rmSync(path.join(outDir, entry))
}

if (!missing.length) {
  console.log(`mermaid: ${sources.length} diagram${sources.length === 1 ? '' : 's'} up to date`)
  process.exit(0)
}

const chrome = chromePath()
if (!chrome) {
  console.error('mermaid: Chrome is not available, and these diagrams have no committed SVG:')
  for (const item of missing) console.error(`  ${item.hash}`)
  process.exit(1)
}

for (const item of missing) {
  const svg = await renderWithChrome(item.source, `mmd${item.hash}`, chrome)
  fs.writeFileSync(item.file, svg)
  console.log(`mermaid: wrote ${path.basename(item.file)}`)
}
