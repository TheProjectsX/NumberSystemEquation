import React from "react";
import Link from "next/link";
import { RoutesData } from "@/data/routes";

export const metadata = {
  title: "NSE Tools",
  description: "Tools to perform Numering system Equations",
};

const page = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-center md:justify-evenly items-center md:items-start p-6 md:py-20">
      {RoutesData.map((items, index) => {
        return (
          <div className="text-center" key={index}>
            <h1 className="font-semibold text-lg pb-4 underline underline-offset-8">
              {items.title}
            </h1>
            <ul className="flex flex-col items-center gap-2">
              {items.routes.map((item, index) => {
                return (
                  <li className="flex flex-col" key={index}>
                    {item.map((item, index) => {
                      return (
                        <Link
                          href={item.path}
                          key={index}
                          className="hover:underline underline-offset-4 active:decoration-blue-400"
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default page;
