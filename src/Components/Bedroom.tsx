/*url("https://e0.pxfuel.com/wallpapers/1013/482/desktop-wallpaper-stylish-bedroom-design-brown-wood-in-the-bedroom-bedroom-idea-modern-interior-design-bedroom.jpg") image for the background but changed*/
import "@Styles/Bedroom.css";
import { LuMouse } from "react-icons/lu";
import HowWeDesign from "@Components/HowWeDesign";
import { Howwedesing } from "@Data/Bedroom";
import Featuresbedroom from "@Components/FeaturesSection";
import Navbar from "@Components/Navbar";
import {
  FeaturesBedroomData,
  BedroomLightHouseData,
  AccordianBedroom,
} from "@Data/Bedroom";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import Accordian from "@Components/Accordian";
import Footer from "@Components/Footer";
export default function Bedroom() {
  const handlebedroomscroll = () => {
    const bedroomtobescrolled = document.getElementById("bedroom-content");
    bedroomtobescrolled?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="bedroom-container">
        <div className="bedroom-hero-container">
          <div className="bedroom-hero-heading-container">
            <h2 className="bedroom-hero-heading">Where Dreams Take Shape</h2>
            <p className="bedroom-hero-para">
              Crafting Comfort and Elegance in Your Bedroom.
            </p>
          </div>
          <div className="scroll-down-container" onClick={handlebedroomscroll}>
            <LuMouse size={23} color="var(--mainbgcolor)" />
            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div
          className="bedroom-content-container"
          id="bedroom-content"
          style={{ scrollMargin: "50px" }}
        >
          <Featuresbedroom featurescard={FeaturesBedroomData} />
          <HowWeDesign main_head="Bedroom" array={Howwedesing} />
          <div
            className="bedroom-project-showcase-container"
            data-aos="flip-left"
          >
            <div
              className="bedroom-project-content-container"
              data-aos="flip-left"
            >
              <div className="bedroom-project-content-header-container">
                <h2 className="project-content-heading">Bedroom</h2>
              </div>
              <div className="bedroom-project-lightbox">
                <SlideshowLightbox className="bedroom-lightbox">
                  {BedroomLightHouseData.map((image, index) => {
                    return (
                      <img
                        src={image.image}
                        alt=""
                        className="bedroom-project-img"
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
              {AccordianBedroom.map((accordian, index) => {
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
