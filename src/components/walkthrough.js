import React from 'react';

const Walkthrough = () => {
  return ( 
    <section id="walkthrough">
      <div className="walkthrough-container text-center">
        <h2 className="text-4xl font-bold m-5">How it works</h2>
        <p className="text-xl m-5">Watch this 2 minutes long video to get familiar with the whole process, from start to finish</p>
        <div className="video-container flex justify-center p-5">
          <iframe className="video" src="https://www.youtube.com/embed/OWa28ZQqOc8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </section>
   );
}
 
export default Walkthrough;
