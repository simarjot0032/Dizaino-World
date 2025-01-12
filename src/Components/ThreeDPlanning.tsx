import Navbar from "@Components/Navbar";
import Footer from "@Components/Footer";
import { LuMouse } from "react-icons/lu";
import FeaturesSection from "@Components/FeaturesSection";
import {
  HowWeDesignThreeDPlanning,
  ThreeDPlanningAccordionData,
  ThreeDPlanningFeaturesData,
  ThreeDPlanningLightboxData,
} from "@Data/ThreeDPlanning";
import HowWeDesign from "./HowWeDesign";
import { SlideshowLightbox } from "lightbox.js-react";
import Accordian from "./Accordian";
import hero from "@Assets/Theater/hero.jpg";
export default function ThreeDPlanning() {
  const handlebedroomscroll = () => {
    const bedroomtobescrolled = document.getElementById("content-container");
    bedroomtobescrolled?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
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
            <h2 className="hero-heading">Immersive 3D Planning Solutions</h2>
            <p className="hero-tagline">
              Transforming Visions into Virtual Reality
            </p>
          </div>
          <div className="scroll-down-container" onClick={handlebedroomscroll}>
            <LuMouse size={23} color="white" />
            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div className="content-container" id="content-container">
          <FeaturesSection featurescard={ThreeDPlanningFeaturesData} />
          <HowWeDesign
            main_head="How We Design 3D Plans"
            array={HowWeDesignThreeDPlanning}
          />
          <div className="project-showcase-container">
            <div className="project-container-header">
              <h1 className="project-heading">3D - Planning Projects</h1>
            </div>
            <div className="project-content-container">
              <div className="project-lightbox">
                <SlideshowLightbox className="lightbox">
                  {ThreeDPlanningLightboxData.map((image, index) => {
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
              {ThreeDPlanningAccordionData.map((accordian, index) => {
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
