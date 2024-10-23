import About from '../components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skils';
import Hero from '../components/Hero';
import MobileNav from '@/components/MobileNav';
import Nav from '@/components/Nav'
import React, { useState } from 'react'
import Projects from '../components/Projects';
import Reviews from '@/components/Reviews';

const HomePage = () => {

const [nav,setNav]=useState(false);
const openNav =() => setNav(true);
const closeNav = () => setNav(false);

  return (
  <div className="overflow-x-hidden">
    <div>
      {/* Navbar */}
      <MobileNav nav={nav} closeNav={closeNav}/>
      <Nav openNav={openNav}/>
      {/* Hero Section */}
       <Hero />
       <div className="relativ z-[30]"></div>
       {/* About Section */}
       <About />
        {/* Services Section */}
        <Services />
        {/* Skills Section */}
        <Skills />
         {/* Projects Section */}
         <Projects />
         {/* Reviews Section */}
         <Reviews />
      </div> 
    </div>
  );
};

export default HomePage;