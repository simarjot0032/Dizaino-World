import "@Styles/Admin/AdminNavbar.css";
import { useState } from "react";
import Logo from "/icon.png";
import { GrMenu } from "react-icons/gr";
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
        </div>
      </div>
    </>
  );
}
