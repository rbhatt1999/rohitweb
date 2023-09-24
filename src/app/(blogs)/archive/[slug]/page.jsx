import React from 'react'
import { DM_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import url from '@/utils/url'
import converblogtomonth from '@/utils/blogs/convertblogtomonths'
import SideBar from '@/components/blogs/SideBar'
import BlogsList from '@/components/blogs/BlogsList'


const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

export async function generateMetadata({ params }) {
  const { slug } = params
  return {
    title: `Archive Blogs - ${converblogtomonth(slug)}`,
    description: `Find the Blogs of ${converblogtomonth(slug)} on the latest web technologies and trends. Learn about the latest web technologies and trends.`,
    images: [
      {
        url: `https://i.ibb.co/3FR9rf2/archive.webp`,
        width: 800,
        height: 500,
        alt: `Archive Blogs - ${converblogtomonth(slug)}`,
      },
    ],
    url: `${url}/archive/${slug}`,
    type: 'website',
    keywords: ['Blogs', 'Web Development', 'Web Design', 'Web Development Blogs', 'Web Design Blogs'],
    openGraph: {
      title: `Archive Blogs - ${converblogtomonth(slug)}`,
      description: `Find the Blogs of ${converblogtomonth(slug)} on the latest web technologies and trends. Learn about the latest web technologies and trends.`,
      images: [
        {
          url: `https://i.ibb.co/3FR9rf2/archive.webp`,
          width: 800,
          height: 500,
          alt: `Archive Blogs - ${converblogtomonth(slug)}`,
        },
      ],
      url: `${url}/archive/${slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Archive Blogs - ${converblogtomonth(slug)}`,
      description: `Find the Blogs of ${converblogtomonth(slug)} on the latest web technologies and trends. Learn about the latest web technologies and trends.`,
      images: ['https://i.ibb.co/3FR9rf2/archive.webp'],
      creator: '@Rohit_Bhatt_',
    },
    alternates: {
      canonical: `${url}/archive/${slug}`,
    },
  }
}

async function getSocialBlogs(slug, page, search) {
  let res
  try {
    res = await fetch(`${url}/api/blogs/archive/${slug}${page ? `?page=${page}` : ''}${search ? `&search=${search}` : ''}`, { cache: 'no-cache' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }
  catch (err) {
    notFound()
  }
  return res.json()
}

export default async function page({ params, searchParams }) {
  const { slug } = params;
  let page = 1;
  let search = false;
  if (searchParams.page) {
    page = parseInt(searchParams.page);
  }
  if (searchParams.search) {
    search = decodeURIComponent(searchParams.search);
  }
  const { data, totalPage } = await getSocialBlogs(slug, page, search);
  return (
    <main className={`relative flex flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <section className="flex flex-col md:flex-row w-full bg-neutral-200/5 items-center justify-center px-2 py-12 md:py-24 md:px-20">
        <div className="flex flex-col justify-center items-center flex-1 gap-2 md:gap-5">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left text-blue-400">{converblogtomonth(slug)}</h1>
          {
            search && (
              <p className='text-base md:text-lg text-center md:text-left text-white'>Search Results for "{search}"</p>
            )
          }
        </div>
      </section>
      <div className='flex flex-col md:flex-row w-full gap-8 px-7 py-7 md:py-14 md:px-36'>
        <div className=' flex flex-col w-full md:w-8/12 gap-10'>
          {
            data.length === 0 ? (
              <div className='flex flex-col w-full gap-2 items-center justify-center'>
                <h1 className='text-5xl font-bold pt-5 text-white'>No Blogs Found</h1>
              </div>
            ) :
              <BlogsList data={data} totalPage={totalPage} page={page} search={search} afterurl={`archive/${slug}`} />
          }
        </div>
        <div className='flex flex-col w-full flex-1 relative'>
          <SideBar search={search} afterurl={`archive/${slug}`} />
        </div>
      </div>
    </main>
  )
}
