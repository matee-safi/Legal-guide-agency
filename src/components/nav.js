import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Nav = () => {
  return (
    <header>
      <nav className="nav flex">
        <Link to="/" className="p-2 md:px-7 md:py-4 cursor-pointer">
          <StaticImage src="../images/logo.png" alt="Logo" />
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
