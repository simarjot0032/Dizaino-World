import Navbar from "@Components/Navbar";
import "@Styles/LivingAreas.css";
import { LuMouse } from "react-icons/lu";
import {
  AccordianLivingArea,
  FeaturesLivingAreaData,
  HowWeDesignLivingAreas,
  LivingProjectData,
} from "@Data/Livingarea";
import FeaturesSection from "@Components/FeaturesSection";
import HowWeDesign from "@Components/HowWeDesign";
import { SlideshowLightbox } from "lightbox.js-react";
import Accordian from "@Components/Accordian";
import Footer from "@Components/Footer";
import "lightbox.js-react/dist/index.css";

export default function LivingAreas() {
  return (
    <>
      <Navbar />
      <div className="living-area-container">
        <div className="living-area-hero-section-container">
          <div className="living-hero-section-heading-container">
            <h2 className="living-hero-section-heading">
              Elevate Your Living Space
            </h2>
            <p className="living-hero-section-tagline">
              Where Comfort Meets Style: Redefining Living Areas with Elegance
            </p>
          </div>
          <div
            className="scroll-down-container"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            <LuMouse size={23} color="var(--mainbgcolor)" />
            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div className="livingarea-content-container">
          <FeaturesSection featurescard={FeaturesLivingAreaData} />
          <HowWeDesign
            main_head="How We Design Living Areas"
            array={HowWeDesignLivingAreas}
          />
          <div className="project-showcase-container">
            <div className="project-header-container">
              <h1 className="project-heading">Living Areas Projects</h1>
            </div>
            <div className="project-content-container">
              <div className="project-lightbox">
                <SlideshowLightbox className="lightbox">
                  {LivingProjectData.map((image: any, index) => {
                    return (
                      <img
                        src={image.image}
                        alt=""
                        className=" project-img"
                        key={index}
                      />
                    );
                  })}
                </SlideshowLightbox>
              </div>
            </div>
          </div>
          <div className="accordian-container" data-aos="fade-right">
            <div className="accordian-container-header">
              <h2 className="accordian-container-heading">
                Frequently Asked Question
              </h2>
            </div>
            <div className="accordian-content-container">
              {AccordianLivingArea.map((accordian: any, index: any) => {
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
