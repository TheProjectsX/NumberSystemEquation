import React from "react";

const page = () => {
  return (
    <div className="py-10 px-7">
      <div className="max-w-[25rem] md:max-w-none md:w-3/4 lg:w-1/2 mx-auto border-2 border-gray-400 p-7 rounded-xl">
        <div className="border-b pb-5 mb-5">
          <h1 className="text-2xl font-semibold mb-2">About Website</h1>
          <p>
            Discover a user-friendly website offering an array of numbering
            system tools. Convert numbers between binary, octal, decimal, and
            hexadecimal bases effortlessly, and perform arithmetic operations
            seamlessly in different number systems. A valuable resource for
            students and professionals dealing with diverse numerical
            representations.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-semibold mb-2">About Author</h1>
          <p>
            <span className="font-semibold">Name:</span> Modasser Hasan
            <br />
            <span className="font-semibold">From:</span> Rangpur, Bangladesh
            <br />
            <span className="font-semibold">Skills:</span> Full Stack Website
            Development
            <br />
            <span className="font-semibold">Goal:</span> Create a World full Of
            Technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
