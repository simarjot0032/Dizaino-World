import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminSidebar";
import AdminHome from "./AdminHome";

export default function Admin() {
  const authentication = localStorage.getItem("authentication");
  const navigate = useNavigate();

  useEffect(() => {
    if (authentication === "true") {
      navigate("/Admin");
    } else {
      navigate("/Admin-login");
    }
  }, [navigate]);
  return (
    <>
      <AdminHome />
    </>
  );
}
