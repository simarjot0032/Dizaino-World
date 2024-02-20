import { HiXMark } from "react-icons/hi2";
import "../Styles/Lightbox.css";
interface Props {
  imagelink: any;
  handlecross: any;
}
export default function Lightboximage({ imagelink, handlecross }: Props) {
  return (
    <>
      <div className="parent-container">
        <HiXMark
          size={25}
          color="white"
          className="lightbox-cross"
          onClick={handlecross}
        />
        <img src={imagelink} alt="image you clicked" className="lightbox-img" />
      </div>
    </>
  );
}
