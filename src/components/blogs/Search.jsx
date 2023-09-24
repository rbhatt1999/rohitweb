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
            <input type="text" placeholder="Search" className=" flex-1 px-2 py-1 rounded-md shadow-md drop-shadow-md bg-neutral-100/5 text-blue-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyUp={(e) => {if(e.key === 'Enter') handleSearch()}} />
            <button type='button' className="w-10 h-10 px-2 py-1 rounded-md shadow-md drop-shadow-md bg-primary-100 text-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" onClick={handleSearch} >
                <BsSearch className="text-xl md:text-2xl text-white" />
            </button>
        </>
    )
}
