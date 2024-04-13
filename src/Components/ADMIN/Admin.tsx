import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminSidebar";
import AdminHome from "./AdminHome";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "src/Config/Firebase-config";

export default function Admin() {
  const authentication = localStorage.getItem("authentication");
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        navigate("/Admin");
      } else {
        navigate("/Admin-login");
      }
    });
  }, []);
  return (
    <>
      <AdminHome />
    </>
  );
}
