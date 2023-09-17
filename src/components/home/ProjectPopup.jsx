import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectPopup({ selectedProject, setSelectedProject }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 flex justify-center items-center z-50 backdrop-blur-sm">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0, transition: { duration: 0.5 } }}
                transition={{ type: 'spring', stiffness: 30, duration: 0.5 }}
                className="flex flex-col w-full md:w-8/12 bg-white/10 rounded-lg p-5 gap-5 max-h-screen">
                <div className="flex flex-row justify-between items-center px-2 h-20">
                    <h1 className="text-2xl md:text-4xl font-semibold">{selectedProject.h1}</h1>
                    <AiOutlineClose className="w-8 h-8 cursor-pointer hover:text-red-500" onClick={() => setSelectedProject(false)} />
                </div>
                <div className="flex flex-col md:flex-row gap-5 overflow-x-auto flex-1">
                    <div className="flex flex-col flex-1 self-center">
                        <Image src={selectedProject.image} alt={selectedProject.h1} width={1000} height={1000} className="rounded-lg w-full" />
                    </div>
                    <div className="flex flex-col flex-1 gap-2 justify-around">
                        <p className="text-base md:text-xl font-normal">{selectedProject.p}</p>
                        <div className="flex flex-row gap-5">
                            <Link href={selectedProject.btn1} target="_blank" rel="noreferrer" className="text-base md:text-lg bg-white/30 rounded-lg border-2 border-blue-500/30 p-2 px-5 hover:bg-blue-500/30 hover:scale-105 hover:border-blue-500 transition-all duration-150">Visit Website</Link>
                            <Link href={selectedProject.btn2} target="_blank" rel="noreferrer" className="text-base md:text-lg bg-white/30 rounded-lg border-2 border-blue-500/30 p-2 px-5 hover:bg-blue-500/30 hover:scale-105 hover:border-blue-500 transition-all duration-150">View Code</Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
