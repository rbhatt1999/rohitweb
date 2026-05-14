'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsSearch } from 'react-icons/bs';

export default function Search({search = false, afterurl = false}) {
    const router = useRouter()
    const [searchText, setSearchText] = React.useState(search || '')
    const handleSearch = () => {
        if(searchText.length > 0) {
            router.push(`/${afterurl? afterurl : 'blogs'}?search=${searchText}`)
        }
        else {
            router.push(`/${afterurl? afterurl : 'blogs'}`)
        }
    }
    return (
        <>
            <input type="text" placeholder="Search" className=" flex-1 px-2 py-1 rounded-md shadow-md drop-shadow-md focus:outline-none" style={{ background: 'var(--surface)', color: 'var(--fg1)', border: '1px solid var(--border)' }} value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyUp={(e) => {if(e.key === 'Enter') handleSearch()}} />
            <button type='button' className="w-10 h-10 px-2 py-1 rounded-md shadow-md drop-shadow-md focus:outline-none" style={{ background: 'var(--accent)', color: 'var(--bg)' }} onClick={handleSearch} >
                <BsSearch className="text-xl md:text-2xl" style={{ color: 'var(--bg)' }} />
            </button>
        </>
    )
}
