import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid';
import React from 'react'

const Services = () => {
  return <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
<p className='heading'>
    My <span className='text-yellow-400'>Services</span>
    </p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
        <div>
            <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                    Frontend
                </h1>
                <ul className='text-[15px] text-[#d3d2dd2] font-normal list-disc list-inside'>
              <li>Proficient in React, HTML, CSS, and JavaScript.</li>
              <li>Experience in building responsive and user-friendly web interfaces.</li>
              <li>Skilled in creating reusable components and implementing design specifications.</li>
              <li>Worked on frontend development for the OpenMRS and OHRI projects.</li>
            </ul>
            </div>  
        </div>
        <div>
            <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                    Backend
                </h1>
                <ul className='text-[15px] text-[#d3d2dd2] font-normal list-disc list-inside'>
              <li>Knowledgeable in PHP, C#, Python, Java, and SQL.</li>
              <li>Experience with server-side development, including database management.</li>
              <li>Familiar with MySQL and data security practices.</li>
              <li>Worked on troubleshooting and maintaining software systems in professional environments.</li>
            </ul>
            </div>  
        </div>
        <div>
            <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                    FullStack
                </h1>
                <ul className='text-[15px] text-[#d3d2dd2] font-normal list-disc list-inside'>
             <li> Developed full-stack projects, such as web and mobile applications.</li>
             <li>  Experience with the entire development process, from requirement gathering to deployment.</li>
             <li>  Worked on various projects, including food ordering apps, travel agency systems, and incident report systems.</li>
             <li>  Comfortable with integrating frontend and backend technologies to deliver complete solutions.</li>
              </ul>  
            </div>  
        </div>
    </div>
  </div>


};

export default Services;