'use client'
import React from 'react'
import Link from 'next/link'
import { Link as Link2 } from 'react-scroll';
import { usePathname } from 'next/navigation';

export default function NavItems({setIsOpen = false}) {
  const pathname = usePathname();
  return (
    <>
      {
        pathname === '/' ?
        <>
          <Link2 to="home" activeClass="active_underline" spy={true} smooth={true} offset={-81} duration={500} className={`text-white text-xl cursor-pointer`} onClick={() => setIsOpen ? setIsOpen(false) : null}>Home</Link2>
          <Link2 to="about" activeClass="active_underline" spy={true} smooth={true} offset={-81} duration={500} className={`text-white text-xl cursor-pointer`} onClick={() => setIsOpen ? setIsOpen(false) : null}>About</Link2>
          <Link2 to="projects" activeClass="active_underline" spy={true} smooth={true} offset={-80} duration={500} className={`text-white text-xl cursor-pointer`} onClick={() => setIsOpen ? setIsOpen(false) : null}>Projects</Link2>
          <Link2 to="skills" activeClass="active_underline" spy={true} smooth={true} offset={-80} duration={500} className={`text-white text-xl cursor-pointer`} onClick={() => setIsOpen ? setIsOpen(false) : null}>Skills</Link2>
          <Link2 to="contact" activeClass="active_underline" spy={true} smooth={true} offset={-80} duration={500} className={`text-white text-xl cursor-pointer`} onClick={() => setIsOpen ? setIsOpen(false) : null}>Contact</Link2>
        </>
          :
          <>
          <Link href="/" className={`text-white text-xl ${pathname ==='/' ? 'active_underline': ''}`} onClick={() => setIsOpen ? setIsOpen(false) : null}>Home</Link>
          <Link href="/" className={`text-white text-xl ${pathname ==='/' ? 'active_underline': ''}`} onClick={() => setIsOpen ? setIsOpen(false) : null}>About</Link>
          <Link href="/" className={`text-white text-xl ${pathname ==='/projects' ? 'active_underline': ''}`} onClick={() => setIsOpen ? setIsOpen(false) : null}>Projects</Link>
          <Link href="/" className={`text-white text-xl ${pathname ==='/skills' ? 'active_underline': ''}`} onClick={() => setIsOpen ? setIsOpen(false) : null}>Skills</Link>
          <Link href="/" className={`text-white text-xl ${pathname ==='/contact' ? 'active_underline': ''}`} onClick={() => setIsOpen ? setIsOpen(false) : null}>Contact</Link>
          </>
      }
    </>
  )
}
