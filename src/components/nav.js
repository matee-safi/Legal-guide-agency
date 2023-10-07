import * as React from "react";
import { Link } from "gatsby";
import { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');

    const closeMenu = () => {
      menuBtn.classList.remove('open');
      menu.classList.remove('open-menu');
      setMenuOpen(false);
    };

    const openMenu = () => {
      menuBtn.classList.add('open');
      menu.classList.add('open-menu');
      setMenuOpen(true);
    };
    const toggleMenu = () => {
      if(!menuOpen) {
        openMenu();
      } else {
        closeMenu();
      }
    };

    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
    menuBtn.addEventListener('click', toggleMenu);

    return () => {
      menuBtn.removeEventListener('click', toggleMenu);
    };
  }, [menuOpen]);

  return (
    <header>
      <nav className={`nav flex align-center justify-between ${menuOpen ? 'open' : ''}`}>
        <h1 className="p-2 text-xl font-bold cursor-pointer md:text-2xl">
          <StaticImage src="../images/mortarboard.png" alt="Logo" />
          <Link to="/"> Legal Guide</Link>
        </h1>
        <div className="menu-btn md:hidden">
          <div className="menu-btn__burger"></div>
        </div>
        <div className="menu backdrop-blur-xl md:backdrop-blur-none transition">
          <ul className="nav-menu flex-col md:flex-row flex p-5 gap-3 font-bold text-xl">
            <Link to="#main">Home</Link>
            <Link to="#about">About</Link>
            <Link to="#services">Services</Link>
            <Link to="#reviews" className='md:hidden'>Reviews</Link>
            <Link to="#our-team" className='md:hidden'>Our Team</Link>
            {/* <Link to="#walkthrough" className='md:hidden'>Walkthrough</Link> */}
            <Link to="#contact">Contact</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
