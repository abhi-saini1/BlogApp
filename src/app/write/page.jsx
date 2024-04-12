'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image';
import { CiCirclePlus } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";
import { GoVideo } from "react-icons/go";
import { IoCloudUploadOutline } from "react-icons/io5";
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const WritePage = () => {
    const [open,setOpen] = useState(false);
    
    const {status} = useSession()
    const router = useRouter();

    if(status === "loading"){
        return <div className="">Loading...</div>
    }
    if(status === "authenticated"){
        router.push('/write')
    }
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="h-full py-20 flex flex-col  lg:flex-row px-4 md:px-20 sm:px-12 lg:px-20 gap-3">
                {/*  */}
                <div className='h-1/2 lg:h-full lg:w-full flex flex-col'>
                    <input type='text' className='w-1/2 h-[50px] border border-gray-300 outline-none focus-within:to-blue-300 text-2xl bg-transparent' placeholder='Title' />
                
                        <div className='flex items-center'>
                            <div className='my-3 flex cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' onClick={()=> setOpen(!open)}>
                                <CiCirclePlus className='w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] '/>
                            </div>
                            {
                                open && (
                                        <>
                                        <div className='m-2 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                                            <IoCloudUploadOutline className='w-[20px] h-[20px]'/>
                                        </div>
                                        <div className='m-2 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                                            <GrGallery className='w-[20px] h-[20px]'/>
                                        </div>
                                        <div className='m-2 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                                            <GoVideo className='w-[20px] h-[20px]'/>
                                        </div>
                                        </>
                                    )
                            }

                        </div>
                            <textarea className=' w-10/12 h-60 border border-gray-300 outline-none focus-within:to-blue-300 text-sm italic bg-transparent' placeholder='Tell your Story...'></textarea>

                                <Link href='' className='flex items-center my-3'>
                                <button type='submit' className='p-4 rounded-lg ring-black bg-black text-white'>Submit</button>
                                </Link>
                </div>





                {/* image  */}
                <div className=''>
                    <Image src='/write_page.png' className='object-contain rounded-lg' width={1000} height={1000} alt='' />
                </div>
            </div>
        </motion.div>
    )
}

export default WritePage