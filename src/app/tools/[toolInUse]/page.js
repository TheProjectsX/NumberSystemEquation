import React from "react";
import { MetaData } from "@/data/metadata";
import Converter from "@/components/Converter";
import NotFound from "@/app/not-found";
import BinaryCalculator from "@/components/BinaryCalculator";
import BinaryCompliment from "@/components/BinaryComplient";
import BinaryConverter from "@/components/BinaryConverter";

const page = ({ params }) => {
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
  const binaryMath = ["binary-add", "binary-sub", "binary-multi", "binary-div"];
  const binaryCompliment = [
    "binary-to-1s-compliment",
    "binary-to-2s-compliment",
  ];

  return typeof MetaData[params.toolInUse] !== "undefined" ? (
    binaryMath.includes(params.toolInUse) ? (
      <BinaryCalculator
        toolInUse={params.toolInUse}
        title={MetaData[params.toolInUse].title}
      />
    ) : binaryCompliment.includes(params.toolInUse) ? (
      <BinaryCompliment toolInUse={params.toolInUse} />
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

export const generateStaticParams = () => {
  return Object.keys(MetaData).map((item) => ({
    toolInUse: item,
  }));
};
