import Working from "@Assets/man-working-at-computer-vector-3789594-removebg-preview.png";
import Clock from "@Assets/Alarm_Clock_Animation_High_Res.png";
import "@Styles/Undercons.css";
import { Link } from "react-router-dom";
export default function UnderCons() {
  return (
    <>
      <div className="App">
        <div className="heading"></div>
        <div className="secondary">404 WEBSITE Under Construction</div>
        <img src={Working} alt="" className="img" />
        <img src={Clock} alt="" className="imgclock" />
        <h2 className="heading-launch">Launching Soon!</h2>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button>Back to home</button>
        </Link>
      </div>
      <div className="footer">Simarjot Singh &copy; 2023</div>
    </>
  );
}
