import React from 'react'
import { sora } from '@/lib/fonts-blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import parse from 'html-react-parser'
import SideBar from '@/components/blogs/SideBar'
import JsonLd from '@/components/JsonLd'
import { AiFillFacebook, AiFillRedditCircle } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { BiLogoWhatsapp } from 'react-icons/bi'
import CodeBlockViewer from '@/components/blogs/CodeBlockViewer'
import { getPost, sortedBlogs } from '@/lib/blog-queries'
import { SITE_URL, TWITTER_HANDLE, metaDescription, withBrand } from '@/lib/site'

export function generateStaticParams() {
  return sortedBlogs().map((blog) => ({ slug: blog.slug }))
}

export async function generateMetadata({ params }) {
  const data = getPost(params.slug)
  if (!data) return { title: 'Not found', robots: { index: false, follow: false } }
  const { blog } = data
  const description = metaDescription(blog.description || blog.summary)
  const title = withBrand(blog.title)
  const canonical = `${SITE_URL}/blogs/${blog.slug}`
  const image = blog.image?.src
    ? [{ url: blog.image.src, alt: blog.image.alt || blog.title }]
    : undefined
  return {
    title,
    description,
    keywords: blog.tags,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      images: image,
      url: canonical,
      type: 'article',
      publishedTime: new Date(blog.date).toISOString(),
      authors: [blog.owner || 'Rohit Bhatt'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [blog.image.src] : undefined,
      creator: TWITTER_HANDLE,
    },
  }
}

function fetchPosts(slug) {
  return getPost(slug)
}

function BlogImage({ src, alt, priority = false, className = 'w-full rounded-lg h-auto' }) {
  return (
    <img
      src={src}
      alt={alt || ''}
      className={className}
      draggable={false}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'low'}
    />
  )
}

const longdateConvert = (date) => {
  const d = new Date(date)
  const month = d.toLocaleString('default', { month: 'long' })
  return `${d.getDate()}-${month}-${d.getFullYear()}`
}

export default async function page({ params }) {
  const { slug } = params
  const data = fetchPosts(slug)
  if (!data) notFound()
  const canonical = `${SITE_URL}/blogs/${data.blog.slug}`
  const shareUrl = encodeURIComponent(canonical)
  const shareTitle = encodeURIComponent(data.blog.title)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: data.blog.title,
        description: metaDescription(data.blog.description || data.blog.summary),
        image: data.blog.image?.src,
        datePublished: data.blog.date,
        author: { '@id': `${SITE_URL}/#person`, name: data.blog.owner || 'Rohit Bhatt' },
        publisher: { '@id': `${SITE_URL}/#person` },
        mainEntityOfPage: canonical,
        keywords: (data.blog.tags || []).join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Blogs', item: `${SITE_URL}/blogs` },
          ...(data.category ? [{ '@type': 'ListItem', position: 2, name: data.category.name, item: `${SITE_URL}/categories/${data.category.slug}` }] : []),
          { '@type': 'ListItem', position: data.category ? 3 : 2, name: data.blog.title, item: canonical },
        ],
      },
    ],
  }
  return (
    <>
      <JsonLd data={jsonLd} />
      <main className={`relative flex min-h-screen blog-section flex-col items-center mt-16 ${sora.className}`}>
        <div className='flex flex-col md:flex-row w-full gap-8 px-2 py-12 md:px-10 lg:px-20 xl:px-40'>
          <section className="flex flex-col w-full gap-5 justify-center md:w-8/12 overflow-x-hidden break-words">
            <div className="flex flex-col justify-center w-full border-y-2 py-2 flex-1 gap-2 md:gap-5" style={{ borderColor: 'var(--border)' }}>
              <nav aria-label="Breadcrumb" className='text-left text-base' style={{ color: 'var(--fg3)' }}>
                <Link href={`/blogs`}>Blogs</Link>
                {data.category && <> / <Link href={`/categories/${data.category.slug}`}>{data.category.name}</Link></>}
                {' / '}<Link href={`/blogs/${data.blog.slug}`}>{data.blog.title}</Link>
              </nav>
            </div>
            <div className="flex flex-col justify-center flex-1 gap-2">
              <h1 className="text-xl md:text-3xl font-bold text-left blog-title">{data.blog.title}</h1>
              <p className="text-xs md:text-sm text-left" style={{ color: 'var(--fg3)' }}> Posted at {longdateConvert(data.blog.date)} / Written by {data.blog.owner}</p>
            </div>
            <div className="flex flex-col justify-center flex-1 gap-2">
              <div className="flex flex-col justify-center flex-1 gap-2">
                <BlogImage src={data.blog.image.src} alt={data.blog.image.alt || data.blog.title} priority />
              </div>
              {data.blog.summary &&
                <div className="flex flex-col justify-center flex-1 gap-2 rounded-lg blog-panel p-4">
                  <h2 className="text-lg md:text-xl font-bold text-left blog-title">30-sec summary</h2>
                  <p className="text-base md:text-lg font-light text-left blog-body">{parse(data.blog.summary)}</p>
                </div>}
              <section className="sectionAnchor flex flex-col justify-center flex-1 gap-7 rounded-lg  p-4">
                {
                  (data.blog.sections ?? []).map((section, index) => (
                    <div key={index} className="flex flex-col justify-center flex-1 gap-1">
                      {
                        section.h1 && <h2 className="text-lg md:text-xl font-bold text-left anchor-tag blog-title">{parse(section.h1)}</h2>
                      }
                      {
                        section.h2 && <h3 className="text-base md:text-lg font-semibold text-left anchor-tag" style={{ color: 'var(--accent)', opacity: 0.9 }}>{parse(section.h2)}</h3>
                      }
                      {
                        section.p && <p className="text-base md:text-lg font-light anchor-tag text-left blog-body">{parse(section.p)}</p>
                      }
                      {
                        section.list && <ul className={`text-base md:text-lg flex flex-col gap-2 font-light text-left anchor-tag ${section.p ? 'pt-5' : ''}`}>
                          {
                            section.list.map((listItem, index3) => (
                              <li key={index3} className='blog-body flex flex-row gap-2'>
                                <span className='font-semibold select-none' style={{ color: 'var(--accent)' }}>{index3 + 1}.</span>
                                <span className='overflow-x-hidden'>
                                  {
                                    listItem.h1 && <span className='font-semibold' style={{ color: 'var(--accent)' }}>{parse(listItem.h1)}: </span>
                                  }
                                  {listItem.p ? parse(listItem.p) : null}</span>
                              </li>
                            ))
                          }
                        </ul>
                      }
                      {
                        section.image && <div className="flex flex-col justify-center self-center gap-1 pt-5">
                          <BlogImage src={section.image.src} alt={section.image.alt || section.image.caption || ''} />
                          {
                            section.image.caption && <p className="text-xs md:text-sm font-thin text-center anchor-tag" style={{ color: 'var(--fg3)' }}>“ {parse(section.image.caption)} ”</p>
                          }
                        </div>
                      }
                      {
                        section.html &&
                        <>
                          {
                            section.html.type === 'code' && <div className="flex flex-col justify-center self-center gap-1 w-full">
                              <CodeBlockViewer code={section.html.value} language={section.html.language} />
                            </div>
                          }
                          {
                            section.html.type === 'html' && <div className="blog-html anchor-tag blog-body w-full">{parse(section.html.value)}</div>
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
                                    subSection.h1 && <h2 className="text-lg md:text-xl font-bold text-left anchor-tag blog-title">{parse(subSection.h1)}</h2>
                                  }
                                  {
                                    subSection.h2 && <h3 className="text-base md:text-lg font-semibold text-left anchor-tag" style={{ color: 'var(--accent)', opacity: 0.9 }}>{parse(subSection.h2)}</h3>
                                  }
                                  {
                                    subSection.p && <p className="text-base md:text-lg font-light text-left anchor-tag blog-body">{parse(subSection.p)}</p>
                                  }
                                  {
                                    subSection.list && <ul className={`text-base md:text-lg flex flex-col gap-2 font-light text-left anchor-tag ${subSection.p ? 'pt-5' : ''}`}>
                                      {
                                        subSection.list.map((listItem, index3) => (
                                          <li key={index3} className='blog-body flex flex-row gap-2'>
                                            <span className='font-semibold select-none' style={{ color: 'var(--accent)' }}>{index3 + 1}.</span>
                                            <span>
                                              {
                                                listItem.h1 && <span className='font-semibold' style={{ color: 'var(--accent)' }}>{parse(listItem.h1)}: </span>
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
                                      <BlogImage src={subSection.image.src} alt={subSection.image.alt || subSection.image.caption || ''} />
                                      {
                                        subSection.image.caption && <p className="text-xs md:text-sm font-thin text-center anchor-tag" style={{ color: 'var(--fg3)' }}>“ {parse(subSection.image.caption)} ”</p>
                                      }
                                    </div>
                                  }
                                  {
                                    subSection.html &&
                                    <>
                                      {
                                        subSection.html.type === 'code' && <div className="flex flex-col justify-center self-center gap-1 w-full">
                                          <CodeBlockViewer code={subSection.html.value} language={subSection.html.language} />
                                        </div>
                                      }
                                      {
                                        subSection.html.type === 'html' && <div className="blog-html anchor-tag blog-body w-full">{parse(subSection.html.value)}</div>
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
              <div className="flex flex-col gap-2 rounded-lg blog-panel p-4">
                <h2 className="text-lg md:text-xl font-bold text-left blog-title">About the author</h2>
                <p className="text-base md:text-lg font-light text-left blog-body anchor-tag">
                  <Link href="/about">Rohit Bhatt</Link> is a software developer in India and a Forward Deployed Engineer at ekincare. He builds full-stack products and production generative AI with Ruby on Rails, React, LangChain, and Gemini. <Link href="/work">Selected projects</Link>.
                </p>
              </div>
              <div className="flex flex-col justify-center flex-1 gap-2 border-y-2 py-5" style={{ borderColor: 'var(--border)' }}>
                <h2 className="text-lg md:text-xl font-bold text-center" style={{ color: 'var(--fg2)' }}>To share this blog on social media click on the icons below :</h2>
                <div className="flex flex-row justify-center gap-2">
                  <Link href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                    <AiFillFacebook className="w-8 h-8 rounded-lg hover:opacity-80" style={{ color: 'var(--fg2)' }} />
                  </Link>
                  <Link href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X">
                    <RiTwitterXFill className="w-8 h-8 rounded-lg hover:opacity-80" style={{ color: 'var(--fg2)' }} />
                  </Link>
                  <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                    <BsLinkedin className="w-8 h-8 rounded-lg hover:opacity-80" style={{ color: 'var(--fg2)' }} />
                  </Link>
                  <Link href={`https://api.whatsapp.com/send?text=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
                    <BiLogoWhatsapp className="w-8 h-8 rounded-lg hover:opacity-80" style={{ color: 'var(--fg2)' }} />
                  </Link>
                  <Link href={`https://www.reddit.com/submit?url=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Reddit">
                    <AiFillRedditCircle className="w-8 h-8 rounded-lg hover:opacity-80" style={{ color: 'var(--fg2)' }} />
                  </Link>
                </div>
              </div>
            </div>
            {
              data.blog.advertisements?.show && (
                <div className="flex flex-col md:flex-row justify-center flex-1 gap-2 border-b-2 py-5" style={{ borderColor: 'var(--border)' }}>
                  {data.blog.advertisements?.image?.src && (
                    <div className="flex flex-col justify-center self-center gap-2 rounded-lg w-full p-4">
                      <Link href={data.blog.advertisements.image.link ?? '#'} target="_blank" rel="noopener noreferrer">
                        <BlogImage src={data.blog.advertisements.image.src} alt={data.blog.advertisements.image.alt ?? ''} />
                      </Link>
                    </div>
                  )}
                </div>
              )
            }
            {
              data.blog.referBlog?.show && data.blog.referBlog?.slug && data.blog.referBlog?.title && (
                <div className="flex flex-col justify-center flex-1 gap-2 rounded-lg blog-panel p-4">
                  <p className="text-base md:text-lg text-left font-bold blog-body"> Also Read : <Link href={`/blogs/${data.blog.referBlog.slug}`} className='font-light hover:underline' style={{ color: 'var(--accent)' }}>{data.blog.referBlog.title}</Link>
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
