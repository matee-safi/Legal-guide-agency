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
      <div className="mt-10 our-team-container">
        <svg className="bg-vector" xmlns="http://www.w3.org/2000/svg" width="269" height="365" viewBox="0 0 269 365">
            <path fill="#41D3BD" fill-opacity=".651" fill-rule="evenodd" d="M-46 368c-173.97 0-315-141.03-315-315s141.03-315 315-315S269-120.97 269 53 127.97 368-46 368zm.5-82C82.906 286 187 181.906 187 53.5S82.906-179-45.5-179-278-74.906-278 53.5-173.906 286-45.5 286z"/>
        </svg>
        <h1 className="text-4xl md:pb-10 text-center md:text-5xl mt-20 pt-20 relative font-semibold">Meet Our Team</h1>
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
