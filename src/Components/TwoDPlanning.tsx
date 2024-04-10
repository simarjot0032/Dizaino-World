import Navbar from "@Components/Navbar";
import { LuMouse } from "react-icons/lu";
import FeaturesSection from "@Components/FeaturesSection";
import {
  HowWeDesignTwoDPlanning,
  TwoDPlanningAccordionData,
  TwoDPlanningFeaturesData,
  TwoDPlanningLightboxData,
} from "@Data/TwoDPlanning";
import HowWeDesign from "@Components/HowWeDesign";
import Footer from "@Components/Footer";
import { SlideshowLightbox } from "lightbox.js-react";
import Accordian from "./Accordian";

export default function TwoDPlanning() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div
          className="hero-section-container"
          style={{
            backgroundImage: "url('../src/Assets/2Dplanning/hero2.jpg')",
          }}
        >
          <div className="hero-section-header-container">
            <h2 className="hero-heading">
              Unlock Your Vision with Precision 2D Planning
            </h2>
            <p className="hero-tagline">
              Crafting Spatial Blueprints for Seamless Execution
            </p>
          </div>
          <div className="scroll-down-container">
            <LuMouse size={23} color="white" />
            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div className="content-container">
          <FeaturesSection featurescard={TwoDPlanningFeaturesData} />
          <HowWeDesign
            main_head="How We Design 2D"
            array={HowWeDesignTwoDPlanning}
          />
          <div className="project-showcase-container">
            <div className="project-header-container">
              <h2 className="project-heading">2D - Planning Projects</h2>
            </div>
            <div className="project-content-container">
              <div className="project-lightbox">
                <SlideshowLightbox className="lightbox">
                  {TwoDPlanningLightboxData.map((image, index) => {
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
            <div className="accordian-container-heading">
              <h2 className="accordian-container-heading">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="accordian-content-container">
              {TwoDPlanningAccordionData.map((accordian, index) => {
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
