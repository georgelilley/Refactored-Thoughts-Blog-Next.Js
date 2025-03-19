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
                <h1 className="text-3xl m-5 text-left font-mono p-5">📌 How I Built My First Next.js Blog </h1>
                <h2 className="text-l text-center font-mono pl-5 ml-5 mb-5 pr-5 mr-5"><em>Yes, This Blog is About How I Made This Blog.</em></h2>
                <h3 className="text-l text-center font-mono pl-5 ml-5 pr-5 mr-5">Topics: </h3>
                <div className="flex m-5">
                    <div className="flex-1">
                        <div className="w-fit border mx-auto p-2 rounded-xl">
                            Next.js
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-fit border mx-auto p-2 rounded-xl">
                            React
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-fit border mx-auto p-2 rounded-xl">
                            TailwindCSS
                        </div>
                    </div>
                </div>
                <hr className="mt-5"></hr>
                <p className="text-xs m-5 p-5 pt-0 pb-0 font-mono text-left">
                    Building my first blog with React was a journey into the world of modern web development, combining the power of Next.js with the flexibility of Tailwind CSS. This project was my first real dive into creating a polished, production-ready web application with Next.js.
                    I wanted a blog that wasn’t just functional but also looked clean, loaded fast, and was easy to maintain. Here’s how I went about building it.
                    <br></br>
                    <br></br>
                    Tech Stack Choice: Why Next.js and Tailwind CSS?
                    Next.js: The Framework of Choice
                    Next.js stood out for a few reasons:
                </p>


                <ul className="text-xs m-5 p-5 pt-0 pb-0 mb-0 font-mono text-justify list-disc list-inside">
                    <li>Performance: It offers server-side rendering (SSR) and static site generation (SSG) out of the box.</li>
                    <li>SEO Benefits: Pre-rendered pages mean better SEO, which is great for discoverability.</li>
                    <li>Easy Deployment: With Vercel, deployment is seamless.</li>
                    <li>File-based Routing: Simple and intuitive.</li>
                </ul>
            
                <p className="text-xs m-5 p-5 pt-0 pb-0 mb-0 font-mono text-justify">
                    Tailwind CSS: Styling Made Easy
                    Rather than writing tons of CSS files, I opted for Tailwind CSS:
                </p>

                <ul className="text-xs m-5 p-5 pt-0 pb-0 font-mono text-justify list-disc list-inside">
                    <li>Utility-first approach makes styling fast and efficient.</li>
                    <li>Consistent design across components.</li>
                    <li>Responsive by default, making the blog mobile-friendly with minimal effort.</li>
                </ul>            
            </>

        );
      }