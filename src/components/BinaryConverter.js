"use client";

import React, { useEffect, useState } from "react";
import { ConverterFuncs } from "@/data/converterFuncs";
import { useRouter } from "next/navigation";

const BinaryConverter = ({ toolInUse }) => {
  // Capitalize the given word. If it includes hyphens, split it by space and capitalize each word
  const capitalizeWords = (input) => {
    if (input.includes("-")) {
      return input
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else {
      return input.charAt(0).toUpperCase() + input.slice(1);
    }
  };

  const [convFrom, setConvFrom] = useState(
    capitalizeWords(toolInUse.split("-to-")[0])
  );
  const [convTo, setConvTo] = useState(
    capitalizeWords(toolInUse.split("-to-")[1])
  );

  const convertionMethods = toolInUse.split("-to-").includes("decimal")
    ? ["Decimal", "BCD", "Excess 3"]
    : ["Binary", "Gray Code", "Hamming Code"];

  // Change Route when Dropdown changed
  const router = useRouter();
  useEffect(() => {
    const nextRoute = `${convFrom
      .replaceAll(" ", "-")
      .toLowerCase()}-to-${convTo.replaceAll(" ", "-").toLowerCase()}`;
    router.push(nextRoute);
  }, [convFrom, convTo]);

  const converter = (str) => {
    if (str === "") return "";
    let resultValue;
    try {
      resultValue = ConverterFuncs[toolInUse](str);
    } catch (error) {
      console.log(error);
      resultValue = outputData;
    }

    return resultValue;
  };

  const [userInput, setUserInput] = useState("");
  const [outputData, setOutputData] = useState("");
  const [autoUpdate, setAutoUpdate] = useState(true);

  useEffect(() => {
    if (autoUpdate) {
      setOutputData(converter(userInput));
    }
  }, [userInput]);

  return (
    <div className="flex items-center flex-col p-8 gap-4">
      {/* <h2 className="text-2xl font-semibold">{title}</h2> */}
      <div className="flex justify-between w-[21rem] md:w-3/4 lg:w-1/2 pb-1">
        <select
          className="text-black py-1.5 px-2 rounded-md border-[2.5px] border-gray-400 cursor-pointer outline-none focus:border-[dodgerBlue]"
          value={
            convFrom.length < 5
              ? convFrom.toUpperCase()
              : capitalizeWords(convFrom)
          }
          onChange={(e) => {
            if (
              e.target.value === convertionMethods[0] &&
              convTo === convertionMethods[0]
            ) {
              setConvFrom(e.target.value);
              setConvTo(convertionMethods[1]);
            } else {
              setConvFrom(e.target.value);
              setConvTo(convertionMethods[0]);
            }
          }}
        >
          {convertionMethods.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <p className="text-2xl font-semibold">→</p>
        <select
          className="text-black py-1.5 px-2 rounded-md border-[2.5px] border-gray-400 cursor-pointer outline-none focus:border-[dodgerBlue]"
          value={
            convTo.length < 5 ? convTo.toUpperCase() : capitalizeWords(convTo)
          }
          onChange={(e) => {
            if (
              e.target.value === convertionMethods[0] &&
              convFrom === convertionMethods[0]
            ) {
              setConvTo(e.target.value);
              setConvFrom(convertionMethods[1]);
            } else {
              setConvTo(e.target.value);
              setConvFrom(convertionMethods[0]);
            }
          }}
        >
          {convertionMethods.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full flex flex-col items-center">
        <textarea
          name="userInput"
          placeholder={`Enter your ${capitalizeWords(
            toolInUse.split("-to-")[0]
          )} value here to convert to ${capitalizeWords(
            toolInUse.split("-to-")[1]
          )}`}
          className="rounded-lg bg-gray-500 border-2 border-gray-400 focus:border-gray-300 outline-none p-3 text-md resize-none w-[21rem] h-60 md:w-3/4 lg:w-1/2 hideScrollBar caret-black placeholder:text-gray-300"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        <div className="options flex my-4 px-2 justify-between items-center w-[21rem] md:w-3/4 lg:w-1/2">
          <label className="space-x-2 cursor-pointer">
            <input
              type="checkbox"
              name="autoUpdate"
              onChange={(e) => {
                setAutoUpdate(e.target.checked);
              }}
              checked={autoUpdate}
            />
            <span>Auto Update</span>
          </label>

          <div className="buttons space-x-6">
            <button
              className="border-2 border-green-500 px-3 py-2 rounded-md text-sm hover:border-gray-300 active:bg-green-500 active:border-gray-200"
              onClick={() => {
                setOutputData(converter(userInput));
              }}
            >
              Convert
            </button>
            <button
              className="border-2 border-blue-500 px-3 py-2 rounded-md text-sm hover:border-gray-300 active:bg-blue-500 active:border-gray-200"
              onClick={() => {
                setUserInput("");
                setOutputData("");
              }}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="output w-[21rem] md:w-3/4 lg:w-1/2 border-t pt-4">
          <div className="flex justify-between items-center">
            <p>Output:</p>
            <button
              className="border-2 border-yellow-500 px-3 py-1 rounded-md text-sm hover:border-gray-300 active:bg-yellow-500 active:border-gray-200"
              onClick={() => {
                navigator.clipboard.writeText(outputData);
              }}
            >
              Copy
            </button>
          </div>

          <pre
            className="bg-black text-white px-3 py-2 mt-3 text-sm md:text-base whitespace-pre-wrap"
            style={{ wordBreak: "break-all" }}
          >
            {outputData}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default BinaryConverter;
