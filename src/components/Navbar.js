import React, {useState, useEffect } from 'react';
import logo from "../assets/smiling.png";
import Button from './common/Button';
import "./Navbar.css";
import {HashLink as Link} from 'react-router-hash-link';

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
    <div className={`hidden navbar ${shadow ? "shadow-2xl" : ""} lg:flex flex-row justify-between items-start h-[10vh] px-20 py-3 fixed w-full font-Architects font-bold text-lg bg-white z-10`} >
        <div className='w-1/3 h-full flex items-center gap-5'>
            <a href='#' className='w-full h-full flex justify-start items-center gap-4'>
              {/* <img src={logo}  alt="logo" className='cursor-pointer rounded-full h-full shadow-2xl' /> */}
              <p className='text-4xl'>{"<NK />"}</p>
            </a>
        </div>
        <div className='w-1/2 h-full'>
        <ul className='flex flex-row gap-10 justify-center items-center h-full'>
            <li className='cursor-pointer'>
              <Link to='#'>Home</Link>
            </li>
            <li className='cursor-pointer'>
              <Link to='#about'>About</Link>
            </li>
            <li className='cursor-pointer'>
              <Link to='#experience'>Experience</Link>
            </li>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        </div>
        <div className='w-1/3 h-full flex items-center justify-end'>
          <Button text="Resume" className="bg-black rounded-xl active:scale-95 transition-all text-white w-1/2 h-12" />
        </div>
    </div>
  )
}

export default Navbar