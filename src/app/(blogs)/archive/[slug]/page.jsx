import React from 'react'
import { lato as dmSans } from '@/lib/fonts-blog'
import converblogtomonth from '@/utils/blogs/convertblogtomonths'
import SideBar from '@/components/blogs/SideBar'
import BlogsList from '@/components/blogs/BlogsList'
import { archiveSlugs, listArchivePosts } from '@/lib/blog-queries'
import { listingMetadata } from '@/lib/site'

const ARCHIVE_IMAGE = {
  src: 'https://i.ibb.co/3FR9rf2/archive.webp',
  alt: 'Archive blogs',
}

export function generateStaticParams() {
  return archiveSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params, searchParams }) {
  const { slug } = params
  const label = converblogtomonth(slug)
  return listingMetadata({
    path: `/archive/${slug}`,
    page: searchParams?.page,
    search: searchParams?.search,
    title: `Archive Blogs - ${label}`,
    description: `Find the Blogs of ${label} on the latest web technologies and trends. Learn about the latest web technologies and trends.`,
    image: { ...ARCHIVE_IMAGE, alt: `Archive Blogs - ${label}` },
  })
}

function getSocialBlogs(slug, page, search) {
  return listArchivePosts(slug, page, search)
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
  const { data, totalPage } = getSocialBlogs(slug, page, search);
  return (
    <main className={`relative flex flex-col items-center mt-16 ${dmSans.className}`}>
      <section className="flex flex-col md:flex-row w-full blog-panel items-center justify-center px-2 py-12 md:py-24 md:px-20">
        <div className="flex flex-col justify-center items-center flex-1 gap-2 md:gap-5">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left blog-title">{converblogtomonth(slug)}</h1>
          {
            search && (
              <p className='text-base md:text-lg text-center md:text-left blog-body'>Search Results for "{search}"</p>
            )
          }
        </div>
      </section>
      <div className='flex flex-col md:flex-row w-full gap-8 px-7 py-7 md:py-14 md:px-36'>
        <div className=' flex flex-col w-full md:w-8/12 gap-10'>
          {
            data.length === 0 ? (
              <div className='flex flex-col w-full gap-2 items-center justify-center'>
                <h2 className='text-5xl font-bold pt-5' style={{ color: 'var(--fg1)' }}>No Blogs Found</h2>
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
