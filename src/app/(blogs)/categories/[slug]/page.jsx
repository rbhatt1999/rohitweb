import React from 'react'
import { lato as dmSans } from '@/lib/fonts-blog'
import { notFound } from 'next/navigation'
import SideBar from '@/components/blogs/SideBar'
import BlogsList from '@/components/blogs/BlogsList'
import { allCategories, getCategory, listCategoryPosts } from '@/lib/blog-queries'
import { listingMetadata } from '@/lib/site'

export function generateStaticParams() {
  return allCategories().map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({ params, searchParams }) {
  const data = getCategory(params.slug)
  if (!data) return { title: 'Category', robots: { index: false, follow: false } }
  return {
    ...listingMetadata({
      path: `/categories/${data.slug}`,
      page: searchParams?.page,
      search: searchParams?.search,
      title: data.title,
      description: data.description,
      image: data.image,
    }),
    keywords: data.tags,
  }
}

function getBlogs(slug, page, search) {
  return listCategoryPosts(slug, page, search)
}

export default async function page({params,searchParams}) {
  const { slug } = params;
  let page = 1;
  let search = false;
  if (searchParams.page) {
    page = parseInt(searchParams.page);
  }
  if (searchParams.search) {
    search = decodeURIComponent(searchParams.search);
  }
  const data = getBlogs(slug,page,search);
  if (!data) notFound()
  return (
    <main className={`relative flex flex-col items-center mt-16 ${dmSans.className}`}>
      <section className="flex flex-col md:flex-row w-full blog-panel items-center justify-center px-2 py-12 md:py-24 md:px-20">
        <div className="flex flex-col justify-center items-center flex-1 gap-2 md:gap-5">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left blog-title">{data.category.name}</h1>
          {
            search && (
              <p className='text-base md:text-lg text-center md:text-left blog-body'>Search Results for &quot;{search}&quot;</p>
            )
          }
        </div>
      </section>
      <div className='flex flex-col md:flex-row w-full gap-8 px-7 py-7 md:py-14 md:px-36'>
        <div className=' flex flex-col w-full md:w-8/12 gap-10'>
          {
            data.blog.length === 0 ? <h2 className='text-5xl font-bold text-center' style={{ color: 'var(--fg1)' }}>No Blogs Found</h2>:<BlogsList data={data.blog} totalPage={data.totalPage} page={page} search={search} afterurl={`categories/${slug}`} />
          }
        </div>
        <div className='flex flex-col w-full flex-1 relative'>
        <SideBar search={search} afterurl={`categories/${slug}`} />
        </div>
      </div>
    </main>
  )
}
