import "@Styles/Admin/Admin.css";
import AdminNavbar from "./AdminSidebar";
import Logo from "/icon.png";
import { useNavigate } from "react-router-dom";
export default function AdminHome() {
  const useremailfull = localStorage.getItem("username");
  const useremailarray = useremailfull?.split("@");
  const username = useremailarray ? useremailarray[0] : "";
  const navigate = useNavigate();
  const HandleLogOut = () => {
    localStorage.setItem("authentication", "false");
    localStorage.setItem("username", "");
    navigate("/Admin-login");
  };
  return (
    <>
      <div className="admin-main-container">
        <AdminNavbar />
        <div className="admin-home-container">
          <div className="admin-user-welcome-container">
            <p className="welcome-admin-user">Welcome Admin!</p>
          </div>
          <div className="admin-home-content-container">
            <img src={Logo} alt="" className="admin-home-logo" />
            <div className="admin-home-content">
              <h1 className="admin-home-heading">Dizaino World</h1>
              <p className="current-user">
                <span className="current-user-heading">
                  Currently Logged User:-
                </span>
                {username}
              </p>
              <p className="current-user">
                <span className="current-user-heading">Mail-Id:</span>
                {useremailfull}
              </p>
              <div className="log-out-btn-container">
                <button className="log-out" onClick={HandleLogOut}>
                  LogOut
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
