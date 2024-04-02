import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex-col mx-auto flex items-center justify-center py-20 '>
      <div className='flex text-center gap-4 mb-5 '>
        <Link href='' className='transition hover:scale-125 duration-500 ease-out'>
          <Image src='/facebook.png' width={32} height={32} alt=''/>
        </Link>
        <Link href='' className='transition hover:scale-125 duration-500 ease-out'>
          <Image src='/github.png' width={32} height={32} alt=''/>
        </Link>
        <Link href='' className='transition hover:scale-125 duration-500 ease-out'>
          <Image src='/instagram.png' width={32} height={32} alt=''/>
        </Link>
        <Link href='' className='transition hover:scale-125 duration-500 ease-out'>
          <Image src='/linkedin.png' width={32} height={32} alt=''/>
        </Link>
      </div>
      <div className='text-center'>
          © 2024 Acme Inc. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer