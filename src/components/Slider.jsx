"use client";

// Import Swiper styles
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function Slider({ data }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className=" h-60 bg-slate-600 w-full ">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.image.map((img) => (
          <SwiperSlide
            key={img.secure_url}
            className="h-20 text-red-600 border-green-400"
          >
            <Image src={img.secure_url} alt="alt" fill />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
