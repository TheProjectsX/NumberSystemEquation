import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Ubuntu } from "next/font/google";
import Footer from "@/components/Footer";

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Number System Equation",
  description: "A Number system Decoder tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-500 text-white`}>
        <Navbar />
        <div className={`bg-gray-600 ${ubuntu.className}`}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
