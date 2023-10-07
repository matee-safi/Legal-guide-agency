import React, { useState, useEffect } from 'react';
import Data from '../data/team.json';

const OurTeam = () => {
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

    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member) => {
      observer.observe(member);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return ( 
    <section id="our-team">
      <div className="py-3 mt-10 our-team-container">
        <h1 className="text-4xl md:pb-10 text-center md:text-5xl mt-20">Meet Our Team</h1>
        <div className="md:flex justify-center gap-20 my-10 md:mt-0 md:text-2xl">
          {Data.map((member) => {
            return (
              <div key={member.id} id={member.id} className={`flex team-member flex-col ${isVisible[member.id] && 'pop'}`}>
                <div className="rounded p-5 text-center  flex flex-col items-center">
                  <img width={200} className="mt-3 rounded-full mb-4" src={member.image} alt={member.name} />
                  <h2 className="text-2xl">{member.name}</h2>
                  <p className="italic font-light text-orange">{member.role}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
   );
}

export default OurTeam;
