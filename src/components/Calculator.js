"use client";

import React, { useEffect, useState } from "react";
import { ConverterFuncs } from "@/data/converterFuncs";
import { useRouter } from "next/navigation";

const Calculator = ({ title, toolInUse, methodForm }) => {
  const [userInput01, setUserInput01] = useState("");
  const [userInput02, setUserInput02] = useState("");

  const operatorArray = ["+", "-", "*", "/"];

  const operatorDict = {
    add: "+",
    sub: "-",
    multi: "*",
    div: "/",
  };

  const [operator, setOperator] = useState(operatorDict[methodForm.eqn] ?? "+");

  const [outputData, setOutputData] = useState("");
  const [autoUpdate, setAutoUpdate] = useState(true);

  const calculator = (input01, input02, method) => {
    if (input01 === "" && input02 === "") return "";
    let resultValue;
    try {
      resultValue = ConverterFuncs[toolInUse](input01, input02, method);
      if (resultValue === "NaN") {
        resultValue = outputData;
      }
    } catch (error) {
      console.log(error);
      resultValue = outputData;
    }

    return resultValue;
  };

  useEffect(() => {
    if (autoUpdate) {
      setOutputData(calculator(userInput01, userInput02, operator));
    }
  }, [userInput01, userInput02, operator]);

  const router = useRouter();
  const findKeyByValue = (obj, value) =>
    Object.keys(obj).find((key) => obj[key] === value);

  const changeQuery = (nextOperator) => {
    const oldRoute = `/tools/${toolInUse}${
      typeof operatorDict[methodForm.eqn] == "string"
        ? `?eqn=${methodForm.eqn}`
        : ""
    }`;
    const newRoute = `/tools/${toolInUse}?eqn=${findKeyByValue(
      operatorDict,
      nextOperator
    )}`;

    router.push(newRoute, oldRoute, {
      shallow: true,
    });
  };

  return (
    <div className="flex items-center flex-col p-8 gap-4">
      {/* <h2 className="text-2xl font-semibold">{title}</h2> */}
      <div className="flex justify-between w-[21rem] md:w-3/4 lg:w-1/2 px-4 pb-1">
        <h2 className="text-center font-semibold text-2xl w-full">{title}</h2>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex gap-3 w-[21rem] md:w-3/4 lg:w-1/2 flex-col">
          <input
            type="text"
            className="rounded-lg bg-gray-500 border-2 border-gray-400 focus:border-gray-300 outline-none px-3 py-1 text-md"
            value={userInput01}
            onChange={(e) => setUserInput01(e.target.value)}
          />
          <select
            className="text-xl w-auto text-black px-2 py-1 rounded-md border-[2.5px] border-gray-400 cursor-pointer outline-none focus:border-[dodgerBlue] mx-auto"
            value={operator}
            onChange={(e) => {
              changeQuery(e.target.value);
              setOperator(e.target.value);
            }}
          >
            {operatorArray.map((item, index) => (
              <option
                key={index}
                value={item.includes(" ") ? `${index + 1}` : item}
              >
                {item}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="rounded-lg bg-gray-500 border-2 border-gray-400 focus:border-gray-300 outline-none px-3 py-1 text-md"
            value={userInput02}
            onChange={(e) => setUserInput02(e.target.value)}
          />
        </div>

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
                setOutputData(calculator(userInput01, userInput02, operator));
              }}
            >
              Calculate
            </button>
            <button
              className="border-2 border-blue-500 px-3 py-2 rounded-md text-sm hover:border-gray-300 active:bg-blue-500 active:border-gray-200"
              onClick={() => {
                setUserInput01("");
                setUserInput02("");
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

export default Calculator;
