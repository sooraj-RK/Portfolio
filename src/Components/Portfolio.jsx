import React from "react";
import Ecommerce from '../assets/E Commerce.jpg'
import AI from '../assets/open ai.jpeg'
import restaurant from '../assets/restaurant.jpg'
import weather from '../assets/weather.jpg'
import BMW from '../assets/BMW.jpg'
import Movie from '../assets/movie search.jpeg'

const Portfolio = () => {
  

  const portfolios = [
    {
      id: 1,
      src: Ecommerce,
      codeLink: "https://github.com/sooraj-RK/Mern-Ecommerce.git", 
      demo: false, 
    },
    {
      id: 2,
      src: AI,
      codeLink: "https://github.com/sooraj-RK/MERN-AI-Image-Generation.git", 
      demo: false, 
    },
    {
      id: 3,
      src: restaurant,
      codeLink: "https://github.com/sooraj-RK/react-restaurants.git", 
      demo: false, 
    },
    {
      id: 4,
      src: weather,
      demoLink:'https://sooraj-rk.github.io/Weather-update/',
      codeLink: "https://github.com/sooraj-RK/Weather-update.git", 
      demo: true, 
    },
    {
      id: 5,
      src: Movie,
      demoLink:'https://sooraj-rk.github.io/movie-search/',
      codeLink: "https://github.com/sooraj-RK/movie-search.git", 
      demo: true, 
    },
    {
      id: 6,
      src: BMW,
      demoLink:'https://sooraj-rk.github.io/BMW/',
      codeLink: "https://github.com/sooraj-RK/BMW.git", 
      demo: true, 
    },
    
    
  ];

  const handleClick = (link) => {
    
    window.location.href = link;
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md object-cover h-64 w-full duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {demo && (
                  <a
                    href={demoLink}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(demoLink);
                    }}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </a>
                )}
                <a
                  href={codeLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(codeLink);
                  }}
                  className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Portfolio;
