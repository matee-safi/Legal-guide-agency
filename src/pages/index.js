import * as React from "react"
import '../styles/global.css';
import BannerAd from "../components/banner-ad";
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
    <SEOComponent title="Legal Guide" des="We provide scholarships and immigration services for afghan folks looking to work, study or conduct business in countries like Canada, England, Scotland, Belarus...etc" />
    <BannerAd />
    <section id="main" className="text-white">
      <div className="dark-overlay">
        <Nav />
        <Hero />
        <ElfsightWidget id="whatsapp-widget" widgetID="3f9dcc1c-c808-48d4-8fa8-d060aa3b11a2" />
      </div>
    </section>
    <AboutUs />
    <Services />
    <Reveiws />
    <div className="bg-blue">
      <OurTeam />
      {/* <Walkthrough /> */}
      <Contact />
      <Footer />
    </div>
  </>
)

export default IndexPage
