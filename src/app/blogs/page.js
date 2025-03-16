import { IoMenuOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";


export default function Home() {
    return (
        <div className="">
          <BlogSection />
        </div>
      );
    }

    function BlogSection() {
        return(
            <>
              <h1 className="text-3xl m-5 text-left font-mono p-5">Blogs</h1>
              <div className="flex mt-0 justify-end items-center">
                <div className="w-fit flex justify-end items-center m-5 mt-0 mb-2 border rounded-xl">
                  <h2 className="text-l text-center font-mono pl-5 ml-0 pr-2 text-left">Filter</h2>
                  <div className="text-xl pr-2">
                    <CiFilter />
                  </div>
              </div>
              </div>
              
              <div className="h-50 border rounded-xl m-3 p-3 mb-5">Blog 1</div>
              <div className="h-50 border rounded-xl m-3 p-3 mb-5">Blog 2</div>
              <div className="h-50 border rounded-xl m-3 p-3 mb-5">Blog 3</div>
              <div className="h-50 border rounded-xl m-3 p-3 mb-5">Blog 4</div>
          </>
        );
      }