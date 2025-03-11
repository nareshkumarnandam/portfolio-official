import React, { useEffect, useState } from 'react';
import wallBurst from '../assets/wallBurst.png';
import './Home.css'; // Import the CSS file for styles

const Home = () => {
  const [showText, setShowText] = useState(false);
  const [swipeImage, setSwipeImage] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showText2, setShowText2] = useState(false);


  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px is Tailwind's lg breakpoint
    };

    // Set initial screen size
    checkScreenSize();

    // Add event listener to update on resize
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);


  useEffect(() => {
    
    const imageSwipeTimeout = setTimeout(() => {
      setSwipeImage(true);
    }, 2000); // 3 seconds delay for image swipe

    const textShowTimeout = setTimeout(() => {
      setShowText(true);
    }, 3000); // Show text after image swipe

    const textShowSmallScreen = setTimeout(() => {
      setShowText2(true);
    }, 1000);

    return () => {
      clearTimeout(imageSwipeTimeout);
      clearTimeout(textShowTimeout);
      clearTimeout(textShowSmallScreen);
    };
  }, []);

  return (
    <div id='home' className='relative flex flex-col md:flex-row top-[10vh] w-full px-5 py-10 lg:px-20 font-Architects justify-between items-center overflow-hidden'>
      {
        isLargeScreen ? (
          <div className={`w-full md:w-1/2 transition-transform relative left-[25%] duration-700 ${swipeImage ? 'animate-slide-left' : 'animate-center'}`}>
        <img src={wallBurst} className='object-contain relative bottom-20' alt="wallBurst" />
      </div>
        ) : (
          <div className={`w-full md:w-1/2 transition-transform relative duration-700 animate-center`}>
        <img src={wallBurst} className='object-contain' alt="wallBurst" />
      </div>
        )
      }
      {
        isLargeScreen ? (
          <div className={`w-full md:w-1/2 lg:px-10 flex flex-col text-3xl text-center lg:text-5xl font-bold gap-4 relative bottom-16 ${showText ? 'animate-pop-up' : 'opacity-0'}`}>
        <p>Hellooo...!</p>
        <p>I'm Naresh Kumar Nandam.</p>
        <p className='text-3xl'>(A Full Stack Web Developer.)</p>
      </div>
        ) : (
          <div className={`w-full md:w-1/2 lg:px-10 flex flex-col text-3xl text-center lg:text-5xl font-bold gap-4 ${showText2 ? 'animate-pop-up-2' : 'opacity-0'}`}>
        <p>Hellooo...!</p>
        <p>I'm Naresh Kumar Nandam.</p>
        <p className='text-3xl'>(A Full Stack Web Developer)</p>
      </div>
        )
      }
      
    </div>
  );
}

export default Home;
