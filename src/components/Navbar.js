import React, { useState, useEffect } from "react";
import logo from "../assets/smiling.png";
import Button from "./common/Button";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import resume from "../assets/Resume/Naresh_Kumar_Nandam.pdf";
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  })

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.setAttribute("download", "Naresh_Kumar_Nandam.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shadow = scrollPosition > 60;
  return (
    <div className={`navbar h-[10vh] fixed z-10`}> 
        {/* Mobile menu */}
      <div
        className={`px-4 py-4 flex flex-row justify-between items-center h-[10vh] md:px-6 md:py-10 fixed w-full font-Architects font-bold text-lg  ${
          shadow ? "shadow-2xl" : ""
        } ${isNavOpen ? "bg-stone-950" : "bg-white"} z-10 lg:hidden`}
      >
        <div className="w-1/3 h-full flex items-center gap-5">
          <a onClick={() => {setIsNavOpen(false)}}
            href="#"
            className="w-full h-full flex justify-start items-center gap-4"
          >
            {/* <img src={logo}  alt="logo" className='cursor-pointer rounded-full h-full shadow-2xl' /> */}
            <p className={`${isNavOpen ? "text-white" : "text-black"} text-3xl md:text-4xl`}>{"<NK />"}</p>
          </a>
          
        </div>
        <nav>
        <section className="MOBILE-MENU flex lg:hidden">
        <div
            className={`relative w-8 h-6 md:w-10 md:h-6 flex flex-col justify-evenly ${isNavOpen ? "items-center" : "items-end"} cursor-pointer`}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span
              className={`absolute block rounded-full w-full h-1 md:h-1 md:w-8 ${isNavOpen ? "bg-white" : "bg-gray-600"} transition-all duration-300 ${
                isNavOpen ? "rotate-45 top-1/2 transform -translate-y-1/2" : "top-0"
              }`}
            ></span>
            <span
              className={`absolute block rounded-full h-1 w-7 ${isNavOpen ? "bg-white" : "bg-gray-600"} transition-all duration-300 ${
                isNavOpen ? "opacity-0" : "top-1/2 transform -translate-y-1/2"
              }`}
            ></span>
            <span
              className={`absolute block rounded-full h-1 ${isNavOpen ? "w-8" : "w-6"} ${isNavOpen ? "bg-white" : "bg-gray-600"} transition-all duration-300 ${
                isNavOpen ? "-rotate-45 top-1/2 transform -translate-y-1/2" : "bottom-0"
              }`}
            ></span>
          </div>
          <div className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"} relative top-[10vh] bg-transparent`}>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-start py-20 gap-10 h-full">
              <li onClick={()=>{
                setIsNavOpen(false)
              }} className="cursor-pointer">
                <Link to="#">Home</Link>
              </li>
              <li onClick={()=>{
                setIsNavOpen(false)
              }} className="cursor-pointer">
                <Link to="#about">About</Link>
              </li>
              <li onClick={()=>{
                setIsNavOpen(false)
              }} className="cursor-pointer">
                <Link to="#experience">Experience</Link>
              </li>
              <li onClick={()=>{
                setIsNavOpen(false)
              }} className="cursor-pointer">
                <Link to="#projects">Projects</Link>
              </li>
              <li onClick={()=>{
                setIsNavOpen(false)
              }} className="cursor-pointer">
                <Link to="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      </div>
        {/* Desktop menu */}
      <div
        className={`hidden navbar lg:flex flex-row justify-between items-start h-[10vh] px-20 py-3 fixed w-full font-Architects font-bold text-lg bg-white  ${
          shadow ? "shadow-2xl" : ""
        }`}
       >
        <div className="w-1/3 h-full flex items-center gap-5">
          <a
            href="#"
            className="w-full h-full flex justify-start items-center gap-4"
          >
            {/* <img src={logo}  alt="logo" className='cursor-pointer rounded-full h-full shadow-2xl' /> */}
            <p className="text-4xl">{"<NK />"}</p>
          </a>
        </div>
        <div className="w-1/2 h-full">
          <ul className="flex flex-row gap-10 justify-center items-center h-full">
            <li className="cursor-pointer">
              <Link to="#">Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="#about">About</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="#experience">Experience</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="#projects">Projects</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hidden w-1/3 h-full lg:flex items-center justify-end">
          {/* <Button text="Resume" className="bg-black rounded-xl active:scale-95 transition-all text-white w-1/2 h-12" onClick={handleDownloadResume}/>
           */}
            <Tooltip title="Click to download my Resume" arrow>
            <button
              className="bg-black rounded-xl active:scale-95 transition-all text-white w-1/2 h-12"
              onClick={handleDownloadResume}
            >
              Resume
            </button>

            </Tooltip>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
