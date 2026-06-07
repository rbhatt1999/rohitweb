'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

export default function Search({ search = false, afterurl = false }) {
  const router = useRouter()
  const [searchText, setSearchText] = React.useState(search || '')

  const handleSearch = () => {
    const base = `/${afterurl ? afterurl : 'blogs'}`
    router.push(searchText.length > 0 ? `${base}?search=${searchText}` : base)
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search blogs…"
        className="bs-input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={(e) => { if (e.key === 'Enter') handleSearch() }}
      />
      <button type="button" className="bs-btn" aria-label="Search" onClick={handleSearch}>
        <BsSearch />
      </button>
    </>
  )
}
