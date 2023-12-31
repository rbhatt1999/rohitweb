'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import converblogtomonth from '@/utils/blogs/convertblogtomonths'
import Search from './Search'

export default function SidebarClient({data, search, afterurl}) {
  const [scrollDown, setScrollDown] = useState(true); // Initialize with false

  useEffect(() => {
    let oldScroll = 0;
    const handleScroll = () => {
      if (window.scrollY > oldScroll) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
      oldScroll = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className={`flex flex-col w-full gap-5 bg-white/5 p-5 rounded-xl md:sticky ${scrollDown ? 'md:-top-32' : 'md:top-24'}`}>
      <div className='flex flex-row gap-2 border-b-2 border-neutral-300 pb-8'>
        <Search search={search} afterurl={afterurl} />
        </div>
      <div className='flex flex-col gap-2 pb-8 border-b-2 border-neutral-300'>
        <h2 className='text-2xl font-bold text-blue-300'>Recent Blogs</h2>
        {
          data.recentFive.map((blog, index) => (
            <div key={index} className='flex flex-row w-full gap-5'>
                <Link href={`/blogs/${blog.slug}`} className='hover:underline'>
                  <p className='text-sm md:text-base text-neutral-200 line-clamp-2'>{blog.title}</p>
                </Link>
            </div>
          ))
        }
      </div>
      <div className='flex flex-col gap-2 pb-8 border-b-2 border-neutral-300'>
        <h2 className='text-2xl font-bold text-blue-300'>Monthly Archive</h2>
        {
          data.monthlyArchive.map((blog, index) => (
            <div key={index} className='flex flex-row w-full gap-5'>
                <Link href={`/archive/${blog}`} className='hover:underline'>
                  <p className='text-sm md:text-base text-neutral-200 line-clamp-2'>{converblogtomonth(blog)}</p>
                </Link>
            </div>
          ))
        }
      </div>
      <div className='flex flex-col gap-2 pb-8 border-b-2 border-neutral-300'>
        <h2 className='text-2xl font-bold text-blue-300'>Category</h2>
        {
          data.category.map((blog, index) => (
            <div key={index} className='flex flex-row w-full gap-5'>
                <Link href={`/categories/${blog.slug}`} className='hover:underline'>
                  <p className='text-sm md:text-base text-neutral-200 line-clamp-2'>{blog.name}</p>
                </Link>
                </div>
          ))
        }
        </div>
    </div>
  )
}
