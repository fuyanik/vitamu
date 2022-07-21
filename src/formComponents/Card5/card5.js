import AnswerButtons from "../components/AnswerButtons/answerButtons";
import "./card5.css";
import { useState } from "react";
import "../components/AnswerButtons/answerButtons.css";

const Card5 = () => { 

  const [isShowInput, setİsShowInput] = useState(false);
 
  const [isSelect1, setIsSelect1] = useState(false);
  const [isSelect2, setIsSelect2] = useState(false);
  const [isSelect3, setIsSelect3] = useState(false);
  const [isSelect4, setIsSelect4] = useState(false);
  const [isSelect5, setIsSelect5] = useState(false);
  const [isSelect6, setIsSelect6] = useState(false);


    return (
      <div className="card5">
        <div className="card5-main">
         
          <div className="card5-main-texts">
            <p>Do you have any of these?</p>
            <p>You may choose multiple options, or you may add specific notes/feelings/symptoms while choosing other.</p>
          </div>

          <div className="card5-main-buttons">
            <AnswerButtons
            text={"Family history of cancer"}
            handleClick={() => { 
               setIsSelect1(!isSelect1);
            }}
            className={`${isSelect1 ? "answer-buttons-clicked" : "answer-buttons"}`}
            />
           
            <AnswerButtons
            text={"Breast pain"}
            handleClick={() => { 
              setIsSelect2(!isSelect2);
           }}
           className={`${isSelect2 ? "answer-buttons-clicked" : "answer-buttons"}`}
            />
           
            <AnswerButtons
            text={"Palpable lump"}
            handleClick={() => { 
              setIsSelect3(!isSelect3);
           }}
           className={`${isSelect3 ? "answer-buttons-clicked" : "answer-buttons"}`}
            />
           
            <AnswerButtons
            text={"Genetic mutation"}
            handleClick={() => { 
              setIsSelect4(!isSelect4);
           }}
           className={`${isSelect4 ? "answer-buttons-clicked" : "answer-buttons"}`}
            />
           
            <AnswerButtons
            text={"I gut feeling"}
            handleClick={() => { 
              setIsSelect5(!isSelect5);
           }}
           className={`${isSelect5 ? "answer-buttons-clicked" : "answer-buttons"}`}
            />
           
            <AnswerButtons
            text={"Other"}
            handleClick={() => { 
              setIsSelect6(!isSelect6);
              setİsShowInput(!isShowInput);
           }}
           className={`${isSelect6 ? "answer-buttons-clicked" : "answer-buttons"}`}
           

            />
           
          </div>

        { isShowInput && <input placeholder="Specify other..." className="nameİnput"/>}


        </div>
      </div>
    );

}

export default Card5;