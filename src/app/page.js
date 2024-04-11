
import React from 'react'

import Gallery from '@/Components/Gallery/Gallery'
import Banner from '@/Components/Banner/Banner'
import CategoryList from '@/Components/CategoryList/CategoryList'
import CardItems from '@/Components/CardItems/CardItems'
import SideMenu from '@/Components/SideMenu/SideMenu'


const Home = ({searchParams}) => {
  
  const page = parseInt(searchParams.page) || 1; 

  return (
    <>
      
      <div className='Container' >
      <Banner/>
      <CategoryList/>
        <div className='Content'>
        <CardItems page={page}/>
        <SideMenu/>
        
        </div>
      {/* Gallery */}
      <Gallery/>
      </div>
      
    </>
  )
}

export default Home;