"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Login = () => {
    const {status} = useSession()
    const router = useRouter();
    // console.log(data,status)
    if(status === "loading"){
        return <div className="">Loading...</div>
    }
    if(status === "authenticated"){
        router.push('/')
    }
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="flex h-full w-full flex-wrap text-slate-800 lg:px-4 ">
                <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
                    <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
                        <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">New Feature</span>
                        <p className="my-6 text-3xl font-semibold leading-10">
                            Create animations with <span className="mx-auto w-56 block whitespace-nowrap rounded-lg bg-orange-400  py-2 text-white ">drag and drop</span>
                        </p>
                    </div> 
                        {/* <Image src='/login_banner.jpg' className="mx-auto w-11/12 max-w-lg rounded-lg object-cover" width={800} height={800} alt=""/> */}
                    
                </div>
                
                {/* form and login authentication */}
                <div className="flex w-full flex-col md:w-1/2">
                    <div className="flex justify-center pt-12 md:justify-start md:pl-12">
                        <Link href='/' className="text-2xl font-bold font-playfair text-blue-600">
                            Blog.
                        </Link>
                    </div>
                    <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
                        <p className="text-center  text-3xl font-bold md:text-left md:leading-tight">
                            Create Your Account
                        </p>
                        <p className="mt-6 text-center font-medium md:text-left">
                            Already using Blog?
                            <Link href='#' className="ml-1 whitespace-nowrap font-semibold text-blue-700">
                                 Login here
                            </Link>
                        </p>
                        <button onClick={()=> signIn('google')} className=" -2 mt-8 flex items-center text-white bg-black justify-center rounded-md border px-4 py-1 outline-none  ring-offset-2 transition hover:before-transparent focus:ring-2">
                            <FcGoogle className="mr-2 h-5"/>
                            Get started with Google
                        </button>
                        

                        <form className="flex flex-col items-stretch md:pt-8 pt-3">
                            <div className="flex flex-col pt-4">
                                <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                    <input type="text" id="login-name" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Name" />
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                    <input type="email" id="login-name" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
                                </div>
                            </div>
                            <div className="mb-4 flex flex-col pt-4">
                                <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                    <input type="password" id="login-name" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
                                </div>
                            </div>
                            <button type="submit" className="mt-6 rounded-lg bg-black px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-offset-2 transition focus:ring-2 md:w-32">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default Login;
