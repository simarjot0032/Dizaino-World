import Navbar from "@Components/Navbar";
import "@Styles/Kitchen.css";
import { LuMouse } from "react-icons/lu";
export default function Kitchen() {
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
          <div className="kitchen-scroll-container">
            <LuMouse size={25} color="white" />
            <p className="kitchen-scroll-para">Scroll Down</p>
          </div>
        </div>
        <div className="kitchen-content-container"></div>
      </div>
    </>
  );
}
