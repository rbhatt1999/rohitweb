'use client'
import React, { useState } from 'react'
import contactimg from '@/assets/images/contact-form.png'
import Image from 'next/image'
import { Sora, Crete_Round } from 'next/font/google'
import { useInView } from 'react-intersection-observer'
import { AnimatePresence, motion } from 'framer-motion'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiFillMediumSquare } from 'react-icons/ai'
import Link from 'next/link'

const sora = Sora({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
})

const crete_round = Crete_Round({
    weight: ['400'],
    subsets: ['latin'],
})


export default function Contact() {
    const { ref, inView } = useInView();
    const [formStatus, setFormStatus] = useState(true);
    const [msgStatus, setMsgStatus] = useState(false);
    const handleSubmit = () => {
        setFormStatus(false);
        setMsgStatus(true);
    }
    return (
        <div ref={ref} className={`flex flex-col lg:flex-row items-center text-white justify-between px-5 md:px-10 lg:px-14 py-10 md:py-18 gap-5 md:gap-10 w-full h-full overflow-hidden flex-1`} id="contact">
            <div className={`flex flex-col justify-center items-center gap-10 w-full h-full overflow-hidden`}>
                <Image src={contactimg} alt="contact form" className={`w-full`} />
            </div>
            <div className={`flex flex-col justify-center items-center gap-4 w-full h-full overflow-hidden`}>
                <h1 className={`${crete_round.className} text-2xl md:text-6xl font-semibold`}>Contact Me</h1>
                <p className='text-base md:text-xl text-center font-normal'>I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat please get in touch.</p>
                <section className={` flex flex-col w-full gap-5`}>
                    <iframe name="hiddenConfirm" id="hiddenConfirm" style={{ display: 'none' }} />
                    <AnimatePresence>
                        {formStatus && (
                            <motion.form
                                exit={{ height: 0, transition: { duration: 1 } }}
                                className={`flex flex-col gap-5 w-full overflow-hidden`} action="https://docs.google.com/forms/d/e/1FAIpQLScyBwHkoOVll5LwDaR17K__OZlpOpx3jA6M3iY0Vut9XghCQA/formResponse" onSubmit={handleSubmit} target="hiddenConfirm" method="post">
                                <motion.input
                                    initial={{ opacity: 0, x: 500 }}
                                    animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } } : { opacity: 0, x: 500 }}
                                    className={`w-full p-3 border-2 border-blue-500 rounded-lg text-black font-medium`} type="text" id="name" name="entry.191940924" placeholder="Full name" required maxLength="30" />
                                <motion.input
                                    initial={{ opacity: 0, x: -500 }}
                                    animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } } : { opacity: 0, x: -500 }}
                                    className={`w-full p-3 border-2 border-blue-500 rounded-lg text-black font-medium`} type="email" name="entry.104733681" id="email" placeholder="Email address" required />
                                <motion.textarea
                                    initial={{ opacity: 0, x: 500 }}
                                    animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 } } : { opacity: 0, x: 500 }}
                                    className={`w-full p-3 border-2 border-blue-500 rounded-lg text-black font-medium`} name="entry.1550334487" id="message" rows="5" maxLength="500" placeholder="Enter text here" required></motion.textarea>
                                <motion.button
                                    initial={{ opacity: 0, x: -500 }}
                                    animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.8, type: 'spring', stiffness: 30 } } : { opacity: 0, x: -500 }}
                                    className={`w-full p-3 border-2 border-blue-500 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 transition-all duration-150`} type="submit">Send Message</motion.button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                    {msgStatus && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? {opacity: 1, y: 0, transition: { duration: 0.5 } } : { opacity: 0, y: 50 }}
                            className={`bg-green-700 bg-opacity-50 rounded-3xl p-5 flex flex-col gap-5 w-full`}>
                            <h2 className={`text-2xl md:text-4xl font-semibold text-center`}>Thanks for reaching out!</h2>
                            <p className={`text-base md:text-xl font-normal text-center`}>I&apos;ll get back to you as soon as possible.</p>
                        </motion.div>
                    )}
                </section>
            </div>
        </div>
    )
}
