import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import graduation from "../assets/graduation wheelchair.png";
import college from "../assets/laptop reading.png";
import school from "../assets/homework.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const educationRefs = useRef([]);

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
              start: 'top 80%',
              end: 'top 30%',
              scrub: true,
            },
          }
        );
      });
    }, aboutRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={aboutRef} className='w-full text-center relative top-40 px-20 py-14 font-Architects'>
      <h1 className='text-5xl font-extrabold'>About Me!</h1>
      <p className='text-xl font-medium mt-14 px-10 leading-7 tracking-wide'>
        I’m Naresh Kumar Nandam, a B.Sc graduate in Electronics and Computer Science with a flair for web development! Passionate about crafting eye-catching, user-friendly sites, I love blending tech with creativity. Always on the hunt for the next challenge, ready to turn ideas into digital magic!
      </p>
      <div className='w-full mt-14 flex flex-col gap-7'>
        <h1 className='text-4xl font-extrabold mb-5'>Education</h1>
        <div className='flex flex-col gap-20 mt-4 leading-loose'>
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
              <img src={graduation} alt="graduation" className='max-h-[300px]' />
            </div>
          </div>
          <div ref={el => educationRefs.current[1] = el} className='w-full flex justify-between items-center px-40'>
            <div className='w-1/2 flex justify-start'>
              <img src={college} alt="college" className='max-h-[300px]' />
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
              <img src={school} alt="school" className='max-h-[300px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
