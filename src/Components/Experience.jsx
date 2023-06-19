import React from "react";
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import BootStrap from  '../assets/Bootstrap_logo.png'
import JS from '../assets/javascript.png';
import ReactImage from '../assets/react.png';
import TailwindCss from '../assets/tailwind.png';
import Node from '../assets/node.png';
import MongoDb from '../assets/mongodb logo.jpg';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: HTML,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: CSS,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
        id: 3,
        src:BootStrap,
        title: 'Bootstrap',
        style: 'shadow-violet-500',
      },
    {
      id: 4,
      src: JS,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 5,
      src: ReactImage,
      title: 'React',
      style: 'shadow-sky-300',
    },
    {
      id: 6,
      src: TailwindCss,
      title: 'Tailwind CSS',
      style: 'shadow-sky-600',
    },
    {
      id: 7,
      src: Node,
      title: 'Node JS',
      style: 'shadow-green-300',
    },
    {
      id: 8,
      src:MongoDb,
      title: 'Mongo DB',
      style: 'shadow-emerald-700',
    },
    
  ];

  return (
    <div
      name="experience"
      className="experience-container bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;