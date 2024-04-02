import Link from 'next/link'
import React from 'react'


const AuthLinks = () => {
    // const {status} = useSession();?
  return (
    <div className='flex items-center gap-4 '>
        <Link href='/login' className='cursor-pointer'>Login</Link>
        <Link href='/write' className='cursor-pointer'>Write</Link>
        <span className='cursor-pointer' >logout</span>
    </div>
  )
}

export default AuthLinks