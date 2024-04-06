import Navbar from "@Components/Navbar";
import hero from "@Assets/ResidentialExterior/hero.jpg";
import { LuMouse } from "react-icons/lu";
import Footer from "@Components/Footer";
import Accordian from "@Components/Accordian";
import {
  HowWeDesignResidentialExterior,
  ResidentialExteriorAccordionData,
  ResidentialExteriorFeaturesData,
  ResidentialExteriorLightboxData,
} from "@Data/ResidentialExterior";
import FeaturesSection from "@Components/FeaturesSection";
import HowWeDesign from "./HowWeDesign";
import { SlideshowLightbox } from "lightbox.js-react";

export default function ResidentialExterior() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div
          className="hero-section-container"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >
          <div className="hero-section-header-container">
            <h2 className="hero-heading">Elevate Your Home's Curb Appeal</h2>
            <p className="hero-tagline">
              Transform Your Exterior Space into a Stunning Oasis
            </p>
          </div>
          <div className="scroll-down-container">
            <LuMouse size={23} color="var(--mainbgcolor)" />
            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div className="content-container">
          <FeaturesSection featurescard={ResidentialExteriorFeaturesData} />
          <HowWeDesign
            main_head="Extrior"
            array={HowWeDesignResidentialExterior}
          />
          <div className="project-showcase-container">
            <div className="project-container-header">
              <h2 className="project-heading">Exterior</h2>
            </div>
            <div className="project-content-container">
              <div className="project-lightbox">
                <SlideshowLightbox className="lightbox">
                  {ResidentialExteriorLightboxData.map((image, index) => {
                    return (
                      <img
                        src={image.image}
                        alt=""
                        className="project-img"
                        key={index}
                      />
                    );
                  })}
                </SlideshowLightbox>
              </div>
            </div>
          </div>
          <div className="accordian-container">
            <div className="accordian-container-header">
              <h2 className="accordian-container-heading">
                Frequently Asked Question
              </h2>
            </div>
            <div className="accordian-content-container">
              {ResidentialExteriorAccordionData.map((accordian, index) => {
                return (
                  <Accordian
                    objectforquestionandanswer={accordian}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
