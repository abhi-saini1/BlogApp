'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Pagination = ({page}) => {
  const router = useRouter();
  return (
    <div className='py-5 lg:py-0 mb-5'>
        <div className="flex items-center justify-between">
        <button className="bg-black p-4 text-white font-semibold" onClick={()=> router.push(`?page=${page - 1}`)}>Previous page</button>
        <button className="bg-black p-4 text-white font-semibold" onClick={()=> router.push(`?page=${page + 1}`)}>Next Page</button>
        </div>
    </div>
  )
}

export default Pagination