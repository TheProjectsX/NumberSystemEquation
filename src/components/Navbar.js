"use client";

import Link from "next/link";
import { Acme } from "next/font/google";
import React from "react";

const acme = Acme({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="flex justify-between md:items-center bg-gray-600 px-6 py-4 text-white shadow shadow-gray-400 sticky top-0">
      <Link
        href={"/"}
        className={`text-2xl font-normal cursor-pointer ${acme.className}`}
      >
        NSE
      </Link>
      <div className="block">
        <ul className="flex">
          <Link
            href={"/"}
            className="cursor-pointer hover:text-gray-400 text-lg px-4"
          >
            Home
          </Link>
          <Link
            href={"/tools"}
            className="cursor-pointer hover:text-gray-400 text-lg px-4"
          >
            Tools
          </Link>
          <Link
            href={"/about"}
            className="cursor-pointer hover:text-gray-400 text-lg px-4"
          >
            About
          </Link>
        </ul>
      </div>
      <div className="hidden sm:block"></div>
    </div>
  );
};

export default Navbar;
