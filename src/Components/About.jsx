import React from 'react'

const About = () => {
  return (
    <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 
    to-black text-white">

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
         justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                  About
                </p>
            </div>
            <p className='text-xl mt-20 '>
            Hi,<br/> I'm Sooraj Rajkumar, a passionate full-stack web developer with expertise in creating dynamic and 
            responsive web applications. With  strong foundation in both front-end and back-end development, I bring designs to life while ensuring better functionality. 
            I stay up-to-date with the latest trends,
             allowing me to deliver cutting-edge solutions and seamless user experiences across devices and platforms.
            
            

            </p>
        </div>
    </div>
  )
}

export default About