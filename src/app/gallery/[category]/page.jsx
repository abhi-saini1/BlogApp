"use client";
import React from "react";
import { galleryItems } from "./data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

const getData = (cat) => {
  const data = galleryItems[cat];

  if (data) {
    return data;
  }
  return notFound();
};
const Category = ({ params }) => {
  const data = getData(params.category);
  console.log(data);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full py-20  px-4 md:px-20 sm:px-12 lg:px-20 gap-3">
        <h2 className="font-playfair  text-8xl mb-5 capitalize">
          {params.category}
        </h2>

        <div className="py-8 px-5 grid  grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2">
            {data?.map((item) => (
            <div
                
                key={item.id}
            >
                <div className="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-80">
                <Image
                    src={item.image}
                    className="absolute inset-0 h-full w-full object-cover object-center transtion duration-200 group-hover:scale-110"
                    alt=""
                    width={800}
                    height={800}
                />
                </div>
                
            </div>
            ))}
      </div>
        </div>
    </motion.div>
  );
};

export default Category;
