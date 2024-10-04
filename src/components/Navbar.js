import React, {useState, useEffect } from 'react';
import logo from "../assets/smiling.png";
import Button from './common/Button';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  })
  const shadow = scrollPosition > 60;
  return (
    <div className={`hidden navbar ${shadow ? "shadow-2xl" : ""} lg:flex flex-row justify-between items-start h-20 px-20 fixed w-full font-Architects font-bold text-lg bg-white z-10`} >
        <div className='w-1/3 h-full flex items-center gap-5'>
            <img src={logo} alt="logo" className='cursor-pointer rounded-full h-full shadow-2xl' />
        </div>
        <div className='w-1/2 h-full'>
        <ul className='flex flex-row gap-10 justify-center items-center h-full'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Work</li>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        </div>
        <div className='w-1/3 h-full flex items-center justify-end'>
          <Button text="Resume" className="bg-black rounded-xl text-white w-1/2 h-12" />
        </div>
    </div>
  )
}

export default Navbar