
import React from 'react'

import Gallery from '@/Components/Gallery/Gallery'
import Banner from '@/Components/Banner/Banner'

const Home = () => {

  return (
    <>
      
      <div className='Container'>
      <Banner/>
      {/* Gallery */}
      <Gallery/>
      </div>
      
    </>
  )
}

export default Home