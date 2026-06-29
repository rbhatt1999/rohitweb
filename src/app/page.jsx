import ComingSoon from '@/components/home/ComingSoon'
import NeuraHeader from '@/components/neura/NeuraHeader'
import NeuraFooter from '@/components/neura/NeuraFooter'

export const metadata = {
  title: 'NEURA — The Autonomous Agent Economy',
  description: 'NEURA is building self-directed AI agents with native on-chain wallets — intelligence that works, earns, and settles value 24/7. Launching soon.',
  alternates: { canonical: 'https://www.rohitweb.me' },
}

export default function Home() {
  return (
    <>
      <NeuraHeader />
      <main>
        <ComingSoon />
      </main>
      <NeuraFooter />
    </>
  )
}
