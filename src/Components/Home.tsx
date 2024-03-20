import "../Styles/Home.css";
import { LuMouse } from "react-icons/lu";
import about_pic from "../assets/exterior-pic.jpeg";
import { GrUserExpert } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { IoMdHappy } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaStarOfLife } from "react-icons/fa6";
import { BiSolidDetail } from "react-icons/bi";
import { SiAffinitydesigner } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import "../Data/LightBoxDataHome";
import { useState } from "react";
import Footer from "./Footer";
import {
  arrayforcommercialimages,
  arrayforresidentialimages,
} from "../Data/LightBoxDataHome";
import Navbar from "./Navbar";

export default function Home() {
  // const [lightbox, setlightbox] = useState<{ [key: number]: boolean }>({
  //   1: false,
  //   2: false,
  // });
  // function handlelightboxclick(index: number) {
  //   setlightbox((prevLightbox: any) => ({
  //     ...prevLightbox,
  //     [index]: true,
  //   }));
  // }
  // function handlelightboxclosing(index: number) {
  //   setlightbox((prevLightbox: any) => {
  //     return {
  //       ...prevLightbox,
  //       [index]: false,
  //     };
  //   });
  // }

  // usestate and variable section
  const [activetab, setactivetab] = useState(1);
  const [explation, setexplation] = useState(1);
  let aboutussection = document.getElementById("design");
  let choosecontent = document.querySelector(".choose-main-right");

  // function section
  function handletabevent(index: number) {
    setactivetab(index);
  }

  function HandleScroll() {
    aboutussection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function handlechoosescroll() {
    choosecontent?.scrollIntoView({ behavior: "smooth" });
  }
  function handletoggle(index: number) {
    setexplation(index);
  }
  return (
    <>
      <Navbar />
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
              <LuMouse size={23} color="var(--mainbgcolor)" />
            </div>
            <div className="scroll-text-container">
              <a className="scroll-text">Scroll-Down</a>
            </div>
          </div>
        </div>
        {/* stripe section */}
        <div className="design-main-container" id="design">
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
        <div className="content-container">
          <div className="aboutus-section" data-aos="fade-left">
            <div className="left-about-section">
              <h2 className="left-about-heading">ABOUT US!</h2>
              <p className="left-about-para">
                Welcome to Dizaino World, where artistry meets functionality,
                and spaces are transformed into living masterpieces. At Dizaino
                World, we are dedicated to redefining the concept of interior
                and exterior design, bringing innovation, elegance, and a touch
                of individuality to every project. With a passionate team of
                seasoned designers, architects, and craftsmen, we embark on a
                journey to curate spaces that not only reflect our clients'
                visions but also exceed their expectations.
              </p>
            </div>
            <div className="right-about-section">
              <img src={about_pic} alt="" className="about-pic" />
            </div>
          </div>
          {/* experiance showcase */}
          <div className="showcase-for-experiance" data-aos="fade-right">
            <div className="experiance-container">
              <div className="left-expriance">
                <h2 className="experiance-number">12+</h2>
                <p className="experiance-text">Years Experiacne</p>
              </div>
              <div className="right-expriance">
                <GrUserExpert size={60} color="var(--primarycolor)" />
              </div>
            </div>
            <div className="experiance-container">
              <div className="left-experiance">
                <h2 className="experiance-number">5000+</h2>
                <p className="experiance-text">Pojects Completed</p>
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
              <div className="choose-main-right" data-aos="fade-left">
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
                    At Dizaino World, we pride ourselves on pushing the
                    boundaries of design. Our team thrives on creativity and is
                    dedicated to bringing fresh, innovative ideas to the table.
                    From conceptualizing modern living spaces to incorporating
                    the latest design trends, we strive to make every project a
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
                    craftsmen bring a diverse set of skills and insights to
                    every project. Their collective expertise ensures that each
                    design not only meets but exceeds industry standards.
                  </p>
                </div>
                <div
                  className={
                    explation == 3
                      ? "choose-right-content-container"
                      : "experiancenone"
                  }
                >
                  <h2 className="choose-right-heading">
                    Tailored to Your Lifestyle
                  </h2>
                  <p className="choose-right-content">
                    We understand that your home or commercial space is an
                    extension of your lifestyle. Our design philosophy revolves
                    around translating your unique personality and preferences
                    into tangible, functional spaces. By tailoring our designs
                    to fit your lifestyle, we ensure that every project feels
                    like a true reflection of you.
                  </p>
                </div>
                <div
                  className={
                    explation == 4
                      ? "choose-right-content-container"
                      : "experiancenone"
                  }
                >
                  <h2 className="choose-right-heading">Attention to Detail</h2>
                  <p className="choose-right-content">
                    Detail is our design language. We believe that it's the
                    little things that make a big difference. From the choice of
                    materials to the placement of furniture, we pay meticulous
                    attention to every detail. This commitment to precision
                    results in spaces that not only look stunning but also
                    function seamlessly.
                  </p>
                </div>
                <div
                  className={
                    explation == 5
                      ? "choose-right-content-container"
                      : "experiancenone"
                  }
                >
                  <h2 className="choose-right-heading">
                    Versatility in Design Styles
                  </h2>
                  <p className="choose-right-content">
                    One size doesn't fit all, especially in design. Dizaino
                    World embraces the diversity of design styles. Whether
                    you're drawn to the clean lines of modern aesthetics, the
                    timeless elegance of classical design, or the boldness of
                    contemporary styles, our versatile team can bring your
                    vision to life.
                  </p>
                </div>
                <div
                  className={
                    explation == 6
                      ? "choose-right-content-container"
                      : "experiancenone"
                  }
                >
                  <h2 className="choose-right-heading">
                    Client-Centric Approach
                  </h2>
                  <p className="choose-right-content">
                    Your satisfaction is our priority. We take a client-centric
                    approach that involves open communication and collaboration.
                    Throughout the design process, we actively seek your input,
                    listen to your feedback, and adjust our designs to align
                    with your evolving vision. This ensures that the end result
                    is not just a design but a personalized masterpiece.
                  </p>
                </div>
              </div>
              <div className="choose-main-left" data-aos="fade-right">
                <div
                  className="choose-us-card"
                  onClick={() => {
                    handletoggle(1);
                    handlechoosescroll();
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
                    handlechoosescroll();
                  }}
                >
                  <div className="choose-us-card-header">
                    <GrUserExpert size={50} color="var(--primarycolor)" />
                  </div>
                  <div className="choose-us-card-heading">
                    Experienced Design Team
                  </div>
                </div>

                <div
                  className="choose-us-card"
                  onClick={() => {
                    handletoggle(3);
                    handlechoosescroll();
                  }}
                >
                  <div className="choose-us-card-header">
                    <FaStarOfLife size={50} color="var(--primarycolor)" />
                  </div>
                  <div className="choose-us-card-heading">
                    Tailored to Your Lifestyle
                  </div>
                </div>

                <div
                  className="choose-us-card"
                  onClick={() => {
                    handletoggle(4);
                    handlechoosescroll();
                  }}
                >
                  <div className="choose-us-card-header">
                    <BiSolidDetail size={50} color="var(--primarycolor)" />
                  </div>
                  <div className="choose-us-card-heading">
                    Attention to Detail
                  </div>
                </div>

                <div
                  className="choose-us-card"
                  onClick={() => {
                    handletoggle(5);
                    handlechoosescroll();
                  }}
                >
                  <div className="choose-us-card-header">
                    <SiAffinitydesigner size={50} color="var(--primarycolor)" />
                  </div>
                  <div className="choose-us-card-heading">
                    Versatility in Design Styles
                  </div>
                </div>

                <div
                  className="choose-us-card"
                  onClick={() => {
                    handletoggle(6);
                    handlechoosescroll();
                  }}
                >
                  <div className="choose-us-card-header">
                    <RiCustomerService2Line
                      size={50}
                      color="var(--primarycolor)"
                    />
                  </div>
                  <div className="choose-us-card-heading">
                    Client-Centric Approach
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project showcase section */}
          <div className="project-showcase-container" data-aos="fade-left">
            <div className="project-showcase-header">
              <h1 className="project-showcase-heading">Projects</h1>
            </div>
            <div className="project-showcase-content">
              <div className="project-showcase-content-header-container">
                <h2
                  className={
                    activetab === 1
                      ? "project-showcase-tab-heading activetab"
                      : "project-showcase-tab-heading"
                  }
                  onClick={() => handletabevent(1)}
                >
                  COMMERCIAL
                </h2>
                <h2
                  className={
                    activetab === 2
                      ? "project-showcase-tab-heading activetab"
                      : "project-showcase-tab-heading"
                  }
                  onClick={() => handletabevent(2)}
                >
                  RESIDENTIAL
                </h2>
              </div>
              <div className={activetab === 1 ? "project-commercial " : "none"}>
                {/* {arrayforcommercialimages.map((item: any, index: any): any => {
                  return (
                    <React.Fragment key={index}>
                      <img
                        src={item.image}
                        alt=""
                        className="project-img"
                        onClick={() => handlelightboxclick(index + 1)}
                      />
                      <div className="lightbox-container">
                        {lightbox[index + 1] && (
                          <Lightboximage
                            imagelink={item.image}
                            handlecross={handlelightboxclosing(index + 1)}
                          />
                        )}
                      </div>
                    </React.Fragment> 
                  );
                })}*/}
                <SlideshowLightbox className="lightbox-container">
                  {arrayforcommercialimages.map((image) => {
                    return (
                      <img src={image.image} alt="" className="project-img" />
                    );
                  })}
                </SlideshowLightbox>
              </div>
              <div
                className={activetab === 2 ? "project-residential" : " none"}
              >
                <SlideshowLightbox className="lightbox-container">
                  {arrayforresidentialimages.map((image) => {
                    return (
                      <img src={image.image} alt="" className="project-img" />
                    );
                  })}
                </SlideshowLightbox>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
