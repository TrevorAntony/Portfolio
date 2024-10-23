import React from 'react'
import SkilsItem from './SkilsItem';
import SkilsLanguage from './SkilsLanguage';

const Skils = () => {
  return (<div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
    <h1 className='heading'>Education & <span className='text-yellow-400'>Skills</span>
    </h1>
    <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
            <SkilsItem title="B.Sc. in Informatics and Computer Science" year="2020-2024" />
            <SkilsItem title="Server Administration: Fundamentals" year="2022" />
            <SkilsLanguage 
            skill1="html"
            skill2="css"
            skill3="javascript"
            skill4="php"
            skill5="python"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
            level4="w-[70%]"
            level5="w-[60%]"
             />
        </div>
        <div>
            <SkilsItem title="Certified in Cybersecurity, ISC2" year="2024"/>
            <SkilsItem title="IT Essentials: PC Hardware and Software, Cisco" year="2020"/>
            <SkilsLanguage
            skill1="React Js"
            skill2="Next Js"
            skill3="TypeScript"
            skill4="C#"
            skill5="SQL"
            level1="w-[81%]"
            level2="w-[78%]"
            level3="w-[60%]"
            level4="w-[50%]"
            level5="w-[70%]"/>
        </div>
    </div>
    </div>
  );
}

export default Skils