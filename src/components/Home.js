import React, { useEffect, useState } from 'react';
import wallBurst from '../assets/wallBurst.png';
import './Home.css'; // Import the CSS file for styles

const Home = () => {
  const [showText, setShowText] = useState(false);
  const [swipeImage, setSwipeImage] = useState(false);

  useEffect(() => {
    const imageSwipeTimeout = setTimeout(() => {
      setSwipeImage(true);
    }, 2000); // 3 seconds delay for image swipe

    const textShowTimeout = setTimeout(() => {
      setShowText(true);
    }, 3000); // Show text after image swipe

    return () => {
      clearTimeout(imageSwipeTimeout);
      clearTimeout(textShowTimeout);
    };
  }, []);

  return (
    <div id='home' className='relative flex top-[10vh] w-full px-20 font-Architects justify-between items-center'>
      <div className={`w-1/2 transition-transform relative left-[25%] duration-700 ${swipeImage ? 'animate-slide-left' : 'animate-center'}`}>
        <img src={wallBurst} alt="wallBurst" />
      </div>
      <div className={`w-1/2 px-10 flex flex-col text-5xl font-bold gap-4 ${showText ? 'animate-pop-up' : 'opacity-0'}`}>
        <p>Hellooo...!</p>
        <p>I'm Naresh Kumar Nandam.</p>
        <p className='text-3xl'>(A Full Stack Web Developer).</p>
      </div>
    </div>
  );
}

export default Home;
