import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeNav(); // Close the mobile nav after scrolling
    }
  };

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000]`}
      style={{ backgroundColor: "#141c27" }}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div onClick={() => scrollToSection('about')} className="nav-link-mobile">About</div>
        <div onClick={() => scrollToSection('services')} className="nav-link-mobile">Services</div>
        <div onClick={() => scrollToSection('skills')} className="nav-link-mobile">Skills & Education</div>
        <div onClick={() => scrollToSection('projects')} className="nav-link-mobile">Projects</div>
        <div onClick={() => scrollToSection('reviews')} className="nav-link-mobile">Reviews</div>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-300"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
