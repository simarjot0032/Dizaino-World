import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "@Styles/Admin/Login.css";
import { useRef } from "react";
import toast from "react-hot-toast";
import { auth } from "src/Config/Firebase-config";

export default function ResetPass() {
  const auth = getAuth();
  const Forgetemailref = useRef<HTMLInputElement>(null);
  const HandleForgetPassword = async (e: any) => {
    e.preventDefault();
    let Forgetemail = { email: "" };
    if (Forgetemailref.current) {
      Forgetemail.email = Forgetemailref.current?.value;
    }
    console.log(Forgetemail.email);
    try {
      await sendPasswordResetEmail(auth, Forgetemail.email);
      toast.success("Password reset email sent successfully");
    } catch (error) {
      console.error(error);
      toast.error("Email address not found. Please try a different email.");
    }
  };

  return (
    <>
      <div className="login-container">
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
          {/* <p className="go-back-text-login" onClick={Handleforgetform}>
          Go Back To Login
        </p> */}
        </div>
      </div>
    </>
  );
}
