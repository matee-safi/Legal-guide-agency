import React, { useState, useEffect } from 'react';
import Data from '../data/services.json';

const Services = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prevState) => ({
            ...prevState,
            [entry.target.id]: true,
          }));
        }
      });
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="services" className="text-white">
      <div className='services-container p-3 pb-'>
        <h1 className="text-4xl text-center p-10 md:text-5xl font-semibold">Our Packages</h1>
        <div className="grid md:grid-cols-2">
          {Data.map((item) => (
            <div
            key={item.id}
            id={item.id}
            className={`card border md:border-none ${isVisible[item.id] ? 'slide' : ''} rounded p-5 backdrop-blur-lg m-3 md:text-xl`}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-serif">{item.title}</h2>
                <img src={item.image} alt={`${item.title}`} className="rounded my-3" />
                  <p>{item.types} Visas</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
