import React from 'react'
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'



const getData = async (page,cat)=>{
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || " "}`,
  {
    cache: 'no-store',
  
  })
  if(!res.ok){
    throw new Error('failed');
  }
  return res.json();
}
const CardItems = async ({page,cat}) => {
  const {posts,count} = await getData(page,cat)

  const POST_PER_PAGE = 2

  const prev = POST_PER_PAGE * (page - 1 ) > 0;
  const next = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className='h-full py-1 md:py-16 px-4 md:px-20 sm:px-12 lg:px-10 '>
        <div className=''>
            <div className=''>
                <h2 className='lg:text-5xl text-3xl font-bold font-playfair'>Recent Posts</h2>
            </div>

            <div className='py-3 lg:w-[800px] sm:w-1/1  '>
              {posts?.map((item)=>(

                 <Card item={item} key={item._id}/>
))}
                
                
            </div>
        </div>
        <Pagination page={page} next={next} prev={prev}/>
    </div>
  )
}

export default CardItems