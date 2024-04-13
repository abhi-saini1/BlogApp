// 'use client';
import React from 'react'
import {motion} from 'framer-motion'
import CardItems from '@/Components/CardItems/CardItems';
import SideMenu from '@/Components/SideMenu/SideMenu';
const BlogPage = ({searchParams}) => {
  const page = parseInt(searchParams.page) || 1;
  const {cat} = searchParams;
  return (
  //   <motion.div
  //   className="h-full"
  //   initial={{ y: "-200vh" }}
  //   animate={{ y: 0 }}
  //   transition={{ duration: 1 }}
  // >
     <div className="">
        <div className='Content'>
          <h2> Blog</h2>
        <CardItems page={page} cat={cat} />
        <SideMenu/>
        </div>
     </div>
  //  </motion.div>
  )
}

export default BlogPage