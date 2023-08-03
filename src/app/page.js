import Link from "next/link";

export default function Home() {
  return (
    <div className="py-10 px-7">
      <div className="max-w-[25rem] md:max-w-none md:w-3/4 lg:w-1/2 mx-auto border-2 border-gray-400 p-7 rounded-xl">
        <div className="border-b pb-5 mb-5">
          <h1 className="text-2xl font-semibold mb-2">Number System</h1>
          <p>
            A Numeral System or Number System is a writing system for expressing
            numbers; that is, a mathematical notation for representing numbers
            of a given set, using digits or other symbols in a consistent
            manner.
          </p>
        </div>
        <div className="border-b pb-5 mb-5">
          <h1 className="text-2xl font-semibold mb-2">
            Number System Equation
          </h1>
          <p>
            A Number System Equation is an equation where the unknowns or
            variables belong to a particular number system, and the operations
            used in the equation are consistent with the rules of that number
            system.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-semibold mb-2">NSE Tools</h1>
          <div>
            NSE or Number System Equation contains some usefull Number system
            calculation{" "}
            <Link
              href="/tools"
              className="text-blue-300 hover:underline underline-offset-2"
            >
              Tools
            </Link>
            . Including,
            <ul className="flex flex-col">
              <Link
                href=""
                className="text-blue-300 hover:underline underline-offset-2"
              >
                Text to Binary
              </Link>
              <Link
                href=""
                className="text-blue-300 hover:underline underline-offset-2"
              >
                Binary to Text
              </Link>
              <Link
                href=""
                className="text-blue-300 hover:underline underline-offset-2"
              >
                Binary to Decimal
              </Link>
              <Link
                href=""
                className="text-blue-300 hover:underline underline-offset-2"
              >
                Decimal to Binary
              </Link>
              <Link
                href=""
                className="text-blue-300 hover:underline underline-offset-2"
              >
                Binary 1&apos;s compliment
              </Link>
              <Link
                href=""
                className="text-blue-300 hover:underline underline-offset-2"
              >
                BCD to Decimal
              </Link>
            </ul>
            and So On...
          </div>
        </div>
      </div>
    </div>
  );
}
