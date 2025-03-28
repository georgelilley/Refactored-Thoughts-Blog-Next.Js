import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { IoMenuOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[rgba(17,17,17,1)] w-full p-0 pt-5 min-h-screen flex flex-col">
          <nav className="bg-[rgba(33,31,29,1)] text-white flex rounded-xl justify-between items-center p-5 ml-[9%] mr-[9%] h-14">
            <div className="flex-1 flex justify-left">
              <Logo />
            </div>
            <div className="hidden flex-1 flex justify-center md:flex">
              <Navigation />
            </div>
            <div className="hidden flex-1 flex justify-end md:flex">
              <Search />      
            </div>
            <div className="text-4xl">
              <LuMenu /> 
            </div>
          </nav>
          {children}
          </div>
      </body>
    </html>
  );
}

function Logo(){
  return(
    <div className="w-14">
      <img src="Original_RF_logo.jpg" alt="My Image" />
    </div>
  );
}

function Navigation(){
  return(
      <ol className="flex space-x-6 text-sm">
        <li>Home</li>
        <li>Articles</li>
        <li>About</li>
        <li>Contact</li>
      </ol>
  );
}

function Search(){
  return(
    <div className="relative max-w-sm">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        🔍
      </div>
    </div>
  );
}