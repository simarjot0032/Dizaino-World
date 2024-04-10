import "@Styles/Admin/Login.css";
import { useEffect, useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/Config/Firebase-config";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const emailin = useRef<HTMLInputElement>(null);
  const passwordin = useRef<HTMLInputElement>(null);
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
      localStorage.setItem("authentication", "true");
      navigate("/Admin");
    } catch (error) {
      console.log(error);
      navigate("/Admin-login");
      localStorage.setItem("authentication", "false");
    }
  };
  return (
    <>
      <div className="login-container">
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
          </form>
        </div>
      </div>
    </>
  );
}
