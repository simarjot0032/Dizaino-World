import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

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
      <AdminNavbar />
    </>
  );
}
