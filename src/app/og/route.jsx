import { ImageResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'nodejs'

async function loadFonts() {
  const dir = join(process.cwd(), 'src/lib/og-fonts')
  const [regular, italic] = await Promise.all([
    readFile(join(dir, 'InstrumentSerif-Regular.ttf')),
    readFile(join(dir, 'InstrumentSerif-Italic.ttf')),
  ])
  return [
    { name: 'Instrument Serif', data: regular, weight: 400, style: 'normal' },
    { name: 'Instrument Serif', data: italic, weight: 400, style: 'italic' },
  ]
}

export async function GET() {
  const fonts = await loadFonts()
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#100E0B',
          color: '#F2EDE3',
          fontFamily: 'Instrument Serif',
        }}
      >
        <div style={{ width: 16, height: '100%', background: '#EE6A47' }} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: 1,
            padding: '68px 76px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 24,
              letterSpacing: 3,
              color: '#968F80',
              textTransform: 'uppercase',
            }}
          >
            <span>rohitcodes.com</span>
            <span>India</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 96, lineHeight: 1, letterSpacing: -2 }}>Rohit Bhatt</div>
            <div style={{ display: 'flex', marginTop: 18, fontSize: 58, lineHeight: 1.05 }}>
              <span>Software developer</span>
              <span style={{ color: '#EE6A47', fontStyle: 'italic', marginLeft: 18 }}>&amp; Gen AI</span>
            </div>
          </div>
          <div style={{ fontSize: 30, color: '#CFC8BA' }}>
            Ruby on Rails · React · LangChain · Gemini
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts },
  )
}
