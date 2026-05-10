import React, { Suspense, lazy } from "react";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Home = lazy(() => import("./components/Home"));
const NavBar = lazy(() => import("./components/NavBar"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const SocialLinks = lazy(() => import("./components/SocialLinks"));

function App() {
  const SectionLoader = () => (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center animate-pulse">
          <span className="text-white font-bold text-lg">IF</span>
        </div>
        <p className="text-gray-500 text-sm tracking-widest uppercase animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );

  return (
    <div className="App">
      <Suspense fallback={<SectionLoader />}>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialLinks />
      </Suspense>
    </div>
  );
}

export default App;
