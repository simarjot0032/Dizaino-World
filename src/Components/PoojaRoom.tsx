import Navbar from "@Components/Navbar";
import "@Styles/PoojaRoom.css";
import { LuMouse } from "react-icons/lu";
export default function PoojaRoom() {
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
      </div>
    </>
  );
}
