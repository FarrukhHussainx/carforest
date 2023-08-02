"use client";
import React from "react";
import blob from "/public/blob.png";
import fortuner from "/public/fortuner.png";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    // <div className="sm:hidden flex flex-col">
    //   <div className="w-full ml-16 mt-36 mb-40">
    //     <TypeAnimation
    //       sequence={[
    //         // Same substring at the start will only be typed out once, initially
    //         "Quick and easy way to find",
    //         1000, // wait 1s before replacing "Mice" with "Hamsters"
    //         "Quick and easy way to buy",
    //         1000,
    //         "Quick and easy way to sell",
    //         1000,
    //       ]}
    //       wrapper="span"
    //       speed={50}
    //       className="font-bold text-3xl"
    //       repeat={Infinity}
    //     />
    //     <p className="mt-2">Explore our wide range of high-quality cars</p>
    //     <button className="text-lg text-white bg-blue-600 rounded-full shadow-md mt-20 p-4 hover:shadow-blue-400">
    //       Explore Cars
    //     </button>
    //   </div>
    //   <div className="relative">
    //     <Image src={blob} className="w-[58%] " />
    //     <Image src={fortuner} className="w-[55%]  " />
    //   </div>
    // </div>
    <div className="md:h-[60vh] lg:h-[80vh] relative w-10/12 mx-auto mt-10 sm:h-72 h-56 grid md:grid-cols-2 mb-10">
      <div className="md:hidden">
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
          className="font-medium text-xl"
          repeat={Infinity}
        />
        <p className="mt-2 text-gray-500">
          Explore our wide range of high-quality cars
        </p>
        <button className="text-xs text-white bg-blue-600 rounded-full shadow-md mt-6  p-1 hover:shadow-blue-400 ">
          Explore Cars
        </button>
      </div>
      <div className="hidden md:block w-full lg:ml-16 lg:mt-36 mb-40">
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
          className="font-bold text-3xl"
          repeat={Infinity}
        />
        <p className="mt-2">Explore our wide range of high-quality cars</p>
        <button className="text-lg text-white bg-blue-600 rounded-full shadow-md mt-20 p-4 hover:shadow-blue-400">
          Explore Cars
        </button>
      </div>
      <div className="">
        <Image
          src={blob}
          className="hidden md:block w-[62%] absolute lg:-right-52 lg:-top-20 md:-right-32 md:top-0 xl:hidden"
        />
        <Image
          src={fortuner}
          className=" w-[60%]  absolute right-4 bottom-0 lg:bottom-8 lg:-right-16 md:bottom-6 md:-right-1"
        />
      </div>
    </div>
  );
};

export default Hero;
