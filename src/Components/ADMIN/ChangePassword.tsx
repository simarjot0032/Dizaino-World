import AdminSidebar from "@Components/ADMIN/AdminSidebar";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "@Styles/Admin/ChangePassword.css";
import { IoLogOut } from "react-icons/io5";
import { onAuthStateChanged, signOut, updatePassword } from "firebase/auth";
import { auth } from "src/Config/Firebase-config";
import toast from "react-hot-toast";

export default function ChangePassword() {
  const passwordref = useRef<HTMLInputElement>(null);
  const passwordconfirmref = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
      } else {
        navigate("/Admin-login");
      }
    });
  }, []);
  const HandleLogOut = () => {
    signOut(auth);

    toast.success("User Logged Out");
  };
  const HandleChangePassword = (e: any) => {
    e.preventDefault();
    const useremail = auth.currentUser;
    if (!useremail) return;
    let passwordobj = {
      password: "",
      confirmedpassword: "",
    };
    let { password, confirmedpassword } = passwordobj;
    if (passwordref.current) {
      password = passwordref.current?.value;
    }
    if (passwordconfirmref.current) {
      confirmedpassword = passwordconfirmref.current.value;
    }
    if (password === confirmedpassword) {
      try {
        updatePassword(useremail, password);
        signOut(auth);
        toast.success("Password Updated Please Login again");
      } catch (e) {
        console.log(e);
        toast.error("password doesnot match");
      }
    } else {
      console.log("not");
      toast.error("password doesnot match");
    }
  };
  return (
    <>
      <div className="admin-main-container">
        <AdminSidebar />
        <div className="change-password-container">
          <div className="change-password-header">
            <h2 className="change-password-heading">Change Password</h2>
            <button className="log-out" onClick={HandleLogOut}>
              <IoLogOut color="white" size={30} /> LogOut
            </button>
          </div>
          <div className="change-password-content-container">
            <form
              action=""
              className="change-password-form"
              onSubmit={HandleChangePassword}
            >
              <label htmlFor="new" className="label">
                New Password
              </label>
              <input type="password" name="" id="new" ref={passwordref} />
              <label htmlFor="confirm" className="label">
                Confirm Password
              </label>
              <input
                type="password"
                name=""
                id="confirm"
                ref={passwordconfirmref}
              />
              <button type="submit" className="submitbtn">
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
