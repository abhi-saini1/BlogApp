import Image from "next/image";
import React from "react";

const CategoryList = () => {
  return (
    <div className="h-full  py-1 lg:py-16 px-4 md:px-20 sm:px-12 lg:px-10 ">
      <div className="flex items-center py-4 justify-center">
        <h2 className="lg:text-5xl text-3xl font-bold font-playfair">
          Popular Categories
        </h2>
      </div>
      <div className="py-8 grid  sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-6 gap-4  items-center justify-center">
        <div className="flex items-center justify-center  capitalize w-[200px] h-20 border rounded bg-red-300">
          <div className="flex items-center">
            <Image
              src="/travel.jpg"
              width={800}
              height={800}
              alt=""
              className="h-[50px] w-[50px] border rounded-full"
            />
            <p className="text-center text-md flex ml-2">Travel</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 capitalize w-[200px] h-20 border rounded bg-green-300">
          <div className="flex items-center">
            <Image
              src="/coding.jpg"
              width={800}
              height={800}
              alt=""
              className="h-[50px] w-[50px] border rounded-full"
            />
            <p className="text-center text-md flex ml-2">Coding</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 capitalize w-[200px] h-20 border rounded bg-purple-300">
          <div className="flex items-center">
            <Image
              src="/food.jpg"
              width={800}
              height={800}
              alt=""
              className="h-[50px] w-[50px] border rounded-full"
            />
            <p className="text-center text-md flex ml-2">Food</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 capitalize w-[200px] h-20 border rounded bg-gray-300">
          <div className="flex items-center">
            <Image
              src="/fashion.jpg"
              width={800}
              height={800}
              alt=""
              className="h-[50px] w-[50px] border rounded-full"
            />
            <p className="text-center text-md flex ml-2">Fashion</p>
          </div>
        </div>
        <div className="flex flex-col items-center  justify-center gap-2 capitalize w-[200px] h-20 border rounded bg-blue-300">
          <div className="flex items-center">
            <Image
              src="/culture.jpg"
              width={800}
              height={800}
              alt=""
              className="h-[50px] w-[50px] border rounded-full"
            />
            <p className="text-center text-md flex ml-2">Culture</p>
          </div>
        </div>
        <div className="flex flex-col items-center  justify-center gap-2 capitalize w-[200px] h-20 border rounded bg-yellow-300">
          <div className="flex items-center">
            <Image
              src="/culture.jpg"
              width={800}
              height={800}
              alt=""
              className="h-[50px] w-[50px] border rounded-full"
            />
            <p className="text-center text-md flex ml-2">Style</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
