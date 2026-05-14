import Link from 'next/link'
import React, { Fragment } from 'react';
import url from '@/utils/url';

const pageBtnInactive = {
  background: 'var(--surface)',
  color: 'var(--fg1)',
  border: '1px solid var(--border)',
}

const pageBtnActive = {
  background: 'var(--accent)',
  color: 'var(--bg)',
}

export default function BlogsList({ data, totalPage, page, search, afterurl }) {
  return (
    <div className="flex flex-col w-full gap-10">
      {
        data.map((blog, index) => (
          <div key={index} className='flex flex-col md:flex-row w-full gap-8'>
            <div className='flex flex-col gap-2 w-full md:w-7/12 order-2 md:order-1'>
              <Link href={`/blogs/${blog.slug}`}><h1 className='text-xl md:text-2xl font-bold blog-title'>{blog.title}</h1></Link>
              {
                blog.summary ? <p className='text-base md:text-lg blog-body line-clamp-3'>{blog.summary}</p> :
                  <p className='text-base md:text-lg blog-body line-clamp-3'>{blog.description}</p>
              }
              <Link href={`/blogs/${blog.slug}`} className='text-base md:text-lg font-semibold hover:underline' style={{ color: 'var(--accent)' }}>Read More</Link>
            </div>
            <div className='flex flex-col w-full flex-1 order-1 md:order-2'>
              <Link href={`/blogs/${blog.slug}`} className='hover:scale-105 '>
                <img src={blog.image.src} alt={blog.image.alt} className='w-full h-full rounded-xl' />
              </Link>
            </div>
          </div>
        ))
      }
      {
        totalPage > 1 && (
          <div className="flex flex-row items-center justify-center gap-2">
            {
              (page > 1) && (
                <Link href={`${url}/${afterurl}?page=${page - 1}${search ? `&search=${search}` : ''}`} className='flex flex-row items-center justify-center gap-1 px-3 py-1.5 rounded-md shadow-sm transition-opacity duration-200 hover:opacity-80' style={pageBtnInactive}>
                  <span className="text-sm font-medium">Prev</span>
                </Link>
              )
            }
            {
              new Array(totalPage).fill(0).map((_, index) => (
                <Fragment key={index}>
                  {
                    (index < 2 || index > totalPage - 3 || index === page - 1) && (
                      <Link href={`${url}/${afterurl}?page=${index + 1}${search ? `&search=${search}` : ''}`} className='flex flex-row items-center justify-center gap-1 px-3 py-1.5 rounded-md shadow-sm transition-opacity duration-200 hover:opacity-80' style={index === page - 1 ? pageBtnActive : pageBtnInactive}>
                        <span className="text-sm font-medium">{index + 1}</span>
                      </Link>
                    )

                  }
                  {
                    (index === 2 && index !== page - 1 && totalPage > 4) && (
                      <span className="text-sm font-medium" style={{ color: 'var(--fg4)' }}>...</span>
                    )
                  }
                  {
                    (index === totalPage - 3 && index !== page - 1 && totalPage > 4) && (
                      <span className="text-sm font-medium" style={{ color: 'var(--fg4)' }}>...</span>
                    )
                  }
                </Fragment>
              ))
            }
            {
              (page < totalPage) && (
                <Link href={`${url}/${afterurl}?page=${page + 1}${search ? `&search=${search}` : ''}`} className='flex flex-row items-center justify-center gap-1 px-3 py-1.5 rounded-md shadow-sm transition-opacity duration-200 hover:opacity-80' style={pageBtnInactive}>
                  <span className="text-sm font-medium">Next</span>
                </Link>
              )
            }
          </div>
        )
      }
    </div>
  )
}
