import Navbar from "@Components/Navbar";
import "@Styles/PoojaRoom.css";
import { LuMouse } from "react-icons/lu";
import Footer from "@Components/Footer";
import Accordian from "@Components/Accordian";
import {
  AccordianPoojaRoom,
  FeaturesPoojaRoomData,
  HowWeDesignPoojaRoom,
  PoojaRoomProject,
} from "@Data/PoojaRoom";
import FeaturesSection from "@Components/FeaturesSection";
import HowWeDesing from "@Components/HowWeDesign";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

export default function PoojaRoom() {
  const handlebedroomscroll = () => {
    const bedroomtobescrolled = document.getElementById(
      "pooja-room-content-container"
    );
    bedroomtobescrolled?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <Navbar />
      <div className="pooja-room-main-container">
        <div className="pooja-room-hero-section-container">
          <div className="pooja-hero-section-header-container">
            <h2 className="pooja-room-hero-heading">
              Crafting Tranquility in Your Pooja Room
            </h2>
            <p className="pooja-room-hero-tagline">
              Elevate Your Spiritual Sanctuary with Timeless Design
            </p>
          </div>
          <div className="scroll-down-container">
            <LuMouse size={23} color="var(--mainbgcolor)" />
            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div
          className="pooja-room-content-container"
          style={{
            padding: "0.2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FeaturesSection featurescard={FeaturesPoojaRoomData} />
          <HowWeDesing
            main_head="How We Design Pooja Room"
            array={HowWeDesignPoojaRoom}
          />
          <div className="project-showcase-container">
            <div className="project-header-container">
              <h1 className="project-heading">Pooja Room Proejcts</h1>
            </div>
            <div className="project-content-container">
              <div className="project-lightbox">
                <SlideshowLightbox className="lightbox">
                  {PoojaRoomProject.map((image: any, index) => {
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
                Frqequently Assked Question
              </h2>
            </div>
            <div className="accordian-content-container">
              {AccordianPoojaRoom.map((accordian, index) => {
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
