/*
  Description: This file contains all the encode decode Functions
  Most the Function was genarated by ChatGPT to save time to create the actual App
*/

var hammingCode = require("../components/hammingCode");

/* Text Based Converters */

// Binary to Text
const binaryToText = (binaryString) => {
  // Remove any spaces in the binary string
  const binaryWithoutSpaces = binaryString.replace(/\s/g, "");

  // Split the binary string into 8-bit chunks
  const binaryCodes = binaryWithoutSpaces.match(/.{1,8}/g);

  // Convert each 8-bit binary code to its corresponding character
  const text = binaryCodes
    .map((binaryCode) => {
      const decimalValue = parseInt(binaryCode, 2); // Parse binary code to decimal
      return String.fromCharCode(decimalValue); // Convert decimal to character
    })
    .join("");

  return text;
};

// Text to Binary
const textToBinary = (text) => {
  // Convert each character to its ASCII code and then to 8-bit binary
  const binaryCodes = [...text].map((char) => {
    const asciiCode = char.charCodeAt(0); // Get the ASCII code of the character
    const binaryCode = asciiCode.toString(2).padStart(8, "0"); // Convert ASCII to 8-bit binary
    return binaryCode;
  });

  return binaryCodes.join(" ");
};

// Decimal to text
const decimalToText = (decimalString) => {
  // Split the decimal string into separate decimal values
  const decimalValues = decimalString.split(" ");

  // Convert each decimal value to its corresponding character
  const text = decimalValues
    .map((decimalValue) => {
      const intValue = parseInt(decimalValue, 10); // Parse the decimal value to an integer
      return String.fromCharCode(intValue); // Convert the integer to character
    })
    .join("");

  return text;
};

// Text to Decimal
const textToDecimal = (text) => {
  // Convert each character to its ASCII code and represent it as a decimal value
  const decimalValues = [...text].map((char) => {
    const asciiCode = char.charCodeAt(0); // Get the ASCII code of the character
    return asciiCode.toString(10); // Convert ASCII to decimal
  });

  return decimalValues.join(" ");
};

// Hex to Text
const hexToText = (hexString) => {
  // Remove any spaces in the hexadecimal string
  const hexWithoutSpaces = hexString.replace(/\s/g, "");

  // Split the hexadecimal string into pairs of two characters
  const hexPairs = hexWithoutSpaces.match(/.{1,2}/g);

  // Convert each pair of hexadecimal characters to its corresponding character
  const text = hexPairs
    .map((hexPair) => {
      const decimalValue = parseInt(hexPair, 16); // Parse hexadecimal to decimal
      return String.fromCharCode(decimalValue); // Convert decimal to character
    })
    .join("");

  return text;
};

// Text to Hex
const textToHex = (text) => {
  // Convert each character to its ASCII code and represent it as a two-digit hexadecimal
  const hexValues = [...text].map((char) => {
    const asciiCode = char.charCodeAt(0); // Get the ASCII code of the character
    return asciiCode.toString(16).padStart(2, "0").toUpperCase(); // Convert ASCII to hexadecimal
  });

  return hexValues.join(" ");
};

// Octal to Text
const octalToText = (octalString) => {
  // Remove any spaces in the octal string
  const octalWithoutSpaces = octalString.replace(/\s/g, "");

  // Split the octal string into groups of three characters
  const octalGroups = octalWithoutSpaces.match(/.{1,3}/g);

  // Convert each group of octal digits to its corresponding character
  const text = octalGroups
    .map((octalGroup) => {
      const decimalValue = parseInt(octalGroup, 8); // Parse octal to decimal
      return String.fromCharCode(decimalValue); // Convert decimal to character
    })
    .join("");

  return text;
};

// Text to Octal
const textToOctal = (text) => {
  // Convert each character to its ASCII code and represent it as a three-digit octal
  const octalValues = [...text].map((char) => {
    const asciiCode = char.charCodeAt(0); // Get the ASCII code of the character
    return asciiCode.toString(8).padStart(3, "0"); // Convert ASCII to three-digit octal
  });

  return octalValues.join(" ");
};

/* Cross Encryption */

// Binary to Decimal
const binaryToDecimal = (binaryString) => {
  // Remove any spaces in the binary string
  const binaryWithoutSpaces = binaryString.replace(/\s/g, "");

  // Convert binary to BigInt
  const decimalValue = BigInt(`0b${binaryWithoutSpaces}`);

  return decimalValue.toString();
};

// Binary to Hex
const binaryToHex = (binaryString) => {
  // Remove any spaces in the binary string
  const binaryWithoutSpaces = binaryString.replace(/\s/g, "");

  // Convert binary to BigInt
  const decimalValue = BigInt(`0b${binaryWithoutSpaces}`);

  // Convert decimal to hexadecimal
  const hexValue = decimalValue.toString(16).toUpperCase();

  return hexValue;
};

// Binary to Octal
const binaryToOctal = (binaryString) => {
  // Remove any spaces in the binary string
  const binaryWithoutSpaces = binaryString.replace(/\s/g, "");

  // Convert binary to BigInt
  const decimalValue = BigInt(`0b${binaryWithoutSpaces}`);

  // Convert decimal to octal
  const octalValue = decimalValue.toString(8);

  return octalValue;
};

// Decimal to Binary
const decimalToBinary = (decimalString) => {
  const decimalValue = BigInt(decimalString);
  const binaryValue = decimalValue.toString(2);
  return binaryValue;
};

// Decimal to Hex
const decimalToHex = (decimalValue) => {
  const hexValue = BigInt(decimalValue).toString(16).toUpperCase();
  return hexValue;
};

// Decimal to Octal
const decimalToOctal = (decimalValue) => {
  const octalValue = BigInt(decimalValue).toString(8);
  return octalValue;
};

// Hex to Binary
const hexToBinary = (hexString) => {
  // Remove any spaces in the hexadecimal string
  const hexWithoutSpaces = hexString.replace(/\s/g, "");

  // Convert hexadecimal to BigInt
  const decimalValue = BigInt("0x" + hexWithoutSpaces);

  // Convert decimal to binary
  const binaryValue = decimalValue.toString(2);

  return binaryValue;
};

// Hex to Decimal
const hexToDecimal = (hexString) => {
  // Remove any spaces in the hexadecimal string
  const hexWithoutSpaces = hexString.replace(/\s/g, "");

  // Convert hexadecimal to BigInt
  const decimalValue = BigInt(`0x${hexWithoutSpaces}`);

  return decimalValue.toString();
};

// Hex to Octal
const hexToOctal = (hexString) => {
  // Remove any spaces in the hexadecimal string
  const hexWithoutSpaces = hexString.replace(/\s/g, "");

  // Convert hexadecimal to BigInt
  const decimalValue = BigInt("0x" + hexWithoutSpaces);

  // Convert decimal to octal
  const octalValue = decimalValue.toString(8);

  return octalValue;
};

// Octal to Binary
const octalToBinary = (octalString) => {
  // Remove any spaces in the octal string
  const octalWithoutSpaces = octalString.replace(/\s/g, "");

  // Convert octal to BigInt
  const decimalValue = BigInt("0o" + octalWithoutSpaces);

  // Convert decimal to binary
  const binaryValue = decimalValue.toString(2);

  return binaryValue;
};

// Octal to Hex
const octalToDecimal = (octalString) => {
  // Remove any spaces in the octal string
  const octalWithoutSpaces = octalString.replace(/\s/g, "");

  // Convert octal to BigInt
  const decimalValue = BigInt(`0o${octalWithoutSpaces}`);

  return decimalValue.toString();
};

// Octal to Hex
const octalToHex = (octalString) => {
  // Remove any spaces in the octal string
  const octalWithoutSpaces = octalString.replace(/\s/g, "");

  // Convert octal to BigInt
  const decimalValue = BigInt("0o" + octalWithoutSpaces);

  // Convert decimal to hexadecimal
  const hexValue = decimalValue.toString(16).toUpperCase();

  return hexValue;
};

// Because It's Funny!
const textToText = (str) => str;
const binaryToBinary = (str) =>
  str
    .split("")
    .filter((item) => item === "0" || item === "1")
    .join("");
const decimalToDecimal = (str) =>
  str
    .split("")
    .filter((item) => /^[0-9]$/.test(item))
    .join("");
const hexToHex = (str) =>
  str
    .split("")
    .filter((char) => /^[0-9a-fA-F]$/.test(char))
    .join("");
const octalToOctal = (str) =>
  str
    .split("")
    .filter((char) => /^[0-7]$/.test(char))
    .join("");

// Binary Calculator
const binaryCalculator = (input01, input02, method) => {
  const decimalInput01 = BigInt(binaryToDecimal(input01));
  const decimalInput02 = BigInt(binaryToDecimal(input02));
  console.log(decimalInput01, decimalInput02);

  switch (method) {
    case "+":
      return decimalToBinary(decimalInput01 + decimalInput02);
    case "-":
      return decimalToBinary(decimalInput01 - decimalInput02);
    case "*":
      return decimalToBinary(decimalInput01 * decimalInput02);
    case "/":
      if (decimalInput02 === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return decimalToBinary(Math.floor(decimalInput01 / decimalInput02));
    default:
      throw new Error(
        "Invalid method. Please use 'add', 'subtract', 'multiply', or 'divide'."
      );
  }
};

// Binary Compliment Calculator
const binaryCompliment = (binary, method) => {
  if (/[^01]/.test(binary)) throw new Error("Invalid Binary number");
  if (method === "1") {
    return binary
      .split("")
      .map((bit) => (bit === "0" ? "1" : "0"))
      .join("");
  } else if (method === "2") {
    // Step 1: Convert the binary string to an array of bits
    const bits = binary.split("").map((bit) => parseInt(bit, 2));

    // Step 2: Flip all the bits
    const flippedBits = bits.map((bit) => (bit === 0 ? 1 : 0));

    // Step 3: Add 1 to the flipped bits
    let carry = 1;
    for (let i = flippedBits.length - 1; i >= 0; i--) {
      const sum = flippedBits[i] + carry;
      flippedBits[i] = sum % 2;
      carry = Math.floor(sum / 2);
    }

    // Step 4: Convert the array of bits back to a string
    const twosComplement = flippedBits.join("");

    return twosComplement;
  } else {
    throw new Error("Invalid method. Please use '1's' or '2's'.");
  }
};

// BCD to Decimal
const bcdToDecimal = (bcdString) => {
  // Remove any spaces from the BCD string
  const cleanBcdString = bcdString.replace(/\s/g, "");

  // Check if the cleaned string contains only '0' and '1' characters and has a length divisible by 4
  if (!/^[01]+$/.test(cleanBcdString) || cleanBcdString.length % 4 !== 0) {
    throw new Error("Invalid BCD format");
  }

  // Custom BCD to decimal conversion function
  const bcdToDec = (bcd) => {
    let decimal = 0;
    const len = bcd.length;

    for (let i = len - 1; i >= 0; i--) {
      decimal += parseInt(bcd[i]) * Math.pow(2, len - 1 - i);
    }

    return decimal;
  };

  // Split the cleaned BCD string into 4-bit chunks and convert each chunk to decimal
  const chunks = cleanBcdString.match(/.{1,4}/g);
  const decimalChunks = chunks.map(bcdToDec);

  // Concatenate the decimal chunks to get the final decimal number
  const decimalNumber = BigInt(decimalChunks.join(""));

  return decimalNumber.toString();
};

// Decimal to BCD
const decimalToBCD = (decimalValue) => {
  // Check if the input is a valid decimal number
  if (!/^\d+$/.test(decimalValue)) {
    throw new Error("Invalid input. Please provide a valid decimal number.");
  }

  // Convert each digit of the decimal string to BCD and join them together
  const bcdString = decimalValue
    .split("")
    .map((digit) => parseInt(digit).toString(2).padStart(4, "0"))
    .join(" ");

  return bcdString;
};

// Binary to Gray Code
const binaryToGrayCode = (binaryString) => {
  // Check if the input is a valid binary number
  if (!/^[01]+$/.test(binaryString)) {
    throw new Error("Invalid input. Please provide a valid binary number.");
  }

  // Convert binary to Gray code
  const grayCode = binaryString
    .split("")
    .reduce(
      (acc, digit, index) =>
        acc +
        (index === 0
          ? digit
          : (parseInt(digit) ^ parseInt(binaryString[index - 1])).toString()),
      ""
    );

  return grayCode;
};

// Gray Code to Binary
const grayCodeToBinary = (grayCode) => {
  // Check if the input is a valid Gray code
  if (!/^[01]+$/.test(grayCode)) {
    throw new Error("Invalid input. Please provide a valid Gray code.");
  }

  // Convert Gray code to binary
  let binaryString = grayCode[0];
  for (let i = 1; i < grayCode.length; i++) {
    binaryString += (
      parseInt(grayCode[i]) ^ parseInt(binaryString[i - 1])
    ).toString();
  }

  return binaryString;
};

// Excess3 to Decimal
const excess3ToDecimal = (excess3) => {
  if (!/^[01]+$/.test(excess3)) {
    throw new Error(
      "Invalid input: Excess-3 code should be a sequence of 4-bit binary groups."
    );
  }
  let moreZero = excess3.length % 4;

  excess3 = "0".repeat(moreZero === 0 ? moreZero : 4 - moreZero) + excess3;
  console.log(excess3);
  // Helper function to convert a binary string to decimal using BigInt
  const binaryToDecimal = (binaryString) => {
    let decimalValue = 0n;
    const len = binaryString.length;
    for (let i = 0; i < len; i++) {
      decimalValue = decimalValue * 2n + BigInt(binaryString[i]);
    }
    return decimalValue;
  };

  // Convert each group of 4 bits to decimal and store the results
  const decimalDigits = [];
  for (let i = 0; i < excess3.length; i += 4) {
    const group = excess3.slice(i, i + 4);
    const decimalDigit = binaryToDecimal(group) - 3n; // Subtract 3 to get the original decimal value
    decimalDigits.push(decimalDigit.toString());
  }

  // Combine the decimal digits to get the final result
  const decimalValue = decimalDigits.join("");
  return decimalValue.toString();
};

// Decimal to Excess 3
const decimalToExcess3 = (decimalValue) => {
  const decimalBigInt = BigInt(decimalValue);

  if (decimalBigInt < 0n) {
    throw new Error(
      "Invalid input: Decimal value should be a non-negative integer."
    );
  }

  // Helper function to convert a decimal to a 4-bit binary string
  const decimalToBinary = (decimal) => {
    let binaryString = (decimal + 3n).toString(2); // Add 3 and convert to binary
    while (binaryString.length < 4) {
      binaryString = "0" + binaryString; // Pad with leading zeros to make it 4 bits long
    }
    return binaryString;
  };

  // Convert the decimal value to Excess-3 code
  let excess3Code = "";
  const decimalDigits = decimalBigInt.toString().split("");
  for (const digit of decimalDigits) {
    excess3Code += decimalToBinary(BigInt(digit));
  }

  return excess3Code;
};

// Binary to Hamming code
const binaryToHammingCode = (binary) => {
  return hammingCode.encode(binary);
};

// Hamming code to Binary
const hammingCodeToBinary = (humming) => {
  return hammingCode.decode(humming);
};

export const ConverterFuncs = {
  // Text Based
  "binary-to-text": binaryToText,
  "text-to-binary": textToBinary,

  "decimal-to-text": decimalToText,
  "text-to-decimal": textToDecimal,

  "hex-to-text": hexToText,
  "text-to-hex": textToHex,

  "octal-to-text": octalToText,
  "text-to-octal": textToOctal,

  //  Cross Encryption
  "binary-to-decimal": binaryToDecimal,
  "binary-to-hex": binaryToHex,
  "binary-to-octal": binaryToOctal,

  "decimal-to-binary": decimalToBinary,
  "decimal-to-hex": decimalToHex,
  "decimal-to-octal": decimalToOctal,

  "hex-to-binary": hexToBinary,
  "hex-to-decimal": hexToDecimal,
  "hex-to-octal": hexToOctal,

  "octal-to-binary": octalToBinary,
  "octal-to-decimal": octalToDecimal,
  "octal-to-hex": octalToHex,

  // Because user's Are Idiots!
  "text-to-text": textToText,
  "binary-to-binary": binaryToBinary,
  "decimal-to-decimal": decimalToDecimal,
  "hex-to-hex": hexToHex,
  "octal-to-octal": octalToOctal,

  // Binary Calculation
  "binary-math": binaryCalculator,

  "binary-compliment": binaryCompliment,

  "bcd-to-decimal": bcdToDecimal,
  "decimal-to-bcd": decimalToBCD,

  "binary-to-gray-code": binaryToGrayCode,
  "gray-code-to-binary": grayCodeToBinary,

  "binary-to-excess-3": decimalToExcess3,
  "excess-3-to-binary": excess3ToDecimal,

  "binary-to-hamming-code": binaryToHammingCode,
  "hamming-code-to-binary": hammingCodeToBinary,
};
