import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";

const Nav = () => {
  return ( 
    <nav className="nav flex align-center justify-between">
      <h1 className="p-2 text-xl font-bold"><StaticImage src="../images/mortarboard.png" alt="Logo" /> Legal Guide</h1>
      <StaticImage src="../images/hamburger.png" alt="menu" className="m-3" />
    </nav>
   );
}
 
export default Nav;
