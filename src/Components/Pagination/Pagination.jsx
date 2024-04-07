import React from 'react'

const Pagination = () => {
  return (
    <div className='py-5 lg:py-0 mb-5'>
        <div className="flex items-center justify-between">
        <button className="bg-black p-4 text-white font-semibold">Previous page</button>
        <button className="bg-black p-4 text-white font-semibold">Next Page</button>
        </div>
    </div>
  )
}

export default Pagination