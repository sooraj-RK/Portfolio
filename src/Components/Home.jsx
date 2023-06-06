import React from 'react';
import mainimage from '../assets/black and white .jpg';
import {  MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { useTrail, animated } from 'react-spring';

const Home = () => {
  const name = 'Hi , I am Sooraj Rajkumar';
  const designation = 'Full Stack Developer';

  const nameTrail = useTrail(name.length, {
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
    config: { duration: 500 },
  });

  const designationTrail = useTrail(designation.length, {
    opacity: 1,
    from: { opacity: 0 },
    delay: 3500,
    config: { duration: 500 },
  });
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  px-3 md:flex-row'>
      <div className='flex flex-col justify-center mb-10  md:mt-0'>
        <h2 className='text-4xl sm:text-6xl font-bold text-white text-center sm:text-left  md:mt-10'>
        <div >
        <h1>
        {nameTrail.map((style, index) => (
          <animated.span key={index} style={style}>
            {name[index]}
          </animated.span>
        ))}
      </h1>
      <h2>
        {designationTrail.map((style, index) => (
          <animated.span
            key={index}
            style={{
              ...style,
              color: 'orange', // Change the color to your desired color
              fontSize: '38px', // Change the font size to your desired size
            }}
          >
            {designation[index]}
          </animated.span>
        ))}
      </h2>
    </div>
        </h2>
          
          <div className='flex justify-center pt-3'>
            <Link to='portfolio' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
            bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer'> 
                Portfolio
                <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} 
                    className='ml-1'/>
                </span>
            </Link>
          </div>
        </div>
        <div className='flex justify-center pt-3'>
        <img src={mainimage} alt='Profile pic' className='rounded-2xl  mx-20 w-2/4 md:max-w-full h-auto' />

        </div>
      </div>
    </div>
  );
};

export default Home;
