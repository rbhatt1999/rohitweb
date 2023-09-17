'use client'
import { useState } from 'react'
import pic2 from '@/assets/images/rohit-bhatt.png'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sora, Crete_Round } from 'next/font/google'
import { useInView } from 'react-intersection-observer'

const sora = Sora({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
})

const crete_round = Crete_Round({
    weight: ['400'],
    subsets: ['latin'],
})

export default function About() {
    const [professional, setprofessional] = useState(true);
    const { ref, inView } = useInView();
    return (
        <div id="about" ref={ref} className="flex flex-col lg:flex-row items-center animate-text bg-gradient-to-r from-white/5 to-blue-500/5 text-white justify-between px-5 md:px-10 lg:px-14 py-10 md:py-24 gap-10 w-full h-full overflow-hidden flex-1">
            <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 30, duration: 1 }}
                className={`flex flex-col flex-1 items-start`}>
                <Image src={pic2} alt="Rohit Bhatt" width={1000} height={1000} className="rounded-full blueShadow w-40 md:w-80 h-auto z-10" />
            </motion.div>
            <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 30, duration: 1 }}
                className={`flex flex-col w-full md:w-7/12 gap-2 md:gap-5`}>
                <h1 className={`${crete_round.className} text-2xl text-center md:text-left md:text-6xl font-semibold`}>About me</h1>
                <div className={`flex flex-row w-fit text-xl`}>
                    <span className={`text-lg md:text-2xl p-2 px-5 cursor-pointer border-r-2 select-none rounded-l-xl ${professional ? 'bg-blue-500/80' : 'bg-white/10'}`} onClick={() => setprofessional(true)}>Professional</span>
                    <span className={`text-lg md:text-2xl p-2 px-6 cursor-pointer select-none border-l-2 rounded-r-xl ${professional ? 'bg-white/10' : 'bg-blue-500/80'}`} onClick={() => setprofessional(false)} >Personal</span>
                </div>
                {professional ?
                    (<>
                        <p className='text-base md:text-xl font-normal'>Immersed in remote development, I specialize in building stunning landing pages to full-stack websites. Early delivery is my secret to success. Working across time zones, I excel in remote collaboration. As a seasoned web developer, I combine technical expertise with creative flair. From captivating designs to seamless user experiences, I conquer complex challenges with innovative solutions. Let&apos;s shape your exceptional online presence together. Explore my skills and resume below to get started on our digital journey.</p>
                        <div className={`flex flex-row gap-10`}>
                            <Link href="/tech" className={`text-base md:text-lg bg-white/30 rounded-lg border-2 border-blue-500/30 p-2 px-5 hover:bg-blue-500/30 hover:scale-105 hover:border-blue-500 transition-all duration-150`}>Skills</Link>
                            <a href="./Resume.pdf" target="_blank" rel="noreferrer" className={`text-base md:text-lg bg-white/30 rounded-lg border-2 border-blue-500/30 p-2 px-5 hover:bg-blue-500/30 hover:scale-105 hover:border-blue-500 transition-all duration-150`}>Resume</a>
                        </div>
                    </>)
                    :
                    (<>
                        <p className='text-base md:text-xl font-normal'>Beyond my professional pursuits, I find solace and inspiration in the wonders of the natural world. Hiking through picturesque trails, I embrace the serenity and beauty that nature provides. Additionally, I am an avid reader, constantly seeking new literary adventures. If you&apos;re in search of a captivating novel, I highly recommend immersing yourself in the thrilling pages of &quot;The Night Circus&quot; by Erin Morgenstern. This enchanting tale will transport you to a realm of wonder and magic, captivating your imagination.</p>
                        <div className={`flex flex-row gap-10`}>
                            <a href="https://www.linkedin.com/in/rohitbhatt-dev/" target="_blank" className={`text-base md:text-lg bg-white/30 rounded-lg border-2 border-blue-500/30 p-2 px-5 hover:bg-blue-500/30 hover:scale-105 hover:border-blue-500 transition-all duration-150`} rel="noreferrer">Connect on LinkedIn</a>
                        </div>
                    </>)
                }
            </motion.div>
        </div>
    )
}