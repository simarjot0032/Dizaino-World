import { HashRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";
import UnderCons from "./Components/UnderConst";
import Bedroom from "./Components/Bedroom";

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
      element: <UnderCons />,
    },
    {
      link: "/Living-area",
      element: <UnderCons />,
    },
    {
      link: "/Pooja-Room",
      element: <UnderCons />,
    },
    {
      link: "/Washroom",
      element: <UnderCons />,
    },
    {
      link: "/Down-Celling",
      element: <UnderCons />,
    },
    {
      link: "/Theater",
      element: <UnderCons />,
    },
    {
      link: "/Dining",
      element: <UnderCons />,
    },
    {
      link: "/Residential-Exterior",
      element: <UnderCons />,
    },
    {
      link: "/Commercial-Exterior",
      element: <UnderCons />,
    },
    {
      link: "/Classsical-Exterior",
      element: <UnderCons />,
    },
    {
      link: "/Offices",
      element: <UnderCons />,
    },
    {
      link: "/Restruants",
      element: <UnderCons />,
    },
    {
      link: "/Salons",
      element: <UnderCons />,
    },
    {
      link: "/2d-Planning",
      element: <UnderCons />,
    },
    {
      link: "/3D-Planning",
      element: <UnderCons />,
    },
    {
      link: "/TerraceGarden",
      element: <UnderCons />,
    },
    {
      link: "/Projects",
      element: <UnderCons />,
    },
    {
      link: "/Contact",
      element: <UnderCons />,
    },
  ];
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {routesarray.map((item): any => {
            return <Route path={item.link} element={item.element} />;
          })}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
