import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Comments = () => {
  const status = 'authenticated'
  return (
    <div className=''>
        <h2 className='text-3xl font-semibold font-playfair'>Comments</h2>

        {status === 'authenticated' ? (
              <div className='flex flex-col my-3'>
              <textarea type='text' className='h-[100px] w-[300px] lg:w-[550px] border italic text-sm p-2 outline-none bg-white  text-black rounded ' placeholder='Write a Comment...'></textarea>
  
              <div className='my-5'>
              <button className='bg-black w-[100px] h-[50px] text-white border rounded'>Send</button>
              </div>
          </div>
        ) :(
          <Link href='/login'>Login to Writa a Comment</Link>
        )}

        <div>
        <div className='flex items-center gap-2'>
            <Image src='/avtar.png' className='w-[75px] h-[75px]' width={800} height={800}alt='' />
                <div className='flex flex-col'>
                    <span className='text-1xl font-semibold'>Tanya Sharma</span>
                    <span className='text-sm '>01.03.2024</span>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Comments