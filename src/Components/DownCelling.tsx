import Navbar from "@Components/Navbar";

export default function DownCelling() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div
          className="hero-section-container"
          style={{
            backgroundImage:
              "url('https://rare-gallery.com/uploads/posts/853114-Interior-Design-Bedroom-Bed-Chandelier-Lamp.jpg')",
            backgroundPosition: "top",
          }}
        >
          <div className="hero-section-header-container">
            <h2 className="hero-heading">
              Illuminate Your Space with DownCeiling Designs
            </h2>
            <p className="hero-tagline">
              Elevate Your Ambiance with Stylish and Functional DownCeiling
              Solutions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
