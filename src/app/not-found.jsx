import React from 'react'
import { FaRegSadTear } from 'react-icons/fa'

export const metadata = {
  title: 'Page Not Found — Rohit Bhatt',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full h-screen" style={{ background: 'var(--bg)', color: 'var(--fg1)' }}>
      <div className="flex flex-row justify-center gap-1 md:gap-5 items-center w-full">
      <h1 className="text-xl md:text-5xl font-bold "> Page Not Found </h1>
      <FaRegSadTear className="text-xl md:text-4xl " />
      </div>
    </div>
  )
}
