"use client";
import React from "react";
import dm from "/public/dm.png";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const AAA = () => {
  return (
    <div className="relative xl:h-full h-[24vh] 2xl:h-[80vh] w-[100%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="absolute inset-y-0 right-0 w-[80vw] ">
        <Image className="w-[100%]" src={dm} alt="background image " />
      </div>
      <div className="relative flex flex-col justify-center items-start xl:ml-10   h-full ml-2 ">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Quick and easy way to find",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Quick and easy way to buy",
            1000,
            "Quick and easy way to sell",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="xl:font-bold xl:text-5xl 2xl:text-6xl text-lg "
          repeat={Infinity}
        />
        <p className="xl:mt-2 text-gray-300 xl:text-2xl 2xl:text-3xl">
          Explore our wide range of high-quality cars
        </p>
        <button className="xl:text-lg text-xs text-white bg-blue-600 rounded-md xl:rounded-full shadow-md xl:mt-20 xl:p-4 p-1 mt-6 hover:shadow-blue-400">
          Explore Cars
        </button>
      </div>
      {/* <div className="relative  flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold text-gray-200">
          Next JS 13 Background Image with Tailwind CSS
        </h1>
        <p className="mt-4 text-sm text-white">
          lorem ipsom Next JS 13 Background Image with Tailwind CSS
        </p>
      </div> */}
    </div>
  );
};

export default AAA;
