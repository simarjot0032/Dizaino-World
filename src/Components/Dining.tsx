import Navbar from "@Components/Navbar";
import Footer from "@Components/Footer";
import {
  DiningAccordionData,
  DiningFeaturesData,
  DiningLightboxData,
  HowWeDesignDining,
} from "@Data/Dining";
import Accordian from "@Components/Accordian";
import { LuMouse } from "react-icons/lu";
import FeaturesSection from "@Components/FeaturesSection";
import HowWeDesign from "@Components/HowWeDesign";
import hero from "@Assets/Dining/hero.webp";
import { SlideshowLightbox } from "lightbox.js-react";

export default function Dining() {
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
            <h2 className="hero-heading">Elevate Every Mealtime Experience</h2>
            <p className="hero-tagline">
              Crafting Memories, One Bite at a Time
            </p>
          </div>
          <div className="scroll-down-container">
            <LuMouse size={23} color="var(--mainbgcolor)" />

            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div className="content-container">
          <FeaturesSection featurescard={DiningFeaturesData} />
          <HowWeDesign
            main_head="How We Design Dining"
            array={HowWeDesignDining}
          />
          <div className="project-showcase-container">
            <div className="project-container-header">
              <h1 className="project-heading">Dining Projects</h1>
            </div>
            <div className="project-content-container">
              <div className="project-lightbox">
                <SlideshowLightbox className="lightbox">
                  {DiningLightboxData.map((image: any, index) => {
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
              {DiningAccordionData.map((accordian, index) => {
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
