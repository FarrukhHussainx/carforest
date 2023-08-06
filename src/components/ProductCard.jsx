"use client";
import Image from "next/image";

import cross from "/public/cross.jpeg";
import cross1 from "/public/cross1.jpg";
import cross2 from "/public/cross2.jpg";
import cross3 from "/public/cross3.jpg";
import steering from "/public/steering-3.svg";
import fuel from "/public/fuel-9.svg";
import tyre from "/public/tyre-1.svg";
import { Fragment, useState } from "react";
import MyModal from "./Dialog";

const ProductCard = ({ data }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [btnShow, setBtnShow] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleMouseEnter = () => {
    setBtnShow(true);
  };

  const handleMouseLeave = () => {
    setBtnShow(false);
  };
  return (
    <>
      <div
        className="bg-blue-100 mx-auto rounded-md p-2 shadow-md hover:shadow-blue-400  relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          className="w-[300px] h-[200px] rounded-md"
          src={data.image[0].secure_url}
          width={200}
          height={200}
        />
        <div className="flex justify-start items-center gap-1 text-blue-900 ml-2 mt-4">
          <h1 className="font-medium capitalize">{data.make}</h1>
          <h1 className="font-medium capitalize">{data.model}</h1>
          <h1 className="font-medium capitalize">{data.year}</h1>
        </div>
        <div className="flex justify-start items-center gap-1 text-green-900 ml-2 mt-2">
          <h1 className="font-medium">RS 230000</h1>
        </div>
        <div className="flex justify-between gap-3 mt-2">
          <div className="flex flex-col items-center">
            <Image className="w-[25px] h-[25px] rounded-md" src={steering} />
            <h1 className="text-gray-500 capitalize">{data.transmission}</h1>
          </div>
          <div className="flex flex-col items-center">
            <Image className="w-[25px] h-[25px] rounded-md" src={tyre} />
            <h1 className="text-gray-500">{data.mileage} KM/L</h1>
          </div>
          <div className="flex flex-col items-center">
            <Image className="w-[25px] h-[25px] rounded-md" src={fuel} />
            <h1 className="text-gray-500">{data.fuelType}</h1>
          </div>
        </div>
        {btnShow && (
          <div className="absolute bottom-0 w-full right-0 left-0  rounded-md">
            <button
              className="bg-blue-600 w-full p-12 rounded-md opacity-90 text-white text-lg"
              onClick={openModal}
            >
              Open Details
            </button>
          </div>
        )}
      </div>
      {isOpen && (
        <MyModal data={data} closeModal={closeModal} isOpen={isOpen} />
      )}
    </>
  );
};

export default ProductCard;
