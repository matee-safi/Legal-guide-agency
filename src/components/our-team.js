import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

const OurTeam = () => {
  return ( 
    <section id="our-team">
      <div className="mt-10 our-team-container">
        <h1 className="text-4xl text-center">Meet Our Team</h1>
        <div className="flex flex-col">
          <div className="rounded p-5 m-5 text-center">
            <StaticImage width={150} className="mt-3 rounded-full mb-4" src="../images/profile-placeholder.png" alt="CEO image" />
            <h2 className="text-2xl">Noor Muhammad</h2>
            <p className="italic font-light">Founder/CEO</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded p-5 m-5 text-center">
            <StaticImage width={150} className="mt-3 rounded-full mb-4" src="../images/profile-placeholder.png" alt="CEO image" />
            <h2 className="text-2xl">Tameem Sofikheil</h2>
            <p className="italic font-light">CMO</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded p-5 m-5 text-center">
            <StaticImage width={150} className="mt-3 rounded-full mb-4" src="../images/profile-placeholder.png" alt="Our team members image" />
            <h2 className="text-2xl">John Doe</h2>
            <p className="italic font-light">Adviser</p>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default OurTeam;
