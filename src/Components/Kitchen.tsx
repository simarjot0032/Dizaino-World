import Navbar from "@Components/Navbar";
import "@Styles/Kitchen.css";
import { LuMouse } from "react-icons/lu";
import { FeaturesKitchenData } from "@Data/Kitchen";
import FeaturesSection from "@Components/FeaturesSection";
import HowWeDesign from "@Components/HowWeDesign";
import { HowWeDesignKitchen, KitchenProjectData } from "@Data/Kitchen";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

export default function Kitchen() {
  const HandleKitchenScroll = () => {
    let content = document.querySelector("#kitchen-content-container");
    content?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <div className="kitchen-container">
        <div className="kitchen-hero-container">
          <div className="kitchen-hero-tagline-para-container">
            <h1 className="kitchen-hero-tagline">
              Where Culinary Dreams Come True
            </h1>
            <p className="kitchen-hero-para">
              Where Kitchens Become the Heart of Your Home.
            </p>
          </div>
          <div
            className="kitchen-scroll-container"
            onClick={HandleKitchenScroll}
          >
            <LuMouse size={25} color="white" />
            <p className="kitchen-scroll-para">Scroll Down</p>
          </div>
        </div>
        <div
          className="kitchen-content-container"
          id="kitchen-content-container"
        >
          <FeaturesSection featurescard={FeaturesKitchenData} />
          <HowWeDesign main_head="Kitchen" array={HowWeDesignKitchen} />

          <div className="kitchen-project-showcase-container">
            <div className="kitchen-project-header-container">
              <h1 className="kitchen-project-heading">Kitchen</h1>
            </div>
            <div className="kitchen-project-content-container">
              <div className="kitchen-project-lightbox">
                <SlideshowLightbox className="kitchen-lightbox">
                  {KitchenProjectData.map((image: any, index) => {
                    return (
                      <img
                        src={image.image}
                        alt=""
                        className="kitchen-project-img"
                        key={index}
                      />
                    );
                  })}
                </SlideshowLightbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
