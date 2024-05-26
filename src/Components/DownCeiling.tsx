import Navbar from "@Components/Navbar";
import { LuMouse } from "react-icons/lu";
import Footer from "@Components/Footer";
import {
  DownCeilingAccordianData,
  DownCeilingLightboxData,
  FeaturesDownCeiling,
  HowWeDesignDownCeiling,
} from "@Data/DownCeiling";

import Accordian from "@Components/Accordian";
import FeaturesSection from "@Components/FeaturesSection";
import HowWeDesign from "./HowWeDesign";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import hero from "@Assets/DownCelling/hero.webp";

export default function DownCelling() {
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
            backgroundPosition: "top",
          }}
        >
          <div className="hero-section-header-container">
            <h2 className="hero-heading">
              Illuminate Your Space with DownCeiling Designs
            </h2>
            <p className="hero-tagline">
              Elevate Your Ambiance with Stylish and Functional DownCeiling
              Solutions
            </p>
          </div>
          <div className="scroll-down-container" onClick={handlebedroomscroll}>
            <LuMouse size={25} color="white" />

            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div className="content-container" id="content-container">
          <FeaturesSection featurescard={FeaturesDownCeiling} />
          <HowWeDesign
            main_head="How We Design Down Ceiling"
            array={HowWeDesignDownCeiling}
          />
          <div className="project-showcase-container">
            <div className="project-header-container">
              <h2 className="project-heading">Down Ceiling Projects</h2>
            </div>
            <div className="project-content-container">
              <div className="project-lightbox">
                <SlideshowLightbox className="lightbox">
                  {DownCeilingLightboxData.map((image, index) => {
                    return (
                      <img
                        src={image.image}
                        key={index}
                        alt=""
                        className="project-img"
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
              {DownCeilingAccordianData.map((accordian, index) => {
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
