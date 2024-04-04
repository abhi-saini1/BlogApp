
import React from 'react'

import Gallery from '@/Components/Gallery/Gallery'
import Banner from '@/Components/Banner/Banner'
import CategoryList from '@/Components/CategoryList/CategoryList'

const Home = () => {

  return (
    <>
      
      <div className='Container'>
      <Banner/>
      <CategoryList/>
      {/* Gallery */}
      <Gallery/>
      </div>
      
    </>
  )
}

export default Home