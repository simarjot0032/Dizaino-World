import "../Styles/Home.css";
import { LuMouse } from "react-icons/lu";
import about_pic from "../assets/exterior-pic.jpeg";
import { GrUserExpert } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { IoMdHappy } from "react-icons/io";
import { useState } from "react";

export default function Home() {
  let aboutussection = document.querySelector(".design-main-container");

  function HandleScroll() {
    console.log(aboutussection);
    aboutussection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <div className="home-container">
        <div className="home-hero-section">
          <div className="hero-heading-container">
            <h1 className="hero-section-main-heading">
              Your Space, Your Story
            </h1>
            <h2 className="hero-section-secondary-heading">
              Let Dizaino World Write the Perfect Chapter in Design.
            </h2>
          </div>
          <div className="scroll-container" onClick={HandleScroll}>
            <div className="mouse">
              <LuMouse size={23} color="white" />
            </div>
            <div className="scroll-text-container">
              <p className="scroll-text"> Scroll-Down</p>
            </div>
          </div>
        </div>
        {/* stripe section */}
        <div className="design-main-container">
          <div className="design-container">
            <p className="design-text">
              <span className="design-text-content">Build?</span>
              <span className="design-text-content">*</span>{" "}
              <span className="design-text-content">Hire us</span>{" "}
              <span className="design-text-content">*</span>
              <span className="design-text-content"> Craft</span>
              <span className="design-text-content"> *</span>{" "}
              <span className="design-text-content">Build</span>
              <span className="design-text-content"> *</span>{" "}
              <span className="design-text-content">Live</span>
            </p>
          </div>
        </div>
        {/* about us section */}
        <div className="aboutus-section">
          <div className="left-about-section">
            <h2 className="left-about-heading">ABOUT US!</h2>
            <p className="left-about-para">
              Welcome to Dizaino World, where artistry meets functionality, and
              spaces are transformed into living masterpieces. At Dizaino World,
              we are dedicated to redefining the concept of interior and
              exterior design, bringing innovation, elegance, and a touch of
              individuality to every project. With a passionate team of seasoned
              designers, architects, and craftsmen, we embark on a journey to
              curate spaces that not only reflect our clients' visions but also
              exceed their expectations.
            </p>
          </div>
          <div className="right-about-section">
            <img src={about_pic} alt="" className="about-pic" />
          </div>
        </div>
        {/* experiance showcase */}
        <div className="showcase-for-experiance">
          <div className="experiance-container">
            <div className="left-expriance">
              <h2 className="experiance-number">12+</h2>
              <p className="experiance-text">Years</p>
            </div>
            <div className="right-expriance">
              <GrUserExpert size={60} color="var(--primarycolor)" />
            </div>
          </div>
          <div className="experiance-container">
            <div className="left-experiance">
              <h2 className="experiance-number">5000+</h2>
              <p className="experiance-text">Projects</p>
            </div>
            <div className="right-experiance">
              <GrProjects size={60} color="var(--primarycolor)" />
            </div>
          </div>
          <div className="experiance-container">
            <div className="left-experiance">
              <h2 className="experiance-number">500+</h2>
              <p className="experiance-text">Reglar -Clients</p>
            </div>
            <div className="right-experiance">
              <IoMdHappy size={60} color="var(--primarycolor)" />
            </div>
          </div>
        </div>
        {/* why to choose us section */}
        <div className="choose-us-container">
          <div className="choose-us-header">
            <h2 className="choose-us-heading">WHY TO US?</h2>
          </div>
        </div>
      </div>
    </>
  );
}
