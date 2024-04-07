import Navbar from "@Components/Navbar";
import { LuMouse } from "react-icons/lu";
import Footer from "@Components/Footer";
import {
  HowWeDesignTheater,
  TheaterAccordionData,
  TheaterFeaturesData,
  TheaterLightboxData,
} from "@Data/Theater";
import Accordian from "@Components/Accordian";
import FeaturesSection from "@Components/FeaturesSection";
import HowWeDesign from "./HowWeDesign";
import hero from "@Assets/Theater/hero.webp";
import { SlideshowLightbox } from "lightbox.js-react";
export default function Theater() {
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
            <h2 className="hero-heading">Immerse Yourself in Entertainment</h2>
            <p className="hero-tagline">Where Every Scene Comes to Life</p>
          </div>
          <div className="scroll-down-container">
            <LuMouse size={23} color="var(--mainbgcolor)" />
            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div className="content-container">
          <FeaturesSection featurescard={TheaterFeaturesData} />
          <HowWeDesign
            main_head="How We Design Theater"
            array={HowWeDesignTheater}
          />
          <div className="project-showcase-container">
            <div className="project-container-header">
              <h2 className="project-heading">Theater Projects</h2>
            </div>
            <div className="project-content-container">
              <div className="project-lightbox">
                <SlideshowLightbox className="lightbox">
                  {TheaterLightboxData.map((image, index) => {
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
                Frequently Asked Questions
              </h2>
            </div>
            <div className="accordian-content-container">
              {TheaterAccordionData.map((accordian, index) => {
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
