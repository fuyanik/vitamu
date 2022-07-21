import AnswerButtons from "../components/AnswerButtons/answerButtons";
import "./card4.css";
import { useState } from "react";

const Card4 = () => { 

   const [isSelect1, SetİsSelect1] = useState(false);
   const [isSelect2, SetİsSelect2] = useState(false);
   const [isSelect3, SetİsSelect3] = useState(false);
   const [isSelect4a, SetİsSelect4a] = useState(false);
   const [isSelect4b, SetİsSelect4b] = useState(false);
   const [isSelect4c, SetİsSelect4c] = useState(false);
  
  
  
    return (
      <div className="card4">
        <div className="card4-main">
         
          <div className="card4-main-texts">
            <p>Which one is your Bi-rads score?</p>
            <p>Please choose the most recent score.</p>
          </div>

          <div className="card4-main-buttons">
         
             <div className={` ${isSelect1 ? "answer-buttons-clicked" : "answer-buttons"}`}
              onClick={() => { SetİsSelect1(!isSelect1); SetİsSelect2(false); SetİsSelect3(false); SetİsSelect4a(false); SetİsSelect4b(false); SetİsSelect4c(false); }}>
              1
             </div>
              
           

             <div className={` ${isSelect2 ? "answer-buttons-clicked" : "answer-buttons"}`}
             onClick={() => { SetİsSelect2(!isSelect2); SetİsSelect1(false); SetİsSelect3(false); SetİsSelect4a(false); SetİsSelect4b(false); SetİsSelect4c(false); }}>
             
              2
             </div>
             
             <div className={` ${isSelect3 ? "answer-buttons-clicked" : "answer-buttons"}`} 
             onClick={() => { SetİsSelect3(!isSelect3); SetİsSelect1(false); SetİsSelect2(false); SetİsSelect4a(false); SetİsSelect4b(false); SetİsSelect4c(false); }}>
             
              3
             </div>
             
             <div className={` ${isSelect4a ? "answer-buttons-clicked" : "answer-buttons"}`} 
             onClick={() => { SetİsSelect4a(!isSelect4a); SetİsSelect1(false); SetİsSelect2(false); SetİsSelect3(false); SetİsSelect4b(false); SetİsSelect4c(false); }}>
             
              4A
             </div>
           
             <div className={` ${isSelect4b ? "answer-buttons-clicked" : "answer-buttons"}`}
             onClick={() => { SetİsSelect4b(!isSelect4b); SetİsSelect1(false); SetİsSelect2(false); SetİsSelect3(false); SetİsSelect4a(false); SetİsSelect4c(false); }}>
             
              4B
             </div>

             <div className={` ${isSelect4c ? "answer-buttons-clicked" : "answer-buttons"}`}
             onClick={() => { SetİsSelect4c(!isSelect4c); SetİsSelect1(false); SetİsSelect2(false); SetİsSelect3(false); SetİsSelect4a(false); SetİsSelect4b(false); }}>
             
              4C
             </div>

          
          
          
          
          </div>

           
         


        </div>
      </div>
    );

}

export default Card4;