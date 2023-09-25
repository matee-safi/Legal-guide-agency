import React from 'react';
import Data from '../data/reviews.json';

const Reveiws = () => {
  return ( 
    <section id="reviews">
      <div className="reviews-container">
        <h1 className="text-4xl md:text-5xl text-center py-5 md:mb-10">Reviews</h1>
        <div className="grid md:grid-cols-2">
          {Data.map((item) => {
            return (
              <div className="review shadow-lg rounded p-5 m-5">
                <h2 className="text-2xl md:text-3xl">{item.fullname}</h2>
                <p className="md:text-lg text-orange">"{item.review}"</p>
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
