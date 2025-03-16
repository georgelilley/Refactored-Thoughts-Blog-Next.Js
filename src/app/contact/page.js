import { IoMenuOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";


export default function Home() {
    return (
        <div>
          <ContactSection />
        </div>
      );
    }

    function ContactSection() {
      return(
          <>
              <h1 className="text-3xl m-5 text-left font-mono p-5">Contact Me</h1>
              <h2 className="text-l text-center font-mono pl-5 ml-5 pr-5 mr-5">💬 Let’s connect!</h2>
            
              <p className="text-xs m-5 p-5 pt-5 pb-0 font-mono text-justify">
                  The best way to reach me is via email or GitHub. Feel free to get in touch about software, projects, or anything interesting in tech.
                  <br></br>
              </p>
              <ul className="text-l m-5 mb-0 p-5 pt-5 pb-0 font-mono text-left list-inside">
                  <li>📩 Email: george001lilley@hotmail.co.uk</li>
                  <li>💻 GitHub: github.com/georgelilley</li>
                  <li className="mb-0">🔗 LinkedIn: linkedin.com/in/georgelilley </li>
              </ul>
        </> 
      );
    }