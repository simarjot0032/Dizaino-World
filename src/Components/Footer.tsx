import "../Styles/Footer.css";
import { RiHome6Line } from "react-icons/ri";
import footerimg from "../assets/footer.jpeg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
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
              out to us today, and together, we’ll create the perfect space for
              you.
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
    </>
  );
}
