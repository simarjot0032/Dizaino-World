import Navbar from "@Components/Navbar";
import { LuMouse } from "react-icons/lu";
import Footer from "@Components/Footer";
import Accordian from "@Components/Accordian";
import {
  AccordianWashroom,
  FeaturesWashroomData,
  HowwedesingWashroomData,
  WashroomProjects,
} from "@Data/Washroom";
import FeaturesSection from "@Components/FeaturesSection";
import HowWeDesign from "@Components/HowWeDesign";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import hero from "@Assets/Washroom/hero.webp";

export default function Washroom() {
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
            <h2 className="hero-heading">Elevate Your Daily Rituals</h2>
            <p className="hero-tagline">
              Transform Your Washroom into a Sanctuary of Refreshment and
              Renewal
            </p>
          </div>
          <div className="scroll-down-container">
            <LuMouse size={23} color="var(--mainbgcolor)" />
            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div className="content-container">
          <FeaturesSection featurescard={FeaturesWashroomData} />
          <HowWeDesign
            main_head="How We Design Washroom"
            array={HowwedesingWashroomData}
          />
          <div className="project-showcase-container">
            <div className="project-container-header">
              <h1 className="project-heading">Washroom Projects</h1>
            </div>
            <div className="project-content-container">
              <div className="project-lightbox">
                <SlideshowLightbox className="lightbox">
                  {WashroomProjects.map((image: any, index) => {
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
              {AccordianWashroom.map((accordian, index) => {
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
