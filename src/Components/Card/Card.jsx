import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({key,item}) => {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl mt-4" key={key}>
        {item?.img ? ( 
        <Image
          src={item.img}
          className="w-[350px] h-[200px] lg:w-[600px] lg:h-[400px] sm:w-[450px] sm:h-[250px] "
          width={800}
          height={800}
          alt=""/>
        ) : ( 
            <>
              <Image
                src='/posts.jpg'
                className="w-[350px] h-[200px] lg:w-[600px] lg:h-[400px] sm:w-[450px] sm:h-[250px] "
                width={800}
                height={800}
                alt=""/>
            </>
            )}

        <div className="card-body rounded-lg">
          <h2 className="card-title  text-black font-semibold">
            {item.title}
          </h2>
          <span className='text-black font-bold text-1xl'>{item.catSlug}</span>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            impedit accusantium repellendus, quod quas officia exercitationem
            quidem eligendi quo voluptas fugiat blanditiis quia possimus
            nesciunt. Quo asperiores cum omnis ea.
          </p>
          <div className="card-actions justify-end">
            <Link href={`/posts/${item.slug}`}>
              <button className="p-3 border rounded-lg  bg-black text-white ">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      
    
    </>
  );
};

export default Card;
