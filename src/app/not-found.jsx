import Redirect from '@/components/notfound/Redirect'
import React from 'react'
import { FaRegSadTear } from 'react-icons/fa'

export const metadata = {
  title: `Page Not Found - Rohit`,
  description: `The page you are looking for does not exist.`,
  images: [
    {
      url: '/logo.png',
      width: 800,
      height: 500,
      alt: 'Rohit Bhatt',
    },
  ],
  url: `https://rohitweb.me`,
  type: 'website',
  keywords: ['Rohit', 'Bhatt', 'web developer', 'web designer', 'full stack developer', 'full stack designer', 'software engineer', 'software developer', 'software designer', 'web developer portfolio', 'web designer portfolio', 'full stack developer portfolio', 'full stack designer portfolio', 'software engineer portfolio', 'software developer portfolio', 'software designer portfolio', 'web developer portfolio website', 'web designer portfolio website', 'full stack developer portfolio website', 'full stack designer portfolio website', 'software engineer portfolio website', 'software developer portfolio website', 'software designer portfolio website', 'web developer portfolio website template', 'web designer portfolio website template', 'full stack developer portfolio website template', 'full stack designer portfolio website template', 'software engineer portfolio website template', 'software developer portfolio website template', 'software designer portfolio website template'],
  openGraph: {
    title: `Page Not Found - Rohit`,
    description: `The page you are looking for does not exist.`,
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 500,
        alt: 'Rohit Bhatt',
      },
    ],
    url: `https://rohitweb.me`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Page Not Found - Rohit`,
    description: `The page you are looking for does not exist.`,
    images: ['/logo.png'],
    creator: '@Rohit__Bhatt_',
  },
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full h-screen bg-neutral-950 text-white">
      <div className="flex flex-row justify-center gap-5 items-center w-full">
      <h1 className="text-5xl font-bold "> Page Not Found </h1>
      <FaRegSadTear className="text-4xl " />
      </div>
      <Redirect />
    </div>
  )
}
