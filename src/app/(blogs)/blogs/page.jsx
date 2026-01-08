import React from 'react'
import { DM_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import url from '@/utils/url'
import Link from 'next/link'
import SideBar from '@/components/blogs/SideBar'
import BlogsList from '@/components/blogs/BlogsList'

const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

export const metadata = {
  title: `Exploring the Latest Web Technology Trends and Innovations`,
  description: `Learn about multiple web development technologies like Ruby on Rails, React, JavaScript, and many more. Explore the latest web technology trends and innovations.`,
  images: [
    {
      url: 'https://i.ibb.co/BL54PXc/blogs.webp',
      width: 800,
      height: 500,
      alt: 'Rohit Bhatt',
    },
  ],
  url: `${url}/blogs`,
  type: 'website',
  keywords: ['Rohit Bhatt', 'Custom Web Solutions', 'Full Stack Web Developer', 'Ruby on Rails', 'React', 'JavaScript', 'Dynamic Web Applications', 'Web Development', 'Web Developer', 'Web Solutions', 'Web Solutions Provider', 'Web Solutions Provider in India', 'Web Solutions Provider in Utarakhand', 'Web Solutions Provider in Ahmedabad', 'Web Solutions Provider in Gujarat', 'Web Solutions Provider in India', 'Web Solutions Provider in USA', 'Web Solutions Provider in Canada', 'Web Solutions Provider in Australia', 'Web Solutions Provider in UK', 'Web Solutions Provider in UAE', 'Web Solutions Provider in Dubai', 'Web Solutions Provider in Singapore', 'Web Solutions Provider in Malaysia', 'Web Solutions Provider in New Zealand', 'Web Solutions Provider in South Africa', 'Web Solutions Provider in Europe', 'Web Solutions Provider in Asia', 'Web Solutions Provider in North America', 'Web Solutions Provider in South America', 'Web Solutions Provider in Central America', 'Web Solutions Provider in Africa', 'Web Solutions Provider in Delhi'],
  openGraph: {
    title: `Exploring the Latest Web Technology Trends and Innovations`,
    description: `Learn about multiple web development technologies like Ruby on Rails, React, JavaScript, and many more. Explore the latest web technology trends and innovations.`,
    images: [
      {
        url: 'https://i.ibb.co/BL54PXc/blogs.webp',
        width: 500,
        height: 800,
        alt: 'Rohit Bhatt',
      },
    ],
    url: `${url}/blogs`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Exploring the Latest Web Technology Trends and Innovations`,
    description: `Learn about multiple web development technologies like Ruby on Rails, React, JavaScript, and many more. Explore the latest web technology trends and innovations.`,
    images: ['https://i.ibb.co/BL54PXc/blogs.webp'],
    creator: '@Rohit__Bhatt_',
    url: `${url}/blogs`,
    type: 'website',
  },
  alternates: {
    canonical: `${url}/blogs`,
  },
}

export async function getBlogs(page = false, search = false, all = false) {
  let res
  try {
    console.log(`${url}/api/blogs${page ? `?page=${page}` : ''}${search ? `&search=${search}` : ''}${all ? `?all=${true}` : ''}`)
    res = await fetch(`${url}/api/blogs${page ? `?page=${page}` : ''}${search ? `&search=${search}` : ''}${all ? `?all=${true}` : ''}`, { cache: 'no-cache' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }
  catch (err) {
    notFound()
  }
  return res.json()
}

export default async function page({ searchParams }) {
  let page = 1;
  let search = false;
  if (searchParams.page) {
    page = parseInt(searchParams.page);
  }
  if (searchParams.search) {
    search = decodeURIComponent(searchParams.search);
  }
  const { data, totalPage } = await getBlogs(page, search);
  return (
    <main className={`relative flex flex-col items-center mt-16 ${dmSans.className}`}>
      <section className="flex flex-col md:flex-row w-full bg-white/5 items-center justify-center px-2 py-12 md:py-24 md:px-20">
        <div className="flex flex-col justify-center items-center flex-1 gap-2 md:gap-5">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-400">
            Exploring the Latest Web Technology Trends and Innovations
          </h1>
          {
            search && (
              <p className='text-base md:text-lg text-center md:text-left text-white'>Search Results for "{search}"</p>
            )
          }
        </div>
      </section>
      <div className='flex flex-col md:flex-row w-full gap-8 px-7 py-7 md:py-14 md:px-36'>
        <div className=' flex flex-col w-full md:w-8/12'>
          {
            data.length === 0 ? (
              <div className='flex flex-col w-full gap-2 items-center justify-center'>
                <h1 className='text-5xl font-bold pt-5 text-white'>No Blogs Found</h1>
              </div>
            ) :
              <BlogsList data={data} totalPage={totalPage} page={page} search={search} afterurl='blogs' />
          }

        </div>
        <div className='flex flex-col w-full flex-1 relative'>
          <SideBar search={search} afterurl='blogs' />
        </div>
      </div>
    </main>
  )
}
