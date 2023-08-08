"use client";
import React from "react";
import main from "/public/main.png";
import Image from "next/image";
import Slider from "./Slider";
import { InputT } from "./InaputT";
import { signOut } from "next-auth/react";

const Footer = () => {
  return (
    <>
      <div className=" w-full  h-32 mt-10 bg-slate-800/80 ">
        <hr className="border-t-2" />
        <div className="flex mt-4 ml-4 sm:ml-8 gap-1">
          <Image src={main} width={30} height={10} alt="footer" />
          <h1 className="font-medium font-mono text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
            Car-Forest
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-2  text-white ">
          <div>Copyright © 2023 CarForest. </div>
          <div className="bg-red-300 sm:bg-red-600 md:bg-red-800 lg:bg-red-950 xl:bg-green-300 2xl:bg-green-800">
            All Rights Reserved.
          </div>
          <br />
          <br />
        </div>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    </>
  );
};

export default Footer;
