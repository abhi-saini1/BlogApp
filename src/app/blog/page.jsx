'use client';
import React from 'react'
import {motion} from 'framer-motion'
import CardItems from '@/Components/CardItems/CardItems';
import SideMenu from '@/Components/SideMenu/SideMenu';
const BlogPage = () => {
  return (
    <motion.div
    className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: 0 }}
    transition={{ duration: 1 }}
  >
     <div className="">
        <div className='Content'>
        <CardItems/>
        <SideMenu/>
        </div>
     </div>
  </motion.div>
  )
}

export default BlogPage