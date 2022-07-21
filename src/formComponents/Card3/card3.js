import AnswerButtons from "../components/AnswerButtons/answerButtons";
import "./card3.css";
import { useState } from "react";
const Card3 = () => { 

  const [isSelect1, setIsSelect1] = useState(false);
  const [isSelect2, setIsSelect2] = useState(false);
  const [isSelect3, setIsSelect3] = useState(false);
  const [isSelect4, setIsSelect4] = useState(false);
 


    return (
      <div className="card3">
        <div className="card3-main">
         
          <div className="card3-main-texts">
            <p>Which of the following applies to you?</p>
            <p>You may choose more than one.</p>
          </div>

          <div className="card3-main-buttons">
            <AnswerButtons
            text={"I got a mammogram screening."}
            handleClick={() => { 
              setIsSelect1(!isSelect1);
           }}
           className={`${isSelect1 ? "answer-buttons-clicked" : "answer-buttons"}`}
            />
           
            <AnswerButtons
            text={"I got a ultrasound screening."}
            handleClick={() => { 
              setIsSelect2(!isSelect2);
           }}
           className={`${isSelect2 ? "answer-buttons-clicked" : "answer-buttons"}`}
            />
           
            <AnswerButtons
            text={"I got a breast MRI."}
            handleClick={() => { 
              setIsSelect3(!isSelect3);
           }}
           className={`${isSelect3 ? "answer-buttons-clicked" : "answer-buttons"}`}
            />
           
            <AnswerButtons
            text={"ı had a biopsy."}
            handleClick={() => { 
              setIsSelect4(!isSelect4);
           }}
           className={`${isSelect4 ? "answer-buttons-clicked" : "answer-buttons"}`}
            />
           
          </div>


        </div>
      </div>
    );

}

export default Card3;