import ComingSoon from '@/components/home/ComingSoon'

export const metadata = {
  title: 'NEURA — The Autonomous Agent Economy',
  description: 'NEURA is building self-directed AI agents with native on-chain wallets — intelligence that works, earns, and settles value 24/7. Launching soon.',
  alternates: { canonical: 'https://www.rohitweb.me' },
}

export default function Home() {
  return (
    <main>
      <ComingSoon />
    </main>
  )
}
