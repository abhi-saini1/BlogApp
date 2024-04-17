
import Image from "next/image";
import React from "react";
import Link from 'next/link'

const getData = async () =>{
  const res = await fetch('http://localhost:3000/api/categories',{
    cache: 'no-store'
  })
  if(!res.ok){
    throw new Error('failed')
  }
  return res.json();
}



const CategoryList = async () => {
  const data = await getData();

  
 
  return (
    <div className="h-full  py-1 lg:py-16 px-4 md:px-20 sm:px-12 lg:px-10 ">
      <div className="flex items-center py-4 justify-center">
        <h2 className="lg:text-5xl text-3xl font-bold font-playfair">
          Popular Categories
        </h2>
      </div>
      <div className="py-8 grid  sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-6 gap-4  items-center justify-center">
       
          {data?.map((item)=>(
            <Link href='' key={item._id} >
            <div className={`flex items-center justify-center  capitalize w-[200px] h-20 border rounded bg-red-300 `}>
              <div className="flex items-center">
               {item.img && (

               <Image
                 src={item.img}
                 width={800}
                 height={800}
                 alt=""
                 className="h-[50px] w-[50px] border rounded-full"
                 />
               )}
                <p className="text-center text-md flex ml-2">{item.title}</p>
              </div>
          </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
