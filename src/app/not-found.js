import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-center py-[calc(100vh/4)]">
      <h2 className="text-5xl">OOPS!</h2>
      <h2 className="text-3xl font-bold my-6">Page Not Available</h2>
      <Link
        href="/"
        className="cursor-pointer text-sm font-semibold border-2 border-gray-400 bg-gray-500 text-white py-3 px-5 rounded-full hover:bg-[dodgerBlue] active:bg-orange-500"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
