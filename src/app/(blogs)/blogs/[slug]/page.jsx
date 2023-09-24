import React from 'react'
import { Sora } from 'next/font/google'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import parse from 'html-react-parser'
import url from '@/utils/url'
import SideBar from '@/components/blogs/SideBar'
import { AiFillFacebook, AiFillRedditCircle } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { BiLogoWhatsapp } from 'react-icons/bi'
import { redirect } from 'next/navigation'
import CodeBlockViewer from '@/components/blogs/CodeBlockViewer'


const sora = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export async function generateMetadata({ params }) {
  const { slug } = params
  const data = await fetchPosts(slug)
  return {
    title: `${data.blog.title}`,
    description: data.blog.description,
    images: [
      {
        url: data.blog.image.src,
        width: 800,
        height: 500,
        alt: data.blog.image.alt,
      },
    ],
    url: `${url}/blogs/${data.blog.slug}`,
    type: 'article',
    keywords: data.blog.tags,
    openGraph: {
      title: `${data.blog.title}`,
      description: data.blog.description,
      images: [
        {
          url: data.blog.image.src,
          width: 730,
          height: 410,
          alt: data.blog.image.alt,
        },
      ],
      url: `${url}/blogs/${data.blog.slug}`,
      type: 'article',
      article: {
        publishedTime: new Date(data.blog.date).toISOString(),
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.blog.title}`,
      description: data.blog.description,
      images: [data.blog.image.src],
      creator: '@Rohit_Bhatt_'
    },
    alternates: {
      canonical: `${url}/blogs/${data.blog.slug}`,
    },
  }
}

export const fetchPosts = async (slug) => {
  let res;
  try {
    res = await fetch(`${url}/api/blogs/${slug}`, { cache: 'no-cache' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }
  catch (err) {
    redirect('/blogs')
  }
  return res.json()
}

const longdateConvert = (date) => {
  const d = new Date(date)
  const month = d.toLocaleString('default', { month: 'long' })
  return `${d.getDate()}-${month}-${d.getFullYear()}`
}

export default async function page({ params }) {
  const { slug } = params
  const data = await fetchPosts(slug)
  return (
    <>
      <main className={`relative flex min-h-screen blog-section flex-col items-center mt-16 ${sora.className} overflow-x-hidden`}>
        <div className='flex flex-col md:flex-row w-full gap-8 px-2 py-12 md:px-40 items-start'>
          <section className="flex flex-col w-full gap-5 justify-center md:w-8/12">
            <div className="flex flex-col justify-center w-full border-y-2 border-stone-200/5  py-2 flex-1 gap-2 md:gap-5">
              <span className='text-left text-base text-white'>
                <Link href={`/blogs`}>Blogs</Link> / <Link href={`/categories/${data.category.slug}`}>{data.category.name}</Link> / <Link href={`/blogs/${data.blog.slug}`}>{data.blog.title}</Link>
              </span>
            </div>
            <div className="flex flex-col justify-center flex-1 gap-2">
              <h1 className="text-xl md:text-3xl font-bold text-left text-blue-400">{data.blog.title}</h1>
              <p className="text-xs md:text-sm text-left text-white"> Posted at {longdateConvert(data.blog.date)} / Written by {data.blog.owner}</p>
            </div>
            <div className="flex flex-col justify-center flex-1 gap-2">
              <div className="flex flex-col justify-center flex-1 gap-2">
                <img src={data.blog.image.src} alt={data.blog.image.alt} className="w-full rounded-lg h-auto" draggable={false} />
              </div>
              {data.blog.summary &&
                <div className="flex flex-col justify-center flex-1 gap-2 rounded-lg bg-neutral-300/5 p-4">
                  <h2 className="text-lg md:text-xl font-bold text-left text-blue-400">30-sec summary</h2>
                  <p className="text-base md:text-lg font-light text-left text-white">{parse(data.blog.summary)}</p>
                </div>}
              <section className="sectionAnchor flex flex-col justify-center flex-1 gap-7 rounded-lg  p-4">
                {
                  data.blog.sections.map((section, index) => (
                    <div key={index} className="flex flex-col justify-center flex-1 gap-1">
                      {
                        section.h1 && <h2 className="text-lg md:text-xl font-bold text-left anchor-tag text-blue-400">{parse(section.h1)}</h2>
                      }
                      {
                        section.h2 && <h3 className="text-base md:text-lg font-semibold text-left anchor-tag text-blue-400">{parse(section.h2)}</h3>
                      }
                      {
                        section.p && <p className="text-base md:text-lg font-light anchor-tag text-left text-white">{parse(section.p)}</p>
                      }
                      {
                        section.list && <ul className="text-base md:text-lg flex flex-col gap-2 font-light text-left anchor-tag pt-5">
                          {
                            section.list.map((listItem, index3) => (
                              <li key={index3} className='text-white flex flex-row gap-2'>
                                <span className='text-blue-400 font-semibold select-none'>{index3 + 1}.</span>
                                <span>
                                  {
                                    listItem.h1 && <span className='text-blue-400 font-semibold'>{parse(listItem.h1)}: </span>
                                  }
                                  {parse(listItem.p)}</span>
                              </li>
                            ))
                          }
                        </ul>
                      }
                      {
                        section.image && <div className="flex flex-col justify-center self-center gap-1 pt-5">
                          <img src={section.image.src} alt={section.image.alt} className="w-full rounded-lg h-auto" draggable={false} />
                          {
                            section.image.caption && <p className="text-xs md:text-sm font-thin text-center anchor-tag text-white">“ {parse(section.image.caption)} ”</p>
                          }
                        </div>
                      }
                      {
                        section.html &&
                        <>
                          {
                            section.html.type === 'code' && <div className="flex flex-col justify-center self-center gap-1 w-full pt-5">
                              <CodeBlockViewer code={section.html.value} language={section.html.language} />
                            </div>
                          }
                        </>
                      }
                      {
                        section.subSections && (
                          <section className="flex flex-col justify-center flex-1 gap-5 rounded-lg pt-5">
                            {
                              section.subSections.map((subSection, index2) => (
                                <div key={index2} className="flex flex-col justify-center flex-1 gap-1">
                                  {
                                    subSection.h1 && <h2 className="text-lg md:text-xl font-bold text-left anchor-tag text-blue-400">{parse(subSection.h1)}</h2>
                                  }
                                  {
                                    subSection.h2 && <h3 className="text-base md:text-lg font-semibold text-left anchor-tag text-blue-400">{parse(subSection.h2)}</h3>
                                  }
                                  {
                                    subSection.p && <p className="text-base md:text-lg font-light text-left anchor-tag text-white">{parse(subSection.p)}</p>
                                  }
                                  {
                                    subSection.list && <ul className="text-base md:text-lg flex flex-col gap-2 font-light text-left anchor-tag pt-5">
                                      {
                                        subSection.list.map((listItem, index3) => (
                                          <li key={index3} className='text-white flex flex-row gap-2'>
                                            <span className='text-blue-400 font-semibold select-none'>{index3 + 1}.</span>
                                            <span>
                                              {
                                                listItem.h1 && <span className='text-blue-400 font-semibold'>{parse(listItem.h1)}: </span>
                                              }
                                              {
                                                listItem.p && parse(listItem.p)
                                              }
                                              </span>
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  }
                                  {
                                    subSection.image && <div className="flex flex-col justify-center self-center gap-1 pt-5">
                                      <img src={subSection.image.src} alt={subSection.image.alt} className="w-full rounded-lg h-auto" draggable={false} />
                                      {
                                        subSection.image.caption && <p className="text-xs md:text-sm font-thin text-center anchor-tag text-white">“ {parse(subSection.image.caption)} ”</p>
                                      }
                                    </div>
                                  }
                                  {
                                    subSection.html &&
                                    <>
                                      {
                                        subSection.html.type === 'code' && <div className="flex flex-col justify-center self-center gap-1 w-full pt-5">
                                          <CodeBlockViewer code={subSection.html.value} language={subSection.html.language} />
                                        </div>
                                      }
                                    </>
                                  }
                                </div>
                              ))
                            }
                          </section>
                        )
                      }
                    </div>
                  )
                  )
                }
              </section>
              <div className="flex flex-col justify-center flex-1 gap-2 border-y-2 border-neutral-500 py-5">
                <h2 className="text-lg md:text-xl font-bold text-center text-white">To share this blog on social media click on the icons below :</h2>
                <div className="flex flex-row justify-center gap-2">
                  <Link href={`https://www.facebook.com/sharer/sharer.php?u=${url}/blogs/${data.blog.slug}`} target="_blank" rel="noopener noreferrer">
                    <AiFillFacebook className="w-8 h-8 rounded-lg text-white" />
                  </Link>
                  <Link href={`https://twitter.com/intent/tweet?url=${url}/blogs/${data.blog.slug}&text=${data.blog.title}`} target="_blank" rel="noopener noreferrer">
                    <RiTwitterXFill className="w-8 h-8 rounded-lg text-white" />
                  </Link>
                  <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}/blogs/${data.blog.slug}&title=${data.blog.title}&summary=${data.blog.summary}&source=Peepoye`} target="_blank" rel="noopener noreferrer">
                    <BsLinkedin className="w-8 h-8 rounded-lg text-white" />
                  </Link>
                  <Link href={`https://api.whatsapp.com/send?text=${url}/blogs/${data.blog.slug}`} target="_blank" rel="noopener noreferrer">
                    <BiLogoWhatsapp className="w-8 h-8 rounded-lg text-white" />
                  </Link>
                  <Link href={`https://www.reddit.com/submit?url=${url}/blogs/${data.blog.slug}&title=${data.blog.title}`} target="_blank" rel="noopener noreferrer">
                    <AiFillRedditCircle className="w-8 h-8 rounded-lg text-white" />
                  </Link>
                </div>
              </div>
            </div>
            {
              data.blog.advertisements.show && (
                <div className="flex flex-col md:flex-row justify-center flex-1 gap-2 border-b-2 border-neutral-500 py-5">
                  {data.blog.advertisements.image &&
                    <div className="flex flex-col justify-center self-center gap-2 rounded-lg w-full p-4">
                      <Link href={data.blog.advertisements.image.link} target="_blank" rel="noopener noreferrer">
                        <img src={data.blog.advertisements.image.src} alt={data.blog.advertisements.image.alt} className="w-full rounded-lg h-auto" draggable={false} />
                      </Link>
                    </div>
                  }
                </div>
              )
            }
            {
              data.blog.referBlog.show && (
                <div className="flex flex-col justify-center flex-1 gap-2 rounded-lg bg-neutral-300/5 p-4">
                  <p className="text-base md:text-lg text-left font-bold text-white"> Also Read : <Link href={`/blogs/${data.blog.referBlog.slug}`} className='font-light hover:underline text-blue-400'>{data.blog.referBlog.title}</Link>
                  </p>
                </div>
              )
            }
          </section>
          <div className='w-full flex-1 flex flex-col relative'>
            <SideBar />
          </div>
        </div >
      </main >
    </>
  )
}
