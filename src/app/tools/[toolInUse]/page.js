import React from "react";
import { MetaData } from "@/data/metadata";
import Converter from "@/components/Converter";
import NotFound from "@/app/not-found";
import Calculator from "@/components/Calculator";
import BinaryCompliment from "@/components/BinaryComplient";
import BinaryConverter from "@/components/BinaryConverter";

const page = ({ params, searchParams }) => {
  const binaryConvertions = [
    "decimal-to-bcd",
    "bcd-to-decimal",
    "decimal-to-excess-3",
    "excess-3-to-decimal",
    "binary-to-gray-code",
    "gray-code-to-binary",
    "binary-to-hamming-code",
    "hamming-code-to-binary",
  ];
  return typeof MetaData[params.toolInUse] !== "undefined" ? (
    params.toolInUse === "binary-math" ? (
      <Calculator
        toolInUse={params.toolInUse}
        title={MetaData[params.toolInUse].title}
        methodForm={searchParams}
      />
    ) : params.toolInUse === "binary-to-compliment" ? (
      <BinaryCompliment
        toolInUse={params.toolInUse}
        methodForm={searchParams}
      />
    ) : binaryConvertions.includes(params.toolInUse) ? (
      <BinaryConverter toolInUse={params.toolInUse} />
    ) : (
      <Converter toolInUse={params.toolInUse} />
    )
  ) : (
    <NotFound />
  );
};

export default page;

export const generateMetadata = ({ params }) => {
  return MetaData[params.toolInUse];
};
