import "@Styles/Admin/AdminSidebar.css";
import { useState } from "react";
import Logo from "/icon.png";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
interface Props {
  activeclass?: string;
}
export default function AdminNavbar({ activeclass }: Props) {
  const [mobilemenu, setmobilemenu] = useState(false);

  const Handleclick = () => {
    setmobilemenu(!mobilemenu);
  };

  return (
    <>
      <div className={"admin-sidebar-container"}>
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
                <li
                  className={
                    activeclass === "AdminHome"
                      ? "link-admin AdminHome"
                      : "link-admin "
                  }
                >
                  Admin Home
                </li>
              </Link>
              <Link to={"/Contact Form"} className="linktag-admin">
                <li
                  className={
                    activeclass === "AdminContact"
                      ? "link-admin AdminContact"
                      : "link-admin "
                  }
                >
                  Contact Form{" "}
                </li>
              </Link>
              <Link to={"/ProjectUpload"} className="linktag-admin">
                <li
                  className={
                    activeclass === "AdminProject"
                      ? "link-admin AdminProject"
                      : "link-admin "
                  }
                >
                  Project
                </li>
              </Link>
              <Link to="/ChangePassword" className="linktag-admin">
                <li
                  className={
                    activeclass === "AdminChange"
                      ? "link-admin AdminChange"
                      : "link-admin "
                  }
                >
                  Change Password
                </li>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
