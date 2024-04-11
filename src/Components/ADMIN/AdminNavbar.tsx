import "@Styles/Admin/AdminNavbar.css";
import { useState } from "react";
import Logo from "/icon.png";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";
export default function AdminNavbar() {
  const [navscroll, setnavscroll] = useState(false);
  const Handlescroll = (): any => {
    window.scrollY > 80 ? setnavscroll(true) : setnavscroll(false);
  };
  window.addEventListener("scroll", Handlescroll);
  return (
    <>
      <div
        className={
          navscroll
            ? " admin-navbar-container admin-navbar-container-scrolled"
            : "admin-navbar-container"
        }
      >
        <div className="left-admin-navbar-container">
          <img src={Logo} alt="" className="logo" />

          <h2 className="admin-navbar-heading">DW-ADMIN PANEL </h2>
        </div>
        <div className="admin-navbar-right-container">
          <GrMenu size={42} className="admin-menu-icon" color="white" />
          <div className="menu-container">
            <div className="admin-menu-widgets">
              <h2 className="admin-menu-heading">Admin Menu</h2>
            </div>
            <div className="admin-menu">
              <Link to={"/Admin"} className="linktag-admin">
                <li className="link-admin">Admin Home</li>
              </Link>
              <Link to={"/Contact Form"} className="linktag-admin">
                <li className="link-admin">Contact Form </li>
              </Link>
              <Link to={"/ProjectCRUD"} className="linktag-admin">
                <li className="link-admin">Project</li>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
