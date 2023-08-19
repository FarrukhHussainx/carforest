"use client";
import React, { useState } from "react";
import main from "/public/main.png";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SellTwoToneIcon from "@mui/icons-material/SellTwoTone";
import Link from "next/link";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const session = useSession();

  return (
    <>
      <div className="md:hidden relative flex ml-6 mt-2 justify-between mr-6 mb-2">
        <div className="flex z-10 gap-1">
          <Link href="/">
            <Image src={main} width={25} height={25} alt="main" />
          </Link>
          <h1 className="font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Car-Forest
          </h1>
        </div>

        <div className="md:hidden">
          {session.status === "unauthenticated" && (
            <Link href="/login">
              <SellTwoToneIcon />
            </Link>
          )}
          {session.status === "authenticated" && (
            <Link href="/placeadd">
              <SellTwoToneIcon />
            </Link>
          )}
        </div>
      </div>

      <div className="fixed z-50 left-0 right-0 top-0">
        <div className="hidden md:flex justify-between mt-4 items-center">
          <div className="flex  ml-20 justify-between items-center gap-1">
            <Link href="/">
              <Image src={main} width={50} height={50} alt="alt" />
            </Link>
            <h1 className="font-bold font-mono text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-950 via-purple-900 to-pink-900">
              Car-Forest
            </h1>
          </div>
          <div className="mr-24 flex cursor-pointer">
            {session.status === "unauthenticated" && (
              <Link href="/login">
                <button className="w-24 text-md text-white bg-blue-600 rounded-full shadow-md p-2 hover:shadow-blue-400 z-30">
                  Sell
                </button>
              </Link>
            )}
            {session.status === "authenticated" && (
              <Link href="/placeadd">
                <button className="w-24 text-md text-white bg-blue-600 rounded-full shadow-md p-2 hover:shadow-blue-400 z-30">
                  Sell
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
