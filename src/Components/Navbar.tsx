import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@Styles/Navbar.css";
import Logo from "/icon.png";
import { GrMenu } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from "@Components/Dropdowncomponent";
import "@Data/Naviagation";
import {
  dropdownforinterior,
  arrayforexterior,
  arrayforcommercialinterior,
  arrayforplanning,
} from "@Data/Naviagation";

export default function Navbar() {
  const [menuopen, setmenuopen] = useState(false);
  const [color, setcolor] = useState(false);
  const [interiordropdown, setinteriordropdown] = useState(false);
  const [exteriordropdown, setexteriordropdown] = useState(false);
  const [Commercialinteriordropdown, setcommercialdropdown] = useState(false);
  const [dropdownforplanning, setdropdownforplanning] = useState(false);
  function changenavcolor() {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  }
  function handleclick(): any {
    setmenuopen(!menuopen);
  }
  function closemenu() {
    setmenuopen(false);
  }
  const handlehoverandclick = () => {
    setinteriordropdown(!interiordropdown);
    setcommercialdropdown(false);
    setdropdownforplanning(false);
    setexteriordropdown(false);
  };
  const handlehoverandclickforexterior = () => {
    setexteriordropdown(!exteriordropdown);
    setinteriordropdown(false);
    setcommercialdropdown(false);
    setdropdownforplanning(false);
  };
  const handlehoverandclickforcommercialinterior = () => {
    setcommercialdropdown(!Commercialinteriordropdown);
    setexteriordropdown(false);
    setinteriordropdown(false);

    setdropdownforplanning(false);
  };
  const handlehoverandclickforplanning = () => {
    setdropdownforplanning(!dropdownforplanning);
    setexteriordropdown(false);
    setinteriordropdown(false);
    setcommercialdropdown(false);
  };

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

          <Link to="/" className="linktag-navbar">
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
            onMouseEnter={menuopen ? undefined : handlehoverandclick}
            onMouseLeave={menuopen ? undefined : handlehoverandclick}
            onClick={menuopen ? handlehoverandclick : undefined}
          >
            {/* link+icon+dropdown */}
            <div className="link-icon-dropdown">
              <li className="link-navbar noborder">Interior</li>
              <IoMdArrowDropdown size={25} color="white" />
            </div>
            {/* dropdown component */}
            <div className="dropdown-menu-component">
              {interiordropdown && (
                <Dropdown
                  arrayfordropdown={dropdownforinterior}
                  handleclick={closemenu}
                />
              )}
            </div>
          </div>
          <div
            className="dropdown-menu"
            onMouseEnter={menuopen ? undefined : handlehoverandclickforexterior}
            onMouseLeave={menuopen ? undefined : handlehoverandclickforexterior}
            onClick={menuopen ? handlehoverandclickforexterior : undefined}
          >
            <div className="link-icon-dropdown">
              <li className={"link-navbar noborder"}>Exterior</li>
              <IoMdArrowDropdown size={25} color="white" />
            </div>
            <div className="dropdown-menu-component">
              {exteriordropdown && (
                <Dropdown
                  arrayfordropdown={arrayforexterior}
                  handleclick={closemenu}
                />
              )}
            </div>
          </div>
          {/* <div
            className="dropdown-menu"
            onMouseEnter={
              menuopen ? undefined : handlehoverandclickforcommercialinterior
            }
            onMouseLeave={
              menuopen ? undefined : handlehoverandclickforcommercialinterior
            }
            onClick={
              menuopen ? handlehoverandclickforcommercialinterior : undefined
            }
          >
            <div className="link-icon-dropdown">
              <li className={"link-navbar noborder "}>Commercial Inteior</li>
              <IoMdArrowDropdown size={25} color="white" />
            </div>
            <div className="dropdown-menu-component">
              {Commercialinteriordropdown && (
                <Dropdown
                  arrayfordropdown={arrayforcommercialinterior}
                  handleclick={closemenu}
                />
              )}
            </div>
          </div> */}
          <Link
            to={"/CommercialInterior"}
            className="linktag-navbar"
            onClick={closemenu}
          >
            <li className="link-navbar link-navbar-with-bottom-animation">
              Commercial Interior
            </li>
          </Link>
          <div
            className="dropdown-menu"
            onMouseEnter={menuopen ? undefined : handlehoverandclickforplanning}
            onMouseLeave={menuopen ? undefined : handlehoverandclickforplanning}
            onClick={menuopen ? handlehoverandclickforplanning : undefined}
          >
            <div className="link-icon-dropdown">
              <li className={"link-navbar noborder"}>Planning</li>
              <IoMdArrowDropdown size={25} color="white" />
            </div>
            <div className="dropdown-menu-component">
              {dropdownforplanning && (
                <Dropdown
                  arrayfordropdown={arrayforplanning}
                  handleclick={closemenu}
                />
              )}
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
