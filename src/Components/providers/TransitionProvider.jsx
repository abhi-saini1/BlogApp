'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'
// import React, { Children } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const TransitionProvider = ({children}) => {
    const pathname = usePathname();
  return (
    <AnimatePresence mode='wait'>
        <div key={pathname}>

            <motion.div className='h-screen w-screen fixed bg-black rouded-b-[100px] z-40'
            animate={{height: '0vh'}}
            exit={{height: '140vh'}}
            transition={{duration:0.5, ease: 'easeOut'}}>

            </motion.div>
            <motion.div
                className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
             >
          {pathname.substring(1)}
        </motion.div>
            <motion.div className='h-screen w-screen fixed bg-black  rounded-t-[100px] z-30'
            initial={{height: '140vh'}}
            animate={{height: '0vh'}}
            transition={{delay: 0.5}}>

            </motion.div>
            <div className='h-24'>
                <Header/>
              
            </div>
            <div className='h-[calc(100vh-6rem)]'>
                {children}
            </div>
        </div>
    </AnimatePresence>
  )
}

export default TransitionProvider