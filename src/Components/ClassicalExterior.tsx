import Navbar from "@Components/Navbar";
import Footer from "@Components/Footer";
import {
  ClassicalExteriorAccordionData,
  ClassicalExteriorFeatures,
  ClassicalExteriorLightboxData,
  HowWeDesignClassicalExterior,
} from "@Data/ClassicalExterior";
import Accordian from "@Components/Accordian";
import FeaturesSection from "@Components/FeaturesSection";
import { LuMouse } from "react-icons/lu";
import HowWeDesign from "./HowWeDesign";
import { SlideshowLightbox } from "lightbox.js-react";
import hero from "@Assets/ClassicalExterior/hero.jpg";

export default function ClassicalExterior() {
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
            <h2 className="hero-heading">Timeless Elegance in Every Detail</h2>
            <p className="hero-tagline">
              Crafting Architectural Masterpieces Inspired by Classical Design
            </p>
          </div>
          <div className="scroll-down-container" onClick={handlebedroomscroll}>
            <LuMouse color="white" size={23} />
            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div className="content-container" id="content-container">
          {<FeaturesSection featurescard={ClassicalExteriorFeatures} />}
          {
            <HowWeDesign
              main_head="How We Design Exterior"
              array={HowWeDesignClassicalExterior}
            />
          }
          <div className="project-showcase-container">
            <div className="project-header-container">
              <h2 className="project-heading">Classical Exterior</h2>
            </div>
            <div className="project-content-container">
              <div className="project-lightbox">
                <SlideshowLightbox className="lightbox">
                  {ClassicalExteriorLightboxData.map((image, index) => (
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
            <div className="accordian-header-container">
              <h2 className="accordian-container-heading">
                Frequently Asked Question
              </h2>
            </div>
            <div className="accordian-content-container">
              {ClassicalExteriorAccordionData.map((accordian, index) => (
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
