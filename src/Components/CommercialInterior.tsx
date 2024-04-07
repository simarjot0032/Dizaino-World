import Navbar from "@Components/Navbar";
import { LuMouse } from "react-icons/lu";
import Footer from "@Components/Footer";
import { CommercialExteriorAccordionData } from "@Data/CommercialExterior";
import Accordian from "@Components/Accordian";
import "@Styles/CommercialInterior.css";
import { useState } from "react";
import {
  CommercialInteriorAccordionData,
  Whatwecandesigntabs,
} from "@Data/CommercialInterior";
export default function CommercialInterior() {
  const Handlescroll = () => {
    let content = document.querySelector("#content-container");
    content?.scrollIntoView({ behavior: "smooth" });
  };
  const [tabdataandindex, settabdataandindex] = useState(0);
  const handleTabClick = (index: number) => {
    console.log(index);
    settabdataandindex(index);
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
            <div className="what-we-design-content-container"></div>
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
