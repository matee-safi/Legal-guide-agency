import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

const Services = () => {
  return ( 
    <section id="services">
      <div className='services-container p-3'>
        <h1 className="text-4xl text-center p-10">Our Packages</h1>
        <div className="flex flex-col">
          <div className="card rounded p-5 m-5">
            <h2 className="text-2xl">England</h2>
            <p>Study at oxford university</p>
            <StaticImage src="../images/england-library.jpg" alt="England Library" className="rounded my-3" />
            <div className='flex justify-between items-center pt-2'>
              <p className="italic font-serif">Price: $12000</p>
              <p className="border rounded px-2 hover:bg-white hover:text-black cursor-pointer transition">Show more</p>
            </div>
          </div>
          <div className="card rounded p-5 m-5">
            <h2 className="text-2xl">Scotland</h2>
            <p>Study at St. Andrews University</p>
            <StaticImage src="../images/scotland-university.jpg" alt="Scotland University" className="rounded my-3" />
            <div className='flex justify-between items-center pt-2'>
              <p className="italic font-serif">Price: $26000</p>
              <p className="border rounded px-2 hover:bg-white hover:text-black cursor-pointer transition">Show more</p>
            </div>
          </div>
          <div className="card rounded p-5 m-5">
            <h2 className="text-2xl">Belarus</h2>
            <p>Study at Belarussian state University</p>
            <StaticImage src="../images/belarus-classroom.jpg" alt="Scotland University" className="rounded my-3" />
            <div className='flex justify-between items-center pt-2'>
              <p className="italic font-serif">Price: $6000</p>
              <p className="border rounded px-2 hover:bg-white hover:text-black cursor-pointer transition">Show more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Services;
