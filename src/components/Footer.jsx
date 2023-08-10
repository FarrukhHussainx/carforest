"use client";
import React from "react";
import main from "/public/main.png";
import Image from "next/image";
import Slider from "./Slider";
import { InputT } from "./InaputT";
import { signOut, useSession } from "next-auth/react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ExitToAppOutlined } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  const session = useSession();
  return (
    <>
      <div className=" w-full  h-32 mt-10 bg-slate-800/80 ">
        <hr className="border-t-2" />
        <div className="flex justify-between items-center">
          <div className="flex mt-4 xl:ml-4 ml-2 sm:ml-8 gap-1">
            <Image src={main} width={30} height={10} alt="footer" />
            <h1 className="font-medium font-mono text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
              <Link href="/">Car-Forest</Link>
            </h1>
          </div>

          {session.status === "authenticated" && (
            <button
              className="text-white mr-2 xl:mr-2 hover:text-slate-800"
              onClick={() => signOut()}
            >
              <ExitToAppOutlined /> Sign out
            </button>
          )}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-2  text-white ">
          <div>Copyright © 2023 CarForest. </div>
          <div className="">All Rights Reserved.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
