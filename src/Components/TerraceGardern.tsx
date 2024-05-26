import Navbar from "@Components/Navbar";
import Footer from "./Footer";

import Accordian from "./Accordian";
import { SlideshowLightbox } from "lightbox.js-react";
import HowWeDesign from "./HowWeDesign";
import FeaturesSection from "./FeaturesSection";
import { LuMouse } from "react-icons/lu";
import {
  HowWeDesignTerraceGarden,
  TerraceGardenAccordionData,
  TerraceGardenFeaturesData,
  TerraceGargenLightboxData,
} from "@Data/TerraceGarden";

export default function TerraceGardern() {
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
            backgroundImage:
              "url('https://www.homelane.com/blog/wp-content/uploads/2021/03/terrace-garden-ideas.jpg')",
          }}
        >
          <div className="hero-section-header-container">
            <h2 className="hero-heading">
              Elevate Your Urban Living with Tranquil Terrace Gardens
            </h2>
            <p className="hero-tagline">
              Transform Your Rooftop into a Verdant Haven of Serenity and Style
            </p>
          </div>
          <div className="scroll-down-container" onClick={handlebedroomscroll}>
            <LuMouse size={23} color="white" />
            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div className="content-container" id="content-container">
          <FeaturesSection featurescard={TerraceGardenFeaturesData} />
          <HowWeDesign
            main_head="How We Design 3D Plans"
            array={HowWeDesignTerraceGarden}
          />
          <div className="project-showcase-container">
            <div className="project-container-header">
              <h1 className="project-heading">Terrace Gargern Projects</h1>
            </div>
            <div className="project-content-container">
              <div className="project-lightbox">
                <SlideshowLightbox className="lightbox">
                  {TerraceGargenLightboxData.map((image, index) => {
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
              {TerraceGardenAccordionData.map((accordian, index) => {
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
