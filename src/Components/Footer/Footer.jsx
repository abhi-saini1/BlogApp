"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setVisible] = useState(false);

  const listenScroll = () => {
    let heightToHidden = 200;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    windowScroll > heightToHidden ? setVisible(true) : setVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
  });

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer className="flex-col mx-auto flex items-center justify-center py-20 ">
        <div className="flex text-center gap-4 mb-5 ">
          <Link
            href=""
            className="transition hover:scale-125 duration-500 ease-out"
          >
            <Image src="/facebook.png" width={32} height={32} alt="" />
          </Link>
          <Link
            href=""
            className="transition hover:scale-125 duration-500 ease-out"
          >
            <Image src="/github.png" width={32} height={32} alt="" />
          </Link>
          <Link
            href=""
            className="transition hover:scale-125 duration-500 ease-out"
          >
            <Image src="/instagram.png" width={32} height={32} alt="" />
          </Link>
          <Link
            href=""
            className="transition hover:scale-125 duration-500 ease-out"
          >
            <Image src="/linkedin.png" width={32} height={32} alt="" />
          </Link>
        </div>
        <div className="text-center">© 2024 Acme Inc. All rights reserved.</div>
      </footer>
      {isVisible && (
        <div
          className="flex items-center  justify-center w-[50px] h-[50px]  fixed right-0 bottom-8 z-50 cursor-pointer bg-black text-center border rounded-lg text-white"
          onClick={ScrollToTop}
        >
          <FaArrowUp className="text-1xl" />
        </div>
      )}
    </>
  );
};

export default Footer;
