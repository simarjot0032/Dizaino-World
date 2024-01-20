import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import Logo from "../assets/icon.png";
import { GrMenu } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";

export default function Navbar() {
  const [menuopen, setmenuopen] = useState(true);
  function handleclick(): any {
    setmenuopen(!menuopen);
  }
  return (
    <>
      <div className="navbar-container">
        <div className="left-navbar-container">
          <div className="logo-name">
            <img src={Logo} alt="" className="logo" />
            <span className="company-name">Dizaino World</span>
          </div>
          <div className="menu-icon-container">
            <GrMenu size={42} className="menu-icon" onClick={handleclick} />
          </div>
        </div>
        <div className={menuopen ? "hiddenmenu" : "right-navbar-container"}>
          <RxCrossCircled
            size={35}
            color="white"
            className="cross-icon"
            onClick={handleclick}
          />

          <Link to="" className="linktag-navbar">
            <li className="link-navbar" onClick={handleclick}>
              Home
            </li>
          </Link>
          <Link to="/Interior" className="linktag-navbar">
            <li className="link-navbar">Interior</li>
          </Link>
          <li className="link-navbar">Exterior</li>
          <li className="link-navbar">Commercial Inteior</li>
          <li className="link-navbar">Planning</li>
          <Link to="/TerraceGarden" className="linktag-navbar">
            <li className="link-navbar" onClick={handleclick}>
              Terrance Garden
            </li>
          </Link>
          <Link to="/Contact" className="linktag-navbar">
            <li className="link-navbar" onClick={handleclick}>
              Contact us
            </li>
          </Link>
        </div>
      </div>
    </>
  );
}
