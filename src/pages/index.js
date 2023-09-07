import * as React from "react"
import '../styles/global.css';
import Head from "../components/head";
import Nav from "../components/nav"
import Hero from "../components/hero";
import AboutUs from "../components/about-us"
import Services from "../components/services";
import Reveiws from "../components/reviews";
import OurTeam from "../components/our-team";
import Walkthrough from "../components/walkthrough";
import Contact from "../components/contact";
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => (
  <>
    <Head />
    <section id="main">
      <StaticImage className="background-image" src="../images/classroom-interior.png" alt="dark classic classroom" />
      <div className="dark-overlay">
        <Nav />
        <Hero />
      </div>
    </section>
    <AboutUs />
    <Services />
    <Reveiws />
    <OurTeam />
    <Walkthrough />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
