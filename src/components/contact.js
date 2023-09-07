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
          <a href="https://www.facebook.com/legalguide.edu" target="_blank"><StaticImage width={30} src="../../static/facebook.png" alt="facebook icon" /></a>
          <a href="mailto:legalguide.edu@gmail.com" target="_blank"><StaticImage width={30} src="../../static/gmail.png" alt="gmail icon" /></a>
          <a href="https://api.whatsapp.com/send?phone=0202200820" target="_blank"><StaticImage width={30} src="../../static/whatsapp.png" alt="whatsapp icon" /></a>
        </div>
        <h2 className="mt-10 text-xl font-bold"><StaticImage src="../../static/location.png" alt="location icon" /> Our Location</h2>
        <p>Shahre Naw, Haji Yaqoob Square, Beside Golden Star Hotel, Kabul Business Center, 5th Floor Office# 506 & 507, Kabul, Afghanistan</p>
      </div>
    </section>
   );
}
 
export default Contact;
