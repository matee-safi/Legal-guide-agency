import React from 'react';

const Hero = () => {
  return (
    <div className='hero flex flex-col text-center items-center justify-center md:w-1/2 md:pl-20 md:text-left md:items-start'>
      <h1 className="text-3xl font-bold md:text-5xl">Your Pathway to Success</h1>
      <p className="md:text-2xl text-xl my-3">
        Explore the optimal routes for legal migration, whether for professional opportunities or academic pursuits.
      </p>
      <a href="#about" className="md:text-2xl underline hover:no-underline scroll-smooth">Discover More</a>
    </div>
   );
}

export default Hero;
