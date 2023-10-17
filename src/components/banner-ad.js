import React, { useEffect, useState } from "react";

const BannerAd = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBanner(true);
    }, 15000);
  }, []);

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  return (
    <div className={`banner-ad ${showBanner ? 'slide-down' : 'slide-up'}`}>
      <div className="flex justify-center border-gray-200 py-5 px-8">
        <h2 className="text-xl font-bold leading-8">
          Join our upcoming German class! Enroll via WhatsApp now!
          <a href="https://wa.me/93795284210/?text=I%20am%20interested%20in%20joining%20your%20upcoming%20german%20class!" target="_blank" className="ml-3 bg-yellow-400 hover:bg-yellow-500 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded cursor-pointer active:bg-yellow-700 active:border-yellow-700">Join</a>
        </h2>
      </div>
      <img
        src="close.png"
        alt="close cross"
        className="cross"
        onClick={handleCloseBanner}
      />
    </div>
  );
};

export default BannerAd;
