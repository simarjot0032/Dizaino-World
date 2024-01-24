import { Link } from "react-router-dom";
import "../Styles/Dropdown.css";
interface Props {
  arrayfordropdown: any;
}
export default function Interiordropdown({ arrayfordropdown }: Props) {
  return (
    <>
      <div className="dropdown-container">
        {arrayfordropdown.map((item: any): any => {
          return (
            <Link to={item.link} className="linktag-dropdown">
              <li className="dropdown-link">{item.item}</li>
            </Link>
          );
        })}
      </div>
    </>
  );
}
