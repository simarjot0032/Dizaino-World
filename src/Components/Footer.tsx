import "@Styles/Footer.css";
import { RiHome6Line } from "react-icons/ri";
import footerimg from "@Assets/footer.jpeg";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { FaMailBulk } from "react-icons/fa";
import { useRef } from "react";
import toast from "react-hot-toast";
export default function Footer() {
  const fnameref = useRef<HTMLInputElement>(null);
  const lnameref = useRef<HTMLInputElement>(null);
  const phnumberref = useRef<HTMLInputElement>(null);
  const emailref = useRef<HTMLInputElement>(null);
  const HandleContactSubmit = async (e: any) => {
    e.preventDefault();
    if (
      fnameref.current?.value === "" ||
      lnameref.current?.value === "" ||
      phnumberref.current?.value === "" ||
      emailref.current?.value === ""
    ) {
      toast.error("enter the details properly");
    }
    const userdetails = {
      fname: "",
      lname: "",
      phnumber: "",
      email: "",
    };
    if (fnameref.current) {
      userdetails.fname = fnameref.current.value;
    }
    if (lnameref.current) {
      userdetails.lname = lnameref.current.value;
    }
    if (phnumberref.current) {
      userdetails.phnumber = phnumberref.current.value;
    }
    if (emailref.current) {
      userdetails.email = emailref.current.value;
    }
    const { fname, lname, phnumber, email } = userdetails;

    const fetchfromfire = await fetch(
      "https://dizainoworld-f1a6d-default-rtdb.firebaseio.com/contactForm.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify({ fname, lname, phnumber, email }),
      }
    );
    if (fetchfromfire) {
      toast.success("Form Submitted");
      e.target.reset();
    } else {
      toast.error("Try Again");
    }
  };
  return (
    <>
      <div className="main-footer-container">
        <div className="contact-form-container">
          <div className="contact-form-header"></div>
          <div className="contact-form-content-container">
            <div className="contact-form-left-container">
              <h2 className="contact-form-heading">
                Lets Build Together A Great Project
              </h2>
              <div className="callus-container">
                <h3 className="contact-heading">
                  <IoMdCall size={25} />
                  Call Us:
                </h3>
                <p className="call-content">9781905936</p>
                <p className="call-content">9814747478</p>
              </div>
              <div className="mail-container">
                <h3 className="contact-heading">
                  <FaMailBulk size={25} />
                  Mail Us:
                </h3>
                <p className="mail-content">hardeep.creation@gamil.com</p>
              </div>
            </div>
            <div className="contact-form-right-container">
              <form
                action=""
                className="contact-form"
                onSubmit={HandleContactSubmit}
                method="POST"
              >
                <label htmlFor="name" className="label">
                  Your Name
                </label>
                <div className="name-container">
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder="First Name"
                    ref={fnameref}
                    className="input"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name"
                    ref={lnameref}
                    className="input"
                  />
                </div>
                <label htmlFor="phnumber" className="label">
                  Your Phone Number
                </label>
                <input
                  type="number"
                  name=""
                  id="phnumber"
                  placeholder="Phone Number"
                  ref={phnumberref}
                  className="input"
                />
                <label htmlFor="cemail" className="label">
                  Your Email
                </label>
                <input
                  type="email"
                  name=""
                  id="cemail"
                  placeholder="Email Id"
                  ref={emailref}
                  className="input"
                />
                <button type="submit" className="submitbtn contactbtn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-header">
            <h2 className="footer-heading">
              Sculpting Interiors & Exteriors <RiHome6Line size={55} />
            </h2>

            <button className="getintouch-btn">Get In Touch</button>
          </div>
          <div className="footer-img"></div>
          <div className="footer-content-container">
            <div className="footer-content-left">
              <div className="left-footer-heading">Get In Touch</div>
              <p className="left-footer-content">
                We’d love to hear from you and start a conversation about your
                next design project. Whether it’s your dream home or a dynamic
                workspace, let’s connect and turn your ideas into reality. Reach
                out to us today, and together, we’ll create the perfect space
                for you.
              </p>
            </div>
            <div className="footer-content-center">
              <Link to="/" className="linktag-footer">
                <li className="link-footer">Home</li>
              </Link>
              <Link to="Projects" className="linktag-footer">
                <li className="link-footer">Projects</li>
              </Link>
              <Link to="/Contact" className="linktag-footer">
                <li className="link-footer">Contact-us</li>
              </Link>
            </div>
            <div className="footer-content-right">
              <Link to="" className="linktag-footer">
                <li className="link-footer">Facebook</li>
              </Link>
              <Link to="" className="linktag-footer">
                <li className="link-footer">Instagram</li>
              </Link>
              <Link to="" className="linktag-footer">
                <li className="link-footer">Mail us</li>
              </Link>
              <Link to="" className="linktag-footer">
                <li className="link-footer">LinkedIn</li>
              </Link>
              <Link to="" className="linktag-footer">
                <li className="link-footer">Twitter</li>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
