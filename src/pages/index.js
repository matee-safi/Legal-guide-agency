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

const IndexPage = () => (
  <>
    <Head />
    <section id="main">
      <Nav />
      <Hero />
    </section>
    <AboutUs />
    {/* <Services /> */}
    {/* <Reveiws /> */}
    {/* <OurTeam /> */}
    {/* <Walkthrough /> */}
    {/* <Contact /> */}
    <Footer />
  </>
)

export default IndexPage
