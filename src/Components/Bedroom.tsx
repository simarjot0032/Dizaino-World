/*url("https://e0.pxfuel.com/wallpapers/1013/482/desktop-wallpaper-stylish-bedroom-design-brown-wood-in-the-bedroom-bedroom-idea-modern-interior-design-bedroom.jpg") image for the background but changed*/
import "../Styles/Bedroom.css";
import { LuMouse } from "react-icons/lu";
import HowWeDesign from "./HowWeDesign";
import { Howwedesing } from "../Data/Bedroom";
import Featuresbedroom from "./Featuresbedroom";
import Navbar from "./Navbar";
import { FeaturesBedroomData } from "../Data/Bedroom";
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
        </div>
      </div>
    </>
  );
}
