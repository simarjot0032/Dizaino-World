import "@Styles/Admin/Admin.css";
import AdminNavbar from "./AdminSidebar";
import Logo from "/icon.png";
import { useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "src/Config/Firebase-config";
export default function AdminHome() {
  const useremailfull = localStorage.getItem("username");
  const useremailarray = useremailfull?.split("@");
  const username = useremailarray ? useremailarray[0] : "";
  const navigate = useNavigate();
  const HandleLogOut = () => {
    signOut(auth);
    navigate("/Admin-login");
    toast.success("Logged Out");
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
                  <IoLogOut color="white" size={30} /> LogOut
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
