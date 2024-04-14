import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { LuMouse } from "react-icons/lu";
import { SlideshowLightbox } from "lightbox.js-react";
import { TerraceGargenLightboxData } from "@Data/TerraceGarden";
import { getDownloadURL, list, listAll, ref } from "firebase/storage";
import { storage } from "src/Config/Firebase-config";
import Footer from "./Footer";

export default function Projects() {
  const [images, setimages] = useState<string[]>([]);
  const folder = ref(storage, "Projects/");
  const fetchImages = async () => {
    const imagesUrls: string[] = [];
    const response = await listAll(folder);
    await Promise.all(
      response.items.map(async (item) => {
        const url = await getDownloadURL(item);
        imagesUrls.push(url);
      })
    );
    return imagesUrls;
  };
  useEffect(() => {
    const fun = async () => {
      try {
        const imageUrls = await fetchImages();
        setimages(imageUrls);
      } catch (error) {
        console.log(error);
      }
    };
    fun();
  }, []);
  console.log(images);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div
          className="hero-section-container"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/originals/e3/50/d2/e350d23264d7c1bbc0b9c03489e9367d.jpg')",
          }}
        >
          <div className="hero-section-header-container">
            <h2 className="hero-heading">Our Projects!</h2>
          </div>
          <div className="scroll-down-container">
            <LuMouse size={23} color="white" />
            <p className="scroll-down-content">Scroll Down</p>
          </div>
        </div>
        <div className="content-container">
          <div className="project-showcase-container">
            <div className="project-container-header">
              <h1 className="project-heading">Projects</h1>
            </div>

            <div className="project-content-container">
              <div className="project-lightbox">
                <SlideshowLightbox
                  className="lightbox"
                  images={images.map((url, index) => ({
                    src: url,
                    alt: `Image ${index}`,
                    class: "project-img",
                  }))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
