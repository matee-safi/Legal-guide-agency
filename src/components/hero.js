import React from 'react';

const Hero = () => {
  return ( 
    <div className='hero flex flex-col items-center justify-center'>
      <h1 className="text-2xl font-bold md:text-4xl">Your Pathway to Success</h1>
      <p className="md:text-2xl">Unlock Your Dreams of Studying Abroad</p>
      <a href="#about" className="md:text-2xl mt-3 underline hover:no-underline scroll-smooth">Learn More</a>
    </div>
   );
}

export default Hero;
