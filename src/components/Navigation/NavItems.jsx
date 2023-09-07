'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function NavItems({setIsOpen = false}) {
  const pathname = usePathname();
  return (
    <>
      <Link href="/" className={`text-white text-xl ${pathname ==='/' ? 'active_underline': ''}`} onClick={() => setIsOpen ? setIsOpen(false) : null}>Home</Link>
      <Link href="/about" className={`text-white text-xl ${pathname ==='/about' ? 'active_underline': ''}`} onClick={() => setIsOpen ? setIsOpen(false) : null}>About</Link>
      <Link href="/projects" className={`text-white text-xl ${pathname ==='/projects' ? 'active_underline': ''}`} onClick={() => setIsOpen ? setIsOpen(false) : null}>Projects</Link>
      <Link href="/skills" className={`text-white text-xl ${pathname ==='/skills' ? 'active_underline': ''}`} onClick={() => setIsOpen ? setIsOpen(false) : null}>Skills</Link>
      <Link href="/contact" className={`text-white text-xl ${pathname ==='/contact' ? 'active_underline': ''}`} onClick={() => setIsOpen ? setIsOpen(false) : null}>Contact</Link>
    </>
  )
}
