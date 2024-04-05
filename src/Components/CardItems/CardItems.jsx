import React from 'react'
import Card from '../Card/Card'

const CardItems = () => {
  return (
    <div className='h-full py-1 md:py-16 px-4 md:px-20 sm:px-12 lg:px-10 '>
        <div className=''>
            <div className=''>
                <h2 className='lg:text-5xl text-3xl font-bold font-playfair'>Recent Posts</h2>
            </div>

            <div className='py-3 lg:w-[800px] sm:w-1/1'>
                <Card/>
            </div>
        </div>
    </div>
  )
}

export default CardItems