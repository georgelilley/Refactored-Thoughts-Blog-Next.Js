import { IoMenuOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";


export default function Home() {
    return (
        <div className="">
          <AboutSection />
        </div>
      );
    }

function AboutSection() {
  return(
    <>
        <h1 className="text-3xl m-5 text-left font-mono p-5">About</h1>
        <h2 className="text-l text-center font-mono pl-5 ml-5 pr-5 mr-5">🛠️ Crafting Code, One Challenge at a Time</h2>
        <hr className="mt-5"></hr>
        <p className="text-xs m-5 p-5 pt-0 pb-0 font-mono text-justify">
            Hey, I’m George Lilley, a software developer with a background in music technology and a fascination for engineering challenges. This blog is my space to document what I’m learning, explore interesting technical problems, and reflect on the evolving world of software and technology.
            <br></br>
            <br></br>

            My journey into coding started with creative projects—building interactive music systems, writing firmware for robotic instruments, and experimenting with real-time audio processing. As I got deeper into programming, I became interested in backend development, automation, and security. I enjoy working on systems that require problem-solving at a deeper level, whether that’s designing secure web applications, optimising performance, or experimenting with new technologies.
            <br></br>
            <br></br>

            
            </p>


        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-xs m-5 p-5 pt-0 pb-0 font-mon">
            <p>Here, you’ll find a mix of:</p>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <ul className="text-xs m-5 p-5 pt-0 pb-0 font-mono list-disc list-inside">
            <li>Technical deep dives into software engineering concepts, security practices, and development workflows.</li>
            <li>Hands-on projects where I document challenges, decisions, and lessons learned.</li>
            <li>Philosophical musings on how technology shapes our world, for better or worse.</li>      
        </ul>
        </a>


        <ul className="text-xs m-5 p-5 pt-0 pb-0 font-mono text-justify list-disc list-inside">
            <li>Technical deep dives into software engineering concepts, security practices, and development workflows.</li>
            <li>Hands-on projects where I document challenges, decisions, and lessons learned.</li>
            <li>Philosophical musings on how technology shapes our world, for better or worse.</li>      
        </ul>

        <p className="text-xs m-5 p-5 pt-0 pb-0 font-mono text-justify">
            I’m building this blog with Next.js and modern web technologies, both as a way to sharpen my skills and create something meaningful. If you’re passionate about tech, software, or just enjoy thinking about the bigger picture, I hope you find something valuable here.
            
            <br></br>
            <br></br>
            
            Feel free to connect with me on GitHub or drop a message—I'm always up for discussing cool ideas.
        </p>
        
    </>


    
  );
}