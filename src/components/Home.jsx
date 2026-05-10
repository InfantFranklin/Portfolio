import React from "react";
import ProfileImage from "../assets/profileImage.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen px-4 pt-24 pb-10 gap-8">
        {/* Text Content */}
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            I'm Infant Franklin
          </h2>
          <h3 className="text-base sm:text-xl font-semibold text-cyan-400 py-2">
            Full Stack Developer · React.js Specialist
          </h3>
          <p className="text-gray-400 py-3 text-sm sm:text-base leading-relaxed">
            5 years of experience building scalable, high-performance web
            applications. I specialize in{" "}
            <span className="text-white font-medium">React.js</span> on the
            frontend and{" "}
            <span className="text-white font-medium">
              Node.js microservices
            </span>{" "}
            on the backend — with a proven track record of shipping
            production-ready systems that deliver real impact.
          </p>
          <ul className="text-gray-400 space-y-1 pb-4 text-xs sm:text-sm">
            <li>🤖 Built AI-powered products from R&D through to production</li>
            <li>
              ⚡ Reduced operational costs by{" "}
              <span className="text-cyan-400 font-semibold">80%</span> by
              replacing third-party APIs with in-house solutions
            </li>
            <li>
              📉 Improved system reliability, cutting downtime by{" "}
              <span className="text-cyan-400 font-semibold">40%</span>
            </li>
            <li>
              🚀 Boosted API response times by{" "}
              <span className="text-cyan-400 font-semibold">25%</span> through
              performance optimization
            </li>
          </ul>
          <div className="flex gap-3 flex-wrap">
            <Link to="portfolio" smooth duration={500} offset={-80}>
              <button className="group text-white px-5 py-2.5 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300 text-sm">
                View Projects
                <span className="group-hover:rotate-90 duration-300">
                  <RiArrowRightSLine size={18} className="ml-1" />
                </span>
              </button>
            </Link>
            <Link to="contact" smooth duration={500} offset={-80}>
              <button className="group text-white px-5 py-2.5 flex items-center rounded-md border border-cyan-500 cursor-pointer hover:scale-105 duration-300 text-sm">
                Contact Me
                <span className="group-hover:rotate-90 duration-300">
                  <RiArrowRightSLine size={18} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Image + Stats */}
        <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
          <img
            src={ProfileImage}
            alt="Infant Franklin"
            className="rounded-2xl w-48 sm:w-64 md:w-full max-w-sm object-cover"
          />
          <div className="flex gap-6 text-center text-white text-sm">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-cyan-400">5+</p>
              <p className="text-gray-400 text-xs">Years Exp.</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-cyan-400">6x</p>
              <p className="text-gray-400 text-xs">Award Winner</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-cyan-400">80%</p>
              <p className="text-gray-400 text-xs">Cost Saved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
