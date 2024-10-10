import React, { useEffect,useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import graduation from "../assets/graduation wheelchair.png";
import college from "../assets/laptop reading.png";
import school from "../assets/homework.png";
import java from "../assets/skills/java.png";
import html5 from "../assets/skills/html5.png";
import css3 from "../assets/skills/css3.png";
import js from "../assets/skills/js.png";
import ts from "../assets/skills/pngegg.png";
import react from "../assets/skills/react.png";
import vue from "../assets/skills/vue.png";
import astro from "../assets/skills/astro.png";
import tailwind from "../assets/skills/tailwind.png";
import quasar from "../assets/skills/quasar.png";
import nodejs from "../assets/skills/nodejs.png"
import express from "../assets/skills/express.png";
import mongodb from "../assets/skills/mongo.png";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    {
        name: "Java",
        image: java
    },
    {
        name: "HTML",
        image: html5
    },
    {
        name: "CSS",
        image: css3
    },
    {
        name: "JavaScript",
        image: js
    },
    {
        name: "TypeScript",
        image: ts
    },
    {
        name: "React",
        image: react
    },
    {
        name: "Vue",
        image: vue
    },
    {
        name: "Astro",
        image: astro
    },
    {
        name: "Tailwind",
        image: tailwind
    },
    {
        name: "Quasar",
        image: quasar
    },
    {
        name: "NodeJS",
        image: nodejs
    },
    {
        name: "ExpressJS",
        image: express
    },
    {
        name: "MongoDB",
        image: mongodb
    }
    
]

const About = () => {
  const aboutRef = useRef(null);
  const educationRefs = useRef([]);
  const textRef = useRef([]);
  const skillRefs = useRef([]);
  const buttonsRef = useRef([]);

  const [currentIndex, setCurrentIndex] = useState(0);
    const totalSkills = skills.length;
    const itemsToShow = 5;

    const nextSlide = () => {
        // Fade out current images
        gsap.to(skillRefs.current, { opacity: 0, y:20, duration: 0.5, onComplete: () => {
            setCurrentIndex((prevIndex) => 
                (prevIndex + itemsToShow) % totalSkills
            );
            // Fade in new images
            gsap.to(skillRefs.current, { opacity: 1,y:0, duration: 0.5 });
        }});
    };

    const prevSlide = () => {
        // Fade out current images
        gsap.to(skillRefs.current, { opacity: 0, duration: 0.5, onComplete: () => {
            setCurrentIndex((prevIndex) => 
                (prevIndex - itemsToShow + totalSkills) % totalSkills
            );
            // Fade in new images
            gsap.to(skillRefs.current, { opacity: 1, duration: 0.5 });
        }});
    };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the main About section
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          },
        }
      );

      // Animation for each education item
      educationRefs.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, // Animate from left for even, right for odd
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: el,
              start: 'top 40%',
              end: 'top 10%',
              scrub: true,
            },
          }
        );
      });

      textRef.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: index % 2 === 0 ? 100 : -100 }, // Animate from left for even, right for odd
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: el,
              start: 'top 30%',
              end: 'top 20%',
              scrub: true,
            },
          }
        );
      });
      
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: 'top 40%',
            end: 'top 30%',
            scrub: true,
          },
        }
      );


      gsap.fromTo(
        skillRefs.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: skillRefs.current,
            start: 'top 40%',
            end: 'top 30%',
            scrub: true,
          },
        }
      );

    }, aboutRef);


    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div id='about' ref={aboutRef} className='w-full flex flex-col items-center justify-center px-20 pt-28 font-Architects'>
      <h1 className='text-5xl font-extrabold'>About Me!</h1>
      <p className='text-xl font-medium mt-14 px-56 leading-7 tracking-wide'>
        I’m Naresh Kumar Nandam, a B.Sc graduate in Electronics and Computer Science with a flair for web development! Passionate about crafting eye-catching, user-friendly sites, I love blending tech with creativity. Always on the hunt for the next challenge, ready to turn ideas into digital magic!
      </p>
      <div className='w-full mt-14 flex flex-col items-center justify-center gap-7'>
        <h1 ref={el => textRef.current[0] = el} className='text-4xl font-extrabold mb-5'>Education</h1>
        <div className='flex flex-col gap-20 mt-4 px-10 leading-loose'>
          <div ref={el => educationRefs.current[0] = el} className='w-full flex justify-between items-center px-40'>
            <div className='w-1/2 text-left text-2xl font-medium tracking-wide'>
              <h1 className='text-3xl font-extrabold py-3'>Graduation :</h1>
              <h1>B.Sc - Electronics and Computer Science</h1>
              <h1>Aurora's Degree & P.G. College - Chikkadpally</h1>
              <h1>Osmania University - Hyderabad</h1>
              <h1>2020 - 2023</h1>
              <h1>CGPA - 8.14 / 10</h1>
            </div>
            <div className='w-1/2 flex justify-end'>
              <img src={graduation} alt="graduation" className='max-h-[350px]' />
            </div>
          </div>
          <div ref={el => educationRefs.current[1] = el} className='w-full flex justify-between items-center px-40'>
            <div className='w-1/2 flex justify-start'>
              <img src={college} alt="college" className='max-h-[350px]' />
            </div>
            <div className='w-1/2 text-left text-2xl font-medium tracking-wide'>
              <h1 className='text-3xl font-extrabold py-3'>Intermediate :</h1>
              <h1>Sri Gayatri Junior College</h1>
              <h1>Telangana State Board of Intermediate Education</h1>
              <h1>2018 - 2020</h1>
              <h1>CGPA - 8.64 / 10</h1>
            </div>
          </div>
          <div ref={el => educationRefs.current[2] = el} className='w-full flex justify-between items-center px-40'>
            <div className='w-1/2 text-left text-2xl font-medium tracking-wide'>
              <h1 className='text-3xl font-extrabold py-3'>Secondary Education :</h1>
              <h1>Covells High School</h1>
              <h1>Board of Secondary Education, Telangana (BSET)</h1>
              <h1>2017 - 2018</h1>
              <h1>CGPA - 9.3 / 10</h1>
            </div>
            <div className='w-1/2 flex justify-end'>
              <img src={school} alt="school" className='max-h-[350px]' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mt-14 flex flex-col items-center justify-center gap-7 px-40'>
        <h1 ref={el => textRef.current[1] = el} className='text-4xl font-extrabold mt-5'>Skills</h1>
        <div ref={buttonsRef} className='w-full h-36 flex justify-center gap-10 items-center mt-20'>
            <div className='flex justify-center h-full items-center'>
                <button 
                        onClick={prevSlide} 
                        className={`relative left-0 p-2 w-10 h-10 rounded-full ${currentIndex === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-600 text-white hover:bg-gray-500'}`}
                        disabled={currentIndex === 0}
                    >
                        {"<"}
                </button>
            </div>
            <div ref={el => skillRefs.current = el} className='grid grid-cols-5 w-full justify-center items-center gap-10'>
        {skills.slice(currentIndex, currentIndex + itemsToShow).map((skill, index) => (
                    <div key={index} className="skill-item flex justify-center items-center p-4">
                        <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                ))}
                
        </div>
            <div className='flex justify-center items-center'>
                    <button 
                        onClick={nextSlide} 
                        className={`relative right-0 p-2 w-10 h-10 rounded-full ${currentIndex >= totalSkills - itemsToShow ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-600 text-white hover:bg-gray-500'}`}
                        disabled={currentIndex >= totalSkills - itemsToShow}
                    >
                        {">"}
                    </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
