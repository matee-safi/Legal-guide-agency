import React from 'react';
import Data from '../data/team.json';

const OurTeam = () => {
  return ( 
    <section id="our-team">
      <div className="mt-10 our-team-container">
        <h1 className="text-4xl md:pb-10 text-center md:text-5xl md:mt-20">Meet Our Team</h1>
        <div className="md:flex justify-center gap-20 my-10 md:text-2xl">
          {Data.map((member, index) => {
            return (
              <div key={index} className="flex flex-col">
                <div className="rounded p-5 text-center  flex flex-col items-center">
                  <img width={200} className="mt-3 rounded-full mb-4" src={member.image} alt="CEO image" />
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

{/* <div className="md:flex justify-center gap-20 my-20 md:text-2xl">
          <div className="flex flex-col md:relative top-10">
            <div className="rounded p-5 text-center">
              <StaticImage width={200} className="mt-3 rounded-full mb-4" src="../images/profile-placeholder.png" alt="CEO image" />
              <h2 className="text-2xl">Tameem Sofikheil</h2>
              <p className="italic font-light text-orange">CMO</p>
            </div>
          </div>
          <div className="flex flex-col md:relative bottom-24">
            <div className="rounded p-5 text-center">
              <StaticImage width={200} className="mt-3 rounded-full mb-4" src="../images/profile-placeholder.png" alt="CEO image" />
              <h2 className="text-2xl">Noor Muhammad</h2>
              <p className="italic font-light text-orange">Founder/CEO</p>
            </div>
          </div>
          <div className="flex flex-col md:relative top-10">
            <div className="rounded p-5 text-center">
              <StaticImage width={200} className="mt-3 rounded-full mb-4" src="../images/profile-placeholder.png" alt="Our team members image" />
              <h2 className="text-2xl">John Doe</h2>
              <p className="italic font-light text-orange">Adviser</p>
            </div>
          </div>
        </div> */}