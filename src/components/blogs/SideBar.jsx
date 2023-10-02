import React from 'react'
import url from '@/utils/url'
import { notFound } from 'next/navigation'
import SidebarClient from './SidebarClient'

const getrecentfiveblogs = async () => {
  let res
  try {
    res = await fetch(`${url}/api/blogs/recentfive_mothlyarchive_category`, { cache: 'no-cache' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }
  catch (err) {
    notFound()
  }
  return res.json()
}


export default async function SideBar({search, afterurl}) {
  const data = await getrecentfiveblogs();
  return (
    <SidebarClient data={data} search={search} afterurl={afterurl} />
  )
}
