import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    const ctaButton = document.querySelector('#cta');
    if (ctaButton) {
      observer.observe(ctaButton);
    }

    // Add a scroll event listener to handle the jump animation
    const handleScroll = () => {
      if (isJumping) return; // Don't trigger jump if it's already jumping
      setIsJumping(true);

      setTimeout(() => {
        setIsJumping(false);
      }, 1000); // Reset the jump animation after 1 second
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isJumping]); // Include isJumping in the dependency array to re-run the effect when it changes

  return (
    <section id="about" className="about-us md:grid md:grid-cols-2 md:p-20 ">
      <div className="flex flex-col p-3 md:text-xl md:col-6">
        <h2 className="text-bold text-4xl md:text-6xl pb-2 pt-10 md:pb-10">About Us</h2>
        <p className='pb-3'>Welcome to our scholarship and migration consultancy!</p>
        <p className='pb-3 md:my-5'>At Legal Guide, we are dedicated to helping you achieve your dreams of studying abroad and exploring global opportunities. Our team of experienced advisors is here to guide you through the entire process, from selecting the right educational institution to securing scholarships and visas.</p>
        <p className='pb-3 mb-10 font-bold'>Let us help you unlock a world of possibilities.</p>
        <a
          id="cta"
          href="#contact"
          className={`cta-btn ${isVisible ? 'slide' : ''} ${isJumping ? 'jumping' : ''} text-center font-bold py-2 text-xl mx-3 mb-3 rounded-full`}
        >
          Speak to our Team <br />
          <small className="font-normal">Schedule a Free Meeting Now</small>
        </a>
      </div>
      <StaticImage src="../images/office.webp" alt="Our Office" className="m-3 rounded md:col-6" />
    </section>
  );
};

export default AboutUs;
