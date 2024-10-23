import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
      <h1 className='heading'>
        Pro<span className='text-yellow-400'>Jects</span>
      </h1>
      <p className='w-[80%] pt-[2rem] mx-auto text-center text-white'>
        Here are some of the projects I have worked on. All available on 
        <a 
          href='https://github.com/TrevorAntony' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='text-yellow-400 underline ml-1'
        >
          GitHub
        </a>.
      </p>
      <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
        <div>
          <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image 
              src='/images/p1.jpg' 
              alt='Early Gum Disease Detection App' 
              layout='fill' 
              className='object-contain'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2'>
              Early Gum Disease Detection App
            </div>
          </div>
        </div>
        <div>
          <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image 
              src='/images/p2.jpg' 
              alt='Food Ordering Web Application' 
              layout='fill' 
              className='object-contain'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2'>
              Food Ordering Web Application
            </div>
          </div>
        </div>
        <div>
          <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image 
              src='/images/p3.jpg' 
              alt='Travel Agency Web Application' 
              layout='fill' 
              className='object-contain'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2'>
              Travel Agency Web Application
            </div>
          </div>
        </div>
        <div>
          <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <Image 
              src='/images/p4.jpg' 
              alt='Incident Report System' 
              layout='fill' 
              className='object-contain'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2'>
              Incident Report System
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
