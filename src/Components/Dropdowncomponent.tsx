import { Link } from "react-router-dom";
import "@Styles/Dropdown.css";
interface Props {
  arrayfordropdown: any;
  handleclick(): any;
}
export default function Interiordropdown({
  arrayfordropdown,
  handleclick,
}: Props) {
  return (
    <>
      <div className="dropdown-container">
        {arrayfordropdown.map((item: any): any => {
          return (
            <Link to={item.link} className="linktag-dropdown">
              <li className="dropdown-link" onClick={handleclick}>
                {item.item}
              </li>
            </Link>
          );
        })}
      </div>
    </>
  );
}
