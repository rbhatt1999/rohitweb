import crypto from 'crypto'
import fs from 'fs'
import path from 'path'

// Same digest as scripts/render-mermaid.mjs. The build writes the SVG;
// the page inlines it so posts do not ship a mermaid runtime.
function mermaidHash(source) {
  return crypto.createHash('sha256').update(source).digest('hex').slice(0, 16)
}

export function mermaidMarkup(source) {
  const file = path.join(process.cwd(), 'src/generated/mermaid', `${mermaidHash(source)}.svg`)
  if (!fs.existsSync(file)) {
    throw new Error(`Missing rendered diagram ${path.basename(file)}. Run npm run render-mermaid`)
  }
  return fs.readFileSync(file, 'utf8')
}
