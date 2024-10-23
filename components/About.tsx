import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')]  bg-cover bg-center pb-[3rem] pt-[4rem] md:pt-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
          <div>
            <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">ABOUT ME</h1>
            <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
                Transforming <span className="text-yellow-400">Visions</span>
            </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
             <span className="w-[100px} hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
             <p className=" text-[19px] text-slate-300 w-[80%]">
             At Guaranty Trust Bank Kenya, I harnessed my technical expertise to contribute significantly to key IT projects, showcasing myproficiency in a professional setting. During my tenure at the Kenya Red Cross Society, I demonstrated adaptability and unwavering commitment to community service.
             </p>
          </div>
         </div>
         <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image src="/images/about.jpeg"
           alt="user" layout="fill"
           objectFit="contain"
           className="relative z-[11] w-[100%] h-[100%] object-contain"
           />  
           <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem] "></div>
        </div>
       </div>
    </div>
  );
};

export default About;