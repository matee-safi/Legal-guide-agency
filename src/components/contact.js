import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Contact = () => {
  return ( 
    <section id="contact">
      <div className="contact-section p-5 py-10 text-center">
        <h2 className="text-xl mb-2 font-bold">What are you waiting for?</h2>
        <p className="mb-10">Reach out to us through our socials or come to our office, we'll get you set up in no time!</p>
        <h2 className="mb-3 text-xl font-bold">Contact Us</h2>
        <div className="mb-5 flex justify-center gap-5">
          <a href="facebook.com"><StaticImage width={30} src="../../static/facebook.png" alt="facebook icon" /></a>
          <a href="facebook.com"><StaticImage width={30} src="../../static/gmail.png" alt="gmail icon" /></a>
          <a href="facebook.com"><StaticImage width={30} src="../../static/whatsapp.png" alt="whatsapp icon" /></a>
        </div>
        <p><StaticImage src="../../static/location.png" alt="location icon" /> Shahre Naow, Haji Yaqoob Square</p>
      </div>
    </section>
   );
}
 
export default Contact;
