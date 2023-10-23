import React, { useState, useEffect } from 'react';
import Data from '../data/reviews.json';
import quote from '../../static/quote.png';

const Reveiws = () => {
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

    const reviews = document.querySelectorAll('.review');
    reviews.forEach((review) => {
      observer.observe(review);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return ( 
    <section id="reviews">
      <div className="reviews-container">
        <h1 className="text-4xl md:text-5xl px-3 text-center mt-10 py-5 md:mb-10 font-semibold text-primary">What our clients say about us</h1>
        <div className="md:flex justify-center text-secondary">
          {Data.map((item) => {
            return (
              <div id={item.id} key={item.id} className={`review ${isVisible[item.id] ? 'slide' : ''} shadow-lg rounded p-5 mx-10 my-5`}>
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl md:text-3xl mb-3">{item.fullname}</h2>
                  <img src={quote} alt="double-quotes" />
                </div>
                <p className="md:text-lg">"{item.review}"</p>
                <img className="mt-3 rounded" src={item.image} alt={`${item.fullname} in a university`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
   );
}

export default Reveiws;
