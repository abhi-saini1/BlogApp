import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  return (
    <div className="h-full py-1 md:py-16">
      <div className="flex items-center justify-center">
        <h2 className="lg:text-5xl text-3xl font-bold font-playfair">
          Gallery
        </h2>
      </div>

      <div className="py-8 px-5 grid  grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-8">
        {/* image start */}
        <Link
          href="#"
          className="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-80"
        >
          <Image
            src="/coding.jpg"
            width={800}
            height={800}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center transtion duration-200 group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Coding
          </span>
        </Link>
        {/* image end */}

        {/* image start */}
        <Link
          href="#"
          className="group relative flex h-48 items-end overflow-hidden rounded-lg md:col-span-2 shadow-lg md:h-80"
        >
          <Image
            src="/food.jpg"
            width={800}
            height={800}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center transtion duration-200 group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Food
          </span>
        </Link>
        {/* image end */}

        {/* image start */}
        <Link
          href="#"
          className="group relative flex h-48 items-end overflow-hidden rounded-lg md:col-span-2 shadow-lg md:h-80"
        >
          <Image
            src="/travel.jpg"
            width={1000}
            height={1000}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center transtion duration-200 group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Travel
          </span>
        </Link>
        {/* image end */}

        {/* image start */}
        <Link
          href="#"
          className="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-80"
        >
          <Image
            src="/fashion1.jpg"
            width={800}
            height={800}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center transtion duration-200 group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Fashion
          </span>
        </Link>
        {/* image end */}
      </div>
    </div>
  );
};

export default Gallery;
