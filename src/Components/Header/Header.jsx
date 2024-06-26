"use client";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLinks from "../AuthLinks/AuthLinks";

const Header = () => {
  // menu button open
  const [open, setOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);

  const links = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/about",
      title: "About",
    },
    {
      url: "/gallery",
      title: "Gallery",
    },
    {
      url: "/contact",
      title: "Contact",
    },
  ];
  const linkVariants = {
    closed: {
      y: "-100vw",
    },
    opened: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
  const linkItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  const TopVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgba(255,255,255)",
    },
  };
  const MidVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const BottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgba(255,255,255)",
    },
  };

  return (
    <>
      <div
        className={`w-full z-50  flex items-center justify-between py-4 px-3 sm:px-8 md:px-12 lg:px-20 border-b-2 transiton duration-300  ${
          header ? "fixed bg-black text-white" : " "
        }`}
      >
        <div className="lg:flex justify-center w-1/5">
          <Link href="/" className="">
            <span className="font-playfair text-3xl font-bold">Blog</span>
          </Link>
        </div>
        {/* social links */}
        <div className="gap-2 w-1/5 hidden md:flex">
          <Link href="/">
            <Image src="/instagram.png" alt="" height={24} width={24} />
          </Link>
          <Link href="/">
            <Image
              src="/github.png "
              className="bg-white border rounded"
              alt=""
              height={24}
              width={24}
            />
          </Link>
          <Link href="/">
            <Image src="/facebook.png" alt="" height={24} width={24} />
          </Link>
          <Link href="/">
            <Image src="/linkedin.png" alt="" height={24} width={24} />
          </Link>
        </div>

        {/* menu button */}
        <div className="md:hidden">
          <button
            className="w-10 h-8 flex flex-col  justify-between z-50 relative "
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              className="w-10 h-1 bg-black rounded origin-left "
              variants={TopVariants}
              animate={open ? "opened" : "closed"}
            ></motion.div>
            <motion.div
              className="w-10 h-1 bg-black rounded"
              variants={MidVariants}
              animate={open ? "opened" : "closed"}
            ></motion.div>
            <motion.div
              className="w-10 h-1 bg-black rounded origin-left "
              variants={BottomVariants}
              animate={open ? "opened" : "closed"}
            ></motion.div>
          </button>

          {open && (
            <motion.div
              variants={linkVariants}
              animate="opened"
              initial="closed"
              className="absolute top-0 right-0 h-screen w-screen bg-black text-white flex flex-col items-start px-10  justify-center gap-8 text-4xl z-40"
            >
              {links.map((link) => (
                <>
                  <motion.div variants={linkItemVariants} key={link.title}>
                    <Link href={link.url}>{link.title}</Link>
                  </motion.div>
                </>
              ))}
              <motion.div variants={linkItemVariants}>
                <AuthLinks />
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Login and Logout */}
        <div className="items-center justify-center gap-4 hidden md:flex lg:flex transition-opacity duration-300">
          <ThemeToggle />
          {links?.map((link) => (
            <div key={link.url}>
              <Link href={link.url}>{link.title}</Link>
            </div>
          ))}
          <AuthLinks />
        </div>
      </div>
    </>
  );
};

export default Header;
