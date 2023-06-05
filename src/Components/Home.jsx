import React from 'react';
import mainimage from '../assets/black and white .jpg';
import {  MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-3 md:flex-row'>
      <div className='flex flex-col justify-center h-full mt-20 md:mt-0'>
        <h2 className='text-4xl sm:text-6xl font-bold text-white text-center sm:text-left mt-10 md:mt-10'>
          I am a Full Stack Developer
        </h2>
          <p className=' text-2xl text-stone-500 py-4 '>
            Full stack developer driven by a continuous desire to learn, solve
            problems and innovate. I am excited to take on new challenges,
            leverage my existing skills, and contribute to the success of a
            forward-thinking organization that values collaboration, creativity.
          </p>
          <div>
            <Link to='portfolio' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
            bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'> 
                Portfolio
                <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} 
                    className='ml-1'/>
                </span>
            </Link>
          </div>
        </div>
        <div>
        <img src={mainimage} alt='Profile pic' className='rounded-2xl mb-10 mx-auto w-3/4 md:max-w-full h-auto' />

        </div>
      </div>
    </div>
  );
};

export default Home;
