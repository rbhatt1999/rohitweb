import localFont from 'next/font/local'

export const jetbrainsMono = localFont({
  src: [
    { path: '../../public/fonts/jetbrains-mono-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/jetbrains-mono-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/jetbrains-mono-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-jetbrains',
  display: 'swap',
  // Labels, not the LCP element. Let the portrait and display face preload first.
  preload: false,
})

// Variable font: one latin file covers 400–700. Replaces the render-blocking Google CSS.
export const hanken = localFont({
  src: '../../public/fonts/hanken-grotesk-latin.woff2',
  weight: '400 700',
  style: 'normal',
  variable: '--font-hanken',
  display: 'swap',
  adjustFontFallback: 'Arial',
})

export const instrumentSerif = localFont({
  src: [
    { path: '../../public/fonts/instrument-serif-latin-400.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/instrument-serif-latin-400-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-instrument',
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
})
