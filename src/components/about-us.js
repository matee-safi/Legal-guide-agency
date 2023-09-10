import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

const AboutUs = () => {
  return ( 
      <section id="about" className="about-us">
        <div className="flex flex-col p-3">
          <h2 className="text-bold text-4xl pb-2 pt-10">About Us</h2>
          <p className='pb-3'>Welcome to our scholarship and migration consultancy!</p>
          <p className='pb-3'>At Legal Guide, we are dedicated to helping you achieve your dreams of studying abroad and exploring global opportunities. Our team of experienced advisors is here to guide you through the entire process, from selecting the right educational institution to securing scholarships and visas.</p>
          <p className='pb-3 font-bold'>Let us help you unlock a world of possibilities.</p>
        </div>
        <StaticImage src="../images/office.webp" alt="Our Office" className="m-3 rounded" />
      </section>
    );
}
 
export default AboutUs;
