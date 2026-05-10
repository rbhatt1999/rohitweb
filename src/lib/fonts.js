import localFont from 'next/font/local'

export const jetbrainsMono = localFont({
  src: [
    { path: '../../public/fonts/jetbrains-mono-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/jetbrains-mono-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/jetbrains-mono-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const inter = localFont({
  src: [
    { path: '../../public/fonts/inter-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/inter-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/inter-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-inter',
  display: 'swap',
})

// Legacy fonts — still used by the blog pages
export const sora = localFont({
  src: '../../public/fonts/sora-latin.woff2',
  weight: '100 800',
  variable: '--font-sora',
  display: 'swap',
})

export const crete_round = localFont({
  src: '../../public/fonts/crete-round-latin.woff2',
  weight: '400',
  variable: '--font-crete-round',
  display: 'swap',
})

export const lato = localFont({
  src: [
    { path: '../../public/fonts/lato-100.woff2', weight: '100', style: 'normal' },
    { path: '../../public/fonts/lato-300.woff2', weight: '300', style: 'normal' },
    { path: '../../public/fonts/lato-400.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/lato-700.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/lato-900.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-lato',
  display: 'swap',
})
