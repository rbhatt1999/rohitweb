'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
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

export default function Skills() {
    const { ref, inView } = useInView();
    return (
        <div id="skills" ref={ref} className="flex flex-col lg:flex-row items-center animate-text bg-gradient-to-r from-white/5 to-blue-500/5 text-white justify-between px-5 md:px-10 lg:px-14 py-10 md:py-24 gap-10 w-full h-full overflow-hidden flex-1">
        </div>
    )
}