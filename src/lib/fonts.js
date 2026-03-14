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

export { sora, crete_round }
