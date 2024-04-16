"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CiCirclePlus } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";
import { GoVideo } from "react-icons/go";
import { IoCloudUploadOutline } from "react-icons/io5";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { app } from "@/utils/firebase";


const WritePage = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  const router = useRouter();
  const [value,setValue] = useState('');
  const [file,setFile] = useState(null);
  const [media,setMedia] = useState('');
  const [title,setTitle] = useState('');
  
  useEffect(() => {
    const storage = getStorage(app);
  
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);


  if (status === "loading") {
    return <div className="">Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

    const handleSubmit = async() =>{
        const res = await fetch('/api/posts',{
          method: 'POST',
          body: JSON.stringify({
            title,
            desc: value,
            img: media,
            slug: slugify(title),
           
          }),
        });
        console.log(res)
        
      }
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full py-20 flex flex-col  lg:flex-row px-4 md:px-20 sm:px-12 lg:px-20 gap-3">
        {/*  */}
        <div className="h-1/2 lg:h-full lg:w-full flex flex-col">
          <input
            type="text"
            className="w-1/2 h-[50px] border rounded-lg border-gray-300 outline-none focus-within:to-blue-300 text-2xl bg-transparent p-2"
            placeholder="Title" onChange={e => setTitle(e.target.value)}
          />

          <div className="flex items-center">
            <input type="file" id="image" onChange={(e)=> setFile(e.target.files[0])} className='hidden'/>
            <div
              className="my-3 flex cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={() => setOpen(!open)}
            >
              <CiCirclePlus className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] " />
            </div>
            {open && (
              <>
               <button className="flex">
               <label>
                <div className="m-2 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <IoCloudUploadOutline className="w-[20px] h-[20px]" />
                </div>
                </label>
                <label htmlFor="image">
                <div className="m-2 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <GrGallery className="w-[20px] h-[20px]" />
                </div>
                </label>
                <label>

                <div className="m-2 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <GoVideo className="w-[20px] h-[20px]" />
                </div>
                </label>
               </button>
              </>
            )}
          </div>
          <textarea
            className=" w-10/12 h-60 border rounded-lg border-gray-300 outline-none focus-within:to-blue-300 text-sm italic bg-transparent p-2"
            placeholder="Tell your Story..." value={value} onChange={(e)=> setValue(e.target.value)}
          />

          <Link href="" className="flex items-center my-3">
            <button
              type="submit"
              className="p-4 rounded-lg ring-black bg-black text-white" onClick={handleSubmit}
            >
              Publish
            </button>
          </Link>
        </div>

        {/* image  */}
        <div className="">
          <Image
            src="/write_page.png"
            className="object-contain rounded-lg"
            width={1000}
            height={1000}
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default WritePage;
