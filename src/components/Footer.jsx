import React from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiFillMediumSquare } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 bg-neutral-900 py-5">
            <p className={`text-sm md:text-lg font-normal text-center md:text-left text-white`}>© 2023 Rohit Bhatt. All rights reserved.</p>
            <div className="flex flex-row gap-4 justify-center md:justify-start">
                <Link href='mailto:rbhatt199924@gmail.com' target='_blank' rel="noreferrer"><FiMail className="hover:scale-105 cursor-pointer w-8 h-8 text-white hover:text-blue-500" /></Link>
                <Link href='https://github.com/rbhatt1999' target='_blank' rel="noreferrer"><AiFillGithub className="hover:scale-105 cursor-pointer w-8 h-8 text-white hover:text-blue-500" /></Link>
                <Link href='https://www.linkedin.com/in/rohitbhatt-dev/' target='_blank' rel="noreferrer"><AiFillLinkedin className="hover:scale-105 cursor-pointer w-8 h-8 text-white hover:text-blue-500" /></Link>
                <Link href='https://twitter.com/Rohit_Bhatt_' target='_blank' rel="noreferrer"><AiOutlineTwitter className="hover:scale-105 cursor-pointer w-8 h-8 text-white hover:text-blue-500" /></Link>
                <Link href='https://medium.com/@rbhatt199924' target='_blank' rel="noreferrer"><AiFillMediumSquare className="hover:scale-105 cursor-pointer w-8 h-8 text-white hover:text-blue-500" /></Link>
            </div>
        </div>
    )
}
