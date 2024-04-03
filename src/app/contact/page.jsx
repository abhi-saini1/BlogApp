"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Contact = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col  lg:flex-row px-4 md:px-20 sm:px-12 lg:px-20 gap-20 py-10">
        <div className="">
          <Image
            src="/contact.jpg"
            width={1000}
            className="object-contain rounded-lg"
            height={1000}
            alt=""
          />
        </div>

        <div className="h-1/2 lg:h-full lg:w-full flex flex-col">
          <h2 className="font-playfair flex flex-col text-2xl mb-5 font-bold">
            Let &apos; s Talk
          </h2>
          <p className="text-sm text-gray-400  mb-5">
            Have some big idea or brand to develop and need help? Then reach out
            we &apos; d love to hear about your project and provide help.
          </p>
          <form className=" ml-auto space-y-4 ">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            />
            <textarea
              placeholder="Message"
              rows="6"
              name="message"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            />
            <button
              type="submit"
              className="text-white bg-[#007bff] hover:bg-blue-600 font-sembibold rounded-md text-sm px-4 py-2.5 w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
