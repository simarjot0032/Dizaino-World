import "../Styles/Home.css";
import { LuMouse } from "react-icons/lu";
import about_pic from "../assets/exterior-pic.jpeg";
import { GrUserExpert } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { IoMdHappy } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { useState } from "react";

export default function Home() {
  const [explation, setexplation] = useState(1);
  let aboutussection = document.querySelector(".design-main-container");

  function HandleScroll() {
    aboutussection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function handletoggle(index: number) {
    setexplation(index);
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
              <p className="experiance-text">Reglar-Clients</p>
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
          <div className="choose-us-main-content">
            <div className="choose-main-right">
              <div
                className={
                  explation == 1
                    ? "choose-right-content-container"
                    : "  innovationnone"
                }
              >
                <h2 className="choose-right-heading">
                  Innovative Design Solutions
                </h2>
                <p className="choose-right-content">
                  At Dizaino World, we pride ourselves on pushing the boundaries
                  of design. Our team thrives on creativity and is dedicated to
                  bringing fresh, innovative ideas to the table. From
                  conceptualizing modern living spaces to incorporating the
                  latest design trends, we strive to make every project a
                  showcase of originality and forward-thinking design.
                </p>
              </div>
              <div
                className={
                  explation == 2
                    ? "choose-right-content-container"
                    : "experiancenone"
                }
              >
                <h2 className="choose-right-heading">
                  Experienced Design Team
                </h2>
                <p className="choose-right-content">
                  Our team is the backbone of our success. With a wealth of
                  experience in the industry, our designers, architects, and
                  craftsmen bring a diverse set of skills and insights to every
                  project. Their collective expertise ensures that each design
                  not only meets but exceeds industry standards.
                </p>
              </div>
            </div>
            <div className="choose-main-left">
              <div
                className="choose-us-card"
                onClick={() => {
                  handletoggle(1);
                }}
              >
                <div className="choose-us-card-header">
                  <MdOutlineDesignServices
                    size={50}
                    color="var(--primarycolor)"
                  />
                </div>
                <div className="choose-us-card-heading">
                  Innovative Design Solutions
                </div>
              </div>

              <div
                className="choose-us-card"
                onClick={() => {
                  handletoggle(2);
                }}
              >
                <div className="choose-us-card-header">
                  <MdOutlineDesignServices
                    size={50}
                    color="var(--primarycolor)"
                  />
                </div>
                <div className="choose-us-card-heading">
                  Experienced Design Team
                </div>
              </div>

              <div className="choose-us-card">
                <div className="choose-us-card-header">
                  <MdOutlineDesignServices
                    size={50}
                    color="var(--primarycolor)"
                  />
                </div>
                <div className="choose-us-card-heading">
                  Innovative Design Solutions
                </div>
              </div>

              <div className="choose-us-card">
                <div className="choose-us-card-header">
                  <MdOutlineDesignServices
                    size={50}
                    color="var(--primarycolor)"
                  />
                </div>
                <div className="choose-us-card-heading">
                  Innovative Design Solutions
                </div>
              </div>

              <div className="choose-us-card">
                <div className="choose-us-card-header">
                  <MdOutlineDesignServices
                    size={50}
                    color="var(--primarycolor)"
                  />
                </div>
                <div className="choose-us-card-heading">
                  Innovative Design Solutions
                </div>
              </div>

              <div className="choose-us-card">
                <div className="choose-us-card-header">
                  <MdOutlineDesignServices
                    size={50}
                    color="var(--primarycolor)"
                  />
                </div>
                <div className="choose-us-card-heading">
                  Innovative Design Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
