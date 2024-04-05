import Image from 'next/image'
import React from 'react'

const SideMenu = () => {
  return (
    <div className='h-full py-1 md:py-16 px-4 md:px-20 sm:px-12 lg:px-10 '>
         <div className=''>
            <h2 className='text-1xl lg:text-lg font-bold font-playfair'>Popular Comments</h2>
         </div>

         <div className='items-center justify-center py-6 '>
            <div className="card w-96 bg-white border text-primary-content">
                <div className="card-body">
                    <div className='flex gap-2'>
                        <div className='w-[80px]'>
                        <Image
                        src="/fashion.jpg"
                         width={800}
                        height={800}
                        alt=""
                        className="h-[50px] w-[50px] rounded-full"
                     />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-black font-semibold'>tanya</p>
                            <span className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        </div>
                    </div> 
                </div>
             </div>
             
             <div className="card w-96 bg-white border my-3 ">
                <div className="card-body">
                    <div className='flex gap-2'>
                        <div className='w-[80px]'>
                        <Image
                        src="/fashion.jpg"
                         width={800}
                        height={800}
                        alt=""
                        className="h-[50px] w-[50px] rounded-full"
                     />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-black font-semibold'>tanya</p>
                            <span className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        </div>
                    </div> 
                </div>
             </div>
             <div className="card w-96 bg-white border my-3">
                <div className="card-body">
                    <div className='flex gap-2'>
                        <div className='w-[80px]'>
                        <Image
                        src="/fashion.jpg"
                         width={800}
                        height={800}
                        alt=""
                        className="h-[50px] w-[50px] rounded-full"
                     />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-black font-semibold'>tanya</p>
                            <span className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        </div>
                    </div> 
                </div>
             </div>
             <div className="card w-96 bg-white border text-primary-content">
                <div className="card-body">
                    <div className='flex gap-2'>
                        <div className='w-[80px]'>
                        <Image
                        src="/fashion.jpg"
                         width={800}
                        height={800}
                        alt=""
                        className="h-[50px] w-[50px] rounded-full"
                     />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-black font-semibold'>tanya</p>
                            <span className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        </div>
                    </div> 
                </div>
             </div>
         </div>
    </div>
  )
}

export default SideMenu