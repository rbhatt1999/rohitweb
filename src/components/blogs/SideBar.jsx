import React from 'react'
import SidebarClient from './SidebarClient'
import { sidebarData } from '@/lib/blog-queries'

export default function SideBar({ search, afterurl }) {
  const data = sidebarData()
  return (
    <SidebarClient data={data} search={search} afterurl={afterurl} />
  )
}
