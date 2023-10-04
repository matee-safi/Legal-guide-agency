import * as React from "react"
import '../styles/global.css';
import SEOComponent from "../components/SEO";
import Nav from "../components/nav"
import Hero from "../components/hero";
import AboutUs from "../components/about-us"
import Services from "../components/services";
import Reveiws from "../components/reviews";
import OurTeam from "../components/our-team";
// import Walkthrough from "../components/walkthrough";
import Contact from "../components/contact";
import Footer from "../components/footer"
import { ElfsightWidget } from 'react-elfsight-widget';

const IndexPage = () => (
  <>
    <SEOComponent title="Legal Guide" des="We provide scholarships and immigration services for afghan folks looking to work or study abroad in countries like England, Scotland, Belarus...etc" />
    <section id="main">
      <div className="dark-overlay">
        <Nav />
        <Hero />
        <ElfsightWidget id="whatsapp-widget" widgetID="3f9dcc1c-c808-48d4-8fa8-d060aa3b11a2" />
      </div>
    </section>
    <AboutUs />
    <Services />
    <Reveiws />
    <OurTeam />
    {/* <Walkthrough /> */}
    <Contact />
    <Footer />
  </>
)

export default IndexPage
