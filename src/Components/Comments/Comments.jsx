'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useSWR, { mutate } from 'swr'
import { useSession } from 'next-auth/react'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if(!res.ok){
    const error = new Error(data.message)
    throw error
  }
  return data;
}
const Comments = ({postSlug}) => {

  const {status} = useSession();
  const {data,mutate,isloading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)
  const [desc,setDesc] = useState('')
  const handleSubmit = async () =>{
    await fetch('/api/comments',{
      method: 'POST',
      body: JSON.stringify({desc,postSlug}),
    })
    mutate();
  }
  return (
    <>
    <div className=''>
        <h2 className='text-3xl font-semibold font-playfair'>Comments</h2>

        {status === 'authenticated' ? (
              <div className='flex flex-col my-3'>
              <textarea type='text' className='h-[100px] w-[300px] lg:w-[550px] border italic text-sm p-2 outline-none bg-white  text-black rounded ' placeholder='Write a Comment...' onChange={(e)=> setDesc(e.target.value)}></textarea>
  
              <div className='my-5'>
              <button className='bg-black w-[100px] h-[50px] text-white border rounded' onClick={handleSubmit} >Send</button>
              </div>
          </div>
        ) :(
          <Link href='/login'>Login to Writa a Comment</Link>
        )}

        
        {
        
        isloading ? 'loading' : data?.map  ((item)=>(
          <>
          <div className='flex gap-2 m-2' key={item._id}>
                {item?.user?.image && (
                  <Image src={item.user.image} className='w-[45px] h-[45px] rounded-full' width={800} height={800}alt='' />
                )}
              <div className='flex flex-col'>
                  <span className='text-lg font-bold'>{item.user.name}</span>
                  <span className='text-sm font-semibold'>{item.createdAt}</span>
              </div>    
              
        </div>
        <div className=' ml-14 mt-1'>
          <p className='text-[14px]'>{item.desc}</p>
        </div>
            </>
        ) )}
        
    </div>
    </>
  )
}

export default Comments