import localFont from 'next/font/local'

const sora = localFont({
  src: '../../public/fonts/sora-latin.woff2',
  weight: '100 800',
  variable: '--font-sora',
  display: 'swap',
})

const crete_round = localFont({
  src: '../../public/fonts/crete-round-latin.woff2',
  weight: '400',
  variable: '--font-crete-round',
  display: 'swap',
})

const lato = localFont({
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

export { sora, crete_round, lato }
