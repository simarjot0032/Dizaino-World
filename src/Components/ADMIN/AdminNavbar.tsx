import "@Styles/Admin/AdminNavbar.css";
import { useState } from "react";
import Logo from "/icon.png";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
export default function AdminNavbar() {
  const [navscroll, setnavscroll] = useState(false);
  const [mobilemenu, setmobilemenu] = useState(false);
  const Handlescroll = (): any => {
    window.scrollY > 80 ? setnavscroll(true) : setnavscroll(false);
  };
  const Handleclick = () => {
    setmobilemenu(!mobilemenu);
  };
  window.addEventListener("scroll", Handlescroll);
  return (
    <>
      <div
        className={
          navscroll
            ? "admin-navbar-container      admin-navbar-container-scrolled"
            : "admin-navbar-container"
        }
      >
        <div className="left-admin-navbar-container">
          <img src={Logo} alt="" className="logo" />

          <h2 className="admin-navbar-heading">DW-ADMIN PANEL </h2>
        </div>
        <div className="admin-navbar-right-container">
          <GrMenu
            size={42}
            className="admin-menu-icon"
            color="white"
            onClick={Handleclick}
          />
          <div className={mobilemenu ? "menu-container" : "laptopmenu"}>
            <div className="admin-menu-widgets">
              <h2 className="admin-menu-heading">Admin Menu</h2>
              <RxCrossCircled
                size={35}
                color="white"
                className="cross-icon"
                onClick={Handleclick}
              />
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
