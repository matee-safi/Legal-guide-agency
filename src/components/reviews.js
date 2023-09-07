import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

const Reveiws = () => {
  return ( 
    <section id="reviews">
      <div className="reviews-container">
        <h1 className="text-4xl text-center py-5">Reviews</h1>
        <div className="flex flex-col">
          <div className="card rounded p-5 m-5">
            <h2 className="text-2xl">Karim Ahmadi</h2>
            <p>"Great service, I got my visa in 2 weeks"</p>
            <StaticImage className="mt-3 rounded" src="../images/england-client.webp" alt="Client picture in england university" />
          </div>
          <div className="card rounded p-5 m-5">
            <h2 className="text-2xl">Mutomboo Mukalili</h2>
            <p>"I never thought I'd get this far, thanks to Legal Guide I'm studying at scotland's medical university"</p>
            <StaticImage className="mt-3 rounded" src="../images/scotland-client.jpg" alt="Client picture in england university" />
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Reveiws;
