import React, { useState, useEffect } from 'react';
import Data from '../data/reviews.json';

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
        } else {
          setIsVisible((prevState) => ({
            ...prevState,
            [entry.target.id]: false,
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
        <h1 className="text-4xl md:text-5xl text-center py-5 md:mb-10">Reviews</h1>
        <div className="grid md:grid-cols-2">
          {Data.map((item) => {
            return (
              <div id={item.id} key={item.id} className={`review ${isVisible[item.id] ? 'slide' : ''} shadow-lg rounded p-5 m-5`}>
                <h2 className="text-2xl md:text-3xl">{item.fullname}</h2>
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
