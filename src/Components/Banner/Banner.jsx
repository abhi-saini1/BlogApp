"use client"
import React from 'react';
import {motion} from 'framer-motion'
import Image from 'next/image';

const Banner = () => {
  return (
     <motion.div className='h-full' initial={{y:'-200vh'}} animate={{y:0}} transition={{duration: 1}}>
        <div className='h-full  flex flex-col  lg:flex-row px-4 md:px-20 sm:px-12 lg:px-20 '>
            {/* text container  */}
           <div className='h-1/2 lg:h-full text-center lg:w-1/2 flex flex-col items-center justify-center py-24'>
              <motion.div className=' font-playfair text-4xl md:text-5xl  lg:text-7xl font-bold  mb-5 text-start'
              >
              Welcome to the Blog
            </motion.div>
            <p className='md:text-xl  mb-5 text-start'>
              Exploring the would, one story at a time. Join us as we uncover hidden gems,share travel tips,and inspire your next adventure.
            </p>
            <div className='w-full lg:text-start'>
            <button className='p-4 rounded-lg ring-black bg-black text-white'>Explore the Work </button>
          </div>
        </div>

        <div className='lg:py-20'>
          <Image src='/hero.jpg' className='object-contain' width={700} height={700} alt=''/>
        </div>
    </div> 
    </motion.div> 
  )
}

export default Banner