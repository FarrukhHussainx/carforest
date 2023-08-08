"use client";
import React, { useState } from "react";
import main from "/public/main.png";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Link from "next/link";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="md:hidden relative flex ml-6 mt-5 justify-between mr-6">
        <div className="flex z-10">
          <Image src={main} width={50} height={50} />
          <h1 className="font-bold font-mono text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Car-Forest
          </h1>
        </div>
        {!open && (
          <div className="md:hidden">
            <MenuIcon onClick={() => setOpen(true)} />
          </div>
        )}
        {open && (
          <div className="sm:hidden w-6/12 bg-blue-100 right-0 z-20 absolute p-2 rounded-md">
            <CancelOutlinedIcon
              className="float-right"
              onClick={() => {
                setOpen(false);
              }}
            />
            <div>Login</div>
            <hr />
            <div>MyAdds</div>
          </div>
        )}
      </div>
      <div className="fixed z-50 left-0 right-0 top-0">
        <div className="hidden md:flex justify-between mt-4 items-center">
          <div className="flex  ml-20 justify-between items-center gap-1">
            <Image src={main} width={50} height={50} />
            <h1 className="font-bold font-mono text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-950 via-purple-900 to-pink-900">
              Car-Forest
            </h1>
          </div>
          <div className="mr-24 flex cursor-pointer">
            <Link href="/placeadd">
              <button className="w-24 text-md text-white bg-blue-600 rounded-full shadow-md p-2 hover:shadow-blue-400 z-30">
                Sell
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
