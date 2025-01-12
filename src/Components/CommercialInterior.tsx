import Navbar from "@Components/Navbar";
import { LuMouse } from "react-icons/lu";
import Footer from "@Components/Footer";

import Accordian from "@Components/Accordian";
import "@Styles/CommercialInterior.css";
import { useState } from "react";
import {
  CommercialInteriorAccordionData,
  CommercialInteriorFeaturesData,
  CommercialInteriorLightBoxData,
  HowWeDesignCommercialInterior,
  Whatwecandesigntabcontent,
  Whatwecandesigntabs,
} from "@Data/CommercialInterior";
import FeaturesSection from "./FeaturesSection";
import HowWeDesign from "./HowWeDesign";
import { SlideshowLightbox } from "lightbox.js-react";
// import FeaturesSection from "./FeaturesSection";

export default function CommercialInterior() {
  const Handlescroll = () => {
    let content = document.querySelector("#content-container");
    content?.scrollIntoView({ behavior: "smooth" });
  };

  const [tabdataandindex, settabdataandindex] = useState(0);
  const handleTabClick = (index: number) => {
    console.log(index);
    settabdataandindex(index);
    let tabcontent = document.querySelector(".what-we-design-tab-content");
    tabcontent?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div
          className="hero-section-container"
          style={{
            backgroundImage:
              "url('https://www.litchfieldbuilders.com/hubfs/Design%20Tips%20To%20Get%20The%20Most%20Out%20Of%20Your%20Commercial%20Interior%20Construction.jpg')",
          }}
        >
          <div className="hero-section-header-container">
            <h2 className="hero-heading">Reimagine Your Business Interiors</h2>
            <p className="hero-tagline">
              Crafting Dynamic Environments for Success
            </p>
          </div>
          <div className="scroll-down-container" onClick={Handlescroll}>
            <LuMouse color="white" size="23" />
            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div className="content-container" id="content-container">
          <div className="what-we-can-design-container">
            <div className="what-we-can-design-header">
              <h2 className="what-we-can-design-heading">
                What More We Can Design?
              </h2>
            </div>
            <div className="what-we-can-design-tabs-container">
              {/* <span
                className={
                  tabdataandindex === 0
                    ? "what-we-design-active-tab"
                    : "what-we-can-design-tab"
                }
              >
                Offices
              </span>
              <span className="what-we-can-design-tab">Salons</span>
              <span className="what-we-can-design-tab">Hotels</span>
              <span className="what-we-can-design-tab">Restraunts</span>
              <span className="what-we-can-design-tab">And Many More</span> */}
              {Whatwecandesigntabs.map((tab, index) => {
                return (
                  <span
                    className={
                      tabdataandindex === index
                        ? "what-we-design-active-tab"
                        : "what-we-can-design-tab"
                    }
                    key={index}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab.tab}
                  </span>
                );
              })}
            </div>
            <div className="what-we-design-content-container">
              {/* <div className="what-we-design-left-content-container">
                <p className="what-we-design-left-content">
                  Crafting Inspiring Interiors. Our talented team of designers
                  and architects transform your visions into captivating,
                  functional spaces. Whether its your home or workplace, were
                  dedicated to making your dreams a reality through innovative
                  design and sustainable practices. Experience the Meikle Design
                  difference today.
                </p>
              </div>
              <div className="what-we-design-right-container">
                <img
                  src="https://www.litchfieldbuilders.com/hubfs/Design%20Tips%20To%20Get%20The%20Most%20Out%20Of%20Your%20Commercial%20Interior%20Construction.jpg"
                  alt=""
                  className="what-we-design-img
                  "
                />
              </div> */}
              {Whatwecandesigntabcontent.map((tabcontent, index) => {
                return (
                  <>
                    <div
                      className={
                        tabdataandindex === index
                          ? "what-we-design-tab-content"
                          : "none"
                      }
                    >
                      <div className="tab-content-heading">
                        {tabcontent.heading}
                      </div>
                      <div className="what-we-design-left-content-container">
                        <p className="what-we-design-left-container-content">
                          {tabcontent.content}
                        </p>
                      </div>
                      <div className="what-we-design-right-container">
                        {/* <SimpleImageSlider
                            images={tabcontent.imagearray}
                            showBullets={false}
                            showNavs={true}
                            width={"100px"}
                            height={"300px"}
                            style={{ maxWidth: "500px" }}
                          /> */}
                        {/* <img
                            src={tabcontent.imagearray.map((image, index) => {
                              image.url;
                            })}
                            alt=""
                            className="waht-we-design-image"
                          /> */}
                        {/* {tabcontent.imagearray.map((image, index) => {
                            return (
                              <img
                                src={image.url}
                                alt=""
                                className="what-we-design-image"
                                key={index}
                              />
                            );
                          })} */}
                        <img
                          src={tabcontent.image}
                          alt=""
                          className="what-we-design-image"
                          key={index}
                        />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <FeaturesSection featurescard={CommercialInteriorFeaturesData} />
            <HowWeDesign
              main_head="How We Design Interior"
              array={HowWeDesignCommercialInterior}
            />
          </div>
          <div className="project-showcase-container">
            <div className="project-header-container">
              <h2 className="project-heading">Commercial Interior Projects</h2>
            </div>
            <div className="project-content-container">
              <div className="project-lightbox">
                <SlideshowLightbox className="lightbox">
                  {CommercialInteriorLightBoxData.map((image, index) => {
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
            <div className="accordian-container-header">
              <h2 className="accordian-container-heading">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="accordian-content-container">
              {CommercialInteriorAccordionData.map((accordian, index) => (
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
