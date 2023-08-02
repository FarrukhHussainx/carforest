import React from "react";
import main from "/public/main.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className=" w-full  h-auto">
        <hr className="border-t-2" />
        <div className="flex mt-4 ml-4 sm:ml-8 gap-1">
          <Image src={main} width={30} height={10} />
          <h1 className="font-medium font-mono text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Car-Forest
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-2 mb-2">
          <div>Copyright © 2023 CarForest. </div>
          <div className="bg-red-300 sm:bg-red-600 md:bg-red-800 lg:bg-red-950 xl:bg-green-300 2xl:bg-green-800">
            All Rights Reserved.
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Footer;
