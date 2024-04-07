import Navbar from "@Components/Navbar";
import { LuMouse } from "react-icons/lu";
import hero from "@Assets/CommercialExterior/hero.jpeg";
import {
  CommercialExteriorAccordionData,
  CommercialExteriorFeaturesData,
  CommercialExteriorLightboxData,
  HowWeDesignCommercialExterior,
} from "@Data/CommercialExterior";
import FeaturesSection from "@Components/FeaturesSection";
import Footer from "@Components/Footer";
import Accordian from "@Components/Accordian";
import HowWeDesign from "@Components/HowWeDesign";
import { SlideshowLightbox } from "lightbox.js-react";
export default function CommercialExterior() {
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
            <h2 className="hero-heading">Striking Commercial Exteriors</h2>
            <p className="hero-tagline">
              Transform Your Business Landscape with Design Excellence
            </p>
          </div>
          <div className="scroll-down-container">
            <LuMouse color="white" size={23} />
            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div className="content-container">
          <FeaturesSection featurescard={CommercialExteriorFeaturesData} />
          <HowWeDesign
            main_head="How We Design Exterior"
            array={HowWeDesignCommercialExterior}
          />
          <div className="project-showcase-container">
            <div className="project-header-container">
              <h2 className="project-heading">Commercial Exterior</h2>
            </div>
            <div className="project-content-container">
              <div className="project-lightbox">
                <SlideshowLightbox className="lightbox">
                  {CommercialExteriorLightboxData.map((image, index) => (
                    <img
                      src={image.image}
                      key={index}
                      className="project-img"
                    />
                  ))}
                </SlideshowLightbox>
              </div>
            </div>
          </div>
          <div className="accordian-container">
            <div className="accordian-container-header">
              <h2 className="accordian-container-heading">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="accordian-content-container">
              {CommercialExteriorAccordionData.map((accordian, index) => (
                <Accordian objectforquestionandanswer={accordian} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
