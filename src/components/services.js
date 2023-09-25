import React, { useState } from 'react';
import Data from '../data/services.json';

const Services = () => {
  const [showPopups, setShowPopups] = useState({});

  const togglePopup = (id) => {
    setShowPopups((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section id="services">
      <div className='services-container p-3'>
        <h1 className="text-4xl text-center p-10 md:text-5xl">Our Packages</h1>
        {Data.map((item) => (
          <div key={item.id} className="card md:hidden rounded p-5 m-5 md:text-xl">
            <div className="md:text-center right">
              <h2 className="text-2xl">{item.title}</h2>
              <p>{item.description}</p>
              <img src={item.image} alt={`${item.title}`} className="rounded my-3 max-w-lg max-h-96" />
              <div className='flex justify-between items-center pt-2'>
                <p className="italic font-serif">Price: {item.price}</p>
                <button
                  onClick={() => togglePopup(item.id)}
                  className="border rounded md:hidden px-2 cursor-pointer flex gap-2 items-center"
                >
                  Requirements {showPopups[item.id] ? <img src="upload.png" alt="dropdown" /> : <img src="down-arrow.png" alt="dropdown" />}
                </button>
              </div>
            </div>
            {showPopups[item.id] && (
              <div className="mt-5">
                <div className="popup-content">
                  <div className="popup-body">
                    <ul>
                      {item.requirements.map((requirement) => (
                        <p key={requirement} className="list-disc">{requirement}</p>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {Data.map((item, index) => (
          <div
            key={item.id}
            className={`card hidden rounded md:bg-black ${
              index % 2 === 0 ? 'even' : 'odd'
            }`}
          >
            <div className="relative text-black">
              <img
                src={item.image}
                alt={item.title}
                className="rounded my-3 max-w-lg max-h-96"
              />
              <p className="italic font-serif absolute top-3 left-0 bg-white p-2 bg-gray-600 text-2xl text-white rounded">
                {item.price}
              </p>
            </div>
            <div className="pt-5 requirements">
              <h2 className="text-4xl mb-1">{item.title}</h2>
              <p className="mb-5 text-2xl text-orange">{item.description}</p>
              <h1 className="text-xl">Requirements:</h1>
              {item.requirements.map((requirement) => (
                <p key={requirement} className=" text-lg">
                  - {requirement}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
