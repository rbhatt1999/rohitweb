import React from 'react'
import Link from 'next/link'
import NavItems from './NavItems'
import NavigationBarMobile from './NavigationBarMobile'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'

export default function NavigationBar() {
  return (
    <div className="fixed bg-neutral-800 left-0 right-0 top-0 flex p-2 px-8 flex-row justify-between z-20 items-center shadow-md h-16 md:h-20">
      <Link href="/">
        <Image src={logo} width={90} height={10} className='w-12 h-12 md:w-16 md:h-16' alt='logo' />
      </Link>
      <div className="hidden lg:flex flex-row gap-10 justify-between items-center">
        <NavItems />
      </div>
      <div className="flex lg:hidden">
        <NavigationBarMobile />
      </div>
    </div>
  )
}
