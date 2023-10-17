import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Nav = () => {
  return (
    <header>
      <nav className="nav flex">
        <Link to="/" className="px-7 py-4 cursor-pointer">
          <StaticImage src="../images/logo.png" alt="Logo" />
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
