import "@Styles/Admin/Admin.css";
import AdminNavbar from "./AdminNavbar";
export default function AdminHome() {
  const useremailfull = localStorage.getItem("username");
  const useremailarray = useremailfull?.split("@");
  const username = useremailarray ? useremailarray[0] : "";
  return (
    <>
      <AdminNavbar />
      <div className="admin-home-container">
        <div className="admin-user-welcome-container">
          <p className="welcome-admin-user">Welcome Admin!</p>
        </div>
      </div>
    </>
  );
}
