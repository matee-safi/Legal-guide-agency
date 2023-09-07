import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import menuIcon from "../images/hamburger.png";
import closeIcon from "../images/close.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return ( 
    <nav className="nav flex align-center justify-between">
      <h1 className="p-2 text-xl font-bold"><StaticImage src="../images/mortarboard.png" logo="Logo" /> Legal Guide</h1>
      
      {isMenuOpen ? (
        <div className="menu backdrop-blur-xl transition">
          <div className="flex justify-end">
            <img className="p-3 cursor-pointer" src={closeIcon} alt="close cross" onClick={toggleMenu} />
          </div>
          <ul className="flex-col flex p-5 gap-3 font-bold text-xl">
            <a href="#main" onClick={toggleMenu} >Home</a>
            <a href="#about" onClick={toggleMenu} >About</a>
            <a href="#services" onClick={toggleMenu} >Packages</a>
            <a href="#reviews" onClick={toggleMenu} >Reviews</a>
            <a href="#our-team" onClick={toggleMenu} >Our Team</a>
            <a href="#walkthrough" onClick={toggleMenu} >Walkthrough</a>
            <a href="#contact" onClick={toggleMenu} >Contact</a>
          </ul>
        </div>
      ) : (
        <div className="menu-icon">
          <button onClick={toggleMenu} className="m-3 cursor-pointer">
            <img
              src={menuIcon}
              alt="menu"
            />
          </button>
        </div>
      )}
    </nav>
  );
}
 
export default Nav;
