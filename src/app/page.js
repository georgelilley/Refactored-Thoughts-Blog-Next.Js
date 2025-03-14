/*export const metadata = {
  title: 'Refactored Thoughts',
  viewport: "width=device-width, initial-scale=1.0",
};*/

import { IoMenuOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

export default function Home() {
  return (
      <div className="bg-[rgba(17,17,17,1)] w-full p-0 pt-5">
        <NavBar />
        <HeroSection />
        <BlogIntro />
        <FeaturedArticles />
      </div>
    );
}

function NavBar() {
  return(
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

function HeroSection() {
  return(
    <div className="flex flex-col items-center">
      <h1 className="text-3xl m-5 text-left font-mono p-5">Refactored Thoughts</h1>
      <h2 className="text-l text-center font-mono pl-5 ml-5 pr-5 mr-5"><em>A Coding/Technology/Development Blog</em></h2>
    </div>
    
  );
}

function BlogIntro(){
  return(
    <>
      <hr className="mt-5"></hr>
      <p className="text-xs m-5 p-5 pt-0 pb-0 font-mono text-justify">
        Welcome to my blog! Here, I’ll explore everything from in-depth technical topics to broader philosophical musings on technology. This blog serves as both a learning tool and a place to share my journey as a software engineer. I’m building it with React and other modern web technologies—putting my skills into practice while reflecting on the ever-evolving world of tech. - George Lilley
      </p>
    </>
  );
}

function FeaturedArticles(){
  return(
    <>
      <hr className="mt-5"></hr>
      <h1 className="text-l m-5 p-5 pt-0 pb-0 font-mono text-center">
        Featured Articles
      </h1>
      <div className="h-50 border rounded-xl m-3 p-3">Feature 1</div>
      <div className="h-50 border rounded-xl m-3 p-3">Feature 2</div>
    </>
  )
}

