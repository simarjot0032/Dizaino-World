import { HashRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "@Components/Home";
import "lightbox.js-react/dist/index.css";
import { useEffect } from "react";
import UnderCons from "@Components/UnderConst";
import Bedroom from "@Components/Bedroom";
import Kitchen from "@Components/Kitchen";
import LivingAreas from "@Components/LivingAreas";
import PoojaRoom from "@Components/PoojaRoom";
import Washroom from "@Components/Washroom";
import DownCeiling from "@Components/DownCeiling";
import Theater from "@Components/Theater";
import Dining from "@Components/Dining";
import ResidentialExterior from "@Components/ResidentialExterior";
import CommercialExterior from "@Components/CommercialExterior";
import ClassicalExterior from "@Components/ClassicalExterior";
import Contact from "@Components/Contact";
import CommercialInterior from "@Components/CommercialInterior";
import { BiUnderline } from "react-icons/bi";
import TwoDPlanning from "@Components/TwoDPlanning";
import ThreeDPlanning from "@Components/ThreeDPlanning";
import TerraceGardern from "@Components/TerraceGardern";
import Admin from "@Components/ADMIN/Admin";
import Login from "@Components/ADMIN/Login";
import ResetPass from "@Components/ADMIN/ResetPass";
import ChangePassword from "@Components/ADMIN/ChangePassword";
import AdminProjectUpload from "@Components/ADMIN/AdminProjectUpload";
import Projects from "@Components/Projects";
import ContactForm from "@Components/ADMIN/ContactForm";

function App() {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  });
  const routesarray = [
    {
      link: "/Bedroom",
      element: <Bedroom />,
    },
    {
      link: "/Kitchen",
      element: <Kitchen />,
    },
    {
      link: "/Living-area",
      element: <LivingAreas />,
    },
    {
      link: "/Pooja-Room",
      element: <PoojaRoom />,
    },
    {
      link: "/Washroom",
      element: <Washroom />,
    },
    {
      link: "/Down-Ceiling",
      element: <DownCeiling />,
    },
    {
      link: "/Theater",
      element: <Theater />,
    },
    {
      link: "/Dining",
      element: <Dining />,
    },
    {
      link: "/Residential-Exterior",
      element: <ResidentialExterior />,
    },
    {
      link: "/Commercial-Exterior",
      element: <CommercialExterior />,
    },
    {
      link: "/Classical-Exterior",
      element: <ClassicalExterior />,
    },
    // {
    //   link: "/Offices",
    //   element: <UnderCons />,
    // },
    // {
    //   link: "/Restruants",
    //   element: <UnderCons />,
    // },
    // {
    //   link: "/Salons",
    //   element: <UnderCons />,
    // },
    {
      link: "/2d-Planning",
      element: <TwoDPlanning />,
    },
    {
      link: "/3D-Planning",
      element: <ThreeDPlanning />,
    },
    {
      link: "/TerraceGarden",
      element: <TerraceGardern />,
    },
    {
      link: "/Projects",
      element: <Projects />,
    },
    {
      link: "/Contact",
      element: <UnderCons />,
    },
    {
      link: "/CommercialInterior",
      element: <CommercialInterior />,
    },
    {
      link: "/Admin",
      element: <Admin />,
    },

    {
      link: "/Admin-login",
      element: <Login />,
    },
    {
      link: "/ProjectUpload",
      element: <AdminProjectUpload />,
    },
    {
      link: "/ChangePassword",
      element: <ChangePassword />,
    },
    {
      link: "/Contact Form",
      element: <ContactForm />,
    },
  ];
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {routesarray.map((item, index): any => {
            return (
              <Route path={item.link} element={item.element} key={index} />
            );
          })}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
