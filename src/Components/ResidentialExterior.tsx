import Navbar from "@Components/Navbar";
import hero from "@Assets/ResidentialExterior/hero.jpg";
import { LuMouse } from "react-icons/lu";
export default function ResidentialExterior() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div
          className="hero-section-container"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >
          <div className="hero-section-header-container">
            <h2 className="hero-heading">Elevate Your Home's Curb Appeal</h2>
            <p className="hero-tagline">
              Transform Your Exterior Space into a Stunning Oasis
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
