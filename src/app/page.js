/*export const metadata = {
  title: 'Refactored Thoughts',
  viewport: "width=device-width, initial-scale=1.0",
};*/

export default function Home() {
  return (
      <div className="bg-[rgba(17,17,17,1)] h-screen w-full p-0 pt-5">
        <NavBar />
        <HeroSection />
        <BlogIntro />
        <h1>Featured Articles</h1>
      </div>
    );
}

function NavBar() {
  return(
    <nav className="bg-[rgba(33,31,29,1)] text-white flex rounded-xl justify-between items-center p-5 ml-[9%] mr-[9%] h-14">
      <div className="flex-1 flex justify-left">
        <Logo />
      </div>
      <div className="flex-1 flex justify-center">
        <Navigation />
      </div>
      <div className="flex-1 flex justify-end">
        <Search />      
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
    <div className="flex flex-col justify-between items-center h-[80%]">
      <h2 className="m-5 text-center text-2xl font-mono p-5 mt-20">Coding/Technology/Development</h2>
      <h1 className="m-5 text-center text-8xl font-mono p-5">Refactored Thoughts</h1>
      <h3 className="m-5 text-center text-xl font-mono p-5 mb-20">A blog by George Lilley</h3>
    </div>
    
  );
}

function BlogIntro(){
  return(
    <h1>
      Here, I’ll explore everything from deep dives into technical topics to wide-ranging philosophical reflections on the future and technology. I’ve always believed that writing down thoughts is powerful—innovators and professionals do it to clarify ideas and spark new ones. For me, this blog is a way to practice, grow, and share my perspective on the fast-moving world of tech.
    </h1>
  );
}


