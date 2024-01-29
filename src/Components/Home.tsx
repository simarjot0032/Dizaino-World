import "../Styles/Home.css";
import Navbar from "./Navbar";

export default function Home() {
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
        </div>
      </div>
    </>
  );
}
