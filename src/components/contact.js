import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Contact = () => {
  return ( 
    <section id="contact">
      <div className="contact-section p-5 py-10 text-center">
        <h2 className="text-xl mb-2 font-bold md:text-3xl">What are you waiting for?</h2>
        <p className="mb-10 md:text-lg">Reach out to us through our socials or come to our office, we'll get you set up in no time!</p>
        <div className="md:hidden mb-10">
          <h2 className="mb-3 text-xl font-bold">Contact Us</h2>
          <div className="flex justify-center gap-5">
            <a href="https://www.facebook.com/legalguide.edu" target="_blank" rel="noreferrer"><StaticImage src="../../static/facebook.png" alt="facebook icon" /></a>
            <a href="mailto:legalguide.edu@gmail.com" target="_blank" rel="noreferrer"><StaticImage src="../../static/email.png" alt="gmail icon" /></a>
            <a href="https://api.whatsapp.com/send?phone=+93795284210" target="_blank" rel="noreferrer"><StaticImage src="../../static/whatsapp.png" alt="whatsapp icon" /></a>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:items-center">
          <div className="px-10">
            <div className="md:text-left md:pr-5 md:mb-10">
              <h2 className="mb-3 text-xl md:text-3xl font-bold flex items-center justify-center md:justify-start"><img src="location.png" alt="pin" className="md:hidden" />Our Location</h2>
              <p className="md:text-lg">Shahre Naw, Haji Yaqoob Square, Beside Golden Star Hotel, Kabul Business Center, 5th Floor Office# 506 & 507, Kabul, Afghanistan</p>
            </div>
            <div className="hidden md:block md:text-left mt-5">
              <h2 className="mb-3 text-3xl font-bold">Contact Us</h2>
              <div className="flex justify-center md:justify-start gap-5">
                <a href="https://www.facebook.com/legalguide.edu" target="_blank" rel="noreferrer"><StaticImage className="hover:scale-125 transition" src="../../static/facebook.png" alt="facebook icon" /></a>
                <a href="https://www.facebook.com/legalguide.edu" target="_blank" rel="noreferrer"><StaticImage className="hover:scale-125 transition" src="../../static/instagram.png" alt="instagram icon" /></a>
                <a href="mailto:legalguide.edu@gmail.com" target="_blank" rel="noreferrer"><StaticImage className="hover:scale-125 transition" src="../../static/email.png" alt="gmail icon" /></a>
                <a href="https://api.whatsapp.com/send?phone=+93795284210" target="_blank" rel="noreferrer"><StaticImage className="hover:scale-125 transition" src="../../static/whatsapp.png" alt="whatsapp icon" /></a>
              </div>
            </div>
          </div>
          <div className="pt-5 md:p-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.622626821314!2d69.168037815258!3d34.536278480475!2m3!1f0!2f39.99999863066117!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16ec0acefa4f9%3A0x88e7ec4fb95384fc!2sKabul%20Business%20Center!5e0!3m2!1sen!2saf!4v1629789260009!5m2!1sen!2saf" width="100%" height="450" style={{border:0}} allowFullScreen="" title="location" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Contact;
