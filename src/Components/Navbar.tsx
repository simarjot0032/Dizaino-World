import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import Logo from "../assets/icon.png";
import { GrMenu } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from "./Dropdowncomponent";

export default function Navbar() {
  const [menuopen, setmenuopen] = useState(false);
  const [color, setcolor] = useState(false);
  const [interiordropdown, setinteriordropdown] = useState(false);
  const handlehoverandclick = () => {
    setinteriordropdown(!interiordropdown);
  };
  const dropdownforinterior = [
    {
      link: "/Bedroom",
      item: "Bedroom",
    },
    {
      link: "/Kitchen",
      item: "Kitchen",
    },
    {
      link: "/Living-area",
      item: "Living-Areas",
    },
    {
      link: "/Pooja-Room",
      item: "Pooja Room",
    },
    {
      link: "/Washroom",
      item: "Washroom",
    },
    {
      link: "/Down-Celling",
      item: "Down Celling",
    },
    {
      link: "/Theater",
      item: "Theater",
    },
    {
      link: "/Dining",
      item: "Dining",
    },
  ];
  function handleclick(): any {
    setmenuopen(!menuopen);
  }
  function closemenu() {
    setmenuopen(false);
  }
  function changenavcolor() {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  }
  window.addEventListener("scroll", changenavcolor);
  return (
    <>
      <div className={"navbar-container" + " " + (color ? "colorednav" : " ")}>
        <div className="left-navbar-container">
          <div className="logo-name">
            <img src={Logo} alt="" className="logo" />
            <span className="company-name">Dizaino World</span>
          </div>
          <div className="menu-icon-container">
            <GrMenu
              size={42}
              className="menu-icon"
              color="white"
              onClick={handleclick}
            />
          </div>
        </div>
        {/* menu */}
        <div
          className={menuopen ? "mobilemenu" : "rightlaptop-navbar-container"}
        >
          <div className="header-mobilemenu">
            <div className="logo-name">
              <img src={Logo} alt="" className="logo" />
              <span className="company-name">Dizaino World</span>
            </div>
            <RxCrossCircled
              size={35}
              color="white"
              className="cross-icon"
              onClick={handleclick}
            />
          </div>

          <Link to="" className="linktag-navbar">
            <li
              // (color ? "olivetext" : "")
              className="link-navbar link-navbar-with-bottom-animation"
              onClick={closemenu}
            >
              Home
            </li>
          </Link>
          {/* link having dropdown */}
          <div
            className="dropdown-menu"
            onMouseEnter={handlehoverandclick}
            onMouseLeave={handlehoverandclick}
            onClick={handlehoverandclick}
          >
            {/* link+icon+dropdown */}
            <div className="link-icon-dropdown">
              <li className="link-navbar noborder">Interior</li>
              <IoMdArrowDropdown size={25} color="white" />
            </div>
            {/* dropdown component */}
            <div className="dropdown-menu-component">
              {interiordropdown && (
                <Dropdown arrayfordropdown={dropdownforinterior} />
              )}
            </div>
          </div>
          <div className="dropdown-menu">
            <div className="link-icon-dropdown">
              <li className={"link-navbar noborder"}>Exterior</li>
              <IoMdArrowDropdown size={25} color="white" />
            </div>
            <div className="dropdown-menu-component">
              {/* <Dropdown arrayfordropdown={dropdownforinterior} /> */}
            </div>
          </div>
          <div className="dropdown-menu">
            <div className="link-icon-dropdown">
              <li className={"link-navbar noborder "} onClick={closemenu}>
                Commercial Inteior
              </li>
              <IoMdArrowDropdown size={25} color="white" />
            </div>
          </div>
          <div className="dropdown-menu">
            <div className="link-icon-dropdown">
              <li className={"link-navbar noborder"} onClick={closemenu}>
                Planning
              </li>
              <IoMdArrowDropdown size={25} color="white" />
            </div>
          </div>
          <Link
            to="/TerraceGarden"
            className="linktag-navbar "
            onClick={closemenu}
          >
            <li
              className="link-navbar link-navbar-with-bottom-animation"
              onClick={handleclick}
            >
              Terrance Garden
            </li>
          </Link>
          <Link to="/Projects" className="linktag-navbar">
            <li className="link-navbar link-navbar-with-bottom-animation">
              Projects
            </li>
          </Link>
          <Link to="/Contact" className="linktag-navbar " onClick={closemenu}>
            <li
              className={"link-navbar link-navbar-with-bottom-animation"}
              onClick={handleclick}
            >
              Contact us
            </li>
          </Link>
        </div>
      </div>
    </>
  );
}
