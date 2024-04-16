import "@Styles/Admin/Login.css";
import { useEffect, useRef, useState } from "react";
import {
  Auth,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "src/Config/Firebase-config";
import { useNavigate } from "react-router-dom";
import Logo from "/icon.png";
import toast from "react-hot-toast";

export default function Login() {
  const [forget, setforget] = useState(false);
  const Handleforgetform = () => {
    setforget(!forget);
  };
  const navigate = useNavigate();
  const emailin = useRef<HTMLInputElement>(null);
  const passwordin = useRef<HTMLInputElement>(null);
  const Forgetemailref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (localStorage.getItem("userstatus") === "true") {
      navigate("/Admin");
    } else {
      navigate("/Admin-login");
    }
  }, [navigate]);
  const HandleSubmit = async (e: any) => {
    const credentials = { email: "", password: "" };
    e.preventDefault();
    if (emailin.current) {
      credentials.email = emailin?.current?.value;
    }
    if (passwordin.current) {
      credentials.password = passwordin.current.value;
    }
    console.log(credentials);
    const { email, password } = credentials;

    try {
      const userlogin = await signInWithEmailAndPassword(auth, email, password);

      toast.success("Logged In Sucessfully");
      navigate("/Admin");
    } catch (error) {
      console.log(error);
      navigate("/Admin-login");

      toast.error("Email and password does not match");
    }
  };
  const HandleForgetPassword = async (e: any) => {
    e.preventDefault();
    console.log(e);
    let Forgetemail = { email: "" };
    if (Forgetemailref.current) {
      Forgetemail.email = Forgetemailref.current?.value;
    }

    try {
      if (
        Forgetemail.email == "simarjot0032@gmail.com" ||
        Forgetemail.email == "hardeep.creation@gmail.com"
      ) {
        await sendPasswordResetEmail(auth, Forgetemail.email);
        toast.success("Password reset email sent successfully");
      } else {
        toast.error("Email address not found. Please try a different email.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Email address not found. Please try a different email.");
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? navigate("/Admin") : "";
    });
  });
  return (
    <>
      <div className="login-container">
        {!forget && (
          <>
            <div className="company-profile-login">
              <img src={Logo} alt="" className="login-page-logo" />
              <h2 className="company-profile-name">Dizaino-World</h2>
            </div>
            <div className="login-form-container">
              <h2 className="login-form-heading">Login</h2>
              <form action="" className="login-form" onSubmit={HandleSubmit}>
                <label htmlFor="admin-email" className="label">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="admin-email"
                  id="admin-email"
                  ref={emailin}
                />
                <label htmlFor="admin-password" className="label">
                  Password:
                </label>
                <input
                  type="password"
                  id="admin-password"
                  placeholder="Enter Your Password"
                  ref={passwordin}
                />
                <button type="submit" className="submitbtn">
                  Login
                </button>
                <p className="forget-password" onClick={Handleforgetform}>
                  Forget Password?
                </p>
              </form>
            </div>
            <div className="login-return">
              <p className="go-back-text">Go Back To Dizaino World</p>
            </div>
          </>
        )}
        {forget && (
          <div className="forget-password-form">
            <h2 className="forget-password-heading">Forget Password</h2>
            <form action="" className="forget" onSubmit={HandleForgetPassword}>
              <input
                type="email"
                placeholder="Enter Yor Email"
                className="admin-email"
                ref={Forgetemailref}
              />
              <button type="submit" className="forget-password-btn">
                Reset Password
              </button>
            </form>
            <p className="go-back-text-login" onClick={Handleforgetform}>
              Go Back To Login
            </p>
          </div>
        )}
      </div>
    </>
  );
}
