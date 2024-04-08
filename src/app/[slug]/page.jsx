'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Comments from '@/Components/Comments/Comments'


const SinglePage = () => {
   
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full py-20 flex flex-col  lg:flex-row px-4 md:px-20 sm:px-12 lg:px-20 gap-3">
        {/* about text */}
        <div className="h-1/2 lg:h-full lg:w-full flex flex-col">
          <div className='flex items-center gap-2'>
            <Image src='/avtar.png' className='w-[75px] h-[75px]' width={800} height={800}alt='' />
                <div className='flex flex-col'>
                    <span className='text-1xl font-semibold'>Tanya Sharma</span>
                    <span className='text-sm '>01.03.2024</span>
                </div>
          </div>
          <p className='text-sm pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sapiente possimus dolorum. Modi perspiciatis error unde magni. Velit inventore, distinctio nisi ab vitae, architecto illum iste ea asperiores veritatis ratione.<br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloribus aut perspiciatis repudiandae veniam ipsum. Fugiat dolore quam corrupti, natus est, illo rem iste exercitationem sunt vitae mollitia labore quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sapiente possimus dolorum. Modi perspiciatis error unde magni. Velit inventore, distinctio nisi ab vitae, architecto illum iste ea asperiores veritatis ratione.<br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloribus aut perspiciatis repudiandae veniam ipsum. Fugiat dolore quam corrupti, natus est, illo rem iste exercitationem sunt vitae mollitia labore quia</p>
        </div>

        {/* image  */}
        <div className="">
          <Image
            src="/about1.jpg"
            className="object-contain rounded-lg"
            width={1000}
            height={1000}
            alt=""
          />
          
        </div>
      </div>

      <div className='h-full py-20  lg:flex-row px-4 md:px-20 sm:px-12 lg:px-20 gap-3'>
       
        <div className=' items-center justify-between lg:flex lg:items-center'>
        <Comments/>
        <Image src='/comments.svg' className='w-[500px] h-[500px]' alt='' width={800} height={800} />
        </div> 
      </div>

      
    </motion.div>
  )
}

export default SinglePage