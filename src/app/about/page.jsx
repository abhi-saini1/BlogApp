"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full py-20 flex flex-col  lg:flex-row px-4 md:px-20 sm:px-12 lg:px-20 gap-3">
        {/* about text */}
        <div className="h-1/2 lg:h-full lg:w-full flex flex-col">
          <h2 className="font-playfair flex flex-col text-2xl mb-5">
            About Us
          </h2>
          <h1 className="font-playfair font-semibold text-5xl mb-5">
            We inform, help and support the creative community
          </h1>
          <h3 className="font-playfair font-semibold text-2xl mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <p className="mb-5 text-start md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            maxime obcaecati placeat repellendus nulla aperiam quas facere,
            animi natus nihil possimus autem sit labore? Officiis unde quisquam
            quaerat pariatur placeat?
          </p>
          <p className="mb-5 text-start md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            maxime obcaecati placeat repellendus nulla aperiam quas facere,
            animi natus nihil possimus autem sit labore? Officiis unde quisquam
            quaerat pariatur placeat?
          </p>

          <h3 className="font-playfair font-semibold mt-10 text-2xl mb-5">
            Inspiring creative work
          </h3>
          <p className="mb-5 text-start md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            maxime obcaecati placeat repellendus nulla aperiam quas facere,
            animi natus nihil possimus autem sit labore? Officiis unde quisquam
            quaerat pariatur placeat? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Suscipit maxime obcaecati placeat repellendus
            nulla aperiam quas facere, animi natus nihil possimus autem sit
            labore? Officiis unde quisquam quaerat pariatur placeat?
          </p>
        </div>

        {/* image  */}
        <div className="">
          <Image
            src="/about1.jpg"
            className="object-contain rounded-lg"
            width={1000}
            height={1000}
            alt=""
          />
        </div>
      </div>

      <div className="h-full py-1 md:py-16 px-4 md:px-20 sm:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-center">
          <h2 className="lg:text-5xl text-3xl font-bold font-playfair">
            Our Team
          </h2>
          <span className="border bg-black w-[100%] mt-3"></span>
        </div>

        <div className=" grid  grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-8 mt-10">
          <div className=" h-[300px] w-[300px] bg-purple-200 flex flex-col items-center justify-center">
            <h6 className="text-3xl">Rahul</h6>
            <p className="lg:text-1xl">Founding Editor</p>
            <span className="lg:text-sm">rahul@gmail.com</span>
          </div>

          <div className="h-[300px] w-[300px] bg-purple-200 flex flex-col items-center justify-center">
            <h6 className="text-3xl">Rahul</h6>
            <p className="lg:text-1xl">Founding Editor</p>
            <span className="lg:text-sm">rahul@gmail.com</span>
          </div>
          <div className="h-[300px] w-[300px] bg-green-200 flex flex-col items-center justify-center">
            <h6 className="text-3xl">Rahul</h6>
            <p className="lg:text-1xl">Founding Editor</p>
            <span className="lg:text-sm">rahul@gmail.com</span>
          </div>
          <div className="h-[300px] w-[300px] bg-red-200 flex flex-col items-center justify-center">
            <h6 className="text-3xl">Rahul</h6>
            <p className="lg:text-1xl">Founding Editor</p>
            <span className="lg:text-sm">rahul@gmail.com</span>
          </div>
          <div className="h-[300px] w-[300px] bg-blue-200 flex flex-col items-center justify-center">
            <h6 className="text-3xl">Rahul</h6>
            <p className="lg:text-1xl">Founding Editor</p>
            <span className="lg:text-sm">rahul@gmail.com</span>
          </div>
          <div className="h-[300px] w-[300px] bg-gray-200 flex flex-col items-center justify-center">
            <h6 className="text-3xl">Rahul</h6>
            <p className="lg:text-1xl">Founding Editor</p>
            <span className="lg:text-sm">rahul@gmail.com</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
