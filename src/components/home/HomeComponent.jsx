'use client'
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link'
import pic from '@/assets/images/homepageimage.png'
import { motion } from 'framer-motion'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiFillMediumSquare } from 'react-icons/ai'
import Image from 'next/image'
import { Sora,Crete_Round } from 'next/font/google'
import { useInView } from 'react-intersection-observer'

const sora = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

const crete_round = Crete_Round({
  weight: ['400'],
  subsets: ['latin'],
})


export default function HomeComponent() {
  const state = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Software Developer'];
  const { ref, inView } = useInView();
  return (
    <div ref={ref} id="home" className="flex flex-col lg:flex-row items-center text-white justify-between px-5 md:px-10 lg:px-14 py-10 md:py-16 gap-10 w-full h-full overflow-hidden flex-1">
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 30, duration: 1 }}
        className={`flex flex-col flex-1 gap-3 md:gap-5 order-2 md:order-1`}>
        <h1 className={`${crete_round.className} text-2xl md:text-6xl font-semibold`}>Hey There. I&apos;m Rohit</h1>
        <h2 className="text-xl md:text-4xl text-white">I&apos;m a <span className='text-blue-500'><Typewriter words={state} loop={false} cursor typeSpeed={90} /></span></h2>
        <p className='text-base md:text-xl font-normal'>Ready to turn your digital dreams into reality? With a proven track record in building impressive products, features, and websites, I&apos;ll bring your vision to life. Don&apos;t wait &ndash; contact me today and let&apos;s create something extraordinary together!</p>
        <div className="flex flex-row gap-4 md:gap-8">
          <Link href="/about" className="text-base md:text-lg bg-white/30 rounded-lg border-2 border-blue-500/30 p-2 px-5 hover:bg-blue-500/30 hover:scale-105 hover:border-blue-500 transition-all duration-150">Know More</Link>
          <Link href="/contact" className="text-base md:text-lg bg-white/30 rounded-lg border-2 border-blue-500/30 p-2 px-5 hover:bg-blue-500/30 hover:scale-105 hover:border-blue-500 transition-all duration-150">Contact Me</Link>
        </div>
        <div className="flex flex-row gap-4 justify-center md:justify-start">
          <Link href='https://github.com/rbhatt1999' target='_blank' rel="noreferrer"><AiFillGithub className="hover:scale-105 cursor-pointer w-8 h-8" /></Link>
          <Link href='https://www.linkedin.com/in/rohitbhatt-dev/' target='_blank' rel="noreferrer"><AiFillLinkedin className="hover:scale-105 cursor-pointer w-8 h-8" /></Link>
          <Link href='https://twitter.com/Rohit_Bhatt_' target='_blank' rel="noreferrer"><AiOutlineTwitter className="hover:scale-105 cursor-pointer w-8 h-8" /></Link>
          <Link href='https://medium.com/@rbhatt199924' target='_blank' rel="noreferrer"><AiFillMediumSquare className="hover:scale-105 cursor-pointer w-8 h-8" /></Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 30, duration: 1 }}
        className={`flex flex-col flex-1 items-center lg:items-end order-1 md:order-2`}>
        <Image src={pic} alt="Rohit Bhatt" width={1000} height={1000} className="w-6/12 md:w-8/12 lg:w-10/12 h-auto" />
      </motion.div>
    </div>
  )
}
