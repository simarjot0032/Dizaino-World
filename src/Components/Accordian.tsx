import { useState } from "react";
import "../Styles/Accordian.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

interface Props {
  question: string;
  answer: string;
}
export default function Accordian({ question, answer }: Props) {
  const [accordian, setaccordian] = useState(false);
  const handleaccordian = () => setaccordian(!accordian);
  return (
    <>
      <div className="accordian-box-container" onClick={handleaccordian}>
        <div className="accordian-question-box">
          <p className="accordian-question">{question}</p>
          <span className="sign">
            {accordian ? (
              <RiArrowDropUpLine color="white" size={25} />
            ) : (
              <RiArrowDropDownLine color="white" size={25} />
            )}
          </span>
        </div>
        <div className={accordian ? "accordian-answer" : "none"}>{answer}</div>
      </div>
    </>
  );
}
