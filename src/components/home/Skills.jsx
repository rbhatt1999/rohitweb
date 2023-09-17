'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sora, Crete_Round } from 'next/font/google'
import { useInView } from 'react-intersection-observer'
import { AiFillHtml5, AiFillGitlab, AiFillGithub } from 'react-icons/ai'
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io'
import { TbBrandJavascript, TbBrandRedux } from 'react-icons/tb'
import { DiReact, DiRuby } from 'react-icons/di'
import { FaBootstrap } from 'react-icons/fa'
import { FiFramer } from 'react-icons/fi'
import { SiTailwindcss, SiPostman, SiVisualstudiocode, SiNetlify, SiPostgresql, SiRubyonrails, SiAuth0, SiHeroku } from 'react-icons/si'
import { HiOutlineColorSwatch, HiLockClosed, HiOutlineDeviceTablet } from 'react-icons/hi'
import { BsGit, BsFillTerminalFill } from 'react-icons/bs'

const sora = Sora({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
})

const crete_round = Crete_Round({
    weight: ['400'],
    subsets: ['latin'],
})

export default function Skills() {
    const { ref, inView } = useInView();
    return (
        <div id="skills" ref={ref} className="flex flex-col items-center animate-text bg-gradient-to-r from-white/5 to-blue-500/5 text-white justify-between px-5 md:px-10 lg:px-14 py-10 md:py-16 gap-10 w-full h-full overflow-hidden">
            <motion.h2
                initial={{ y: -100, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 30, duration: 1 }}
                className={`text-2xl md:text-6xl font-semibold`}>Skills</motion.h2>
            <div className="flex flex-col md:flex-row justify-center gap-10 w-full">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 30, duration: 1 }}                    
                className={`max-w-sm flex flex-col border-2 border-blue-500 rounded-lg cursor-pointer flex-1 p-5 gap-5 hoverblueShadow hover:scale-105`}>
                    <h2 className='text-lg text-center md:text-2xl font-semibold'>FRONT-END</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><AiFillHtml5 /> HTML</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'> <IoLogoCss3 /> CSS</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><TbBrandJavascript /> JavaScript</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><DiReact /> React</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><TbBrandRedux /> Redux</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><FaBootstrap /> Bootstrap</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><FiFramer /> FramerMotion</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><SiTailwindcss /> Tailwind</li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 30, duration: 1 }}
                className={`max-w-sm flex flex-col border-2 border-blue-500 rounded-lg cursor-pointer flex-1 p-5 gap-5 hoverblueShadow hover:scale-105`}>
                    <h2 className='text-lg text-center md:text-2xl font-semibold'>BACK-END</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><SiPostgresql /> PostgreSQL</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><DiRuby />Ruby</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><SiRubyonrails /> Ruby on rails</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><SiAuth0 /> JWT</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><HiOutlineColorSwatch /> Rwag</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><HiLockClosed /> CanCanCan</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><HiOutlineDeviceTablet /> Devise</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><IoLogoNodejs /> Node.js</li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 30, duration: 1 }}
                className={`max-w-sm flex flex-col border-2 border-blue-500 rounded-lg cursor-pointer flex-1 p-5 gap-5 hoverblueShadow hover:scale-105`}>
                    <h2 className='text-lg text-center md:text-2xl font-semibold'>OTHER SKILLS</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><BsGit /> Git</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><AiFillGithub /> GitHub</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><SiHeroku /> Heroku</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'> <SiNetlify /> Netlify</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><SiPostman /> Postman</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><SiVisualstudiocode />VS Code</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><BsFillTerminalFill /> Terminal</li>
                        <li className='flex flex-row justify-between border-b-2 pb-2 border-white text-2xl'><AiFillGitlab /> GitLab</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}