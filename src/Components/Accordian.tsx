import { useState } from "react";
import "../Styles/Accordian.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

interface Props {
  objectforquestionandanswer: any;
}
export default function Accordian({ objectforquestionandanswer }: Props) {
  const [accordian, setaccordian] = useState(false);
  const handleaccordian = () => setaccordian(!accordian);
  return (
    <>
      <div className="accordian-box-container">
        <div className="accordian-question-box" onClick={handleaccordian}>
          <p className="accordian-question">
            {objectforquestionandanswer.question}
          </p>
          <span className="sign">
            {accordian ? (
              <RiArrowDropUpLine color="var(--primarycolor)" size={30} />
            ) : (
              <RiArrowDropDownLine color="var(--primarycolor)" size={30} />
            )}
          </span>
        </div>
        <div className={accordian ? "accordian-answer" : "none"}>
          {objectforquestionandanswer.answer}
        </div>
      </div>
    </>
  );
}
