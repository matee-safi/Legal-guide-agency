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

import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby";

const IndexPage = (props) => (
  <>
    <Head />
    <section id="main">
      <BackgroundImage className="background-image"
        fluid={props.data.indexImage.childImageSharp.fluid}
        >
        <div className="dark-overlay">
          <Nav />
          <Hero />
        </div>
      </BackgroundImage>
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

export const pageQuery = graphql `
  query {
    indexImage: file(relativePath: { eq: "classroom-interior.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
