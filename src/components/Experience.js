import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import vizmo from "../assets/vizmo-logo_short.svg";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const experienceRef = useRef(null);
    const vimzoRef = useRef(null);
    const logoRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animation for the main Experience section
            gsap.fromTo(
                experienceRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: experienceRef.current,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: true,
                    },
                }
            );

            // Animation for the Vizmo text, coming in from the left
            gsap.fromTo(
                vimzoRef.current,
                { opacity: 0, y: -10 }, // Start from the left
                {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: vimzoRef.current,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: true,
                    },
                }
            );

            // Animation for the logo, coming in from the right
            gsap.fromTo(
                logoRef.current,
                { opacity: 0, x: -300 }, // Start from the right
                {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: logoRef.current,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: true,
                    },
                }
            );
            gsap.fromTo(
                textRef.current,
                { opacity: 0, x: 300 }, // Start from the right
                {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: logoRef.current,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: true,
                    },
                }
            );
        }, experienceRef);

        return () => ctx.revert(); // Cleanup on unmount
    }, []);

    return (
        <div id='experience' className='w-full flex flex-col items-center justify-center px-20 py-24 font-Architects'>
            <h1 ref={experienceRef} className='text-5xl font-extrabold'>Experience</h1>
            <div className='w-full flex flex-col items-center justify-center px-10 py-20'>
                <h1 ref={vimzoRef} className='text-3xl font-bold'>Vizmo</h1>
                <div className='w-full flex justify-center py-10'>
                    <div ref={logoRef} className='w-1/2 object-cover flex justify-center'>
                        <img src={vizmo} alt="vizmo" className='w-1/2 drop-shadow-xl' loading='lazy' />
                    </div>
                    <div ref={textRef} className='w-1/2 leading-10 flex flex-col justify-center items-start px-20 gap-4'>
                        <h1 className='text-2xl font-medium'>Front-end Developer (Intern)</h1>
                        <p className='text-lg font-medium'>June 2024 - September 2024</p>
                        <h1 className='text-lg font-medium'>Key Responsibilities:</h1>
                        <ul className='list-disc px-6 text-left text-lg font-medium'>
                            <li>Bug fixing</li>
                            <li>New features</li>
                            <li>Website migration</li>
                            <li>Testing</li>
                            <li>Software workflow management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
