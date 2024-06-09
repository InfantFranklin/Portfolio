import React from "react";
import netflixClone from "../assets/portfolio/netflixClone.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: netflixClone,
      url: "https://netflix-react-web-app.web.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full h-full flex flex-col justify-center bg-gradient-to-b from-black via-black to-gray-800 text-white p-4"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-b-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my works here.</p>
        </div>
        <div className="grid grid-cols-2 px-12 sm:px-0 items-center">
          {portfolios.map(({ id, src, url }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="banner"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="w-1/2 px-6 py-3 duration-200 hover:scale-105"
                >
                  <a href={url} target="blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
