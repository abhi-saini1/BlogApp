// // 'use client';
// import React from 'react'
// // import {motion} from 'framer-motion'
// import Image from 'next/image'
// import Comments from '@/Components/Comments/Comments'

// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };


// const SinglePage = async ({params}) => {
//   const {slug} = params;
//   const data = await getData(slug)
//   console.log(data);
  
//   return (
//     // <motion.div
//     //   className="h-full"
//     //   initial={{ y: "-200vh" }}
//     //   animate={{ y: 0 }}
//     //   transition={{ duration: 1 }}
//     // >
//     <>
    
//       <div className="h-full py-20 flex flex-col  lg:flex-row px-4 md:px-20 sm:px-12 lg:px-20 gap-3">
//         {/* about text */}
//         <div className="h-1/2 lg:h-full lg:w-full flex flex-col">
//           <div className='flex items-center gap-2'>
           
//             {data?.user?.image && <Image src={data.user.image} className='w-[45px] h-[45px] rounded-lg' width={800} height={800}alt='' />}
            
//                 <div className='flex flex-col'>
//                     <span className='text-1xl font-semibold'>{data?.user.name}</span>
//                     <span className='text-sm '>01.03.2024</span>
//                 </div>
//           </div>
//           <p className='text-sm pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sapiente possimus dolorum. Modi perspiciatis error unde magni. Velit inventore, distinctio nisi ab vitae, architecto illum iste ea asperiores veritatis ratione.<br></br>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloribus aut perspiciatis repudiandae veniam ipsum. Fugiat dolore quam corrupti, natus est, illo rem iste exercitationem sunt vitae mollitia labore quia.
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sapiente possimus dolorum. Modi perspiciatis error unde magni. Velit inventore, distinctio nisi ab vitae, architecto illum iste ea asperiores veritatis ratione.<br></br>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloribus aut perspiciatis repudiandae veniam ipsum. Fugiat dolore quam corrupti, natus est, illo rem iste exercitationem sunt vitae mollitia labore quia</p>
//         </div>

//         {/* image  */}
//         <div className="">
//           {data?.img &&
//           <Image
//           src={data?.img}
//           className="object-contain rounded-lg h-[350px] lg:h-[400px]"
//           width={800}
//           height={800}
//           alt=""
//         />}
          
//         </div>
//       </div>

//       <div className='h-full py-20  lg:flex-row px-4 md:px-20 sm:px-12 lg:px-20 gap-3'>
       
//         <div className=' items-center justify-between lg:flex lg:items-center'>
//         <Comments postSlug={slug}/>
//         <Image src='/comments.svg' className='w-[500px] h-[500px]' alt='' width={800} height={800} />
//         </div> 
//       </div>

//     </>
      
//     //  </motion.div>
//   )
// }

// export default SinglePage